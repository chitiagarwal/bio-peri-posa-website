import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Recipes", path: "/recipes" },
  { label: "Bulk Orders", path: "/bulk-orders" },
  { label: "Quality", path: "/quality" },

  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  return (
    <footer className="bg-[#143e2b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Details */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/uploads/ChatGPT-Image-Mar-11-2026-10_17_00-AM-1.png"
                alt="Bio Peri Posa Logo"
                className="w-14 h-14 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]"
              />
              <span className="font-sans text-base text-white font-semibold">
                Bio Periposa Pvt. Ltd.
              </span>
            </div>
            <p
              className="text-sm font-sans mb-5"
              style={{ color: "oklch(0.80 0.010 145)" }}
            >
              Nature Around Us
            </p>
            <ul
              className="space-y-3 text-sm font-sans"
              style={{ color: "#e1e9d8" }}
            >
              <li className="flex gap-2">
                <MapPin
                  size={15}
                  className="shrink-0 mt-0.5"
                  style={{ color: "#a4d97c" }}
                />
                <span>
                  Bio Periposa Private Limited, Office No. F104, Aditya Tower, Plot No. 5, District Centre, Laxmi Nagar, Patparganj, Delhi 110092, India
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone size={15} style={{ color: "oklch(0.65 0.055 145)" }} />
                <a
                  href="tel:+919810859162"
                  className="hover:text-white transition-colors"
                >
                  +91 98108 59162
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={15} style={{ color: "oklch(0.65 0.055 145)" }} />
                <a
                  href="mailto:bioperiposa@outlook.com"
                  className="hover:text-white transition-colors"
                >
                  bioperiposa@outlook.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-sans font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.65 0.055 145)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm font-sans transition-colors hover:text-white"
                    style={{ color: "oklch(0.72 0.008 95)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline */}
          <div>
            <h3
              className="text-sm font-sans font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.65 0.055 145)" }}
            >
              About
            </h3>
            <p
              className="font-serif text-xl leading-relaxed mb-4"
              style={{ color: "oklch(0.90 0.015 145)" }}
            >
              Botanical ingredients, rooted in science.
            </p>
            <p
              className="text-sm font-sans"
              style={{ color: "oklch(0.65 0.010 95)" }}
            >
              Moringa leaf and ashwagandha root powders for individual and business customers.
              Processed through trusted partners.
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans"
          style={{
            borderTop: "1px solid oklch(0.35 0.040 150)",
            color: "oklch(0.55 0.008 95)",
          }}
        >
          <span>© {year} Bio Periposa Pvt. Ltd. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
