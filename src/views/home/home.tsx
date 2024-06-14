import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';

import { IconButton } from '../../shared/iconButton/iconButton';
import { Page } from '../../shared/page/page';
import { BodyIconInfo, NameTitle1 } from '../../shared/typography/typography';
import { CommonUtils } from '../../utils';

import { iconMetadata, tagData, tagDataOnPhone } from './home.metadata';
import {
  BackgroundVideo,
  IconTextWrapper,
  InfoIconsWrapper,
  OverlayContent,
  Tag,
  TagsWrapper,
  TagsWrapperPhone,
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
        {tagData.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagsWrapper>
    );
  };
  const renderTagsOnPhone = () => {
    return (
      <TagsWrapperPhone>
        {tagDataOnPhone.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagsWrapperPhone>
    );
  };
  return (
    <Page showSocialMedias={false} canScroll={false}>
      <BackgroundVideo ref={ref} autoPlay loop muted playsInline>
        <source src={theme.videos.homeVideo} type='video/mp4' />
      </BackgroundVideo>
      <OverlayContent>
        <NameTitle1>Catherine (Yang) Tian</NameTitle1>
        {renderTags()}
        {renderTagsOnPhone()}
        <InfoIconsWrapper>
          {iconMetadata.map((item) => (
            <IconTextWrapper key={item.label}>
              <IconButton
                icon={item.icon}
                iconColor={theme.colors.textIconInfo}
                needPadding={false}
                onClick={() => handleIconClick(theme.links[item.link])}
              />
              <BodyIconInfo>{item.label}</BodyIconInfo>
            </IconTextWrapper>
          ))}
        </InfoIconsWrapper>
      </OverlayContent>
    </Page>
  );
};

export default Home;
