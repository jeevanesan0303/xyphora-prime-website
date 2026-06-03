
import { useEffect, useState } from "react";
import { motion } from "motion/react";


const navLinks = [
  "Home",
  "Services",
  "About",
  "Team",
  "Process",
  "Contact",
];

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({
  activeSection: activeSectionProp,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState(activeSectionProp);

  useEffect(() => {
    setActiveSection(activeSectionProp);
  }, [activeSectionProp]);

  /* Scroll Background */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* Active Section */

  useEffect(() => {
    const sections = [
      "Home",
      "Services",
      "About",
      "Team",
      "Process",
      "Contact",
    ];

    const handleScrollSpy = () => {
      const scrollPosition =
        window.scrollY + 150;

      sections.forEach((section) => {
        const element =
          document.getElementById(
            section.toLowerCase()
          );

        if (element) {
          const offsetTop =
            element.offsetTop;

          const offsetHeight =
            element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
            offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScrollSpy
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScrollSpy
      );
  }, []);

  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "78px",
        zIndex: 1000,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "0 40px",

        backdropFilter:
          "blur(24px) saturate(180%)",

        background: scrolled
          ? "var(--glass)"
          : "transparent",

        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",

        transition: "all 0.35s ease",
      }}
    >
      {/* Logo */}

      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
        }}
        onClick={() => onNavigate("Home")}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Xyphora Prime Logo"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "contain",
            }}
          />
        </div>

        <span
          style={{
            fontFamily:
              "'Outfit', sans-serif",

            fontWeight: 700,

            fontSize: "17px",

            color:
              "var(--foreground)",

            letterSpacing: "0.02em",
          }}
        >
          Xyphora Prime
        </span>
      </motion.div>

      {/* Nav Links */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "34px",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() =>
              onNavigate(link)
            }
            style={{
              background: "none",
              border: "none",

              cursor: "pointer",

              fontFamily:
                "'Outfit', sans-serif",

              fontWeight: 500,

              fontSize: "14px",

              letterSpacing: "0.04em",

              color:
                activeSection === link
                  ? "var(--foreground)"
                  : "var(--muted-foreground)",

              position: "relative",

              padding: "4px 0",

              transition:
                "all 0.25s ease",
            }}
          >
            {link}

            {activeSection === link && (
              <motion.div
                layoutId="activeNav"
                style={{
                  position: "absolute",

                  bottom: "-5px",

                  left: 0,
                  right: 0,

                  height: "2px",

                  background:
                    "linear-gradient(90deg,#7C3AED,#D946EF)",

                  borderRadius: "999px",

                  boxShadow:
                    "0 0 12px rgba(168,85,247,0.6)",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Right Side */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* CTA */}

        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={() =>
            onNavigate("Contact")
          }
          style={{
            fontFamily:
              "'Outfit', sans-serif",

            fontWeight: 600,

            fontSize: "13px",

            color: "#ffffff",

            background:
              "linear-gradient(135deg,#7C3AED,#D946EF)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            padding: "12px 22px",

            borderRadius: "14px",

            cursor: "pointer",

            letterSpacing: "0.02em",

            boxShadow:
              "0 10px 30px rgba(168,85,247,0.35)",

            transition:
              "all 0.25s ease",
          }}
        >
          Start a Project
        </motion.button>
      </div>
    </motion.nav>
  );
}
