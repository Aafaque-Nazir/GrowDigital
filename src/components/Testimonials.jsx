import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Amit Sharma",
    role: "CEO, TechFlow",
    content:
      "Grow Digital transformed our online presence. Our leads increased by 200% in just 3 months. Truly world-class service!",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, StyleHub",
    content:
      "The designs they created were absolutely stunning. They captured our brand essence perfectly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Raj Patel",
    role: "Director, EduCare",
    content:
      "Professional, responsive, and result-oriented. Their SEO strategy put us on the first page of Google.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: "#fbfbfb", overflow: "hidden" }}
    >
      <div className="container" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              color: "var(--primary)",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring" }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
              }}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                border: "1px solid rgba(0,0,0,0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  fontSize: "1.2rem",
                  marginBottom: "15px",
                }}
              >
                {"★".repeat(t.rating)}
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--secondary)",
                  marginBottom: "25px",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                }}
              >
                "{t.content}"
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "var(--bg-gradient)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "var(--primary)",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: "700", color: "var(--secondary)" }}>
                    {t.name}
                  </div>
                  <div
                    style={{ fontSize: "0.85rem", color: "var(--text-light)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
