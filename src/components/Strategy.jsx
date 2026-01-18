import { motion } from "framer-motion";
import CountUp from "react-countup";

const Strategy = () => {
  return (
    <section
      id="strategy"
      className="section"
      style={{
        background: "var(--secondary)",
        color: "var(--white)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Gradient */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "100%",
          height: "200%",
          background: "radial-gradient(circle, #004a7c 0%, transparent 60%)",
          opacity: 0.2,
          zIndex: 0,
        }}
      ></motion.div>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-xl"
          style={{
            color: "white",
            marginBottom: "30px",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
          Your Growth <br /> <span style={{ color: "var(--primary)" }}>&</span>{" "}
          Our Strategy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            maxWidth: "700px",
            fontSize: "1.2rem",
            marginBottom: "60px",
            lineHeight: "1.7",
          }}
        >
          We don't just execute tasks; we analyze your business to craft proven
          online marketing strategies that deliver real, measurable results.
        </motion.p>

        <div
          style={{
            display: "flex",
            gap: "50px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {[
            { end: 10, suffix: "+", label: "Services Offered" },
            { end: 100, suffix: "%", label: "Custom Strategies" },
            { end: 24, suffix: "/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              style={{ textAlign: "center" }}
            >
              <span
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "800",
                  color: "var(--accent)",
                  display: "block",
                  minWidth: "150px",
                }}
              >
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </span>
              <span style={{ fontSize: "1rem", opacity: 0.8 }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
