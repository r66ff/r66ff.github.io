---
title: "Taksu Boards"
description: "Innovative surfboard brand built on a custom web platform that transforms surfboard selection into a guided, educational design experience with direct-to-consumer sales."
tags: ["Next.js", "JavaScript"]
date: 2026-01-01
featured: true
# demo: "https://www.taksuboards.com/"
# demoLabel: "See Website"
image: "/tda/img/logo-taksu-boards.svg"
carousel:
  - image: "/tda/img/taksu/1-home-top.png"
    caption: "Home page hero introducing the brand."
  - image: "/tda/img/taksu/2-home-scroll.png"
    caption: "Mission statement revealed through scroll-based highlight."
  - image: "/tda/img/taksu/3-1-home-sections.png"
    caption: "Reusable content sections available across pages."
  - image: "/tda/img/taksu/3-2-home-sections.png"
    caption: "Content sections with configurable layout and visual styling."
  - image: "/tda/img/taksu/4-home-sections.png"
    caption: "Media-driven sections with image and video carousels."
  - image: "/tda/img/taksu/5-home-sections.png"
    caption: "Flexible image and text sections."
  - image: "/tda/img/taksu/6-suggestions.png"
    caption: "Short questionnaire used to generate shape recommendations."
  - image: "/tda/img/taksu/7-suggested.png"
    caption: "Base model recommendations driven by user input."
  - image: "/tda/img/taksu/8-color.png"
    caption: "Board color picker with searchable tags and previews."
  - image: "/tda/img/taksu/9-error-handling.png"
    caption: "Form validation with clear error states and reCAPTCHA protection."
  - image: "/tda/img/taksu/10-cart.png"
    caption: "Cart view aggregating boards, products, and pricing logic."
  - image: "/tda/img/taksu/11-cart-referral.png"
    caption: "Cart with referral code applied and discounts calculated."
  - image: "/tda/img/taksu/12-cart-checkout.png"
    caption: "Checkout flow supporting guest and registered users."
  - image: "/tda/img/taksu/13-guest-order.png"
    caption: "Guest order confirmation and order history access."
  - image: "/tda/img/taksu/14-1-user-account.png"
    caption: "User account dashboard with order history."
  - image: "/tda/img/taksu/14-2-user-rewards.png"
    caption: "Rewards and referral balance management."
  - image: "/tda/img/taksu/15-compare-boards.png"
    caption: "Side-by-side board comparison for informed decision-making."
  - image: "/tda/img/taksu/16-specs.png"
    caption: "Specification calculator based on board number or base and features combinations."
  - image: "/tda/img/taksu/17-contact.png"
    caption: "Context-aware contact forms tailored to user intent."
icon: |
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
---

## Project Overview

Taksu Boards is a longboard-focused surfboard brand and a custom web platform designed to help surfers make informed, intentional decisions when choosing a board.

The core challenge behind the project is translating highly nuanced physical shape design into a guided, educational digital experience. Rather than offering a generic configurator, the platform leads users through a structured decision process that aligns surfboard shape with personal goals and skill level.

## Product Vision

The platform is built around a modular approach to surfboard design:

- Users begin by identifying their surfing goals and skills
- The system suggests base models optimized for specific, often incompatible, performance characteristics (e.g. fast turning vs. nose stability)
- From there, users can apply targeted modifications — adjusting speed, lift, maneuverability, or stability — while learning how each choice affects real-world performance

The goal is not only to sell boards, but to educate users so they can make confident, informed decisions grounded in design principles.

## Research & Concept Phase

Before any technical development began, the project went through an extended research and experimentation phase.

This included:
- Iterating on longboard shapes and performance characteristics
- Testing how subtle geometry changes affect ride feel and usability
- Defining a taxonomy of surfboard features that could be meaningfully explained to non-experts

This foundational work was necessary to ensure that the eventual phisical product reflected real, validated design logic, rather than abstract configuration options.

## Current Status

The web platform and underlying architecture are complete and production-ready. Core user flows, content models, and system structure are fully implemented and stable.

The project is not public yet for one reason: content completeness.

Remaining work is focused on:
- Producing final photography, video, and social media presence
- Writing structured, educational content that explains surfboard design principles and trade-offs
- Ensuring users receive accurate guidance at each decision point

