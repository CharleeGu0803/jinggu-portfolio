import type { ProjectContentBlock } from "./types";

export const gameOfMarrakechContent: ProjectContentBlock[] = [
  { type: "heading", level: 2, text: "Overview" },
  {
    type: "paragraph",
    text: "The assignment supplies a string encoding that compresses player state, Assam's position and orientation, and all 49 board squares into fixed width fields, and every unit test sends and receives that format. The path of least resistance is to solve the tasks with substring arithmetic on the string itself, and the marking criteria say plainly that a purely string driven implementation is capped at 75 per cent even if every test passes. The real problem isn't getting the answers right. It's drawing a line between the string and the objects, and only converting at that line.",
  },
  { type: "heading", level: 2, text: "Challenges" },
  { type: "heading", level: 3, text: "Keeping the encoding at the boundary" },
  {
    type: "paragraph",
    text: "Parsing lives in a single utility class, and everything past it goes through constructors. Rugs, Assam, players and squares each take the string in on construction and turn it into typed fields, after which every rule check reads object state rather than characters, and objects assemble the encoding themselves on the way back out. The string format therefore appears in only two places, and the rest of the code is untouched by changes to it.",
  },
  {
    type: "paragraph",
    text: "The first version was not built this way. The state class held the raw string segments and its methods did substring work directly, so by the time the rule checks were written every method was reparsing the same fields and a change to the encoding meant a change in a dozen places. The second version was written from scratch.",
  },
  { type: "heading", level: 3, text: "Payment is a connected region problem" },
  {
    type: "paragraph",
    text: "The amount owed isn't the size of the rug. It's the size of the whole same colour region reachable from the square Assam landed on, adjacent by edges only, with diagonals not counting. The search expands recursively in four directions from the landing square, with a boolean matrix of the same dimensions marking visited squares, returning as soon as it goes off the board or hits a visited square or a colour that doesn't match. On a 7 by 7 board the recursion depth is a non issue, and what it buys is an implementation you can read straight against the rule.",
  },
  { type: "heading", level: 3, text: "Compressing the board edge into a rule" },
  {
    type: "paragraph",
    text: "When Assam walks off the board he follows a mosaic track around the outside and comes back on, and the detour doesn't count towards his movement. The track isn't uniform. Most edge squares turn once and return, while two of the four corners turn three times. Writing a path for each of the 28 edge squares gives you a table that has to be maintained by hand and hides its own errors. The direction the track actually runs depends only on the parity of the row or column, folding one way on even columns and the other on odd, with two specific corners needing an extra turn. Twenty odd special cases collapse into one method that branches on heading and checks parity inside.",
  },
  {
    type: "heading",
    level: 3,
    text: "One object serving both the rules and the rendering",
  },
  {
    type: "paragraph",
    text: "The rule engine wants array rows and columns, JavaFX wants pixels. Storing them separately means converting on every render, and storing them together carelessly means the rule code picks up interface concerns. Pixel coordinates are computed once in the constructor from the board geometry constants and held as fields alongside the array coordinates, with square width, gaps and piece offsets gathered in a single constants interface. Change one number and the whole layout follows.",
  },
  { type: "heading", level: 2, text: "Outcome" },
  {
    type: "paragraph",
    text: "The game runs from a single jar on a standard lab machine with the ruleset fully implemented, covering off board tracks, payment settlement, end of game detection and scoring, along with a random computer opponent. Unit tests cover every testable task and run through GitLab CI on each push.",
  },
];
