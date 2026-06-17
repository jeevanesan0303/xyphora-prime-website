import { motion } from "motion/react";
import { Construction } from "lucide-react";
import { useState } from "react";

const tags = ["Web Dev", "Mobile", "AI", "Design", "IoT", "Cloud"];

export function PortfolioSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id="portfolio"
      style={{
        background: "transparent",
        // ✅ Responsive padding
        padding: "clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Shapes */}
      <div style={{
        position: "absolute",
        top: "15%", left: "8%",
        width: "200px", height: "200px",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        transform: "rotate(45deg)",
        pointerEvents: "none",
      }} />

      <motion.div
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "20%", right: "6%",
          width: "160px", height: "160px",
          border: "1px solid var(--border)",
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      />

      <div style={{
        position: "absolute",
        top: "50%", right: "15%",
        width: "120px", height: "120px",
        border: "1px solid var(--border)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <svg
        style={{
          position: "absolute",
          top: "10%", right: "20%",
          opacity: 0.12,
          pointerEvents: "none",
        }}
        width="100" height="115" viewBox="0 0 100 115"
      >
        <polygon
          points="50,5 95,30 95,85 50,110 5,85 5,30"
          fill="none" stroke="var(--primary)" strokeWidth="1.5"
        />
      </svg>

      {/* Glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.04), transparent 60%)",
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
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "0.3em",
            marginBottom: "16px",
          }}>
            OUR WORK
          </div>

          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 54px)",
            color: "var(--foreground)",
            lineHeight: 1.1,
            marginBottom: "18px",
          }}>
            Built to Impress.
          </h2>

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "var(--muted-foreground)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Innovative digital experiences crafted with precision,
            creativity, and modern technology.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            background: "var(--glass)",
            backdropFilter: "blur(22px)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            // ✅ Responsive padding
            padding: "clamp(32px, 6vw, 64px) clamp(16px, 4vw, 32px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Animated Glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "28px",
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.04), transparent, rgba(168, 85, 247, 0.04))",
              pointerEvents: "none",
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "86px", height: "86px",
              background: "rgba(124, 58, 237, 0.08)",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 30px",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.08)",
            }}
          >
            <Construction size={38} color="var(--primary)" />
          </motion.div>

          <h3 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 4vw, 38px)",
            color: "var(--foreground)",
            marginBottom: "18px",
          }}>
            Portfolio in Progress
          </h3>

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
            maxWidth: "540px",
            margin: "0 auto 40px",
          }}>
            Our team is currently crafting premium digital products
            and experiences. The full showcase launches soon.
          </p>

          {/* ✅ Email Signup — stack on mobile */}
          {!submitted ? (
            <div style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "42px",
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  padding: "14px 18px",
                  background: "var(--glass)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  // ✅ Responsive width
                  width: "min(260px, 100%)",
                  transition: "all 0.25s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--primary)";
                  e.target.style.boxShadow = "0 0 20px rgba(124, 58, 237, 0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--border)";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button
                onClick={handleNotify}
                style={{
                  padding: "14px 24px",
                  background: "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#03020A",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: "0 0 28px rgba(124, 58, 237, 0.25)",
                  // ✅ Full width on very small screens
                  width: "min(200px, 100%)",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 0 42px rgba(124, 58, 237, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(124, 58, 237, 0.25)";
                }}
              >
                ✉ Get Notified
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                marginBottom: "42px",
                padding: "14px 24px",
                background: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                borderRadius: "12px",
                display: "inline-block",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "var(--primary)",
              }}
            >
              ✓ You're on the launch list!
            </motion.div>
          )}

          {/* Divider */}
          <div style={{
            width: "65%", height: "1px",
            background: "var(--border)",
            margin: "0 auto 28px",
          }} />

          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "14px",
            color: "var(--muted-foreground)",
            marginBottom: "24px",
          }}>
            Meanwhile — explore our expertise:
          </p>

          {/* Tags */}
          <div style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            {tags.map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ y: -2 }}
                style={{
                  padding: "8px 18px",
                  background: "var(--glass)",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "13px",
                  color: "var(--muted-foreground)",
                  cursor: "default",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted-foreground)";
                  e.currentTarget.style.background = "var(--glass)";
                }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}