Because the product’s value depends on education and trust, launching with placeholder or incomplete content would compromise the user experience. Currently, the platform is in active content production while the technical foundation remains finalized.

## My Role

I am responsible for the entire digital product:

- Product definition and UX flows
- Brand identity and visual design
- Frontend architecture and implementation
- Backend modeling, CMS structure, and APIs
- Deployment, analytics, and performance monitoring

Surfboard 3D design and shaping are handled by my collaborators, allowing a clear separation between physical product design and digital platform development.

## Why This Project Matters

Taksu Boards reflects the kind of sustained, real-world product work required to build and evolve complex user-facing platforms.

The project demonstrates:
- Long-term ownership of system architecture and user experience
- Translating complex, domain-specific rules into intuitive user flows and system logic
- Designing platforms that integrate education, content, and commerce
- Building a production-grade system with scalability and extensibility in mind

The scope, constraints, and decisions involved mirror those found in modern product teams, making the work directly applicable to full-stack engineering roles.

## Architecture & Data Flow

### Frontend
- **Next.js** with server and client components
- **TypeScript** with Zod schemas for runtime validation
- **Zustand** for long-lived, multi-step state (suggestions, boards, orders, users)
- Global loading and transition handling via Suspense boundaries

### Backend & APIs
- **Next.js route handlers** for all write operations
- Validation-first API design with consistent error responses
- **JWT-based authentication** with cookie-backed sessions
- Optional **Redis-backed rate limiting** for API protection

### CMS & Business Logic
- **Strapi 5** as the single source of truth for:
  - Content and educational materials
  - Base models and board features
  - Orders, rewards, referrals, and promos
- Business logic extracted into modular helpers (pricing, rewards, promos, board specs)

## Implemented User Flows

The platform supports a multi-stage, stateful user journey with both guest and authenticated paths:

- **Guided board design flow**
  - Goal-based suggestions captured in persistent state
  - Base model recommendations derived from incompatible performance goals
  - Feature selection with cumulative effects on board behavior
  - Final customization and add-to-cart flow

- **Cart & checkout**
  - Mixed cart support (custom boards + products)
  - Context-aware fin and accessory recommendations
  - Promo code validation scoped by order type (`board`, `product`, `mixed`)
  - Guest checkout with optional account creation and pending user linking

- **Orders & accounts**
  - Separate board and product order pipelines
  - Order history with pricing breakdowns, discounts, and reward status
  - Persistent user accounts showing rewards, referrals, and past purchases

- **Rewards & referrals**
  - Referral code validation with eligibility checks
  - Rewards accrual on paid orders
  - Partial reward application with leftover handling
  - Server-side validation and recalculation on cart changes

These flows are implemented end to end, including validation, persistence, and error handling.

## Media & Performance Optimization

The platform includes a full **Cloudinary integration** designed for performance and scalability:

- Strapi uploads trigger **Cloudinary eager transformations**
- Pre-generated responsive variants for all major image types
- Frontend helpers generate optimized URLs and blur placeholders
- Images are delivered in modern formats (WebP / AVIF) with proper sizing

Measured and targeted improvements include:
- Significant bandwidth reduction via format optimization
- Faster LCP through priority loading and correct dimensions
- Improved CLS through blur placeholders and explicit sizing

This media pipeline is fully implemented and production-ready.

## Design System & Brand Implementation

In addition to engineering, I designed and implemented the complete brand system:

- Logo design and visual identity
- Color palette and typography with accessibility considerations
- Component-driven design system using Tailwind CSS and ShadCN UI
- Consistent styling across marketing, educational, and commerce surfaces

All brand and UI work was created using **Affinity** tools and translated directly into the live design system.

## Development Workflow

The platform is built using a modern, evolving development workflow:

- TypeScript-first codebase with strong validation boundaries
- Unit and integration testing via **Vitest**
- Security-first middleware (XSS protection, input sanitization)
- AI-assisted development using **Cursor** and agent-based workflows

This workflow has evolved continuously alongside the project as AI tooling matured, improving iteration speed while maintaining code quality and architectural clarity.

## Launch Timing

Taksu Boards spans multiple disciplines simultaneously:
- Physical product design and testing
- Digital platform engineering
- Brand and design system creation
- Business setup and operations in Indonesia
- Content production and marketing

The platform itself is complete and stable. Time is being invested deliberately to ensure that the educational content matches the quality and rigor of the underlying system before public launch.

