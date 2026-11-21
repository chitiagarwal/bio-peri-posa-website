import { brandLogo } from "../data/brandLogo";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Recipes", path: "/recipes" },
  { label: "Bulk & Export", path: "/bulk-orders" },

  { label: "Quality", path: "/quality" },

  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xs border-b border-border"
          : "bg-brand-cream border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 py-1">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            data-ocid="nav.link"
          >
            <img
              src={brandLogo}
              alt="Bio Periposa botanical B logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-sans text-lg uppercase tracking-wide text-[#164c34] font-bold">
                BIO PERIPOSA
              </span>
              <span className="font-sans text-xs font-medium text-[#376a32]">
                Nature Around Us
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-ocid="nav.link"
                className={`px-3 py-2 text-base font-sans transition-colors rounded-lg ${
                  pathname === link.path
                    ? "text-brand-green font-medium"
                    : "text-[#234d32] hover:text-[#135c2a] hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center">
            <Link
              to="/bulk-orders"
              className="btn-primary text-sm"
              data-ocid="nav.primary_button"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-1 shadow-card">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-ocid="nav.link"
              className={`block px-4 py-2.5 rounded-lg text-sm font-sans transition-colors ${
                pathname === link.path
                  ? "bg-accent text-brand-green font-medium"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/bulk-orders"
              className="btn-primary w-full text-center"
              data-ocid="nav.primary_button"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
