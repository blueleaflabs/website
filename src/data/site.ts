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
    summary:
      'Single-afternoon workshops on local water, wattage, and waste issues in Santa Clara Valley. Next: Santa Clara County Water, Sunday, November 8, 2026.',
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
// Watt Workshops signup form (/watt-workshops/register).
// `endpoint` is the Google Apps Script web-app URL that appends
// each signup to the Google Sheet (see integrations/watt-signup.gs
// and README section 8). While it is empty, the form falls back
// to opening a pre-filled email to `fallbackEmail`.
// ------------------------------------------------------------
export const wattSignup = {
  endpoint: '',
  fallbackEmail: 'rohan.agarwal@blueleaflabs.org',
  workshop: 'Watt Workshops #1: Santa Clara County Water (Nov 8, 2026)',
  grades: ['7', '8', '9', '10'],
  olympiadsClasses: [
    'Monday 6:30 pm',
    'Tuesday 4:00 pm', 'Tuesday 5:20 pm', 'Tuesday 6:40 pm', 'Tuesday 8:00 pm',
    'Wednesday 5:20 pm', 'Wednesday 6:40 pm', 'Wednesday 8:00 pm',
    'Thursday 4:00 pm', 'Thursday 5:20 pm', 'Thursday 6:40 pm', 'Thursday 8:00 pm',
  ],
};
