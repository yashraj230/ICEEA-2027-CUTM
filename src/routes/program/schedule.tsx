import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, MotionLink, viewportOnce } from "../../lib/motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/program/schedule")({
  head: () => ({
    meta: [
      { title: "Conference Schedule | ICSEECA - ICETS 2027" },
      { name: "description", content: "Day-by-day program for ICSEECA-ICETS 2027 — November 8-12, 2027 at Centurion University, Paralakhemundi, Odisha" },
    ],
  }),
  component: SchedulePage,
});

type Session = {
  time: string;
  title: string;
  venue: string;
  tag: string;
  speaker?: string;
  note?: string;
};

type Day = {
  id: number;
  date: string;
  theme: string;
  color: string;
  icon: string;
  sessions: Session[];
};

const schedule: Day[] = [
  {
    id: 1,
    date: "8th November 2027",
    theme: "Inauguration & Keynote Day",
    color: "#059669",
    icon: "🎉",
    sessions: [
      { time: "08:00 – 09:30", title: "Registration & Welcome Kit Distribution", venue: "Main Foyer, Convention Centre", tag: "Registration", note: "Delegates collect their badges, conference kits and programme booklets." },
      { time: "09:30 – 10:30", title: "Inaugural Ceremony", venue: "Main Auditorium", tag: "Ceremony", note: "Welcome address, lamp lighting, release of the Conference Souvenir and inaugural address by the Chief Guest." },
      { time: "10:30 – 11:15", title: "Keynote Lecture – Climate Change and Global Sustainability", venue: "Main Auditorium", tag: "Keynote", speaker: "Prof. R.R. Biradar", note: "Distinguished keynote address framing the conference theme for all delegates." },
      { time: "11:15 – 11:45", title: "Tea Break & Networking", venue: "Exhibition Hall", tag: "Break", note: "Visit partner exhibitions and poster display areas." },
      { time: "11:45 – 13:00", title: "Plenary Session – Earth Systems in the Anthropocene", venue: "Main Auditorium", tag: "Plenary", note: "Invited plenary talks by international experts on Earth system transitions." },
      { time: "13:00 – 14:00", title: "Lunch", venue: "University Dining Hall", tag: "Break" },
      { time: "14:00 – 16:00", title: "Technical Session I – Geology, Hydrology & Water Systems", venue: "Hall A & Hall B", tag: "Technical", note: "Parallel oral presentations across Themes 1, 2 and 3." },
      { time: "16:00 – 16:30", title: "Tea Break", venue: "Exhibition Hall", tag: "Break" },
      { time: "16:30 – 18:00", title: "Poster Session I", venue: "Exhibition Hall", tag: "Poster", note: "Poster presentations on marine, coastal and applied Earth sciences." },
      { time: "19:00 onwards", title: "Cultural Evening", venue: "University Amphitheatre", tag: "Social", note: "Cultural performances by students and regional artists." },
    ],
  },
  {
    id: 2,
    date: "9th November 2027",
    theme: "Technical Sessions & Panel Discussion",
    color: "#10b981",
    icon: "🔬",
    sessions: [
      { time: "09:00 – 10:30", title: "Keynote Lectures – International Perspectives", venue: "Main Auditorium", tag: "Keynote", speaker: "Dr. Arturo Reyes Sandoval", note: "Keynotes on interdisciplinary environmental research and biodiversity conservation." },
      { time: "10:30 – 11:00", title: "Tea Break", venue: "Exhibition Hall", tag: "Break" },
      { time: "11:00 – 13:00", title: "Technical Session II – Technology & Applied Earth Sciences", venue: "Hall A & Hall B", tag: "Technical", note: "Parallel sessions on AI, remote sensing, hydraulics and geo-intelligence models." },
      { time: "13:00 – 14:00", title: "Lunch", venue: "University Dining Hall", tag: "Break" },
      { time: "14:00 – 16:00", title: "Technical Session III – Sustainability, Governance & Green Development", venue: "Hall A & Hall B", tag: "Technical", note: "Parallel presentations on disaster management, green finance and environmental policy." },
      { time: "16:00 – 16:30", title: "Tea Break", venue: "Exhibition Hall", tag: "Break" },
      { time: "16:30 – 18:00", title: "Panel Discussion – Net-Zero Pathways for the Global South", venue: "Main Auditorium", tag: "Panel", note: "Cross-disciplinary panel with international and Indian experts, followed by Q&A." },
      { time: "19:00 onwards", title: "Conference Dinner", venue: "University Dining Hall", tag: "Social" },
    ],
  },
  {
    id: 3,
    date: "10th November 2027",
    theme: "Field Excursion & Valedictory",
    color: "#34d399",
    icon: "🏞️",
    sessions: [
      { time: "09:00 – 12:30", title: "Field Excursion & Geoheritage Walk", venue: "Paralakhemundi & Surrounding Catchments", tag: "Field Trip", note: "Guided field session on local geology, watershed and coastal hydrology." },
      { time: "12:30 – 14:00", title: "Lunch", venue: "University Dining Hall", tag: "Break" },
      { time: "14:00 – 16:00", title: "Valedictory & Concluding Session", venue: "Main Auditorium", tag: "Ceremony", note: "Session summaries, award announcements and closing remarks." },
      { time: "16:00 onwards", title: "High Tea & Departure", venue: "Main Foyer", tag: "Social", note: "Farewell refreshments and departure assistance for delegates." },
    ],
  },
];

