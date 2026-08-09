import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel Information | ICEEA - ICETS 2027" },
    ],
  }),
  component: TravelPage,
});

function TravelPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>Travel Information</h1>
          <div style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: 16 }}>
              Paralakhemundi is well connected by road and rail. The nearest airport is Visakhapatnam (approximately 190 km).
            </p>
            <ul style={{ textAlign: "left", fontSize: "0.9rem", color: "#475569", lineHeight: 2, listStyle: "none", padding: 0, marginBottom: 24 }}>
              <li>🚂 Nearest Railway Station: Paralakhemundi</li>
              <li>✈️ Nearest Airport: Visakhapatnam (VTZ)</li>
              <li>🚌 Well connected by bus from major Odisha cities</li>
            </ul>
            <Link to="/" style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
