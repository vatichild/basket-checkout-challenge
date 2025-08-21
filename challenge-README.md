# Challenge Project

This project was developed as part of a coding challenge using **React**, **TypeScript**, and **Redux Toolkit**.

## Tools & Approach

* **IDE & Assistance:**
  Developed using **PhpStorm** with **JetBrains AI Assistant**, which provided coding suggestions and easy refactoring assistance. The AI was used only for coding help, as the challenge was straightforward.

* **Data:**

    * `client_utils` was used for HTML and JSON data to create the product list.
    * Small **React components** were built using the provided HTML.

## Project Structure

```
src
├── components  # Small pieces of reusable application code
├── layouts     # Basic web app layouts (Main, Header, Body)
├── pages       # Page-level components (Products, Checkout, Success)
└── store       # Redux Toolkit store for state management
```

* **Routing:**
  `router.tsx` defines the routing structure:

    * `/` → Home / Products page
    * `/checkout` → Checkout page
    * `/success` → Success page

* **State Management:**
  Redux Toolkit is used for managing global state such as the basket and product data.

## Notes

* Components are small, modular, and focused on single responsibilities.
* Layouts handle general structure, keeping the app maintainable and organized.
* Pages handle the routing logic and page-specific UI.

## Installation Guide

For instructions on how to install and run this project, see the [Installation Guide](README.md).
