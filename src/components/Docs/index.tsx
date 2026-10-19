import React, {type ReactNode} from 'react';

/**
 * A procedure whose order matters. Wrap a Markdown ordered list:
 *
 *   <Steps>
 *
 *   1. First step.
 *   2. Second step.
 *
 *   </Steps>
 *
 * Each step becomes a numbered station on a line that a light pulse travels down.
 */
export function Steps({children}: {children: ReactNode}): ReactNode {
  return <div className="sl-steps">{children}</div>;
}

/**
 * A set of related destinations. Wrap a Markdown list of links; each link becomes a card.
 */
export function LinkCards({children}: {children: ReactNode}): ReactNode {
  return <div className="sl-linkcards">{children}</div>;
}
