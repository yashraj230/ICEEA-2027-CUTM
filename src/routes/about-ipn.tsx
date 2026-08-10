import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/about-ipn")({
  head: () => ({
    meta: [
      { title: "About IPN Mexico | ICEEA - ICETS 2027" },
      { name: "description", content: "Learn about the National Polytechnic Institute of Mexico (IPN) and CIIEMAD — the international co-organiser of ICEEA-ICETS 2027." },
    ],
  }),
  component: AboutIPNPage,
});



function AboutIPNPage() {
  const facts = [
    { icon: "📅", label: "Founded", value: "1936" },
    { icon: "📍", label: "Location", value: "Mexico City, México" },
    { icon: "👨‍🎓", label: "Students", value: "216,000+" },
    { icon: "🏛️", label: "Type", value: "Public Polytechnic Institution" },
    { icon: "🌐", label: "Programs", value: "Graduate, Undergraduate & Postgraduate" },
    { icon: "🔬", label: "Research Centres", value: "70+ Research Units Nationwide" },
  ];

  const pillars = [
    { icon: "🌿", title: "Environmental Research", desc: "CIIEMAD leads multidisciplinary studies on environment, territorial management, and sustainable development across Latin America and beyond." },
    { icon: "🤝", title: "International Cooperation", desc: "IPN fosters bilateral research agreements with leading institutions in India, Europe, and the United States to advance global environmental governance." },
    { icon: "📖", title: "Social Integration Model", desc: "IPN's Social Integration Model drives two-way engagement between the institute and society — linking science directly to policy and community action." },
    { icon: "🏆", title: "Academic Excellence", desc: "The majority of IPN's programs carry national and international accreditation, reflecting consistently high standards in research and teaching." },
    { icon: "💡", title: "Innovation & Technology", desc: "IPN is home to some of Latin America's most innovative research programmes in biotechnology, clean energy, AI, and environmental sciences." },
    { icon: "🌎", title: "ICETS Congress", desc: "IPN's CIIEMAD has spearheaded the ICETS congress for 18 editions, making the 19th edition in collaboration with CUTM a landmark milestone." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Hero */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ background: "linear-gradient(135deg,#1a0520,#7f1d1d 50%,#0f172a)", padding: "80px 24px 90px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(239,68,68,.12),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -40, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,.08),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 22, flexWrap: "wrap" as const }}>
            <span style={{ display: "inline-block", background: "rgba(239,68,68,.18)", border: "1px solid rgba(239,68,68,.35)", color: "#fca5a5", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, padding: "6px 18px", borderRadius: 9999 }}>🇲🇽 IPN México</span>
            <span style={{ display: "inline-block", background: "rgba(52,211,153,.15)", border: "1px solid rgba(52,211,153,.3)", color: "#34d399", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" as const, padding: "6px 18px", borderRadius: 9999 }}>Co-Organiser</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>
            National Polytechnic{" "}
            <span style={{ background: "linear-gradient(90deg,#fca5a5,#f87171)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Institute</span>
            {" "}(IPN)
          </h1>
          <p style={{ marginTop: 18, color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.75 }}>
            México's leading public technological higher education institution — co-organising ICEEA-ICETS 2027 through its Centre for Interdisciplinary Studies on Environment and Development (CIIEMAD).
          </p>
          <motion.a href="https://www.ipn.mx/" target="_blank" rel="noreferrer" whileTap={{ scale: 0.97 }}
            style={{ display: "inline-block", marginTop: 24, background: "linear-gradient(135deg,#ef4444,#b91c1c)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "12px 28px", borderRadius: 9999, textDecoration: "none" }}>
            Visit IPN Website →
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
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const, color: "#ef4444", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>{value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About IPN */}
        <div style={{ marginTop: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#ef4444,#b91c1c)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>About IPN</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: "1px solid #e2e8f0" }}>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: "0 0 18px" }}>
              Founded in <strong style={{ color: "#0f172a" }}>1936</strong>, the <strong style={{ color: "#0f172a" }}>Instituto Politécnico Nacional (IPN)</strong> is México's leading public technological higher education institution. IPN is renowned for its academic quality — the majority of IPN's programs hold accreditation and recognition for excellence across undergraduate, graduate, and postgraduate levels.
            </p>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              IPN's strategy emphasises a <strong style={{ color: "#0f172a" }}>Social Integration Model</strong>, fostering two-way engagement between the institute and society. IPN currently serves over <strong style={{ color: "#0f172a" }}>216,000 students</strong> and is home to more than 70 research units, centres, and laboratories advancing science and technology across Latin America and the world.
            </p>
          </div>
        </div>

        {/* About CIIEMAD */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 4, height: 38, borderRadius: 4, background: "linear-gradient(180deg,#10b981,#16a34a)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 800, color: "#0f172a", margin: 0 }}>About CIIEMAD</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 4px 24px rgba(0,0,0,.07)", border: "1px solid #e2e8f0" }}>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: "0 0 18px" }}>
              The <strong style={{ color: "#0f172a" }}>Centre for Interdisciplinary Studies on Environment and Development (CIIEMAD)</strong> is IPN's premier research unit dedicated to understanding and addressing environmental and territorial challenges through an integrated, interdisciplinary approach.
            </p>
            <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "0.97rem", margin: 0 }}>
              CIIEMAD has been the driving force behind the ICETS congress across 18 editions, establishing lasting scientific partnerships with institutions across India, Europe, and the Americas. For ICEEA-ICETS 2027, CIIEMAD collaborates with CUTM's Department of Civil Engineering to co-host this landmark international event in Odisha, India.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div style={{ marginTop: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>IPN's Contribution to ICEEA-ICETS</h2>
            <p style={{ color: "#64748b", fontSize: "1rem", margin: 0 }}>Decades of environmental research and international collaboration</p>
          </div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {pillars.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={springItem} whileHover={{ y: -6, boxShadow: "0 14px 34px rgba(0,0,0,0.14)" }} style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 2px 16px rgba(0,0,0,.06)", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partnership Banner */}
        <div style={{ marginTop: 64, display: "flex", flexWrap: "wrap" as const, gap: 20 }}>
          <div style={{ flex: "1 1 200px", background: "linear-gradient(135deg,#1a0520,#7f1d1d)", borderRadius: 20, padding: "36px 28px", textAlign: "center" as const, color: "#fff" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 10 }}>🇲🇽</div>
            <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: 6 }}>IPN México</div>
            <div style={{ color: "#fca5a5", fontSize: "0.85rem" }}>Mexico City, México</div>
            <div style={{ marginTop: 12, color: "#94a3b8", fontSize: "0.85rem" }}>Founded 1936 · 216,000+ Students</div>
          </div>
          <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ background: "#e2e8f0", borderRadius: 9999, padding: "8px 20px", fontSize: "0.85rem", fontWeight: 700, color: "#64748b" }}>×</div>
          </div>
          <div style={{ flex: "1 1 200px", background: "linear-gradient(135deg,#062b1a,#064e3b)", borderRadius: 20, padding: "36px 28px", textAlign: "center" as const, color: "#fff" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 10 }}>🇮🇳</div>
            <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: 6 }}>CUTM India</div>
            <div style={{ color: "#6ee7b7", fontSize: "0.85rem" }}>Paralakhemundi, Odisha</div>
            <div style={{ marginTop: 12, color: "#94a3b8", fontSize: "0.85rem" }}>Host of ICEEA-ICETS 2027</div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 72, background: "linear-gradient(135deg,#7f1d1d,#0f172a)", borderRadius: 24, padding: "48px 36px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(239,68,68,.08)", pointerEvents: "none" }} />
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", margin: "0 0 12px", position: "relative" }}>Explore the International Partnership</h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", margin: "0 0 28px", position: "relative" }}>ICEEA-ICETS 2027 — where Mexico and India unite for global environmental science.</p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, justifyContent: "center", gap: 12, position: "relative" }}>
            <motion.a href="https://www.ipn.mx/" target="_blank" rel="noreferrer" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg,#ef4444,#b91c1c)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>
              Visit IPN Website
            </motion.a>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#e2e8f0", fontWeight: 600, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

