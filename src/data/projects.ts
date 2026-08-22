import type { ProjectContentBlock } from "./project-content/types";
import { porkstarContent } from "./project-content/porkstar";
import { canberrarepContent } from "./project-content/canberrarep";
import { flowPlatformContent } from "./project-content/flow-platform";
import { gameOfMarrakechContent } from "./project-content/game-of-marrakech";
import { carbonbankContent } from "./project-content/carbonbank";

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
  /** Shown in a note block when demoUrl is absent, explaining why, e.g. "Coursework project, no live demo". */
  demoNote?: string;
  /** Shown in a note block when githubUrl is absent, explaining why, e.g. "Client project, source not public". */
  githubNote?: string;
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
    image: "/canberra-rep-home.webp",
    demoNote: "Deployment in progress,live website coming soon",
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
      "An online analysis and visualisation platform for flow cytometry data, built for medical researchers.nData is organised as dataset, batch and file, and a saved gate can be applied across an entire batch and exported as a PDF report.",
    content: flowPlatformContent,
    tags: [
      "Python",
      "Flask",
      "Jinja2",
      "SQLAlchemy",
      "NumPy",
      "SciPy",
      "pandas",
      "matplotlib",
      "reportlab",
    ],
    image: "/flow-platform.jpg",
    demoNote:
      "In production use by internal research staff. Access and source are restricted.",
    color: "from-blue-500/20 to-purple-500/20",
    featured: true,
  },
  // {
  //   slug: "scentopia-website",
  //   title: "Scentopia Website",
  //   description:
  //     "Scentopia is a responsive fragrance experience website that lets users explore scent profiles, interactive content, and personalised recommendations",
  //   longDescription: [
  //     "Scentopia is a live client website built to give visitors an interactive way to explore fragrance profiles online, extending an in-person scent experience into the browser.",
  //     "Built on WordPress with custom PHP templating, the site had to stay easy for non-technical stakeholders to update while still supporting a custom, content-driven layout rather than a generic theme.",
  //     "I focused on responsive design across devices and on keeping page structure clean so new scent profiles and content could be added without breaking the layout.",
  //   ],
  //   tags: ["WordPress", "PHP", "HTML5", "CSS3", "Responsive Design"],
  //   image: "/scentopia.jpg",
  //   demoUrl: "https://scentopia.jinggu.com.au/",
  //   color: "from-green-500/20 to-teal-500/20",
  //   featured: false,
  // },
  {
    slug: "game-of-marrakech",
    title: "Game of Marrakech",
    description:
      "Marrakech is a board game for two to four players. Players take turns rotating Assam, the market owner, rolling a die to move him, and laying rugs around him. Built in Java 17 and JavaFX with the full ruleset and a graphical interface.",
    content: gameOfMarrakechContent,
    tags: ["Java 17", "JavaFX", "JUnit", "Git", "GitLab CI"],
    image: "/marrakech-game-display.jpg",
    githubUrl: "https://github.com/CharleeGu0803/Game-of-Marrakech",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    slug: "carbonbank-android-application",
    title: "CarbonBank Android Application",
    description:
      "CarbonBank is an Android app for tracking carbon emissions. Users log their daily travel mode and duration, the app converts that into an emissions figure.",
    content: carbonbankContent,
    tags: [
      "Java 17",
      "Android SDK 34",
      "Material Components",
      "ViewPager",
      "RecyclerView",
      "Firebase",
      "Gson",
      "Gradle",
    ],
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
];
