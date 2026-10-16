import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeUp, MotionLink, viewportOnce } from "../../lib/motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/contact/general")({
  head: () => ({
    meta: [
      { title: "General Inquiries | ICSEECA - ICETS 2027" },
    ],
  }),
  component: GeneralInquiriesPage,
});

function GeneralInquiriesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: 16 }}>General Inquiries</h1>
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: 16 }}>For general and conference inquiries about ICSEECA-ICETS 2027, please reach out to us:</p>
            <div style={{ textAlign: "left", background: "#f8fafc", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
              <p style={{ margin: "0 0 10px", fontSize: "0.95rem", color: "#0f172a" }}><strong>📧 Email:</strong> iceea@cutm.ac.in</p>
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 10, marginTop: 10 }}>
                <p style={{ margin: "0 0 6px", fontSize: "0.9rem", fontWeight: 700, color: "#064e3b" }}>Contact for Visa & Conference Correspondence:</p>
                <p style={{ margin: "0 0 4px", fontSize: "0.85rem", color: "#334155" }}>• <strong>Prof. (Dr.) Prafulla Kumar Panda</strong> (Conference Convener): +91 8917258681</p>
                <p style={{ margin: "0 0 4px", fontSize: "0.85rem", color: "#334155" }}>• <strong>Prof. (Dr.) P Raja</strong> (Organizing Secretary): +91 8875197316</p>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#334155" }}>• <strong>Dr. Jonathan Muthuswamy</strong> (International Coordinator): +52 7711360183</p>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
