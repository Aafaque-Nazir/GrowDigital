import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";
import { Phone, Smartphone } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const RevealingText = ({ text }) => {
  const [display, setDisplay] = useState(
    text
      .split("")
      .map((c) => (c === "+" || c === " " ? c : "0"))
      .join(""),
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === " " || char === "+") return char;
              return Math.floor(Math.random() * 10);
            })
            .join(""),
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 4;
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return <span ref={ref}>{display}</span>;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Social Media Management",
    message: "",
  });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Config for FormSubmit
    const submissionData = {
      ...formData,
      _subject: `New Lead: ${formData.name}`,
      _template: "table", // Nice layout
      _captcha: "false", // Optional: disable captcha for cleaner flow if supported
    };

    const promise = fetch("https://formsubmit.co/ajax/grooodigital@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(submissionData),
    }).then((response) => {
      if (!response.ok) throw new Error("Failed");
      return response.json();
    });

    toast.promise(promise, {
      loading: "Sending request...",
      success: "Thank you! We received your message.",
      error: "Something went wrong. Please try again.",
    });

    try {
      await promise;
      // Reset form on success
      setFormData({
        name: "",
        phone: "",
        service: "Social Media Management",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const inputStyle = (fieldName) => ({
    width: "100%",
    padding: "18px",
    borderRadius: "14px",
    border:
      focused === fieldName ? "2px solid var(--primary)" : "2px solid #e2e8f0",
    fontSize: "1rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    background: focused === fieldName ? "white" : "#f8fafc",
    boxShadow:
      focused === fieldName ? "0 10px 25px rgba(0,110,179,0.1)" : "none",
  });

  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #fbfbfb)",
        overflow: "hidden",
      }}
    >
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span
            style={{
              color: "var(--primary)",
              fontWeight: "800",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Get In Touch
          </span>
          <h2
            className="heading-lg"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Ready to <span className="text-gradient">Scale?</span>
          </h2>
          <p
            style={{
              color: "var(--text-light)",
              marginBottom: "50px",
              fontSize: "1.2rem",
              lineHeight: "1.8",
            }}
          >
            Don't settle for average. Let's build a strategy that dominates your
            market. Contact us for a free audit.
          </p>

          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              color: "white",
              padding: "40px",
              borderRadius: "30px",
              boxShadow: "0 25px 50px -10px rgba(15, 23, 42, 0.4)",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Background decoration */}
            <div
              style={{
                position: "absolute",
                top: "-20%",
                right: "-20%",
                width: "200px",
                height: "200px",
                background: "var(--primary)",
                borderRadius: "50%",
                filter: "blur(80px)",
                opacity: 0.3,
              }}
            ></div>

            <p
              style={{
                marginBottom: "20px",
                opacity: 0.7,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "0.9rem",
              }}
            >
              Direct Line 24/7
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <a
                href="tel:+919325629256"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontSize: "1.6rem",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                <span
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone size={24} />
                </span>
                <RevealingText text="+91 9325629256" />
              </a>
              <a
                href="tel:+919823617680"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  fontSize: "1.6rem",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                <span
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Smartphone size={24} />
                </span>
                <RevealingText text="+91 9823617680" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            padding: "50px",
            borderRadius: "32px",
            boxShadow: "0 40px 80px -20px rgba(0, 110, 179, 0.15)",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "700",
                fontSize: "0.95rem",
                color: "var(--secondary)",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ex. John Doe"
              style={inputStyle("name")}
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              required
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "700",
                fontSize: "0.95rem",
                color: "var(--secondary)",
              }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Ex. +91 98765 00000"
              style={inputStyle("phone")}
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
              required
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "700",
                fontSize: "0.95rem",
                color: "var(--secondary)",
              }}
            >
              Service Required
            </label>
            <div style={{ position: "relative" }}>
              <select
                name="service"
                style={inputStyle("service")}
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused(null)}
              >
                <option>Social Media Management</option>
                <option>SEO Services</option>
                <option>Facebook & Google Ads</option>
                <option>Website Development</option>
                <option>Content Creation</option>
                <option>Business Strategy</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px -10px rgba(0, 110, 179, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              padding: "20px",
              fontSize: "1.1rem",
              marginTop: "10px",
            }}
          >
            Get Free Consultation
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
