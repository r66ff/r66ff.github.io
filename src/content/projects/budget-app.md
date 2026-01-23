---
title: "Budget App in Pure JavaScript"
description: "Object-oriented JavaScript budget tracking application"
tags: ["JavaScript", "OOP", "Web Development", "ES6"]
date: 2017-01-01
featured: false
demo: "/projects/budget-app-demo"
github: "https://github.com/r66ff/budget-app"
icon: "money"
---

## Project Overview

A simple budget app written in plain object-oriented JavaScript. The app is structured according to Modular Programming approach, demonstrating clean code architecture and design patterns.

## Features

- **Income tracking** - Add and manage income sources
- **Expense tracking** - Record and categorize expenses
- **Budget calculation** - Automatic budget totals and percentages
- **Data persistence** - Local storage for saving budget data
- **Clean UI** - Intuitive interface for easy budget management

## Technical Implementation

The application showcases several JavaScript concepts:

### Modular Architecture

- Separation of concerns with distinct modules
- Model-View-Controller (MVC) pattern
- Event-driven programming

### Object-Oriented Programming

- Constructor functions and prototypes
- Encapsulation of data and methods
- Inheritance and code reusability

### Modern JavaScript

- ES6+ features
- DOM manipulation
- Event handling
- Data structures (arrays, objects)

## Code Structure

```javascript
// Budget Controller - Data Model
var budgetController = (function() {
    // Private data and methods
})();

// UI Controller - View
var UIController = (function() {
    // DOM manipulation
})();

// App Controller - Controller
var controller = (function(budgetCtrl, UICtrl) {
    // Event handlers and app logic
})(budgetController, UIController);
```

## Learning Outcomes

This project helped me master:
- Object-oriented JavaScript principles
- Modular programming patterns
- Clean code practices
- DOM manipulation techniques
