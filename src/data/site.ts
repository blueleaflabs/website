// ============================================================
// Site configuration — single source of truth for org facts,
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
  tagline: 'Climate systems research, documented in the open.',
  focus: 'Climate systems — hydroclimate, heat risk, water-energy',
  founded: '2025',
  email: 'hello@blueleaflabs.org',
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
  { label: 'Workshops', path: '/workshops', live: false },
  { label: 'Talks',     path: '/talks',     live: false },
  { label: 'Writing',   path: '/writing',   live: false },
  { label: 'About',     path: '/about',     live: true  },
];

export const LIVE_SECTIONS = sections.filter((s) => s.live);

// Nav = live sections only (About always last).
export const nav = LIVE_SECTIONS;
