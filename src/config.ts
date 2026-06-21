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
 * HOME HERO — the split-screen panel. Edit the copy and feature image here.
 * `accent` renders in italic serif (the editorial accent line).
 */
export const HERO = {
  eyebrow: 'Mechanical Engineering — Texas A&M',
  headline: 'Mark Scripsick',
  accent: 'mechanical engineer & design-builder', // shown italic
  intro:
    'CAD and SolidWorks, robotics, and hands-on prototyping — turning ideas into parts you can hold.',
  /** Feature image (right panel). Replace with a CAD render or project photo. */
  image: '/images/piston.png',
  imageAlt: 'Solidworks designs',
  /** Small mono caption overlaid on the image. '' to hide. */
  imageCaption: 'Fig. 01 — Featured work',
  primary: { label: 'View Projects', href: '/projects' },
  secondary: { label: 'Download Résumé', href: '/resume.pdf' },
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
