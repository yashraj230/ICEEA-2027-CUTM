import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/important-dates")({
  head: () => ({
    meta: [
      { title: "Important Dates | ICSEECA - ICETS 2027" },
    ],
  }),
  component: ImportantDatesPage,
});

function ImportantDatesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", textAlign: "center", marginBottom: 32 }}>Important Dates to Remember</h2>

          <div style={{ overflowX: "auto", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", borderRadius: 12, marginBottom: 48 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#059669" }}>
                  <th style={{ textAlign: "left", padding: "16px 24px", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Event</th>
                  <th style={{ textAlign: "right", padding: "16px 24px", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>Important Dates</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Abstract submission starts", "01.04.2027"],
                  ["Last date of Submission of Abstract", "30.06.2027"],
                  ["Acceptance Notification Issued", "15.08.2027"],
                  ["Last date of Full paper submission", "30.08.2027"],
                  ["Last Date of Registration (Along with payment)", "07.10.2027"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "14px 24px", fontWeight: 600, color: "#1e293b", fontSize: "0.9rem" }}>{row[0]}</td>
                    <td style={{ padding: "14px 24px", textAlign: "right", fontWeight: 700, color: "#0f172a", fontSize: "0.9rem" }}>
                      {row[1]}
                    </td>
                  </tr>
                ))}
                <tr style={{ background: "#d1fae5" }}>
                  <td style={{ padding: "14px 24px", fontWeight: 700, color: "#1e293b", fontSize: "0.9rem" }}>Conference dates</td>
                  <td style={{ padding: "14px 24px", textAlign: "right", fontWeight: 700, color: "#047857", fontSize: "1.1rem" }}>8th – 12th November, 2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: "clamp(1.3rem,2.5vw,1.6rem)", fontWeight: 700, color: "#0f172a", textAlign: "center", marginBottom: 24 }}>Bank Account Details for Payment of the Requisite Fee</h2>
          <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.08)", padding: 24, marginBottom: 48 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  ["Bank Name", "Canara Bank"],
                  ["Bank Address", "Kadaganchi Branch, Gulbarga District, Karnataka, India"],
                  ["Account Number", "5109101000001"],
                  ["Account Name", "Central University of Karnataka"],
                  ["IFSC", "CNRB0005109"],
                  ["MICR", "585015520"],
                ].map(([label, value], i) => (
                  <tr key={label} style={{ borderBottom: i < 5 ? "1px solid #e2e8f0" : "none" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "#64748b", fontSize: "0.9rem", width: "40%" }}>{label}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "#0f172a", fontSize: "0.9rem" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#059669", textAlign: "center", marginBottom: 8 }}>Registration / Participation Fee</h2>
          <h5 style={{ fontSize: "1.1rem", color: "#dc2626", textAlign: "center", marginBottom: 24 }}>(Restructured Fee)</h5>

          <div style={{ overflowX: "auto", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", borderRadius: 12, marginBottom: 48 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 12, overflow: "hidden" }}>
              <thead>
                <tr style={{ background: "#059669", color: "#fff" }}>
                  <th style={{ textAlign: "center", padding: "16px 24px", fontWeight: 700, fontSize: "0.9rem" }}>Category</th>
                  <th style={{ textAlign: "center", padding: "16px 24px", fontWeight: 700, fontSize: "0.9rem" }}>Early Bird Registration Fee<br/>(31-08-2027)</th>
                  <th style={{ textAlign: "center", padding: "16px 24px", fontWeight: 700, fontSize: "0.9rem" }}>Late Registration Fee after<br/>(30-09-2027)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Foreign Delegates (Teachers, Researchers, Scientists, Professors)", "US$ 300.00", "US$ 350.00"],
                  ["Foreign Delegates (Students)", "US$ 100.00", "US$ 150.00"],
                  ["Accompanying Guest (International)", "US$ 100.00", "US$ 125.00"],
                  ["Indian Delegates (Teachers, Researchers, Scientists, and Professors)", "INR ₹4000.00", "INR ₹4500.00"],
                  ["Research Scholars", "INR ₹2000.00", "INR ₹2500.00"],
                  ["Indian Delegates (Students)", "INR ₹1000.00", "INR ₹1500.00"],
                  ["Accompanying Guest (National)", "INR ₹1000.00", "INR ₹1500.00"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e2e8f0", background: i % 2 === 0 ? "#fff" : "#f8fafc" }}>
                    <td style={{ padding: "12px 24px", fontWeight: 600, color: "#1e293b", fontSize: "0.85rem" }}>{row[0]}</td>
                    <td style={{ padding: "12px 24px", textAlign: "center", fontWeight: 700, color: "#0f172a", fontSize: "0.85rem" }}>{row[1]}</td>
                    <td style={{ padding: "12px 24px", textAlign: "center", fontWeight: 700, color: "#0f172a", fontSize: "0.85rem" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)", borderLeft: "4px solid #f59e0b", borderRadius: 12, padding: "16px 20px", marginBottom: 24 }}>
            <h5 style={{ fontWeight: 700, margin: "0 0 8px", color: "#92400e" }}>Important Note:</h5>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#78350f", lineHeight: 1.6 }}>
              <strong>Dates are final but subject to change.</strong> Authors are advised to check the website regularly for updates and confirm travel plans only after visa approval and registration.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
