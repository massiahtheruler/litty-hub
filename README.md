# Litty Hub

Litty Hub is a brand-led digital ecosystem build for a multi-brand world where culture, services, products, editorial storytelling, and deal campaigns all feel like they belong to the same company.

I approached it like a real brand system inside a real web product. The app is structured around multiple lanes: brand identity, community storytelling, service positioning, marketplace previews, and campaign timing. The result is a Next.js App Router build that feels complete in its presentation now and ready for deeper product layers later.

What matters most here is that the visual system and product structure support each other. The dark showroom-style interface, gold accents, reveal motion, monogram logic, branded assets, and editorial pacing all work together to make the ecosystem feel believable.

## Live Demo

[https://litty-hub.vercel.app](https://litty-hub.vercel.app)

## Core Features

- Multi-brand ecosystem with one umbrella identity and three active sub-brand lanes
- Dedicated routes for `Brands`, `Community`, `Marketplace`, `Services`, and `Deals`
- Dynamic brand detail pages with separate palettes, positioning, imagery, and proof points
- Dynamic community story routes that extend the editorial side of the brand
- Shared content system in `lib/content.ts` driving brand pages, stories, offers, products, and campaign data
- Curated marketplace, services, and deal surfaces built as a strong pass-one product shell
- Split about/contact modal with staged open/close motion and direct contact links
- Monogram-based brand system with multiple personalities inside one visual family
- Dark premium UI with layered surfaces, blur, glow, and reveal timing

## Architecture Snapshot

Frontend:
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4

Content and UI:
- `lib/content.ts` for centralized ecosystem data
- Reusable card, hero, reveal, and shell components
- Dynamic route segments for brand and story detail pages

Experience Layer:
- Branded motion through reveal timing and modal transitions
- Shared navigation, footer, and content surfaces across routes
- Responsive editorial and product-style layouts

## What I Built

### 1. Brand Ecosystem Structure

The foundation of Litty Hub is the idea that one owner can have multiple business lanes without each one feeling disconnected.

That includes:

- an umbrella brand layer
- sub-brand-specific routes and positioning
- shared visual DNA across the family
- route structure that supports expansion cleanly

The goal was one world with multiple lanes, not separate ideas competing for attention.

### 2. Content-Driven Structure

I used a centralized content model in `lib/content.ts` so the app can stay curated and flexible at the same time.

That includes:

- navigation content
- contact info
- brand definitions
- community stories
- marketplace items
- service offers
- deal campaigns

The project is brand-heavy, so the copy, imagery, and route behavior need to stay coordinated. A clean content layer makes that manageable.

### 3. Brand Presentation

Each brand gets its own tone, supporting imagery, palette, and reason for existing.

That includes:

- dynamic brand detail pages in `app/brands/[slug]/page.tsx`
- individual hero imagery and secondary visuals
- custom palette and accent data per brand
- brand-specific proof points and section content
- consistent monogram rules across the family

That gives the project more depth than a homepage-only concept and makes the family feel structured.

### 4. Editorial and Community Layer

The `Community` side helps the project feel like a living culture brand.

That includes:

- community listing page
- dynamic story detail routes
- category and read-time metadata
- editorial cards on the homepage
- content pillars that explain the direction behind the ecosystem

This matters because Litty is selling a lifestyle and point of view alongside products and services.

### 5. Marketplace, Services, and Campaign Surfaces

These sections are built as strong pass-one previews with room for deeper product logic later.

That includes:

- marketplace route with curated item previews
- services route with lead-worthy offer framing
- deals route with current, upcoming, and archived campaign timing
- honest pass-one messaging around what is seeded now and what can scale later

### 6. Motion and Interface Behavior

The motion in this project is there to support focus and atmosphere.

That includes:

- reveal timing across sections
- cinematic hero pacing
- glow, blur, and layered surface treatments
- split about/contact modal with entry and exit animation
- responsive cards and section transitions

The motion stays tied to structure. It guides attention instead of competing with the content.

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
  community/
  deals/
  marketplace/
  services/
components/
lib/
public/brands/
```

- `app/` holds the route tree and page-level structure.
- `components/` contains the reusable presentation system like the hero, cards, modal, navbar, footer, and reveal wrappers.
- `lib/content.ts` is the main content engine for the ecosystem.
- `public/brands/` contains the branded visual assets that support each lane.

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

This repo is intentionally strong on structure, visual identity, and expansion readiness.

Right now it is best understood as:

- a premium multi-brand shell
- a curated content and route system
- a polished pass-one product foundation

Right now it is not trying to be:

- a full live commerce backend
- a seller approval platform
- a booking engine
- a CMS-driven publishing system

Those can be layered in later without having to throw away the current brand and route architecture.

## Why This Project Stands Out

Litty Hub shows how brand architecture, product thinking, route structure, and interface direction can work together in one system. From an engineering perspective, the value is in the content model, dynamic routing, reusable UI system, and information architecture that already support growth.

## Closing

Litty Hub is one of the clearest examples of how I like to build: strong visual identity, real structure, and enough technical discipline underneath the surface to let the project grow into something bigger later.
