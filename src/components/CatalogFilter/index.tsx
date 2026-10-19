import React, {memo, useCallback, useEffect, useId, useMemo, useRef, useState} from 'react';
import Link from '@docusaurus/Link';

import {enhanceCatalogPage} from './enhance';

type CatalogFilterProps = {
  readonly scopedGroup?: string;
  readonly showGroupFilter?: boolean;
  readonly showTargetFilter?: boolean;
};

type Status = 'current' | 'next' | 'undecided' | 'uncommitted' | 'sdk-unavailable' | 'excluded';

// A table row read once from the page: the catalog stays content-first.
type CatalogRow = {
  readonly element: HTMLTableRowElement;
  readonly target: string;
  readonly status: string;
  readonly groups: readonly string[];
  readonly validation: string;
  readonly validationLabel: string;
  readonly name: string;
  readonly haystack: string;
};

const releasedTarget = '2026.1.0529.7';
// Band order for the point field, legend, and chips: in tolerance first.
const statusOrder: readonly Status[] = ['current', 'next', 'undecided', 'uncommitted', 'sdk-unavailable', 'excluded'];
const statusLabels: Readonly<Record<Status, string>> = {
  current: 'Current',
  next: 'Next',
  undecided: 'Undecided',
  uncommitted: 'Uncommitted',
  'sdk-unavailable': 'SDK Unavailable',
  excluded: 'Excluded',
};
const openStatuses: readonly Status[] = ['next', 'undecided', 'uncommitted'];

function isStatus(value: string): value is Status {
  return value in statusLabels;
}

function displayValue(value: string): string {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Sdk ', 'SDK ');
}

function readRows(): CatalogRow[] {
  return Array.from(
    document.querySelectorAll<HTMLTableRowElement>('.catalog-command-table tbody tr'),
    (row) => {
      const cells = row.querySelectorAll('td');
      const name = row.dataset.command ?? cells[0]?.textContent?.trim() ?? '';
      const group = row.dataset.group ?? '';
      return {
        element: row,
        target: row.dataset.target ?? releasedTarget,
        status: row.dataset.status ?? '',
        groups: group.split(' | ').filter(Boolean),
        validation: row.dataset.validation ?? '',
        validationLabel: cells[cells.length - 1]?.textContent?.trim() ?? '',
        name,
        haystack: `${name} ${group}`.toLocaleLowerCase(),
      };
    },
  );
}

function reducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function formatCount(value: number): string {
  return value.toLocaleString('en-US');
}

function commands(value: number): string {
  return value === 1 ? 'command' : 'commands';
}

// Bring a row into view and flash it once; reduced motion jumps and holds still.
function revealRow(row: HTMLTableRowElement): void {
  row.scrollIntoView({block: 'center', behavior: reducedMotion() ? 'auto' : 'smooth'});
  row.classList.remove('is-flash');
  void row.offsetWidth;
  row.classList.add('is-flash');
  window.setTimeout(() => row.classList.remove('is-flash'), 1800);
}

type PointFieldProps = {
  readonly rows: readonly CatalogRow[];
  readonly visible: ReadonlySet<CatalogRow>;
  readonly label: string;
  readonly onHover: (row: CatalogRow | null) => void;
  readonly onPick: (row: CatalogRow) => void;
};

// One point per command for the selected target, sorted into status bands.
const PointField = memo(function PointField({rows, visible, label, onHover, onPick}: PointFieldProps) {
  const hovered = useRef<HTMLElement | null>(null);
  const rowAt = (target: EventTarget): CatalogRow | null => {
    const point = target instanceof Element ? target.closest<HTMLElement>('[data-point]') : null;
    return point ? rows[Number(point.dataset.point)] ?? null : null;
  };
  const mark = (element: HTMLElement | null): void => {
    hovered.current?.classList.remove('is-on');
    hovered.current = element;
    element?.classList.add('is-on');
  };
  return (
    <div
      className={`catalog-field${rows.length > 360 ? ' catalog-field--dense' : ''}`}
      role="img"
      aria-label={label}
      onPointerOver={(event) => {
        const row = rowAt(event.target);
        if (!row) return;
        mark((event.target as Element).closest<HTMLElement>('[data-point]'));
        onHover(row);
      }}
      onPointerLeave={() => {
        mark(null);
        onHover(null);
      }}
      onClick={(event) => {
        const row = rowAt(event.target);
        if (row) onPick(row);
      }}>
      {rows.map((row, index) => (
        <i
          key={`${row.target}:${row.name}:${index}`}
          data-point={index}
          data-status={row.status}
          className={visible.has(row) ? undefined : 'is-dim'}
        />
      ))}
    </div>
  );
});

