/**
 * ────────────────────────────────────────────────────────────────────────
 *  CONTENT COLLECTIONS
 * ────────────────────────────────────────────────────────────────────────
 *  This defines the SHAPE of a project and a certification. You normally
 *  won't edit this file — you just add markdown files to:
 *
 *    src/content/projects/<your-project>.md
 *    src/content/certifications/<your-cert>.md
 *
 *  The fields below are what you put in each file's frontmatter (the part
 *  between the `---` lines at the top). If a field is marked `.optional()`
 *  you can leave it out. See README.md for copy-paste templates.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** One image entry — reused by the gallery, FEA studies, and assembly shots. */
const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    /** Project title. */
    title: z.string(),
    /** Date — any format like 2025-09-01. Used for sorting (newest first). */
    date: z.coerce.date(),
    /** One- or two-sentence summary shown on cards and at the top. */
    summary: z.string(),
    /** Skills / tags — drives the filter buttons on the Projects page. */
    skills: z.array(z.string()).default([]),
    /** Hero image path, e.g. /images/projects/my-project/hero.jpg */
    heroImage: z.string(),
    /** Alt text for the hero image (accessibility — describe the image). */
    heroAlt: z.string().default(''),
    /** Image gallery — add as many as you like. caption is optional. */
    gallery: z.array(image).default([]),

    /**
     * OPTIONAL — Simulation / FEA results, grouped by part. Each group gets
     * its own heading and image row on the project page. Leave it out
     * entirely for projects with no analysis work.
     *
     *   feaStudies:
     *     - part: Base Plate
     *       note: 2000 N pedal load        # optional small print
     *       images:
     *         - src: /images/.../base-plate-stress.webp
     *           alt: Von Mises stress plot of the base plate
     *           caption: Von Mises stress
     */
    feaStudies: z
      .array(
        z.object({
          part: z.string(),
          note: z.string().optional(),
          images: z.array(image).default([]),
        }),
      )
      .default([]),

    /** OPTIONAL — Full-assembly views, shown in their own section. */
    assemblyImages: z.array(image).default([]),

    /**
     * OPTIONAL — Downloadable files (CAD parts, drawings, a ZIP of the
     * whole assembly). Put the files in public/files/... and link them:
     *
     *   downloads:
     *     - label: Base Plate
     *       file: /files/pedal-box/base-plate.SLDPRT
     *       format: SLDPRT          # optional
     *       size: 1.2 MB            # optional
     */
    downloads: z
      .array(
        z.object({
          label: z.string(),
          file: z.string(),
          format: z.string().optional(),
          size: z.string().optional(),
        }),
      )
      .default([]),

    /** OPTIONAL — small note shown in the files section (e.g. "on request"). */
    downloadsNote: z.string().optional(),
    /** Optional external link (live demo, write-up, repo, etc.). */
    externalLink: z.string().url().optional(),
    /** Label for the external link button (defaults to "View project"). */
    externalLinkLabel: z.string().optional(),
    /**
     * FUTURE-FRIENDLY: optional URL for an interactive 3D model or CAD
     * share link (e.g. an Onshape public-document link, a Sketchfab embed
     * URL, or a hosted glTF viewer). When set, the project page shows an
     * embed slot. Leave it out for now — see ModelViewer.astro.
     */
    embedUrl: z.string().url().optional(),
    /** Show on the home page "Featured projects" grid? */
    featured: z.boolean().default(false),
    /** Set true to hide a project while you're still writing it. */
    draft: z.boolean().default(false),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: z.object({
    /** Certification name, e.g. "Certified SolidWorks Associate (CSWA)". */
    name: z.string(),
    /** Issuing organization, e.g. "Dassault Systèmes". */
    issuer: z.string(),
    /** "completed" or "in-progress". Controls the status badge. */
    status: z.enum(['completed', 'in-progress']).default('completed'),
    /** Date earned (optional, omit for in-progress). e.g. 2025-05-01 */
    date: z.coerce.date().optional(),
    /** Public credential / verification link (optional). */
    credentialUrl: z.string().url().optional(),
    /** Logo image path, e.g. /images/certifications/solidworks.svg (optional). */
    logo: z.string().optional(),
    /** Sort/priority — higher numbers show first (optional). */
    order: z.number().default(0),
  }),
});

export const collections = { projects, certifications };
