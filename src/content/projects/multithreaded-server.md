---
title: "Multithreaded Server"
description: "A simple Python 3 multithreaded web server"
tags: ["Python", "Networking", "TCP/IP", "Multithreading"]
date: 2017-03-01
featured: true
github: "https://github.com/r66ff/multithreaded-server"
icon: "server"
---

## Project Overview

A simple Python 3 multithreaded web server written for my Networking course implemented in Python 3 with use of socket library (TCP/IP) and system's fork() method.

This project demonstrates fundamental networking concepts and concurrent request handling using Python's built-in libraries.

## Key Features

- TCP/IP socket implementation
- Multithreaded request handling using fork()
- HTTP request parsing
- Simple web server functionality

## Technical Implementation

The server uses Python's socket library to create a TCP connection and handle incoming HTTP requests. Each request is handled in a separate process using the system's fork() method, allowing for concurrent client connections.

## Learning Outcomes

This project helped me understand:
- Low-level networking protocols
- Process management in Unix-like systems
- HTTP protocol basics
- Concurrent programming patterns
