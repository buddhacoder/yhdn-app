# YHDN — Young Haitian Doctors Network

> Empowering and connecting budding Haitian medical professionals worldwide.

A modern, culturally intelligent platform for the **Young Haitian Doctors Network**, built to serve as the digital home for Haitian medical professionals seeking mentorship, community, and career guidance.

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: TailwindCSS v4 + Custom Design System
- **Backend**: Supabase (fallback-safe client for local dev)
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> The app runs with seed data when Supabase is not configured.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, pathway cards, testimonials |
| `/about` | Mission, committees, board members |
| `/history` | Organization timeline |
| `/pipeline` | Medical career pipeline (preclinical → attending) |
| `/didnt-match` | Emotional support for unmatched applicants |
| `/directory` | Searchable member directory |
| `/mentorship` | Mentorship request form |
| `/resources` | Searchable resource library |
| `/events` | Upcoming and past events |
| `/spotlight` | News, fundraisers, highlights |
| `/culture` | Creole health education, nutrition, wellness |
| `/sponsors` | Sponsors and donation |
| `/join` | Membership application |
| `/contact` | Contact form |
| `/admin` | Admin dashboard |

## Design System

- **Colors**: Navy, ivory, charcoal + muted Haitian blue/red + gold
- **Typography**: DM Sans (headings) + Inter (body)
- **Components**: Cards, buttons (6 variants), badges, inputs

## License

© 2026 Young Haitian Doctors Network. All rights reserved.
