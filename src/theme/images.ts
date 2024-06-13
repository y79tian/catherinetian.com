import alaska from './images/alaska.jpg';
import arcticCircle from './images/arcticCircle.jpg';
import bahamas from './images/bahamas.jpg';
import boston from './images/boston.jpg';
import cancun from './images/cancun.jpg';
import darkProfile from './images/darkProfilePhoto.jpg';
import golf from './images/golf.jpg';
import la from './images/la.jpg';
import lightProfile from './images/lightProfilePhoto.jpg';
import newYork from './images/newYork.jpg';
import oldDB from './images/oldDb.jpg';
import oldKennie from './images/oldKenny.jpg';
import ottawa from './images/ottawa.jpg';
import pittsburgh from './images/pittsburgh.jpg';
import quebec from './images/quebec.jpg';
import rocket from './images/rocket.jpg';
import santaMonica from './images/santaMonica.jpg';
import satoshi from './images/satoshi.jpg';
import washington from './images/washington.jpg';
import youngDB from './images/youngDb.jpg';
import youngKennie from './images/youngKenny.jpg';
import twitter from './images/twitter.jpg';

export const travelImagesMetadata = [
  { src: alaska, city: 'Alaska', state: 'AK', country: 'USA' },
  { src: arcticCircle, city: 'Arctic Circle', state: 'AK', country: 'USA' },
  { src: bahamas, city: 'Nassau', state: 'Nassau', country: 'Bahamas' },
  { src: boston, city: 'Boston', state: 'MA', country: 'USA' },
  { src: cancun, city: 'Cancun', state: 'Quintana Roo', country: 'Mexico' },
  { src: la, city: 'Los Angeles', state: 'CA', country: 'USA' },
  { src: newYork, city: 'New York', state: 'NY', country: 'USA' },
  { src: ottawa, city: 'Ottawa', state: 'ON', country: 'Canada' },
  { src: pittsburgh, city: 'Pittsburgh', state: 'PA', country: 'USA' },
  { src: quebec, city: 'Quebec', state: 'QC', country: 'Canada' },
  { src: santaMonica, city: 'Santa Monica', state: 'CA', country: 'USA' },
  { src: washington, city: 'Washington', state: 'DC', country: 'USA' },
] as const;

export const CatImages = {
  youngKennie,
  oldKennie,
  youngDB,
  oldDB,
} as const;

const projectImages = {
  golf,
  rocket,
  satoshi,
  twitter,
};
export const LightImages = {
  profile: lightProfile,
  ...CatImages,
  ...projectImages,
} as const;

export const DarkImages = {
  profile: darkProfile,
  ...CatImages,
  ...projectImages,
} as const;
export type ThemeImages = typeof LightImages;
