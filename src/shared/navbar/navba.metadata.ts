/* eslint-disable import/no-unused-modules */
export const viewsMetadata = [
  { name: 'Home', pathname: '/' },
  { name: 'About', pathname: '/about' },
  { name: 'Projects', pathname: '/projects' },
] as const;

export const hotkeysInfoMetadata = [
  { key: 'T', action: 'Switch theme' },
  { key: 'I', action: 'Open / Close Hotkeys Info' },
  { key: '→', action: 'Switch to next view' },
  { key: '←', action: 'Switch to previous view' },
  { key: '↑', action: 'Scroll to top' },
  { key: '↓', action: 'Scroll to bottom' },
  { key: 'Tab', action: 'Play next music' },
  { key: 'Space', action: 'Play / Pause music' },
  { key: 'Esc', action: 'Close modal' },
] as const;
