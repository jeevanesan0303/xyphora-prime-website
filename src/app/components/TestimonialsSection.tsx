/*import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Xyphora Prime transformed our vision into a stunning digital product. The attention to detail, the clean architecture, and the relentless focus on user experience exceeded every expectation we had.",
    name: "Sarah K.",
    company: "TechFlow Startup",
    initials: "SK",
    color: "#4DFFEB",
  },
  {
    quote: "Working with the team felt like having a co-founder who cares deeply about your product. They delivered ahead of schedule and the code quality was exceptional — our engineers were impressed.",
    name: "Marcus T.",
    company: "Nexus Labs",
    initials: "MT",
    color: "#B06FFF",
  },
  {
    quote: "The UI they designed is the best thing that happened to our conversion rate. Within weeks of launch, signups tripled. Xyphora Prime doesn't just build websites — they build growth machines.",
    name: "Layla R.",
    company: "GrowthIQ",
    initials: "LR",
    color: "#FF6B35",
  },
  {
    quote: "Their AI chatbot integration cut our support workload by 60%. The solution was custom-built for our use case with remarkable precision. This team genuinely understands the future of tech.",
    name: "Chen W.",
    company: "CloudOps Pro",
    initials: "CW",
    color: "#4DFFEB",
  },
  {
    quote: "From Sri Lanka to global quality — the mobile app they built for us has 4.9 stars and 10K downloads. The Flutter expertise and the design sensibility are both top-tier.",
    name: "Aiko M.",
    company: "Bloom Mobile",
    initials: "AM",
    color: "#B06FFF",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visible = 3;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(testimonials.length - visible, c + 1));

  return (
    <section
      id="testimonials"
      style={{
        background: "#07051A",
        padding: "120px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "20%",
          width: "500px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(77,255,235,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1360px", margin: "0 auto" }}>
        {/* Header }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "#4DFFEB",
              letterSpacing: "0.3em",
              marginBottom: "16px",
            }}
          >
            WHAT CLIENTS SAY
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 52px)",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Real Results. Real Stories.
          </h2>
        </motion.div>

        {/* Cards }
        <div style={{ overflow: "hidden" }}>
          <motion.div
            animate={{ x: `-${current * (100 / visible)}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${testimonials.length}, calc(${100 / visible}% - ${(visible - 1) * 20 / visible}px))`,
              gap: "20px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {/* Decorative quote }
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    left: "20px",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "120px",
                    background: "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.3,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  "
                </div>

                {/* Stars }
                <div style={{ marginBottom: "16px", marginTop: "40px" }}>
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} style={{ color: "#FFD700", fontSize: "14px" }}>★</span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: "15px",
                    fontStyle: "italic",
                    lineHeight: 1.75,
                    color: "rgba(240,238,255,0.8)",
                    marginBottom: "28px",
                  }}
                >
                  "{t.quote}"
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                        color: "white",
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: t.color,
                      }}
                    >
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls }
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "40px" }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: current === 0 ? "not-allowed" : "pointer",
              opacity: current === 0 ? 0.4 : 1,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              if (current > 0) {
                e.currentTarget.style.borderColor = "#4DFFEB";
                e.currentTarget.style.background = "rgba(77,255,235,0.08)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <ChevronLeft size={18} color="white" />
          </button>
          <button
            onClick={next}
            disabled={current >= testimonials.length - visible}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: current >= testimonials.length - visible ? "not-allowed" : "pointer",
              opacity: current >= testimonials.length - visible ? 0.4 : 1,
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              if (current < testimonials.length - visible) {
                e.currentTarget.style.borderColor = "#4DFFEB";
                e.currentTarget.style.background = "rgba(77,255,235,0.08)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            <ChevronRight size={18} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
} */
