import { useEffect } from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            Terms & Conditions
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
                1. Agreement to Terms
              </h2>
              <p>
                These Terms of Service constitute a legally binding agreement
                made between you, whether personally or on behalf of an entity
                ("you") and Grow Digital ("we," "us" or "our"), concerning your
                access to and use of our website.
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
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the "Content") and the trademarks, service
                marks, and logos contained therein (the "Marks") are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws.
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
                3. User Representations
              </h2>
              <p>
                By using the Site, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary.
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
                4. Limitations of Liability
              </h2>
              <p>
                In no event will we or our directors, employees, or agents be
                liable to you or any third party for any direct, indirect,
                consequential, exemplary, incidental, special, or punitive
                damages, including lost profit, lost revenue, loss of data, or
                other damages arising from your use of the site.
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
                5. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and defined following the laws
                of India. Grow Digital and yourself irrevocably consent that the
                courts of Navi Mumbai, India shall have exclusive jurisdiction
                to resolve any dispute which may arise in connection with these
                terms.
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
                6. Contact Us
              </h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary
                property.
              </p>
              <p style={{ marginTop: "10px" }}>
                <strong>Email:</strong> legal@growdigital.com
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

export default TermsOfService;
