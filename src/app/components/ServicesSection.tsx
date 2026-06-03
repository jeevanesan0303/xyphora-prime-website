import { motion } from "motion/react";
import {
  Globe,
  Smartphone,
  Code2,
  Bot,
  Palette,
  Cloud,
  TrendingUp,
  Cpu,
  Users,
} from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    desc: "Blazing-fast, scalable web applications built with modern frameworks. From landing pages to enterprise platforms.",
    icon: Globe,
    color: "#4DFFEB",
    size: "large",
    badge: "★ CORE SERVICE",
  },
  {
    id: "mobile",
    title: "Mobile App Dev",
    desc: "Cross-platform iOS & Android apps with Flutter and React Native.",
    icon: Smartphone,
    color: "#B06FFF",
    size: "medium",
  },
  {
    id: "software",
    title: "POS System Developement",
    desc: "PSO systems designed to streamline operations and optimize business performance.",
    icon: Code2,
    color: "#4DFFEB",
    size: "medium",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "User-centered design that converts. Wireframes, prototypes & brand identity.",
    icon: Palette,
    color: "#B06FFF",
    size: "wide",
  },
  {
    id: "cloud",
    title: "Cloud Services",
    desc: "AWS, GCP & Azure infrastructure built for scale and reliability.",
    icon: Cloud,
    color: "#4DFFEB",
    size: "small",
  },
  {
    id: "ai",
    title: "AI & Chatbots",
    desc: "Custom AI solutions, chatbots, and ML-powered systems.",
    icon: Bot,
    color: "#FF6B35",
    size: "small",
  },
  {
    id: "marketing",
    title: "Digital Marketing & SEO",
    desc: "Growth-focused campaigns that drive real business results.",
    icon: TrendingUp,
    color: "#FF6B35",
    size: "small",
  },
  {
    id: "iot",
    title: "IoT Systems",
    desc: "Connected devices, real-time monitoring & smart ecosystems.",
    icon: Cpu,
    color: "#B06FFF",
    size: "small",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    desc: "Strategic technology guidance, architecture reviews, and digital transformation planning.",
    icon: Users,
    color: "#FFFFFF",
    size: "full",
  },
];

function getGlow(color: string) {
  if (color === "#4DFFEB") return "77,255,235";
  if (color === "#B06FFF") return "176,111,255";
  if (color === "#FF6B35") return "255,107,53";
  return "255,255,255";
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const glow = getGlow(service.color);

  const baseCardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition:
      "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
    backdropFilter: "blur(18px)",
  };

  if (service.size === "large") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        whileHover={{
          y: -8,
        }}
        style={{
          ...baseCardStyle,
          gridColumn: "span 2",
          gridRow: "span 2",
          padding: "36px",
          background:
            "linear-gradient(135deg, rgba(77,255,235,0.08), rgba(176,111,255,0.05))",
          border: "1px solid rgba(77,255,235,0.22)",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${glow},0.18) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        {service.badge && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              padding: "6px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(77,255,235,0.3)",
              background: "rgba(77,255,235,0.06)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "#4DFFEB",
              letterSpacing: "0.1em",
            }}
          >
            {service.badge}
          </div>
        )}

        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "22px",
            background: `rgba(${glow},0.1)`,
            border: `1px solid rgba(${glow},0.18)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <Icon size={42} color={service.color} />
        </div>

        <h3
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "30px",
            color: "white",
            marginBottom: "14px",
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "16px",
            lineHeight: 1.8,
            color: "rgba(240,238,255,0.58)",
            maxWidth: "90%",
            marginBottom: "26px",
          }}
        >
          {service.desc}
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: service.color,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
          }}
        >

        </div>

        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "-10px",
            opacity: 0.05,
          }}
        >
          <Icon size={180} color={service.color} />
        </div>
      </motion.div>
    );
  }

  if (service.size === "full") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        whileHover={{
          y: -4,
        }}
        style={{
          ...baseCardStyle,
          gridColumn: "1 / -1",
          padding: "28px 34px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={26} color={service.color} />
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "white",
              marginBottom: "6px",
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(240,238,255,0.55)",
            }}
          >
            {service.desc}
          </p>
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "24px",
          }}
        >
          →
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{
        y: -6,
      }}
      style={{
        ...baseCardStyle,
        gridColumn: service.size === "wide" ? "span 2" : "span 1",
        padding: "28px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at top right, rgba(${glow},0.08), transparent 45%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "14px",
          background: `rgba(${glow},0.1)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
        }}
      >
        <Icon size={24} color={service.color} />
      </div>

      <h3
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          color: "white",
          marginBottom: "10px",
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: "14px",
          lineHeight: 1.7,
          color: "rgba(240,238,255,0.55)",
        }}
      >
        {service.desc}
      </p>

      <div
        style={{
          position: "absolute",
          bottom: "-10px",
          right: "-10px",
          opacity: 0.05,
        }}
      >
        <Icon size={90} color={service.color} />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#07051A",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(77,255,235,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginBottom: "70px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#4DFFEB",
              letterSpacing: "0.35em",
              marginBottom: "18px",
            }}
          >
            WHAT WE BUILD
          </div>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 58px)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            9 Services.
            <span
              style={{
                background:
                  "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              One Team.
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}