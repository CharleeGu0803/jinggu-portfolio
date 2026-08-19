import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { designWorks } from "@/data/design-works";

const Design = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Design Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Visual and product design work, from Figma
            </p>
          </div>
        </div>
      </section>

      {/* Design Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designWorks.map((work) => (
              <Link
                key={work.slug}
                to={`/design/${work.slug}`}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-elevated transition-smooth"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${work.color} relative overflow-hidden`}
                >
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary group-hover:underline underline-offset-4 decoration-2 transition-smooth">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    View Case Study →
                  </span>
                </div>
              </Link>
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
              <Link to="/contact">Let's Connect</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Design;
