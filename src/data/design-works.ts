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
    title: "Canberra REP",
    description:
      "A website redesign for a local community theatre — show listings, booking flow and standard content pages.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "Canberra REP's site has to answer two questions at once: what's on, and how do I get a seat. In the original, dates, prices and session times were spread across separate pages, and the homepage read more like a noticeboard than an entry point. I reworked the page structure and visual language, and delivered high-fidelity designs for five key screens in Figma.",
      },
      {
        type: "paragraph",
        text: "The design organises everything around a single production. The homepage answers what's playing now and where to click next; the show detail page brings the synopsis, session times, ticket prices and the booking entry point into one line of sight; and booking is split into choosing a session and confirming details, rather than one long form. Type scale, spacing and contrast were checked against WCAG 2.1 AA, and the palette keeps the theatre's darker stage feel while pulling the primary action out of the decorative colours.",
      },
    ],
    tags: ["Figma", "UI Design", "Design System", "Responsive", "WCAG 2.1 AA"],
    coverImage: "/canberra-rep-home.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/canberrarep-home.png",
        caption:
          "Current and upcoming productions, with booking as the primary action.",
      },
      {
        label: "Show Details",
        image: "/canberrarep-show-details.png",
        caption:
          "Synopsis, cast and creatives, session times and prices on one page.",
      },
      {
        label: "Booking Page",
        image: "/canberrarep-book.png",
        caption: "Browse productions and find supporting booking information.",
      },
      {
        label: "Booking Details Page",
        image: "/canberrarep-book-details.png",
        caption: "Synopsis and session times, with a direct path to booking.",
      },
      {
        label: "Standard Page",
        image: "/canberrarep-standard.png",
        caption:
          "Content template for About, membership and venue information.",
      },
    ],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    slug: "design-agileware",
    title: "Agileware",
    description:
      "A proposed website redesign for a Canberra WordPress and CiviCRM consultancy — homepage, service pages and enquiry flow.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: 'Agileware builds WordPress and CiviCRM systems for Australian not-for-profits. The hard part of a site like this isn\'t the visuals — it\'s that visitors arrive with a very specific problem in mind ("our developer has stopped responding", "we want to move off Drupal", "can a member portal be added to what we already have?"), while a conventional services page is organised around what the agency sells rather than what the visitor turned up with. I designed a redesign covering the homepage, service pages and contact flow, working from wireframes in Figma through to built pages in Odoo Website Builder. These are proposed designs and are not the current live site.',
      },
      {
        type: "paragraph",
        text: 'All three pages follow the same logic: say the visitor\'s problem back to them first, then answer it. The homepage splits "How can we help" into starting something new versus needing help with what you already have, with each quoted question linking straight to the relevant entry point. The service page opens with "You might be here because…" and then uses a systems diagram to show how the website, member portal, CiviCRM, payment gateway and email actually pass data between each other — the integration story is the sale, so it gets a picture rather than a paragraph. The contact form puts two routing questions first, existing customer and whether a meeting is wanted, so enquiries arrive pre-sorted. Client logos and case studies sit at the decision points on each page rather than being quarantined on a separate work page.',
      },
    ],
    tags: [
      "Figma",
      "Odoo Website Builder",
      "Web Design",
      "Information Architecture",
      "UX Writing",
    ],
    coverImage: "/agileware-cover.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/agileware-home.png",
        caption:
          "Service entry points framed as client questions, with case studies and resources.",
      },
      {
        label: "Service Page",
        image: "/agileware-service.png",
        caption:
          "Member portals: capabilities, systems diagram, case study and FAQs.",
      },
      {
        label: "Contact Page",
        image: "/agileware-contact-us.png",
        caption: "Enquiry form with routing fields, alongside contact details.",
      },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    slug: "design-pork-star",
    title: "PorkStar",
    description:
      "A foodservice industry site for Australian Pork — recipes, chef campaigns, events and trade resources.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "PorkStar is Australian Pork's foodservice program: its audience is chefs and butchers rather than home cooks, and the site has to work as a professional resource while carrying the same visual weight as the photography the program is built on. The brief covered recipes, a cuts chart, campaigns, events and training material — a lot of content types competing for the same homepage.",
      },
      {
        type: "paragraph",
        text: "The design leans into a near-black palette so the food and chef photography does the talking, with a single magenta accent reserved for navigation states and calls to action rather than decoration. The homepage runs as a stack of distinct content bands — events, recipes, industry tools — each with its own overline label and a single route out to the full listing, so the page reads as a directory rather than a feed. The campaigns page is structured chronologically, current work first, then the featured chef, then an archive grid: it doubles as a record of the program's history, which matters for a body that has to demonstrate ongoing industry engagement.",
      },
    ],
    tags: ["Figma", "UI Design", "Art Direction", "Responsive"],
    coverImage: "/pork-star-cover.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/pork-star-home.png",
        caption:
          "Content bands for events, recipes and industry tools, with the navigation open.",
      },
      {
        label: "Campaign Page",
        image: "/pork-star-campaign.png",
        caption:
          "Current campaign, featured chef and an archive of past campaigns.",
      },
    ],
    color: "from-zinc-700/20 to-black/20",
  },
  {
    slug: "design-fcawa",
    title: "FCAWA Members' Portal",
    description:
      "A members' portal for Financial Counselling WA, bringing CPD management, resource libraries and sector directories into one self-service entry point.",
    intro: [
      { type: "heading", level: 2, text: "Overview" },
      {
        type: "paragraph",
        text: "FCAWA's members are accredited financial counsellors, and they almost always log in to do one specific thing: record CPD hours, find a professional supervisor, or download a particular compliance document. The existing members' area was organised by content type, which meant members had to know which category something had been filed under before they could find it. I designed the information architecture and interface for the portal homepage.",
      },
      {
        type: "paragraph",
        text: 'The page opens with "What would you like to do?" — the five highest-frequency tasks placed above the fold and named with verbs rather than section titles. Resources work at two levels: two library entry points for members who want to browse, and six direct tiles beneath for members who already know which document they need, so nobody has to enter a library and filter down to reach a single info sheet. Directories, member news and community sit lower on the page: infrequent, but they still have to be findable. The palette follows the association\'s brand — deep blue, teal and coral — using blocks of colour to separate sections rather than relying on rules and heading hierarchy.',
      },
    ],
    tags: ["Figma", "UI Design", "Information Architecture", "Design System"],
    coverImage: "/fcawa-cover.jpg",
    screens: [
      {
        label: "Homepage",
        image: "/fcawa-home.png",
        caption: "Task shortcuts, resource libraries and sector directories.",
      },
    ],
    color: "from-blue-900/20 to-teal-800/20",
  },
];
