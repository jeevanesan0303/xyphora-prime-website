import { useState, useCallback } from "react";
import "../styles/fonts.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ProcessSection } from "./components/ProcessSection";
import { TeamSection } from "./components/TeamSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const sectionIds: Record<string, string> = {
  Home: "home",
  Services: "services",
  About: "about",
  Portfolio: "portfolio",
  "Why Us": "why-us",
  Process: "process",
  Team: "team",
  Contact: "contact",
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);

    const id = sectionIds[section];

    if (id) {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);

  return (
    <div
      className="app-container"
      style={{
        minHeight: "100vh",
        fontFamily: "'Outfit', sans-serif",
        overflowX: "hidden",
        background: "var(--background)",
        color: "var(--foreground)",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Loading Screen */}
      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Main Website */}
      {!loading && (
        <>
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />

          <main>
            <HeroSection
              onNavigate={handleNavigate}
            />

            <ServicesSection />

            <AboutSection />

            <PortfolioSection />

            <WhyUsSection />

            <ProcessSection />

            <TeamSection />

            <ContactSection />
          </main>

          <Footer onNavigate={handleNavigate} />
        </>
      )}

      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background:
            radial-gradient(
              circle at top left,
              rgba(124, 58, 237, 0.18),
              transparent 35%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(168, 85, 247, 0.12),
              transparent 30%
            ),
            var(--background);

          color: var(--foreground);
          overflow-x: hidden;

          transition:
            background 0.4s ease,
            color 0.4s ease;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #05030f;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            #7c3aed,
            #a855f7
          );
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          opacity: 0.85;
        }

        ::selection {
          background: rgba(168, 85, 247, 0.35);
          color: white;
        }

        ::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        input,
        textarea,
        select,
        button {
          font-family: inherit;
        }

        input,
        textarea,
        select {
          color-scheme: dark;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        img {
          max-width: 100%;
          display: block;
        }

        button {
          border: none;
          outline: none;
        }

        .app-container {
          position: relative;
          width: 100%;
        }
      `}</style>

      {/* Whatsapp */}
      <a
        href="https://wa.me/94757233942"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: "24px",
          bottom: "24px",

          width: "60px",
          height: "60px",

          borderRadius: "50%",

          background: "#25D366",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          boxShadow:
            "0 10px 30px rgba(37,211,102,0.4)",

          zIndex: 9999,

          cursor: "pointer",

          transition: "all 0.3s ease",

          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "scale(1)";
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.16 1.59 5.98L0 24l6.29-1.65a11.9 11.9 0 005.78 1.47h.01c6.57 0 11.91-5.34 11.91-11.91a11.82 11.82 0 00-3.47-8.43zM12.08 21.8a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.73.98 1-3.64-.24-.38a9.83 9.83 0 01-1.51-5.25c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 012.9 7c0 5.47-4.45 9.92-9.94 9.92zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>

    </div>
  );



}