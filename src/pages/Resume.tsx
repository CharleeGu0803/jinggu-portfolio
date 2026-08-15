import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Description } from "@radix-ui/react-toast";

const experience = [
  {
    title: "Software Developer",
    company: "Agileware",
    period: "Mar 2026 –  Present",
    description:
      "Full-stack web development across multiple client sites and platforms, covering front-end builds, back-end CRM configuration, bug fixing and QA.",
  },
  {
    title: "Web Application Developer",
    company: "ANU Medical School",
    period: "Jul 2024 – Jul 2025",
    description:
      "Cell data visualisation and analysis platform providing multiple algorithms to identify and analyse cell populations, with integrated user and administrator portals.",
  },
  {
    title: "Software Engineer",
    company: "Yimi Information Technology",
    period: "Oct 2022 – Apr 2023",
    description:
      "Extracted, transformed and analysed user and platform traffic data to support reporting and data-driven business decisions.",
  },
];

const education = [
  {
    degree: "Master of Computing",
    school: "Australian National University",
    period: "2023 - 2025",
    // description: "Specialisation in Software Engineering and Data Science.",
  },
  {
    degree: "Bachelor of Arts in Advertising",
    school: "Sichuan Agricultural University",
    period: "2018 - 2022",
  },
];

// const certifications = [
//   "AWS Certified Developer",
//   "Google Cloud Professional",
//   "Meta Frontend Developer",
//   "MongoDB Certified Developer",
// ];

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
                    <p className="text-muted-foreground font-medium mb-2">
                      {job.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {job.description}
                    </p>
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
              {/* <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div> */}
              {/* <h2 className="font-display text-3xl font-bold text-foreground">
                Certifications
              </h2> */}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-soft"
                >
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
