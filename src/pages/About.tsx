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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 via-secondary to-accent/20 rounded-3xl overflow-hidden shadow-elevated">
                <div className="aspect-[4/5] rounded-1xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ">
                  <img
                    src="/jing-with-cat-shelly.jpg"
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
                  Hello, I’m Jing. I’m a developer with nearly 2 years of
                  experience in IT, and I enjoy turning ideas into digital
                  products that are clear, practical, and built to last.
                </p>
                <p>
                  My journey into the IT field started with a very simple
                  curiosity: “Why does so much happen when you click a single
                  button?” As I continued to learn by doing, that curiosity
                  gradually turned into genuine passion. I began building
                  projects independently, working through page structure,
                  interaction design, data handling, deployment, and slowly
                  bringing abstract ideas into real, working products.
                </p>
                <p>
                  Throughout my development work, I’ve gained experience across
                  both front-end and back-end. I use React and TypeScript to
                  build responsive user interfaces, Python to handle business
                  logic, and I’ve also worked with content management systems
                  such as WordPress and Drupal, where I focus on making content
                  easier to edit, manage, and maintain over time.
                </p>
                <p>
                  My working style is practical and communication-focused. I
                  enjoy breaking problems down, discussing requirements with
                  others, aligning on direction, and moving forward step by
                  step. To me, writing code is never an isolated task. it’s an
                  ongoing process of collaboration, feedback, and refinement.
                </p>
                <p>
                  Of course, my development routine isn’t only about code. Quite
                  often, my thinking is interrupted by my cat Shelly, appearing
                  on my keyboard or quietly sitting beside me. These small,
                  unplanned pauses often help me step back, look at problems
                  from a different angle, and remind me to stay patient and
                  balanced while doing focused work.
                </p>
                <p>
                  I’m now looking to join a friendly, grounded, and
                  collaborative team, where I can continue to grow through
                  real-world projects and contribute long-term value to both
                  users and the people I work with.
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
