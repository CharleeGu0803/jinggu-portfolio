import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { designWorks } from "@/data/design-works";

const screenAnchorId = (label: string) =>
  `screen-${label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

const DesignDetail = () => {
  const { slug } = useParams();
  const work = designWorks.find((w) => w.slug === slug);

  if (!work) {
    return <Navigate to="/design" replace />;
  }

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/design"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Designs
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {work.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {work.tags.map((tag, index) => (
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
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {work.intro.map((block, index) =>
              block.type === "heading" ? (
                block.level === 2 ? (
                  <h2
                    key={index}
                    className="font-display text-2xl font-semibold text-foreground"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <h3
                    key={index}
                    className="font-display text-lg font-semibold text-foreground"
                  >
                    {block.text}
                  </h3>
                )
              ) : (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed text-lg"
                >
                  {block.text}
                </p>
              ),
            )}
          </div>
        </div>
      </section>

      {work.screens.length > 0 && (
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <div
              id="screen-tabs"
              className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 sticky top-20 z-10 bg-background/95 backdrop-blur py-3 scroll-mt-20"
            >
              <span className="text-base font-medium text-muted-foreground mr-1">
                Jump to:
              </span>
              {work.screens.map((screen) => (
                <a
                  key={screen.label}
                  href={`#${screenAnchorId(screen.label)}`}
                  className="text-sm font-semibold px-4 py-2 rounded-lg bg-secondary text-foreground border-b-[3px] border-primary/60 shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 active:translate-y-0 transition-smooth"
                >
                  {screen.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {work.screens.map((screen) => (
        <section
          key={screen.label}
          id={screenAnchorId(screen.label)}
          className="py-12 scroll-mt-20"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {screen.label}
                </h2>
                {work.screens.length > 1 && (
                  <Button asChild variant="outline" size="sm" className="gap-1.5">
                    <a href="#screen-tabs">
                      <ArrowUp className="w-3.5 h-3.5" />
                      Back to tabs
                    </a>
                  </Button>
                )}
              </div>
              <div
                className={`rounded-2xl bg-gradient-to-br ${work.color} relative overflow-hidden shadow-elevated`}
              >
                <div className="max-h-[75vh] overflow-y-auto">
                  <img
                    src={screen.image}
                    alt={`${work.title} — ${screen.label}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-muted-foreground/70 text-xs mt-2">
                Scroll within the frame to view the full page.
              </p>
              {screen.caption && (
                <p className="text-muted-foreground text-sm mt-4">
                  {screen.caption}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}

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

export default DesignDetail;
