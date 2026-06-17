import { motion } from "motion/react";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import aasha from "../../assets/teams/aasha.jpeg";
import shamini from "../../assets/teams/shamini.png";
import jeevaraj from "../../assets/teams/jeevaraj.png";
import harsh from "../../assets/teams/harsh.png";
import panushanth from "../../assets/teams/panushant.jpeg";
import jeevan from "../../assets/teams/jeevan.png";

const team = [
  {
    name: "Mary Aasha Jesuthasan",
    role: "Front-End Developer & QA",
    initials: "MAJ",
    location: "Sri Lanka",
    email: "m.aasha@icloud.com",
    linkedin: "https://www.linkedin.com/in/mary-aasha-jesuthasan-2a83b7273",
    image: aasha,
  },
  {
    name: "Kalakaran Shamini",
    role: "Front-End Developer",
    initials: "KS",
    location: "Sri Lanka",
    email: "sham9800612@gmail.com",
    linkedin: "https://www.linkedin.com/in/shamini-kalakaran-708a2b316",
    image: shamini,
  },
  {
    name: "Kanapatheeswaran Jeevaraaj",
    role: "UI/UX Designer",
    initials: "KJJ",
    location: "Sri Lanka",
    email: "Jeevaraajkrush@gmail.com",
    linkedin: "https://www.linkedin.com/in/jeevaraaj-kanapatheeswaran-48b6a835a",
    image: jeevaraj,
  },
  {
    name: "Rasalingam Kugatharshan",
    role: "Back-End Developer",
    initials: "RK",
    location: "Sri Lanka",
    email: "rasalingamkugatharshan15@gmail.com",
    linkedin: "https://www.linkedin.com/in/rasalingam-kugatharshan-4687152b4",
    image: harsh,
  },
  {
    name: "Paskaran Panushanth",
    role: "UI/UX & Back-End Developer",
    initials: "PP",
    location: "Sri Lanka",
    email: "passhanth28@gmail.com",
    linkedin: "https://www.linkedin.com/in/paskaran-panushanth-698a99293",
    image: panushanth,
  },
  {
    name: "Kulasingam Jeevanesan",
    role: "Full Stack Developer",
    initials: "KJ",
    location: "Sri Lanka",
    email: "jeevanesankulam2000@gmail.com",
    linkedin: "https://www.linkedin.com/in/jeevanesan-kulasingam-37559b35a",
    phone: "+94757233942",
    image: jeevan,
  },
];

const iconStyle: React.CSSProperties = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  background: "var(--input)",
  border: "1px solid var(--border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: "all 0.15s ease",
  backdropFilter: "blur(10px)",
};

export function TeamSection() {
  return (
    <section
      id="team"
      style={{
        background: "transparent",
        // ✅ Responsive padding
        padding: "clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        width: "500px", height: "500px",
        background: "rgba(77,255,235,0.06)",
        filter: "blur(140px)",
        top: "-200px", right: "-100px",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "1380px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 70px)",
          }}
        >
          <div style={{
            color: "var(--primary)",
            letterSpacing: "0.35em",
            fontSize: "12px",
            marginBottom: "18px",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            OUR TEAM
          </div>

          <h2 style={{
            fontSize: "clamp(28px, 5vw, 58px)",
            fontWeight: 800,
            color: "var(--foreground)",
            fontFamily: "'Outfit', sans-serif",
            marginBottom: "18px",
            lineHeight: 1.1,
          }}>
            6 Minds. Infinite Builds.
          </h2>

          <p style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "var(--muted-foreground)",
            lineHeight: 1.7,
            fontSize: "clamp(14px, 2vw, 16px)",
            fontFamily: "'Instrument Sans', sans-serif",
          }}>
            A passionate team crafting futuristic digital experiences
            with creativity, innovation, and technology.
          </p>
        </motion.div>

        {/* ✅ Grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(16px, 3vw, 28px)",
          }}
        >
          {team.map((member, i) => (
            <motion.div
              key={member.initials}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -10 }}
              style={{
                background: "var(--glass)",
                border: "1px solid var(--border)",
                borderRadius: "30px",
                overflow: "hidden",
                position: "relative",
                backdropFilter: "blur(12px)",
                transition: "all 0.25s ease",
              }}
            >
              {/* Hover Border Glow */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "30px",
                padding: "1px",
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(217, 70, 239, 0.15), transparent)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                pointerEvents: "none",
                opacity: 0.45,
              }} />

              {/* IMAGE */}
              <div style={{
                width: "100%",
                height: "280px",
                position: "relative",
                overflow: "hidden",
                borderBottom: "1px solid var(--border)",
              }}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    top: 0, left: 0,
                    width: "35%", height: "100%",
                    background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
                    transform: "skewX(-20deg)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* CONTENT */}
              <div style={{
                // ✅ Responsive content padding
                padding: "clamp(18px, 3vw, 28px)",
                textAlign: "center",
              }}>
                <h3 style={{
                  // ✅ Responsive name font
                  fontSize: "clamp(16px, 2.5vw, 24px)",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  marginBottom: "10px",
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: 1.3,
                }}>
                  {member.name}
                </h3>

                <div style={{
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.8vw, 15px)",
                  marginBottom: "22px",
                  fontFamily: "'Instrument Sans', sans-serif",
                }}>
                  {member.role}
                </div>

                <div style={{
                  width: "100%", height: "1px",
                  background: "var(--border)",
                  marginBottom: "20px",
                }} />

                {/* Location */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "7px",
                  color: "var(--muted-foreground)",
                  fontSize: "14px",
                  marginBottom: "24px",
                  fontFamily: "'Instrument Sans', sans-serif",
                }}>
                  <MapPin size={15} />
                  {member.location}
                </div>

                {/* Icons */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}>
                  <motion.a
                    whileHover={{ scale: 1.12, y: -3 }}
                    transition={{ duration: 0.15 }}
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={iconStyle}
                  >
                    <Linkedin size={18} color="var(--foreground)" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.12, y: -3 }}
                    transition={{ duration: 0.15 }}
                    href={`mailto:${member.email}`}
                    style={iconStyle}
                  >
                    <Mail size={18} color="var(--foreground)" />
                  </motion.a>

                  {member.phone && (
                    <motion.a
                      whileHover={{ scale: 1.12, y: -3 }}
                      transition={{ duration: 0.15 }}
                      href={`tel:${member.phone}`}
                      style={iconStyle}
                    >
                      <Phone size={18} color="var(--foreground)" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Responsive Grid CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}