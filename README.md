# Litty Hub

Litty Hub is an ecosystem shell for a multi-brand business. I built it as the umbrella layer for Litty Co. and three active sub-brand lanes, with real route structure already in place for editorial stories, service offers, marketplace previews, and deal campaigns.

This is not a homepage mockup or a loose concept board. It is a working Next.js App Router build with a centralized content model, dynamic brand and story routes, a shared monogram system, and a dark showroom-style interface designed to hold multiple tones without breaking the family.

The core problem here was hierarchy. I wanted one clear umbrella identity, separate brand lanes with their own voice, and enough structure underneath the presentation that deeper content and product layers can plug in later without forcing a rebuild.

## Live Demo

[https://litty-hub.vercel.app](https://litty-hub.vercel.app)

## Core Features

- One umbrella brand with three active sub-brand lanes: `JJ Totes`, `Great Wall of Legends`, and `JJ Pro Service`
- Real route structure for `Brands`, `Community`, `Marketplace`, `Services`, and `Deals`
- Dynamic brand detail routes with separate palettes, positioning, imagery, and proof points
- Dynamic community story routes that extend the editorial side of the ecosystem
- Centralized content system in `lib/content.ts` coordinating brand pages, stories, offers, previews, and campaign timing
- Marketplace, services, and deals built as early product surfaces, not fake full-backend screens
- Split About/Contact modal with staged open-close motion instead of detached utility pages
- Shared monogram logic carrying different reads across the brand family
- Dark premium UI with layered surfaces, blur-to-focus shift behavior, glow, and reveal timing

## Project Preview

If I were walking someone through the build quickly, these are the screens that carry the project:

- **Hub homepage:** umbrella identity, marquee, brand lanes, editorial preview, and campaign surface
- **Brand detail pages:** separate personality per lane without losing the shared family structure
- **Community story routes:** seeded editorial pages that make the ecosystem feel lived in
- **Split About/Contact modal:** one of the strongest interaction pieces in the project, with the motion doing real work instead of just decorating the UI

## Architecture Snapshot

**Frontend**
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4

**Route System**
- `/` as the Litty hub
- `/brands` and `/brands/[slug]` for brand lanes
- `/community` and `/community/[slug]` for editorial content
- `/marketplace`, `/services`, and `/deals` as initial product surfaces

**Content and UI**
- `lib/content.ts` as the centralized ecosystem data layer
- `components/` for the shared shell, cards, hero, modal, marquee, and reveal system
- `app/layout.tsx` + `components/SiteShell.tsx` for the persistent navigation, footer, modal, and route frame

**Experience Layer**
- Reveal timing across sections instead of flat page loads
- Dark showroom-style surfaces with glow, blur, and focus shifts
- Modal-first About/Contact behavior integrated into the shell rather than split into separate routes

## My Role

This project came out of a bigger ecosystem assignment, not a one-page site brief. I was brought in to shape the brand family across web, identity, merch direction, social rollout, and launch thinking. I designed the logo system for the existing brands, built the shared monogram concept that connects them, and defined the lane each brand lives in so they feel related without collapsing into the same identity.

Litty itself did not exist when I came on board. I added it as the umbrella attention engine: a lifestyle-facing layer built to grow trust, build social gravity, and distribute traffic back into the service, product, and premium-brand lanes underneath it.

That broader role is a big part of what makes this repo a strong case study. It shows frontend execution, but it also shows that I can shape brand architecture, product structure, and rollout direction together instead of treating them like separate jobs.

## What I Built

### 1. Ecosystem Hierarchy

The foundation of Litty Hub is the idea that one owner can run multiple business lanes without each one feeling like a separate internet identity.

That meant building:

- a clear umbrella layer
- sub-brand routes with their own positioning
- shared visual DNA across the family
- route structure that can grow without getting messy

The goal was one world with multiple lanes, not four unrelated presentations sitting next to each other.

### 2. Centralized Brand and Content System

I used `lib/content.ts` as the coordination layer for the project because Litty Hub only works if brand logic, route logic, and seeded content stay in sync.

That file currently drives:

- navigation content
- contact data
- brand definitions
- story posts
- marketplace previews
- service offers
- deal campaigns

I spent time on this because I did not want the ecosystem logic buried across random files. The structure needed one place where the family could stay coherent as content deepens later.

### 3. Dynamic Brand and Editorial Routes

The project already goes deeper than a single hero page.

That includes:

- dynamic brand detail pages in `app/brands/[slug]/page.tsx`
- dynamic community story pages in `app/community/[slug]/page.tsx`
- separate tone, imagery, and proof per brand lane
- seeded editorial posts that give the world a point of view

The content set is still evolving, but the route system is already deliberate and ready to hold more.

### 4. Product Surfaces

Marketplace and services are already part of the product structure, but I kept them honest.

Right now they work as:

- curated marketplace previews
- service-offer framing
- live / upcoming / archived campaign surfaces
- seeded product-thinking layers that can grow into deeper business logic later

I did not want to fake a fully loaded commerce product before the actual content and business layers were ready. The stronger move was proving the structure, pacing, and scalability of the ecosystem first.

### 5. Motion, Atmosphere, and Utility

The interface direction here is strong on purpose, but the motion still has a job to do.

That shows up through:

- staged reveal timing across sections
- blur resolving into clarity on hover and entry
- cinematic hero pacing
- the split About/Contact modal with book-open motion
- consistent shell behavior across routes

The best motion in this project is not there to show off. It helps attention, mood, and navigation land together.

## Technical Challenges

- **Keeping the ecosystem unified without flattening it.** Litty had to feel like the umbrella, while `JJ Totes`, `Great Wall of Legends`, and `JJ Pro Service` still needed their own tone, visual cues, and reason for existing. That is a brand-architecture problem and a route-architecture problem at the same time.
- **Making `lib/content.ts` do real coordination work.** I needed one content layer that could drive brand pages, story routes, service offers, marketplace previews, and campaign timing without turning into a dumping ground. The challenge was keeping it centralized but still readable and shaped around the actual product lanes.
- **Balancing showroom visuals with usable structure.** A dark, motion-heavy interface can get vague fast. I spent time making sure the reveal timing, blur, glow, and premium surfaces still supported readable layouts, clear section hierarchy, and obvious route behavior.
- **Deciding what deserved a route and what should stay inside the shell.** One example is About/Contact. I could have split them into standalone pages, but the modal made more sense for this build because it keeps those surfaces close to the brand experience and preserves the motion language already working elsewhere.
- **Choosing the honest edge of the current build.** The commercial side of the ecosystem needed to feel intentional now without pretending the deeper backend layers were already there. A lot of the product judgment in this project was about how much to seed, how much to frame, and where to stop before the UI started lying.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `lucide-react`

## Project Structure

```text
app/
  brands/
    [slug]/
  community/
    [slug]/
  deals/
  marketplace/
  services/
components/
lib/
public/brands/
```

- `app/` holds the route tree and page-level structure.
- `components/` contains the reusable shell and presentation system: hero, cards, modal, navbar, footer, marquee, and reveal wrappers.
- `lib/content.ts` is the central content layer for the ecosystem.
- `public/brands/` holds the visual assets supporting each lane.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Current Scope

This project is already strong where it needs to be strong:

- the route tree is in place
- the brand hierarchy is in place
- the content model is centralized
- the presentation direction is already doing real work

The current build is best understood as:

- a polished first pass ecosystem shell
- a multi-brand route and content foundation
- a frontend system ready for deeper editorial, service, and commerce layers

It is not trying to pass as:

- a full commerce backend
- a seller approval platform
- a booking engine
- a CMS-driven publishing system

Those are later layers. The important part is that the architecture already knows where they would go.

## What This Project Shows

Litty Hub shows that I can build the foundation for a real ecosystem before every final asset, story, and business rule is locked in. It brings together brand architecture, route structure, centralized content, dynamic pages, and frontend direction in one system.

It also shows that I can do more than dress up a concept for one screenshot. The build already has shape, hierarchy, and technical room to grow.

## Closing

Litty Hub is one of the clearest examples of how I like to work: strong visual identity, real structure underneath it, and enough product thinking in the system that the next layer has somewhere solid to land.
