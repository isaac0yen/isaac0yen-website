// lib/speaking.ts
//
// Speaking & events. ORDER MATTERS: the home page shows the first 3 entries,
// the /speaking page shows all of them. Keep the newest / most important first.
//
// width/height are the real pixel dimensions of the files in public/assets/speaking
// (measured with `imgstat inspect public/assets/speaking --json`). They let the
// browser reserve the right space before the file loads, so there is no layout jump.
// If you swap a file for a different size, re-run imgstat and update these.

export interface SpeakingItem {
  id: string;
  title: string;
  media: 'image' | 'video';
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Video only: still frame shown before playing. */
  poster?: string;
  /** What I did there, e.g. Instructor, Facilitator, Host. */
  role?: string;
  date?: string;
  venue?: string;
  organizer?: string;
  /** Theme / one-line summary. */
  description?: string;
}

const speakingItems: SpeakingItem[] = [
  {
    id: 'kwasu-hult-prize-founders-masterclass',
    title: 'Founders Masterclass Series',
    media: 'image',
    src: '/assets/speaking/kwasu-hult-prize-founders-masterclass.webp',
    width: 1000,
    height: 1212,
    alt: 'Poster for the Founders Masterclass Series by EF Hult Prize at Kwara State University, held at Farstech Hub on 8 November 2026, with Isaac Oyeniyi as instructor',
    role: 'Instructor',
    date: 'Nov 8, 2026',
    venue: 'Farstech Hub',
    organizer: 'EF Hult Prize, Kwara State University',
    description: 'Ideation & solution architecture: translating user insights into viable product concepts.',
  },
  {
    id: 'ubuluafrica-stand-out-workshop',
    title: 'Stand Out Workshop',
    media: 'image',
    src: '/assets/speaking/ubuluafrica-stand-out-workshop.webp',
    width: 1000,
    height: 1250,
    alt: 'Poster for the UbuluAfrica Stand Out workshop at NITHUB, UNILAG on 30 October 2026, with Isaac Oyeniyi as facilitator',
    role: 'Facilitator',
    date: 'Oct 30, 2026',
    venue: 'NITHUB, UNILAG',
    organizer: 'UbuluAfrica, with nithub',
    description: 'Building the skills you need for a changing world of work.',
  },
  {
    id: 'fuse-career-workshop-edition-2',
    title: 'The FUSE Career Workshop Series, Edition 2.0',
    media: 'image',
    src: '/assets/speaking/fuse-career-workshop-edition-2.webp',
    width: 800,
    height: 800,
    alt: 'Poster for The FUSE Career Workshop Series Edition 2.0 on 29 August 2026 at Impact Hub, Lagos, with Isaac Oyeniyi as host',
    role: 'Host',
    date: 'Aug 29, 2026',
    venue: 'Impact Hub, Ikoyi, Lagos',
    organizer: 'Fuse Varsity',
    description: 'Doing more with AI in everyday work.',
  },
  {
    id: 'kiti-2-pitching-fuse',
    title: 'Pitching FUSE at KITI 2.0',
    media: 'video',
    src: '/assets/speaking/on-stage.mp4',
    poster: '/assets/speaking/on-stage-poster.webp',
    width: 356,
    height: 640,
    alt: 'Video of Isaac Oyeniyi pitching FUSE on stage at KITI 2.0',
    date: 'May 2026',
  },
  {
    id: 'kiti-2-school-outreach',
    title: 'KITI 2.0',
    media: 'image',
    src: '/assets/speaking/kiti-2-school-outreach.webp',
    width: 1080,
    height: 720,
    alt: 'Isaac Oyeniyi speaking with a microphone to school pupils in front of a KITI 2.0 banner',
    date: 'May 2026',
    description: 'Speaking to pupils during a school outreach.',
  },
];

export default speakingItems;
