import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration | ICSEECA - ICETS 2027" },
    ],
  }),
  component: RegistrationPage,
});

function RegistrationPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0d6efd", marginBottom: 16 }}>Registration for ICSEECA-ICETS 2027</h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7, marginBottom: 12 }}>
            The official registration portal is now available. Participants can access complete details including registration fees, paper submission guidelines, and conference schedules.
          </p>
          <p style={{ fontSize: "0.95rem", color: "#059669", fontWeight: 600, marginBottom: 24 }}>
            Join ICSEECA-ICETS 2027 and connect with leading researchers, academicians, and industry experts worldwide.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#475569", marginBottom: 24 }}>
            Click below Button to Submit the Registration form & Fee Payment Details...
          </p>
          <motion.a href="https://forms.gle/WZW2CrWhMZet1wep8" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #268736, #a51056)", color: "#fff", padding: "14px 32px", borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: "none", boxShadow: "0 4px 15px rgba(13,110,253,0.3)", marginBottom: 32 }}>
            Registration Form for Conference
          </motion.a>
          <br/>
          <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "rgba(15,23,42,0.08)", border: "1px solid rgba(15,23,42,0.15)", color: "#0f172a", fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
