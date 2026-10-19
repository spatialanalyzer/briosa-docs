/*
 * Presentation-only touches for catalog pages. The Markdown stays the single
 * source: these read the rendered page, mark signature tables for styling, and
 * add a gRPC shortcut to Current rows whose entry already links its reference.
 * The returned cleanup restores the page exactly.
 */

const headingPattern = /^H[1-6]$/;

// MP Editor labels that contain " / " themselves. A group path never splits
// inside one: SA 2024 files Hide / Show Operations under View Control.
const slashLabels: readonly string[] = ['Hide / Show Operations'];

function text(node: Element | null | undefined): string {
  return node?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
}

function decode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

// "Root / Sub / Leaf" split into its MP Editor labels.
function splitGroupPath(path: string): string[] {
  const parts = path.split(' / ');
  for (const label of slashLabels) {
    const pieces = label.split(' / ');
    for (let index = 0; index + pieces.length <= parts.length; index += 1) {
      if (pieces.every((piece, offset) => parts[index + offset] === piece)) parts.splice(index, pieces.length, label);
    }
  }
  return parts;
}

// Whether a reference link is this command's own: a method page named for the
// anchor, or a group page with the anchor as its fragment. A group-level
// "API References" link names neither, so it never stands in for a command.
function linksCommand(href: string, anchor: string): boolean {
  const [path, fragment] = href.split('#', 2);
  const segment = path.replace(/\/+$/, '').split('/').pop() ?? '';
  return decode(segment) === anchor || (fragment !== undefined && decode(fragment) === anchor);
}

// The command's own gRPC reference link inside its entry, for one exact target.
function findGrpcLink(heading: HTMLElement, anchor: string, target: string): string | null {
  const level = Number(heading.tagName.slice(1));
  const selector = `a[href^="/api/grpc/sa-${target}/"]`;
  for (let node = heading.nextElementSibling; node; node = node.nextElementSibling) {
    if (headingPattern.test(node.tagName) && Number(node.tagName.slice(1)) <= level) break;
    const links = node.matches(selector) ? [node] : Array.from(node.querySelectorAll(selector));
    for (const link of links) {
      const href = link.getAttribute('href');
      if (href && linksCommand(href, anchor)) return href;
    }
  }
  return null;
}

// "Root / Sub / Leaf" as segments with a dim root; the text itself is unchanged.
function segmentPath(element: Element): (() => void) | null {
  const original = element.textContent ?? '';
  const parts = splitGroupPath(original.trim());
  if (element.children.length > 0 || parts.length === 0 || !parts[0]) return null;
  const nodes = Array.from(element.childNodes);
  const fragment = document.createDocumentFragment();
  parts.forEach((part, index) => {
    if (index > 0) {
      const separator = document.createElement('span');
      separator.className = 'catalog-path-sep';
      separator.textContent = ' / ';
      fragment.append(separator);
    }
    if (index === 0) {
      const root = document.createElement('span');
      root.className = 'catalog-path-root';
      root.textContent = part;
      fragment.append(root);
    } else {
      fragment.append(part);
    }
  });
  element.replaceChildren(fragment);
  return () => element.replaceChildren(...nodes);
}

export function enhanceCatalogPage(): () => void {
  const article = document.querySelector('article');
  if (!article) return () => undefined;
  const attributes: Array<[Element, string]> = [];
  const wrappers: HTMLElement[] = [];
  const chips: HTMLElement[] = [];
  const restores: Array<() => void> = [];
  const mark = (element: Element, name: string, value = ''): void => {
    if (element.hasAttribute(name)) return;
    element.setAttribute(name, value);
    attributes.push([element, name]);
  };

  // Group paths in command tables and target cards.
  for (const table of article.querySelectorAll('.catalog-command-table')) {
    const header = text(table.querySelector('thead th:nth-child(2)'));
    if (!/Group Path$/.test(header)) continue;
    for (const cell of table.querySelectorAll('tbody td:nth-child(2)')) {
      const restore = segmentPath(cell);
      if (restore) restores.push(restore);
    }
  }
  for (const group of article.querySelectorAll('.catalog-target-group')) {
    const restore = segmentPath(group);
    if (restore) restores.push(restore);
  }

  // MP signature tables: direction rows and Required Briosa defaults.
  for (const table of article.querySelectorAll('table')) {
    const headers = Array.from(table.querySelectorAll('thead th'), (th) => text(th));
    if (headers[0] !== 'Direction') continue;
    mark(table, 'data-catalog-signature');
    const required = headers.indexOf('Briosa Default');
    for (const row of table.querySelectorAll('tbody tr')) {
      const cells = row.querySelectorAll('td');
      const direction = text(cells[0]).toLowerCase();
      if (direction === 'input' || direction === 'output') mark(row, 'data-direction', direction);
      const cell = required >= 0 ? cells[required] : undefined;
      if (cell && text(cell) === 'Required' && !cell.querySelector('.catalog-required')) {
        const pill = document.createElement('span');
        pill.className = 'catalog-required';
        pill.append(...Array.from(cell.childNodes));
        cell.append(pill);
        wrappers.push(pill);
      }
    }
  }

  // Current rows: a gRPC chip when the command entry links its own reference.
  for (const row of document.querySelectorAll<HTMLTableRowElement>('.catalog-command-table tbody tr[data-status="current"]')) {
    const entry = row.querySelector('td a[href^="#"]')?.getAttribute('href');
    const anchor = entry ? decode(entry.slice(1)) : '';
    const target = row.dataset.target;
    const cell = row.querySelector('.catalog-status')?.closest('td');
    if (!anchor || !target || !cell || cell.querySelector('.catalog-api-chip')) continue;
    const heading = document.getElementById(anchor);
    const href = heading ? findGrpcLink(heading, anchor, target) : null;
    if (!href) continue;
    const chip = document.createElement('a');
    chip.className = 'catalog-api-chip';
    chip.href = href;
    chip.textContent = 'gRPC';
    chip.setAttribute('aria-label', `gRPC reference for ${row.dataset.command ?? anchor}, SA ${target}`);
    cell.append(' ', chip);
    chips.push(chip);
  }

  return () => {
    for (const restore of restores) restore();
    for (const chip of chips) {
      chip.previousSibling?.remove();
      chip.remove();
    }
    for (const pill of wrappers) pill.replaceWith(...Array.from(pill.childNodes));
    for (const [element, name] of attributes) element.removeAttribute(name);
  };
}
