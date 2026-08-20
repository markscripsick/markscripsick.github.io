---
title: Independent Pedal Box Assembly
date: 2026-08-20
summary: >-
  An independent design study creating a modular pedal box assembly under Formula SAE guidelines. Parts designed
  in SolidWorks as-well as FEA analysis for each part done in SolidWorks. Stress, factor of safety, and displacement constraints
  tested part by part under 2000 N load with a minimum factor of safety of 1.5 verified for each component.
  
  - SolidWorks
  - FEA
  - Mechanical Design
  - Assembly Design
heroImage: /images/projects/pedal-box/assembly-01.webp
heroAlt: Isometric SolidWorks render of the pedal box assembly with brake and accelerator pedals mounted to a base plate
featured: true

# ── Simulation results, grouped by part ────────────────────────────────
feaStudies:
  - part: Base Plate
    images:
      - src: /images/projects/pedal-box/fea/base-plate-stress.webp
        alt: Von Mises stress plot of the pedal box base plate
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/base-plate-displacement.webp
        alt: Displacement plot of the pedal box base plate
        caption: Displacement
      - src: /images/projects/pedal-box/fea/base-plate-fos.webp
        alt: Factor of safety plot of the pedal box base plate
        caption: Factor of safety

  - part: Brake Pedal
    images:
      - src: /images/projects/pedal-box/fea/brake-pedal-stress.webp
        alt: Von Mises stress plot of the brake pedal
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/brake-pedal-displacement.webp
        alt: Displacement plot of the brake pedal
        caption: Displacement
      - src: /images/projects/pedal-box/fea/brake-pedal-fos.webp
        alt: Factor of safety plot of the brake pedal
        caption: Factor of safety

  - part: Accelerator Pedal
    images:
      - src: /images/projects/pedal-box/fea/accelerator-pedal-stress.webp
        alt: Von Mises stress plot of the accelerator pedal
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/accelerator-pedal-displacement.webp
        alt: Displacement plot of the accelerator pedal
        caption: Displacement
      - src: /images/projects/pedal-box/fea/accelerator-pedal-fos.webp
        alt: Factor of safety plot of the accelerator pedal
        caption: Factor of safety

  - part: Brake Bracket
    images:
      - src: /images/projects/pedal-box/fea/brake-bracket-stress.webp
        alt: Von Mises stress plot of the brake pedal mounting bracket
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/brake-bracket-displacement.webp
        alt: Displacement plot of the brake pedal mounting bracket
        caption: Displacement
      - src: /images/projects/pedal-box/fea/brake-bracket-fos.webp
        alt: Factor of safety plot of the brake pedal mounting bracket
        caption: Factor of safety

  - part: Accelerator Bracket
    images:
      - src: /images/projects/pedal-box/fea/accelerator-bracket-stress.webp
        alt: Von Mises stress plot of the accelerator mounting bracket
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/accelerator-bracket-displacement.webp
        alt: Displacement plot of the accelerator mounting bracket
        caption: Displacement
      - src: /images/projects/pedal-box/fea/accelerator-bracket-fos.webp
        alt: Factor of safety plot of the accelerator mounting bracket
        caption: Factor of safety

  - part: Balance Bar Bracket
    images:
      - src: /images/projects/pedal-box/fea/balance-bar-bracket-stress.webp
        alt: Von Mises stress plot of the balance bar bracket
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/balance-bar-bracket-displacement.webp
        alt: Displacement plot of the balance bar bracket
        caption: Displacement
      - src: /images/projects/pedal-box/fea/balance-bar-bracket-fos.webp
        alt: Factor of safety plot of the balance bar bracket
        caption: Factor of safety

  - part: Master Cylinder Axle
    images:
      - src: /images/projects/pedal-box/fea/master-cylinder-axle-stress.webp
        alt: Von Mises stress plot of the master cylinder axle
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/master-cylinder-axle-displacement.webp
        alt: Displacement plot of the master cylinder axle
        caption: Displacement
      - src: /images/projects/pedal-box/fea/master-cylinder-axle-fos.webp
        alt: Factor of safety plot of the master cylinder axle
        caption: Factor of safety

  - part: Axle Mount
    images:
      - src: /images/projects/pedal-box/fea/axle-mount-stress.webp
        alt: Von Mises stress plot of the axle mount block
        caption: Von Mises stress
      - src: /images/projects/pedal-box/fea/axle-mount-displacement.webp
        alt: Displacement plot of the axle mount block
        caption: Displacement
      - src: /images/projects/pedal-box/fea/axle-mount-fos.webp
        alt: Factor of safety plot of the axle mount block
        caption: Factor of safety

