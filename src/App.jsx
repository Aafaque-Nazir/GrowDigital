import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Strategy from "./components/Strategy";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import SEO from "./components/SEO";

// --- Custom Components ---

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          background: "var(--primary)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: hovered ? 1.5 : 1,
          opacity: hovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          border: "1px solid var(--primary)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          background: "transparent",
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          .cursor-dot, .cursor-outline { display: none !important; }
        }
        body { cursor: none; }
        a, button { cursor: none; }
      `}</style>
    </>
  );
};

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/919325629256?text=Hi%20Grow%20Digital,%20I%20want%20to%20scale%20my%20business!"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    style={{
      position: "fixed",
      bottom: "30px",
      right: "30px",
      width: "60px",
      height: "60px",
      background: "#25D366",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 25px rgba(37, 211, 102, 0.4)",
      zIndex: 1000,
      color: "white",
      fontSize: "2rem",
      cursor: "pointer",
    }}
  >
    <motion.div
      animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
      transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
    >
      💬
    </motion.div>
  </motion.a>
);

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#ffffff",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "var(--secondary)",
            letterSpacing: "-1px",
          }}
        >
          GROW <span style={{ color: "var(--primary)" }}>DIGITAL</span>
        </h1>
      </motion.div>
      <motion.div
        style={{
          width: "200px",
          height: "4px",
          background: "#e2e8f0",
          marginTop: "20px",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: "100%", background: "var(--primary)" }}
        />
      </motion.div>
    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <SEO
      title="Best Digital Marketing Agency"
      description="Grow Digital is the #1 Digital Marketing Agency in Navi Mumbai. We boost ROI with expert SEO, Ads, and Web Design."
    />
    <Hero />
    <Services />
    <Strategy />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content">
            <CustomCursor />
            <Toaster position="top-center" />
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
