import React, {useEffect, useMemo, useRef, useState} from 'react';
import {decorateCode} from './code';

const copyIcon = '<svg class="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="8.5" width="11" height="11" rx="1.5"/><path d="M15.5 8.5V6A1.5 1.5 0 0 0 14 4.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/></svg>';
const expandIcon = '<svg class="sl-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>';

// Copy and expand controls need JavaScript, so they are added after hydration
// rather than rendered: without it, the code stays readable and scrollable,
// and search indexes the contract without button text.
// The accessible name starts with the visible words, and still names the
// button on narrow screens, where only its icon shows.
function control(action: 'copy' | 'expand', text: string, label: string, icon: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = action === 'copy' ? 'sl-copy api-copy' : 'api-expand';
  button.dataset.apiAction = action;
  button.setAttribute('aria-label', label);
  button.innerHTML = `${icon}<span>${text}</span>`;
  return button;
}

function enhance(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('.api-code').forEach((block, index) => {
    const bar = block.querySelector('.api-code-bar');
    const pre = block.querySelector('pre');
    if (!bar || !pre || bar.querySelector('[data-api-action]')) return;
    const language = block.querySelector('.api-code-label')?.textContent;
    if (block.hasAttribute('data-long')) {
      pre.id ||= `api-code-${index + 1}`;
      const expand = control('expand', `Show All ${block.dataset.lines} Lines`, `Show All ${block.dataset.lines} Lines`, expandIcon);
      expand.setAttribute('aria-expanded', 'false');
      expand.setAttribute('aria-controls', pre.id);
      bar.append(expand);
    }
    bar.append(control('copy', 'Copy', language ? `Copy ${language} Code` : 'Copy Code', copyIcon));
  });
  root.querySelectorAll<HTMLElement>('.api-rpc-path').forEach((path) => {
    if (!path.nextElementSibling?.matches('[data-api-action]')) path.after(control('copy', 'Copy', 'Copy the Method Path', copyIcon));
  });
}

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.append(area);
    area.select();
    const copied = document.execCommand('copy');
    area.remove();
    return copied;
  }
}

export default function Contract({html}: {html: string}): React.JSX.Element {
  const root = useRef<HTMLDivElement>(null);
  // One object per page: React 19 rewrites innerHTML whenever this prop's
  // identity changes, which would drop the controls added after hydration.
  const inner = useMemo(() => ({__html: decorateCode(html)}), [html]);
  const [status, setStatus] = useState('');
  useEffect(() => {
    if (root.current) enhance(root.current);
    setStatus('');
  }, [inner]);

  async function onClick(event: React.MouseEvent<HTMLDivElement>) {
    const button = (event.target as Element).closest<HTMLButtonElement>('button[data-api-action]');
    if (!button || !root.current?.contains(button)) return;
    const block = button.closest<HTMLElement>('.api-code');
    const text = button.querySelector('span');
    if (button.dataset.apiAction === 'expand' && block && text) {
      const open = !block.hasAttribute('data-open');
      block.toggleAttribute('data-open', open);
      button.setAttribute('aria-expanded', String(open));
      text.textContent = open ? 'Show Fewer Lines' : `Show All ${block.dataset.lines} Lines`;
      button.setAttribute('aria-label', text.textContent);
      if (!open && block.getBoundingClientRect().top < 0) block.scrollIntoView({block: 'start'});
      return;
    }
    const source = block ? block.querySelector('pre code')?.textContent?.replace(/\n$/, '') : button.previousElementSibling?.textContent;
    if (!source || !text) return;
    const copied = await copy(source);
    setStatus(copied ? 'Copied to the clipboard.' : 'Copying is not available in this browser.');
    if (!copied) return;
    button.dataset.copied = '';
    text.textContent = 'Copied';
    window.setTimeout(() => {
      delete button.dataset.copied;
      text.textContent = 'Copy';
    }, 1600);
  }

  return <>
    {/* Delegated clicks from the copy and expand buttons added after hydration. */}
    <div ref={root} className="api-contract" onClick={onClick} dangerouslySetInnerHTML={inner} />
    <p className="api-live" aria-live="polite">{status}</p>
  </>;
}
