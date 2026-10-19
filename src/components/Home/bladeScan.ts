/*
 * The hero stage: a laser tracker sweeps a turbine blade on a turntable and
 * colors each sampled point by its deviation from the nominal CAD wireframe.
 * Canvas 2D only. The readouts are sample data.
 *
 * createBladeScan runs in an effect. It pauses when the stage leaves the
 * viewport or the tab is hidden, draws one finished still under reduced
 * motion, and destroy() removes every listener, observer, and frame callback.
 */
import {clamp, isDarkTheme, lerp, mix, parseColor, reducedMotionQuery, onMotionChange, rgba, token, type RGBA} from './runtime';

export type ScanHud = {
  readonly x: HTMLElement | null;
  readonly y: HTMLElement | null;
  readonly z: HTMLElement | null;
  readonly sweep: HTMLElement | null;
  readonly points: HTMLElement | null;
};

export type BladeScan = {
  /** Re-reads the theme tokens and redraws; call after the color mode changes. */
  restyle(): void;
  destroy(): void;
};

type Point3 = [number, number, number];
type Phase = {mode: number; p: number; ys: number};
type Colors = {
  dark: boolean;
  stops: RGBA[];
  beam: string;
  beamGlow: string;
  beamHot: string;
  plane: string;
  planeEdge: string;
  cont: string;
  contGlow: string;
  floor: string;
  floorSoft: string;
  pool: string;
  wire: string;
  body: string;
  leg: string;
  edge: string;
  led: string;
  font: string;
};

const TRANSPARENT = 'rgba(0,0,0,0)';

