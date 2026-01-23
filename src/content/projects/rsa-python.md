---
title: "RSA Implementation in Python 3"
description: "RSA encryption algorithm implemented in pure Python 3"
tags: ["Python", "Cryptography", "Security", "Algorithms"]
date: 2017-02-01
featured: true
github: "https://github.com/r66ff/rsa-python"
icon: "lock"
---

## Project Overview

An implementation of the RSA encryption algorithm in pure Python 3 with minimal use of imported libraries.

This project demonstrates understanding of cryptographic principles and algorithm implementation from scratch.

## Core Components

In the core of this implementation:

- **Pseudo random number generator** using random.SystemRandom()
- **Miller Rabin probabilistic prime testing** for generating large prime numbers
- **Extended Euclidean algorithm** for computing modular multiplicative inverse
- **RSA encryption and decryption** functions

## Technical Details

The implementation focuses on the mathematical foundations of RSA:

1. Generate two large prime numbers
2. Compute n = p × q
3. Calculate φ(n) = (p-1)(q-1)
4. Choose public exponent e
5. Compute private exponent d
6. Encrypt: c = m^e mod n
7. Decrypt: m = c^d mod n

## Learning Outcomes

This project deepened my understanding of:
- Number theory and modular arithmetic
- Cryptographic algorithms
- Prime number generation and testing
- Python programming for mathematical computation
