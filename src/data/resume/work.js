/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hack Health',
    position: 'software engineer',
    url: '',
    startDate: '2023-04',
    summary: 'PosePro is the application that I developed at this health communication startup.',
    highlights: [
      'developed PosePro,an app that detects posture‐related conditions and provides real‐time prompts and tips for improving,usingDjango,React.',
      'developed a Growth module with Postgres for CRUD operations and RESTful APIs, enabling users to monitor posture progress,leading to 10% uptick in user retention and alleviating concerns about data privacy.',
      'implemented a real‐time detection module with react‐webcam and socket.io to send video feed to a WebSocketAPI,achieving a 30% faster response time, and developed an ‘AI doctor’ module that returns a posture diagnosis based on user‐uploaded video.',
      'deployed OpenPose on a Flask server for 3Dpose estimation with OpenCV,NumPy and FFmpeg,resulting in a 10% accuracy improvement.',
    ],
  },
  {
    name: 'KODEE',
    position: 'Co-founder',
    url: '',
    startDate: '2023-06',
    summary: 'Kodee is a language service application that aims to become best ally to conference interpreters.',
    highlights: [
      'developed an interpretation tool using Spring, React and MUI that displays real‐time terminology prompts through glossaries.',
      'leveraged Web Speech API for speech transcription, deployed LibreTranslate on a local server with RESTful APIs to improve accuracy by 23%.',
      'managed user login with JWT tokens and contextAPI to encrypt user information,resulting in a 13% increase in user numbers.',
      'managed glossaries with PostgreSQL for CRUD operations and Redis for recently accessed entries to increase response time by 30%.',
      'containerized the frontend and backend using Docker,then deployed with Jenkins and Kubernetes.',
    ],
  },
  {
    name: 'SCU Imaginarium Lab',
    position: 'Research Assistant',
    url: '',
    startDate: '2023-03',
    summary: 'Kodee is a language service application that aims to become best ally to conference interpreters.',
    highlights: [
      'executed distributed crawls using Scrapy‐Redis to generate a proprietary dataset for training, resulting in a 120% increase in dataset size.',
      `developed a Flask backend application that turns a movement clip into an avatar animation with OpenPose,pandas,Blender python scripts
and Git for version control, leading to a stronger lab portfolio and an increase in funding by 12%.`,
      'utilized Conda for environment control and deployed comparable 3D pose estimation models on a Unix server with Pytorch for comparison.',
      'led a team of six to leverage NumPy, scipy, and OpenCV to detect and clean NaN, augment the datasets with random masks,normalize the reference system and merge different datasets, which led to a paper accepted by IROS, a Robotics and AI conference with 78 h5‐index.',
    ],
  },
];

export default work;
