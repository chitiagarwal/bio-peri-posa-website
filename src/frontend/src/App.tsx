import { useEffect } from "react";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouterState,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import ExploringMascots from "./components/ExploringMascots";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BulkOrders from "./pages/BulkOrders";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LeadershipQuality from "./pages/LeadershipQuality";
import Products from "./pages/Products";
import MoringaDetail from "./pages/MoringaDetail";
import AshwagandhaDetail from "./pages/AshwagandhaDetail";
import Recipes from "./pages/Recipes";
import QualityReports from "./pages/QualityReports";
import QualityAdmin from "./pages/QualityAdmin";
import WhyChooseUs from "./pages/WhyChooseUs";

function PageLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <ExploringMascots />
      <Footer />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: PageLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});
const moringaRoute = createRoute({getParentRoute:()=>rootRoute,path:"/products/moringa",component:MoringaDetail});
const ashwagandhaRoute = createRoute({getParentRoute:()=>rootRoute,path:"/products/ashwagandha",component:AshwagandhaDetail});
const recipesRoute = createRoute({getParentRoute:()=>rootRoute,path:"/recipes",component:Recipes});
const whyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/why-choose-us",
  component: WhyChooseUs,
});
const bulkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/bulk-orders",
  component: BulkOrders,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: Careers,
});
const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leadership-quality",
  component: LeadershipQuality,
});

const qualityRoute = createRoute({getParentRoute:()=>rootRoute,path:"/quality",component:QualityReports});
const qualityAdminRoute = createRoute({getParentRoute:()=>rootRoute,path:"/quality-admin",component:QualityAdmin});

const routeTree = rootRoute.addChildren([
  qualityRoute,
  qualityAdminRoute,
  indexRoute,
  aboutRoute,
  productsRoute,
  moringaRoute,
  ashwagandhaRoute,
  recipesRoute,
  whyRoute,
  bulkRoute,
  contactRoute,
  careersRoute,
  leadershipRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  // Admin fallback through the working homepage: avoids Vercel deep-link 404s.
  // This is navigation only; Supabase RLS must enforce admin authorization.
  if (new URLSearchParams(window.location.search).get("admin") === "quality") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1"><QualityAdmin /></main>
        <Footer />
      </div>
    );
  }
  return <RouterProvider router={router} />;
}
