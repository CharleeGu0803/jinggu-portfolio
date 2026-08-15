import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Welcome to my portfolio
            </p>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
              Hi, I'm <span className="text-primary">Jing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              • A fully-committed Web Developer with a genuine passion for
              building great digital products.
              <br></br>• Turning abstract ideas into code is what excites me,
              and good work comes from constant learning and careful refinement.
              <br></br>• I want every line of code I write to be worth
              committing.
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
                icon: Code2,
                title: "Website Development",
                description:
                  "Building responsive, content-driven websites with clean structure, strong usability, and long-term maintainability.",
              },
              {
                icon: Palette,
                title: "Application Development",
                description:
                  "Developing web applications by turning ideas into structured, working systems.",
              },
              {
                icon: Sparkles,
                title: "Data Analysis",
                description:
                  "Analysing and visualising data to support clearer decisions and better understanding.",
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
