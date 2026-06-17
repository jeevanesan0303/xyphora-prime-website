import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Home", "Services", "About", "Team", "Process", "Contact"];

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection: activeSectionProp, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(activeSectionProp);
  // ✅ Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveSection(activeSectionProp);
  }, [activeSectionProp]);

  /* Scroll Background */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active Section Spy */
  useEffect(() => {
    const sections = ["Home", "Services", "About", "Team", "Process", "Contact"];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150;
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // ✅ Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: "78px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // ✅ Responsive padding
          padding: "0 clamp(16px, 4vw, 40px)",
          backdropFilter: "blur(24px) saturate(180%)",
          background: scrolled ? "var(--glass)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.35s ease",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            zIndex: 1001,
          }}
          onClick={() => handleNavigate("Home")}
        >
          <img
            src={logo}
            alt="Xyphora Prime Logo"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "contain",
              filter: "none",
              transition: "filter 0.35s ease",
            }}
          />
          <span style={{
            fontFamily: "'Syncopate', sans-serif",
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: "19px",
            background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.12em",
            textShadow: "none",
            transition: "all 0.35s ease",
          }}>
            Xyphora Prime
          </span>
        </motion.div>

        {/* ✅ Desktop Nav Links — hidden on mobile */}
        <div className={`desktop-nav ${scrolled ? 'scrolled' : ''}`} style={{
          display: "flex",
          alignItems: "center",
          gap: "34px",
        }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavigate(link)}
              className={`nav-link-btn ${activeSection === link ? 'active' : ''}`}
            >
              {link}
              {activeSection === link && (
                <motion.div
                  layoutId="activeNav"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: 0, right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg,#7C3AED,#a855f7)",
                    borderRadius: "999px",
                    boxShadow: "0 0 12px rgba(168,85,247,0.3)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ✅ Right Side — CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

          {/* CTA — hidden on mobile */}
          <motion.button
            className="desktop-cta"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigate("Contact")}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "#ffffff",
              background: "linear-gradient(135deg,#7C3AED,#a855f7)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "12px 22px",
              borderRadius: "14px",
              cursor: "pointer",
              letterSpacing: "0.02em",
              boxShadow: "0 10px 30px rgba(168,85,247,0.35)",
              transition: "all 0.25s ease",
            }}
          >
            Start a Project
          </motion.button>

          {/* ✅ Hamburger — only on mobile */}
          <motion.button
            className="hamburger"
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "var(--glass)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              width: "44px",
              height: "44px",
              display: "none", // shown via CSS
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--foreground)",
              zIndex: 1001,
              transition: "all 0.3s ease",
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "78px",
              left: 0, right: 0,
              zIndex: 999,
              background: "var(--glass)",
              backdropFilter: "blur(24px) saturate(180%)",
              borderBottom: "1px solid var(--border)",
              padding: "16px clamp(16px, 4vw, 40px) 24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavigate(link)}
                style={{
                  background: activeSection === link
                    ? "rgba(168,85,247,0.1)"
                    : "none",
                  border: activeSection === link
                    ? "1px solid rgba(168,85,247,0.25)"
                    : "1px solid transparent",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  letterSpacing: "0.04em",
                  color: activeSection === link
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                  padding: "14px 16px",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
              >
                {link}
              </motion.button>
            ))}

            {/* CTA in mobile menu */}
            <motion.button
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => handleNavigate("Contact")}
              style={{
                marginTop: "8px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                color: "#ffffff",
                background: "linear-gradient(135deg,#7C3AED,#a855f7)",
                border: "none",
                padding: "14px 22px",
                borderRadius: "14px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(168,85,247,0.35)",
                width: "100%",
                textAlign: "center",
              }}
            >
              Start a Project →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ CSS for responsive show/hide and hover states */}
      <style>{`
        .nav-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.04em;
          position: relative;
          padding: 4px 0;
          transition: all 0.25s ease;
          color: var(--muted-foreground);
        }
        .nav-link-btn.active {
          color: var(--foreground);
        }
        .nav-link-btn:hover {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
        }
      `}</style>
    </>
  );
}