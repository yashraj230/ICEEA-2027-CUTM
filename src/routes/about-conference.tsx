import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/about-conference")({
  head: () => ({
    meta: [
      { title: "About Conference | ICSEECA - ICETS 2027" },
      { name: "description", content: "Learn about ICSEECA-2027 and the 19th International Congress on Environmental & Territorial Studies (ICETS-2027)." },
    ],
  }),
  component: AboutConferencePage,
});



function AboutConferencePage() {
  const goals = [
    { icon: "🌍", title: "Address Anthropocene Challenges", desc: "Tackle complex Earth and environmental challenges emerging in the Anthropocene epoch with innovative scientific solutions." },
    { icon: "🤝", title: "International Collaboration", desc: "Strengthen scientific collaboration between nations for sustainable environmental governance and resilient socio-ecological systems." },
    { icon: "🔬", title: "Interdisciplinary Research", desc: "Promote interdisciplinary dialogue across geosciences, environmental policy, technology, and social dimensions." },
    { icon: "💡", title: "Innovative Solutions", desc: "Exchange cutting-edge research in climate change, geology, biodiversity, energy, and territorial studies." },
    { icon: "🌱", title: "Sustainable Development", desc: "Advance geo-environmental solutions and promote sustainable development practices globally." },
    { icon: "📜", title: "Policy Integration", desc: "Bridge the gap between scientific findings and actionable environmental policy for measurable real-world impact." },
  ];
  const highlights = [
    { icon: "📅", label: "Conference Dates", value: "November 8–12, 2027" },
    { icon: "📍", label: "Venue", value: "Centurion University, Paralakhemundi, Odisha" },
    { icon: "👥", label: "Expected Attendees", value: "500+ Researchers & Scholars" },
    { icon: "🌐", label: "Countries Represented", value: "30+ Nations" },
    { icon: "🏛️", label: "Organised by", value: "Dept. of Civil Engineering, CUTM" },
    { icon: "🤝", label: "In Association with", value: "CIIEMAD, IPN Mexico City" },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />
      {/* Hero */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ background: "linear-gradient(135deg,#062b1a,#064e3b 50%,#0f172a)", padding: "80px 24px 90px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,.12),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(52,211,153,.15)", border: "1px solid rgba(52,211,153,.3)", color: "#34d399", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, padding: "6px 18px", borderRadius: 9999, marginBottom: 22 }}>About ICSEECA · ICETS 2027</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>
            About the <span style={{ background: "linear-gradient(90deg,#34d399,#a3e635)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Conference</span>
          </h1>
          <p style={{ marginTop: 18, color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.75 }}>International Conference on Sustainable Earth, Environment, and Climate Action (ICSEECA) &amp; 19th International Congress on Environmental &amp; Territorial Studies (ICETS‑2027)</p>
          <p style={{marginTop:24, color:"#94a3b8", fontSize:"0.95rem", lineHeight:1.75, maxWidth:700, marginLeft:"auto", marginRight:"auto"}}>
            The conference will feature keynote lectures by eminent scientists and presentations of peer-reviewed original research from participants worldwide. ICSEECA-2027 aspires to become a landmark forum for shaping future directions in environmental resilience and sustainable development.
          </p>
        </div>
      </motion.section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }} data-reveal="fade-up">
        {/* Highlights */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginTop: 48 }}>
          {highlights.map(({ icon, label, value }, idx) => (
            <div key={label} data-reveal="fade-up" data-reveal-delay={idx * 100} style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 12px rgba(0,0,0,.06)", border: "1px solid #e2e8f0", display: "flex", alignItems: "flex-start", gap: 14 }}>
              <span style={{ fontSize: "1.5rem" }}>{icon}</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#059669", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* About ICSEECA */}
        <div style={{ marginTop: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#10b981,#059669)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>About ICSEECA – 2027</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: "1px solid #e2e8f0" }}>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: "0 0 18px" }}>
              <strong style={{ color: "#0f172a" }}>ICSEECA -2027</strong> aims to bring together researchers, academicians, environmentalists, policymakers, and industry leaders to address complex Earth and environmental challenges emerging during the <strong style={{ color: "#0f172a" }}>Anthropocene epoch</strong>. The conference promotes interdisciplinary dialogue focusing on climate change, sustainability, natural resources, geosciences, environmental degradation, and advanced technological solutions.
            </p>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              The conference serves as a premier international forum for sharing knowledge, forging partnerships, and developing innovative strategies to address the most pressing environmental challenges of our time. ICSEECA 2027 will feature keynote addresses, oral presentations, poster sessions, and interactive workshops designed to foster cross-disciplinary collaboration.
            </p>
          </div>
        </div>

        {/* Primary Objectives */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#f59e0b,#f97316)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>Primary Objectives</h2>
          </div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {[
              { icon: "💡", text: "Share groundbreaking research and transformative ideas" },
              { icon: "🤝", text: "Establish prolific partnerships across academic, scientific, and industrial sectors" },
              { icon: "🔗", text: "Bridge the gap between theoretical knowledge and practical application" },
              { icon: "🌐", text: "Create long-term global networks that drive impactful research and sustainable innovation" },
              { icon: "📡", text: "Gain exposure to cutting-edge technologies, methodologies, and international best practices" },
            ].map(({ icon, text }) => (
              <motion.div key={text} variants={springItem} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: "#fff", borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 12px rgba(0,0,0,.06)", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0, marginTop: 2 }}>{icon}</span>
                <p style={{ color: "#475569", fontSize: "0.93rem", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* About ICETS */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#84cc16,#16a34a)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>About ICETS – 19th Edition</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: "1px solid #e2e8f0" }}>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: "0 0 18px" }}>
              <strong style={{ color: "#0f172a" }}>ICETS</strong> is an internationally recognized congress focusing on environmental and territorial studies. The <strong style={{ color: "#0f172a" }}>19th edition</strong> continues its mission to build scientific collaborations between nations for sustainable environmental governance and resilient socio-ecological systems.
            </p>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              Since its inception, ICETS has served as a bridge between scientific research and territorial management, bringing together scholars and practitioners from Mexico, India, and across the globe to tackle complex socio-environmental issues through evidence-based frameworks and collaborative governance.
            </p>
          </div>
        </div>

        {/* Conference Vision */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#059669,#10b981)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>Conference Vision</h2>
          </div>
          <div style={{ background: "linear-gradient(135deg,#ecfdf5,#d1fae5)", borderRadius: 20, padding: 36, border: "1px solid #a7f3d0" }}>
            <p style={{ color: "#064e3b", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              The conference program will feature keynote lectures by eminent scientists and presentations of peer-reviewed original research from participants worldwide. <strong>ICSEECA-2027</strong> aspires to become a landmark forum for shaping future directions in environmental resilience and sustainable development, bringing together the world's leading researchers, faculty, students, and industry professionals to disseminate, debate, and catalyze innovative solutions for the most pressing challenges in Earth and Environmental Sciences.
            </p>
          </div>
        </div>

        {/* Goals */}
        <div style={{ marginTop: 68 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>Conference Goals</h2>
            <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>Driving global dialogue towards a more sustainable future</p>
          </div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {goals.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={springItem} whileHover={{ y: -6, boxShadow: "0 14px 34px rgba(0,0,0,0.14)" }} style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 2px 16px rgba(0,0,0,.06)", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 72, background: "linear-gradient(135deg,#064e3b,#0f172a)", borderRadius: 24, padding: "48px 36px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(52,211,153,.08)", pointerEvents: "none" }} />
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", margin: "0 0 12px", position: "relative" }}>Ready to Participate?</h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", margin: "0 0 28px", position: "relative" }}>Submit your abstract and be part of this landmark global conference.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: 12, position: "relative" }}>
            <motion.a href="https://forms.gle/WZW2CrWhMZet1wep8" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg,#10b981,#059669)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>
              Register &amp; Submit Abstract
            </motion.a>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#e2e8f0", fontWeight: 600, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