export default function CatalogFilter({
  scopedGroup,
  showGroupFilter = false,
  showTargetFilter = false,
}: CatalogFilterProps): React.JSX.Element {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef<CatalogRow | null>(null);
  const [rows, setRows] = useState<readonly CatalogRow[]>([]);
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState(releasedTarget);
  const [group, setGroup] = useState('');
  const [status, setStatus] = useState('');
  const [validation, setValidation] = useState('');
  const [hovered, setHovered] = useState<CatalogRow | null>(null);
  const [initialized, setInitialized] = useState(false);

  // Read the page's own rows and the URL once.
  useEffect(() => {
    const pageRows = readRows();
    const parameters = new URLSearchParams(window.location.search);
    const targets = new Set(pageRows.map((row) => row.target));
    const requestedTarget = parameters.get('target');
    setRows(pageRows);
    setTarget(requestedTarget && targets.has(requestedTarget) ? requestedTarget : releasedTarget);
    setQuery(parameters.get('q') ?? '');
    setGroup(showGroupFilter ? parameters.get('group') ?? '' : '');
    setStatus(parameters.get('status') ?? '');
    setValidation(parameters.get('validation') ?? '');
    setInitialized(true);
    const cleanup = enhanceCatalogPage();

    // The live summary replaces the page's static summary grid.
    let grid: Element | null = root.current?.previousElementSibling ?? null;
    while (grid && !grid.classList.contains('catalog-context-grid') && !/^H[1-6]$/.test(grid.tagName)) {
      grid = grid.previousElementSibling;
    }
    const staticGrid = grid?.classList.contains('catalog-context-grid') ? grid as HTMLElement : null;
    if (staticGrid) staticGrid.hidden = true;
    return () => {
      if (staticGrid) staticGrid.hidden = false;
      cleanup();
    };
  }, [showGroupFilter]);

  const targets = useMemo(
    () => [...new Set(rows.map((row) => row.target))]
      .sort((left, right) => right.localeCompare(left, undefined, {numeric: true})),
    [rows],
  );

  const targetRows = useMemo(() => rows.filter((row) => row.target === target), [rows, target]);

  const counts = useMemo(() => {
    const result = new Map<string, number>();
    for (const row of targetRows) result.set(row.status, (result.get(row.status) ?? 0) + 1);
    return result;
  }, [targetRows]);

  const groups = useMemo(
    () => [...new Set(targetRows.flatMap((row) => row.groups))].sort((left, right) => left.localeCompare(right)),
    [targetRows],
  );

  const validations = useMemo(() => {
    const labels = new Map<string, string>();
    for (const row of targetRows) {
      if (row.validation && !labels.has(row.validation)) {
        labels.set(row.validation, row.validationLabel || displayValue(row.validation));
      }
    }
    return [...labels].sort((left, right) => left[1].localeCompare(right[1]));
  }, [targetRows]);

  const visible = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return new Set(targetRows.filter((row) =>
      (!normalizedQuery || row.haystack.includes(normalizedQuery)) &&
      (!group || row.groups.includes(group)) &&
      (!status || row.status === status) &&
      (!validation || row.validation === validation)));
  }, [group, query, status, targetRows, validation]);

  const bands = useMemo(
    () => [...targetRows].sort((left, right) =>
      statusOrder.indexOf(left.status as Status) - statusOrder.indexOf(right.status as Status)),
    [targetRows],
  );

  // Show matching rows only, then keep the URL shareable.
  useEffect(() => {
    if (!initialized) return;
    for (const row of rows) row.element.hidden = !visible.has(row);

    const parameters = new URLSearchParams(window.location.search);
    const updates: ReadonlyArray<readonly [string, string]> = [
      ['target', showTargetFilter && target !== releasedTarget ? target : ''],
      ['q', query],
      ['group', showGroupFilter ? group : ''],
      ['status', status],
      ['validation', validation],
    ];
    for (const [name, value] of updates) {
      if (value) parameters.set(name, value);
      else parameters.delete(name);
    }
    const search = parameters.toString();
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`);

    const picked = pendingScroll.current;
    if (picked && visible.has(picked)) {
      pendingScroll.current = null;
      revealRow(picked.element);
    }
  }, [group, initialized, query, rows, showGroupFilter, showTargetFilter, status, target, validation, visible]);

  // Highlight the selected target's context card in each command entry.
  useEffect(() => {
    if (!initialized) return;
    for (const context of document.querySelectorAll<HTMLElement>('.catalog-target-context[data-target]')) {
      context.toggleAttribute('data-selected', context.dataset.target === target);
    }
  }, [initialized, target]);

  const chooseTarget = (value: string): void => {
    setTarget(value);
    setGroup('');
    setValidation('');
    if (status && !rows.some((row) => row.target === value && row.status === status)) setStatus('');
  };

  const toggleStatus = (value: string): void => setStatus((current) => (current === value ? '' : value));

  const reset = (): void => {
    setQuery('');
    setGroup('');
    setStatus('');
    setValidation('');
  };

  // A filtered-out point clears the filters first; the row effect then reveals it.
  const onPick = useCallback((row: CatalogRow): void => {
    if (!row.element.hidden) {
      revealRow(row.element);
      return;
    }
    pendingScroll.current = row;
    setQuery('');
    setGroup('');
    setStatus('');
    setValidation('');
  }, []);

  const total = targetRows.length;
  const current = counts.get('current') ?? 0;
  const open = openStatuses.reduce((sum, value) => sum + (counts.get(value) ?? 0), 0);
  const unsupported = (counts.get('excluded') ?? 0) + (counts.get('sdk-unavailable') ?? 0);
  const openLabel = (counts.get('undecided') ?? 0) > 0 ? 'Next, Undecided, or Uncommitted' : 'Uncommitted or Next';
  const presentStatuses = statusOrder.filter((value) => (counts.get(value) ?? 0) > 0 || value === status);
  const fieldLabel = `${formatCount(total)} ${commands(total)} on SA ${target}: ${statusOrder
    .filter((value) => counts.get(value))
    .map((value) => `${formatCount(counts.get(value) ?? 0)} ${statusLabels[value]}`)
    .join(', ')}`;
  const rootGroups = new Set(targetRows.map((row) => row.groups[0]?.split(' / ')[0]).filter(Boolean));
  const indexHref = `/mp-command-catalog/commands${target === releasedTarget ? '' : `?target=${target}`}`;

  return (
    <div className="catalog-filter" ref={root}>
      <section className="catalog-summary" aria-label={`${scopedGroup ?? 'Catalog'} summary`} hidden={!initialized}>
        <div className="catalog-readout">
          <div><span className="sl-hud">Reviewed Commands</span><b className="sl-num">{formatCount(total)}</b></div>
          <div><span className="sl-hud">Current Server Operations</span><b className="sl-num">{formatCount(current)}</b></div>
          <div><span className="sl-hud">{openLabel}</span><b className="sl-num">{formatCount(open)}</b></div>
          <div><span className="sl-hud">Excluded or Unavailable</span><b className="sl-num">{formatCount(unsupported)}</b></div>
        </div>
        <div className="catalog-field-wrap">
          <div className="catalog-field-cap">
            <span className="sl-hud">One Point per Command</span>
            <span className="catalog-field-read" aria-hidden="true">
              {hovered
                ? <>{hovered.name}<span className="catalog-field-read__sep"> · </span><span data-status={hovered.status}>{statusLabels[hovered.status as Status] ?? hovered.status}</span></>
                : `${formatCount(total)} ${commands(total)} on SA ${target}`}
            </span>
          </div>
          <PointField rows={bands} visible={visible} label={fieldLabel} onHover={setHovered} onPick={onPick} />
          <ul className="catalog-field-legend" aria-label="Filter by status">
            {statusOrder.filter((value) => counts.get(value)).map((value) => (
              <li key={value}>
                <button type="button" data-status={value} aria-pressed={status === value} onClick={() => toggleStatus(value)}>
                  <b className="sl-num">{formatCount(counts.get(value) ?? 0)}</b> {statusLabels[value]}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="catalog-summary__context">
          {showGroupFilter || !scopedGroup ? (
            <>Across <b className="sl-num">{rootGroups.size}</b> SpatialAnalyzer root groups, <b className="sl-num">{formatCount(current)}</b> of <b className="sl-num">{formatCount(total)}</b> reviewed commands are current on SA {target}.</>
          ) : (
            <>{scopedGroup} holds <b className="sl-num">{formatCount(total)}</b> reviewed {commands(total)} for SA {target}. <Link to={indexHref}>Compare every group in the Command Index</Link>.</>
          )}
        </p>
      </section>

      <form className="catalog-filter__form" role="search" onSubmit={(event) => event.preventDefault()}>
        {showTargetFilter ? (
          <div className="catalog-filter__target">
            <span className="catalog-filter__label" id={`${id}-target`}>SpatialAnalyzer Target</span>
            <div className="catalog-seg" role="group" aria-labelledby={`${id}-target`}>
              {(targets.length > 0 ? targets : [releasedTarget]).map((value) => (
                <button type="button" key={value} aria-pressed={target === value} onClick={() => chooseTarget(value)}>
                  <span className="catalog-seg__prefix" aria-hidden="true">SA</span>{value}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="catalog-filter__fields">
          <label className="catalog-filter__query">
            <span className="catalog-filter__label">Command or Group</span>
            <span className="catalog-filter__search">
              <svg className="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" style={{stroke: 'var(--ac)'}} /></svg>
              <input
                type="search"
                value={query}
                placeholder={scopedGroup ? `Search ${scopedGroup}` : 'Search MP commands'}
                autoComplete="off"
                spellCheck={false}
                onChange={(event) => setQuery(event.currentTarget.value)}
              />
            </span>
          </label>

          {showGroupFilter ? (
            <label>
              <span className="catalog-filter__label">Group</span>
              <select value={group} onChange={(event) => setGroup(event.currentTarget.value)}>
                <option value="">All groups</option>
                {groups.map((value) => <option value={value} key={value}>{value}</option>)}
              </select>
            </label>
          ) : null}

          <label>
            <span className="catalog-filter__label">Validation</span>
            <select value={validation} onChange={(event) => setValidation(event.currentTarget.value)}>
              <option value="">All validation states</option>
              {validations.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
            </select>
          </label>
        </div>

        <div className="catalog-filter__status">
          <span className="catalog-filter__label" id={`${id}-status`}>Status</span>
          <div className="catalog-chips" role="group" aria-labelledby={`${id}-status`}>
            <button type="button" className="catalog-chip" aria-pressed={status === ''} onClick={() => setStatus('')}>
              All<span className="catalog-chip__count sl-num">{formatCount(total)}</span>
            </button>
            {presentStatuses.map((value) => (
              <button
                type="button"
                key={value}
                className="catalog-chip"
                data-status={value}
                aria-pressed={status === value}
                onClick={() => toggleStatus(value)}>
                {statusLabels[value]}<span className="catalog-chip__count sl-num">{formatCount(counts.get(value) ?? 0)}</span>
              </button>
            ))}
            {status && !isStatus(status) ? (
              <button type="button" className="catalog-chip" aria-pressed onClick={() => setStatus('')}>
                {displayValue(status)}<span className="catalog-chip__count sl-num">0</span>
              </button>
            ) : null}
          </div>
        </div>

        <div className="catalog-filter__summary">
          <p aria-live="polite" aria-atomic="true">
            {initialized ? (
              <>
                Showing <strong className="sl-num">{formatCount(visible.size)}</strong> of <strong className="sl-num">{formatCount(total)}</strong> {commands(total)}
                {showTargetFilter ? <> for SA {target}</> : null}
              </>
            ) : null}
          </p>
          <button type="button" className="catalog-filter__reset" onClick={reset}>
            Clear filters
          </button>
        </div>
        {initialized && visible.size === 0 ? (
          <p className="catalog-filter__empty">No commands match. Clear the filters or choose another status.</p>
        ) : null}
      </form>
    </div>
  );
}
