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

```tree
devjobs/
├── app/
│   ├── jobs/
│   │   ├── [id]/page.tsx
│   ├── layout.tsx
│   └── page.tsx
│   └── data/
│       ├── jobs.ts
├── components/
│   └── header.tsx
├── styles/
│   └── globals.css
├── tests/
│   └── jobs.test.tsx
│   └── header.test.tsx
│   └──homePage.test.tsx
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```