import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { fadeUp, MotionLink, staggerParent, viewportOnce } from "../lib/motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/field")({
  head: () => ({
    meta: [
      { title: "Field Trip & Geological Sites | ICSEECA - ICETS 2027" },
      { name: "description", content: "Educational geological field visit — Mahendragiri Hills and the Eastern Ghats near Centurion University, Paralakhemundi, Odisha." },
    ],
  }),
  component: FieldTripPage,
});

const objectives = [
  "Insights into Eastern Ghats geology and high-grade metamorphic suites (charnockite–khondalite)",
  "Environmental management practices in mining and quarry regions",
  "Study of lithological and geomorphological formations",
  "Structural geology and Anthropocene-driven environmental changes",
  "Regional geology of the Gajapati district and the Eastern Ghats belt",
];

const galleries = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    caption: "Mahendragiri Hills — the second-highest peak of Odisha, a window into the Eastern Ghats",
  },
  {
    src: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?w=800&h=600&fit=crop",
    caption: "Vamsadhara River Basin — river and watershed hydrology field studies",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
    caption: "Eastern Ghats geological formations and structural terrain",
  },
];

const infoBlocks = [
  {
    icon: "🚌",
    title: "Transportation",
    text: "Conference-organized transportation will be provided from the CUTM campus to the Mahendragiri Hills and the geological field sites.",
  },
  {
    icon: "🦺",
    title: "Safety Measures",
    text: "Participants will be provided safety helmets and instructions during site visits. All field protocols will follow the standard safety guidelines.",
  },
  {
    icon: "📓",
    title: "Field Documentation",
    text: "Participants are encouraged to maintain field notebooks for geological observations, stratigraphic logging, and structural interpretation.",
  },
];

function FieldTripPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #04281a 0%, #065f46 55%, #059669 100%)", padding: "70px 24px 100px", textAlign: "center" }}
      >
        <div style={{ position: "absolute", top: -70, right: -50, fontSize: "10rem", opacity: 0.08, animation: "floatSlow 6s ease-in-out infinite" }}>⛰️</div>
        <div style={{ position: "absolute", bottom: -50, left: -40, fontSize: "8rem", opacity: 0.08, animation: "floatSlow 7s ease-in-out infinite" }}>🪨</div>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#a7f3d0", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", padding: "8px 18px", borderRadius: 9999, marginBottom: 20 }}>FIELD VISIT</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Field Trip &amp; <span style={{ background: "linear-gradient(90deg,#6ee7b7,#a7f3d0,#6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Geological Sites</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#d1fae5", fontWeight: 600, margin: "0 0 8px" }}>
            Educational Geological Field Visit – ICSEECA-ICETS 2027
          </p>
          <p style={{ fontSize: "0.95rem", color: "#a7f3d0", margin: "0 0 20px" }}>
            11–12 November 2027 · Eastern Ghats, Paralakhemundi, Odisha
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#ecfdf5", fontSize: "0.85rem", fontWeight: 600, padding: "10px 18px", borderRadius: 9999 }}>
            <span>📍</span> Centurion University of Technology and Management
          </div>
        </div>
        <svg style={{ position: "absolute", bottom: -2, left: 0, width: "100%", height: 60 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,32 C360,80 1080,-20 1440,32 L1440,60 L0,60 Z" fill="#f8fafc" />
        </svg>
      </motion.section>

      {/* Main content */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        style={{ padding: "20px 24px 70px" }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Excursion intro */}
          <div data-reveal="fade-up" style={{ background: "#fff", borderRadius: 18, border: "1px solid #e2e8f0", boxShadow: "0 6px 20px rgba(0,0,0,0.05)", padding: "32px 28px", marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 14px", textAlign: "center" }}>
              ⛰️ Geological Excursion
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.75, margin: 0, textAlign: "center", maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              The conference includes an educational field visit to the <strong style={{ color: "#047857" }}>Mahendragiri Hills</strong> and geological site excursions in the <strong style={{ color: "#047857" }}>Eastern Ghats belt</strong> and the <strong style={{ color: "#047857" }}>Vamsadhara River basin</strong> near the Centurion University of Technology and Management (CUTM) to provide hands-on learning experiences.
            </p>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.75, margin: "14px 0 0", textAlign: "center" }}>
              The field trip is designed to bridge theoretical knowledge with real-world geological and environmental applications. It enhances observational skills, field-based analysis, and interdisciplinary understanding.
            </p>
          </div>

          {/* Objectives */}
          <div data-reveal="fade-up" className="stagger-1" style={{ background: "linear-gradient(135deg, #ecfdf5, #d1fae5)", border: "1px solid #a7f3d0", borderRadius: 18, padding: "28px", marginBottom: 36 }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#065f46", margin: "0 0 16px" }}>Objectives</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {objectives.map((o, i) => (
                <li key={o} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.92rem", color: "#065f46", lineHeight: 1.6 }}>
                  <span style={{ color: "#059669", fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration fee */}
          <div data-reveal="fade-up" className="stagger-2" style={{ background: "#fff", borderRadius: 18, border: "1px solid #e2e8f0", boxShadow: "0 6px 20px rgba(0,0,0,0.05)", padding: "28px", marginBottom: 36, textAlign: "center" }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0f172a", margin: "0 0 18px" }}>Field Trip Registration Fee (11–12 November 2027)</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "18px", flexWrap: "wrap" }}>
              <div className="card-hover" style={{ background: "linear-gradient(135deg, #f0fdf4, #d1fae5)", border: "1px solid #a7f3d0", borderRadius: 14, padding: "22px 30px", minWidth: 230 }}>
                <h5 style={{ fontWeight: 700, color: "#047857", margin: "0 0 8px", fontSize: "0.95rem" }}>Indian Participants</h5>
                <p style={{ fontWeight: 800, fontSize: "1.3rem", color: "#065f46", margin: 0 }}>INR ₹3000/-</p>
              </div>
              <div className="card-hover" style={{ background: "linear-gradient(135deg, #ecfdf5, #d1fae5)", border: "1px solid #a7f3d0", borderRadius: 14, padding: "22px 30px", minWidth: 230 }}>
                <h5 style={{ fontWeight: 700, color: "#047857", margin: "0 0 8px", fontSize: "0.95rem" }}>International Participants</h5>
                <p style={{ fontWeight: 800, fontSize: "1.3rem", color: "#065f46", margin: 0 }}>USD $ 50.00</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: 36 }}>
            {galleries.map((g, i) => (
              <figure key={g.src} data-reveal="fade-up" className={`stagger-${i + 1}`} style={{ margin: 0, background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}>
                <div style={{ height: 200, overflow: "hidden" }}>
                  <img src={g.src} alt={g.caption} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                </div>
                <figcaption style={{ padding: "14px 16px", fontSize: "0.82rem", color: "#475569", lineHeight: 1.55 }}>{g.caption}</figcaption>
              </figure>
            ))}
          </motion.div>

          {/* Additional info */}
          <h3 data-reveal="fade-up" style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", textAlign: "center", margin: "0 0 20px" }}>
            Additional Information
          </h3>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: 36 }}>
            {infoBlocks.map((b, i) => (
              <div key={b.title} data-reveal="fade-up" className={`stagger-${i + 1}`} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 6px 20px rgba(0,0,0,0.05)", padding: "24px", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.09)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.05)"; }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{b.icon}</div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{b.title}</h4>
                <p style={{ fontSize: "0.87rem", color: "#475569", margin: 0, lineHeight: 1.65 }}>{b.text}</p>
              </div>
            ))}
          </motion.div>

          <div style={{ textAlign: "center" }}>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 6px 16px rgba(5,150,105,0.3)" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
