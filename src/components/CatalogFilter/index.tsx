import React, {useEffect, useState} from 'react';

import './styles.css';

type CatalogFilterProps = {
  readonly scopedGroup?: string;
  readonly showGroupFilter?: boolean;
  readonly showTargetFilter?: boolean;
};

type FilterOptions = {
  readonly targets: readonly string[];
  readonly groups: readonly string[];
  readonly validations: readonly string[];
};

const releasedTarget = '2026.1.0529.7';
const statusOptions = [
  ['current', 'Current'],
  ['next', 'Next'],
  ['undecided', 'Undecided'],
  ['uncommitted', 'Uncommitted'],
  ['excluded', 'Excluded'],
  ['sdk-unavailable', 'SDK Unavailable'],
] as const;

function displayValue(value: string): string {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace('Sdk ', 'SDK ');
}

export default function CatalogFilter({
  scopedGroup,
  showGroupFilter = false,
  showTargetFilter = false,
}: CatalogFilterProps): React.JSX.Element {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState(releasedTarget);
  const [group, setGroup] = useState('');
  const [status, setStatus] = useState('');
  const [validation, setValidation] = useState('');
  const [options, setOptions] = useState<FilterOptions>({targets: [], groups: [], validations: []});
  const [visibleCount, setVisibleCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    const targets = new Set(Array.from(
      document.querySelectorAll<HTMLTableRowElement>('.catalog-command-table tbody tr'),
      (row) => row.dataset.target ?? releasedTarget,
    ));
    const requestedTarget = parameters.get('target');
    setTarget(requestedTarget && targets.has(requestedTarget) ? requestedTarget : releasedTarget);
    setQuery(parameters.get('q') ?? '');
    setGroup(showGroupFilter ? parameters.get('group') ?? '' : '');
    setStatus(parameters.get('status') ?? '');
    setValidation(parameters.get('validation') ?? '');
    setInitialized(true);
  }, [showGroupFilter]);

  useEffect(() => {
    if (!initialized) return;
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const rows = Array.from(
      document.querySelectorAll<HTMLTableRowElement>('.catalog-command-table tbody tr'),
    );
    const targets = new Set<string>();
    const groups = new Set<string>();
    const validations = new Set<string>();
    let count = 0;
    let total = 0;
    for (const row of rows) {
      const rowTarget = row.dataset.target ?? releasedTarget;
      targets.add(rowTarget);
      const matchesTarget = rowTarget === target;
      if (matchesTarget) {
        total += 1;
        for (const path of (row.dataset.group ?? '').split(' | ')) {
          if (path) groups.add(path);
        }
        if (row.dataset.validation) validations.add(row.dataset.validation);
      }
      const haystack = `${row.dataset.command ?? ''} ${row.dataset.group ?? ''}`.toLocaleLowerCase();
      const matches =
        matchesTarget &&
        (!normalizedQuery || haystack.includes(normalizedQuery)) &&
        (!group || (row.dataset.group ?? '').split(' | ').includes(group)) &&
        (!status || row.dataset.status === status) &&
        (!validation || row.dataset.validation === validation);
      row.hidden = !matches;
      if (matches) count += 1;
    }
    setOptions({
      targets: [...targets].sort((left, right) => right.localeCompare(left, undefined, {numeric: true})),
      groups: [...groups].sort((left, right) => left.localeCompare(right)),
      validations: [...validations].sort((left, right) => left.localeCompare(right)),
    });
    setVisibleCount(count);
    setTotalCount(total);

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
    window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`);
  }, [group, initialized, query, showGroupFilter, showTargetFilter, status, target, validation]);

  const reset = (): void => {
    setQuery('');
    setGroup('');
    setStatus('');
    setValidation('');
  };

  return (
    <form className="catalog-filter" role="search" onSubmit={(event) => event.preventDefault()}>
      <div className="catalog-filter__fields">
        <label className="catalog-filter__query">
          <span>Command or group</span>
          <input
            type="search"
            value={query}
            placeholder={scopedGroup ? `Search ${scopedGroup}` : 'Search MP commands'}
            onChange={(event) => setQuery(event.currentTarget.value)}
          />
        </label>

        {showTargetFilter ? (
          <label>
            <span>SpatialAnalyzer target</span>
            <select value={target} onChange={(event) => {
              setTarget(event.currentTarget.value);
              setGroup('');
              setValidation('');
            }}>
              {options.targets.length === 0 ? <option value={releasedTarget}>{releasedTarget}</option> : null}
              {options.targets.map((value) => <option value={value} key={value}>{value}</option>)}
            </select>
          </label>
        ) : null}

        {showGroupFilter ? (
          <label>
            <span>Group</span>
            <select value={group} onChange={(event) => setGroup(event.currentTarget.value)}>
              <option value="">All groups</option>
              {options.groups.map((value) => <option value={value} key={value}>{value}</option>)}
            </select>
          </label>
        ) : null}

        <label>
          <span>Status</span>
          <select value={status} onChange={(event) => setStatus(event.currentTarget.value)}>
            <option value="">All statuses</option>
            {statusOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
          </select>
        </label>

        <label>
          <span>Validation</span>
          <select value={validation} onChange={(event) => setValidation(event.currentTarget.value)}>
            <option value="">All validation states</option>
            {options.validations.map((value) => <option value={value} key={value}>{displayValue(value)}</option>)}
          </select>
        </label>
      </div>

      <div className="catalog-filter__summary">
        <p aria-live="polite" aria-atomic="true">
          Showing <strong>{visibleCount}</strong> of <strong>{totalCount}</strong> commands
          {showTargetFilter ? <> for SA {target}</> : null}
        </p>
        <button type="button" className="button button--secondary button--sm" onClick={reset}>
          Clear filters
        </button>
      </div>
    </form>
  );
}
