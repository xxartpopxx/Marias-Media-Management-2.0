import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { About } from "./components/About";
import { DigitalProducts } from "./components/DigitalProducts";
import { FindMaria } from "./components/FindMaria";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <About />
      <DigitalProducts />
      <FindMaria />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
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
