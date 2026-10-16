import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeUp, MotionLink } from "../lib/motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Visa Information | ICSEECA - ICETS 2027" },
    ],
  }),
  component: VisaPage,
});

function VisaPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ padding: "80px 24px" }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>Visa Information</h1>
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: 16 }}>
              International participants requiring a visa to enter India should apply for a conference/visitor visa well in advance. An official acceptance letter will be provided after paper acceptance.
            </p>
            <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: 24 }}>
              For visa-related queries, contact: iceea@cutm.ac.in
            </p>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
