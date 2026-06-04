import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Twitter, Send, Facebook, Instagram } from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "AI & Chatbots",
  "UI/UX Design",
  "Cloud Services",
  "Digital Marketing",
  "IT Consulting",
  "IoT Systems",
];

function WireframeEnvelope() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="220" height="170" viewBox="0 0 200 160"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <rect x="10" y="30" width="180" height="120" rx="10"
          fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.8" />
        <polyline points="10,30 100,90 190,30"
          fill="none" stroke="#A855F7" strokeWidth="1.5" opacity="0.8" />
        <line x1="10" y1="150" x2="80" y2="90"
          stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
        <line x1="190" y1="150" x2="120" y2="90"
          stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
        <text x="100" y="135" textAnchor="middle"
          fontFamily="'Outfit', sans-serif" fontSize="15"
          fill="rgba(168,85,247,0.55)">@</text>
        <circle cx="100" cy="90" r="3" fill="#A855F7" opacity="0.7" />
        <circle cx="10" cy="30" r="3" fill="#D946EF" opacity="0.7" />
        <circle cx="190" cy="30" r="3" fill="#D946EF" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_ng3q81s",
        "template_zgwv0vh",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "9skX8jaTNIewFbV0R"
      );
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--background)",
        // ✅ Responsive padding
        padding: "clamp(60px, 10vw, 120px) clamp(16px, 5vw, 40px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        bottom: "-10%", left: "-10%",
        width: "700px", height: "500px",
        background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "10%", right: "-10%",
        width: "600px", height: "500px",
        background: "radial-gradient(circle, rgba(217,70,239,0.10) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1360px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            // ✅ Responsive margin
            marginBottom: "clamp(40px, 6vw, 72px)",
          }}
        >
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 50px)",
            color: "var(--foreground)",
            lineHeight: 1.2,
            marginBottom: "14px",
          }}>
            Let's Build Something{" "}
            <span style={{
              background: "linear-gradient(135deg,#7C3AED,#D946EF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Great Together
            </span>
          </h2>
          <p style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "var(--muted-foreground)",
          }}>
            Have a project in mind? We'd love to hear about it.
          </p>
        </motion.div>

        {/* ✅ Grid: 1 column on mobile, 2 on desktop */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}>

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: "48px", display: "flex", justifyContent: "center" }}>
              <WireframeEnvelope />
            </div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "26px",
                padding: "18px 22px",
                background: "var(--glass)",
                border: "1px solid var(--border)",
                borderRadius: "18px",
                backdropFilter: "blur(18px)",
                boxShadow: "var(--shadow-sm)",
                // ✅ Prevent overflow on small screens
                overflowX: "hidden",
              }}
            >
              <Mail size={20} color="#A855F7" style={{ flexShrink: 0 }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(11px, 2.5vw, 13px)",
                color: "var(--foreground)",
                // ✅ Prevent email text overflow
                overflowWrap: "break-word",
                wordBreak: "break-all",
              }}>
                info@xyphoraprime.com
              </span>
            </motion.div>

            {/* Social Buttons */}
            <div style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}>
              {[
                { icon: Linkedin, url: "https://www.linkedin.com/in/xyphora-prime-859b54412/" },
                { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61590756680525" },
                { icon: Instagram, url: "https://www.instagram.com/xyphoraprime?igsh=bGE4NGlkOGdkeHBo" },
                { icon: Mail, url: "mailto:info@xyphoraprime.com" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "var(--glass)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      textDecoration: "none",
                      backdropFilter: "blur(16px)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Icon size={18} color="var(--foreground)" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)",
                  background: "var(--glass)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  borderRadius: "24px",
                  backdropFilter: "blur(20px)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div style={{ fontSize: "52px", marginBottom: "20px" }}>✓</div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 3vw, 26px)",
                  color: "var(--foreground)",
                  marginBottom: "12px",
                }}>
                  Message Sent!
                </h3>
                <p style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  color: "var(--muted-foreground)",
                }}>
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  background: "var(--glass)",
                  border: "1px solid var(--border)",
                  borderRadius: "26px",
                  // ✅ Responsive padding
                  padding: "clamp(24px, 5vw, 42px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  backdropFilter: "blur(22px)",
                  boxShadow: "var(--shadow-md)",
                }}>

                  {/* Input Fields */}
                  {[
                    { label: "YOUR NAME", key: "name", type: "text", placeholder: "John Doe" },
                    { label: "EMAIL ADDRESS", key: "email", type: "email", placeholder: "john@company.com" },
                    { label: "MOBILE NUMBER", key: "phone", type: "tel", placeholder: "+94 77 123 4567" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label style={{
                        display: "block",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: "var(--primary)",
                        letterSpacing: "0.1em",
                        marginBottom: "8px",
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={(form as any)[field.key]}
                        onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                        placeholder={field.placeholder}
                        required
                        style={{
                          width: "100%",
                          padding: "15px 18px",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid var(--border)",
                          borderRadius: "14px",
                          color: "var(--foreground)",
                          fontFamily: "'Instrument Sans', sans-serif",
                          fontSize: "15px",
                          outline: "none",
                          transition: "all 0.25s ease",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#A855F7";
                          e.target.style.boxShadow = "0 0 20px rgba(168,85,247,0.18)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "var(--border)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}

                  {/* Service */}
                  <div>
                    <label style={{
                      display: "block",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "var(--primary)",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}>
                      WHAT SERVICE DO YOU NEED?
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      style={{
                        width: "100%",
                        padding: "15px 18px",
                        background: "#12051f",
                        border: "1px solid var(--border)",
                        borderRadius: "14px",
                        color: "#ffffff",
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: "15px",
                        outline: "none",
                        cursor: "pointer",
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="" disabled style={{ backgroundColor: "#12051f", color: "#ffffff" }}>
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ backgroundColor: "#12051f", color: "#ffffff" }}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: "block",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "var(--primary)",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}>
                      TELL US ABOUT YOUR PROJECT
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Describe your project..."
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "15px 18px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        borderRadius: "14px",
                        color: "var(--foreground)",
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: "15px",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        transition: "all 0.25s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#A855F7";
                        e.target.style.boxShadow = "0 0 20px rgba(168,85,247,0.18)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                      width: "100%",
                      height: "56px",
                      background: "linear-gradient(135deg,#7C3AED,#D946EF)",
                      border: "none",
                      borderRadius: "16px",
                      color: "#ffffff",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      boxShadow: "0 14px 40px rgba(168,85,247,0.35)",
                    }}
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}