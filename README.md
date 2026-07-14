# Diigiihost Assignment

A modern, high-performance landing page for Alkesh Gupta / Diigiihost built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design System
- **Colors**: Deep Emerald Dark Green, Gold Accents, Off-White/Cream, Pure White
- **Typography**: Display/Editorial headings (Playfair Display / Serif-inspired), clean Sans-serif body
- **Architecture**: Modular component structure (Layout, Sections, UI)

## ✨ Features
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop viewports.
- **Micro-Animations**: Framer Motion `whileInView` scroll reveals, staggered entry animations, and hover interactions.
- **Horizontal Carousels**: Native CSS snap-scrolling for the gallery and testimonials slider with custom drag indicators.
- **Semantic Structure**: Semantic HTML5 sectioning and accessible button/link elements.

## 🚀 Getting Started

First, install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 📁 Directory Structure
```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Section wrappers
│   ├── sections/     # Individual page sections (Hero, Manifesto, etc.)
│   └── ui/           # Reusable atomic components (Button, Badge)
├── data/             # Mock datasets for testimonials, brands, etc.
├── index.css         # Global Tailwind configuration and custom utilities
└── App.jsx           # Main component assembling the layout
```
