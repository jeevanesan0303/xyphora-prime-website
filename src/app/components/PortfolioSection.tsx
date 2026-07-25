import { motion } from "motion/react";
import { Construction } from "lucide-react";
import { useState } from "react";
import ironcoreCover from "../../assets/ironcore_builders.jpg";



const projects = [
  {
    id: "ironcore",
    title: "Iron Core Builders",
    company: "Iron Core Builders Pvt Ltd",
    category: "Web Dev",
    tags: ["React", "Vite", "Modern UI", "Responsive Design"],
    image: ironcoreCover,
    description: "A premium corporate web platform designed and built for Iron Core Builders Pvt Ltd. Engineered for speed, responsive access across desktop, tablet, and mobile, and seamless brand alignment.",
    url: "https://www.ironcorebuilders.com/",
    client: "Iron Core Builders Pvt Ltd",
    timeline: "Completed (July 2026)",
    details: "This is the first completed project under the Xyphora Prime banner. It features custom modern styling, fluid micro-interactions with motion, and a highly polished user experience. The website showcases their construction, road development, and heavy-machinery solution portfolios, presenting a powerful, professional digital identity.",
  }
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      style={{
        background: "transparent",
        padding: "clamp(30px, 5vw, 60px) clamp(16px, 4vw, 24px) clamp(30px, 5vw, 60px)",
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
            PORTFOLIO
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

        {/* Project Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
          gap: "32px",
          maxWidth: "1100px",
          margin: "0 auto 30px",
        }}>
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                textDecoration: "none",
                background: "var(--glass)",
                backdropFilter: "blur(22px)",
                border: "1px solid var(--border)",
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(124, 58, 237, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              {/* Cover Image Container */}
              <div style={{
                position: "relative",
                height: "240px",
                overflow: "hidden",
                borderBottom: "1px solid var(--border)",
                background: "rgba(0,0,0,0.2)",
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1.0)";
                  }}
                />
                
                <div style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(124, 58, 237, 0.9)",
                  color: "#fff",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "11px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "var(--foreground)",
                  marginBottom: "12px",
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "var(--muted-foreground)",
                  marginBottom: "20px",
                  flexGrow: 1,
                }}>
                  {project.description}
                </p>

                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "auto",
                }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        background: "rgba(124, 58, 237, 0.06)",
                        border: "1px solid rgba(124, 58, 237, 0.15)",
                        borderRadius: "8px",
                        color: "var(--primary)",
                        fontSize: "11px",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {/* Placeholder Card for future projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: "var(--glass)",
              backdropFilter: "blur(22px)",
              border: "1px dashed rgba(124, 58, 237, 0.3)",
              borderRadius: "24px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minHeight: "380px",
            }}
          >
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "20px",
              background: "rgba(124, 58, 237, 0.05)",
              border: "1px dashed rgba(124, 58, 237, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}>
              <Construction size={28} color="var(--primary)" />
            </div>

            <h4 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "var(--foreground)",
              marginBottom: "10px",
            }}>
              Your Project Next?
            </h4>

            <p style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "14px",
              color: "var(--muted-foreground)",
              maxWidth: "260px",
              lineHeight: "1.6",
              marginBottom: "0",
            }}>
              We are actively developing premium products. Get in touch to build yours today.
            </p>
          </motion.div>
        </div>




      </div>
    </section>
  );
}