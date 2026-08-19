import type { ProjectContentBlock } from "./types";

export const porkstarContent: ProjectContentBlock[] = [
  { type: "heading", level: 2, text: "Overview" },
  {
    type: "paragraph",
    text: "Porkstar is a content platform by Australian Pork for foodservice professionals, built around a continually growing library of recipes and video resources.",
  },
  {
    type: "paragraph",
    text: "I led the market research and design end to end, and worked alongside a colleague on front-end and back-end development. Research showed that the target users typically browse on mobile in short breaks between tasks, so the design prioritises a mobile-first layout, front-loaded information, and a visual hierarchy built for fast scanning rather than brand display. The site runs on WordPress with a fully custom PHP theme. I built a modular content architecture using custom post types and taxonomies, allowing the non-technical content team to maintain the homepage and publish content independently.",
  },
  { type: "heading", level: 2, text: "Challenges" },
  { type: "heading", level: 3, text: "Dual pagination on a single page" },
  {
    type: "paragraph",
    text: "A single page had to carry two independent content listings, each paginated and neither interfering with the other. The CMS's native pagination mechanism can't be reused within one page, so the second listing needed its own way of carrying state — and with both mechanisms running side by side, pagination parameters leaked across them easily.",
  },
  {
    type: "paragraph",
    text: "I considered a unified custom URL structure holding both page numbers, but ruled it out: the number of URL combinations would grow as a product of the two page counts, generating a large volume of near-duplicate indexable pages. Instead I separated the two mechanisms — one kept the framework's native path-based pagination, the other used its own parameter channel — and scoped the parameters at the link-building layer so neither could leak state into the other. On the SEO side, canonical tags consolidate ranking signals onto the preferred URLs. Dual pagination on one page has no lossless solution architecturally; this was a pragmatic trade-off between the product requirement and index quality.",
  },
  {
    type: "heading",
    level: 3,
    text: "Style loading for dynamically embedded content",
  },
  {
    type: "paragraph",
    text: "Homepage sections lost all their styling once embedded through a dynamic query. I first verified that the HTML structure was rendering correctly, which ruled out the rendering layer and narrowed the investigation to style loading.",
  },
  {
    type: "paragraph",
    text: "The root cause was that the page builder only outputs compiled CSS for the primary post of the current request. These sections were pulled in by a secondary query at the template layer, so they fell outside the builder's awareness. The execution order made it harder still: the document <head> is sent before the content query in the template runs, so the styles couldn't simply be attached after the fact. The solution was to hook into the head rendering stage, resolve the set of sections to be embedded ahead of time, and inject their styles inline — shifting the dependency from a post-render patch to a pre-render declaration.",
  },
  { type: "heading", level: 2, text: "Outcome" },
  {
    type: "paragraph",
    text: "The client's content team can now restructure the homepage and publish content without developer involvement, cutting day-to-day maintenance overhead considerably. The recipe and video libraries continue to expand while the layout stays stable, and the modular architecture means new content types can be added without touching existing templates.",
  },
];
