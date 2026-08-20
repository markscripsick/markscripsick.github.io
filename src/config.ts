/**
 * ────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit your personal details here, in ONE place.
 * ────────────────────────────────────────────────────────────────────────
 *  Everything below feeds the header, footer, About page, Contact page,
 *  and the SEO/social-share tags. You should rarely need to touch anything
 *  outside this file and your content (the markdown in src/content/).
 */

export const SITE = {
  /** Your name — shown in the header, hero, and page titles. */
  name: 'Mark Scripsick',

  /** Short role line, shown in the hero and used in social-share text. */
  role: 'Mechanical Engineering @ Texas A&M',

  /** One-line focus / tagline. */
  tagline: 'CAD & SolidWorks · Robotics · Hands-on design-build',

  /** Used as the default meta description and OG description. */
  description:
    'Mechanical Engineering student at Texas A&M focused on CAD/SolidWorks, robotics, and hands-on design-build projects. Portfolio of projects and certifications.',

  /** Default social-share preview image (lives in /public). 1200×630. */
  ogImage: '/og-image.png',

  /** Path to your resume PDF in /public. Replace the placeholder file. */
  resume: '/resume.pdf',

  /**
   * OPTIONAL small headshot shown in the top-left corner of the header
   * (on every page). Leave '' to hide it. To add one later: drop a square
   * photo in /public (e.g. /public/headshot.jpg) and set the path here —
   * that's the only change needed.
   */
  headshot: '', // e.g. '/headshot.jpg'
} as const;

/**
 * HOME HERO — the text side of the split-screen panel.
 * `accent` renders in italic serif (the editorial accent line).
 *
 * The right-hand panel is the auto-scrolling work strip — its images come
 * from SHOWCASE below, not from here.
 */
export const HERO = {
  eyebrow: 'Mechanical Engineering — Texas A&M',
  headline: 'Mark Scripsick',
  accent: 'Mechanical Engineer', // shown italic
  intro:
    'CAD and SolidWorks, robotics, and hands-on prototyping',
  primary: { label: 'View Projects', href: '/projects' },
  secondary: { label: 'Download Resume', href: '/resume.pdf' },
} as const;

/**
 * HOME SHOWCASE — the auto-scrolling CAD strip on the home page.
 *
 * To add an image: drop it in public/images/showcase/ and add one line to
 * `images` below. To remove one, delete its line. Empty the array and the
 * whole strip disappears — nothing else to change.
 *
 * `caption` is the small label under each image ('' hides it).
 * `seconds` is how long one full loop takes — larger = slower.
 */
export const SHOWCASE = {
  label: 'Selected CAD Work',
  seconds: 80,
  images: [
    {
      src: '/images/piston.png',
      alt: 'SolidWorks render of a piston and connecting rod assembly',
    },
    {
      src: '/images/showcase/cad-01.webp',
      alt: 'SolidWorks render of a conical part with radial internal vanes',
    },
    {
      src: '/images/showcase/cad-02.webp',
      alt: 'SolidWorks render of a cast housing with cylindrical bosses and a curved channel',
    },
    {
      src: '/images/showcase/cad-03.webp',
      alt: 'SolidWorks render of a threaded flange with bolt holes',
    },
    {
      src: '/images/showcase/cad-04.webp',
      alt: 'SolidWorks render of a circular plate with six cylindrical bosses',
    },
    {
      src: '/images/projects/pedal-box/assembly-01.webp',
      alt: 'Isometric render of the pedal box assembly',
    },
    {
      src: '/images/projects/pedal-box/assembly-02.webp',
      alt: 'Side view of a pedal showing the master cylinder and pushrod linkage',
    },
    {
      src: '/images/projects/pedal-box/assembly-03.webp',
      alt: 'Detail view of the pedal box linkage and mounting hardware',
    },
    {
      src: '/images/projects/pedal-box/assembly-04.webp',
      alt: 'Rear isometric view of the pedal box showing both master cylinders',
    },
  ],
} as const;

/**
 * Contact + social links. Leave a value as an empty string ('') to hide
 * that link everywhere it appears.
 */
export const CONTACT = {
  email: 'markscottscripsick@gmail.com',
  linkedin: 'https://www.linkedin.com/in/markscripsick',
  github: 'https://github.com/markscripsick',
} as const;

/** Top navigation. Add/remove items here to change the header menu. */
export const NAV: { label: string; href: string }[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
