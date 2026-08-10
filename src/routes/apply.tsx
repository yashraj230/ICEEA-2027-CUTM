import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "How to Apply | ICEEA - ICETS 2027" },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>How to Apply</h1>
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <ol style={{ textAlign: "left", fontSize: "0.95rem", color: "#475569", lineHeight: 2.2, marginBottom: 24 }}>
              <li>Prepare your abstract/paper as per submission guidelines</li>
              <li>Submit through the online submission portal</li>
              <li>Wait for acceptance notification (within 7 days)</li>
              <li>Complete registration and fee payment</li>
              <li>Plan your travel and accommodation</li>
            </ol>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
