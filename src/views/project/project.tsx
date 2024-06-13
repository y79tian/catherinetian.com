import { useTheme } from 'styled-components';

import { Page } from '../../shared/page/page';
import {
  Body2,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Subtitle5,
} from '../../shared/typography/typography';
import { PageContainer, PageSection } from '../about/about.styles';

import {
  golfMetadata,
  ProjectBasicMetadata,
  ProjectMetadata,
  ProjectOverview,
  rocketMetadata,
  satoshiMetadata,
  twitterMetadata,
} from './project.metadata';
import {
  ColorBar,
  ContentContainer,
  ContentWrapper,
  ImageSectionWrapper,
  StyledIframe,
  StyledImage,
  TextSection,
  TextWrapper,
  TitleTag,
} from './project.styles';

const Project = () => {
  const theme = useTheme();
  const renderTitleSection = (name: string) => {
    return (
      <TitleTag>
        <ColorBar />
        <Subtitle2>{name}</Subtitle2>
      </TitleTag>
    );
  };
  const renderImageSection = (metadata: ProjectBasicMetadata) => {
    return (
      <ImageSectionWrapper>
        <TextSection>
          {metadata.basicInfo.map((item) => (
            <TextWrapper key={item.label}>
              <Subtitle4 indigo>{item.label}: </Subtitle4>
              <Subtitle5>{item.value}</Subtitle5>
            </TextWrapper>
          ))}
        </TextSection>
        <StyledImage src={theme.images[metadata.ImageSrc]} $maxWidth='60rem' />
      </ImageSectionWrapper>
    );
  };
  const renderOverview = (projectOverview: ProjectOverview) => {
    return (
      <ContentWrapper>
        <Subtitle3>Overview</Subtitle3>
        <Body2>{projectOverview.overview}</Body2>
        <Subtitle1>My contribution:</Subtitle1>
        {projectOverview.contribution.map((item) => (
          <Body2 key={item}>- {item}</Body2>
        ))}
        {projectOverview.youtubeSrc && (
          <StyledIframe
            src={theme.links[projectOverview.youtubeSrc]}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        )}
      </ContentWrapper>
    );
  };

  const renderProject = (
    projectData: ProjectMetadata,
    backgroundColor: string,
  ) => {
    return (
      <PageSection $backgroundColor={theme.colors[backgroundColor]}>
        <ContentContainer>
          {renderTitleSection(projectData.name)}
          {renderImageSection(projectData.basic)}
          {renderOverview(projectData.overview)}
        </ContentContainer>
      </PageSection>
    );
  };
  return (
    <Page>
      <PageContainer>
        {renderProject(golfMetadata, 'cardBackgroundPrimary')}
      </PageContainer>
      <PageContainer>
        {renderProject(rocketMetadata, 'cardBackgroundSecondary')}
      </PageContainer>
      <PageContainer>
        {renderProject(satoshiMetadata, 'cardBackgroundPrimary')}
      </PageContainer>
      <PageContainer>
        {renderProject(twitterMetadata, 'cardBackgroundSecondary')}
      </PageContainer>
    </Page>
  );
};
export default Project;
