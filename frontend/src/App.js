import "./App.css";
import React, { Suspense, lazy, memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Toaster } from "./components/ui/sonner";

// Lazy load below-fold components for better performance
// Group related components to reduce chunk count
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

// Minimal loading placeholder - memoized for performance
const SectionLoader = memo(() => (
  <div className="min-h-[100px] flex items-center justify-center bg-transparent">
    <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin" aria-label="Loading content"></div>
  </div>
));
SectionLoader.displayName = 'SectionLoader';

// Grouped lazy sections with single Suspense boundary
const LazySections = memo(() => (
  <>
    <Mission />
    <About />
    <Services />
    <Portfolio />
    <Shop />
    <FoodReviews />
    <InstagramFeeds />
    <FindMaria />
    <Testimonials />
    <Contact />
    <Footer />
  </>
));
LazySections.displayName = 'LazySections';

const Home = memo(() => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <LazySections />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingContact />
      </Suspense>
      <Toaster />
    </div>
  );
});
Home.displayName = 'Home';

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
