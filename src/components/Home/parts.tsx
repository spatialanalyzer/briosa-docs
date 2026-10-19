// Small pieces the homepage sections share: motion, tabs, the copy button, the Caliper b mark, and section heads.
import {useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent, type ReactNode} from 'react';
import clsx from 'clsx';

import styles from '@site/src/pages/index.module.css';
import Icon from './Icon';
import {getMotion, serverMotion, setMotionPaused, subscribeMotion, type Motion} from './runtime';

/** The page motion state; the server and hydration render it as playing. */
export function useMotion(): Motion {
  return useSyncExternalStore(subscribeMotion, getMotion, serverMotion);
}

/** The homepage <main>. While the visitor pauses motion, CSS pauses its animations and the navbar and footer loops. */
export function MotionRoot({className, children}: {readonly className?: string; readonly children: ReactNode}): ReactNode {
  const {paused} = useMotion();
  return (
    <main className={className} data-motion={paused ? 'paused' : undefined}>
      {children}
    </main>
  );
}

/**
 * Pauses and plays every animation on the homepage (WCAG 2.2.2). The label
 * names the action, so the button does not also carry aria-pressed. CSS hides
 * it under reduced motion, where everything is already still.
 */
export function MotionToggle({className}: {readonly className?: string}): ReactNode {
  const {paused} = useMotion();
  return (
    <button type="button" className={className} onClick={() => setMotionPaused(!getMotion().paused)}>
      <Icon name={paused ? 'play' : 'pause'} />
      {paused ? 'Play Motion' : 'Pause Motion'}
    </button>
  );
}

/**
 * Roving-tabindex tabs: arrow keys, Home, and End move the selection and
 * focus; only the selected tab is in the tab order.
 */
export function useTabs(count: number, onChange?: (index: number) => void) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number, focus: boolean) {
    setSelected(index);
    if (focus) tabs.current[index]?.focus();
    onChange?.(index);
  }

  function tabProps(index: number, tabId: string, panelId: string) {
    return {
      role: 'tab' as const,
      type: 'button' as const,
      id: tabId,
      'aria-selected': index === selected,
      'aria-controls': panelId,
      tabIndex: index === selected ? 0 : -1,
      ref: (element: HTMLButtonElement | null) => {
        tabs.current[index] = element;
      },
      onClick: () => select(index, false),
      onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
        let next: number | null = null;
        if (event.key === 'ArrowRight') next = (index + 1) % count;
        else if (event.key === 'ArrowLeft') next = (index - 1 + count) % count;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = count - 1;
        if (next !== null) {
          event.preventDefault();
          select(next, true);
        }
      },
    };
  }

  return {selected, tabProps};
}

type CopyButtonProps = {
  /** Accessible name, such as "Copy install command". */
  readonly label: string;
  /** The text to place on the clipboard. */
  readonly text: () => string;
  /** The element to select for manual copying when the clipboard is unavailable. */
  readonly source: () => Element | null;
  readonly className?: string;
};

/** Copies to the clipboard, or selects the source text when the clipboard is unavailable. */
export function CopyButton({label, text, source, className}: CopyButtonProps): ReactNode {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function settle(message: string, ok: boolean) {
    setStatus(message);
    setCopied(ok);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setCopied(false);
      setStatus('');
    }, 1600);
  }

  function selectSource() {
    try {
      const element = source();
      const selection = window.getSelection();
      if (!element || !selection) return;
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      settle('Selected. Press Ctrl+C to copy.', false);
    } catch {
      // Selection is unavailable too; leave the text in place for the reader.
    }
  }

  function copy() {
    const value = text();
    try {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(value).then(() => settle('Copied to clipboard', true), selectSource);
      } else {
        selectSource();
      }
    } catch {
      selectSource();
    }
  }

  return (
    <>
      <button
        type="button"
        className={clsx('sl-copy', className)}
        aria-label={label}
        data-copied={copied ? '' : undefined}
        onClick={copy}>
        <Icon name={copied ? 'check' : 'copy'} className={styles.copyIco} />
        <span className={styles.copyLabel}>{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <span className={styles.srOnly} aria-live="polite">
        {status}
      </span>
    </>
  );
}

/** The Caliper b mark: the jaw slides down the beam and closes on the point. */
export function CaliperMark({className}: {readonly className?: string}): ReactNode {
  return (
    <svg className={clsx(styles.mark, className)} viewBox="40 16 176 214" aria-hidden="true" focusable="false">
      <path className={styles.mkTick} d="M43 52H63M43 92H63M43 132H63M43 172H63" fill="none" strokeWidth="7" />
      <circle className={styles.mkRing} cx="144" cy="166" r="15" vectorEffect="non-scaling-stroke" />
      <path className={styles.mkBeam} d="M91 34V212H153" fill="none" strokeWidth="30" strokeLinecap="square" />
      <path className={styles.mkJaw} d="M131 120H197V172" fill="none" strokeWidth="30" strokeLinecap="square" />
      <circle className={styles.mkPt} cx="144" cy="166" r="15" />
    </svg>
  );
}

/** Section header: a laser kicker, a title, and an optional lead. */
export function ChannelHead({
  kicker,
  id,
  title,
  children,
}: {
  readonly kicker: string;
  readonly id: string;
  readonly title: string;
  readonly children?: ReactNode;
}): ReactNode {
  return (
    <header className={styles.chanHead}>
      <p className={clsx('sl-kicker sl-hud', styles.kicker)}>{kicker}</p>
      <h2 id={id} className={styles.chanTitle}>
        {title}
      </h2>
      {children ? <p className={styles.chanLead}>{children}</p> : null}
    </header>
  );
}
