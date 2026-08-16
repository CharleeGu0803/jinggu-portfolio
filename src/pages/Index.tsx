import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
                Hi, I'm <span className="text-primary">Jing</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Full-stack web developer building and customising CMS-driven web
                applications, from PHP backends to React front ends.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src="/coding-time.png"
                alt="coding time"
                className="relative rounded-3xl shadow-elevated w-full max-w-lg mx-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I enjoy learning by building real projects and improving them step
              by step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Front end Development",
                description:
                  "React, TypeScript, Next.js, JavaScript, SCSS, Material UI, HTML5, CSS3, jQuery, Elementor, WPBakery Page Builder.",
              },
              {
                icon: Code2,
                title: "Back end & platforms",
                description:
                  "PHP, Java, Python (Flask), MySQL, PostgreSQL, WordPress, Drupal.",
              },
              {
                icon: Sparkles,
                title: "Delivery & tooling",
                description:
                  "CMS, Docker, Figma, AWS, Git, CI/CD, Pytest, Agile.",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-smooth border border-border/50 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A few projects that show the range of what I build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-elevated transition-smooth flex flex-col"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let’s Build Something Reliable
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              I’m a hands-on developer with experience in React, Drupal,
              WordPress and so on, focused on creating practical, visually
              clear, and easy to maintain digital solutions.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
