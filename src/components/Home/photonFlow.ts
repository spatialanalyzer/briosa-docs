/*
 * Architecture: requests travel as photons from the three clients into the
 * Briosa Host, queue in front of the worker gate, pass one at a time to
 * SpatialAnalyzer, and return as explicit outcomes. The host's caliper taps
 * each arriving request.
 *
 * The lanes and photons are drawn into an empty <svg> that React never
 * renders children for, measured from the step nodes on every resize.
 * Under reduced motion the lanes show a still; a visitor's pause freezes the
 * photons where they are, and play continues from there.
 */
import {clamp, getMotion, latestEntry, subscribeMotion} from './runtime';

export type PhotonClasses = {
  readonly lane: string;
  readonly req: string;
  readonly res: string;
  readonly laneLabel: string;
  readonly photon: string;
  readonly photonGlow: string;
  readonly hit: string;
  readonly tick: string;
};

type LanePath = SVGPathElement & {len: number};
type Slot = {g: SVGGElement; a: SVGCircleElement; b: SVGCircleElement; busy: boolean};
type Segment = 'in' | 'q' | 'out' | 'sa' | 'back' | 'fan';
type Photon = {seg: Segment; i: number; d: number; s: Slot; w: number; passed?: boolean};
type Axis = {a0: number; a1: number; c: number};

const NS = 'http://www.w3.org/2000/svg';

