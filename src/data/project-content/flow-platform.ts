import type { ProjectContentBlock } from "./types";

export const flowPlatformContent: ProjectContentBlock[] = [
  { type: "heading", level: 2, text: "Overview" },
  {
    type: "paragraph",
    text: "A single acquisition on a flow cytometer produces hundreds of thousands of events, each carrying measurements across a dozen or more channels, and the raw data arrives as a binary FCS file. A researcher's actual work isn't looking at one plot. It's switching channels, switching scales, drawing gates, and then applying the same set of gates across a whole batch of samples to get counts. That loop is what the platform has to support.",
  },
  { type: "heading", level: 2, text: "Challenges" },
  {
    type: "heading",
    level: 3,
    text: "Getting structure out of a hundred thousand points",
  },
  {
    type: "paragraph",
    text: "Plotting a sample of that size as a scatter produces heavy overplotting, and the density distribution of the cell populations disappears entirely. Before rendering, the density field is estimated with a 2048 by 2048 two dimensional histogram, spline interpolation returns a density value to each individual point, and the points are sorted and drawn from sparse to dense with density encoded as colour. Overlapping regions are no longer a block of flat colour, and the dense populations surface on their own.",
  },
  { type: "heading", level: 3, text: "Where the rendering belongs" },
  {
    type: "paragraph",
    text: "Sending a hundred thousand points to the browser and handing them to a front end charting library stalls at both ends, on transfer and on render, and every axis adjustment starts the whole thing again. The plot is therefore rendered server side by matplotlib on the Agg backend and returned as an image, leaving the browser responsible for the interface and for submitting parameters. The cost is an extra round trip. What it buys is a data volume no longer bounded by browser memory.",
  },
  {
    type: "heading",
    level: 3,
    text: "Turning a single analysis into batch output",
  },
  {
    type: "paragraph",
    text: "A gate count on one sample is an intermediate result. What researchers want is the comparison across a batch. Once gate definitions are decoupled from samples, a gate can be applied to every FCS file in a batch, the events falling inside the polygon are counted for each, and reportlab compiles the results into a PDF report. A workflow that meant repeating the same steps by hand across dozens of samples collapses into a single request.",
  },
  { type: "heading", level: 2, text: "Outcome" },
  {
    type: "paragraph",
    text: "The platform was delivered to the client, accompanied by a User Manual and a Deployment Guide. The data model is defined through SQLAlchemy and schema changes run through Alembic migrations, which kept each team member's development database in step.",
  },
];
