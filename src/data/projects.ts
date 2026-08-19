import type { ProjectContentBlock } from "./project-content/types";
import { porkstarContent } from "./project-content/porkstar";
import { canberrarepContent } from "./project-content/canberrarep";

export interface Project {
  slug: string;
  title: string;
  description: string;
  /** Simple prose paragraphs. Use `content` instead for structured write-ups with headings. */
  longDescription?: string[];
  content?: ProjectContentBlock[];
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  /** Overrides the default "Demo" / "View Demo" link text, e.g. "Website" for a live production site. */
  demoLabel?: string;
  color: string;
  /* Whether this project should be highlighted in the featured projects section. true: highlighted */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "canberra-rep",
    title: "Canberra REP",
    description:
      "A full rebuild of the website for Australia's oldest community theatre: migrated from Drupal 7 to WordPress, redesigned end to end, and handed over as a site the client's content team maintains on its own.",
    content: canberrarepContent,
    tags: [
      "WordPress",
      "Elementor",
      "Gravity Forms",
      "PHP",
      "ACF",
      "JavaScript",
      "Git",
      "DDEV",
    ],
    image: "/canberra-rep-home.jpg",
    color: "from-blue-500/20 to-purple-500/20",
    featured: true,
  },
  {
    slug: "pork-star",
    title: "PorkStar",
    description:
      "A recipe and video platform for Australian Pork's foodservice program: researched, designed, and built on WordPress with a custom PHP theme and a modular architecture the client maintains independently.",
    content: porkstarContent,
    tags: [
      "WordPress",
      "PHP",
      "ACF",
      "WPBakery",
      "JavaScript",
      "Foundation",
      "Git",
      "DDEV",
    ],
    image: "/porkstar-recipe.jpg",
    demoUrl: "https://www.porkstar.com.au/",
    demoLabel: "Website",
    color: "from-green-500/20 to-teal-500/20",
    featured: true,
  },
  {
    slug: "flow-platform",
    title: "Flow Platform",
    description:
      "Cell data visualisation and analysis platform providing multiple algorithms, with integrated user and administrator portals.",
    longDescription: [
      "Flow Platform is a data visualisation and analysis tool built for working with cell data, giving researchers a way to run multiple analysis algorithms and explore the results visually rather than through raw output files.",
      "The backend is built with Python and Flask, exposing a RESTful API that the React front end consumes. I designed both the user-facing portal, where results can be explored and visualised, and an administrator portal for managing accounts and data access.",
      "The project involved balancing a data-heavy backend with a front end that stays responsive while rendering visualisations, and structuring the API so new algorithms could be added without reworking the client.",
    ],
    tags: [
      "Python (Flask)",
      "React",
      "Restful API",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    image: "/flow-platform.jpg",
    githubUrl: "https://github.com/Lurker0316/Flow-Platform",
    color: "from-blue-500/20 to-purple-500/20",
    featured: true,
  },
  {
    slug: "scentopia-website",
    title: "Scentopia Website",
    description:
      "Scentopia is a responsive fragrance experience website that lets users explore scent profiles, interactive content, and personalised recommendations",
    longDescription: [
      "Scentopia is a live client website built to give visitors an interactive way to explore fragrance profiles online, extending an in-person scent experience into the browser.",
      "Built on WordPress with custom PHP templating, the site had to stay easy for non-technical stakeholders to update while still supporting a custom, content-driven layout rather than a generic theme.",
      "I focused on responsive design across devices and on keeping page structure clean so new scent profiles and content could be added without breaking the layout.",
    ],
    tags: ["WordPress", "PHP", "HTML5", "CSS3", "Responsive Design"],
    image: "/scentopia.jpg",
    demoUrl: "https://scentopia.jinggu.com.au/",
    color: "from-green-500/20 to-teal-500/20",
    featured: false,
  },
  {
    slug: "game-of-marrakech",
    title: "Game of Marrakech",
    description:
      "An object-oriented Java implementation of the Marrakech board game, featuring rug placement, player turns, and scoring logic.",
    longDescription: [
      "This project is a full implementation of the Marrakech board game in Java, covering the complete rule set: rug placement, player movement, turn order, and scoring.",
      "The focus was on clean object-oriented design — modelling the board, players, and rugs as distinct classes with clear responsibilities — and on JavaFX for the interactive UI layer.",
      "I used JUnit throughout to test game logic in isolation from the UI, which made it much easier to catch scoring and rule edge cases before they showed up on screen.",
    ],
    tags: ["Java 17", "OOP design", "JUnit for testing", "JavaFX for UI"],
    image: "/marrakech-game-display.jpg",
    githubUrl: "https://github.com/CharleeGu0803/Game-of-Marrakech",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    slug: "carbonbank-android-application",
    title: "CarbonBank Android Application",
    description:
      "An Android application designed to help individuals calculate, track, and understand their personal carbon emissions",
    longDescription: [
      "CarbonBank is an Android app that helps individuals calculate and track their personal carbon emissions, turning an abstract number into something people can monitor over time.",
      "I worked on the Android UI components and the data model behind emissions tracking, aiming for an interface that makes entering everyday activity data quick rather than a chore.",
      "The bigger challenge was designing a data model flexible enough to cover different emission sources while keeping the calculation logic simple to reason about and extend.",
    ],
    tags: ["Android", "Java/Kotlin", "UI Components", "Data Modelling"],
    image: "/carbon-bank-app.jpg",
    githubUrl:
      "https://github.com/CharleeGu0803/CarbonBank-Android-Application",
    color: "from-cyan-500/20 to-blue-500/20",
    featured: false,
  },
  {
    slug: "drupal-portfolio-site",
    title: "Drupal Portfolio Site",
    description:
      "A personal portfolio built with Drupal and hosted on Pantheon, showcasing my projects, experiences.",
    longDescription: [
      "This is an earlier personal portfolio site built with Drupal and hosted on Pantheon, used to showcase my projects and experience before this React version.",
      "Working in Drupal meant structuring content types and views to keep the site maintainable, and getting hands-on with Pantheon's deployment workflow for a CMS-driven site.",
      "It gave me a solid grounding in CMS-based development that carried directly into later CMS work, including the Scentopia site.",
    ],
    tags: ["Drupal CMS", "Pantheon.io", "HTML5", "CSS3"],
    image: "/drupal-portfolio.jpg",
    demoUrl: "https://dev-jing-gu-portfolio.pantheonsite.io",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    slug: "fragrance-website",
    title: "Frangrance Website",
    description:
      "A multi-page static fragrance website built with HTML, CSS and JavaScript, demonstrating front-end fundamentals and custom layout design.",
    longDescription: [
      "A multi-page static fragrance website built from scratch with HTML, CSS, and JavaScript, without a framework or CMS underneath it.",
      "The goal was to practise front-end fundamentals directly — layout, responsive behaviour, and interactivity — and to design a custom look rather than starting from a template.",
      "It's an earlier project, but it's where a lot of the layout instincts I still use started to form.",
    ],
    tags: ["JavaScript", "HTML5", "CSS3"],
    image: "/fragrance-website.jpg",
    githubUrl: "https://github.com/CharleeGu0803/Perfume-Website",
    color: "from-violet-500/20 to-indigo-500/20",
  },
];
