import type { ProjectContentBlock } from "./project-content/types";

export interface DesignScreen {
  /** Short label used both as the section heading and the anchor-nav pill, e.g. "Homepage". */
  label: string;
  /** Long Figma export for this screen/flow. */
  image: string;
  /** Optional one-line note shown under the image. */
  caption?: string;
}

export interface DesignWork {
  slug: string;
  title: string;
  description: string;
  /** Short intro shown at the top of the detail page, above the screens. */
  intro: ProjectContentBlock[];
  /** Tools/role tags, e.g. "Figma", "UI Design", "Branding". */
  tags: string[];
  /** Card thumbnail on the Projects grid. */
  coverImage: string;
  screens: DesignScreen[];
  color: string;
}

export const designWorks: DesignWork[] = [
  {
    slug: "design-canberra-rep",
    title: "CanberraREP",
    description: "One-line summary shown on the Projects grid card.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "A short paragraph or two on the brief, the role, and the approach — this sits above the screens, same spot as the Overview section on the dev project pages.",
      },
    ],
    tags: ["Figma", "UI Design"],
    coverImage: "/canberra-rep-home.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/canberrarep-home.png",
        caption: "Landing page design.",
      },
      {
        label: "Show Details ",
        image: "/canberrarep-show-details.png",
        caption: "Product detail layout.",
      },
      {
        label: "Booking Page",
        image: "/canberrarep-book.png",
        caption: "Booking page layout.",
      },
      {
        label: "Booking Details Page",
        image: "/canberrarep-book-details.png",
        caption: "Booking page layout.",
      },
      {
        label: "Standard Page",
        image: "/canberrarep-standard.png",
        caption: "Standard page layout.",
      },
    ],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    slug: "design-agileware",
    title: "Agileware",
    description: "One-line summary shown on the Projects grid card.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "A short paragraph or two on the brief, the role, and the approach — this sits above the screens, same spot as the Overview section on the dev project pages.",
      },
    ],
    tags: ["Figma", "UI Design"],
    coverImage: "/agileware-cover.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/agileware-home.png",
        caption: "Landing page design.",
      },
      {
        label: "Service Page",
        image: "/agileware-service.png",
        caption: "Service detail layout.",
      },
      {
        label: "Contact Page",
        image: "/agileware-contact-us.png",
        caption: "Contact page layout.",
      },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    slug: "design-pork-star",
    title: "Pork Star ",
    description: "One-line summary shown on the Projects grid card.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "A short paragraph or two on the brief, the role, and the approach — this sits above the screens, same spot as the Overview section on the dev project pages.",
      },
    ],
    tags: ["Figma", "UI Design"],
    coverImage: "/pork-star-cover.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/pork-star-home.png",
        caption: "Landing page design.",
      },
      {
        label: "Campaign Page",
        image: "/pork-star-campaign.png",
        caption: "Product detail layout.",
      },
    ],
    color: "from-zinc-700/20 to-black/20",
  },
  {
    slug: "design-fcawa",
    title: "FCAWA Member Portal",
    description: "One-line summary shown on the Projects grid card.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "A short paragraph or two on the brief, the role, and the approach — this sits above the screens, same spot as the Overview section on the dev project pages.",
      },
    ],
    tags: ["Figma", "UI Design"],
    coverImage: "/fcawa-cover.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/fcawa-home.png",
        caption: "Landing page design.",
      },
    ],
    color: "from-emerald-900/20 to-green-950/20",
  },
];