# ── Full assembly views ────────────────────────────────────────────────
assemblyImages:
  - src: /images/projects/pedal-box/assembly-01.webp
    alt: Isometric view of the complete pedal box assembly
    caption: Isometric view
  - src: /images/projects/pedal-box/assembly-02.webp
    alt: Side view of a pedal showing the master cylinder and pushrod linkage
    caption: Side view — pushrod linkage
  - src: /images/projects/pedal-box/assembly-03.webp
    alt: Detail view of the pedal box linkage and mounting hardware
    caption: Linkage detail
  - src: /images/projects/pedal-box/assembly-04.webp
    alt: Rear isometric view of the pedal box showing both master cylinders
    caption: Rear isometric — dual master cylinders

# ── CAD part files ─────────────────────────────────────────────────────
# Files live in public/files/pedal-box/. To add another, drop the file in
# that folder and add one entry here — nothing else to change.
downloads:
  - label: Complete assembly + all parts
    file: /files/pedal-box/pedal-box-cad.zip
    format: ZIP
    size: 6.2 MB
  - label: Base Plate
    file: /files/pedal-box/base-plate.SLDPRT
    format: SLDPRT
    size: 135 KB
  - label: Brake Pedal
    file: /files/pedal-box/brake-pedal.SLDPRT
    format: SLDPRT
    size: 75 KB
  - label: Accelerator Pedal
    file: /files/pedal-box/accelerator-pedal.SLDPRT
    format: SLDPRT
    size: 95 KB
  - label: Brake Bracket
    file: /files/pedal-box/brake-bracket.SLDPRT
    format: SLDPRT
    size: 71 KB
  - label: Accelerator Bracket
    file: /files/pedal-box/accelerator-bracket.SLDPRT
    format: SLDPRT
    size: 71 KB
  - label: Balance Bar Bracket
    file: /files/pedal-box/balance-bar-bracket.SLDPRT
    format: SLDPRT
    size: 105 KB
  - label: Master Cylinder Axle
    file: /files/pedal-box/master-cylinder-axle.SLDPRT
    format: SLDPRT
    size: 169 KB
  - label: Axle Mount
    file: /files/pedal-box/axle-mount.SLDPRT
    format: SLDPRT
    size: 75 KB
  - label: Stabilizing Cylinder Arm
    file: /files/pedal-box/stabilizing-cylinder-arm.SLDPRT
    format: SLDPRT
    size: 46 KB
  - label: Stabilizing Cylinder Back
    file: /files/pedal-box/stabilizing-cylinder-back.SLDPRT
    format: SLDPRT
    size: 76 KB
downloadsNote: >-
  The ZIP contains the full assembly with every part under its original
  filename, so it opens with all references resolved. Individual parts are
  native SolidWorks files — if you need a neutral format (STEP or Parasolid),
  email me and I'll send one over.
---

An independent design project: a **driver-adjustable pedal box** of the kind
used in formula-style and track cars. Two Tilton master cylinders are driven
through a balance bar so front/rear brake bias can be tuned, with the brake and
accelerator pedals mounted to a common base plate for modularity.

The goal was to take an assembly from concept through to a structurally and realistic production based
design. 

## Design

- **Dual master cylinders on a balance bar** — pedal force is split between two
  circuits, and the bias is adjustable by shifting the bar.
- **Common base plate** — a single bolted plate carries both pedal assemblies
  and the master cylinder mounts, keeping the whole box removable as one unit.
- **Machined mounting blocks and brackets** locate the pedal pivots and cylinder
  axles, sized so the pivot geometry sets a usable pedal ratio.
- **Designed with common materials** most of the assembly is made from stock 6061-T6 aluminum
  for ease of manufacture and acquisition.
  

## Analysis

Every load-bearing part was taken into **SolidWorks Simulation** as a static
structural study under a **2000 N pedal load**. Following SAE requirements each part
was also required to demonstrate a greater than 1.5 FOS. For each part I
looked at three plots:

| Plot | What it answers |
| --- | --- |
| **Von Mises stress** | Where is the part working hardest, and how close is that to yield? |
| **Displacement** | Does it deflect enough to hurt pedal feel, or cause plastic deformation? |
| **Factor of safety** | How much margin is left at the worst point? |

The results are below, part by part. The structural parts (base plate, brackets,
mounts) came out with large margins against a 275 MPa yield. The base plate
peaks near 24 MPa. The **master cylinder axle** is the most heavily
loaded component in the assembly and drove the choice of a higher-strength
material.
