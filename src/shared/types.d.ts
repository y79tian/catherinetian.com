// custom.d.ts
declare module '*.pdf' {
  const content: string;
  // eslint-disable-next-line import/no-unused-modules
  export default content;
}
