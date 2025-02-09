import { useEffect,  } from "react";
import FAQSection from "./components/FAQSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MarketingSection from "./components/MarketingSection";
import Navbar from "./components/Navbar";
import TrustedCreators from "./components/TrustedCreators";
import Lenis from "@studio-freight/lenis";
import StickyCardScroll from "./components/StickyCardScroll";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // Smooth scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
      smoothWheel: true,
      smoothTouch: false,
      direction: "vertical", // Enable vertical scrolling
      gestureDirection: "vertical", // Allow gestures in the vertical direction
    });

    lenis.start(); // Ensure smooth scrolling works

    // Handle request animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup
    };
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <StickyCardScroll/>
      <TrustedCreators />
      <Features />
      <MarketingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