export function createPhotonFlow(arch: HTMLElement, svg: SVGSVGElement, cls: PhotonClasses): {destroy(): void} {
  let motion = getMotion();
  const verticalQuery = window.matchMedia('(max-width: 900px)');
  const hostEl = arch.querySelector<HTMLElement>('[data-node="host"]');
  const workerEl = arch.querySelector<HTMLElement>('[data-node="worker"]');
  const saEl = arch.querySelector<HTMLElement>('[data-node="sa"]');
  const sources = Array.from(arch.querySelectorAll<HTMLElement>('[data-src]'));

  let paths: {ins: LanePath[]; fans: LanePath[]; out: LanePath; back: LanePath} | null = null;
  let pool: Slot[] = [];
  let ph: Photon[] = [];
  let queue: Photon[] = [];
  let pending: {t: number; i: number}[] = [];
  let slotT = 0, raf = 0, last = 0, visible = false, destroyed = false, speed = 150, vert = false;
  let hitT = 0, tickT = 0, burstT = 0.4;
  let gateD = 0, gateW = 0, minQ = 0;
  const Q_SP = 13;

  function el<K extends keyof SVGElementTagNameMap>(name: K, attrs: Record<string, string>): SVGElementTagNameMap[K] {
    const e = document.createElementNS(NS, name);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
  }
  function box(e: Element, b: DOMRect) {
    const r = e.getBoundingClientRect();
    return {x: r.left - b.left, y: r.top - b.top, w: r.width, h: r.height};
  }
  function axis(r: {x: number; y: number; w: number; h: number}): Axis {
    return vert ? {a0: r.y, a1: r.y + r.h, c: r.x + r.w / 2} : {a0: r.x, a1: r.x + r.w, c: r.y + r.h / 2};
  }
  const XY = (a: number, c: number) => (vert ? `${c.toFixed(1)} ${a.toFixed(1)}` : `${a.toFixed(1)} ${c.toFixed(1)}`);

  function hit() {
    if (!hostEl) return;
    hostEl.classList.add(cls.hit);
    hitT = 0.09;
  }
  /** Ends any caliper tap or gate flash in progress. */
  function settleFlashes() {
    hostEl?.classList.remove(cls.hit);
    workerEl?.classList.remove(cls.tick);
    hitT = 0;
    tickT = 0;
  }

  function layout() {
    const b = arch.getBoundingClientRect();
    if (!b.width || !hostEl || !workerEl || !saEl) return;
    svg.setAttribute('viewBox', `0 0 ${b.width.toFixed(1)} ${b.height.toFixed(1)}`);
    vert = verticalQuery.matches;
    const h = axis(box(hostEl, b)), s = axis(box(saEl, b));
    const bs = sources.map((m) => axis(box(m, b)));
    const reqC = h.c - 6, resC = h.c + 6, hm = (h.a0 + h.a1) / 2, sm = (s.a0 + s.a1) / 2;
    svg.textContent = '';
    const lanes = el('g', {}), dots = el('g', {});
    svg.append(lanes, dots);
    function lane(d: string, kind: string): LanePath {
      const p = el('path', {d, class: `${cls.lane} ${kind}`}) as LanePath;
      lanes.appendChild(p);
      p.len = p.getTotalLength();
      return p;
    }
    const ins: LanePath[] = [], fans: LanePath[] = [];
    for (const m of bs) {
      const k = (h.a0 - m.a1) * 0.55;
      ins.push(lane(`M${XY(m.a1, m.c - 3)} C${XY(m.a1 + k, m.c - 3)} ${XY(h.a0 - k, reqC)} ${XY(hm, reqC)}`, cls.req));
      fans.push(lane(`M${XY(hm, resC)} L${XY(h.a0, resC)} C${XY(h.a0 - k, resC)} ${XY(m.a1 + k, m.c + 4)} ${XY(m.a1, m.c + 4)}`, cls.res));
    }
    const out = lane(`M${XY(hm, reqC)} L${XY(sm, reqC)}`, cls.req);
    if (!vert) {
      const w = axis(box(workerEl, b));
      for (const [from, to, label] of [[h.a1, w.a0, 'Serialized'], [w.a1, s.a0, 'SDK Connection']] as const) {
        const t = el('text', {class: cls.laneLabel, 'text-anchor': 'middle', x: ((from + to) / 2).toFixed(1), y: (reqC - 12).toFixed(1)});
        t.textContent = label;
        lanes.appendChild(t);
      }
    }
    const back = lane(`M${XY(sm, resC)} L${XY(hm, resC)}`, cls.res);
    paths = {ins, fans, out, back};
    pool = [];
    for (let i = 0; i < 28; i++) {
      const g = el('g', {opacity: '0'}), a = el('circle', {r: '7', class: cls.photonGlow}), c = el('circle', {r: '2.6', class: cls.photon});
      g.append(a, c);
      dots.appendChild(g);
      pool.push({g, a, b: c, busy: false});
    }
    ph = [];
    queue = [];
    pending = [];
    speed = clamp((vert ? b.height : b.width) / 7.5, 70, 175);
    measureQueue();
    if (!running()) still();
  }
  function grab(res: boolean): Slot | null {
    const s = pool.find((slot) => !slot.busy);
    if (!s) return null;
    s.busy = true;
    tint(s, res);
    return s;
  }
  function tint(s: Slot, res: boolean) {
    s.a.setAttribute('class', res ? `${cls.photonGlow} ${cls.res}` : cls.photonGlow);
    s.b.setAttribute('class', res ? `${cls.photon} ${cls.res}` : cls.photon);
  }
  function put(s: Slot, path: LanePath, d: number) {
    const pt = path.getPointAtLength(clamp(d, 0, path.len));
    s.g.setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
    s.g.setAttribute('opacity', '1');
  }
  function pathOf(p: Photon): LanePath {
    const lanes = paths!;
    if (p.seg === 'in') return lanes.ins[p.i];
    if (p.seg === 'out' || p.seg === 'q') return lanes.out;
    if (p.seg === 'back') return lanes.back;
    return lanes.fans[p.i];
  }
  // Requests line up along the out lane in front of the worker gate.
  const qd = (k: number) => Math.max(minQ, gateD - 14 - k * Q_SP);
  function measureQueue() {
    if (!hostEl || !workerEl) return;
    const b = arch.getBoundingClientRect();
    const h = axis(box(hostEl, b)), w = axis(box(workerEl, b));
    const hm = (h.a0 + h.a1) / 2;
    gateD = w.a0 - hm;
    gateW = w.a1 - w.a0;
    minQ = h.a1 - hm + 10;
  }
  /** Hides every photon and frees its slot. */
  function resetPool() {
    for (const s of pool) {
      s.busy = false;
      s.g.setAttribute('opacity', '0');
    }
  }
  /**
   * The still: requests waiting at the gate, outcomes on the way back. It takes
   * over every slot, so the photons in flight are dropped first.
   */
  function still() {
    ph = [];
    queue = [];
    pending = [];
    settleFlashes();
    if (!paths) return;
    measureQueue();
    resetPool();
    const frames: [LanePath, number, boolean, boolean][] = [
      [paths.ins[0], 0.72, false, false],
      [paths.ins[2], 0.82, false, false],
      [paths.out, qd(0), false, true],
      [paths.out, qd(1), false, true],
      [paths.out, qd(2), false, true],
      [paths.out, gateD + gateW + 34, false, true],
      [paths.back, 0.3, true, false],
      [paths.back, 0.68, true, false],
      [paths.fans[1], 0.55, true, false],
    ];
    for (const [path, at, res, absolute] of frames) {
      const s = grab(res);
      if (s) put(s, path, absolute ? at : path.len * at);
    }
  }
  function emit(i: number) {
    const s = grab(false);
    if (s) ph.push({seg: 'in', i, d: 0, s, w: 0});
  }
  function step(dt: number) {
    const lanes = paths!;
    // Requests arrive in bursts from all three clients, then drain one at a time.
    burstT -= dt;
    if (burstT <= 0) {
      burstT = 4.4 + Math.random() * 1.6;
      const order = [0, 1, 2].sort(() => Math.random() - 0.5);
      order.forEach((c, k) => pending.push({t: k * 0.22 + Math.random() * 0.08, i: c}));
      if (Math.random() < 0.55) pending.push({t: 0.75 + Math.random() * 0.3, i: order[0]});
    }
    for (let e = pending.length - 1; e >= 0; e--) {
      pending[e].t -= dt;
      if (pending[e].t <= 0) {
        emit(pending[e].i);
        pending.splice(e, 1);
      }
    }
    slotT -= dt;
    if (slotT <= 0 && queue.length && queue[0].d >= qd(0) - 0.5) {
      const q = queue.shift()!;
      q.seg = 'out';
      q.passed = false;
      slotT = 0.85;
      q.s.g.setAttribute('opacity', '1');
    }
    if (tickT > 0) {
      tickT -= dt;
      if (tickT <= 0) workerEl?.classList.remove(cls.tick);
    }
    if (hitT > 0) {
      hitT -= dt;
      if (hitT <= 0) hostEl?.classList.remove(cls.hit);
    }
    for (let j = ph.length - 1; j >= 0; j--) {
      const p = ph[j];
      if (p.seg === 'q') {
        const target = qd(queue.indexOf(p));
        p.d = p.d < target ? Math.min(target, p.d + speed * dt) : Math.max(target, p.d - speed * dt * 0.25);
        put(p.s, lanes.out, p.d);
        if (p.d >= target - 0.5) p.s.g.setAttribute('opacity', '0.78');
        continue;
      }
      if (p.seg === 'sa') {
        p.w -= dt;
        if (p.w <= 0) {
          p.seg = 'back';
          p.d = 0;
          tint(p.s, true);
        }
        continue;
      }
      p.d += speed * dt;
      let path = pathOf(p);
      if (p.seg === 'out' && !p.passed && p.d >= gateD + gateW * 0.5) {
        p.passed = true;
        if (workerEl) {
          workerEl.classList.add(cls.tick);
          tickT = 0.26;
        }
      }
      if (p.d >= path.len) {
        if (p.seg === 'in') {
          p.seg = 'q';
          p.d = 0;
          queue.push(p);
          put(p.s, lanes.out, 0);
          hit();
          continue;
        }
        if (p.seg === 'out') {
          p.seg = 'sa';
          p.w = 0.35;
          p.s.g.setAttribute('opacity', '0');
          continue;
        }
        if (p.seg === 'back') {
          p.seg = 'fan';
          p.d -= path.len;
          path = pathOf(p);
        } else {
          p.s.busy = false;
          p.s.g.setAttribute('opacity', '0');
          ph.splice(j, 1);
          continue;
        }
      }
      put(p.s, path, p.d);
    }
  }
  function tick(now: number) {
    raf = 0;
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    if (paths) step(dt);
    if (running()) raf = requestAnimationFrame(tick);
  }
  const running = () => visible && !document.hidden && !motion.reduced && !motion.paused && !destroyed;
  function kick() {
    if (!raf && running()) {
      // Nothing in flight means the still is showing (or nothing is): start from empty lanes, with a burst soon.
      if (!ph.length) {
        resetPool();
        burstT = Math.min(burstT, 0.4);
      }
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  }
  function halt() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  layout();
  const resize = new ResizeObserver(() => layout());
  resize.observe(arch);
  const intersection = new IntersectionObserver(
    (entries) => {
      visible = latestEntry(entries)?.isIntersecting ?? false;
      if (visible) kick();
    },
    {rootMargin: '80px'},
  );
  intersection.observe(arch);
  document.addEventListener('visibilitychange', kick);
  const stopMotion = subscribeMotion((next) => {
    const entering = next.reduced && !motion.reduced;
    motion = next;
    // Cancel the pending frame first, so no further step() moves photons or taps the caliper.
    halt();
    settleFlashes();
    // Reduced motion drops the flow for the still; a pause leaves the photons where they are.
    if (entering) still();
    // Resuming from the still starts from an empty pool (see kick); resuming a pause continues the flow.
    kick();
  });

  return {
    destroy() {
      destroyed = true;
      halt();
      resize.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', kick);
      stopMotion();
      settleFlashes();
      svg.textContent = '';
    },
  };
}
