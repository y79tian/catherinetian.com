import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';

import { IconButton } from '../../shared/iconButton/iconButton';
import { Page } from '../../shared/page/page';
import { BodyIconInfo, NameTitle1 } from '../../shared/typography/typography';
import { CommonUtils } from '../../utils';

import {
  BackgroundVideo,
  IconTextWrapper,
  InfoIconsWrapper,
  OverlayContent,
  Tag,
  TagsWrapper,
} from './home.styles';

const Home = () => {
  // const theme = useAppSelector((state) => state.theme.theme);
  const theme = useTheme();
  const { handleIconClick } = CommonUtils;
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const videoRef = ref.current;
    const handleCanPlay = () => {
      videoRef?.play();
    };
    if (videoRef) {
      videoRef.load();
      videoRef.addEventListener('canplay', handleCanPlay);
    }
    return () => {
      if (videoRef) {
        videoRef.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, [theme.videos.homeVideo]);

  const renderTags = () => {
    return (
      <TagsWrapper>
        <Tag>React</Tag>
        <Tag>Node</Tag>
        <Tag>Go</Tag>
        <Tag>Cloud</Tag>
        <Tag>Full Stack</Tag>
        <Tag>Machine Learning</Tag>
      </TagsWrapper>
    );
  };
  return (
    <Page showSocialMedias={false} canScroll={false}>
      <BackgroundVideo ref={ref} autoPlay loop muted>
        <source src={theme.videos.homeVideo} type='video/mp4' />
      </BackgroundVideo>
      <OverlayContent>
        <NameTitle1>Catherine (Yang) Tian</NameTitle1>
        {renderTags()}
        <InfoIconsWrapper>
          <IconTextWrapper>
            <IconButton
              icon='linkedin'
              iconColor={theme.colors.textIconInfo}
              needPadding={false}
              onClick={() => handleIconClick(theme.links.linkedin)}
            />
            <BodyIconInfo>LinkedIn</BodyIconInfo>
          </IconTextWrapper>
          <IconTextWrapper>
            <IconButton
              icon='github'
              iconColor={theme.colors.textIconInfo}
              needPadding={false}
              onClick={() => handleIconClick(theme.links.github)}
            />
            <BodyIconInfo>Github</BodyIconInfo>
          </IconTextWrapper>
          <IconTextWrapper>
            <IconButton
              iconColor={theme.colors.textIconInfo}
              icon='resume'
              needPadding={false}
              onClick={() => handleIconClick(theme.links.resume)}
            />
            <BodyIconInfo>Resume</BodyIconInfo>
          </IconTextWrapper>
          <IconTextWrapper>
            <IconButton
              iconColor={theme.colors.textIconInfo}
              icon='email'
              needPadding={false}
              onClick={() => CommonUtils.handleIconClick(theme.links.gmail)}
            />
            <BodyIconInfo>Gmail</BodyIconInfo>
          </IconTextWrapper>
        </InfoIconsWrapper>
      </OverlayContent>
    </Page>
  );
};

export default Home;
