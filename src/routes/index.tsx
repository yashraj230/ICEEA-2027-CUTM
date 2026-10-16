import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { RevealSection } from "../lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICSEECA - ICETS 2027 | International Conference on Sustainable Earth, Environment, and Climate Action" },
      {
        name: "description",
        content:
          "International Conference on Sustainable Earth, Environment, and Climate Action (ICSEECA) & 19th International Congress on Environmental & Territorial Studies (ICETS - 2027). November 8-12, 2027, Centurion University of Technology and Management, Paralakhemundi, Odisha - India.",
      },
      { property: "og:title", content: "ICSEECA - ICETS 2027" },
      {
        property: "og:description",
        content:
          "International Conference on Sustainable Earth, Environment, and Climate Action. Nov 8–12, 2027, Centurion University of Technology and Management, Paralakhemundi, Odisha - India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});



function Hero() {
  const images = [
    "/Home%20screen%20banner%20Image.png", // Home screen banner 1
    "/Home%20screen%20banner%20Image%202.png", // Home screen banner 2
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop", // Lush Sunlit Forest
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2560&auto=format&fit=crop", // Deep Evergreen Mist Forest
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2560&auto=format&fit=crop", // Earth Nature Mountains & Fog
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2560&auto=format&fit=crop", // Wilderness River Forest & Earth Environment
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-emerald-950">
      {/* Background Slides with Slow Zoom */}
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "animate-hero-zoom" : ""
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(2,44,34,.72), rgba(2,44,34,.72)), url('${img}')`,
            opacity: idx === currentIdx ? 1 : 0,
            zIndex: idx === currentIdx ? 1 : 0,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center text-white">
        <p className="text-2xl text-lime-300 font-semibold tracking-wide animate-fade-in-up">ICSEECA - ICETS 2027</p>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow animate-fade-in-up">
          International Conference on Sustainable Earth, Environment, and Climate Action
          <br />
          (ICSEECA)
        </h1>
        <p className="mt-4 text-2xl animate-fade-in-up">&amp;</p>
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow animate-fade-in-up">
          19th International Congress on Environmental &amp; Territorial Studies
          <br />
          (ICETS - 2027)
        </h2>
        {/* Main layout wrapper for info & side logos */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl mx-auto">
          {/* Left Side Logo - RIISPSURA */}
          <div className="flex-shrink-0 animate-fade-in-up md:w-32 flex justify-center">
            <div className="bg-white p-3 rounded-2xl border border-emerald-200 shadow-xl max-w-[140px] transition-transform duration-300 hover:scale-105">
              <img
                src="/RIISPSURA.jpeg"
                alt="RIISPSURA Logo"
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain mx-auto"
              />
              <p className="text-[10px] font-extrabold text-emerald-900 mt-1 uppercase text-center tracking-wider">RIISPSURA</p>
            </div>
          </div>

          {/* Center Organised by block */}
          <div className="flex-1 flex flex-col items-center">
            <div className="inline-block rounded-full bg-lime-400 px-8 py-3 text-emerald-950 font-bold text-lg shadow-lg animate-float">
              Organised by
            </div>
            
            {/* CUTM Full Campus Image Badge */}
            <div className="mt-4 flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/95 backdrop-blur-md p-3 sm:pr-6 rounded-2xl shadow-2xl border border-emerald-300/50 text-slate-900 max-w-2xl mx-auto transition-all duration-300 hover:scale-[1.03] hover:shadow-emerald-500/20">
                <img
                  src="/Centurion%20University%20Full%20Image..png"
                  alt="Centurion University Campus"
                  className="h-28 w-44 object-cover rounded-xl flex-shrink-0 shadow-md"
                />
                <div className="text-center sm:text-left">
                  <p className="text-lg font-extrabold text-emerald-950 leading-tight">
                    Centurion University of Technology and Management
                  </p>
                  <p className="text-xs font-semibold text-emerald-700 mt-1">Paralakhemundi, Odisha - India</p>
                </div>
              </div>
              <p className="text-base font-semibold text-emerald-100 mt-1 text-center max-w-lg">
                Department of Civil Engineering, School of Engineering and Technology
              </p>
              <img
                src="/cutm-naac-a-plus-image.jpeg"
                alt="NAAC A+ Grade — Centurion University of Technology and Management"
                className="mt-3 h-24 sm:h-28 w-auto object-contain rounded-xl shadow-2xl ring-2 ring-white/70 bg-white/95 backdrop-blur-md px-4 py-3 transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>
          </div>

          {/* Right Side Logos - IPN and REMA */}
          <div className="flex-shrink-0 flex flex-row md:flex-col gap-4 animate-fade-in-up md:w-32 justify-center items-center">
            {/* IPN Logo */}
            <div className="bg-white p-3 rounded-2xl border border-emerald-200 shadow-xl max-w-[120px] transition-transform duration-300 hover:scale-105">
              <img
                src="/IPN.png"
                alt="IPN Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain mx-auto"
              />
              <p className="text-[10px] font-extrabold text-emerald-900 mt-1 uppercase text-center tracking-wider">IPN</p>
            </div>
            {/* REMA Logo */}
            <div className="bg-white p-3 rounded-2xl border border-emerald-200 shadow-xl max-w-[120px] transition-transform duration-300 hover:scale-105">
              <img
                src="/REMA.jpeg"
                alt="REMA Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain mx-auto"
              />
              <p className="text-[10px] font-extrabold text-emerald-800 mt-1 uppercase text-center tracking-wider">REMA</p>
            </div>
          </div>
        </div>

        <div className="mt-8 inline-block rounded-full bg-lime-300 px-8 py-3 text-emerald-950 font-bold text-lg shadow-md">
          In association with
        </div>
        <p className="mt-3 text-lg px-4 max-w-3xl mx-auto">
          Center for Interdisciplinary Studies on Environment and Development (CIIEMAD)
        </p>
        <p className="font-bold text-lg px-4">National Polytechnic Institute (IPN), Mexico City</p>

        <div className="mt-6 inline-block rounded-full bg-lime-300 px-8 py-3 text-emerald-950 font-bold text-lg shadow-md">
          8<sup>th</sup> – 12<sup>th</sup> November 2027
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd2pIc4oUaXXp9q28ZuUSGuKamIgBzWmZPntRzqFY614VvlDQ/viewform"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-emerald-600 to-lime-600 px-7 py-3.5 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 shimmer-btn"
          >
            Register &amp; Submit Abstract
          </motion.a>
          <motion.a
            href="https://forms.gle/WZW2CrWhMZet1wep8"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-white px-7 py-3.5 font-bold text-slate-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-100"
          >
            Registration Fee
          </motion.a>
          <motion.a
            href="#"
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-r from-emerald-800 to-green-800 px-7 py-3.5 font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-emerald-800/40 shimmer-btn"
          >
            Download Brochure
          </motion.a>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              whileTap={{ scale: 0.75 }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIdx ? "w-8 bg-lime-400" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const dates = [
  {
    icon: "🚀",
    label: "SUBMISSION OPEN",
    title: "Abstract Submission Starts",
    date: "01 April 2027",
    gradient: "from-emerald-500 to-green-600",
    bg: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    icon: "⏰",
    label: "DEADLINE",
    title: "Last Date of Abstract Submission",
    date: "30 June 2027",
    gradient: "from-lime-500 to-emerald-600",
    bg: "from-lime-50 to-emerald-50",
    border: "border-lime-200",
    badge: "bg-lime-100 text-lime-700",
    dot: "bg-lime-500",
  },
  {
    icon: "📬",
    label: "NOTIFICATION",
    title: "Acceptance Notification",
    date: "15 August 2027",
    gradient: "from-teal-500 to-emerald-600",
    bg: "from-teal-50 to-emerald-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-500",
  },
  {
    icon: "📄",
    label: "DEADLINE",
    title: "Last Date of Full Paper Submission",
    date: "30 August 2027",
    gradient: "from-green-600 to-emerald-700",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-600",
  },
  {
    icon: "💳",
    label: "REGISTRATION",
    title: "Last Date of Registration (Along with payment)",
    date: "7 October 2027",
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    icon: "🎓",
    label: "MAIN EVENT",
    title: "Conference Dates",
    date: "8ᵗʰ – 12ᵗʰ November 2027",
    gradient: "from-green-500 to-emerald-700",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-600",
  },
  {
    icon: "🚌",
    label: "EXCURSION",
    title: "Field Trip",
    date: "11ᵗʰ – 12ᵗʰ November 2027",
    gradient: "from-lime-500 to-green-600",
    bg: "from-lime-50 to-green-50",
    border: "border-lime-200",
    badge: "bg-lime-100 text-lime-700",
    dot: "bg-lime-500",
  },
  {
    icon: "📍",
    label: "VENUE",
    title: "Venue",
    date: "Auditorium, Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
    gradient: "from-teal-500 to-emerald-700",
    bg: "from-teal-50 to-emerald-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    dot: "bg-teal-500",
  },
];

function ImportantDates() {
  return (
    <RevealSection
      id="dates"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f0fdf4 45%, #ecfdf5 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-80px", left: "-80px",
        width: "320px", height: "320px",
        background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-100px", right: "-80px",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(132,204,22,0.1) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div className="mx-auto max-w-6xl px-4" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div data-reveal="fade-up" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #059669, #16a34a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            CONFERENCE TIMELINE
          </span>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 800,
            color: "#064e3b",
            margin: 0,
            lineHeight: 1.15,
          }}>
            Important <span style={{
              background: "linear-gradient(90deg, #10b981, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Dates</span>
          </h2>
          <p style={{ color: "#475569", marginTop: "12px", fontSize: "1rem" }}>
            Mark your calendar — key milestones for ICEEA-ICETS 2027
          </p>
          <div style={{
            display: "flex", justifyContent: "center", marginTop: "16px",
          }}>
            <div style={{
              height: "3px", width: "80px",
              background: "linear-gradient(90deg, #10b981, #4ade80)",
              borderRadius: "9999px",
            }} />
          </div>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {dates.map(({ icon, label, title, date, gradient, bg, border, badge, dot }, i) => (
            <div
              key={title}
              data-reveal="fade-up"
              className={`stagger-${Math.min(i + 1, 8)}`}
              style={{
                background: "#ffffff",
                border: "1px solid #d1fae5",
                borderRadius: "16px",
                padding: "0",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(16,185,129,0.08)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(16,185,129,0.18)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(16,185,129,0.08)";
              }}
            >
              {/* Top accent bar */}
              <div style={{
                height: "4px",
                backgroundImage: `linear-gradient(90deg, ${
                  gradient.includes("lime") ? "#84cc16, #16a34a" :
                  gradient.includes("teal") ? "#14b8a6, #059669" :
                  gradient.includes("green") ? "#22c55e, #047857" :
                  "#10b981, #047857"
                })`,
              }} />

              <div style={{ padding: "22px 22px 24px" }}>
                {/* Badge row */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <span style={{
                    fontSize: "20px",
                    lineHeight: 1,
                  }}>{icon}</span>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    padding: "3px 8px",
                    borderRadius: "9999px",
                    backgroundColor: "#ecfdf5",
                    color: "#047857",
                    border: "1px solid #a7f3d0",
                  }}>{label}</span>
                </div>

                {/* Title */}
                <div style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#064e3b",
                  lineHeight: 1.4,
                  marginBottom: "12px",
                }}>
                  {title}
                </div>

                {/* Divider */}
                <div style={{
                  height: "1px",
                  background: "#d1fae5",
                  marginBottom: "12px",
                }} />

                {/* Date / value with dot */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    flexShrink: 0, marginTop: "5px",
                    backgroundImage: `linear-gradient(135deg, ${
                      gradient.includes("lime") ? "#a3e635, #4d7c0f" :
                      gradient.includes("teal") ? "#2dd4bf, #0f766e" :
                      gradient.includes("green") ? "#4ade80, #166534" :
                      "#34d399, #065f46"
                    })`,
                    boxShadow: `0 0 8px ${
                      gradient.includes("lime") ? "rgba(132,204,22,0.6)" :
                      gradient.includes("teal") ? "rgba(20,184,166,0.6)" :
                      gradient.includes("green") ? "rgba(34,197,94,0.6)" :
                      "rgba(16,185,129,0.6)"
                    }`,
                  }} />
                  <span style={{
                    fontSize: "0.83rem",
                    color: "#334155",
                    lineHeight: 1.5,
                  }}>{date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

type AnnouncementItem = { icon: string; text: string; color: string; label: string };
const announcements: AnnouncementItem[] = [
  { icon: "🚀", text: "Abstract Submission Starts: April 1, 2027", color: "from-emerald-500 to-green-600", label: "OPEN" },
  { icon: "⏰", text: "Last Date of Abstract Submission: June 30, 2027", color: "from-lime-500 to-emerald-600", label: "DEADLINE" },
  { icon: "📬", text: "Acceptance Notification: August 15, 2027", color: "from-teal-500 to-emerald-600", label: "NOTIFICATION" },
  { icon: "📄", text: "Last Date of Full Paper Submission: August 30, 2027", color: "from-green-600 to-emerald-700", label: "DEADLINE" },
  { icon: "💳", text: "Last Date of Registration (Along with Payment): October 7, 2027", color: "from-emerald-600 to-teal-600", label: "REGISTRATION" },
  { icon: "🎓", text: "Conference Dates: November 8-12, 2027", color: "from-green-500 to-emerald-700", label: "MAIN EVENT" },
  { icon: "🚌", text: "Field Trip: November 11-12, 2027", color: "from-lime-500 to-green-600", label: "EXCURSION" },
  { icon: "📍", text: "Venue: Auditorium, Centurion University of Technology and Management, Paralakhemundi, Odisha - India", color: "from-teal-500 to-emerald-700", label: "VENUE" },
  { icon: "🏆", text: "Best Paper Awards & Recognition", color: "from-emerald-500 to-lime-600", label: "AWARDS" },
];

function Announcements() {
  return (
    <RevealSection className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-950 to-emerald-900 py-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-500/10 to-green-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-lime-500/10 to-emerald-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div data-reveal="fade-up" className="text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[3px] text-lime-300 uppercase backdrop-blur-sm border border-white/10">
            Latest Updates
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Announcements
          </h2>
          <p className="mt-2 text-emerald-200/70">
            Key dates and updates for ICEEA-ICETS 2027
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((a, i) => {
            const [from, to] = a.color.split(" to ");
            return (
              <div
                key={a.text}
                data-reveal="fade-up"
                className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 stagger-${Math.min(i + 1, 8)}`}
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* Top accent gradient */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.color}`} />

                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${a.color} text-lg shadow-lg`}>
                    {a.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className={`inline-block rounded-full bg-gradient-to-r ${a.color} px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase`}>
                      {a.label}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {a.text}
                    </p>
                  </div>
                </div>

                {/* Hover shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

function About() {
  return (
    <RevealSection id="about" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl font-bold text-emerald-900">
          About ICSEECA - ICETS 2027
        </h2>
        <div data-reveal="fade-up" className="mt-8 space-y-5 text-slate-700 leading-relaxed">
          <p>
            ICSEECA -2027 aims to bring together researchers, academicians, environmentalists,
            policymakers, and industry leaders to address complex Earth and environmental
            challenges emerging during the Anthropocene epoch. The conference promotes
            interdisciplinary dialogue focusing on climate change, sustainability, natural
            resources, geosciences, environmental degradation, and advanced technological
            solutions.
          </p>
          <p>
            ICETS is an internationally recognized congress focusing on environmental and
            territorial studies. The 19th edition continues its mission to build scientific
            collaborations between nations for sustainable environmental governance and
            resilient socio-ecological systems.
          </p>
        </div>

        {/* Primary Objectives */}
        <div data-reveal="fade-up" className="mt-10">
          <h3 className="text-xl font-semibold text-emerald-900 text-center">Primary Objectives</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💡", text: "Share groundbreaking research and transformative ideas" },
              { icon: "🤝", text: "Establish prolific partnerships across academic, scientific, and industrial sectors" },
              { icon: "🔗", text: "Bridge the gap between theoretical knowledge and practical application" },
              { icon: "🌐", text: "Create long-term global networks that drive impactful research and sustainable innovation" },
              { icon: "📡", text: "Gain exposure to cutting-edge technologies, methodologies, and international best practices" },
            ].map(({ icon, text }, i) => (
              <div key={text} data-reveal="fade-up" className={`flex items-start gap-3 rounded-lg border border-emerald-100 bg-emerald-50 p-4 card-hover stagger-${i + 1}`}>
                <span className="mt-0.5 text-xl">{icon}</span>
                <p className="text-sm text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="scale-in" className="mt-10 rounded-lg border border-emerald-100 bg-emerald-50 p-6 card-hover">
          <h3 className="text-xl font-semibold text-emerald-900">Conference Goals</h3>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-slate-700">
            <li>Address global environmental challenges of the Anthropocene</li>
            <li>Strengthen international collaboration in Earth and environmental sciences</li>
            <li>Promote sustainable development and geo-environmental solutions</li>
            <li>Integrate geoscience, environmental policy, and technology</li>
            <li>
              Exchange cutting-edge research in climate change, geology, biodiversity, energy,
              and territorial studies
            </li>
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}

const themes = [
  {
    icon: "🌍",
    tag: "MAIN THEME 1",
    title: "Geology & Earth Materials",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    areas: [
      "Hydrology (River Basin & Watershed Processes)",
      "Groundwater (Aquifer Systems, Recharge & Sustainability)",
      "Fluvial evolution and climate-driven hydrology",
      "Earth System History & Anthropocene transitions",
      "Critical and strategic minerals, REE and battery metals",
      "Petrology, deep Earth processes and isotopic geochemistry",
      "Geoheritage, Cultural & Historical Value",
      "Geotourism and Community-Based Benefits",
      "Integration with Biodiversity & Cultural Tourism",
      "Medical geology",
    ],
  },
  {
    icon: "♻️",
    tag: "MAIN THEME 2",
    title: "Geo-Environmental Science & Sustainability",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    areas: [
      "Climate extremes, multi-hazards and Earth system crises",
      "Sustainable resource governance and nature-based solutions",
      "Environmental impact assessment and ESG analytics",
      "Pollution, waste management, and ecological restoration",
      "Environmental policies and regulations",
      "Carbon cycle research and sequestration",
      "Net-zero pathways and climate action",
      "Disaster Management & Litigation",
    ],
  },
  {
    icon: "🌊",
    tag: "MAIN THEME 3",
    title: "Marine Geo-Science & Coastal Systems",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    areas: [
      "Marine ecosystem change and coastal vulnerability",
      "Marine sediments, microfossils and paleoclimate archives",
      "Continental-margin processes and marine geohazards",
      "Blue-economy strategies and sustainable resource use",
      "Coastal zone management and shoreline dynamics",
      "Climate resilience for coastal communities",
      "Coastal Hydrology & Water Dynamics",
    ],
  },
  {
    icon: "💻",
    tag: "MAIN THEME 4",
    title: "Technological & Applied Earth Sciences",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    areas: [
      "Irrigation & Drainage Systems",
      "Hydraulics (Flow Mechanics, Canal and River Engineering)",
      "Design and Construction Methodology & Technology (Water Infrastructure)",
      "Digital Earth: AI, Machine Learning, and remote sensing",
      "Quantum Nexus & computing in Earth sciences",
      "Geo-intelligence models and predictive analytics",
      "Quantum-enhanced environmental monitoring",
      "Big Data analytics for climate modeling",
      "Sustainable subsurface resources and green mining",
      "Energy-transition resource security",
      "Climate resilience for food, water and cities",
      "Applied microfossils for industry and sea-level studies",
    ],
  },
  {
    icon: "🏛️",
    tag: "MAIN THEME 5",
    title: "Political & Social Dimensions of Environment",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    areas: [
      "Water management, Pricing and Economics",
      "Water and Social Dimensions (Equity, Gender Issues)",
      "World cities against the socio-environmental phenomena",
      "Crisis related to production and consumption of matter, energy and information",
      "Role of Universities in the creation of Science and Technology",
      "Social movements facing global warming, climate change and alternatives",
      "Nature in modified way Social and Political Challenges to Science and Society on Green Environment",
      "Environmental Sociology and Environmental impacts on Human Beings",
      "AI in political & social sciences for future",
    ],
  },
  {
    icon: "🌱",
    tag: "MAIN THEME 6",
    title: "Disaster Management, Environmental Sustainability, Governance & Green Development",
    img: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop",
    areas: [
      "Water Law, Conflicts & Governance",
      "Flood & Drought Risk Management (Hydrology-based Hazards)",
      "Climate change & Adaptation",
      "Green Finance & Carbon Markets",
      "Renewable Energy & Green Technology",
      "Environment Policy & Governance",
      "Sustainable Resource Management",
    ],
  },
];

function Themes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visibleCount = 5;

  return (
    <RevealSection id="themes" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl md:text-4xl font-bold text-emerald-900">
          Conference Themes
        </h2>
        <p data-reveal="fade-up" className="mt-2 text-center text-slate-600">
          Exploring Critical Challenges and Innovative Solutions for Our Planet's Future
        </p>
        <p data-reveal="fade-up" className="mt-1 text-center text-sm font-semibold text-emerald-700">
          ICEEA - ICETS - 2027
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => {
            const isOpen = openIndex === i;
            const visible = t.areas.slice(0, visibleCount);
            const hidden = t.areas.slice(visibleCount);
            return (
              <div
                key={t.title}
                data-reveal="fade-up"
                className={`overflow-hidden rounded-xl bg-white shadow-md transition card-hover stagger-${Math.min(i + 1, 8)}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={t.img} alt={t.title} className="h-full w-full object-cover" />
                  <div className="absolute top-3 left-3 rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white">
                    {t.tag}
                  </div>
                  <div className="absolute top-3 right-3 text-3xl">{t.icon}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-emerald-900">{t.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-slate-700">Research Areas:</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    {visible.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                  {hidden.length > 0 && (
                    <div
                      className="grid transition-all duration-500 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-1 pt-1 text-sm text-slate-600">
                          {hidden.map((a) => (
                            <li key={a}>• {a}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {hidden.length > 0 && (
                    <motion.button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      whileTap={{ scale: 0.95 }}
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 transition hover:bg-emerald-100 active:scale-95"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Show Less" : `Show More (${hidden.length} more)`}
                      <span
                        className={`text-emerald-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </motion.button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

function DatesTable() {
  const rows: [string, string][] = [
    ["Abstract submission starts", "01.04.2027"],
    ["Last date of Submission of Abstract", "30.06.2027"],
    ["Acceptance Notification Issued", "15.08.2027"],
    ["Last date of Full paper submission", "30.08.2027"],
    ["Last Date of Registration (Along with payment)", "07.10.2027"],
    ["Conference dates", "8th – 12th November, 2027"],
  ];
  return (
    <RevealSection className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl font-bold text-emerald-900">
          Important Dates to Remember
        </h2>
        <div data-reveal="fade-up" className="mt-8 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-emerald-700 text-white">
              <tr>
                <th className="p-3">Event</th>
                <th className="p-3">Important Dates</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([e, d], i) => (
                <tr key={e} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="p-3">{e}</td>
                  <td className="p-3">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </RevealSection>
  );
}

function Fees() {
  const bank: [string, string][] = [
    ["Bank Name", "To be announced"],
    ["Bank Address", "Paralakhemundi, Odisha, India"],
    ["Account Name", "Centurion University of Technology and Management"],
    ["Details", "Available in the official registration portal"],
  ];
  const fees: [string, string, string][] = [
    ["Foreign Delegates (Teachers, Researchers, Scientists, Professors)", "US$ 300.00", "US$ 350.00"],
    ["Foreign Delegates (Students)", "US$ 100.00", "US$ 150.00"],
    ["Accompanying Guest (International)", "US$ 100.00", "US$ 125.00"],
    ["Indian Delegates (Teachers, Researchers, Scientists, and Professors)", "INR ₹4000.00", "INR ₹4500.00"],
    ["Research Scholars", "INR ₹2000.00", "INR ₹2500.00"],
    ["Indian Delegates (Students)", "INR ₹1000.00", "INR ₹1500.00"],
    ["Accompanying Guest (National)", "INR ₹1000.00", "INR ₹1500.00"],
  ];
  return (
    <RevealSection id="fees" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 space-y-12">
        <div data-reveal="fade-up">
          <h2 className="text-center text-3xl font-bold text-emerald-900">
            Bank Account Details for Payment
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border">
            <table className="w-full bg-white">
              <tbody>
                {bank.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-slate-50" : ""}>
                    <td className="p-3 font-semibold w-1/3">{k}</td>
                    <td className="p-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div data-reveal="fade-up">
          <h2 className="text-center text-3xl font-bold text-emerald-900">
            💳 Registration / Participation Fee
          </h2>
          <p className="text-center text-slate-600 mt-1">(Restructured Fee)</p>
          <div className="mt-6 overflow-x-auto rounded-lg border">
            <table className="w-full bg-white text-sm">
              <thead className="bg-emerald-700 text-white">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Early Bird Registration Fee(31-08-2027)</th>
                  <th className="p-3 text-left">Late Registration Fee after(30-09-2027)</th>
                </tr>
              </thead>
              <tbody>
                {fees.map(([c, e, l], i) => (
                  <tr key={c} className={i % 2 ? "bg-slate-50" : ""}>
                    <td className="p-3">{c}</td>
                    <td className="p-3">{e}</td>
                    <td className="p-3">{l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div data-reveal="scale-in" className="rounded-lg bg-white p-6 border card-hover">
          <h3 className="text-xl font-bold text-emerald-900">
            Field Trip Registration Fee (11–12 November 2027)
          </h3>
          <p className="mt-3 text-slate-700">
            The field trip is designed to bridge theoretical knowledge with real-world geological
            and environmental applications. It enhances observational skills, field-based
            analysis, and interdisciplinary understanding.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-emerald-50 p-4">
              <div className="font-semibold text-emerald-900">Indian Participants</div>
              <div className="mt-1 text-lg font-bold">INR ₹3000/-</div>
            </div>
            <div className="rounded-lg bg-emerald-50 p-4">
              <div className="font-semibold text-emerald-900">International Participants</div>
              <div className="mt-1 text-lg font-bold">USD $ 50.00</div>
            </div>
          </div>
          <div className="mt-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4">
            <p className="font-semibold">⚠️ Important Note:</p>
            <p className="text-sm text-slate-700 mt-1">
              Dates are final but subject to change. Authors are advised to check the website
              regularly for updates and confirm               travel plans only after visa approval and
              registration.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

const conveners = [
  {
    name: "Prof. (Dr.) Prafulla Kumar Panda",
    role: "Conference Convener",
    org: "Dean, SoET & SoCDS, Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
    email: "prafullapanda@cutm.ac.in",
    phone: "+91 8917258681",
  },
  {
    name: "Prof. (Dr.) P Raja",
    role: "Professor, School of Engineering and Technology",
    org: "Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
    email: "prajaicariiswc@gmail.com",
    phone: "+91 8875197316",
  },
  {
    name: "Dr. Jonathan Muthuswamy",
    role: "International Coordinator",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    email: "jmuthuswamy@ipn.mx",
    phone: "+52 7711360183",
  },
];

function Conveners() {
  return (
    <RevealSection className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl font-bold text-emerald-900">
          Contact for Visa & Conference Correspondence
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {conveners.map((c, i) => (
            <div key={c.name} data-reveal="fade-up" className={`rounded-xl bg-white p-6 shadow-md border card-hover stagger-${Math.min(i + 1, 8)}`}>
              <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-900">
                {c.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <h3 className="mt-4 text-center font-bold text-emerald-900">{c.name}</h3>
              <p className="mt-1 text-center text-sm font-semibold text-slate-600">{c.role}</p>
              <p className="mt-2 text-center text-sm text-slate-600">{c.org}</p>
              <div className="mt-3 text-center text-sm">
                <a href={`mailto:${c.email}`} className="text-emerald-700 hover:underline">
                  ✉️ {c.email}
                </a>
                <p className="mt-1">📞 {c.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function Guidelines() {
  return (
    <RevealSection id="guidelines" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl font-bold text-emerald-900">
          Abstract Submission Guidelines
        </h2>
        <p data-reveal="fade-up" className="mt-2 text-center text-slate-600">
          Please follow the structure below when preparing your abstract.
        </p>
        <div data-reveal="fade-up" className="mt-6 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-4 text-sm animate-border-glow">
          ⚠️ Abstract submission is now open. Last date: 30 June 2027.
        </div>

        <div data-reveal="fade-up" className="mt-8 space-y-6 rounded-xl bg-white p-6 shadow-sm border card-hover">
          <div>
            <h3 className="font-bold text-emerald-900">TITLE (Arial 12, Bold)</h3>
            <p className="mt-1 text-slate-700 text-sm">
              Use a concise title that summarizes the content of the abstract.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-emerald-900">AUTHORS (Arial 11)</h3>
            <p className="mt-1 text-slate-700 text-sm">
              Enter complete author(s) names and affiliation.<br />
              <b>Example:</b> John Doe¹, Jane Smith¹, Carlos Perez²<br />
              1. University A &nbsp; 2. University B<br />
              <i>(Bold the presenting author's name.)</i>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-emerald-900">ABSTRACT TEXT (Arial 11)</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-6">
              <li><b>Background:</b> Briefly describe the context or rationale.</li>
              <li><b>Aim / Objectives:</b> State the main aims clearly.</li>
              <li><b>Methods:</b> Summarize the methodology and approaches used.</li>
              <li><b>Results:</b> Present key findings of the study.</li>
              <li><b>Conclusions:</b> Summarize the main implications.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-emerald-900">KEYWORDS</h3>
            <p className="mt-1 text-sm text-slate-700">keyword1; keyword2; keyword3; keyword4; keyword5</p>
          </div>
          <div>
            <h3 className="font-bold text-emerald-900">ACKNOWLEDGMENTS (if any)</h3>
            <p className="mt-1 text-sm text-slate-700">
              Mention grants, funding, or institutional support.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-emerald-900">Language Policy</h3>
            <p className="mt-1 text-sm text-slate-700">
              The official language of the conference is English. Selected sessions may include
              English/Spanish translations. Abstracts can be submitted in English. Spanish
              abstracts submitted will be translated and made available in English.
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function Partners() {
  return (
    <RevealSection id="partners" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl font-bold text-emerald-900">Our Organizing Partners</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 items-center">
          <div data-reveal="fade-left">
            <h3 className="text-xl font-bold text-emerald-900">Centurion University of Technology and Management (CUTM)</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Established as a leading technical institution, Centurion University of Technology and Management
              (CUTM) is committed to excellence in engineering, technology, and management education. The University
              offers comprehensive undergraduate and postgraduate programs with a strong emphasis on practical
              learning and research.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              CUTM emphasizes interdisciplinary education and research, and actively collaborates
              with national and international partners to enhance learning outcomes and foster innovation
              in civil engineering and environmental studies.
            </p>
            <a
              href="https://www.cutm.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-emerald-700 px-5 py-2 text-white font-semibold hover:bg-emerald-800"
            >
              Visit CUTM Website
            </a>
          </div>
          <div data-reveal="fade-right" className="aspect-video rounded-xl overflow-hidden bg-white">
            <img 
              src="/Centurion University Full Image..png" 
              alt="Centurion University"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 items-center">
          <div data-reveal="fade-left" className="order-2 md:order-1 aspect-video rounded-xl overflow-hidden bg-white">
            <img 
              src="/National Polythechnic.jpg" 
              alt="National Polytechnic Institute"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div data-reveal="fade-right" className="order-1 md:order-2">
            <h3 className="text-xl font-bold text-emerald-900">National Polytechnic Institute (IPN)</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              <b>Founded in 1936</b>, the Instituto Politécnico Nacional (IPN) is Mexico's
              leading public technological higher education institution. IPN is renowned for its
              academic quality — the majority of IPN's programs hold accreditation and recognition
              for excellence.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              IPN's strategy emphasizes a <b>Social Integration Model</b>, fostering two-way
              engagement between the Institute and society. IPN currently serves over{" "}
              <b>216,000 students</b> across graduate, undergraduate, and postgraduate programs.
            </p>
            <a
              href="https://www.ipn.mx/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-red-700 px-5 py-2 text-white font-semibold hover:bg-red-800"
            >
              Visit IPN Website
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

type Member = { name: string; role: string; org: string; country?: string };
const committee: { title: string; members: Member[] }[] = [
  {
    title: "Chief Patrons",
    members: [
      {
        name: "Prof. (Dr.) Mukti Kanta Mishra",
        role: "President",
        org: "CUTM, Odisha & AP",
        country: "India",
      },
      {
        name: "Prof. (Dr.) D. N. Rao",
        role: "Vice-President",
        org: "CUTM, Odisha & AP",
        country: "India",
      },
      {
        name: "Prof. (Dr.) Supriya Pattanayak",
        role: "Vice-Chancellor",
        org: "CUTM, Odisha",
        country: "India",
      },
    ],
  },
  {
    title: "Patrons",
    members: [
      {
        name: "Prof. (Dr.) Biswajit Mishra",
        role: "Pro-Vice Chancellor",
        org: "CUTM, Odisha",
        country: "India",
      },
      {
        name: "Prof. (Dr.) Ajay Kumar Nayak",
        role: "Pro-Vice Chancellor",
        org: "CUTM, Odisha",
        country: "India",
      },
      {
        name: "Prof. (Dr.) Anita Patra",
        role: "Registrar",
        org: "CUTM, Odisha",
        country: "India",
      },
    ],
  },
  {
    title: "Conference Conveners & Organizing Secretaries",
    members: [
      {
        name: "Prof. (Dr.) Prafulla Kumar Panda",
        role: "Conference Convener — Dean, SoET & SoCDS",
        org: "Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
        country: "India",
      },
      {
        name: "Prof. (Dr.) P Raja",
        role: "Organizing Secretary — Professor, School of Engineering and Technology",
        org: "Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
        country: "India",
      },
      {
        name: "Dr. Jonathan Muthuswamy",
        role: "Organizing Secretary / International Coordinator",
        org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
        country: "Mexico",
      },
    ],
  },
  {
    title: "Co-Conveners",
    members: [
      {
        name: "Dr. Rajib Majhi",
        role: "Head of the Department, Department of Civil Engineering",
        org: "Centurion University of Technology and Management, Odisha",
        country: "India",
      },
      {
        name: "Dr. Abhishek Das",
        role: "Co-Coordinator, Centre for Data Science and Machine Learning",
        org: "Centurion University of Technology and Management, Odisha",
        country: "India",
      },
    ],
  },
  {
    title: "Organizing Committee Members",
    members: [
      {
        name: "Dr. Madan Rout",
        role: "Faculty Member",
        org: "Dept. of Civil Engineering, CUTM",
        country: "India",
      },
      {
        name: "Dr. Krushna Chandra Sethi",
        role: "Faculty Member",
        org: "Dept. of Civil Engineering, CUTM",
        country: "India",
      },
      {
        name: "Dr. Aurobinda Bag",
        role: "Faculty Member",
        org: "Dept. of Electrical Engineering, CUTM",
        country: "India",
      },
      {
        name: "Prof. B. Bikram Narayan",
        role: "Faculty Member",
        org: "Dept. of Civil Engineering, CUTM",
        country: "India",
      },
      {
        name: "Prof. Dwity Sundar Rout",
        role: "Faculty Member",
        org: "Dept. of Agricultural Extension Education, CUTM",
        country: "India",
      },
    ],
  },
];

function Committee() {
  const [tab, setTab] = useState(0);
  const tabs = ["Chief Patrons / Co-Patrons & Convenors", "Organizing Team", "Scientific Committee"];
  return (
    <RevealSection id="committee" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-4xl font-bold text-emerald-900">ICSEECA - ICETS 2027</h2>
        <p data-reveal="fade-up" className="mt-2 text-center text-xl text-slate-700">Conference Committee</p>
        <p data-reveal="fade-up" className="text-center text-sm text-slate-500">
          Distinguished leaders and experts organizing ICSEECA 2027
        </p>

        <div data-reveal="fade-up" className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <motion.button
              key={t}
              onClick={() => setTab(i)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === i
                  ? "bg-emerald-700 text-white"
                  : "bg-white text-slate-700 hover:bg-emerald-100"
              }`}
            >
              {t}
            </motion.button>
          ))}
        </div>

        <div className="mt-10 space-y-12">
          {committee.map((sec) => (
            <div key={sec.title} data-reveal="fade-up">
              <h3 className="text-2xl font-bold text-emerald-900">{sec.title}</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sec.members.map((m, i) => (
                  <div key={m.name} data-reveal="fade-up" className={`rounded-xl bg-white p-5 shadow-sm border card-hover stagger-${Math.min(i + 1, 8)}`}>
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-100 font-bold text-emerald-900">
                      {m.name.split(" ").filter((s) => s[0] && s[0].match(/[A-Z]/)).map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <h4 className="mt-3 text-center font-bold text-emerald-900">{m.name}</h4>
                    <p className="mt-1 text-center text-sm text-slate-700">{m.role}</p>
                    <p className="mt-1 text-center text-xs text-slate-500">{m.org}</p>
                    {m.country && (
                      <p className="mt-1 text-center text-xs font-semibold text-emerald-700">
                        {m.country}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      values: ["iceea@cutm.ac.in"],
      href: "mailto:iceea@cutm.ac.in",
    },
    {
      icon: "📞",
      label: "Phone",
      values: ["+91 9945594842"],
      href: "tel:+919945594842",
    },
    {
      icon: "🏛️",
      label: "Organized By",
      values: [
        "Department of Civil Engineering,",
        "School of Engineering and Technology, CUTM",
      ],
    },
    {
      icon: "📍",
      label: "Address",
      values: [
        "Centurion University of Technology and Management,",
        "Paralakhemundi, Gajapati, Odisha - India",
      ],
    },
  ];

  return (
    <RevealSection id="contact" className="bg-emerald-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 data-reveal="fade-up" className="text-center text-3xl font-bold">Contact Us</h2>
        <p data-reveal="fade-up" className="mt-2 text-center text-emerald-200/70 text-sm">
          Reach out to the organizing committee for any conference-related inquiries.
        </p>
        <div className="mt-10 grid items-stretch gap-10 md:grid-cols-2">
          <div data-reveal="fade-left" className="flex flex-col">
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <div className="mt-5 flex-1 space-y-4 text-sm">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-emerald-200">{item.label}</p>
                      {item.values.map((v) =>
                        item.href ? (
                          <a
                            key={v}
                            href={item.href}
                            style={{ color: "#fff", textDecoration: "none" }}
                            className="block transition-colors hover:text-emerald-200"
                          >
                            {v}
                          </a>
                        ) : (
                          <p key={v} style={{ margin: 0 }}>{v}</p>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centurion University image — animated container */}
          <div data-reveal="fade-right" className="flex items-stretch">
            <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl min-h-[240px] sm:min-h-0">
              <img
                src="/Centurion University Full Image..png"
                alt="Centurion University Campus"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="max-w-[15rem] text-base font-extrabold leading-tight text-white sm:max-w-none sm:text-lg">
                  Centurion University of Technology and Management
                </div>
                <p className="mt-1 text-sm text-emerald-100/80">
                  Paralakhemundi, Odisha · India
                </p>
                <motion.a
                  href="https://www.cutm.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-emerald-500 animate-pulse-glow"
                >
                  Visit Official Website
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

function AnnouncementModal() {
  return null;
}

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <PageHeader />
      <Hero />
      <ImportantDates />
      <Announcements />
      <About />
      <Themes />
      <DatesTable />
      <Fees />
      <Conveners />
      <Guidelines />
      <Partners />
      <Committee />
      <Contact />
      <Footer />
      <AnnouncementModal />    </div>
  );
}
