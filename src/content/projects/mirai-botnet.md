---
title: "Cybersecurity Research"
description: "Analyzing and simulating Mirai botnet traffic to identify network-level fingerprints for early attack detection."
tags: ["Cybersecurity", "Networking"]
date: 2017-05-01
featured: true
demo: "/img/antonina-serdyukova---mirai-botnet-paper.pdf"
demoLabel: "Read Paper"
icon: |
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
---

## My Role & Contributions

- Designed and executed a controlled botnet simulation environment (DETER testbed)
- Built traffic capture and analysis pipelines using p0f, ARGUS, and SiLK
- Implemented custom OS fingerprinting rules for Mirai-infected devices
- Analyzed large-scale network datasets and extracted behavioral signatures
- Co-authored a research paper summarizing findings and limitations

## Engineering Skills Demonstrated

- Network protocol analysis (TCP/IP, SYN scanning, TTL, sequence numbers)
- Secure system design and threat modeling
- Data analysis on large, noisy datasets
- Building and validating detection heuristics
- Working in sandboxed and production-like environments

## Research Overview

As part of a cybersecurity capstone project, we analyzed and simulated the [Mirai IoT botnet](https://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/) to identify network-level fingerprints that could enable early detection of large-scale DDoS attacks. The project combined real-world traffic datasets with controlled lab simulations to evaluate practical detection strategies.

## Results & Findings

- Confirmed stable Mirai fingerprints based on TCP sequence number encoding
- Identified consistent packet length and TTL clustering patterns
- Demonstrated limitations of passive OS fingerprinting against malware-controlled devices
- Validated findings using both darknet data and live lab simulations

## Why This Matters

IoT botnets like Mirai remain a major attack vector today due to insecure default configurations and long device lifecycles. Understanding low-level traffic behavior is critical for building scalable, automated detection systems in modern cloud and edge networks.

## Tools & Technologies

- p0f (passive OS fingerprinting)
- ARGUS & SiLK (network traffic analysis)
- iptables & packet capture (pcap)
- Linux networking & firewall configuration
- DETER cybersecurity testbed


[Read the Full Research Paper](/img/antonina-serdyukova---mirai-botnet-paper.pdf)
