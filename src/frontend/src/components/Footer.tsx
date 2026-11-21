import { brandLogo } from "../data/brandLogo";
import { useRouterState } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = useRouterState().location.pathname;
  const isWhiteFooter = pathname === "/" || pathname === "/recipes" || pathname.startsWith("/recipes/");
  return (
    <footer className={`${isWhiteFooter ? "bg-white border-[#e4e9df]" : "bg-[#e8f3db] border-[#d4e7c8]"} text-[#17442f] border-t`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <img src={brandLogo} alt="Bio Periposa botanical B logo" className="w-20 h-20 object-contain" />
            <div>
              <p className="text-lg font-bold">Bio Periposa Private Limited</p>
              <p className="text-sm text-[#49734c] mt-1">Nature Around Us</p>
            </div>
          </div>
          <address className="not-italic flex-1 lg:max-w-md flex items-start gap-2 text-sm text-[#355e40] leading-relaxed">
            <MapPin size={18} className="shrink-0 mt-0.5 text-[#528e42]" aria-hidden="true"/>
            <span>Office No. F104, Aditya Tower, Plot No. 5, District Centre, Laxmi Nagar, Patparganj, Delhi 110092, India</span>
          </address>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-5 lg:gap-2 text-sm text-[#355e40]">
            <a href="tel:+919810859162" className="flex items-center gap-2 hover:text-[#237a3b]"><Phone size={17} aria-hidden="true"/> +91 98108 59162</a>
            <a href="mailto:bioperiposa@outlook.com" className="flex items-center gap-2 hover:text-[#237a3b]"><Mail size={17} aria-hidden="true"/> bioperiposa@outlook.com</a>
          </div>
        </div>
        <div className="mt-5 pt-3 border-t border-[#c8d9bf] text-xs text-[#537458]">
          © {year} Bio Periposa Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
