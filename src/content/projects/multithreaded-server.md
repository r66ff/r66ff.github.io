---
title: "Multithreaded Web Server"
description: "A low-level Python web server built on raw TCP/IP sockets to handle concurrent HTTP requests."
tags: ["Python", "Networking"]
date: 2017-03-01
featured: true
github: "https://github.com/r66ff/multithreaded-server"
icon: |
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
  </svg>
---

## Project Overview

This project is a low-level multithreaded web server implemented in Python as part of a networking course, designed to explore how HTTP servers handle concurrent client connections at the socket and process level.

Rather than relying on existing frameworks, the server is built directly on TCP/IP sockets, providing hands-on experience with request handling, concurrency, and process management in Unix-like systems.

## Key Features

- TCP/IP server implemented using Python’s `socket` library  
- Concurrent request handling via process forking (`fork()`)  
- Basic HTTP request parsing and response handling  
- Support for multiple simultaneous client connections  

## Technical Implementation

The server establishes a TCP socket, listens for incoming connections, and spawns a separate process for each request using the system’s `fork()` call. This approach enables concurrent handling of multiple clients while illustrating the tradeoffs of process-based concurrency.

The implementation focuses on clarity and correctness over abstraction, exposing the mechanics behind request lifecycles, blocking I/O, and basic HTTP semantics.

## What This Demonstrates

- Understanding of network protocols and TCP/IP fundamentals
- Practical experience with concurrency and process management
- Familiarity with HTTP at the protocol level, not just via frameworks
- Ability to reason about performance, scalability, and system tradeoffs

## Why This Matters

While modern applications rely on higher-level frameworks, understanding how web servers work under the hood is critical for building reliable, performant systems. This project laid the foundation for later work designing and operating production-grade backend systems and APIs.
