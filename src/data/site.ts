// ============================================================
// Site configuration: single source of truth for org facts,
// navigation, and which sections are currently PUBLISHED.
//
// To launch a held section (Workshops, Talks, Writing):
//   1. add real content to its collection (via the CMS), and
//   2. add its path to LIVE_SECTIONS below.
// It will then appear in the nav, the homepage, and the sitemap.
// ============================================================

export const org = {
  name: 'Blue Leaf Labs',
  legal: 'a registered 501(c)(3) nonprofit',
  tagline: 'Real climate solutions for the real world.',
  focus: 'Climate systems: hydroclimate, heat risk, water-energy',
  founded: '2025',
  email: 'hello@blueleaflabs.org',
  emailDisplay: 'hello [at] blueleaflabs [dot] org',
  purpose:
    'This corporation is organized exclusively for public and charitable purposes, including conducting scientific research and providing educational activities for the public benefit.',
};

export const socials = {
  github: 'https://github.com/blueleaflabs',
  orcid: 'https://orcid.org/0009-0005-7518-0805',
  scholar: 'https://scholar.google.com/citations?user=iXxLSWkAAAAJ',
  instagram: 'https://www.instagram.com/swarohan3142/',
  youtube: 'https://www.youtube.com/@aarohan4256',
};

// Every possible top-level section. `live: false` = built but held.
export const sections = [
  { label: 'Research',  path: '/research',  live: true  },
  { label: 'Workshops', path: '/workshops', live: true  },
  { label: 'Talks',     path: '/talks',     live: false },
  { label: 'Writing',   path: '/writing',   live: true  },
  { label: 'About',     path: '/about',     live: true  },
];

export const LIVE_SECTIONS = sections.filter((s) => s.live);

// Nav = live sections only (About always last).
export const nav = LIVE_SECTIONS;

// ------------------------------------------------------------
// Watt Workshops programs. Single source for the nav flyout, the
// homepage ledger, and the /workshops index. Add a program here
// and it appears in all three. status: 'Enrolling' | 'Complete'.
// ------------------------------------------------------------
export const wattPrograms = [
  {
    name: 'Watt Workshops - 2026-2027',
    href: '/watt-workshops',
    status: 'Enrolling',
    summary: 'Single-afternoon workshops on local water, wattage, and waste issues in Santa Clara Valley.',
  },
  {
    name: 'Watt Workshops Summer Camp',
    href: '/watt-workshops-summer-camp',
    status: 'Complete',
    summary:
      'A five-day environmental engineering camp for grades 7 to 10: learn how engineers move water, beat the heat, and generate clean energy, then design your own answer to a real climate challenge.',
  },
];

// Field-note series key -> the page those notes belong to (used by /notes/*).
export const wattSeries: Record<string, { label: string; href: string }> = {
  'watt-workshops': { label: 'Watt Workshops', href: '/watt-workshops' },
  'watt-workshops-summer-camp': { label: 'Watt Workshops Summer Camp', href: '/watt-workshops-summer-camp' },
};

