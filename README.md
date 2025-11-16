# Overview
This is a personal project to develop a website for my friends landscaping business. 

- https://lenihan-landscaping.netlify.app/

## Goals
- Learn key frontend development skills.
- Deliver site that friend can edit.

## Plan
- Work together on content. 
- Leverage Gemini to select appropriate stack. 
- Design stack
  - Deployment: Netlifly 
  - Web framework: Astro DONE

TODO
  - Easy editing: Decap CMS
  - DNS: Cloudflare

# Website File Map

This project is structured inside the `.y/` directory, which is the "Base directory" for the Netlify build.

.y/
├── public/
│   └── admin/
│       ├── index.html  <-- The Decap CMS application.
│       └── config.yml  <-- The Decap CMS configuration file.
│
├── src/
│   ├── components/
│   │   ├── Header.astro     <-- The main site navigation header.
│   │   ├── Footer.astro     <-- The main site footer.
│   │   └── BaseHead.astro   <-- The HTML <head> (meta tags, title).
│   │
│   ├── content/
│   │   ├── portfolio/       <-- The "collection" of portfolio projects.
│   │   │   └── *.md         <-- This is what Jack will edit (e.g., first-project.md).
│   │   └── config.ts        <-- Defines the 'portfolio' collection schema.
│   │
│   ├── layouts/
│   │   └── BlogPost.astro   <-- The template for a single portfolio project page.
│   │
│   ├── pages/
│   │   ├── index.astro      <-- The Homepage (/)
│   │   ├── about.astro      <-- The About Us page (/about)
│   │   ├── contact.astro    <-- The Contact page (/contact)
│   │   ├── services.astro   <-- The Services page (/services)
│   │   └── portfolio/
│   │       ├── index.astro       <-- The Portfolio list page (/portfolio)
│   │       └── [...slug].astro   <-- The template that renders each project page.
│   │
│   └── consts.ts            <-- Global constants (e.g., SITE_TITLE).
│
└── package.json             <-- Project dependencies.