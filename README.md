# Raj Patel Portfolio Website

A modern personal portfolio for showcasing my work as a full stack developer and product builder. The site highlights practical web projects, technical skills, competitive programming stats, a resume snapshot, and contact details in a polished animated interface.

Live site: [portfolio-website-lac-gamma.vercel.app](https://portfolio-website-lac-gamma.vercel.app)

## Overview

This portfolio is built as a single-page React application with smooth section navigation, animated project showcases, custom cursor effects, and a responsive dark visual system. It is designed to present real deployed projects and make it easy for recruiters, collaborators, and visitors to understand my current focus.

## Sections

- `Home`: Intro hero with animated text, profile image, orbit chips, and quick links.
- `Myself`: Portfolio summary, current focus, core skills, and coding stats.
- `My Work`: Featured builds with project screenshots, descriptions, code links, and live links where available.
- `Resume`: A compact resume snapshot with role focus, highlights, and contact CTA.
- `Contact`: Email, phone, location, and direct call-to-action.

## Featured Projects

- `ResQ-Her`: Rapid-response women safety app with silent SOS, live location sharing, trusted contact alerts, and discreet evidence capture.
- `PolicyGuard`: Offline LLM policy analyzer for inspecting and flagging policy concerns without relying on hosted model workflows.
- `RajGharana`: Luxury fashion eCommerce platform with authentication, checkout flow, and Razorpay payment integration.
- `BioBalance`: Health-focused app that recommends meals based on vital parameters such as blood pressure, blood sugar, and oxygen level.

## Highlights

- Responsive one-page portfolio experience
- Gooey animated navigation
- Custom BlobCursor hero background
- Framer Motion reveal animations
- Project browser-preview cards
- Resume snapshot section
- Competitive programming and GitHub stat cards
- Vercel production deployment

## Tech Stack

- `React`
- `TypeScript`
- `Vite`
- `Framer Motion`
- `Lucide React`
- `GSAP`
- `React Spring`
- `CSS`
- `Vercel`

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  assets/
    project-biobalance.png
    project-policyguard.png
    project-rajgharana.png
    project-resqher.png
    raj-hero-photo.jpeg
  components/
    BlobCursor.tsx
    Contact.tsx
    Footer.tsx
    GooeyNav.tsx
    Hero.tsx
    Navigation.tsx
    Projects.tsx
    Resume.tsx
    Skills.tsx
    index.ts
  App.tsx
  main.tsx
  index.css
```

## Deployment

The site is deployed on Vercel.

Production URL:

```text
https://portfolio-website-lac-gamma.vercel.app
```

Manual production deployment:

```bash
vercel deploy --prod
```

## Contact

Raj Patel  
Email: [rajpatel805233@gmail.com](mailto:rajpatel805233@gmail.com)  
GitHub: [Rajpatel2924](https://github.com/Rajpatel2924)

## License

This project is for personal portfolio use.
