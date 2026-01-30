---
title: "Taksu Boards"
description: "Innovative surfboard brand built on a custom web platform that transforms surfboard selection into a guided, educational design experience with direct-to-consumer sales."
tags: ["Next.js", "JavaScript"]
date: 2026-01-01
featured: true
# demo: "https://www.taksuboards.com/"
# demoLabel: "See Website"
image: "/img/logo-taksu-boards.svg"
carousel:
  - image: "/img/taksu/1-home-top.png"
    caption: "Home page hero introducing the brand."
  - image: "/img/taksu/2-home-scroll.png"
    caption: "Mission statement revealed through scroll-based highlight."
  - image: "/img/taksu/3-1-home-sections.png"
    caption: "Reusable content sections available across pages."
  - image: "/img/taksu/3-2-home-sections.png"
    caption: "Content sections with configurable layout and visual styling."
  - image: "/img/taksu/4-home-sections.png"
    caption: "Media-driven sections with image and video carousels."
  - image: "/img/taksu/5-home-sections.png"
    caption: "Flexible image and text sections."
  - image: "/img/taksu/6-suggestions.png"
    caption: "Short questionnaire used to generate shape recommendations."
  - image: "/img/taksu/7-suggested.png"
    caption: "Base model recommendations driven by user input."
  - image: "/img/taksu/8-color.png"
    caption: "Board color picker with searchable tags and previews."
  - image: "/img/taksu/9-error-handling.png"
    caption: "Form validation with clear error states and reCAPTCHA protection."
  - image: "/img/taksu/10-cart.png"
    caption: "Cart view aggregating boards, products, and pricing logic."
  - image: "/img/taksu/11-cart-referral.png"
    caption: "Cart with referral code applied and discounts calculated."
  - image: "/img/taksu/12-cart-checkout.png"
    caption: "Checkout flow supporting guest and registered users."
  - image: "/img/taksu/13-guest-order.png"
    caption: "Guest order confirmation and order history access."
  - image: "/img/taksu/14-1-user-account.png"
    caption: "User account dashboard with order history."
  - image: "/img/taksu/14-2-user-rewards.png"
    caption: "Rewards and referral balance management."
  - image: "/img/taksu/15-compare-boards.png"
    caption: "Side-by-side board comparison for informed decision-making."
  - image: "/img/taksu/16-specs.png"
    caption: "Specification calculator based on board number or base and features combinations."
  - image: "/img/taksu/17-contact.png"
    caption: "Context-aware contact forms tailored to user intent."
icon: |
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
---

## Project Overview

Taksu Boards is a longboard-focused surfboard brand and a **custom web platform** designed to help surfers make **informed, intentional board choices**.

The core challenge is translating highly nuanced **physical shape design** into a **guided, educational digital experience**. Rather than a generic configurator, the platform leads users through a structured decision process that aligns surfboard shape with personal goals and skill level.

## Product Vision

The system is built around a **modular surfboard design model**:

- Users define goals and experience level
- The system suggests **base models** optimized for specific, often incompatible, performance characteristics (e.g. fast turning vs. nose stability)
- Then users apply **targeted modifications** (speed, lift, stability, control) while learning their real-world effects

The goal is not only to sell boards, but to educate users so they can make confident, informed decisions.

## Research & Concept Phase

Before technical development, the project went through an extended **research and experimentation phase**:

- Iterative longboard shape testing
- Mapping how geometry changes affect performance
- Defining a feature taxonomy that can be explained to non-experts

This foundational work was necessary to ensure that the phisical product reflected real, validated shape design logic, rather than abstract configuration options.

## Current Status

The project is not public yet and is currently in **active content production**, with the platform itself fully implemented and stable.

What’s done:
- Complete application architecture and APIs
- User flows: board shaping and configuration, order creation, cart and checkout, promo and referral validation, rewards calculation, user accounts, and order history
- CMS models, business logic, and third-party integrations
- Performance, security, and validation layers

What’s in progress:
- Final photography and video
- Educational content explaining shape trade-offs
- Marketing and launch materials

The platform is held back until the educational content is as clear, accurate, and intentional as the system behind it.

## My Role

I own the **entire digital product**:

- **Product definition & UX flows**
- **Brand identity and design system**
- **Frontend architecture (Next.js, TypeScript)**
- **Backend APIs, CMS modeling, and business logic**
- **Performance optimization, security, and deployment**

Surfboard 3D design and physical shaping and glassing are handled by my collaborators.

## Architecture & Tech Stack

### Frontend
- **Next.js** with server/client components
- **TypeScript + Zod** for runtime data validation
- **Zustand** for long-lived, multi-step state (suggestions, boards, orders, users)
- Global loading and transitions via **Suspense boundaries**

### Backend & APIs
- **Next.js route handlers** for all mutations
- Validation-first API design with consistent error handling
- **JWT authentication** with cookie-backed sessions
- Optional **Redis-based rate limiting** for API protection

### CMS & Business Logic
- **Strapi 5** as the system of record for:
  - Content and educational materials
  - Base models and board features
  - Orders, rewards, referrals, promos
- Business logic isolated into reusable helpers (pricing, rewards, specs)

## Implemented User Flows

**All flows are fully implemented**, including validation, persistence, and error handling:

- **Guided board design**
  - Goal-based suggestions
  - Base model recommendations
  - Feature combinations with cumulative effects
  - Customization → cart → checkout
  - Side-by-side board comparison

- **Cart & checkout**
  - Mixed carts (custom boards + products)
  - Context-aware recommendations
  - Promo validation by order type
  - Guest checkout with optional account linking

- **Accounts & orders**
  - Separate board and product pipelines
  - Order history with discounts and rewards
  - Persistent accounts with referrals and reward balances

- **Rewards & referrals**
  - Eligibility validation
  - Reward accrual on paid orders
  - Reward application with leftover handling
  - Server-side recalculation on cart changes

## Media & Performance

The platform includes an **optimized Cloudinary pipeline**:

- Strapi uploads trigger **eager transformations**
- Responsive variants generated ahead of time
- Blur placeholders and explicit sizing
- Delivery in modern formats (WebP / AVIF)

Results:
- Reduced Cloudinary bandwidth and transformation usage
- Faster **LCP** via priority loading and correct dimensions
- Improved **CLS** via placeholders and sizing

## Design System & Branding

I designed and implemented the complete **brand and UI system**:

- Logo and visual identity
- Accessible color palette and typography
- Component-driven system using **Tailwind CSS + ShadCN UI**
- Consistent styling across marketing, education, and commerce

All design work was created in **Affinity** and translated directly into code.

## Development Workflow

- TypeScript-first development
- Unit and integration testing with **Vitest**
- Security-first middleware (XSS protection, sanitization)
- **AI-assisted development using Cursor**, with evolving agent-based workflows

The workflow has matured alongside the project, balancing rapid iteration with long-term maintainability.

## Launch Timing

Taksu Boards spans multiple parallel tracks:
- Physical product design and testing
- Platform testing with finalized content
- Brand materials and content production
- Business setup in Indonesia

The platform will go public once the educational content that supports user decision-making is finalized.
