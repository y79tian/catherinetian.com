const ZIndexes = {
  view: 1,

  navBar: 100,
  modal: 100,
} as const;

export type ThemeZIndexes = typeof ZIndexes;

export default ZIndexes;
