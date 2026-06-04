import { motion } from "motion/react";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
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
    linkedin:
      "https://www.linkedin.com/in/mary-aasha-jesuthasan-2a83b7273",
    image: aasha,
  },

  {
    name: "Kalakaran Shamini",
    role: "Front-End Developer",
    initials: "KS",
    location: "Sri Lanka",
    email: "sham9800612@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/shamini-kalakaran-708a2b316",
    image: shamini,
  },

  {
    name: "Kanapatheeswaran Jeevaraaj",
    role: "UI/UX Designer",
    initials: "KJJ",
    location: "Sri Lanka",
    email: "Jeevaraajkrush@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/jeevaraaj-kanapatheeswaran-48b6a835a",
    image: jeevaraj,
  },

  {
    name: "Rasalingam Kugatharshan",
    role: "Back-End Developer",
    initials: "RK",
    location: "Sri Lanka",
    email: "rasalingamkugatharshan15@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/rasalingam-kugatharshan-4687152b4",
    image: harsh,
  },

  {
    name: "Paskaran Panushanth",
    role: "UI/UX & Back-End Developer",
    initials: "PP",
    location: "Sri Lanka",
    email: "passhanth28@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/paskaran-panushanth-698a99293",
    image: panushanth,
  },

  {
    name: "Kulasingam Jeevanesan",
    role: "Full Stack Developer",
    initials: "KJ",
    location: "Sri Lanka",
    email: "jeevanesankulam2000@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/jeevanesan-kulasingam-37559b35a",
    phone: "+94757233942",
    image: jeevan,
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      style={{
        background:
          "radial-gradient(circle at top, #09111f 0%, #020308 60%)",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(77,255,235,0.06)",
          filter: "blur(140px)",
          top: "-200px",
          right: "-100px",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              color: "#4DFFEB",
              letterSpacing: "0.35em",
              fontSize: "12px",
              marginBottom: "18px",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            OUR TEAM
          </div>

          <h2
            style={{
              fontSize: "clamp(38px,5vw,58px)",
              fontWeight: 800,
              color: "white",
              fontFamily: "'Outfit', sans-serif",
              marginBottom: "18px",
              lineHeight: 1.1,
            }}
          >
            6 Minds. Infinite Builds.
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              fontSize: "16px",
              fontFamily: "'Instrument Sans', sans-serif",
            }}
          >
            A passionate team crafting futuristic digital
            experiences with creativity, innovation, and technology.
          </p>
        </motion.div>

        {/* 3 x 3 GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          {team.map((member, i) => (
            <motion.div
              key={member.initials}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
              }}
              whileHover={{
                y: -10,
              }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "30px",
                overflow: "hidden",
                position: "relative",
                backdropFilter: "blur(12px)",
                transition: "all 0.25s ease",
              }}
            >
              {/* Hover Border Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "30px",
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, rgba(77,255,235,0.35), rgba(176,111,255,0.2), transparent)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  pointerEvents: "none",
                  opacity: 0.45,
                }}
              />

              {/* IMAGE */}
              <div
                style={{
                  width: "100%",
                  height: "420px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.08) 55%, transparent)",
                    pointerEvents: "none",
                  }}
                />

                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "35%",
                    height: "100%",
                    background:
                      "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
                    transform: "skewX(-20deg)",
                    pointerEvents: "none",
                  }}
                />

                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: "18px",
                    padding: "8px 14px",
                    background: "rgba(0,0,0,0.45)",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "999px",
                    color: "#4DFFEB",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    fontFamily:
                      "'JetBrains Mono', monospace",
                  }}
                >
                  FOUNDER
                </div>
              </div>

              {/* CONTENT */}
              <div
                style={{
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "10px",
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </h3>

                <div
                  style={{
                    color: "#4DFFEB",
                    fontWeight: 600,
                    fontSize: "15px",
                    marginBottom: "22px",
                    fontFamily:
                      "'Instrument Sans', sans-serif",
                  }}
                >
                  {member.role}
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background:
                      "rgba(255,255,255,0.08)",
                    marginBottom: "20px",
                  }}
                />

                {/* Location */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "7px",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "14px",
                    marginBottom: "24px",
                    fontFamily:
                      "'Instrument Sans', sans-serif",
                  }}
                >
                  <MapPin size={15} />
                  {member.location}
                </div>

                {/* Icons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "14px",
                  }}
                >
                  <motion.a
                    whileHover={{
                      scale: 1.12,
                      y: -3,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={iconStyle}
                  >
                    <Linkedin
                      size={18}
                      color="white"
                    />
                  </motion.a>

                  <motion.a
                    whileHover={{
                      scale: 1.12,
                      y: -3,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    href={`mailto:${member.email}`}
                    style={iconStyle}
                  >
                    <Mail size={18} color="white" />
                  </motion.a>

                  {member.phone && (
                    <motion.a
                      whileHover={{
                        scale: 1.12,
                        y: -3,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      href={`tel:${member.phone}`}
                      style={iconStyle}
                    >
                      <Phone
                        size={18}
                        color="white"
                      />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESPONSIVE */}
        <style>{`
          @media (max-width: 1100px) {
            #team .team-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            #team .team-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

const iconStyle: React.CSSProperties = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  transition: "all 0.15s ease",
  backdropFilter: "blur(10px)",
};