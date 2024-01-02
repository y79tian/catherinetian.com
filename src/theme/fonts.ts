const Fonts = {
  roboto: "'Roboto', sans-serif",
  BalooThambi2: "'Baloo Thambi 2', sans-serif",

  // for Chinese
  noto: "'Noto Sans Simplified Chinese', sans-serif",
} as const;

export type ThemeFonts = typeof Fonts;

export default Fonts;
