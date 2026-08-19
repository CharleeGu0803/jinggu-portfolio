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
  // TODO: placeholder entry so the grid/detail layout is visible end to end —
  // swap coverImage/screens.image for real Figma exports, then update the copy.
  {
    slug: "example-design-work",
    title: "Example Design Work",
    description: "One-line summary shown on the Projects grid card.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "A short paragraph or two on the brief, the role, and the approach — this sits above the screens, same spot as the Overview section on the dev project pages.",
      },
    ],
    tags: ["Figma", "UI Design"],
    coverImage: "/placeholder.svg",
    screens: [
      { label: "Homepage", image: "/placeholder.svg", caption: "Landing page design." },
      { label: "Product Page", image: "/placeholder.svg", caption: "Product detail layout." },
    ],
    color: "from-pink-500/20 to-purple-500/20",
  },
];
