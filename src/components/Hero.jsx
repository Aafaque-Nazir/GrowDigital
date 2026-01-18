import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 24px",
              background: "rgba(0, 110, 179, 0.08)",
              color: "var(--primary)",
              borderRadius: "50px",
              fontSize: "0.9rem",
              fontWeight: "600",
              marginBottom: "24px",
              border: "1px solid rgba(0, 110, 179, 0.1)",
            }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
              🚀
            </motion.span>
            We Boost Your Business Growth
          </motion.div>

          <h1 className="heading-xl">
            Grow Your Business With{" "}
            <span className="text-gradient">Expert Digital Marketing</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: "1.25rem",
              color: "var(--text-light)",
              marginBottom: "40px",
              maxWidth: "540px",
              lineHeight: "1.7",
            }}
          >
            Stop chasing leads. We help brands attract more reach, generate
            qualified leads, and drive sales with proven results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
          >
            <a href="#contact" className="btn btn-primary">
              Start Growing Now
            </a>
            <a
              href="#services"
              className="btn"
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                color: "var(--secondary)",
              }}
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-visual"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hero-blob"
          ></motion.div>

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative", width: "100%", maxWidth: "500px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Digital Marketing Team"
              className="hero-img"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="floating-badge"
            >
              <div style={{ fontSize: "2rem" }}>📈</div>
              <div>
                <div
                  style={{
                    fontWeight: "800",
                    color: "var(--secondary)",
                    fontSize: "1.2rem",
                    lineHeight: "1",
                  }}
                >
                  300%
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#64748b",
                    fontWeight: "500",
                  }}
                >
                  ROI Increase
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
