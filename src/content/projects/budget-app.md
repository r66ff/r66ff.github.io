---
title: "Budget Tracker (Vanilla JavaScript)"
description: "A modular, object-oriented budget tracking app built in vanilla JavaScript to demonstrate clean architecture and state management."
tags: ["JavaScript"]
date: 2017-01-01
featured: false
demo: "/projects/budget-app-demo"
github: "https://github.com/r66ff/budget-app"
icon: |
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
  </svg>
---

## Project Overview

A lightweight budget tracking application built in vanilla JavaScript, designed to practice modular architecture, state management, and UI separation without relying on frameworks.

The project focuses on writing maintainable, scalable frontend code using core JavaScript concepts that transfer directly to modern full-stack development.

## Key Features

- Track income and expenses with real-time budget calculations
- Persist data locally using `localStorage`
- Automatic budget totals and percentage breakdowns
- Simple, user-friendly interface focused on clarity

## Architecture & Design

### Modular Structure

- Clear separation between data, UI, and application logic
- Loosely coupled modules communicating via public interfaces
- MVC-inspired architecture

### State & Logic

- Centralized budget state
- Deterministic calculations for totals and percentages
- Event-driven updates to the UI

## Technical Highlights

- Object-oriented JavaScript using constructor functions and prototypes
- Encapsulation of logic and state
- DOM manipulation and event handling without frameworks
- ES6+ syntax and best practices

## Why This Project Matters

Although built without modern frameworks, this project demonstrates:

- Strong fundamentals in frontend architecture
- Ability to structure code for long-term maintainability
- Understanding of patterns that scale to React, Vue, and other frameworks

These principles directly inform my approach to building larger full-stack applications.
