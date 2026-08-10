import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/about-university")({
  head: () => ({
    meta: [
      { title: "About University | ICEEA - ICETS 2027" },
      { name: "description", content: "Learn about Centurion University of Technology and Management (CUTM), the host institution of ICEEA-ICETS 2027 at Paralakhemundi, Odisha, India." },
    ],
  }),
  component: AboutUniversityPage,
});



function AboutUniversityPage() {
  const facts = [
    { icon: "📍", label: "Location", value: "Paralakhemundi, Odisha, India" },
    { icon: "🏛️", label: "Type", value: "Private Deemed University" },
    { icon: "👨‍🎓", label: "Students", value: "20,000+ Enrolled" },
    { icon: "🎓", label: "Programs", value: "100+ UG, PG & PhD Courses" },
    { icon: "🔬", label: "Research Centres", value: "15+ Active Research Centres" },
    { icon: "🌐", label: "Global Partners", value: "50+ International Tie-ups" },
  ];

  const highlights = [
    { icon: "🏆", title: "NAAC Accredited", desc: "Centurion University holds NAAC accreditation, reflecting its commitment to academic quality and continuous improvement." },
    { icon: "🔬", title: "Research & Innovation", desc: "Home to multiple research centres focusing on civil engineering, environmental science, agri-tech, and digital transformation." },
    { icon: "🌍", title: "International Collaborations", desc: "Active MoUs with leading universities across Mexico, USA, UK, Germany, and South East Asia for joint research and faculty exchange." },
    { icon: "🌱", title: "Sustainability Focus", desc: "CUTM's green campus initiatives and environmental research programs align closely with the themes of ICEEA-ICETS 2027." },
    { icon: "🤝", title: "Industry Connect", desc: "Strong industry-academia interface with 400+ corporate partners driving skill-based education and applied research." },
    { icon: "📚", title: "Comprehensive Education", desc: "Offering engineering, management, agriculture, law, health sciences, and liberal arts under one integrated ecosystem." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Hero */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{
        backgroundImage: "linear-gradient(rgba(6,43,26,0.82), rgba(15,23,42,0.88)), url('/Centurion%20University%20Full%20Image..png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "90px 24px 100px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -60, left: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,.15),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: -40, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.15),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(52,211,153,.2)", border: "1px solid rgba(52,211,153,.4)", color: "#34d399", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, padding: "6px 18px", borderRadius: 9999, marginBottom: 22, backdropFilter: "blur(4px)" }}>Host Institution</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>
            Centurion University of{" "}
            <span style={{ color: "#f97316" }}>Technology &amp; Management</span>
          </h1>
          <p style={{ marginTop: 18, color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 1.75, textShadow: "0 1px 5px rgba(0,0,0,0.5)" }}>
            A premier institution at Paralakhemundi, Odisha, dedicated to excellence in engineering, technology, management, and research — proudly hosting ICEEA-ICETS 2027.
          </p>
          <motion.a href="https://www.cutm.ac.in/" target="_blank" rel="noreferrer" whileTap={{ scale: 0.97 }}
            style={{ display: "inline-block", marginTop: 24, background: "linear-gradient(135deg,#10b981,#059669)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 9999, textDecoration: "none", boxShadow: "0 4px 14px rgba(16,185,129,0.4)" }}>
            Visit CUTM Website →
          </motion.a>
        </div>
      </motion.section>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Key Facts */}
        <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16, marginTop: 48 }}>
          {facts.map(({ icon, label, value }) => (
            <motion.div key={label} variants={springItem} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 12px rgba(0,0,0,.06)", border: "1px solid #e2e8f0", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{ fontSize: "1.5rem" }}>{icon}</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#10b981", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>{value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About CUTM */}
        <div style={{ marginTop: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#10b981,#06b6d4)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>About CUTM</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: "1px solid #e2e8f0", display: "flex", flexWrap: "wrap" as const, gap: 32, alignItems: "center" }}>
            <div style={{ flex: "1 1 320px" }}>
              <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: "0 0 18px" }}>
                <strong style={{ color: "#0f172a" }}>Centurion University of Technology and Management (CUTM)</strong> is established as a leading technical institution committed to excellence in engineering, technology, and management education. The University offers comprehensive undergraduate and postgraduate programs with a strong emphasis on practical learning and research-driven innovation.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: "0 0 18px" }}>
                Located at <strong style={{ color: "#0f172a" }}>Paralakhemundi, Odisha</strong>, CUTM emphasizes interdisciplinary education and actively collaborates with national and international partners to enhance learning outcomes and foster innovation in civil engineering, environmental studies, and allied disciplines.
              </p>
              <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
                CUTM's <strong style={{ color: "#0f172a" }}>Department of Civil Engineering</strong>, School of Engineering and Technology, is the organizing department for ICEEA-ICETS 2027, reflecting the university's commitment to environmental research and global knowledge exchange.
              </p>
            </div>
            <div style={{ flex: "0 0 260px", background: "linear-gradient(145deg, #ecfdf5, #f0fdf4)", borderRadius: 20, padding: "16px", border: "1px solid rgba(52,211,153,0.3)", display: "flex", flexDirection: "column" as const, alignItems: "center", textAlign: "center" as const, boxShadow: "0 10px 25px rgba(16,185,129,0.08)" }}>
              <img
                src="/Centurion%20University%20Full%20Image..png"
                alt="Centurion University Campus"
                style={{ height: "130px", width: "100%", objectFit: "cover", borderRadius: "12px", marginBottom: "12px" }}
              />
              <span style={{ fontSize: "14px", fontWeight: 800, color: "#065f46" }}>CUTM Odisha</span>
              <span style={{ fontSize: "12px", color: "#047857", marginTop: "4px" }}>Paralakhemundi Campus</span>
              <div style={{ width: "100%", height: 1, background: "rgba(5,150,105,0.2)", margin: "12px 0" }} />
              <img
                src="/CUTM%20Naac%20A+%20image.jpeg"
                alt="NAAC A+ Grade — Centurion University"
                style={{ height: "90px", width: "100%", objectFit: "contain", borderRadius: "12px", marginBottom: "10px" }}
              />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#065f46", letterSpacing: "0.5px" }}>NAAC A+ Grade</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div style={{ marginTop: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>Why CUTM?</h2>
            <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>A world-class institution with a global outlook and a local impact</p>
          </div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {highlights.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={springItem} whileHover={{ y: -6, boxShadow: "0 14px 34px rgba(0,0,0,0.14)" }} style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 2px 16px rgba(0,0,0,.06)", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Location/Venue */}
        <div style={{ marginTop: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#f59e0b,#ef4444)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>Conference Venue</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: "1px solid #e2e8f0", display: "flex", flexWrap: "wrap" as const, gap: 32, alignItems: "center" }}>
            <div style={{ flex: "1 1 300px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: "1.75rem" }}>🏛️</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>Auditorium, CUTM</h3>
              </div>
              <p style={{ color: "#475569", lineHeight: 1.8, fontSize: "0.95rem", margin: "0 0 12px" }}>
                The conference will be held at the state-of-the-art Auditorium of Centurion University of Technology and Management, equipped with modern presentation facilities, ample seating, and excellent connectivity.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {[
                  ["📍", "Paralakhemundi, Odisha - India"],
                  ["🗓️", "November 8–10, 2027"],
                  ["🚌", "Field Trip: November 11–12, 2027"],
                ].map(([ico, txt]) => (
                  <div key={txt} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: "1.1rem" }}>{ico}</span>
                    <span style={{ color: "#475569", fontSize: "0.9rem" }}>{txt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 260px", background: "linear-gradient(135deg,#064e3b,#0f172a)", borderRadius: 16, padding: "28px 24px", color: "#fff", textAlign: "center" as const }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 10 }}>🌿</div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 6 }}>Green Campus</div>
              <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>CUTM's sprawling green campus spans multiple acres, providing a serene and inspiring environment for academic exchange and international dialogue.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 72, background: "linear-gradient(135deg,#064e3b,#0f172a)", borderRadius: 24, padding: "48px 36px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(52,211,153,.08)", pointerEvents: "none" }} />
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", margin: "0 0 12px", position: "relative" }}>Join Us at CUTM</h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", margin: "0 0 28px", position: "relative" }}>Be part of ICEEA-ICETS 2027 at one of India's premier technical universities.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: 12, position: "relative" }}>
            <motion.a href="https://www.cutm.ac.in/" target="_blank" rel="noreferrer" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg,#10b981,#059669)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>
              Visit CUTM Website
            </motion.a>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#e2e8f0", fontWeight: 600, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

