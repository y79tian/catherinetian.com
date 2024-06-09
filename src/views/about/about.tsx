import { useTheme } from 'styled-components';

import { Link } from '../../shared/link/link';
import { Page } from '../../shared/page/page';
import { Body2, Subtitle1 } from '../../shared/typography/typography';

import { introMetadata } from './about.metadata';
import {
  ContentContainer,
  ImageContainer,
  PageContainer,
  PageSection,
  StyledImage,
  StyledImageAnimation,
  StyledIntro,
  TravelImageContainer,
} from './about.styles';

const About = () => {
  const theme = useTheme();

  const renderAboutMe = () => {
    return (
      <PageSection $backgroundColor={theme.colors.cardBackgroundPrimary}>
        <ContentContainer $isColumn={false}>
          <StyledImage src={theme.images.profile} $maxHeight='24rem' />
          <StyledIntro>
            <Subtitle1>{introMetadata.introTitle}</Subtitle1>
            <Body2>{introMetadata.introBody1}</Body2>
            <Body2>
              {introMetadata.introBody2}
              <Link link={theme.links.satoshiIntro}>Satoshi.Art</Link>
              {introMetadata.introBody3}
              <Link link={theme.links.rocketIntro}>Rocket Video</Link>
              {introMetadata.introBody4}
              <Link link={theme.links.xonicIntro}>Xonic iTQ</Link>
              {introMetadata.introBody5}
            </Body2>
            <Body2>{introMetadata.introBody6}</Body2>
          </StyledIntro>
        </ContentContainer>
      </PageSection>
    );
  };
  const renderCatLover = () => {
    return (
      <PageSection $backgroundColor={theme.colors.cardBackgroundSecondary}>
        <ContentContainer $isColumn={true}>
          <Subtitle1>{introMetadata.besidesSDE}</Subtitle1>
          <Subtitle1>{introMetadata.catLover}</Subtitle1>
          <Body2>{introMetadata.catLoverIntro}</Body2>
          <ImageContainer>
            <StyledImageAnimation
              src={theme.images.youngDB}
              $maxHeight='14rem'
            />
            <StyledImageAnimation src={theme.images.oldDB} $maxHeight='14rem' />
            <StyledImageAnimation
              src={theme.images.youngKennie}
              $maxHeight='14rem'
            />
            <StyledImageAnimation
              src={theme.images.oldKennie}
              $maxHeight='14rem'
            />
          </ImageContainer>
        </ContentContainer>
      </PageSection>
    );
  };
  return (
    <Page>
      <PageContainer>
        {renderAboutMe()}
        {renderCatLover()}
        <PageSection $backgroundColor={theme.colors.cardBackgroundPrimary}>
          <ContentContainer $isColumn={true}>
            <Subtitle1>{introMetadata.besidesSDE}</Subtitle1>
            <Subtitle1>{introMetadata.travelEnthusiast}</Subtitle1>
            <Body2>{introMetadata.travelQuote}</Body2>
            <TravelImageContainer></TravelImageContainer>
          </ContentContainer>
        </PageSection>
      </PageContainer>
    </Page>
  );
};
export default About;
