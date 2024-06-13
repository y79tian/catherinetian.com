import { useTheme } from 'styled-components';

import { Link } from '../../shared/link/link';
import { Page } from '../../shared/page/page';
import { Body2, CityName, Subtitle1 } from '../../shared/typography/typography';
import { CatImages, travelImagesMetadata } from '../../theme/images';

import { introMetadata } from './about.metadata';
import {
  ContentContainer,
  ImageContainer,
  ImageWrapper,
  Overlay,
  PageContainer,
  PageSection,
  StyledImage,
  StyledImageAnimation,
  StyledIntro,
  StyledTravelImage,
  TravelImageContainer,
} from './about.styles';

const About = () => {
  const theme = useTheme();

  const renderAboutMe = () => {
    return (
      <PageSection $backgroundColor={theme.colors.cardBackgroundPrimary}>
        <ContentContainer $isColumn={false}>
          <StyledImage src={theme.images.profile} $maxWidth='25rem' />
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
            {Object.values(CatImages).map((src, index) => (
              <StyledImageAnimation key={index} src={src} $maxWidth='14rem' />
            ))}
          </ImageContainer>
        </ContentContainer>
      </PageSection>
    );
  };

  const renderTravelSection = () => {
    return (
      <PageSection $backgroundColor={theme.colors.cardBackgroundPrimary}>
        <ContentContainer $isColumn={true}>
          <Subtitle1>{introMetadata.besidesSDE}</Subtitle1>
          <Subtitle1>{introMetadata.travelEnthusiast}</Subtitle1>
          <Body2>{introMetadata.travelQuote}</Body2>
          <TravelImageContainer>
            {travelImagesMetadata.map(
              ({ src, city, state, country }, index) => (
                <ImageWrapper key={index} $maxWidth='14rem'>
                  <StyledTravelImage key={index} src={src} />
                  <Overlay className='overlay'>
                    <CityName>{city}</CityName>
                    <CityName>
                      {state}, {country}
                    </CityName>
                  </Overlay>
                </ImageWrapper>
              ),
            )}
          </TravelImageContainer>
        </ContentContainer>
      </PageSection>
    );
  };
  return (
    <Page>
      <PageContainer>
        {renderAboutMe()}
        {renderCatLover()}
        {renderTravelSection()}
      </PageContainer>
    </Page>
  );
};
export default About;
