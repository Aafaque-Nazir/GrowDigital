import { motion } from "framer-motion";
import {
  Smartphone,
  Search,
  TrendingUp,
  Palette,
  PenTool,
  Monitor,
  MapPin,
  Star,
  Lightbulb,
  Briefcase,
} from "lucide-react";

const servicesData = [
  {
    title: "Social Media Management",
    icon: Smartphone,
    desc: "Engage your audience across all platforms to build loyalty.",
  },
  {
    title: "SEO Optimization",
    icon: Search,
    desc: "Rank #1 on Google and drive consistent organic traffic.",
  },
  {
    title: "Paid Advertising",
    icon: TrendingUp,
    desc: "High-ROI Facebook & Google Ads campaigns.",
  },
  {
    title: "Graphic Design",
    icon: Palette,
    desc: "Premium visuals that instantly elevate your brand value.",
  },
  {
    title: "Content Writing",
    icon: PenTool,
    desc: "Persuasive copy that turns visitors into paying customers.",
  },
  {
    title: "Web Development",
    icon: Monitor,
    desc: "Fast, secure, and mobile-first websites that convert.",
  },
  {
    title: "Local SEO (GMB)",
    icon: MapPin,
    desc: "Dominate your local area and get more walk-in customers.",
  },
  {
    title: "Influencer Marketing",
    icon: Star,
    desc: "Partner with creators to explode your brand awareness.",
  },
  {
    title: "Brand Strategy",
    icon: Lightbulb,
    desc: "A complete roadmap to build a memorable market presence.",
  },
  {
    title: "Business Consulting",
    icon: Briefcase,
    desc: "Actionable ideas and systems to scale your operations.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="section services-section"
      style={{ perspective: "1000px" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <span
            style={{
              color: "var(--primary)",
              fontWeight: "800",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              letterSpacing: "2px",
              marginBottom: "15px",
              display: "block",
            }}
          >
            Our Expertise
          </span>
          <h2 className="heading-lg">
            High-Impact <span className="text-gradient">Digital Services</span>
          </h2>
          <p
            style={{
              color: "var(--text-light)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.2rem",
            }}
          >
            We provide everything you need to scale. From traffic to conversion,
            we've got you covered.
          </p>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div
          className="mobile-swipe-hint"
          style={{
            display: "none",
            textAlign: "right",
            marginBottom: "10px",
            color: "#94a3b8",
            fontSize: "0.9rem",
          }}
        >
          Swipe &rarr;
        </div>
        <style>{`
          @media (max-width: 768px) {
            .mobile-swipe-hint { display: block !important; }
          }
        `}</style>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(0, 110, 179, 0.2)",
                borderColor: "rgba(0, 110, 179, 0.4)",
              }}
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.6)",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="icon-box"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  color: "var(--primary)",
                }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <service.icon size={28} strokeWidth={1.5} />
              </motion.div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                  color: "var(--secondary)",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "1rem",
                  flexGrow: 1,
                  lineHeight: "1.6",
                }}
              >
                {service.desc}
              </p>

              {/* Depth Accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--primary), var(--accent))",
                  opacity: 0,
                  transition: "0.3s",
                }}
                className="card-accent"
              ></div>
              <style>{`.service-card:hover .card-accent { opacity: 1; }`}</style>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
