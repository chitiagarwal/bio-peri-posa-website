import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Decorative mascots only: never replace product photography or cover links. */
export default function ExploringMascots() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [available, setAvailable] = useState([true, true]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 260);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);
  if (pathname.startsWith("/products") || pathname === "/quality-admin") return null;
  const mascots = [
    { src: "/assets/mascot-moringa..png", alt: "Moringa mascot", side: "left" },
    { src: "/assets/mascot-ashwagandha..png", alt: "Ashwagandha mascot", side: "right" },
  ];
  return <>
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-6 z-30 flex justify-between items-end px-1 sm:px-5 overflow-hidden">
      {mascots.map((m, i) => available[i] ? <img key={m.side} src={m.src} alt={m.alt}
        onError={() => setAvailable(prev => prev.map((v,j) => i === j ? false : v))}
        className={`w-16 sm:w-24 md:w-28 max-h-36 object-contain drop-shadow-lg transition-all duration-700 ease-out motion-safe:animate-[mascotWander_4s_ease-in-out_infinite] ${scrolled ? "opacity-90 translate-y-0" : "opacity-0 translate-y-28"}`}
        style={{ animationDelay: i ? "1s" : "0s" }} /> : <span key={m.side} />)}
    </div>
    <style>{`@keyframes mascotWander { 0%,100% { translate: 0 0; rotate: -2deg; } 50% { translate: 0 -10px; rotate: 2deg; } }`}</style>
  </>;
}
