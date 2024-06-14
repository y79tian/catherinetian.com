// custom.d.ts
declare module '*.pdf' {
  const content: string;
  // eslint-disable-next-line import/no-unused-modules
  export default content;
}
declare module '*.mp3';
declare module '*.mp4';
declare module '*.jpg';

interface Window {
  gtag: (...args: any[]) => void;
}
