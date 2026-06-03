import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo.png";


const serviceLinks = [
  "Web Development",
  "Mobile App Dev",
  "POS System Dev",
  "AI & Chatbots",
  "UI/UX Design",
  "Cloud Services",
  "Digital Marketing & SEO",
  "IT Consulting",
  "IoT Systems",
];

const companyLinks = ["About", "Team", "Process", "Contact"];

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <footer
      style={{
        background: isDark
          ? "linear-gradient(180deg, #05030D 0%, #020106 100%)"
          : "linear-gradient(180deg, #ffffff 0%, #f6f3ff 100%)",
        position: "relative",
        overflow: "hidden",
        borderTop: isDark
          ? "1px solid rgba(176,111,255,0.12)"
          : "1px solid rgba(176,111,255,0.18)",
      }}
    >
      {/* Glow Background */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(176,111,255,0.18) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(77,255,235,0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Top gradient line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #4DFFEB, #B06FFF, transparent)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "90px 40px 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "60px",
            marginBottom: "64px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <img
                src={logo}
                alt="Xyphora Prime Logo"
                style={{
                  width: "32px",
                  height: "32px",
                  objectFit: "contain",
                }}
              />

              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: isDark ? "#ffffff" : "#111111",
                }}
              >
                Xyphora Prime
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.8,
                color: isDark
                  ? "rgba(240,238,255,0.52)"
                  : "rgba(17,17,17,0.65)",
                marginBottom: "28px",
                maxWidth: "300px",
              }}
            >
              Premium digital solutions from a team of specialists.
              Building powerful products with innovation, creativity,
              and scalable technology.
            </p>
            {/* Socials */}

            <div style={{ display: "flex", gap: "12px" }}>
              {[
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/xyphora-prime-859b54412/",
                },
                {
                  icon: Instagram,
                  url: "https://www.instagram.com/xyphoraprime?igsh=bGE4NGlkOGdkeHBo",
                },
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/profile.php?id=61590756680525",
                },
                {
                  icon: Mail,
                  url: "mailto:info@xyphoraprime.com",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "14px",
                        background: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(255,255,255,0.7)",
                        border: isDark
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid rgba(0,0,0,0.08)",
                        backdropFilter: "blur(12px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: isDark
                          ? "0 0 0 rgba(0,0,0,0)"
                          : "0 8px 24px rgba(0,0,0,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-3px)";
                        e.currentTarget.style.borderColor =
                          "rgba(176,111,255,0.45)";
                        e.currentTarget.style.boxShadow =
                          "0 0 24px rgba(176,111,255,0.28)";
                        e.currentTarget.style.background =
                          "rgba(176,111,255,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0)";
                        e.currentTarget.style.borderColor = isDark
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.08)";
                        e.currentTarget.style.boxShadow = isDark
                          ? "0 0 0 rgba(0,0,0,0)"
                          : "0 8px 24px rgba(0,0,0,0.06)";
                        e.currentTarget.style.background = isDark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(255,255,255,0.7)";
                      }}
                    >
                      <Icon
                        size={17}
                        color={isDark ? "#ffffff" : "#111111"}
                      />
                    </button>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#B06FFF",
                letterSpacing: "0.25em",
                marginBottom: "22px",
              }}
            >
              SERVICES
            </h4>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate("Services")}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "14px",
                      color: isDark
                        ? "rgba(240,238,255,0.48)"
                        : "rgba(17,17,17,0.6)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#B06FFF";
                      e.currentTarget.style.transform =
                        "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark
                        ? "rgba(240,238,255,0.48)"
                        : "rgba(17,17,17,0.6)";
                      e.currentTarget.style.transform =
                        "translateX(0)";
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#4DFFEB",
                letterSpacing: "0.25em",
                marginBottom: "22px",
              }}
            >
              COMPANY
            </h4>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {companyLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      fontFamily: "'Instrument Sans', sans-serif",
                      fontSize: "14px",
                      color: isDark
                        ? "rgba(240,238,255,0.48)"
                        : "rgba(17,17,17,0.6)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#4DFFEB";
                      e.currentTarget.style.transform =
                        "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isDark
                        ? "rgba(240,238,255,0.48)"
                        : "rgba(17,17,17,0.6)";
                      e.currentTarget.style.transform =
                        "translateX(0)";
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#4DFFEB",
                letterSpacing: "0.25em",
                marginBottom: "22px",
              }}
            >
              GET IN TOUCH
            </h4>

            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: isDark
                  ? "rgba(240,238,255,0.58)"
                  : "rgba(17,17,17,0.65)",
                marginBottom: "14px",
              }}
            >
              info@xyphoraprime.com
            </p>

            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.7,
                color: isDark
                  ? "rgba(240,238,255,0.42)"
                  : "rgba(17,17,17,0.55)",
                marginBottom: "20px",
              }}
            >
              📍 Sri Lanka <br />
              🌍 Working Worldwide
            </p>


          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: isDark
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(0,0,0,0.08)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              color: isDark
                ? "rgba(240,238,255,0.3)"
                : "rgba(17,17,17,0.45)",
            }}
          >
            © 2026 Xyphora Prime · Built in Sri Lanka 🇱🇰
          </span>

          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms"].map((item) => (
              <button
                key={item}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontFamily: "'Instrument Sans', sans-serif",
                  fontSize: "13px",
                  color: isDark
                    ? "rgba(240,238,255,0.38)"
                    : "rgba(17,17,17,0.5)",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#B06FFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark
                    ? "rgba(240,238,255,0.38)"
                    : "rgba(17,17,17,0.5)";
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}