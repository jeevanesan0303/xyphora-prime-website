import { motion } from "motion/react";
import {
  Globe, Smartphone, Code2, Bot, Palette,
  Cloud, TrendingUp, Cpu, Users,
} from "lucide-react";

const services = [
  {
    id: "web", title: "Web Development",
    desc: "Blazing-fast, scalable web applications built with modern frameworks. From landing pages to enterprise platforms.",
    icon: Globe, color: "#8b5cf6",
  },
  {
    id: "mobile", title: "Mobile App Dev",
    desc: "Cross-platform iOS & Android apps with Flutter and React Native.",
    icon: Smartphone, color: "#a855f7",
  },
  {
    id: "software", title: "POS System Development",
    desc: "POS systems designed to streamline operations and optimize business performance.",
    icon: Code2, color: "#c084fc",
  },
  {
    id: "uiux", title: "UI/UX Design",
    desc: "User-centered design that converts. Wireframes, prototypes & brand identity.",
    icon: Palette, color: "#8b5cf6",
  },
  {
    id: "cloud", title: "Cloud Services",
    desc: "AWS, GCP & Azure infrastructure built for scale and reliability.",
    icon: Cloud, color: "#a855f7",
  },
  {
    id: "ai", title: "AI & Chatbots",
    desc: "Custom AI solutions, chatbots, and ML-powered systems.",
    icon: Bot, color: "#c084fc",
  },
  {
    id: "marketing", title: "Digital Marketing & SEO",
    desc: "Growth-focused campaigns that drive real business results.",
    icon: TrendingUp, color: "#8b5cf6",
  },
  {
    id: "iot", title: "IoT Systems",
    desc: "Connected devices, real-time monitoring & smart ecosystems.",
    icon: Cpu, color: "#a855f7",
  },
  {
    id: "consulting", title: "IT Consulting",
    desc: "Strategic technology guidance, architecture reviews, and digital transformation planning.",
    icon: Users, color: "#c084fc",
  },
];

function getGlow(color: string) {
  if (color === "#8b5cf6") return "139,92,246";
  if (color === "#a855f7") return "168,85,247";
  return "192,132,252";
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const Icon = service.icon;
  const glow = getGlow(service.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -8, borderColor: "var(--primary)", boxShadow: "0 10px 30px rgba(124, 58, 237, 0.15)" }}
      style={{
        background: "var(--glass)",
        border: "1px solid var(--border)",
        borderRadius: "22px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        padding: "clamp(24px, 4vw, 32px)",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        minHeight: "260px",
      }}
    >
      <div style={{
        position: "absolute",
        top: "-40px", right: "-40px",
        width: "140px", height: "140px",
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(${glow},0.1) 0%, transparent 70%)`,
        filter: "blur(20px)",
        pointerEvents: "none",
      }} />

      <div style={{
        width: "56px", height: "56px",
        borderRadius: "16px",
        background: `rgba(${glow},0.08)`,
        border: `1px solid rgba(${glow},0.15)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "6px",
      }}>
        <Icon size={26} color={service.color} />
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(18px, 2.2vw, 22px)",
          color: "var(--foreground)",
          marginBottom: "12px",
          lineHeight: 1.25,
        }}>
          {service.title}
        </h3>

        <p style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: "clamp(13px, 1.6vw, 14.5px)",
          lineHeight: 1.75,
          color: "var(--muted-foreground)",
        }}>
          {service.desc}
        </p>
      </div>

      <div style={{
        position: "absolute",
        bottom: "-15px", right: "-15px",
        opacity: 0.02,
        pointerEvents: "none",
        transform: "rotate(-10deg)",
      }}>
        <Icon size={110} color={service.color} />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "transparent",
        padding: "clamp(30px, 5vw, 60px) clamp(16px, 4vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        bottom: "-100px", left: "-100px",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginBottom: "clamp(40px, 6vw, 70px)",
            textAlign: "center",
          }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "0.35em",
            marginBottom: "18px",
          }}>
            WHAT WE BUILD
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 58px)",
            color: "var(--foreground)",
            lineHeight: 1.1,
          }}>
            9 Services.
            <span style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #B06FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              {" "}One Team.
            </span>
          </h2>
        </motion.div>

        {/* ✅ Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(16px, 2.5vw, 24px)",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* ✅ Responsive grid CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 680px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}