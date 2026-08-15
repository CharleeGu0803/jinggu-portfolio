# Jing Gu — Personal Portfolio

A portfolio site presenting my background, selected projects and CV in one place. Built and maintained by me as the personal website linked from my CV and job applications.

**🔗 Live site:** [My portfolio website](https://react.jinggu.com.au/)

![Homepage screenshot](/public/jinggu-portfolio-ss.jpg)

---

## Why this site exists

Job applications tend to scatter a candidate across a PDF, a LinkedIn profile and a GitHub account, none of which tell a coherent story on their own. I built this site so that anyone reviewing my application can see my background, my work and my CV in a single place, in the form I intended.

It also doubles as something I actively maintain — a place to keep practising frontend work while I move toward backend and cloud engineering.

---

## About me

I'm a developer based in Canberra, ACT, with a Master of Computing from the Australian National University.

My commercial experience is in building and customising web applications for Australian not-for-profits and member associations — CiviCRM configuration, PHP and WordPress development, and the frontend work that ties them together. That includes form-processing pipelines, data displays, template work and accessibility improvements on live client sites.

I came into software from a background in advertising and marketing, which is where my attention to interface detail and written clarity comes from. I'm currently deepening my Python and cloud skills, working toward backend and DevOps engineering.

**Currently:** learning Python, studying for AWS Cloud Practitioner, and open to Developer / Software Engineer roles in Canberra.

---

## Tech stack

| Layer      | Choice                                                |
| ---------- | ----------------------------------------------------- |
| Framework  | React 18 + TypeScript                                 |
| Build tool | Vite                                                  |
| Styling    | Tailwind CSS                                          |
| Components | shadcn/ui (Radix UI primitives)                       |
| Routing    | React Router                                          |
| Hosting    | [Vercel / Netlify] with automatic deploys from `main` |

TypeScript over plain JavaScript for type safety across component props; Tailwind to keep spacing and colour consistent without maintaining a separate stylesheet; shadcn/ui because the components are accessible by default and stay in the codebase rather than behind a package boundary, so they can be adapted freely.

---

## Sections

- **Home** — introduction and current focus
- **About** — background, skills, and the path from marketing into software development
- **Projects** — selected work, each with its tech stack, context and outcome
- **Resume** — an inline summary plus a downloadable PDF
- **Contact** — email and professional links

---

## Running locally

Requires Node.js 18+ and npm.

```bash
git clone https://github.com/CharleeGu0803/portfolio.git
cd portfolio
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build
npm run lint       # run ESLint
```

---

## Project structure

```
src/
├── components/     # Reusable UI components
│   └── ui/         # shadcn/ui primitives
├── pages/          # Route-level components
├── lib/            # Utilities and helpers
├── assets/         # Images and static files
└── main.tsx        # Application entry point
```

---

## Contact

**Jing Gu** — Canberra, ACT
[jinggu0803@gmail.com](mailto:jinggu0803@gmail.com) · [LinkedIn](https://www.linkedin.com/in/jing-gu-4a9580290/) · [GitHub](https://github.com/CharleeGu0803)
