# FullStack Bootcamp

A modern landing page for a full-stack developer bootcamp built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Features

- Beautiful, responsive landing page with smooth scroll navigation
- Curriculum overview showcasing 12 weeks of learning content
- Project showcase highlighting real-world projects built in the bootcamp
- Testimonials section from graduates
- Registration form with client-side validation (Zod + React Hook Form)
- API route to handle registration submissions
- Mobile-friendly with responsive navigation (Sheet component)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Form Handling:** React Hook Form + Zod validation
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or your preferred package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts       # Registration API endpoint
│   ├── globals.css             # Global styles & CSS variables
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main landing page
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── navbar.tsx              # Sticky navigation bar
│   ├── hero.tsx                # Hero section
│   ├── curriculum.tsx          # Curriculum/syllabus section
│   ├── features.tsx            # Why choose us section
│   ├── projects.tsx            # Project showcase
│   ├── testimonials.tsx        # Graduate testimonials
│   ├── registration-form.tsx   # Registration form with validation
│   └── footer.tsx              # Footer
└── lib/
    └── utils.ts                # Utility functions (cn helper)
```

## Registration Data

Registrations are stored in `data/registrations.json` (created on first submission). For production, replace this with a proper database (PostgreSQL, MongoDB, etc.).

## Customization

- Update bootcamp content in each component file
- Modify colors via CSS variables in `globals.css`
- Adjust the registration schema in both `registration-form.tsx` and `api/register/route.ts`
