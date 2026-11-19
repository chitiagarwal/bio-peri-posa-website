import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import BulkOrders from "./pages/BulkOrders";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LeadershipQuality from "./pages/LeadershipQuality";
import Products from "./pages/Products";
import QualityReports from "./pages/QualityReports";
import QualityAdmin from "./pages/QualityAdmin";
import WhyChooseUs from "./pages/WhyChooseUs";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
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
