import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/contact/general")({
  head: () => ({
    meta: [
      { title: "General Inquiries | ICEEA - ICETS 2027" },
    ],
  }),
  component: GeneralInquiriesPage,
});

function GeneralInquiriesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: 16 }}>General Inquiries</h1>
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: 12 }}>For general inquiries about ICEEA-ICETS 2027, please reach out to us:</p>
            <p style={{ fontWeight: 600, color: "#0f172a" }}>📧 iceea@cutm.ac.in</p>
            <p style={{ fontWeight: 600, color: "#0f172a" }}>📞 +91 9945594842</p>
            <div style={{ marginTop: 24 }}>
              <Link to="/" style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
