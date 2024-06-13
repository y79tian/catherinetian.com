interface BasicInfo {
  label: string;
  value: string;
}

export interface ProjectBasicMetadata {
  basicInfo: BasicInfo[];
  ImageSrc: string;
}

export type ProjectOverview = {
  overview: string;
  contribution: string[];
  youtubeSrc?: string;
};

export type ProjectMetadata = {
  name: string;
  basic: ProjectBasicMetadata;
  overview: ProjectOverview;
};

const golfBasicMetadata: ProjectBasicMetadata = {
  basicInfo: [
    { label: 'Location', value: 'Toronto' },
    { label: 'Time', value: '2021 Dec - 2022 April' },
    {
      label: 'Tech Stack',
      value: 'React Native, TypeScript, Nodejs, Firebase, AWS S3, Google APIs',
    },
  ],
  ImageSrc: 'golf',
};

const golfOverview: ProjectOverview = {
  overview:
    'This Award-Winning A.I. Caddie app, designed with PGA and LPGA pros, helps you improve your golf game and lower your score while you play. It offers easy-to-use features for golfers of all levels, including PGA Pro Quick Fixes & Tips, interactive Shot Tracker, and skill improvement Quick Games. Set up your Swing Signature™ videos once, and use the app for instant tips and post-round analysis with your golf instructor.',
  contribution: [
    'Worked in a team of three to develop the frontend with React Native and the backend with Node.js and Express.',
    'Independently built payment solutions using React Native packages and Google APIs, enabling users to use Apple Pay or Android Pay on a mobile app. This reduced payment processing time by 100%.',
    'Collaborated with another Machine Learning Engineer to design the database on Firebase and facilitate the data pipeline.',
  ],
  youtubeSrc: 'golfProject',
};

export const golfMetadata: ProjectMetadata = {
  name: 'Xonic iTQ',
  basic: golfBasicMetadata,
  overview: golfOverview,
};

const rocketBasicMetadata: ProjectBasicMetadata = {
  basicInfo: [
    { label: 'Location', value: 'Toronto' },
    { label: 'Time', value: '2022 Jan - 2022 Sept' },
    {
      label: 'Tech Stack',
      value:
        'React, React Native, Nodejs, ethereum.js, Socket, PostgreSQL, MongoDB, AWS (Lambda, API Getaway, Cognito, SES, Secret Manager), TypeScript',
    },
  ],
  ImageSrc: 'rocket',
};

const rocketOverview: ProjectOverview = {
  overview:
    'Rocket is aiming at disrupting the creator economy by enabling video creators and digital artists to make money in crypto for creating and sharing their content. In addition, we are also enabling the audience to earn with Watch To Earn, Engage To Earn and Play To Earn features in the Rocket Video App. Rocket Video Token acts as both: an in-app currency (launching shortly) and a governance token.',
  contribution: [
    "Worked in a team of three to develop the frontend with React Native, led the backend development, and designed the database for the complex NFT play-to-earn logic for the product's road show.",
    'Independently built a complete cryptocurrency wallet system using ethereum.js, AWS Lambda, AWS API Gateway, and AWS Secret Manager, enabling seamless management of digital wallets within the application.',
    'Developed a real-time notification and user chat system using Socket.IO, capable of handling thousands of messages per hour.',
  ],
  youtubeSrc: 'rocketProject',
};

export const rocketMetadata: ProjectMetadata = {
  name: 'Rocket Video',
  basic: rocketBasicMetadata,
  overview: rocketOverview,
};

const satoshiBasicMetadata: ProjectBasicMetadata = {
  basicInfo: [
    { label: 'Location', value: 'Toronto' },
    { label: 'Time', value: '2021 August - 2022 Sept' },
    {
      label: 'Tech Stack',
      value:
        'React, Nodejs, web3.js, OpenSea APIs, Docker, k8s, MongoDB, AWS (Lambda, Cognito, SES, ECR),  IPFS',
    },
  ],
  ImageSrc: 'satoshi',
};

const satoshiOverview: ProjectOverview = {
  overview:
    'Satoshi.Art, founded in 2020 by Pratheep ‘Stally’ Kaneshalingam, Wenhao ‘William’ Wang, and Juaquin James ‘Waka Flocka’ Malphurs, is a unique NFT marketplace. Our mission is to empower digital artists and educate about the value of NFTs. We provide an easy-to-use platform for artists to monetize their work fairly. With over 1,000 curated artists and more joining daily, Satoshi.Art ensures artists receive proper recognition and compensation.',
  contribution: [
    'Worked in a team of three to develop the frontend with React, backend with nodejs, and MongoDB.',
    'Led a development team of three to expand a NFT marketplace web app, integrating it with the OpenSea platform through OpenSea APIs and IPFS, resulting in a 40% increase in user activity.',
    'Integrated transaction capabilities using web3.js and enhanced user authentication with MetaAuth and MetaMask.',
  ],
  youtubeSrc: 'satoshiProject',
};

export const satoshiMetadata: ProjectMetadata = {
  name: 'Satoshi.Art',
  basic: satoshiBasicMetadata,
  overview: satoshiOverview,
};

const twitterBasicMetadata: ProjectBasicMetadata = {
  basicInfo: [
    { label: 'Location', value: 'Pittsburgh' },
    { label: 'Time', value: '2024 Jan - 2024 April' },
    {
      label: 'Tech Stack',
      value:
        'Docker, Kubernetes, kOps, Terraform, Helm Chart, YAML, Load Balancer, Ingress, Gin (Golang), Vert.x (Java), ETL, Azure Databricks, Apache Spark, Spark SQL, Scala, CI/CD, MySQL, DynamoDB. AWS (EKS, EBS, CloudWatch, EC2, ECR)',
    },
  ],
  ImageSrc: 'twitter',
};

const twitterOverview: ProjectOverview = {
  overview:
    'The Twitter Web Server is a large team project for the course 15-619 Cloud Computing. Our team of three built a server using a microservices architecture, consisting of three main servers: blockchain, QR code, and Twitter. We needed to scale the server and handle big data efficiently to pass the load tests (requests from the load generator) in each of the three phases, all while maintaining good performance within a tight budget.',
  contribution: [
    'Deploy a reliable micro services based web service with Docker, AWS ECR, and Kubernetes cluster running on AWS EC2 instances using kOps, automate the deployment process using Terraform and Helm Chart with YAML files.',
    'Design web-service architectures based on load balancer (ALB, NLB), Ingress, container, and auto-scaling techniques to handle intensive web traffic.',
    'Apply ETL techniques to process a >1TB data set over Azure Databricks, with Apache Spark, spark SQL and Scala, we perform the cross cloud platform through JDBC.',
    'Use AWS CloudWatch to identify potential bottlenecks in a cloud-based service.',
    'Apply CI/CD methodology to streamline the build and deployment process using GitHub Actions.',
    'Enhanced system latency by migrating the database from MySQL to DynamoDB and implementing data compression techniques.',
    'Leveraged AWS EKS with managed node groups to enhance the management and scalability of Kubernetes clusters.',
  ],
};

export const twitterMetadata: ProjectMetadata = {
  name: 'Twitter Web Server',
  basic: twitterBasicMetadata,
  overview: twitterOverview,
};
