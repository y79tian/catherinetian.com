/* eslint-disable import/no-unused-modules */
const Musics = {} as const;

const MusicsSrcs = [] as const;

export type ThemeMusics = typeof Musics;

export type ThemeMusicSrcs = typeof MusicsSrcs;

export { Musics, MusicsSrcs };
