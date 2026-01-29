---
title: "RSA Encryption in Python"
description: "From-scratch RSA implementation in Python, focusing on cryptographic fundamentals and secure key generation."
tags: ["Python", "Cybersecurity"]
date: 2017-02-01
featured: true
github: "https://github.com/r66ff/rsa-python"
icon: |
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
  </svg>
---

## Project Overview

A from-scratch implementation of the RSA public-key encryption algorithm in pure Python 3, built to understand how modern cryptographic systems work under the hood.

Rather than relying on existing crypto libraries, this project focuses on implementing the core mathematical and algorithmic components behind RSA, including prime generation, key derivation, and modular arithmetic.

## What This Demonstrates

- Understanding of public-key cryptography fundamentals
- Ability to translate mathematical concepts into working code
- Comfort working close to the language runtime without abstractions
- Security awareness relevant to backend and full-stack systems

## Core Components

- Cryptographically secure randomness using `secrets.SystemRandom`
- Probabilistic prime generation via Miller–Rabin primality testing
- Extended Euclidean algorithm for modular inverse calculation
- RSA key generation, encryption, and decryption implemented end-to-end

## Technical Highlights

- Generates large prime numbers and derives public/private key pairs
- Implements modular exponentiation for encryption and decryption
- Separates key generation logic from encryption operations
- Uses only Python standard libraries to expose underlying mechanics

## Learning Outcomes

This project strengthened my understanding of:

- Number theory and modular arithmetic
- Cryptographic key generation and validation
- Secure randomness and probabilistic algorithms
- Writing correct, testable low-level Python code

While not intended for production use, this implementation provided a strong foundation for reasoning about security-critical systems in real-world applications.
