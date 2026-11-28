# Memory Allocation Simulator

A web-based application that simulates and visualizes memory allocation strategies used in operating systems.

## Overview

The Memory Allocation Simulator demonstrates how an operating system allocates available memory to processes using different memory allocation algorithms.

Users can configure memory blocks, specify process memory requirements, and select an allocation strategy to observe how memory is distributed.

## Algorithms

The simulator aims to implement:

- **First Fit** – Allocates the first available memory block large enough to accommodate the process.
- **Best Fit** – Allocates the smallest available memory block that can accommodate the process.
- **Worst Fit** – Allocates the largest available memory block that can accommodate the process.

The simulator uses dynamic memory partitioning, allowing memory blocks to be divided into allocated and remaining free spaces.

## Planned Features

- Configure available memory blocks.
- Add processes with custom memory requirements.
- Select and execute memory allocation algorithms.
- Visualize allocated and available memory.
- Display allocation results and remaining memory.
- Compare the behavior of different allocation strategies.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend |
| JavaScript | Frontend logic |

## Project Status

✅ Completed

## Purpose

This project is developed as an academic requirement for the Bachelor of Science in Computer Science Operating Systems course. Its purpose is to demonstrate practical applications of memory management and allocation algorithms through an interactive simulation.
