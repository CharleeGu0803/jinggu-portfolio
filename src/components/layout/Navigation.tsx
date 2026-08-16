import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-2xl font-semibold text-foreground tracking-tight hover:text-primary transition-smooth"
        >
          <img
            src="/jing-avatar-logo.png"
            alt="Jing logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          Jing
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-smooth relative py-2",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
