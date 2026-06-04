import { motion } from "motion/react";
import {
  MessageCircle, ClipboardList, Palette,
  Code2, TestTube2, Rocket,
} from "lucide-react";

const steps = [
  {
    num: "01", icon: MessageCircle, label: "Step 01", title: "Consultation",
    desc: "Deep dive into your goals, challenges, and requirements. We listen first, build second.",
    color: "#4DFFEB",
  },
  {
    num: "02", icon: ClipboardList, label: "Step 02", title: "Planning",
    desc: "Detailed roadmap, timeline, and technology stack selection tailored to your project.",
    color: "#B06FFF",
  },
  {
    num: "03", icon: Palette, label: "Step 03", title: "UI/UX Design",
    desc: "Wireframes, interactive prototypes, and brand identity that converts visitors into customers.",
    color: "#4DFFEB",
  },
  {
    num: "04", icon: Code2, label: "Step 04", title: "Development",
    desc: "Clean, scalable, and thoroughly tested code. No shortcuts, no technical debt.",
    color: "#FF6B35",
  },
  {
    num: "05", icon: TestTube2, label: "Step 05", title: "Testing & QA",
    desc: "Performance, security, and cross-device testing ensures a flawless launch every time.",
    color: "#B06FFF",
  },
  {
    num: "06", icon: Rocket, label: "Step 06", title: "Launch & Support",
    desc: "Smooth deployment, post-launch monitoring, and ongoing maintenance as a trusted partner.",
    color: "#4DFFEB",
  },
];

function getGlow(color: string) {
  if (color === "#4DFFEB") return "77,255,235";
  if (color === "#B06FFF") return "176,111,255";
  return "255,107,53";
}

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: "#07051A",
        // ✅ Responsive padding
        padding: "clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        bottom: "-10%", left: "50%",
        transform: "translateX(-50%)",
        width: "900px", height: "500px",
        background: "radial-gradient(ellipse, rgba(176,111,255,0.08) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "10%", left: "-10%",
        width: "500px", height: "400px",
        background: "radial-gradient(circle, rgba(77,255,235,0.05) 0%, transparent 70%)",
        filter: "blur(70px)",
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 7vw, 80px)",
          }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#4DFFEB",
            letterSpacing: "0.3em",
            marginBottom: "16px",
          }}>
            HOW WE WORK
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 56px)",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}>
            Our Working{" "}
            <span style={{
              background: "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Process
            </span>
          </h2>

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "rgba(240,238,255,0.5)",
            maxWidth: "620px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            From idea to launch, every step is carefully crafted to
            deliver premium quality digital experiences.
          </p>
        </motion.div>

        {/* ✅ Steps Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(16px, 3vw, 24px)",
        }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, borderColor: "rgba(77,255,235,0.18)" }}
                style={{
                  background: "rgba(255,255,255,0.035)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  // ✅ Responsive padding
                  padding: "clamp(24px, 4vw, 34px)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, transform 0.25s ease",
                  minHeight: "clamp(220px, 30vw, 280px)",
                }}
              >
                {/* Hover Glow */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at top right, rgba(${getGlow(step.color)},0.08), transparent 60%)`,
                  pointerEvents: "none",
                }} />

                {/* Ghost Number */}
                <div style={{
                  position: "absolute",
                  top: "18px", right: "22px",
                  fontFamily: "'JetBrains Mono', monospace",
                  // ✅ Responsive ghost number
                  fontSize: "clamp(48px, 8vw, 76px)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {step.num}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "52px", height: "52px",
                    background: `rgba(${getGlow(step.color)},0.12)`,
                    border: `1px solid rgba(${getGlow(step.color)},0.18)`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: `0 0 24px rgba(${getGlow(step.color)},0.08)`,
                  }}
                >
                  <Icon size={24} color={step.color} />
                </motion.div>

                {/* Step Label */}
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                  fontSize: "11px",
                  color: step.color,
                  letterSpacing: "0.14em",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                }}>
                  {step.label}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 22px)",
                  color: "white",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  lineHeight: 1.75,
                  color: "rgba(240,238,255,0.52)",
                }}>
                  {step.desc}
                </p>

                {/* Bottom Accent Line */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0,
                  width: "100%", height: "2px",
                  background: `linear-gradient(90deg, ${step.color}, transparent)`,
                  opacity: 0.45,
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}