// ------------------------------------------------------------
// Watt Workshops sessions (2026-2027). THE place to add a workshop.
// Each entry gets its own page at /watt-workshops/<slug> and a
// row in the "All workshops" history on /watt-workshops. The series
// page and the signup form feature the next session whose date has
// not passed; once a date passes, that workshop's status turns from
// Enrolling to Complete on the next site build and it stays listed
// as history. Rolling to a new workshop = adding one entry here.
//   slug:  URL name, lowercase-with-dashes ('register' is taken)
//   date:  YYYY-MM-DD (Pacific time)
//   badge: optional short note shown beside the signup title,
//          e.g. 'Filling fast'. Delete the line to hide it.
// ------------------------------------------------------------
export const wattSessions = [
  {
    number: 1,
    slug: 'santa-clara-county-water',
    date: '2026-11-08',
    time: '1:00 to 3:00 PM',
    title: 'Santa Clara County Water: A Science Fair Approach',
    subtitle: 'Water Sources, Quality and Conservation Challenges',
    topic: 'Water Sources',
    venue: 'Quinlan Community Center',
    room: 'Social Room',
    address: '10185 N. Stelling Rd, Cupertino',
    grades: '6-8',
    bring: 'Laptop and a pencil',
    cost: 'FREE',
    badge: 'Filling fast',
    // "Why come" block
    headline: 'Leave with a framework for building successful science fair projects.',
    steps: [
      { t: 'Start with a real local problem', d: "Santa Clara County's water is the working example." },
      { t: 'Go to primary sources', d: 'Work from published data and reports, not summaries of them.' },
      { t: 'Find the question you can measure', d: 'Turn a broad topic into something you can test.' },
      { t: 'Weigh the trade-offs, then pitch', d: 'Present your idea clearly and defend your choices.' },
    ],
    // "In two hours you will" block
    outcomes: [
      "Learn where Santa Clara County's water comes from",
      "Look at the county's water quality and conservation challenges",
      'Practice turning a local problem into a science fair project idea',
    ],
    // Run of show: [activity, minutes]
    schedule: [
      ['Intro and Icebreakers', 10],
      ['Lecture', 30],
      ['Trace Your Water Activity', 20],
      ['Snack break', 5],
      ['Research', 30],
      ['Present', 15],
      ['Close-out', 10],
    ] as [string, number][],
  },
];

export const wattTeacher = {
  name: 'Rohan Agarwal',
  points: [
    '4x Science Fair Award Winner - Synopsys, MTFC, Genius Olympiad',
    'Junior at Monta Vista High School',
    'Founder of Blue Leaf Labs',
  ],
};
export type WattSession = (typeof wattSessions)[number];

const todayPacific = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' });

// 'Enrolling' until the workshop's date has passed, then 'Complete'.
export const wattStatus = (w: WattSession, today: string = todayPacific()) =>
  w.date >= today ? 'Enrolling' : 'Complete';

// The next session that has not happened yet (today still counts), or undefined.
export const nextWattSession = (today: string = todayPacific()): WattSession | undefined =>
  [...wattSessions].sort((a, b) => a.date.localeCompare(b.date)).find((w) => w.date >= today);

// '2026-11-08' -> 'Sunday, November 8, 2026' (long) or 'Nov 8, 2026' (short)
export const wattDate = (iso: string, style: 'long' | 'short' = 'long') =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString(
    'en-US',
    style === 'long'
      ? { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }
      : { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' },
  );

// What gets recorded in the response sheet's "Workshop" column.
export const wattSessionLabel = (w?: WattSession) =>
  w ? `Watt Workshops #${w.number}: ${w.title}` : 'Next workshop (date not yet announced)';

// ------------------------------------------------------------
// Watt Workshops signup form (/watt-workshops/register).
// `endpoint` is the Google Apps Script web-app URL that appends
// each signup to the Google Sheet (see integrations/watt-signup.gs
// and README section 8). While it is empty, the form falls back
// to opening a pre-filled email to `fallbackEmail`.
// ------------------------------------------------------------
export const wattSignup = {
  endpoint: 'https://script.google.com/macros/s/AKfycbxil9DCGVOL8f_5ZcJ6qizzFEsrk6mJClTsWV_7cUFcag4LpyUHsGx31QkinNDZNBX-sA/exec',
  fallbackEmail: 'rohan.agarwal@blueleaflabs.org',
  grades: ['6', '7', '8'],
  olympiadsClasses: [
    'Monday 6:30 pm',
    'Tuesday 4:00 pm', 'Tuesday 5:20 pm', 'Tuesday 6:40 pm', 'Tuesday 8:00 pm',
    'Wednesday 5:20 pm', 'Wednesday 6:40 pm', 'Wednesday 8:00 pm',
    'Thursday 4:00 pm', 'Thursday 5:20 pm', 'Thursday 6:40 pm', 'Thursday 8:00 pm',
  ],
};
