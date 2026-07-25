import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Lightbulb, Star, TrendingUp, Headphones } from "lucide-react";

const terminalLines = [
  { text: "$ whoami", delay: 0, type: "command" },
  { text: "", delay: 0.3, type: "blank" },
  { text: "const agency = {", delay: 0.5, type: "code" },
  { text: '  name:     "Xyphora Prime",', delay: 0.7, type: "string-line" },
  { text: '  founded:  "2026",', delay: 0.9, type: "string-line" },
  { text: '  location: "Sri Lanka 🇱🇰",', delay: 1.1, type: "string-line" },
  { text: '  reach:    "Global 🌍",', delay: 1.3, type: "string-line" },
  { text: "  team:     5,", delay: 1.5, type: "number-line" },
  { text: "  stack: [", delay: 1.7, type: "code" },
  { text: '    "React", "Next.js", "Flutter",', delay: 1.9, type: "string-line" },
  { text: '    "Node.js", "Python", "AWS",', delay: 2.1, type: "string-line" },
  { text: '    "Figma", "AI/ML", "IoT"', delay: 2.3, type: "string-line" },
  { text: "  ],", delay: 2.5, type: "code" },
  { text: '  mission: "Build. Innovate. Elevate."', delay: 2.7, type: "string-line" },
  { text: "};", delay: 2.9, type: "code" },
  { text: "", delay: 3.1, type: "blank" },
  { text: "▶ Ready to build your future_", delay: 3.3, type: "ready" },
];

function TerminalLine({ line, show }: { line: typeof terminalLines[0]; show: boolean }) {
  if (!show) return null;

  const renderContent = () => {
    if (line.type === "command") return <span style={{ color: "var(--primary)" }}>{line.text}</span>;
    if (line.type === "ready") return <span style={{ color: "var(--muted-foreground)" }}>{line.text}</span>;

    if (line.type === "string-line") {
      const parts = line.text.split(/(["'][^"']*["'])/g);
      return (
        <>
          {parts.map((part, i) =>
            /^["']/.test(part) ? (
              <span key={i} style={{ color: "var(--primary)" }}>{part}</span>
            ) : /^\s+\w+:/.test(part) ? (
              <span key={i}>
                <span style={{ color: "var(--border)" }}>{part.match(/^\s+/)?.[0]}</span>
                <span style={{ color: "var(--foreground)" }}>{part.replace(/^\s+/, "")}</span>
              </span>
            ) : (
              <span key={i} style={{ color: "var(--muted-foreground)" }}>{part}</span>
            )
          )}
        </>
      );
    }

    if (line.type === "number-line") {
      return (
        <span>
          <span style={{ color: "var(--muted-foreground)" }}>{"  team:     "}</span>
          <span style={{ color: "#F59E0B" }}>5</span>
          <span style={{ color: "var(--muted-foreground)" }}>,</span>
        </span>
      );
    }

    if (line.type === "blank") return <span>&nbsp;</span>;
    return <span style={{ color: "var(--muted-foreground)" }}>{line.text}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.12 }}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(10px, 2.5vw, 13px)",
        lineHeight: 1.7,
        minHeight: "22px",
      }}
    >
      {renderContent()}
    </motion.div>
  );
}

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const inViewRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (inViewRef.current) observer.observe(inViewRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    terminalLines.forEach((line, idx) => {
      const t = setTimeout(() => setVisibleLines(idx + 1), line.delay * 1000);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <div ref={inViewRef} style={{ width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -6 }}
        style={{
          width: "100%",
          maxWidth: "560px",
          background: "var(--glass)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Top Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "16px 22px",
          borderBottom: "1px solid var(--border)",
          background: "rgba(255,255,255,0.02)",
        }}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((color) => (
            <div key={color} style={{ width: "12px", height: "12px", borderRadius: "50%", background: color }} />
          ))}
          <span style={{
            marginLeft: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "var(--muted-foreground)",
            letterSpacing: "0.05em",
          }}>
            terminal — xyphora
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "clamp(16px, 4vw, 28px)", minHeight: "320px" }}>
          {terminalLines.map((line, i) => (
            <TerminalLine key={i} line={line} show={i < visibleLines} />
          ))}
          {visibleLines >= terminalLines.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              style={{
                display: "inline-block",
                width: "8px", height: "14px",
                background: "var(--primary)",
                marginLeft: "2px",
                verticalAlign: "text-bottom",
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "14px",
        marginTop: "26px",
        maxWidth: "560px",
        width: "100%",
      }}>
        {["9+ Services", "100% Dedication", "24/7 Support", "∞ Scalability"].map((stat) => (
          <motion.div
            key={stat}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "14px 18px",
              background: "var(--glass)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(10px, 2vw, 12px)",
              color: "var(--primary)",
              textAlign: "center",
              backdropFilter: "blur(16px)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {stat}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const valueCards = [
  { icon: Lightbulb, title: "Innovation", sub: "Cutting-edge solutions" },
  { icon: Star, title: "Quality", sub: "Zero compromise on craft" },
  { icon: TrendingUp, title: "Scalability", sub: "Built to grow with you" },
  { icon: Headphones, title: "Support", sub: "Always here, always on" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "transparent",
        padding: "clamp(30px, 5vw, 60px) clamp(16px, 5vw, 40px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute",
        top: "15%", right: "-10%",
        width: "700px", height: "600px",
        background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        display: "grid",
        // ✅ Single column on mobile, two columns on desktop
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
        gap: "clamp(40px, 6vw, 80px)",
        alignItems: "start",
      }}>
        {/* Left — Terminal */}
        <Terminal />

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "0.3em",
            marginBottom: "16px",
          }}>
            ABOUT US
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 48px)",
            color: "var(--foreground)",
            lineHeight: 1.15,
            marginBottom: "28px",
          }}>
            Who We{" "}
            <span style={{
              background: "linear-gradient(135deg,#7C3AED,#D946EF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Are
            </span>
          </h2>

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
            marginBottom: "20px",
          }}>
            Xyphora Prime is a tight-knit team of 5 specialists from Sri Lanka delivering world-class digital experiences.
          </p>

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
            marginBottom: "42px",
          }}>
            We combine technical mastery with creative precision to build products that stand out in a crowded digital landscape.
          </p>

          {/* Value Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "14px",
          }}>
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    background: "var(--glass)",
                    border: "1px solid var(--border)",
                    borderRadius: "18px",
                    backdropFilter: "blur(16px)",
                    boxShadow: "var(--shadow-sm)",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: "42px", height: "42px",
                    background: "linear-gradient(135deg,#7C3AED,#D946EF)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 8px 20px rgba(168,85,247,0.25)",
                  }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "var(--foreground)",
                    }}>
                      {card.title}
                    </div>
                    <div style={{
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "12px",
                      color: "var(--muted-foreground)",
                    }}>
                      {card.sub}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}