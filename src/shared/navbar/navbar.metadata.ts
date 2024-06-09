import About from '../../views/about/about';
import Home from '../../views/home/home';
import Project from '../../views/project/project';

/* eslint-disable import/no-unused-modules */
export const viewsMetadata = [
  { name: 'Home', pathname: '/', src: Home },
  { name: 'About', pathname: '/about', src: About },
  { name: 'Projects', pathname: '/projects', src: Project },
] as const;

export const pathMap = new Map<string, number>(
  viewsMetadata.map((view, index) => [view.pathname, index]),
);

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
