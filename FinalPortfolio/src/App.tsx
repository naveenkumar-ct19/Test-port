import { createBrowserRouter, RouterProvider, useLocation } from "react-router";
import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";

const Portfolio = lazy(() => import("./imports/Desktop7-6/index"));
const CaseStudy1 = lazy(() => import("./pages/CaseStudy1"));
const CaseStudy2 = lazy(() => import("./pages/CaseStudy2"));
const CaseStudy3 = lazy(() => import("./pages/CaseStudy3"));
const CaseStudy4 = lazy(() => import("./pages/CaseStudy4"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const DiveDeeper = lazy(() => import("./pages/DiveDeeper"));
const CaseStudyNXTAAS = lazy(() => import("./pages/CaseStudyNXTAAS"));
const CaseStudyDishGenie = lazy(() => import("./pages/CaseStudyDishGenie"));
const CaseStudyVersar = lazy(() => import("./pages/CaseStudyVersar"));

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 5347;

function PortfolioPage() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div style={{ width: "100vw", height: `${DESIGN_HEIGHT * scale}px`, overflowY: "clip" }}>
      <div style={{ width: `${DESIGN_WIDTH}px`, height: `${DESIGN_HEIGHT}px`, zoom: scale }}>
        <Portfolio scale={scale} />
      </div>
    </div>
  );
}

function ScaledPage({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(() => window.innerWidth / DESIGN_WIDTH);
  const innerRef = useRef<HTMLDivElement>(null);
  const [outerHeight, setOuterHeight] = useState(0);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // getBoundingClientRect().height returns the actual rendered (zoomed) height
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => {
      const h = el.getBoundingClientRect().height;
      if (h > 0) setOuterHeight(h);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [scale]);

  return (
    <div style={{ width: "100vw", height: outerHeight ? `${outerHeight}px` : "100vh", overflowX: "clip" }}>
      <div ref={innerRef} style={{ width: `${DESIGN_WIDTH}px`, zoom: scale }}>
        {children}
      </div>
    </div>
  );
}

function withScroll(el: React.ReactNode) {
  return <><ScrollToTop />{el}</>;
}

function Fallback() {
  return <div style={{ minHeight: "100dvh" }} />;
}

const router = createBrowserRouter([
  { path: "/", element: withScroll(<Suspense fallback={<Fallback />}><PortfolioPage /></Suspense>) },
  { path: "/case-study/orion-cloudmax", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudy1 /></ScaledPage></Suspense>) },
  { path: "/case-study/blackberry-athoc", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudy2 /></ScaledPage></Suspense>) },
  { path: "/case-study/loan-workflow", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudy3 /></ScaledPage></Suspense>) },
  { path: "/case-study/pediatrics", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudy4 /></ScaledPage></Suspense>) },
  { path: "/about", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><AboutMe /></ScaledPage></Suspense>) },
  { path: "/dive-deeper", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><DiveDeeper /></ScaledPage></Suspense>) },
  { path: "/case-study/nxtaas", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudyNXTAAS /></ScaledPage></Suspense>) },
  { path: "/case-study/dish-genie", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudyDishGenie /></ScaledPage></Suspense>) },
  { path: "/case-study/versar", element: withScroll(<Suspense fallback={<Fallback />}><ScaledPage><CaseStudyVersar /></ScaledPage></Suspense>) },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
