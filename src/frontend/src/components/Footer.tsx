import { brandLogo } from "../data/brandLogo";
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
    <footer className="bg-[#e8f3db] text-[#17442f] border-t border-[#d4e7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Details */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={brandLogo}
                alt="Bio Periposa botanical B logo"
                className="w-20 h-20 object-contain"
              />
              <span className="font-sans text-lg text-[#17442f] font-bold">
                Bio Periposa Pvt. Ltd.
              </span>
            </div>
            <p
              className="text-base font-sans mb-5"
              style={{ color: "#49734c" }}
            >
              Nature Around Us
            </p>
            <ul
              className="space-y-3 text-base font-sans"
              style={{ color: "#355e40" }}
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
                <Phone size={15} style={{ color: "#528e42" }} />
                <a
                  href="tel:+919810859162"
                  className="hover:text-[#237a3b] transition-colors"
                >
                  +91 98108 59162
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={15} style={{ color: "#528e42" }} />
                <a
                  href="mailto:bioperiposa@outlook.com"
                  className="hover:text-[#237a3b] transition-colors"
                >
                  bioperiposa@outlook.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-base font-sans font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#528e42" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-base font-sans transition-colors hover:text-[#237a3b]"
                    style={{ color: "#355e40" }}
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
              className="text-base font-sans font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#528e42" }}
            >
              About
            </h3>
            <p
              className="font-serif text-xl leading-relaxed mb-4"
              style={{ color: "#17442f" }}
            >
              Botanical ingredients, rooted in science.
            </p>
            <p
              className="text-base font-sans"
              style={{ color: "#49734c" }}
            >
              Moringa leaf and ashwagandha root powders for individual and business customers.
              Processed through trusted partners.
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-sans"
          style={{
            borderTop: "1px solid #bfd7b5",
            color: "#537458",
          }}
        >
          <span>© {year} Bio Periposa Pvt. Ltd. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#237a3b] transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
