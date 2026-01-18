import { useEffect } from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="section"
      style={{ paddingTop: "120px", minHeight: "100vh", background: "#f8fafc" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 className="heading-lg" style={{ marginBottom: "30px" }}>
            Privacy Policy
          </h1>
          <p
            style={{
              color: "#64748b",
              fontSize: "0.9rem",
              marginBottom: "40px",
            }}
          >
            Last Updated: January 1, 2026
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              fontSize: "1.05rem",
              color: "var(--secondary)",
              lineHeight: "1.7",
            }}
          >
            <section>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "var(--primary)",
                }}
              >
                1. Introduction
              </h2>
              <p>
                Welcome to Grow Digital. We are committed to protecting your
                privacy and ensuring your personal information is handled in a
                safe and responsible manner.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "var(--primary)",
                }}
              >
                2. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us when you fill
                out our contact forms, request a consultation, or communicate
                with us. This may include:
              </p>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "20px",
                  marginTop: "10px",
                  color: "#64748b",
                }}
              >
                <li>Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Business Details</li>
              </ul>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "var(--primary)",
                }}
              >
                3. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "20px",
                  marginTop: "10px",
                  color: "#64748b",
                }}
              >
                <li>Provide, operate, and maintain our website.</li>
                <li>Improve, personalize, and expand our website.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "var(--primary)",
                }}
              >
                4. Security
              </h2>
              <p>
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "var(--primary)",
                }}
              >
                5. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <p style={{ marginTop: "10px" }}>
                <strong>Email:</strong> privacy@growdigital.com
              </p>
              <p>
                <strong>Phone:</strong> +91 9325629256
              </p>
              <p>
                <strong>Address:</strong> 101, Business Bay, Navi Mumbai, India
                410210
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