export function createBladeScan(
  stage: HTMLElement,
  canvas: HTMLCanvasElement,
  hud: ScanHud,
  className: {readonly dragging: string},
): BladeScan | null {
  const context = canvas.getContext('2d');
  if (!context) return null;
  const ctx: CanvasRenderingContext2D = context;
  const RM = reducedMotionQuery();

  // Geometry in chord units: a NACA-4-style airfoil lofted along the span with taper and twist.
  const SPAN = 2.1, PT = 0.12, DL = 0.46, SXL = 0.6, AX = 0.78, AZ = 0.47, SKEW = 0.4, PP = 0.4;
  const YMIN = -PT - DL, YMAX = SPAN, YMID = (YMIN + YMAX) / 2;
  const chordAt = (s: number) => 1 - 0.38 * s;
  const cambAt = (s: number) => 0.135 - 0.06 * s;
  const thkAt = (s: number) => 0.2 - 0.1 * s;
  const twistAt = (s: number) => -0.52 + 1.15 * Math.pow(s, 1.1);
  function wAt(d: number) {
    const x = (3 * d) / DL + 0.25;
    const tri = 1 - 2 * Math.abs(x - Math.floor(x) - 0.5);
    return 0.19 - 0.06 * (d / DL) + 0.055 * tri;
  }
  const tmp: [number, number] = [0, 0];
  function foil(m: number, t: number, u: number, out: [number, number]) {
    const x = 0.5 * (1 + Math.cos(u * 2 * Math.PI));
    const up = u < 0.5;
    const yt = 5 * t * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1036 * x * x * x * x);
    let yc: number, dy: number;
    if (x < PP) {
      yc = (m / (PP * PP)) * (2 * PP * x - x * x);
      dy = ((2 * m) / (PP * PP)) * (PP - x);
    } else {
      yc = (m / ((1 - PP) * (1 - PP))) * (1 - 2 * PP + 2 * PP * x - x * x);
      dy = ((2 * m) / ((1 - PP) * (1 - PP))) * (PP - x);
    }
    const th = Math.atan(dy), st = Math.sin(th), ct = Math.cos(th);
    out[0] = up ? x - yt * st : x + yt * st;
    out[1] = up ? yc + yt * ct : yc - yt * ct;
  }
  function sectionLoop(s: number, K: number): Float32Array {
    const c = chordAt(s), m = cambAt(s), t = thkAt(s), ph = twistAt(s), cs = Math.cos(ph), sn = Math.sin(ph);
    const lx = 0.07 * s * s, lz = 0.05 * s, pts = new Float32Array(K * 2);
    for (let k = 0; k < K; k++) {
      foil(m, t, k / K, tmp);
      const X = (tmp[0] - 0.35) * c, Z = tmp[1] * c;
      pts[2 * k] = X * cs - Z * sn + lx;
      pts[2 * k + 1] = X * sn + Z * cs + lz;
    }
    return pts;
  }
  function inPoly(loop: Float32Array, x: number, z: number) {
    const n = loop.length / 2;
    let inside = false;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const xi = loop[2 * i], zi = loop[2 * i + 1], xj = loop[2 * j], zj = loop[2 * j + 1];
      if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
  }
  function rng(seed: number) {
    return () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Point cloud and per-frame scratch buffers.
  let N = 0, NFL = 0, STRIDE = 1;
  let PX = new Float32Array(0), PY = PX, PZ = PX, NX = PX, NY = PX, NZ = PX, RN = PX, SXa = PX, SYa = PX, SSa = PX;
  let DC = new Uint8Array(0), KEY = new Uint16Array(0), ORDER = new Uint32Array(0), FL = new Uint32Array(0);
  const NC = 24, NCK = 1 + NC * 4, NKEYS = NCK * 4;
  const COUNTS = new Uint32Array(NKEYS), START = new Uint32Array(NKEYS), STY: string[] = new Array<string>(NKEYS).fill(TRANSPARENT);
  let anchors: number[][] = [];
  let WIRE: number[][] = [];

  function anchor(s: number, u: number): number[] {
    const l = sectionLoop(s, 200), k = Math.round(u * 200) % 200;
    return [l[2 * k], s * SPAN, l[2 * k + 1]];
  }
  function devAt(x: number, y: number, z: number) {
    let v =
      0.46 * Math.sin(2.1 * x + 1.3 * y + 0.7) * Math.cos(1.7 * z - 0.9 * y) +
      0.32 * Math.sin(3.3 * y - 2.2 * x + 1.9 * z) +
      0.15 * Math.sin(6.1 * x + 4.7 * z + 3.1 * y + 2.0);
    for (const a of anchors) {
      const dx = x - a[0], dy = y - a[1], dz = z - a[2];
      v += a[3] * Math.exp(-(dx * dx + dy * dy + dz * dz) / (a[4] * a[4]));
    }
    return clamp(v, -2.2, 2.2);
  }
  function showPointCount() {
    if (hud.points) hud.points.textContent = Math.ceil(N / STRIDE).toLocaleString('en-US');
  }

  function build(R: number) {
    const rand = rng(1337), sp = SPAN / R, out: number[] = [];
    function push(x: number, y: number, z: number, nx: number, ny: number, nz: number) {
      const l = Math.hypot(nx, ny, nz) || 1;
      out.push(x, y, z, nx / l, ny / l, nz / l);
    }
    const K = 220, cum = new Float32Array(K + 1);
    // Airfoil surface, section by section.
    for (let j = 0; j < R; j++) {
      const s = (j + 0.5) / R, loop = sectionLoop(s, K);
      cum[0] = 0;
      for (let k = 0; k < K; k++) {
        const k2 = (k + 1) % K;
        cum[k + 1] = cum[k] + Math.hypot(loop[2 * k2] - loop[2 * k], loop[2 * k2 + 1] - loop[2 * k + 1]);
      }
      const L = cum[K], n = Math.max(10, Math.round(L / sp)), y = s * SPAN;
      for (let i = 0; i < n; i++) {
        let a = ((i + 0.5 + (rand() - 0.5) * 0.7) / n) * L;
        if (a < 0) a += L;
        if (a >= L) a -= L;
        let lo = 0, hi = K;
        while (hi - lo > 1) {
          const mid = (lo + hi) >> 1;
          if (cum[mid] <= a) lo = mid;
          else hi = mid;
        }
        const k0 = lo, k1 = (lo + 1) % K, f = (a - cum[lo]) / (cum[lo + 1] - cum[lo] || 1);
        const px = lerp(loop[2 * k0], loop[2 * k1], f), pz = lerp(loop[2 * k0 + 1], loop[2 * k1 + 1], f);
        const kp = (k0 - 1 + K) % K, kn = (k1 + 1) % K, tx = loop[2 * kn] - loop[2 * kp], tz = loop[2 * kn + 1] - loop[2 * kp + 1];
        push(px, y + (rand() - 0.5) * sp * 0.3, pz, tz, 0, -tx);
      }
    }
    // Tip cap.
    const tip = sectionLoop(1, 120), g = sp * 1.15;
    let x0 = 9, x1 = -9, z0 = 9, z1 = -9;
    for (let k = 0; k < 120; k++) {
      x0 = Math.min(x0, tip[2 * k]);
      x1 = Math.max(x1, tip[2 * k]);
      z0 = Math.min(z0, tip[2 * k + 1]);
      z1 = Math.max(z1, tip[2 * k + 1]);
    }
    for (let xx = x0; xx <= x1; xx += g) {
      for (let zz = z0; zz <= z1; zz += g) {
        if (inPoly(tip, xx, zz)) push(xx + (rand() - 0.5) * g * 0.4, SPAN, zz + (rand() - 0.5) * g * 0.4, 0, 1, 0);
      }
    }
    // Platform top, skipping the root footprint.
    const root = sectionLoop(0, 120), gp = sp * 1.4;
    for (let u = -AX; u <= AX; u += gp) {
      for (let v = -AZ; v <= AZ; v += gp) {
        const X = u + SKEW * v + (rand() - 0.5) * gp * 0.5, Z = v + (rand() - 0.5) * gp * 0.5;
        if (!inPoly(root, X, Z)) push(X, 0, Z, 0, 1, 0);
      }
    }
    // Platform sides.
    const C = [
      [-AX - SKEW * AZ, -AZ],
      [AX - SKEW * AZ, -AZ],
      [AX + SKEW * AZ, AZ],
      [-AX + SKEW * AZ, AZ],
    ];
    const gs = sp * 1.3, rows = Math.max(3, Math.round(PT / gs) + 1);
    for (let k = 0; k < 4; k++) {
      const A = C[k], B = C[(k + 1) % 4], ex = B[0] - A[0], ez = B[1] - A[1], el = Math.hypot(ex, ez), ne = Math.round(el / gs);
      for (let r = 0; r < rows; r++) {
        for (let i = 0; i < ne; i++) {
          const tt = (i + 0.5 + (rand() - 0.5) * 0.5) / ne;
          push(A[0] + ex * tt, (-PT * r) / (rows - 1), A[1] + ez * tt, ez, 0, -ex);
        }
      }
    }
    // Fir-tree root.
    const gr = sp * 1.7, nd = Math.round(DL / gr), nx = Math.round((2 * SXL) / gr);
    for (let i = 0; i <= nd; i++) {
      const d = (DL * i) / nd, w = wAt(d), wy = -PT - d;
      const slope = (wAt(Math.min(DL, d + 0.01)) - wAt(Math.max(0, d - 0.01))) / 0.02;
      for (let k = 0; k <= nx; k++) {
        const xs = -SXL + (2 * SXL * k) / nx + (rand() - 0.5) * gr * 0.4;
        push(xs, wy, w, 0, slope, 1);
        push(xs, wy, -w, 0, slope, -1);
      }
      if (i === nd) {
        for (let zq = -w + gr * 0.5; zq < w; zq += gr) {
          for (let k = 0; k <= nx; k += 2) push(-SXL + (2 * SXL * k) / nx, wy, zq, 0, -1, 0);
        }
      }
    }
    // Nominal CAD wireframe.
    WIRE = [];
    for (const s of [0, 0.2, 0.4, 0.6, 0.8, 1]) {
      const l = sectionLoop(s, 56), a: number[] = [];
      for (let q = 0; q <= 56; q++) {
        const qq = q % 56;
        a.push(l[2 * qq], s * SPAN, l[2 * qq + 1]);
      }
      WIRE.push(a);
    }
    for (const u of [0.5, 0]) {
      const a: number[] = [];
      for (let q = 0; q <= 14; q++) {
        const s = q / 14, l = sectionLoop(s, 200), qq = Math.round(u * 200) % 200;
        a.push(l[2 * qq], s * SPAN, l[2 * qq + 1]);
      }
      WIRE.push(a);
    }
    for (const yy of [0, -PT]) {
      const a: number[] = [];
      for (let q = 0; q <= 4; q++) {
        const c = C[q % 4];
        a.push(c[0], yy, c[1]);
      }
      WIRE.push(a);
    }
    for (const c of C) WIRE.push([c[0], 0, c[1], c[0], -PT, c[1]]);
    for (const e of [[-SXL, 1], [SXL, 1], [-SXL, -1], [SXL, -1]]) {
      const a: number[] = [];
      for (let q = 0; q <= 24; q++) {
        const d = (DL * q) / 24;
        a.push(e[0], -PT - d, e[1] * wAt(d));
      }
      WIRE.push(a);
    }
    // Shuffle so a stride still samples the whole part evenly.
    N = out.length / 6;
    for (let sh = N - 1; sh > 0; sh--) {
      const sj = Math.floor(rand() * (sh + 1));
      if (sj !== sh) {
        for (let sc = 0; sc < 6; sc++) {
          const tv = out[sh * 6 + sc];
          out[sh * 6 + sc] = out[sj * 6 + sc];
          out[sj * 6 + sc] = tv;
        }
      }
    }
    PX = new Float32Array(N); PY = new Float32Array(N); PZ = new Float32Array(N);
    NX = new Float32Array(N); NY = new Float32Array(N); NZ = new Float32Array(N);
    DC = new Uint8Array(N); RN = new Float32Array(N); SXa = new Float32Array(N); SYa = new Float32Array(N); SSa = new Float32Array(N);
    KEY = new Uint16Array(N); ORDER = new Uint32Array(N); FL = new Uint32Array(N);
    const a1 = anchor(0.84, 0.5), a2 = anchor(0.5, 0.0), a3 = anchor(0.1, 0.28), a4 = anchor(0.62, 0.72);
    anchors = [
      a1.concat([-2.3, 0.24]),
      a2.concat([1.9, 0.26]),
      a3.concat([1.15, 0.2]),
      a4.concat([-0.9, 0.3]),
      [AX + SKEW * AZ, 0, AZ, -1.5, 0.34],
      [0, SPAN, 0.05, 0.75, 0.32],
    ];
    for (let i = 0; i < N; i++) {
      const o = i * 6;
      PX[i] = out[o]; PY[i] = out[o + 1]; PZ[i] = out[o + 2];
      NX[i] = out[o + 3]; NY[i] = out[o + 4]; NZ[i] = out[o + 5];
      const dv = devAt(PX[i], PY[i], PZ[i]);
      DC[i] = Math.round(clamp((dv + 2) / 4, 0, 1) * (NC - 1));
      RN[i] = rand();
    }
    showPointCount();
  }

  // Theme-driven styles, read from the Scanline tokens.
  let COL: Colors;
  let SPR: HTMLCanvasElement = document.createElement('canvas');
  function sprite(c: RGBA, size: number) {
    const cv = document.createElement('canvas');
    cv.width = cv.height = size;
    const g = cv.getContext('2d');
    if (!g) return cv;
    const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gr.addColorStop(0, rgba(c, 1));
    gr.addColorStop(0.22, rgba(c, 0.55));
    gr.addColorStop(1, rgba(c, 0));
    g.fillStyle = gr;
    g.fillRect(0, 0, size, size);
    return cv;
  }
  function styles() {
    const dark = isDarkTheme();
    const stops = ['--sl-dev-n2', '--sl-dev-n1', '--sl-dev-0', '--sl-dev-p1', '--sl-dev-p2'].map((n) => parseColor(token(n)));
    const laser = parseColor(token('--sl-laser')), core = parseColor(token('--sl-laser-core'));
    const ink = parseColor(token('--sl-ink')), ink2 = parseColor(token('--sl-ink-2'));
    const brand = parseColor(token('--sl-brand')), panel = parseColor(token('--sl-panel')), line2 = parseColor(token('--sl-line-2'));
    const ghost = dark ? mix(laser, ink2, 0.55) : brand;
    const AL = dark ? [0.16, 0.34, 0.6, 0.9] : [0.2, 0.4, 0.66, 0.92];
    const GA = dark ? [0.07, 0.12, 0.19, 0.27] : [0.07, 0.11, 0.17, 0.24];
    const cmap = (t: number) => {
      const x = t * 4, i = Math.min(3, Math.floor(x));
      return mix(stops[i], stops[i + 1], x - i);
    };
    for (let b = 0; b < 4; b++) {
      STY[b * NCK] = rgba(ghost, GA[b]);
      for (let c = 0; c < NC; c++) {
        const col = cmap(c / (NC - 1));
        for (let m = 1; m <= 4; m++) {
          const f = m / 4;
          STY[b * NCK + 1 + c * 4 + (m - 1)] = rgba(mix(ghost, col, f), lerp(GA[b], AL[b], f));
        }
      }
    }
    COL = {
      dark,
      stops,
      beam: dark ? rgba(core, 0.95) : rgba(laser, 0.95),
      beamGlow: dark ? rgba(laser, 0.2) : rgba(core, 0.22),
      beamHot: dark ? rgba(ink, 1) : rgba(core, 1),
      plane: dark ? rgba(core, 0.11) : rgba(laser, 0.07),
      planeEdge: dark ? rgba(core, 0.42) : rgba(laser, 0.45),
      cont: dark ? rgba(core, 1) : rgba(laser, 1),
      contGlow: dark ? rgba(laser, 0.22) : rgba(core, 0.25),
      floor: rgba(line2, dark ? 0.9 : 1),
      floorSoft: rgba(line2, 0.45),
      pool: dark ? rgba(laser, 0.12) : rgba(brand, 0.1),
      wire: dark ? rgba(core, 0.2) : rgba(brand, 0.24),
      body: rgba(panel, dark ? 0.96 : 1),
      leg: rgba(ink2, dark ? 0.62 : 0.75),
      edge: dark ? rgba(core, 0.55) : rgba(ink2, 0.8),
      led: rgba(stops[2], 1),
      font: `600 10px ${token('--sl-f-display') || 'sans-serif'}`,
    };
    SPR = sprite(dark ? core : laser, 48);
  }

  // View and animation state.
  let W = 0, H = 0, CW = 0, CH = 0, OX = 0, OY = 0, dpr = 1, CX = 0, CY = 0, F = 1, BASE = 1.8, density = -1;
  const D = 10, TRK = {x: 0, y: 0, k: 1};
  let still = RM.matches, visible = true, destroyed = false, raf = 0, last = 0, hudTick = 0, costEMA = 0, warm = 0;
  const P0 = 0.44, AUTO = 0.11;
  const S = {yaw: -0.7, pitch: P0, vyaw: 0, drag: false, t: 0, cyc: 4.6, lx: 0, ly: 0, lt: 0, smr: null as Point3 | null};
  const T_SWEEP = 6.6, T_HOLD = 2.4, T_FADE = 1.5, T_GAP = 0.5, CYCLE = T_SWEEP + T_HOLD + T_FADE + T_GAP, FADE = 0.42, FLASH = 0.08;

  function layout() {
    const sr = stage.getBoundingClientRect(), cr = canvas.getBoundingClientRect();
    W = sr.width; H = sr.height; CW = cr.width; CH = cr.height; OX = sr.left - cr.left; OY = sr.top - cr.top;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(CW * dpr));
    canvas.height = Math.max(1, Math.round(CH * dpr));
    const narrow = W < 560;
    F = ((narrow ? 0.56 : 0.68) * H * D) / (YMAX - YMIN);
    CX = OX + W * 0.6;
    CY = OY + H * (narrow ? 0.5 : 0.47);
    TRK.k = clamp(H / 690, 0.6, 1.1);
    TRK.x = OX + W * (narrow ? 0.14 : W / H > 1.3 ? 0.24 : 0.13);
    TRK.y = OY + H - (narrow ? 104 : 0.075 * H);
    BASE = clamp(H / 760, 0.72, 1) * (narrow ? 1.9 : 1.75);
    const want = narrow ? 0 : 1;
    if (want !== density) {
      density = want;
      build(want ? 112 : 78);
    }
  }
  function phase(c: number): Phase {
    if (c < T_SWEEP) {
      const p = c / T_SWEEP;
      return {mode: 1, p, ys: YMIN - 0.12 + p * (YMAX - YMIN + 0.24)};
    }
    c -= T_SWEEP;
    if (c < T_HOLD) return {mode: 2, p: c / T_HOLD, ys: 99};
    c -= T_HOLD;
    if (c < T_FADE) return {mode: 3, p: c / T_FADE, ys: 99};
    return {mode: 4, p: 0, ys: -99};
  }
  const CT = new Float32Array(3 * 96), CS = new Float32Array(3 * 96);
  function contour(ys: number) {
    let n = 0;
    if (ys >= 0 && ys <= SPAN) {
      const l = sectionLoop(ys / SPAN, 72);
      for (let k = 0; k < 72; k++) {
        CT[3 * k] = l[2 * k];
        CT[3 * k + 1] = ys;
        CT[3 * k + 2] = l[2 * k + 1];
      }
      return 72;
    }
    let C: number[][];
    if (ys < 0 && ys >= -PT) {
      C = [[-AX - SKEW * AZ, -AZ], [AX - SKEW * AZ, -AZ], [AX + SKEW * AZ, AZ], [-AX + SKEW * AZ, AZ]];
    } else if (ys < -PT && ys >= YMIN) {
      const w = wAt(-PT - ys);
      C = [[-SXL, -w], [SXL, -w], [SXL, w], [-SXL, w]];
    } else {
      return 0;
    }
    for (let e = 0; e < 4; e++) {
      const A = C[e], B = C[(e + 1) % 4];
      for (let k = 0; k < 16; k++) {
        const t = k / 16;
        CT[3 * n] = lerp(A[0], B[0], t);
        CT[3 * n + 1] = ys;
        CT[3 * n + 2] = lerp(A[1], B[1], t);
        n++;
      }
    }
    return n;
  }
  const fmt = (v: number) => v.toFixed(3).padStart(7, ' ');

  function draw(dt: number) {
    const dark = COL.dark;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, CW, CH);
    const ph: Phase = still ? {mode: 0, p: 1, ys: 99} : phase(S.cyc);
    const mode = ph.mode, ys = ph.ys;
    const cyw = Math.cos(S.yaw), syw = Math.sin(S.yaw), cpt = Math.cos(S.pitch), spt = Math.sin(S.pitch);
    const pr = [0, 0, 0];
    function P(x: number, y: number, z: number) {
      y -= YMID;
      const x1 = x * cyw + z * syw, z1 = -x * syw + z * cyw, y2 = y * cpt - z1 * spt, z2 = y * spt + z1 * cpt, inv = F / (D + z2);
      pr[0] = CX + x1 * inv;
      pr[1] = CY - y2 * inv;
      pr[2] = z2;
      return pr;
    }

    // Turntable.
    const fy = YMIN - 0.02;
    P(0, fy, 0);
    const pcx = pr[0], pcy = pr[1];
    P(1.25, fy, 0);
    const rx = Math.hypot(pr[0] - pcx, pr[1] - pcy);
    const pool = ctx.createRadialGradient(pcx, pcy, 0, pcx, pcy, rx * 1.1);
    pool.addColorStop(0, COL.pool);
    pool.addColorStop(1, TRANSPARENT);
    ctx.fillStyle = pool;
    ctx.beginPath();
    for (let k = 0; k <= 48; k++) {
      const an = (k / 48) * Math.PI * 2;
      P(Math.cos(an) * 1.3, fy, Math.sin(an) * 1.3);
      if (k) ctx.lineTo(pr[0], pr[1]);
      else ctx.moveTo(pr[0], pr[1]);
    }
    ctx.fill();
    ctx.lineWidth = 1;
    [0.76, 1.06].forEach((r, ri) => {
      ctx.beginPath();
      for (let q = 0; q <= 64; q++) {
        const a = (q / 64) * Math.PI * 2;
        P(Math.cos(a) * r, fy, Math.sin(a) * r);
        if (q) ctx.lineTo(pr[0], pr[1]);
        else ctx.moveTo(pr[0], pr[1]);
      }
      ctx.strokeStyle = ri ? COL.floor : COL.floorSoft;
      ctx.stroke();
    });
    ctx.beginPath();
    ctx.strokeStyle = COL.floor;
    for (let k = 0; k < 72; k++) {
      const a2 = (k / 72) * Math.PI * 2, r2 = k % 6 ? 1.11 : 1.17;
      P(Math.cos(a2) * 1.06, fy, Math.sin(a2) * 1.06);
      ctx.moveTo(pr[0], pr[1]);
      P(Math.cos(a2) * r2, fy, Math.sin(a2) * r2);
      ctx.lineTo(pr[0], pr[1]);
    }
    ctx.stroke();
    ctx.setLineDash([3, 5]);
    ctx.strokeStyle = COL.floorSoft;
    ctx.beginPath();
    P(-1.06, fy, 0); ctx.moveTo(pr[0], pr[1]);
    P(1.06, fy, 0); ctx.lineTo(pr[0], pr[1]);
    P(0, fy, -1.06); ctx.moveTo(pr[0], pr[1]);
    P(0, fy, 1.06); ctx.lineTo(pr[0], pr[1]);
    ctx.stroke();
    ctx.setLineDash([]);
    // Part frame triad: X red, Y green, Z blue, with Z up the span.
    const to = [-0.78, fy, -0.5];
    P(to[0], to[1], to[2]);
    const ox = pr[0], oy = pr[1];
    ctx.lineWidth = 1.6;
    ctx.font = COL.font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const ax of [[0.3, 0, 0, 4, 'X'], [0, 0, 0.3, 2, 'Y'], [0, 0.3, 0, 0, 'Z']] as const) {
      P(to[0] + ax[0], to[1] + ax[1], to[2] + ax[2]);
      ctx.strokeStyle = rgba(COL.stops[ax[3]], 1);
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(pr[0], pr[1]);
      ctx.stroke();
      const lx = pr[0] + (pr[0] - ox) * 0.28, ly = pr[1] + (pr[1] - oy) * 0.28;
      ctx.fillStyle = rgba(COL.stops[ax[3]], 1);
      ctx.fillText(ax[4], lx, ly);
    }

    // Nominal CAD wireframe.
    ctx.strokeStyle = COL.wire;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const wl of WIRE) {
      for (let wq = 0; wq < wl.length; wq += 3) {
        P(wl[wq], wl[wq + 1], wl[wq + 2]);
        if (wq) ctx.lineTo(pr[0], pr[1]);
        else ctx.moveTo(pr[0], pr[1]);
      }
    }
    ctx.stroke();
    ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
    // Scan plane.
    const planeOn = mode === 1;
    if (planeOn) {
      const pa = Math.min(1, ph.p / 0.04, (1 - ph.p) / 0.04);
      ctx.globalAlpha = clamp(pa, 0, 1);
      const cc = [[-1.0, -1.0], [1.0, -1.0], [1.0, 1.0], [-1.0, 1.0]];
      P(0, ys, 0);
      const gcx = pr[0], gcy = pr[1];
      P(1.0, ys, 0);
      const gr0 = Math.hypot(pr[0] - gcx, pr[1] - gcy);
      const pg = ctx.createRadialGradient(gcx, gcy, 0, gcx, gcy, gr0 * 1.3);
      pg.addColorStop(0, COL.plane);
      pg.addColorStop(1, TRANSPARENT);
      ctx.beginPath();
      cc.forEach((c2, q) => {
        P(c2[0], ys, c2[1]);
        if (q) ctx.lineTo(pr[0], pr[1]);
        else ctx.moveTo(pr[0], pr[1]);
      });
      ctx.closePath();
      ctx.fillStyle = pg;
      ctx.fill();
      ctx.strokeStyle = COL.planeEdge;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (const c2 of cc) {
        const sx = c2[0] > 0 ? -1 : 1, sz = c2[1] > 0 ? -1 : 1;
        P(c2[0] + sx * 0.3, ys, c2[1]); ctx.moveTo(pr[0], pr[1]);
        P(c2[0], ys, c2[1]); ctx.lineTo(pr[0], pr[1]);
        P(c2[0], ys, c2[1] + sz * 0.3); ctx.lineTo(pr[0], pr[1]);
      }
      ctx.stroke();
      ctx.strokeStyle = COL.plane;
      ctx.lineWidth = 1;
      ctx.beginPath();
      cc.forEach((c2, q) => {
        P(c2[0], ys, c2[1]);
        if (q) ctx.lineTo(pr[0], pr[1]);
        else ctx.moveTo(pr[0], pr[1]);
      });
      ctx.closePath();
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Points, batched by style key: facing band × deviation color × reveal step.
    COUNTS.fill(0);
    NFL = 0;
    const fp = ph.p;
    for (let i = 0; i < N; i += STRIDE) {
      const x = PX[i], y = PY[i] - YMID, z = PZ[i];
      const x1 = x * cyw + z * syw, z1 = -x * syw + z * cyw, y2 = y * cpt - z1 * spt, z2 = y * spt + z1 * cpt, iz = D / (D + z2);
      SXa[i] = CX + (x1 * F) / (D + z2);
      SYa[i] = CY - (y2 * F) / (D + z2);
      SSa[i] = BASE * iz;
      const nz1 = -NX[i] * syw + NZ[i] * cyw, f = -(NY[i] * spt + nz1 * cpt);
      const b = f > 0.42 ? 3 : f > 0.02 ? 2 : f > -0.38 ? 1 : 0;
      let kk: number;
      if (mode === 1) {
        const dy = ys - PY[i];
        kk = dy / FADE;
        if (dy >= 0 && dy < FLASH) FL[NFL++] = i;
      } else if (mode === 3) kk = 1 - (fp * 1.35 - RN[i] * 0.35);
      else if (mode === 4) kk = 0;
      else kk = 1;
      let ck = 0;
      if (kk > 0.02) {
        kk = kk >= 1 ? 1 : 1 - (1 - kk) * (1 - kk) * (1 - kk);
        ck = 1 + DC[i] * 4 + (Math.max(1, Math.ceil(kk * 4 - 1e-6)) - 1);
      }
      const key = b * NCK + ck;
      KEY[i] = key;
      COUNTS[key]++;
    }
    let acc = 0;
    for (let q2 = 0; q2 < NKEYS; q2++) {
      START[q2] = acc;
      acc += COUNTS[q2];
    }
    for (let i = 0; i < N; i += STRIDE) ORDER[START[KEY[i]]++] = i;
    let idx = 0;
    for (let q2 = 0; q2 < NKEYS; q2++) {
      const cnt = COUNTS[q2];
      if (!cnt) continue;
      ctx.fillStyle = STY[q2];
      ctx.beginPath();
      for (const end = idx + cnt; idx < end; idx++) {
        const pi = ORDER[idx], ss = SSa[pi];
        ctx.rect(SXa[pi] - ss * 0.5, SYa[pi] - ss * 0.5, ss, ss);
      }
      ctx.fill();
    }
    // Flash along the scan front.
    if (NFL) {
      for (let i = 0; i < NFL; i++) {
        const fi = FL[i], fa = 1 - (ys - PY[fi]) / FLASH, sz = SSa[fi] * 7;
        ctx.globalAlpha = fa * (dark ? 0.5 : 0.32);
        ctx.drawImage(SPR, SXa[fi] - sz / 2, SYa[fi] - sz / 2, sz, sz);
      }
      ctx.globalAlpha = 1;
    }

    // Laser section line and the SMR target.
    let target: number[] | null = null;
    const nC = planeOn ? contour(ys) : 0;
    if (nC) {
      let best = 0, bz = 1e9;
      for (let k = 0; k < nC; k++) {
        P(CT[3 * k], CT[3 * k + 1], CT[3 * k + 2]);
        CS[3 * k] = pr[0];
        CS[3 * k + 1] = pr[1];
        CS[3 * k + 2] = pr[2];
        if (pr[2] < bz) {
          bz = pr[2];
          best = k;
        }
      }
      for (const [style, width] of [[COL.contGlow, 6], [COL.cont, 1.3]] as const) {
        ctx.strokeStyle = style;
        ctx.lineWidth = width;
        ctx.beginPath();
        for (let q = 0; q < nC; q++) {
          if (q) ctx.lineTo(CS[3 * q], CS[3 * q + 1]);
          else ctx.moveTo(CS[3 * q], CS[3 * q + 1]);
        }
        ctx.closePath();
        ctx.stroke();
      }
      const off = Math.round(Math.sin(S.t * 1.5) * nC * 0.11), tk = (((best + off) % nC) + nC) % nC;
      target = [CT[3 * tk], CT[3 * tk + 1], CT[3 * tk + 2]];
    }
    if (!target) target = mode === 2 ? S.smr ?? [0, SPAN, 0] : mode === 0 ? anchors[3].slice(0, 3) : [0, -PT * 0.5, -AZ];
    if (!S.smr || mode === 0) {
      S.smr = [target[0], target[1], target[2]];
    } else {
      const sm = 1 - Math.exp(-(dt || 0.016) * 9);
      for (let k = 0; k < 3; k++) S.smr[k] += (target[k] - S.smr[k]) * sm;
    }
    P(S.smr[0], S.smr[1], S.smr[2]);
    const smx = pr[0], smy = pr[1];

    // Laser tracker.
    const tk2 = TRK.k, bx = TRK.x, by = TRK.y;
    ctx.globalCompositeOperation = 'source-over';
    const sh = ctx.createRadialGradient(bx, by + 2, 0, bx, by + 2, 70 * tk2);
    sh.addColorStop(0, COL.pool);
    sh.addColorStop(1, TRANSPARENT);
    ctx.fillStyle = sh;
    ctx.beginPath();
    ctx.ellipse(bx, by + 2, 70 * tk2, 12 * tk2, 0, 0, Math.PI * 2);
    ctx.fill();
    const hubY = by - 64 * tk2;
    const feet = [[-54, 0], [52, -4], [8, 9]];
    ctx.strokeStyle = COL.leg;
    ctx.lineWidth = 2 * tk2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    for (const ft of feet) {
      ctx.moveTo(bx, hubY);
      ctx.lineTo(bx + ft[0] * tk2, by + ft[1] * tk2);
    }
    ctx.moveTo(bx - 27 * tk2, by - 32 * tk2);
    ctx.lineTo(bx + 26 * tk2, by - 34 * tk2);
    ctx.stroke();
    function rr(x0: number, y0: number, w0: number, h0: number, r0: number) {
      ctx.beginPath();
      ctx.moveTo(x0 + r0, y0);
      ctx.arcTo(x0 + w0, y0, x0 + w0, y0 + h0, r0);
      ctx.arcTo(x0 + w0, y0 + h0, x0, y0 + h0, r0);
      ctx.arcTo(x0, y0 + h0, x0, y0, r0);
      ctx.arcTo(x0, y0, x0 + w0, y0, r0);
      ctx.closePath();
    }
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = COL.edge;
    ctx.fillStyle = COL.leg;
    for (const ft of feet) {
      ctx.beginPath();
      ctx.arc(bx + ft[0] * tk2, by + ft[1] * tk2, 2.2 * tk2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = COL.body;
    rr(bx - 4 * tk2, by - 96 * tk2, 8 * tk2, 34 * tk2, 1.5 * tk2); ctx.fill(); ctx.stroke();
    rr(bx - 7 * tk2, by - 70 * tk2, 14 * tk2, 7 * tk2, 1.5 * tk2); ctx.fill(); ctx.stroke();
    rr(bx - 24 * tk2, by - 112 * tk2, 48 * tk2, 17 * tk2, 3.5 * tk2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(bx - 20 * tk2, by - 103.5 * tk2);
    ctx.lineTo(bx + 8 * tk2, by - 103.5 * tk2);
    ctx.stroke();
    rr(bx - 22 * tk2, by - 150 * tk2, 9 * tk2, 41 * tk2, 3 * tk2); ctx.fill(); ctx.stroke();
    rr(bx + 13 * tk2, by - 150 * tk2, 9 * tk2, 41 * tk2, 3 * tk2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(bx - 17.5 * tk2, by - 150 * tk2);
    ctx.bezierCurveTo(bx - 16 * tk2, by - 166 * tk2, bx + 16 * tk2, by - 166 * tk2, bx + 17.5 * tk2, by - 150 * tk2);
    ctx.stroke();
    const tx0 = bx, ty0 = by - 132 * tk2, ang = Math.atan2(smy - ty0, smx - tx0);
    ctx.save();
    ctx.translate(tx0, ty0);
    ctx.rotate(ang);
    rr(-13 * tk2, -12.5 * tk2, 28 * tk2, 25 * tk2, 5 * tk2); ctx.fill(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-7 * tk2, -12.5 * tk2);
    ctx.lineTo(-7 * tk2, 12.5 * tk2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(15 * tk2, 0, 7.5 * tk2, -Math.PI / 2, Math.PI / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = COL.beam;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(15 * tk2, 0, 4.4 * tk2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    ctx.strokeStyle = COL.edge;
    ctx.lineWidth = 1.2;
    ctx.fillStyle = COL.body;
    ctx.beginPath();
    ctx.arc(tx0, ty0, 4 * tk2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    const blink = still ? 1 : Math.sin(S.t * 4) > -0.2 ? 1 : 0.25;
    ctx.fillStyle = COL.led;
    ctx.globalAlpha = blink;
    ctx.beginPath();
    ctx.arc(bx + 15 * tk2, by - 103 * tk2, 1.8 * tk2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    const apx = tx0 + Math.cos(ang) * 15 * tk2, apy = ty0 + Math.sin(ang) * 15 * tk2;

    // Beam and SMR.
    ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over';
    ctx.lineCap = 'round';
    ctx.strokeStyle = COL.beamGlow;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(apx, apy);
    ctx.lineTo(smx, smy);
    ctx.stroke();
    ctx.strokeStyle = COL.beam;
    ctx.lineWidth = 1.1;
    ctx.stroke();
    if (!still) {
      ctx.setLineDash([2, 22]);
      ctx.lineDashOffset = -S.t * 120;
      ctx.strokeStyle = COL.beamHot;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.setLineDash([]);
    }
    const gs2 = 26;
    ctx.drawImage(SPR, apx - gs2 / 2, apy - gs2 / 2, gs2, gs2);
    ctx.drawImage(SPR, smx - gs2 / 2, smy - gs2 / 2, gs2, gs2);
    ctx.strokeStyle = COL.beam;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(smx, smy, 6.5, 0, Math.PI * 2);
    ctx.stroke();
    if (!still) {
      const pu = (S.t * 0.8) % 1;
      ctx.globalAlpha = 1 - pu;
      ctx.beginPath();
      ctx.arc(smx, smy, 7 + pu * 14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    ctx.globalCompositeOperation = 'source-over';

    // HUD readouts, about fifteen times a second.
    if (dt === 0 || ++hudTick % 4 === 0) {
      if (hud.x) hud.x.textContent = fmt(300 + S.smr[0] * 86);
      if (hud.y) hud.y.textContent = fmt(120 + S.smr[2] * 86);
      if (hud.z) hud.z.textContent = fmt((S.smr[1] - YMIN) * 86);
      const pct = mode === 1 ? Math.round(ph.p * 100) : mode === 3 || mode === 4 ? 0 : 100;
      if (hud.sweep) hud.sweep.textContent = `${String(pct).padStart(3, '0')}%`;
    }
  }

  function frame(now: number) {
    raf = 0;
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    S.t += dt;
    S.cyc = (S.cyc + dt) % CYCLE;
    if (!S.drag) {
      S.yaw += (AUTO + S.vyaw) * dt;
      S.vyaw *= Math.pow(0.05, dt);
      S.pitch += (P0 - S.pitch) * (1 - Math.exp(-dt * 0.9));
    }
    const c0 = performance.now();
    draw(dt);
    const cost = performance.now() - c0;
    // Halve the drawn points on slow devices, and restore them when frames are cheap again.
    if (++warm > 30) {
      costEMA = costEMA ? costEMA * 0.96 + cost * 0.04 : cost;
      if ((STRIDE === 1 && costEMA > 13) || (STRIDE === 2 && costEMA < 4.5)) {
        STRIDE = 3 - STRIDE;
        costEMA = 0;
        warm = 0;
        showPointCount();
      }
    }
    if (running()) raf = requestAnimationFrame(frame);
  }
  const running = () => visible && !document.hidden && !still && !destroyed;
  function kick() {
    if (!raf && running()) {
      last = performance.now();
      warm = 0;
      costEMA = 0;
      raf = requestAnimationFrame(frame);
    }
  }
  function halt() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }
  const redrawIfIdle = () => {
    if (!running() && !destroyed) draw(0);
  };

  // Drag to rotate; a flick keeps spinning and decays.
  function onPointerDown(e: PointerEvent) {
    S.drag = true;
    S.lx = e.clientX;
    S.ly = e.clientY;
    S.lt = performance.now();
    S.vyaw = 0;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // Capture is best effort.
    }
    canvas.classList.add(className.dragging);
  }
  function onPointerMove(e: PointerEvent) {
    if (!S.drag) return;
    const now = performance.now(), dx = e.clientX - S.lx, dy = e.clientY - S.ly, dtt = Math.max(8, now - S.lt) / 1000;
    S.yaw += dx * 0.0062;
    S.pitch = clamp(S.pitch + dy * 0.004, -0.15, 0.9);
    S.vyaw = 0.6 * S.vyaw + 0.4 * clamp((dx * 0.0062) / dtt, -5, 5);
    S.lx = e.clientX;
    S.ly = e.clientY;
    S.lt = now;
    redrawIfIdle();
  }
  function release() {
    if (!S.drag) return;
    S.drag = false;
    canvas.classList.remove(className.dragging);
    if (performance.now() - S.lt > 90) S.vyaw = 0;
  }
  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  canvas.addEventListener('lostpointercapture', release);

  // ?scan=<seconds>&yaw=<radians> pins the stage to one moment, for review stills.
  const params = new URLSearchParams(window.location.search);
  const pinned = Number.parseFloat(params.get('scan') ?? '');
  if (Number.isFinite(pinned) && pinned >= 0) S.cyc = pinned % CYCLE;
  const yaw = Number.parseFloat(params.get('yaw') ?? '');
  if (Number.isFinite(yaw)) S.yaw = yaw;

  styles();
  layout();
  draw(0);

  const resize = new ResizeObserver(() => {
    layout();
    redrawIfIdle();
  });
  resize.observe(stage);
  const intersection = new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? true;
    if (visible) kick();
    else halt();
  });
  intersection.observe(stage);
  const onVisibility = () => {
    if (document.hidden) halt();
    else kick();
  };
  document.addEventListener('visibilitychange', onVisibility);
  const stopMotion = onMotionChange(RM, () => {
    still = RM.matches;
    if (still) {
      halt();
      draw(0);
    } else {
      kick();
    }
  });
  // Web fonts change the triad labels; redraw the still once they load.
  void document.fonts?.ready.then(redrawIfIdle);
  kick();

  return {
    restyle() {
      if (destroyed) return;
      styles();
      redrawIfIdle();
    },
    destroy() {
      destroyed = true;
      halt();
      resize.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      stopMotion();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', release);
      canvas.removeEventListener('pointercancel', release);
      canvas.removeEventListener('lostpointercapture', release);
    },
  };
}
