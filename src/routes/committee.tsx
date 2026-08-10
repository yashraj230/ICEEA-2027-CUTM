import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Organizing Committee | ICEEA - ICETS 2027" },
      { name: "description", content: "Meet the organizing committee of ICEEA-ICETS 2027 — distinguished leaders and experts from India and Mexico." },
    ],
  }),
  component: OrganizingCommitteePage,
});

type Member = {
  name: string;
  role: string;
  org: string;
  country: string;
  flag: string;
  image?: string;
  badge?: string;
  email?: string;
};

const chiefPatrons: Member[] = [
  {
    name: "Prof. Battu Satyanarayana",
    role: "Hon'ble Vice-Chancellor",
    org: "Central University of Karnataka, India",
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop", // placeholder portrait
  },
  {
    name: "Dr. Arturo Reyes Sandoval",
    role: "Director General",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", // placeholder portrait
  },
];

const coPatrons: Member[] = [
  {
    name: "Prof. R.R. Biradar",
    role: "Registrar",
    org: "Central University of Karnataka, India",
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Martha Leticia Vazquez Gonzalez",
    role: "Dean - Research and Postgraduate Studies",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico. Secretary of Research and Postgraduate - IPN Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Jose Nicolas Fernandez Garcia",
    role: "Director of Research",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico. Secretary of Research and Postgraduate - IPN Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Samuel Perez Rodriguez",
    role: "Director of Postgraduate Studies",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico. Secretary of Research and Postgraduate - IPN Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Prof. Mohammed Aslam",
    role: "Professor, School of Earth Sciences",
    org: "Central University of Karnataka (CUK), Karnataka, India",
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
];

const conveners: Member[] = [
  {
    name: "Dr. Babu Nallusamy",
    role: "Associate Professor, Department of Geology",
    org: "Central University of Karnataka (CUK)",
    country: "India",
    flag: "🇮🇳",
    badge: "CONFERENCE CONVENER",
    email: "babu@cuk.ac.in",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Prof. M. Prasanth",
    role: "Department of Geology, School of Earth Sciences",
    org: "Central University of Karnataka (CUK), Karnataka, India",
    country: "India",
    flag: "🇮🇳",
    badge: "CONFERENCE CONVENER",
    email: "mprasanth@cuk.ac.in",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Jonathan Muthuswamy Ponniah",
    role: "Professor, CIIEMAD",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    badge: "International Coordinator",
    email: "jmuthuswamy@ipn.mx",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Roque Juan Carrasco Aquino",
    role: "Coordinator, CIIEMAD",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico. President, International Network on Research on Regional and Environmental Socio-urban Problems (RIISPSURA)",
    country: "Mexico",
    flag: "🇲🇽",
    badge: "Conference Convener",
    email: "rcarrascoa@ipn.mx",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
  },
];

const coConveners: Member[] = [
  {
    name: "Dr. Lingadevaru . M",
    role: "Head of the Department, Department of Geology",
    org: "School of Earth Sciences, Central University of Karnataka (CUK), Karnataka, India",
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Sujatha Suresh Babu",
    role: "Professor, School of Earth Sciences (CUK, Retired)",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Pedro Francisco Rodriguez Espinosa",
    role: "Director, CIIEMAD",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Dr. Archana Kujur",
    role: "Head of the Department, Assistant Professor, Department of Geography, School of Earth Sciences",
    org: "Central University of Karnataka, Kalaburagi - India",
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop",
  },
];

function CommitteeTabs() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "35px" }}>
      <motion.button
        style={{
          background: "#166534",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
          padding: "10px 24px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(22,101,52,0.25)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Chief Patrons / Co-Patrons &amp; Conveners
      </motion.button>
      <motion.button
        style={{
          background: "#fff",
          color: "#475569",
          fontWeight: 600,
          fontSize: "14px",
          padding: "10px 24px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Organizing Team
      </motion.button>
      <motion.button
        style={{
          background: "#fff",
          color: "#475569",
          fontWeight: 600,
          fontSize: "14px",
          padding: "10px 24px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Scientific Committee
      </motion.button>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ textAlign: "center", margin: "45px 0 25px" }}>
      <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#166534", position: "relative", display: "inline-block" }}>
        {title}
      </h2>
    </div>
  );
}

function ProfileImage({ src, name, size = 150 }: { src?: string; name: string; size?: number }) {
  const [error, setError] = useState(false);
  const initials = name
    .split(" ")
    .filter((s) => s[0]?.match(/[A-Z]/))
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  if (error || !src) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: 800,
          color: "#166534",
          border: "4px solid #166534",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        {initials || "?"}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <img
        src={src}
        alt={name}
        onError={() => setError(true)}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #166534",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
        display: "flex",
        alignItems: "center",
        gap: "24px",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <ProfileImage src={member.image} name={member.name} size={110} />
      </div>

      <div style={{ flex: 1, textAlign: "left" }}>
        {member.badge && (
          <span
            style={{
              display: "inline-block",
              background: "#166534",
              color: "#fff",
              fontSize: "9px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "4px",
              marginBottom: "6px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {member.badge}
          </span>
        )}
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>
          {member.name}
        </h3>
        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748b", margin: "0 0 6px", lineHeight: 1.4 }}>
          {member.role}
        </p>
        <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 10px", lineHeight: 1.4 }}>
          {member.org}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                fontSize: "11px",
                color: "#059669",
                textDecoration: "none",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              ✉ {member.email}
            </a>
          )}
          <span
            style={{
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              color: "#334155",
              fontSize: "10px",
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            {member.country} {member.flag}
          </span>
        </div>
      </div>
    </div>
  );
}

function OrganizingCommitteePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Header Title Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ padding: "40px 24px 20px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#115e3b", margin: "0 0 10px" }}>
            ICEEA - ICETS 2027
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "#475569", margin: "0 0 8px" }}>
            Conference Committee
          </p>
          <p style={{ fontSize: "0.9rem", color: "#64748b", margin: "0 0 25px" }}>
            Distinguished leaders and experts organizing ICEEA-ICETS 2027.
          </p>

          <CommitteeTabs />
        </div>
      </motion.section>

      {/* Main Committee Cards Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        style={{ padding: "0 24px 80px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Chief Patrons */}
          <SectionTitle title="Chief Patrons" />
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {chiefPatrons.map((member) => (
              <motion.div key={member.name} variants={springItem}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/* Co-Patrons */}
          <SectionTitle title="Co-Patrons" />
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {coPatrons.map((member) => (
              <motion.div key={member.name} variants={springItem}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/* Conveners */}
          <SectionTitle title="Conference Conveners &amp; Coordinator" />
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {conveners.map((member) => (
              <motion.div key={member.name} variants={springItem}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/* Co-Conveners */}
          <SectionTitle title="Co-Conveners" />
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {coConveners.map((member) => (
              <motion.div key={member.name} variants={springItem}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/* Home Button */}
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <MotionLink
              to="/"
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #166534, #14532d)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
                padding: "12px 28px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(22,101,52,0.3)",
              }}
            >
              ← Back to Home
            </MotionLink>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
