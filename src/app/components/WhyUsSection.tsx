import { motion } from "motion/react";
import { Zap, Paintbrush, Target, Rocket, Handshake, DollarSign } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Modern & Scalable",
    desc: "Future-ready tech stack. We build with frameworks and architectures designed to scale for years ahead.",
    color: "#0ea5e9",
  },
  {
    icon: Paintbrush,
    title: "Creative UI/UX Design",
    desc: "Pixel-perfect interfaces with meaningful animations and intuitive user experiences.",
    color: "#7c3aed",
  },
  {
    icon: Target,
    title: "Business-Focused Dev",
    desc: "Every feature is engineered to solve real business problems and drive measurable growth.",
    color: "#ea580c",
  },
  {
    icon: Rocket,
    title: "Future-Ready Tech",
    desc: "AI integrations, cloud-native systems, and cutting-edge technologies that keep you ahead.",
    color: "#0ea5e9",
  },
  {
    icon: Handshake,
    title: "Reliable Support",
    desc: "Long-term partnership with maintenance, monitoring, updates, and dedicated support.",
    color: "#7c3aed",
  },
  {
    icon: DollarSign,
    title: "Startup-Friendly",
    desc: "Premium-quality development at startup-accessible pricing without compromising quality.",
    color: "#ea580c",
  },
];

const tickerItems = [
  "9+ SERVICES",
  "100% DEDICATION",
  "24/7 SUPPORT",
  "∞ SCALABILITY",
  "6 EXPERTS",
  "GLOBAL REACH",
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      style={{
        background: "transparent",
        // ✅ Responsive padding
        padding: "clamp(60px, 10vw, 120px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "10%", right: "10%",
        width: "500px", height: "500px",
        background: "radial-gradient(ellipse, rgba(124,58,237,0.04) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%", left: "-5%",
        width: "500px", height: "500px",
        background: "radial-gradient(ellipse, rgba(168,85,247,0.05) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{
        // ✅ Responsive padding
        padding: "0 clamp(16px, 5vw, 40px)",
        maxWidth: "1360px",
        margin: "0 auto clamp(40px, 6vw, 70px)",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "0.3em",
            marginBottom: "16px",
          }}>
            OUR ADVANTAGE
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            // ✅ Responsive font
            fontSize: "clamp(28px, 4vw, 56px)",
            color: "var(--foreground)",
            lineHeight: 1.1,
            marginBottom: "18px",
          }}>
            Why{" "}
            <span style={{
              background: "linear-gradient(135deg, #7C3AED 0%, #B06FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Xyphora Prime?
            </span>
          </h2>

          <p style={{
            maxWidth: "680px",
            margin: "0 auto",
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 16px)",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}>
            We combine strategy, design, and engineering to craft
            premium digital experiences that help brands grow faster.
          </p>
        </motion.div>
      </div>

      {/* Animated Ticker */}
      <div style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(124,58,237,0.02)",
        // ✅ Responsive padding
        padding: "clamp(12px, 2vw, 18px) 0",
        marginBottom: "clamp(40px, 6vw, 80px)",
        position: "relative",
      }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            display: "flex",
            gap: "52px",
            whiteSpace: "nowrap",
            width: "max-content",
          }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                // ✅ Responsive ticker font
                fontSize: "clamp(20px, 4vw, 30px)",
                color: i % 2 === 0 ? "var(--foreground)" : "var(--primary)",
                letterSpacing: "0.06em",
              }}
            >
              {item}
              <span style={{
                color: "var(--border)",
                marginLeft: "52px",
              }}>
                ·
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ✅ Features Grid — responsive */}
      <div
        className="why-us-grid"
        style={{
          padding: "0 clamp(16px, 5vw, 40px)",
          maxWidth: "1360px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(14px, 2vw, 22px)",
        }}
      >
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              style={{
                background: "var(--glass)",
                border: "1px solid var(--border)",
                borderRadius: "22px",
                // ✅ Responsive card padding
                padding: "clamp(20px, 3vw, 30px)",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(14px)",
                transition: "border-color 0.25s ease, transform 0.25s ease",
              }}
            >
              {/* Glow Effect */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at top right, ${feature.color}12 0%, transparent 60%)`,
                pointerEvents: "none",
              }} />

              {/* Icon */}
              <div style={{
                width: "56px", height: "56px",
                background: `${feature.color}15`,
                border: `1px solid ${feature.color}30`,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                position: "relative",
                zIndex: 2,
              }}>
                <Icon size={26} color={feature.color} />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "var(--foreground)",
                marginBottom: "12px",
                position: "relative",
                zIndex: 2,
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: "clamp(13px, 1.5vw, 14px)",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
                position: "relative",
                zIndex: 2,
              }}>
                {feature.desc}
              </p>

              {/* Ghost Icon */}
              <div style={{
                position: "absolute",
                bottom: "-14px", right: "-14px",
                opacity: 0.03,
                transform: "rotate(-12deg)",
                pointerEvents: "none",
              }}>
                <Icon size={90} color={feature.color} />
              </div>

              {/* Hover Border */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "22px",
                  border: `1px solid ${feature.color}20`,
                  opacity: 0,
                  transition: "opacity 0.25s ease",
                  pointerEvents: "none",
                }}
                className="feature-hover-border"
              />
            </motion.div>
          );
        })}
      </div>

      {/* ✅ Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .why-us-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}