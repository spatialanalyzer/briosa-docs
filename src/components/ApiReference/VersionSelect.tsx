import React, {useEffect, useId, useRef, useState} from 'react';

type Option = {value: string; label: string; badge?: string};
type Props = {label: string; value: string; options: Option[]; onChange: (value: string) => void};

export default function VersionSelect({label, value, options, onChange}: Props): React.JSX.Element {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const search = useRef({text: '', time: 0});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [open]);
  useEffect(() => {
    if (open) document.getElementById(`${id}-option-${active}`)?.scrollIntoView({block: 'nearest'});
  }, [open, active, id]);
  useEffect(() => { setOpen(false); }, [value]);

  function expand() {
    setActive(Math.max(0, options.findIndex((option) => option.value === value)));
    search.current = {text: '', time: 0};
    setOpen(true);
  }
  function choose(index: number) {
    setOpen(false);
    button.current?.focus();
    onChange(options[index].value);
  }
  function keyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      if (!open) { expand(); return; }
      if (event.key === 'Enter' || event.key === ' ') choose(active);
      else setActive(event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : Math.max(0, Math.min(options.length - 1, active + (event.key === 'ArrowDown' ? 1 : -1))));
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Tab') setOpen(false);
    else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      if (!open) expand();
      const time = Date.now();
      const text = (time - search.current.time < 700 ? search.current.text : '') + event.key.toLowerCase();
      search.current = {text, time};
      const match = options.findIndex((option) => option.label.toLowerCase().startsWith(text) || option.value.startsWith(text));
      if (match >= 0) setActive(match);
    }
  }

  return <div className="api-version-select" ref={root} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
  }}>
    <span className="api-version-label" id={`${id}-label`}>{label}</span>
    <button ref={button} type="button" role="combobox" aria-haspopup="listbox" aria-expanded={open}
      aria-labelledby={`${id}-label ${id}-value`} aria-controls={open ? `${id}-list` : undefined}
      aria-activedescendant={open ? `${id}-option-${active}` : undefined}
      className="api-version-trigger" onKeyDown={keyDown} onClick={() => open ? setOpen(false) : expand()}>
      <span id={`${id}-value`}>{selected ? `${selected.badge ? selected.badge + ' — ' : ''}${selected.label}` : 'Choose a Target'}</span>
      <svg className="api-version-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </button>
    {open && <ul className="api-version-options" id={`${id}-list`} role="listbox" aria-labelledby={`${id}-label`}>
      {options.map((option, index) => <li key={option.value} id={`${id}-option-${index}`} role="option"
        aria-selected={option.value === value} className={index === active ? 'api-version-option-active' : ''}
        onPointerMove={() => setActive(index)} onMouseDown={(event) => event.preventDefault()} onClick={() => choose(index)}>
        <span className="api-version-check" aria-hidden="true">{option.value === value ? '✓' : ''}</span>
        <span>{option.label}</span>{option.badge && <span className="api-version-badge">{option.badge}</span>}
      </li>)}
    </ul>}
  </div>;
}
