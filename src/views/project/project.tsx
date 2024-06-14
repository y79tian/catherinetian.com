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
  TextWrapperInRow,
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
      <PageSection $backgroundColor={theme.colors.cardBackgroundPrimary}>
        <ContentContainer>
          {renderTitleSection('Other projects')}
          <TextSection>
            <TextWrapperInRow>
              <Subtitle3>Elasticity </Subtitle3>
              <Body2>(2023 Sept - 2023 Oct)</Body2>
            </TextWrapperInRow>
            <Body2>
              - Design and implement a scalable, fault-tolerant web service on
              AWS to dynamically handle variable traffic loads while optimizing
              costs.
            </Body2>
            <Body2>
              - Developed horizontally scalable web services, automating the
              provisioning of <b>EC2 instances</b>, configuring security groups,
              and managing <b>IAM</b> roles using <b>AWS SDK</b> for <b>Java</b>{' '}
              and <b>Terraform</b>.
            </Body2>
            <Body2>
              - Leveraged AWS services such as{' '}
              <b>Elastic Load Balancers (ALBs)</b>,
              <b>Auto Scaling Groups (ASGs)</b> and <b>CloudWatch</b> to achieve
              high availability and cost efficiency. Optimized cost and
              performance by implementing auto-scaling policies based on
              real-time metrics.
            </Body2>
          </TextSection>
          <TextSection>
            <TextWrapperInRow>
              <Subtitle3>Containers: Docker and Kubernetes</Subtitle3>
              <Body2>(2023 Sept - 2023 Oct)</Body2>
            </TextWrapperInRow>
            <Body2>
              - It builds a real-time application similar to WeChat, using a
              microservices architecture to implement the logic for login, chat,
              and profile services.
            </Body2>
            <Body2>
              - Utilized{' '}
              <b>
                Java Spring Suite (Spring Boot, Spring WebSocket, Spring
                Security, Spring JPA, Spring Cloud Ribbon)
              </b>
              , <b>Maven</b>, <b>STOMP</b>, and <b>Redis Pub/Sub</b> for
              real-time chat synchronization.
            </Body2>
            <Body2>
              - Leveraged AWS services such as{' '}
              <b>Elastic Load Balancers (ALBs)</b>,
              <b>Auto Scaling Groups (ASGs)</b> and <b>CloudWatch</b> to achieve
              high availability and cost efficiency. Optimized cost and
              performance by implementing auto-scaling policies based on
              real-time metrics.
            </Body2>
            <Body2>
              - Managed Kubernetes objects with <b>Helm Charts</b> and migrated
              from H2 to <b>MySQL</b> for production-ready profile services.
            </Body2>
            <Body2>
              - Implemented <b>Ingress-Nginx Controller</b> for routing, and{' '}
              <b>HPA</b> for pod autoscaling.
            </Body2>
            <Body2>
              - Configured <b>Azure Front Door</b> for domain management;
              Automated <b>CI/CD</b> with GitHub Actions; Managed cloud
              infrastructure with <b>Terraform</b>.
            </Body2>
          </TextSection>
          <TextSection>
            <TextWrapperInRow>
              <Subtitle3>Cloud Storage </Subtitle3>
              <Body2>(2023 Oct - 2023 Dec)</Body2>
            </TextWrapperInRow>
            <Body2>
              - Build a social network website using heterogeneous cloud storage
              solutions.
            </Body2>
            <Body2>
              - Manage virtual machines and <b>CosmosDB</b> clusters on{' '}
              <b>Azure</b>
              using <b>Azure CLI</b> and <b>Azure Resource Manager (ARM)</b>.
            </Body2>
            <Body2>
              - Establish Java-MySQL database connections with <b>JDBC</b> and
              enhance program flexibility and productivity using <b>ORM</b>.
            </Body2>
            <Body2>
              - Implement high-performance caching mechanisms with <b>Redis</b>{' '}
              and <b>Memcached</b>.
            </Body2>
            <Body2>
              - Follow <b>Test-Driven Development (TDD)</b> practices with{' '}
              <b>JUnit</b> and generate coverage reports using <b>JaCoCo</b>.
            </Body2>
            <Body2>
              - Create a heterogeneous database system and import datasets into
              <b>SQL</b>, <b>Neo4j</b>, and <b>MongoDB</b> (using BSON).
            </Body2>
          </TextSection>
          <TextSection>
            <TextWrapperInRow>
              <Subtitle3>Iterative Processing with Spark</Subtitle3>
              <Body2>(2024 Jan - 2024 March)</Body2>
            </TextWrapperInRow>
            <Body2>
              - Implement iterative computation on the Twitter social graph to
              rank users by influence, find nearby users with similar interests,
              and recommend topics based on the PageRank algorithm.
            </Body2>
            <Body2>
              - Deploy an <b>Apache Spark</b> cluster on <b>Azure HDInsight</b>{' '}
              and access various UIs like <b>YARN</b>, <b>Spark UI</b>, and
              <b>Apache Zeppelin</b>. Compare the performance of the same task
              on <b>Azure Databricks</b>.
            </Body2>
            <Body2>
              - Use <b>Spark, Scala, RDD, Spark SQL</b> and{' '}
              <b>Spark DataFrame API</b> for exploratory data analysis and
              recommendations.
            </Body2>
          </TextSection>
          <TextSection>
            <TextWrapperInRow>
              <Subtitle3>Stream Processing </Subtitle3>
              <Body2>(2024 Jan - 2024 March)</Body2>
            </TextWrapperInRow>
            <Body2>
              - Design and implement a solution using the Samza API to join and
              process multiple streams of GPS data for a driver-matching service
              like Uber. (optional: Match client requests to available drivers
              and display advertisements).{' '}
            </Body2>
            <Body2>
              - Write the code for the <b>Kafka Producer</b> to create streams
              using the trace file provided, and develop a Java program that
              sends messages to Kafka topics on a remote{' '}
              <b>(AWS) Samza cluster (EMR, EC2)</b>.{' '}
            </Body2>
            <Body2>
              - Utilized <b>YARN</b> for monitoring and debugging, and
              implemented extensive <b>test-driven development (TDD)</b>{' '}
              practices.
            </Body2>
          </TextSection>
          <TextSection>
            <TextWrapperInRow>
              <Subtitle3>Machine Learning on the Cloud</Subtitle3>
              <Body2>(2024 Feb - 2024 April)</Body2>
            </TextWrapperInRow>
            <Body2>
              - Train an <b>XGBoost</b> model using constructed features to
              predict car ride fares, perform hyperparameter tuning, and train
              data on <b>Google Vertex AI</b>.
            </Body2>
            <Body2>
              - Deploy and evaluate an end-to-end solution utilizing a pipeline
              of
              <b>cloud ML APIs</b> and custom-trained ML models on{' '}
              <b>Google App Engine (GAE)</b>.
            </Body2>
            <Body2>
              - Experiment with <b>Google Vertex AI AutoML</b> to train a custom
              model on a small image dataset, which accepts images of landmarks
              as trip pickup and drop-off locations.
            </Body2>
          </TextSection>
        </ContentContainer>
      </PageSection>
    </Page>
  );
};
export default Project;
