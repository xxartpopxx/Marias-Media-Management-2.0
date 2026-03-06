import "./App.css";
import React, { Suspense, lazy, memo, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Toaster } from "./components/ui/sonner";
import { PageTransition } from "./components/PageTransition";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage").then(m => ({ default: m.PortfolioPage })));
const ShopPage = lazy(() => import("./pages/ShopPage").then(m => ({ default: m.ShopPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(m => ({ default: m.ContactPage })));
const EtsyShopPage = lazy(() => import("./components/EtsyShopPage").then(m => ({ default: m.EtsyShopPage })));

// Page loader component
const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500">Loading...</p>
    </div>
  </div>
));
PageLoader.displayName = 'PageLoader';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper with header
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <PageTransition>
        {children}
      </PageTransition>
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Legacy route for Etsy shop */}
              <Route path="/etsy" element={<EtsyShopPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