function SchedulePage() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const day = schedule.find((d) => d.id === activeDay) ?? schedule[0];

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
  }, [activeDay]);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Hero */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #04281a 0%, #065f46 55%, #059669 100%)", padding: "70px 24px 110px", textAlign: "center" }}>
        <div style={{ position: "absolute", top: -80, right: -60, fontSize: "11rem", opacity: 0.08, animation: "floatSlow 6s ease-in-out infinite" }}>🗓️</div>
        <div style={{ position: "absolute", bottom: -50, left: -40, fontSize: "9rem", opacity: 0.08, animation: "floatSlow 7s ease-in-out infinite" }}>⏰</div>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#a7f3d0", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", padding: "8px 18px", borderRadius: 9999, marginBottom: 20 }}>PROGRAM OVERVIEW</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em", animation: "fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards" }}>
            Conference <span style={{ background: "linear-gradient(90deg,#6ee7b7,#a7f3d0,#6ee7b7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Schedule</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#d1fae5", fontWeight: 600, margin: "0 0 8px" }}>
            ICSEECA – ICETS 2027 · Centurion University of Technology and Management
          </p>
          <p style={{ fontSize: "0.95rem", color: "#a7f3d0", margin: "0 auto 28px", maxWidth: 620, lineHeight: 1.7 }}>
            Five days of inspiring keynotes, parallel technical sessions, poster presentations, field excursions and cultural evenings — all in the scenic Eastern Ghats of Odisha.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            {[
              { icon: "📅", label: "November 8 – 12, 2027" },
              { icon: "📍", label: "Paralakhemundi, Odisha" },
              { icon: "🎤", label: "40+ Sessions" },
            ].map((chip, i) => (
              <span key={chip.label} data-reveal="fade-up" className={`stagger-${i + 1}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", color: "#ecfdf5", fontSize: "0.85rem", fontWeight: 600, padding: "10px 18px", borderRadius: 9999 }}>
                <span>{chip.icon}</span> {chip.label}
              </span>
            ))}
          </div>
        </div>
        {/* Wave divider */}
        <svg style={{ position: "absolute", bottom: -2, left: 0, width: "100%", height: 60 }} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,32 C360,80 1080,-20 1440,32 L1440,60 L0,60 Z" fill="#f8fafc" />
        </svg>
      </motion.section>

      {/* Day selector */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ padding: "10px 24px 40px", position: "relative", zIndex: 2, marginTop: -10 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {schedule.map((d) => (
              <motion.button
                key={d.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveDay(d.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: activeDay === d.id ? d.color : "#fff",
                  color: activeDay === d.id ? "#fff" : "#334155",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "13px 22px",
                  borderRadius: 9999,
                  border: activeDay === d.id ? "none" : "1px solid #cbd5e1",
                  cursor: "pointer",
                  boxShadow: activeDay === d.id ? "0 8px 20px rgba(5,150,105,0.3)" : "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  transform: activeDay === d.id ? "translateY(-2px) scale(1.03)" : "none",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{d.icon}</span>
                <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.2 }}>
                  <span>Day {d.id}</span>
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, opacity: 0.85 }}>{d.date.split(" ")[0]} {d.date.split(" ")[1]} {d.date.split(" ")[2]}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Day heading */}
          <div data-reveal="fade-up" style={{ textAlign: "center", marginBottom: "36px" }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", fontWeight: 800, color: "#0f172a", margin: "0 0 8px" }}>
              Day {day.id} — <span style={{ color: day.color }}>{day.theme}</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0 }}>{day.date} · {day.sessions.length} sessions planned</p>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "22px", top: "10px", bottom: "10px", width: "3px", background: `linear-gradient(180deg, ${day.color}22, ${day.color}66, ${day.color}22)`, borderRadius: 9999 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {day.sessions.map((s, i) => (
                <div key={`${s.time}-${s.title}`} style={{ position: "relative" }}>
                  {/* Dot marker on the timeline */}
                  <div style={{ position: "absolute", left: "14px", top: "24px", width: "16px", height: "16px", borderRadius: "50%", background: day.color, border: "3px solid #f8fafc", boxShadow: `0 0 0 3px ${day.color}33`, zIndex: 1 }} />
                  <div
                    data-reveal="fade-up"
                    className={`stagger-${Math.min(i + 1, 8)}`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "16px",
                      background: "#fff",
                      borderRadius: 16,
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                      padding: "18px 20px",
                      marginLeft: "40px",
                      transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.09)";
                      e.currentTarget.style.borderColor = `${day.color}55`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.04)";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                  <div style={{ minWidth: "130px", flexShrink: 0 }}>
                    <span style={{ display: "inline-block", background: `${day.color}14`, color: day.color, fontWeight: 800, fontSize: "0.8rem", padding: "6px 12px", borderRadius: 8, whiteSpace: "nowrap" }}>🕐 {s.time}</span>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.4 }}>{s.title}</h3>
                      <span style={{ background: s.tag === "Break" ? "#f1f5f9" : day.color, color: s.tag === "Break" ? "#475569" : "#fff", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 9999 }}>{s.tag}</span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "0 0 6px", display: "flex", alignItems: "center", gap: 6 }}>
                      <span>📍</span> {s.venue}
                    </p>
                    {s.speaker && (
                      <p style={{ fontSize: "0.82rem", color: day.color, fontWeight: 700, margin: "0 0 6px" }}>
                        🎤 {s.speaker}
                      </p>
                    )}
                    {s.note && (
                      <p style={{ fontSize: "0.82rem", color: "#475569", margin: 0, lineHeight: 1.6 }}>{s.note}</p>
                    )}
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info callout */}
          <div data-reveal="fade-up" className="stagger-3" style={{ marginTop: "40px", background: "linear-gradient(135deg, #ecfdf5, #d1fae5)", border: "1px solid #a7f3d0", borderLeft: "5px solid #059669", borderRadius: 14, padding: "20px 24px" }}>
            <h4 style={{ margin: "0 0 6px", fontSize: "0.95rem", fontWeight: 800, color: "#065f46" }}>ℹ️ Please Note</h4>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "#047857", lineHeight: 1.7 }}>
              This schedule is provisional and will be finalised as confirmed sessions are added. All timings follow Indian Standard Time (IST). Please check this page regularly, and confirm your travel plans only after visa approval and registration.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s", boxShadow: "0 6px 16px rgba(5,150,105,0.3)" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
