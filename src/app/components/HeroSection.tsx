import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Icosahedron } from "./Icosahedron";

const floatingChips = [
  { icon: "🌐", label: "Web Dev", top: "15%", left: "-10%", delay: 0 },
  { icon: "📱", label: "Mobile Apps", top: "12%", right: "-8%", delay: 0.3 },
  { icon: "🤖", label: "AI Solutions", bottom: "20%", left: "-12%", delay: 0.6 },
  { icon: "☁️", label: "Cloud & IoT", bottom: "18%", right: "-10%", delay: 0.9 },
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.5,
      speed: Math.random() * 0.5 + 0.15,
      opacity: Math.random() * 0.4 + 0.08,
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,255,235,${p.opacity})`;
        ctx.fill();

        p.y -= p.speed;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

function FloatingChip({
  chip,
}: {
  chip: typeof floatingChips[0];
}) {
  const style: React.CSSProperties = {
    position: "absolute",
    ...(chip.top ? { top: chip.top } : {}),
    ...(chip.bottom ? { bottom: chip.bottom } : {}),
    ...(chip.left ? { left: chip.left } : {}),
    ...(chip.right ? { right: chip.right } : {}),
  };

  return (
    <motion.div
      style={style}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: chip.delay,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.06,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 18px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(77,255,235,0.25)",
          borderRadius: "12px",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
          fontSize: "13px",
          color: "white",
          whiteSpace: "nowrap",
          transition: "all 0.3s ease",
        }}
      >
        <span style={{ color: "#4DFFEB" }}>{chip.icon}</span>
        {chip.label}
      </div>
    </motion.div>
  );
}

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#03020A",
        paddingTop: "72px",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(176,111,255,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-5%",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(77,255,235,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <ParticleField />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            maxWidth: "620px",
            minWidth: "320px",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: "28px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                border: "1px solid rgba(77,255,235,0.3)",
                background: "rgba(77,255,235,0.05)",
                borderRadius: "100px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#4DFFEB",
                letterSpacing: "0.28em",
                animation: "pulseBorder 2s ease-in-out infinite",
              }}
            >
              ✦ WE BUILD DIGITAL FUTURES ✦
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                lineHeight: 0.92,
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(78px, 10vw, 130px)",
                  background:
                    "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                XYPHORA
              </div>

              <div
                style={{
                  fontSize: "clamp(62px, 8vw, 105px)",
                  background:
                    "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PRIME
              </div>

              <div
                style={{
                  fontSize: "clamp(38px, 4vw, 65px)",
                  color: "white",
                }}
              >
                CRAFTS
                <span style={{ color: "#4DFFEB" }}>.</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "rgba(240,238,255,0.58)",
              maxWidth: "520px",
              marginBottom: "36px",
            }}
          >
            Web · Mobile · AI · Cloud · IoT · Design
            <br />
            Premium digital solutions crafted by a team of specialists.
            <br />
            <span style={{ color: "rgba(240,238,255,0.35)" }}>
              Sri Lanka · Global Reach
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <button
              onClick={() => onNavigate("Contact")}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "#03020A",
                background:
                  "linear-gradient(135deg, #4DFFEB 0%, #B06FFF 100%)",
                border: "none",
                padding: "0 32px",
                height: "54px",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: "0 0 40px rgba(77,255,235,0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 0 60px rgba(77,255,235,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(77,255,235,0.35)";
              }}
            >
              Start a Project →
            </button>

            <button
              onClick={() => onNavigate("Services")}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "white",
                background: "transparent",
                border: "1px solid rgba(77,255,235,0.4)",
                padding: "0 32px",
                height: "54px",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(77,255,235,0.08)";
                e.currentTarget.style.borderColor =
                  "rgba(77,255,235,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor =
                  "rgba(77,255,235,0.4)";
              }}
            >
              See Our Services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {[
              "Projects Delivered",
              "6 Specialists",
              "Worldwide Reach",
            ].map((stat) => (
              <div
                key={stat}
                style={{
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "rgba(240,238,255,0.58)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {stat}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            flex: "0 0 auto",
            position: "relative",
            width: "420px",
            height: "420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-40px",
              background:
                "radial-gradient(ellipse, rgba(77,255,235,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />

          <Icosahedron />

          {floatingChips.map((chip, i) => (
            <FloatingChip key={i} chip={chip} />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.3em",
            color: "rgba(240,238,255,0.28)",
          }}
        >
          SCROLL
        </span>

        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(180deg, rgba(77,255,235,0.6) 0%, transparent 100%)",
          }}
        />
      </div>

      <style>{`
        @keyframes pulseBorder {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(77,255,235,0);
          }
          50% {
            box-shadow: 0 0 14px 2px rgba(77,255,235,0.25);
          }
        }

        @media (max-width: 1100px) {
          #home > div:nth-child(4) {
            flex-direction: column;
            justify-content: center;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          section#home {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
}