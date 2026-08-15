import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {project.demoUrl && (
                <Button asChild size="lg" className="gap-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className={`aspect-video rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-12 shadow-elevated`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                {project.longDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <Link to="/contact">Let's Connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
