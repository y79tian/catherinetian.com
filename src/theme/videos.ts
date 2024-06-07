import homeLightVideo from './videos/techLight.mp4';
import homeDarkVideo from './videos/techdark.mp4';

export const DarkVideo = { homeVideo: homeDarkVideo };
export const LightVideo = { homeVideo: homeLightVideo };

export type ThemeVideos = typeof DarkVideo;
