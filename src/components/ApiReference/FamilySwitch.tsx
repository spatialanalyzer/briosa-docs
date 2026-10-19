import React from 'react';
import Link from '@docusaurus/Link';

export const familyNames: Record<string, string> = {grpc: 'gRPC', dotnet: '.NET', python: 'Python', javascript: 'JavaScript and TypeScript'};

// The same page in each API family. The family being read is marked, and a
// family that does not document the page is left out rather than shown dead.
export default function FamilySwitch({family, links, label}: {family: string; links: Partial<Record<string, string>>; label: string}): React.JSX.Element | null {
  const families = Object.keys(familyNames).filter((f) => f === family || links[f]);
  if (families.length < 2) return null;
  return <nav className="api-family-switch" aria-label={label}>
    <span className="sl-hud" aria-hidden="true">API</span>
    <ul>{families.map((f) => <li key={f}>{f === family
      ? <span aria-current="page">{familyNames[f]}</span>
      : <Link to={links[f]!}>{familyNames[f]}</Link>}</li>)}</ul>
  </nav>;
}
