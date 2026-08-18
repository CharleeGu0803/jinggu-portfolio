import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Description } from "@radix-ui/react-toast";

const experience = [
  {
    title: "Software Developer",
    company: "Agileware",
    period: "Mar 2026 –  Present",
    location: "Canberra",
    technologies:
      "PHP, WordPress, Drupal, JavaScript, SCSS, MySQL, Gravity Forms, Docker, Git, WCAG 2.1 AA",
    highlights: [
      "Built custom PHP themes and reusable templates with ACF and WPBakery from Figma designs",
      "Developed dynamic content filtering and search with JavaScript, jQuery, AJAX and MySQL queries",
      "Remediated WCAG 2.1 AA issues surfaced by Lighthouse and WAVE audits",
      "Integrated Gravity Forms with an open-source CRM via REST endpoints and webhooks",
      "Managed Docker-based dev environments, database syncs and Git branching with peer review",
    ],
  },
  {
    title: "Web Developer Internship",
    company: "ANU Medical School",
    period: "Jul 2024 – Jul 2025",
    location: "Canberra",
    technologies:
      "Python (Flask), SQLAlchemy, JavaScript, ECharts, React, Material UI, RESTful API, Pytest",
    highlights: [
      "Built a real-time interactive SPA with ECharts for cell population visualisation",
      "Designed relational data models with SQL and SQLAlchemy for hierarchical, isolated datasets",
      "Implemented authentication and account management with Flask and JWT",
      "Delivered a PDF export feature and unit test coverage with Pytest",
    ],
  },
  {
    title: "Project Coordinator",
    company: "Yimi Information Technology",
    period: "Oct 2022 – Apr 2023",
    location: "Shanghai",
    description:
      "Coordinated delivery of 10 concurrent campaigns using schedules and Gantt charts; managed client communication and published 20 WeChat articles averaging 10,000 readers each.",
  },
];

const education = [
  {
    degree: "Master of Computing",
    school: "Australian National University",
    period: "Jul 2023 - Jul 2025",
    // description: "Specialisation in Software Engineering and Data Science.",
  },
  {
    degree: "Bachelor of Arts in Advertising",
    school: "Sichuan Agricultural University",
    period: "Sep 2018 - Jun 2022",
  },
];

const certifications = [
  "AWS Certified Developer",
  "Wordpress Developer",
  "Google Digital Marketing & E-commerce",
];

const Resume = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              My professional journey and qualifications
            </p>
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <p className="text-muted-foreground font-medium">
                        {job.company}
                      </p>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground pr-3">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                    {job.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {job.description}
                      </p>
                    )}
                    {job.technologies && (
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        <span className="font-medium text-foreground">
                          Technologies:
                        </span>{" "}
                        {job.technologies}
                      </p>
                    )}
                    {job.highlights && (
                      <ul className="list-disc list-outside pl-5 space-y-1">
                        {job.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm leading-relaxed"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border/50 shadow-soft"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">
                    {edu.school}
                  </p>
                  {/* <p className="text-muted-foreground text-sm leading-relaxed">
                    {edu.description}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground">
                Certifications
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-soft"
                >
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
