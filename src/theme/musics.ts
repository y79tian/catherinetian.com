/* eslint-disable import/no-unused-modules */
import aeom from './musics/allEyesOnMe.mp3';
import barbie from './musics/danceTheNight.mp3';
import flower from './musics/flower.mp3';
import jay from './musics/jaychou.mp3';
const Musics = {
  barbie: 'Dance The Night',
  flower: 'Flower',
  aeom: 'All Eyes On Me',
  jay: '四面楚歌',
} as const;

const MusicsSrcs = [
  { src: aeom, name: 'All Eyes On Me' },
  { src: barbie, name: 'Dance The Night' },
  { src: flower, name: 'Flower' },
  { src: jay, name: '四面楚歌' },
] as const;

export type ThemeMusics = typeof Musics;

export type ThemeMusicSrcs = typeof MusicsSrcs;

export { Musics, MusicsSrcs };
