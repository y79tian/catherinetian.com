const Links = {
  resume:
    'https://docs.google.com/document/d/10Ouara56934g9TBI2Wg68ETvOWVzzuoMTcji20UsCDg/edit?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/catherine-yang-tian/',
  github: 'https://github.com/y79tian',
  gmail: 'mailto:cath22tian@gmail.com',
  satoshiIntro:
    'https://www.youtube.com/watch?v=T8IOJyI7NaE&ab_channel=DoveBennett',
  rocketIntro: 'https://x.com/RocketVideos3',
  xonicIntro: 'https://xonicgolf.com/',
  golfProject: 'https://www.youtube.com/embed/PVuhYG_10vo',
  rocketProject: 'https://www.youtube.com/embed/VuI70Xner5A',
  satoshiProject: 'https://www.youtube.com/embed/nY1b0u9N-rA',
} as const;

export type ThemeLinks = typeof Links;

export default Links;
