import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Organizing Committee | ICSEECA - ICETS 2027" },
      { name: "description", content: "Meet the organizing committee of ICSEECA-ICETS 2027 — distinguished leaders and experts from India and Mexico." },
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
    name: "Prof. (Dr.) Mukti Kanta Mishra",
    role: "President",
    org: "CUTM, Odisha & AP",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Prof. (Dr.) D. N. Rao",
    role: "Vice-President",
    org: "CUTM, Odisha & AP",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Prof. (Dr.) Supriya Pattanayak",
    role: "Vice-Chancellor",
    org: "CUTM, Odisha",
    country: "India",
    flag: "🇮🇳",
  },
];

const patrons: Member[] = [
  {
    name: "Prof. (Dr.) Biswajit Mishra",
    role: "Pro-Vice Chancellor",
    org: "CUTM, Odisha",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Prof. (Dr.) Ajay Kumar Nayak",
    role: "Pro-Vice Chancellor",
    org: "CUTM, Odisha",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Prof. (Dr.) Anita Patra",
    role: "Registrar",
    org: "CUTM, Odisha",
    country: "India",
    flag: "🇮🇳",
  },
];

const conveners: Member[] = [
  {
    name: "Prof. (Dr.) Prafulla Kumar Panda",
    role: "Dean, SoET & SoCDS",
    org: "Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
    country: "India",
    flag: "🇮🇳",
    badge: "CONFERENCE CONVENER",
    email: "prafullapanda@cutm.ac.in",
  },
  {
    name: "Prof. (Dr.) P Raja",
    role: "Professor, School of Engineering and Technology",
    org: "Centurion University of Technology and Management, Paralakhemundi, Odisha - India",
    country: "India",
    flag: "🇮🇳",
    badge: "ORGANIZING SECRETARY",
    email: "prajaicariiswc@gmail.com",
  },
  {
    name: "Dr. Jonathan Muthuswamy",
    role: "International Coordinator",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    country: "Mexico",
    flag: "🇲🇽",
    badge: "ORGANIZING SECRETARY",
    email: "jmuthuswamy@ipn.mx",
  },
];

const coConveners: Member[] = [
  {
    name: "Dr. Rajib Majhi",
    role: "Head of the Department",
    org: "Department of Civil Engineering, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
    badge: "CO-CONVENER",
  },
  {
    name: "Dr. Abhishek Das",
    role: "Co-Coordinator",
    org: "Centre for Data Science and Machine Learning, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
    badge: "CO-CONVENER",
  },
];

const organizingCommitteeMembers: Member[] = [
  {
    name: "Dr. Madan Rout",
    role: "Faculty Member",
    org: "Dept. of Civil Engineering, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Dr. Krushna Chandra Sethi",
    role: "Faculty Member",
    org: "Dept. of Civil Engineering, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Dr. Aurobinda Bag",
    role: "Faculty Member",
    org: "Dept. of Electrical Engineering, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Prof. B. Bikram Narayan",
    role: "Faculty Member",
    org: "Dept. of Civil Engineering, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
  },
  {
    name: "Prof. Dwity Sundar Rout",
    role: "Faculty Member",
    org: "Dept. of Agricultural Extension Education, Centurion University of Technology and Management",
    country: "India",
    flag: "🇮🇳",
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
            ICSEECA - ICETS 2027
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 700, color: "#475569", margin: "0 0 8px" }}>
            Conference Committee
          </p>
          <p style={{ fontSize: "0.9rem", color: "#64748b", margin: "0 0 25px" }}>
            Distinguished leaders and experts organizing ICSEECA 2027
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

          {/* Patrons */}
          <SectionTitle title="Patrons" />
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {patrons.map((member) => (
              <motion.div key={member.name} variants={springItem}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/* Conference Conveners & Organizing Secretaries */}
          <SectionTitle title="Conference Conveners & Organizing Secretaries" />
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

          {/* Organizing Committee Members */}
          <SectionTitle title="Organizing Committee Members" />
          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            {organizingCommitteeMembers.map((member) => (
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
