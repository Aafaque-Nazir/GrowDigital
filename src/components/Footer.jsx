import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "30px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Glow */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,110,179,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "800",
                marginBottom: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              Grow <span style={{ color: "var(--primary)" }}>Digital</span>
            </div>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.6",
                marginBottom: "30px",
              }}
            >
              Elevating brands with data-driven digital strategies. We turn
              clicks into customers and ideas into empires.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "var(--primary)" }}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    color: "white",
                    transition: "0.3s",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {["Home", "Services", "Strategy", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    style={{
                      color: "#94a3b8",
                      transition: "0.3s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                    className="footer-link"
                  >
                    {link}
                  </a>
                  <style>{`.footer-link:hover { color: var(--primary) !important; padding-left: 5px; }`}</style>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Our Expertise
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {[
                "SEO Optimization",
                "Social Media",
                "Paid Advertising",
                "Web Development",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/#services"
                    style={{ color: "#94a3b8", transition: "0.3s" }}
                    className="footer-link"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Get in Touch
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <li style={{ display: "flex", gap: "15px", color: "#94a3b8" }}>
                <MapPin
                  size={20}
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />
                <span>
                  101, Business Bay, Navi Mumbai,
                  <br />
                  India 410210
                </span>
              </li>
              <li style={{ display: "flex", gap: "15px", color: "#94a3b8" }}>
                <Phone
                  size={20}
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />
                <a href="tel:+919325629256" style={{ color: "inherit" }}>
                  +91 9325629256
                </a>
              </li>
              <li style={{ display: "flex", gap: "15px", color: "#94a3b8" }}>
                <Mail
                  size={20}
                  style={{ color: "var(--primary)", flexShrink: 0 }}
                />
                <a
                  href="mailto:hello@growdigital.com"
                  style={{ color: "inherit" }}
                >
                  hello@growdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            color: "#64748b",
            fontSize: "0.9rem",
          }}
        >
          <p>© {new Date().getFullYear()} Grow Digital. All rights reserved.</p>
          <div style={{ display: "flex", gap: "30px" }}>
            <Link
              to="/privacy-policy"
              style={{
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              style={{
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
