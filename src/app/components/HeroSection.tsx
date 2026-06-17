import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { TrendingUp, Users, Rocket, Star, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero_bg.jpeg";

const stats = [
  {
    value: "",
    label: "Projects Delivered",
    icon: TrendingUp,
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: Users,
  },
  {
    value: "",
    label: "Business Growth Achieved",
    icon: Rocket,
  },
  {
    value: "Dedicated",
    label: "Support & Maintenance",
    icon: Star,
  },
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

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.3 + 0.05,
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(124, 58, 237, 0.04)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += 100) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 100) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity * 0.5})`;
        ctx.fill();
        p.y -= p.speed;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none",
      zIndex: 1,
    }} />
  );
}

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `linear-gradient(to bottom, rgba(251, 250, 255, 0.1) 0%, rgba(251, 250, 255, 0) 45%, rgba(251, 250, 255, 0.85) 100%), linear-gradient(to right, rgba(251, 250, 255, 0.96) 0%, rgba(251, 250, 255, 0.8) 35%, rgba(251, 250, 255, 0) 65%), url("${heroBg}")`,
        backgroundSize: "cover",
        backgroundPosition: "78% center",
        paddingTop: "100px",
        overflow: "hidden",
        overflowX: "hidden",
      }}
    >
      <ParticleField />

      {/* Main Content Area */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(40px, 8vw, 80px) clamp(16px, 5vw, 40px)",
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{
          maxWidth: "620px",
          width: "100%",
        }}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 800,
              color: "var(--foreground)",
              lineHeight: 1.05,
              marginBottom: "24px",
              letterSpacing: "-0.025em",
              textShadow: "0 2px 10px rgba(124, 58, 237, 0.08)",
            }}>
              Empowering <br />
              Digital Innovation
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
              marginBottom: "38px",
              textShadow: "none",
            }}
          >
            We build future-ready websites and digital solutions that help businesses grow, perform, and lead in the digital world.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => onNavigate("Contact")}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#ffffff",
                background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                border: "none",
                padding: "0 30px",
                height: "54px",
                borderRadius: "27px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 8px 30px rgba(139, 92, 246, 0.35)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(139, 92, 246, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(139, 92, 246, 0.35)";
              }}
            >
              Talk to an Expert <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigate("Services")}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--foreground)",
                background: "var(--glass)",
                border: "1px solid var(--border)",
                padding: "0 30px",
                height: "54px",
                borderRadius: "27px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124, 58, 237, 0.08)";
                e.currentTarget.style.borderColor = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--glass)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Glassmorphic Stats Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 40px)",
          paddingBottom: "36px",
          zIndex: 10,
        }}
      >
        <div
          className="hero-stats-panel"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "var(--glass)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--border)",
            borderRadius: "24px",
            padding: "26px clamp(16px, 3vw, 36px)",
            alignItems: "center",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="hero-stat-col"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  borderRight: i < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                {/* Icon Container */}
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(124, 58, 237, 0.08)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "16px",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(124, 58, 237, 0.06)",
                }}>
                  <Icon size={20} color="var(--primary)" />
                </div>

                {/* Metrics Stack */}
                <div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    lineHeight: 1.15,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "'Instrument Sans', sans-serif",
                    fontSize: "12px",
                    color: "var(--muted-foreground)",
                    marginTop: "3px",
                    lineHeight: 1.2,
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Glow Flare */}
        <div style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          maxWidth: "600px",
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.4) 50%, transparent)",
          boxShadow: "0 0 20px 4px rgba(124, 58, 237, 0.2)",
          pointerEvents: "none",
          zIndex: -1,
        }} />
      </motion.div>

      {/* Responsive Styles */}
      <style>{`
        .hero-section {
          background-position: 78% center !important;
        }
        @media (max-width: 1024px) {
          .hero-section {
            background-position: 82% center !important;
          }
          .hero-stats-panel {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .hero-stat-col {
            border-right: none !important;
          }
        }
        @media (max-width: 600px) {
          .hero-section {
            background-position: 85% center !important;
          }
          .hero-stats-panel {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 20px !important;
          }
          .hero-stat-col {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}