import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const skills = [
  "Drupal",
  "React",
  "Wordpress",
  "Java",
  "Python",
  "PostgresQL DB",
  "ETL Pipelines",
  "API Development",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate about creating meaningful digital experiences
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-16 items-center">
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-secondary to-accent/20 rounded-3xl overflow-hidden shadow-elevated">
                <div className="aspect-[4/5] rounded-1xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ">
                  <img
                    src="/jing-professional-photo.png"
                    alt="Jing profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-9xl text-primary/30 font-bold">
                    Jing
                  </span>
                </div> */}
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a developer based in Canberra, working across the
                  front-end and back-end. I build interfaces with React and
                  TypeScript, handle business logic in Python, and have spent a
                  good deal of time inside content management systems such as
                  Drupal, WordPress and CiviCRM. In that kind of work the
                  interesting problem is rarely the code itself. It's building
                  something non-technical people can maintain over the long term
                  without breaking it six months later.
                </p>
                <p>
                  I came to software from advertising, and the crossover point
                  was data. In my first role I was pulling and cleaning platform
                  traffic data to work out what people actually did on a page,
                  as opposed to what we assumed they did. The analysis was the
                  interesting part, but writing the scripts that made it
                  possible turned out to be more interesting still, and that's
                  what sent me back to study. The advertising years didn't go to
                  waste either. Four years of thinking about how people read a
                  page, what they notice first, and where they give up is why I
                  care about interface detail, and why I'd rather write
                  documentation someone can actually follow than leave a
                  colleague guessing.
                </p>
                <p>
                  I'm continually broadening my skill set, working towards
                  becoming a well-rounded full-stack developer who can build a
                  considered interface and handle the logic and data behind it
                  just as carefully. What I'm looking for is a team where I can
                  keep growing through real projects, where questions are
                  welcome, and where doing the work properly counts for more
                  than doing it quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
              Skills & Expertise
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50 shadow-soft"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
              My Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Work Hard, Play Harder",
                  description:
                    "I take my work seriously and give it my full focus, but I also believe that rest and balance matter. Staying curious, relaxed helps me do better work in the long run.",
                },
                {
                  title: "Collaboration",
                  description:
                    "Great things happen when minds come together. I value open communication and teamwork.",
                },
                {
                  title: "Lifelong Learning",
                  description:
                    "Continuous learning is key. I'm always exploring new technologies and methodologies.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
