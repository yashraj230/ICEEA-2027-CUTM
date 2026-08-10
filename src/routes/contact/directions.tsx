import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../../lib/motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/contact/directions")({
  head: () => ({
    meta: [
      { title: "Directions & Map | ICEEA - ICETS 2027" },
    ],
  }),
  component: DirectionsPage,
});

const highlights = [
  { icon: "🏔️", title: "Mahendragiri Hills", desc: "Second-highest peak in Odisha (1,501 m), part of the Eastern Ghats. A biodiversity hotspot with mythological significance linked to the Pandavas." },
  { icon: "🌿", title: "Rich Tribal Heritage", desc: "Home to the Saura, Kandha, and Gond communities — known for traditional ikat weaving, tribal art, and centuries-old customs." },
  { icon: "🏛️", title: "Historic Capital", desc: "Paralakhemundi served as the capital of the Gajapati Kingdom. The district is named after Maharaja Krushna Chandra Gajapati." },
  { icon: "🌊", title: "Scenic Waterfalls", desc: "The region is dotted with pristine waterfalls like Devkund, Khasada, and Sanaghagara — popular destinations for nature lovers." },
  { icon: "🍍", title: "Pineapple & Cashew Belt", desc: "Gajapati is known for its abundant pineapple and cashew cultivation, contributing significantly to Odisha's horticulture." },
  { icon: "🦋", title: "Eastern Ghats Biodiversity", desc: "Lush forests, rare medicinal plants, and diverse wildlife make this one of Odisha's most ecologically rich districts." },
];

const galleryImages = [
  { src: "https://cutm.ac.in/wp-content/uploads/2024/07/Auditorium-2-300x202-1.jpg", alt: "Centurion University Auditorium", caption: "University Auditorium" },
  { src: "https://cutm.ac.in/wp-content/uploads/2024/07/Gymnasium-350x250-1.jpeg", alt: "Centurion University Gymnasium", caption: "Gymnasium" },
  { src: "https://cutm.ac.in/wp-content/uploads/2024/06/i-gallery-img-1.png", alt: "Centurion University Campus", caption: "Campus View" },
  { src: "https://cutm.ac.in/wp-content/uploads/2024/06/i-gallery-img-2.png", alt: "Centurion University Campus", caption: "Campus View" },
  { src: "https://cutm.ac.in/wp-content/uploads/2024/06/i-gallery-img-3.png", alt: "Centurion University Campus", caption: "Campus View" },
  { src: "https://cutm.ac.in/wp-content/uploads/2024/06/i-gallery-img-4.png", alt: "Centurion University Campus", caption: "Campus View" },
];

const travelModes = [
  {
    icon: "🚂",
    title: "By Train",
    color: "#f59e0b",
    bg: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
    details: [
      { label: "Distance", value: "~305 km" },
      { label: "Duration", value: "5 hr 40 min – 6 hr" },
      { label: "Key Service", value: "RAJYARANI EXP (18117) — daily at 06:05 hrs. Express trains via nearby junctions." },
      { label: "Fare", value: "₹180 – ₹210" },
    ],
  },
  {
    icon: "🚌",
    title: "By Bus",
    color: "#059669",
    bg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
    details: [
      { label: "Distance", value: "~284 km" },
      { label: "Duration", value: "7 hr – 7 hr 45 min" },
      { label: "Boarding", value: "Baramunda Bus Terminus, Bhubaneswar → Paralakhemundi Bus Stand. Evening departures 8:30–9:20 PM." },
      { label: "Fare", value: "₹529 – ₹760" },
    ],
  },
  {
    icon: "🚗",
    title: "By Car / Taxi",
    color: "#16a34a",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    details: [
      { label: "Distance", value: "~281 km" },
      { label: "Duration", value: "~4 hr" },
      { label: "Route", value: "Via NH16 southward — most direct road link to Paralakhemundi." },
      { label: "Cost", value: "~₹1,850" },
    ],
  },
];

function DirectionsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{
        background: "linear-gradient(135deg, #052e1f 0%, #065f46 50%, #031810 100%)",
        padding: "80px 24px 100px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.12),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.08),transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <span style={{ display: "inline-block", background: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)", color: "#6ee7b7", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", padding: "6px 18px", borderRadius: 9999, marginBottom: 20 }}>ICEEA · ICETS 2027</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: "0 0 12px" }}>
            Directions &{" "}
            <span style={{ background: "linear-gradient(90deg,#34d399,#a3e635)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Map</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            Centurion University of Technology and Management · Paralakhemundi, Gajapati, Odisha
          </p>
        </div>
      </motion.section>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        style={{ maxWidth: 1000, margin: "-40px auto 0", padding: "0 24px 60px", position: "relative", zIndex: 2 }}
      >

        {/* Map */}
        <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", marginBottom: 40 }}>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Centurion+University+of+Technology+and+Management+Paralakhemundi+Gajapati+Odisha&zoom=15"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Centurion University, Paralakhemundi"
          />
          <div style={{ padding: "16px 24px", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#64748b" }}>
            <span style={{ fontSize: "1.1rem" }}>📍</span>
            Centurion University of Technology and Management, Paralakhemundi, Gajapati District, Odisha
          </div>
        </div>

        {/* About the University */}
        <div style={{
          background: "linear-gradient(135deg, #031810 0%, #065f46 100%)",
          borderRadius: 20,
          padding: "36px 32px",
          marginBottom: 40,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,211,153,0.1),transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap", position: "relative" }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(52,211,153,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", flexShrink: 0 }}>🎓</div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>Centurion University of Technology and Management</h2>
              <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
                Centurion University is a multi-disciplinary UGC-recognized university with its main campus in Paralakhemundi, Odisha. Known for its industry-integrated education model and strong focus on skill-based learning, the university has consistently been ranked among India's top private universities. The campus is set against the scenic backdrop of the Eastern Ghats, offering a serene and focused academic environment.
              </p>
            </div>
          </div>
        </div>

        {/* Campus Gallery */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 4, height: 32, borderRadius: 4, background: "linear-gradient(180deg,#047857,#34d399)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Campus <span style={{ background: "linear-gradient(90deg,#047857,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Gallery</span>
            </h2>
          </div>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {galleryImages.map((img) => (
              <motion.figure key={img.src} variants={springItem} style={{
                margin: 0,
                background: "#fff",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid #e2e8f0",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: "100%", height: 190, objectFit: "cover", display: "block" }} />
                <figcaption style={{ padding: "10px 16px", fontSize: "0.85rem", fontWeight: 600, color: "#334155" }}>{img.caption}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>

        {/* About Gajapati District */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 4, height: 32, borderRadius: 4, background: "linear-gradient(180deg,#047857,#34d399)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              About <span style={{ background: "linear-gradient(90deg,#047857,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Gajapati District</span>
            </h2>
          </div>
          <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.7, marginBottom: 24 }}>
            Named after the former king of Paralakhemundi, Maharaja Krushna Chandra Gajapati, this district in southern Odisha is one of the state's most picturesque regions. Nestled in the Eastern Ghats, it offers a unique blend of natural beauty, tribal culture, and historical significance.
          </p>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {highlights.map((h) => (
              <motion.div key={h.title} variants={springItem} style={{
                background: "#fff",
                borderRadius: 14,
                padding: "20px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid #e2e8f0",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{h.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>{h.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Travelling from Bhubaneswar */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 4, height: 32, borderRadius: 4, background: "linear-gradient(180deg,#047857,#34d399)", flexShrink: 0 }} />
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
              Travelling from <span style={{ background: "linear-gradient(90deg,#047857,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bhubaneswar</span>
            </h2>
          </div>
          <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.7, marginBottom: 24 }}>
            Bhubaneswar to Paralakhemundi covers roughly 280–305 km. Three main travel options are available depending on your budget and schedule.
          </p>
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {travelModes.map((mode) => (
              <motion.div key={mode.title} variants={springItem} style={{
                background: mode.bg,
                borderRadius: 16,
                padding: "24px",
                border: "1px solid rgba(0,0,0,0.04)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: mode.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                    {mode.icon}
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: mode.color, margin: 0 }}>{mode.title}</h3>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {mode.details.map((d) => (
                    <div key={d.label}>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 1 }}>{d.label}</div>
                      <div style={{ fontSize: "0.88rem", fontWeight: d.label === "Fare" || d.label === "Cost" ? 700 : 500, color: d.label === "Fare" || d.label === "Cost" ? "#059669" : "#0f172a", lineHeight: 1.5 }}>{d.value}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, #047857, #065f46)",
            color: "#fff", fontWeight: 600, fontSize: 14,
            padding: "14px 32px", borderRadius: 9999,
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(4,120,87,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(4,120,87,0.4)"; }}
            onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(4,120,87,0.3)"; }}
          >
            ← Back to Home
          </MotionLink>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
