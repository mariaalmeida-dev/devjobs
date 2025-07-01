# DevJobs

Job listing platform for developers, built with a focus on clean code and senior-level best practices.

## 🚀 Tecnologias
- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Jest + React Testing Library

## 🔧How to run

```bash
npm install
npm run dev
```

## Project Structure

The project is organized to maintain a clear separation of concerns:

app/ contains all the routes, layout, and per-page rendering logic.

components/ holds reusable components that are not tied to a specific route.

data/ is used to simulate an API or store local mock data.

styles/ contains global or page-specific styles.

__tests__/ follows the co-location pattern, placing tests near the context they are validating.

```tree
📦 devjobs/
├── 📁 app/
│   ├── 📁 __tests__/                  
│   │   ├── homepage.test.tsx
│   │   └── job-details.test.tsx
│   ├── 📁 components/                
│   │   └── header.tsx
│   ├── 📁 data/                      
│   │   └── jobs.ts
│   ├── 📁 jobs/                      
│   │   └── 📁 [id]/
│   │       └── page.tsx
│   ├── 📁 styles/                    
│   │   └── globals.css
│   ├── layout.tsx                   
│   └── page.tsx                     
├── 📁 components/                   
├── 📁 styles/                       
├── 📄 next-env.d.ts
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 tailwind.config.js
└── 📄 README.md

```