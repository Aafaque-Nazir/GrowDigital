import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Helper to handle hash navigation from other pages
  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          Grow <span style={{ color: "var(--secondary)" }}>Digital</span>
        </Link>

        <button className="mobile-toggle" onClick={toggleMobile}>
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Nav */}
        <nav className="nav-menu desktop-menu">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="nav-link"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="nav-link"
          >
            Services
          </a>
          <a
            href="#strategy"
            onClick={(e) => handleNavClick(e, "strategy")}
            className="nav-link"
          >
            Strategy
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="btn btn-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="nav-menu mobile-menu active"
              style={{
                display: "flex",
                position: "fixed",
                top: 0,
                right: 0,
                width: "80%",
                height: "100vh",
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(20px)",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
                zIndex: 1050,
                padding: "40px",
              }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "25px",
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  alignItems: "center",
                }}
              >
                <motion.li whileTap={{ scale: 0.95 }}>
                  <a
                    className="nav-link"
                    style={{ fontSize: "1.2rem" }}
                    onClick={(e) => handleNavClick(e, "hero")}
                  >
                    Home
                  </a>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                  <a
                    className="nav-link"
                    style={{ fontSize: "1.2rem" }}
                    onClick={(e) => handleNavClick(e, "services")}
                  >
                    Services
                  </a>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                  <a
                    className="nav-link"
                    style={{ fontSize: "1.2rem" }}
                    onClick={(e) => handleNavClick(e, "strategy")}
                  >
                    Strategy
                  </a>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }}>
                  <a
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={(e) => handleNavClick(e, "contact")}
                  >
                    Get Started
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .desktop-menu { display: flex; }
        .mobile-menu { display: none; }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .mobile-menu { display: flex; }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
