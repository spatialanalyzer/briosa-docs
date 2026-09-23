import {createContext, type ReactNode} from 'react';

// Interactive additions to the standard Docusaurus sidebar item tree.
export const SidebarControls = createContext<Record<string, ReactNode>>({});
