import darkProfile from './images/darkProfilePhoto.jpg';
import lightProfile from './images/lightProfilePhoto.jpg';
import oldDB from './images/oldDb.jpg';
import oldKennie from './images/oldKenny.jpg';
import youndDB from './images/youngDb.jpg';
import youngKennie from './images/youngKenny.jpg';

export const LightImages = {
  profile: lightProfile,
  youngKennie,
  oldKennie,
  youngDB: youndDB,
  oldDB,
} as const;
export const DarkImages = {
  profile: darkProfile,
  youngKennie,
  oldKennie,
  youngDB: youndDB,
  oldDB,
} as const;
export type ThemeImages = typeof LightImages;
