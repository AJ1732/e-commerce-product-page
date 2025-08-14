# Frontend Mentor - E-commerce product page solution

A sleek e-commerce product page built in **Vue**, featuring smooth micro-interaction animations (GSAP) and Pinia state management for an engaging, responsive shopping experience. Built with TypeScript and styled with ShadCN Vue.

## Table of contents

* [Overview](#overview)

  * [The challenge](#the-challenge)
  * [Screenshot & Video](#screenshot--video)
  * [Links](#links)
* [My process](#my-process)

  * [Built with](#built-with)
  * [Key features](#key-features)
  * [How I added a video to the gallery](#how-i-added-a-video-to-the-gallery)
  * [What I learned](#what-i-learned)
  * [Continued development](#continued-development)
* [Getting started](#getting-started)

  * [Install](#install)
  * [Run locally](#run-locally)
  * [Build & deploy](#build--deploy)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Recreate the Frontend Mentor “E-commerce product page” challenge with fully responsive layout, a lightbox gallery, thumbnail switching, cart interactions, and polished micro-interactions.

### Video Demo

<video src="public/videos/e-commerce-product-page-demo.mp4" autoplay loop controls width="600">
  Your browser does not support the video tag.
</video>

## Links

* Solution URL: [Solution](https://github.com/AJ1732/e-commerce-product-page)
* Live Site URL: [Live Site](https://1732-product-page.netlify.app/)

---

## My process

### Built with

* Vue 3 + Composition API (TypeScript)
* Pinia (state management)
* GSAP (micro-interaction animations)
* ShadCN Vue (UI primitives)
* Vite (dev tooling)
* CSS / Tailwind (utility styling)

### Key features

* Responsive layout (mobile-first)
* Lightbox gallery with smooth GSAP transitions
* Thumbnail gallery — click to change large view
* Cart UI with Pinia-powered store (add/remove items, quantity)
* Accessible controls (keyboard support + focus styles)
* TypeScript types for data and components

---

### What I learned

* Smooth, hardware-accelerated micro-interactions with GSAP improve perceived quality.
* Pinia + TypeScript creates robust, typed app state for cart logic.

### Continued development

* Add unit tests for Pinia store actions and lightbox behavior.
* Improve keyboard accessibility for the gallery/lightbox.
* Add lazy-loading for gallery media.

---

## Getting started

### Install

```bash
# clone repo
git clone https://github.com/AJ1732/e-commerce-product-page
cd e-commerce-product-page

# install deps
npm install
```

### Run locally

```bash
# dev server
npm run dev
# build
npm run build
```

### Build & deploy

* Build (`npm run build`) then deploy the `dist/` folder to your static host (Netlify, Vercel, GitHub Pages, etc.).

---

## Author

* Ejemen Iboi — Pixel Perfect Engineer
* GitHub - [AJ1732](https://github.com/AJ1732)
* Email - `ejemeniboi@gmail.com`

## Acknowledgments

* Frontend Mentor for the challenge spec.
* The Vue, Pinia and GSAP docs — invaluable for animation + state patterns.
* ShadCN Vue components for small UI building blocks.
