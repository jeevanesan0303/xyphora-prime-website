import { motion } from "motion/react";
import { Construction } from "lucide-react";
import { useState } from "react";

const tags = ["Web Dev", "Mobile", "AI", "Design", "IoT", "Cloud"];

export function PortfolioSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="portfolio"
      style={{
        background: "#03020A",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Shapes */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          width: "200px",
          height: "200px",
          border: "1px solid rgba(77,255,235,0.08)",
          borderRadius: "4px",
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        animate={{ rotate: [45, 90, 45] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "6%",
          width: "160px",
          height: "160px",
          border: "1px solid rgba(176,111,255,0.08)",
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "15%",
          width: "120px",
          height: "120px",
          border: "1px solid rgba(77,255,235,0.06)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <svg
        style={{
          position: "absolute",
          top: "10%",
          right: "20%",
          opacity: 0.06,
          pointerEvents: "none",
        }}
        width="100"
        height="115"
        viewBox="0 0 100 115"
      >
        <polygon
          points="50,5 95,30 95,85 50,110 5,85 5,30"
          fill="none"
          stroke="#4DFFEB"
          strokeWidth="1.5"
        />
      </svg>

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(77,255,235,0.04), transparent 60%)",
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
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
            OUR WORK
          </div>

          <h2
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 4vw, 54px)",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "18px",
            }}
          >
            Built to Impress.
          </h2>

          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(240,238,255,0.5)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
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
            background: "rgba(255,255,255,0.035)",
            backdropFilter: "blur(22px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "64px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 80px rgba(0,0,0,0.45)",
          }}
        >
          {/* Animated Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg, rgba(77,255,235,0.06), transparent, rgba(176,111,255,0.06))",
              pointerEvents: "none",
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "86px",
              height: "86px",
              background: "rgba(77,255,235,0.08)",
              border: "1px solid rgba(77,255,235,0.2)",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 30px",
              boxShadow: "0 0 30px rgba(77,255,235,0.08)",
            }}
          >
            <Construction size={38} color="#4DFFEB" />
          </motion.div>

          <h3
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 38px)",
              color: "white",
              marginBottom: "18px",
            }}
          >
            Portfolio in Progress
          </h3>

          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "17px",
              lineHeight: 1.8,
              color: "rgba(240,238,255,0.55)",
              maxWidth: "540px",
              margin: "0 auto 40px",
            }}
          >
            Our team is currently crafting premium digital products
            and experiences. The full showcase launches soon.
          </p>

          {/* Email Signup */}
          {!submitted ? (
            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "42px",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  padding: "14px 18px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "white",
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "14px",
                  outline: "none",
                  width: "260px",
                  transition: "all 0.25s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#4DFFEB";
                  e.target.style.boxShadow =
                    "0 0 20px rgba(77,255,235,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor =
                    "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button
                onClick={handleNotify}
                style={{
                  padding: "14px 24px",
                  background:
                    "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#03020A",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: "0 0 28px rgba(77,255,235,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 42px rgba(77,255,235,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 28px rgba(77,255,235,0.25)";
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
                background: "rgba(77,255,235,0.08)",
                border: "1px solid rgba(77,255,235,0.25)",
                borderRadius: "12px",
                display: "inline-block",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#4DFFEB",
              }}
            >
              ✓ You're on the launch list!
            </motion.div>
          )}

          {/* Divider */}
          <div
            style={{
              width: "65%",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              margin: "0 auto 28px",
            }}
          />

          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(240,238,255,0.35)",
              marginBottom: "24px",
            }}
          >
            Meanwhile — explore our expertise:
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {tags.map((tag) => (
              <motion.div
                key={tag}
                whileHover={{
                  y: -2,
                }}
                style={{
                  padding: "8px 18px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "13px",
                  color: "rgba(240,238,255,0.65)",
                  cursor: "default",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(77,255,235,0.4)";
                  e.currentTarget.style.color = "#4DFFEB";
                  e.currentTarget.style.background =
                    "rgba(77,255,235,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color =
                    "rgba(240,238,255,0.65)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.04)";
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