export type ThemeColors = {
  overlay: string;
  textBackground: string;
  whiteDefault: string;
  blackDefault: string;
  systemBackgroundPrimary: string;
  systemBackgroundSecondary: string;
  systemBackgroundSecondaryRGB: string;
  systemBackgroundTertiary: string;
  elevatedBackgroundPrimary: string;
  elevatedBackgroundSecondary: string;
  elevatedBackgroundTertiary: string;
  InfoIconBackgroundPrimary: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textIconInfo: string;
  printBed: string;
  printBedGridMajor: string;
  printBedGridMinor: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  grey6: string;
  purpleExtraLight: string;
  purpleLight: string;
  purpleDefault: string;
  purpleDark: string;
  greenExtraLight: string;
  greenLight: string;
  greenDefault: string;
  greenDark: string;
  yellowExtraLight: string;
  yellowLight: string;
  yellowDefault: string;
  yellowDark: string;
  redLight: string;
  redDark: string;
  redDefault: string;
  blueLight: string;
  blueDefault: string;
  blueDark: string;
  indigoExtraLight: string;
  indigoLight: string;
  indigoDefault: string;
  indigoDark: string;
};

export const LightColors: ThemeColors = {
  overlay: 'rgba(0, 0, 0, 0.3)',
  textBackground: 'rgba(255, 255, 255, 0.7)',

  whiteDefault: '#ffffff',
  blackDefault: '#000000',

  // SEMANTIC colors
  // system: backgrounds that are truly behind everything
  // (e.g: bg for slice view, etc)
  systemBackgroundPrimary: '#FBFBFB', // regular
  systemBackgroundSecondary: '#F1F1F1', // when hovered, pressed, etc
  systemBackgroundSecondaryRGB: '241, 241, 241', // when hovered, pressed, etc
  systemBackgroundTertiary: '#EEEEEE', // disabled

  // elevated: backgrounds for UI components that sit on top of the system background
  // (e.g: card, dropdowns, modals, etc)
  elevatedBackgroundPrimary: '#FFFFFF', // regular
  elevatedBackgroundSecondary: '#F8F8F8', // when hovered, pressed, etc
  elevatedBackgroundTertiary: '#EFEFEF', // disabled

  // InfoIcon: the social media icons like LinkedIn, Github
  InfoIconBackgroundPrimary: '#7F7F7F',

  // use for text
  textPrimary: '#000000', // regular
  textSecondary: '#7F7F7F', // captions, subtitles
  textTertiary: '#A8A8A8', // disabled
  textIconInfo: '#fbfbfb',

  // use for slice views
  printBed: '#EBEBF0', // print bed base
  printBedGridMajor: '#89898c', // major grid
  printBedGridMinor: '#dadadd', // minor grid

  // DECLARATIVE colors
  // ideally for borders, special UI elements (e.g. certain icons, alerts)
  // use as needed
  grey1: '#FFFFFF',
  grey2: '#F2F2F7',
  grey3: '#E5E5EA',
  grey4: '#AEAEB2',
  grey5: '#8E8E93',
  grey6: '#19191B',

  purpleExtraLight: '#C8ADF9',
  purpleLight: '#A852FF',
  purpleDefault: '#810BF8',
  purpleDark: '#5E16BA',

  greenExtraLight: '#A4E4D4',
  greenLight: '#23D8B6',
  greenDefault: '#1DBC94',
  greenDark: '#17A078',

  yellowExtraLight: '#FEE199',
  yellowLight: '#FFE26A',
  yellowDefault: '#FED941',
  yellowDark: '#FDB300',

  redLight: '#FF8686',
  redDefault: '#FE4141',
  redDark: '#D93838',

  blueLight: '#AED6F1',
  blueDefault: '#5DADE2',
  blueDark: '#2E86C1',

  indigoExtraLight: '#818cf8', // tailwind indigo 400
  indigoLight: '#6366f1', // tailwind indigo 500
  indigoDefault: '#4f46e5', // tailwind indigo 600
  indigoDark: '#4338ca', // tailwind indigo 700
} as const;

export const DarkColors: ThemeColors = {
  overlay: 'rgba(0, 0, 0, 0.5)',
  textBackground: 'rgba(0, 0, 0, 0.7)',

  whiteDefault: '#E4E4E4',
  blackDefault: '#000000',

  // SEMANTIC colors
  systemBackgroundPrimary: '#121212',
  systemBackgroundSecondary: '#232323',
  systemBackgroundSecondaryRGB: '35, 35, 35',
  systemBackgroundTertiary: '#272727',

  elevatedBackgroundPrimary: '#1D1D1D',
  elevatedBackgroundSecondary: '#2F2F2F',
  elevatedBackgroundTertiary: '#323232',

  // InfoIcon: the social media icons like LinkedIn, Github
  InfoIconBackgroundPrimary: '#FFFFFF',

  textPrimary: '#E4E4E4',
  textSecondary: '#848484',
  textTertiary: '#4D4D4D',
  textIconInfo: '#000000',

  printBed: '#343434',
  printBedGridMajor: '#cdcdd0',
  printBedGridMinor: '#545456',

  // DECLARATIVE colors
  grey1: '#171717',
  grey2: '#1C1C1E',
  grey3: '#343434',
  grey4: '#383838',
  grey5: '#6A6A6A',
  grey6: '#E5E5E5',

  purpleExtraLight: '#C8ADF9',
  purpleLight: '#AC77F4',
  purpleDefault: '#8B52FC',
  purpleDark: '#8655ED',

  greenExtraLight: '#A4E4D4',
  greenLight: '#1DBC94',
  greenDefault: '#17A078',
  greenDark: '#0B8E69',

  yellowExtraLight: '#FEE199',
  yellowLight: '#FED941',
  yellowDefault: '#FDB300',
  yellowDark: '#EAA500',

  redLight: '#FE4141',
  redDefault: '#D93838',
  redDark: '#D93838',

  blueLight: '#AED6F1',
  blueDefault: '#5DADE2',
  blueDark: '#2E86C1',

  indigoExtraLight: '#4338ca', // tailwind indigo 700
  indigoLight: '#4f46e5', // tailwind indigo 600
  indigoDefault: '#6366f1', // tailwind indigo 500
  indigoDark: '#818cf8', // tailwind indigo 400
} as const;
