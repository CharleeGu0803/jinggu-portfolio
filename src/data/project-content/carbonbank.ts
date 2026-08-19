import type { ProjectContentBlock } from "./types";

export const carbonbankContent: ProjectContentBlock[] = [
  { type: "heading", level: 2, text: "Overview" },
  {
    type: "paragraph",
    text: "The app has three parallel main screens that need to stay in step across both a bottom navigation bar and left to right swiping, with data living in local JSON files and state shared between the pages. The front end problem here isn't complex logic. It's keeping those things from fighting each other.",
  },
  { type: "heading", level: 2, text: "Challenges" },
  { type: "heading", level: 3, text: "Search that tolerates mistakes" },
  {
    type: "paragraph",
    text: "A substring match alone means one mistyped letter returns nothing at all. The search runs in two layers. An exact contains match comes first, case and whitespace insensitive, and only when that returns nothing does it fall back to an edit distance match allowing a difference of up to two characters. Layering it this way means exact results always win and approximate matching only takes over when there is no better answer, so a list that was accurate never gets diluted. The edit distance uses a rolling one dimensional array holding only the previous row of costs.",
  },
  {
    type: "heading",
    level: 3,
    text: "Making the allowance readable at a glance",
  },
  {
    type: "paragraph",
    text: "Today's emissions figure is a number, but what a user actually wants to know is how much is left. The home screen shows the proportion of the allowance consumed as a circular progress ring, animated from zero up to the current value, with the indicator colour shifting through green, orange and red as the animation advances. The thresholds are bound to the progress percentage rather than to absolute values, so changing the daily cap doesn't mean touching the colour logic.",
  },
  {
    type: "heading",
    level: 3,
    text: "Keeping navigation and swiping in sync",
  },
  {
    type: "paragraph",
    text: "The bottom navigation and the swipe gesture are two ways of operating the same set of pages, and a change through either has to show up in the other. Swiping updates the selected item in the navigation bar, tapping the navigation bar sets the page index, and both paths read from a single source for that index. All three pages are preloaded so that moving back and forth doesn't rebuild views and lose their state.",
  },
  { type: "heading", level: 2, text: "Outcome" },
  {
    type: "paragraph",
    text: "The app ships as an APK covering login and registration, emissions calculation and logging, fault tolerant search, allowance transfers and in app notifications.",
  },
];
