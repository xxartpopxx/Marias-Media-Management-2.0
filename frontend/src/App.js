import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Toaster } from "./components/ui/sonner";

// Lazy load below-fold components for better performance
const Mission = lazy(() => import("./components/Mission").then(m => ({ default: m.Mission })));
const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import("./components/Portfolio").then(m => ({ default: m.Portfolio })));
const Shop = lazy(() => import("./components/Shop").then(m => ({ default: m.Shop })));
const FoodReviews = lazy(() => import("./components/FoodReviews").then(m => ({ default: m.FoodReviews })));
const InstagramFeeds = lazy(() => import("./components/InstagramFeeds").then(m => ({ default: m.InstagramFeeds })));
const FindMaria = lazy(() => import("./components/FindMaria").then(m => ({ default: m.FindMaria })));
const Testimonials = lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const FloatingContact = lazy(() => import("./components/FloatingContact").then(m => ({ default: m.FloatingContact })));

// Minimal loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center bg-transparent">
    <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" aria-label="Loading content"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Mission />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Shop />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FoodReviews />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <InstagramFeeds />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FindMaria />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingContact />
      </Suspense>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
