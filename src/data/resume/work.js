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
    startDate: '2023-05',
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
    startDate: '2023-07',
    summary: 'Kodee is a language service application that aims to become best ally to conference interpreters.',
    highlights: [
      'developed an interpretation tool using Spring, React and MUI that displays real‐time terminology prompts through glossaries.',
      'leveraged Web Speech API for speech transcription, deployed LibreTranslate on a local server with RESTful APIs to improve accuracy by 23%.',
    ],
  },
];

export default work;
