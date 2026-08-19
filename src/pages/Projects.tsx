import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import React from "react";

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of work that showcases my skills and passion
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-elevated transition-smooth"
              >
                {/* Project Image Placeholder */}
                <div
                  className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  // className="aspect-video relative overflow-hidden bg-secondary"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-foreground/10 font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  {/* <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div> */}
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-4">
                      {project.demoUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="secondary"
                          className="gap-2"
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {project.demoLabel ?? "Demo"}
                          </a>
                        </Button>
                      )}

                      {project.githubUrl && (
                        <Button
                          asChild
                          size="sm"
                          variant="secondary"
                          className="gap-2"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-primary hover:underline underline-offset-4 decoration-2 transition-smooth"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
