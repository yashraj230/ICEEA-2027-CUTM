import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeUp, MotionLink, viewportOnce } from "../../lib/motion";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/submissions/guidelines")({
  head: () => ({
    meta: [
      { title: "Submission Guidelines | ICSEECA - ICETS 2027" },
      { name: "description", content: "Submission guidelines, important dates, and publication opportunities for ICSEECA-ICETS 2027." },
    ],
  }),
  component: GuidelinesPage,
});

function GuidelinesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Main Page Title Header */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ padding: "40px 24px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#115e3b", margin: "0 0 10px" }}>
            ICSEECA-2027 &amp; ICETS-2027 — Submissions
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 600, color: "#475569", margin: "0 0 8px" }}>
            International Conference on Earth &amp; Environment / International Congress on Environmental &amp; Territorial Studies
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "15px" }}>
            <span style={{ background: "#dcfce7", color: "#15803d", padding: "4px 12px", borderRadius: "9999px", fontSize: "11px", fontWeight: 700 }}>
              All submissions undergo rigorous peer review
            </span>
          </div>
        </div>
      </motion.section>

      {/* Content Container */}
      <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          
          {/* Important Dates Block */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "30px", marginBottom: "35px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "20px" }}>
              Important Dates
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Abstract submission starts</p>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 750, color: "#1e293b" }}>01 April 2027</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Last date for submission of abstract</p>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 750, color: "#1e293b" }}>30 June 2027</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Acceptance notification</p>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 750, color: "#1e293b" }}>15 August 2027</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Last date of full paper submission</p>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 750, color: "#1e293b" }}>30 August 2027</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Last date of registration (Along with payment)</p>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 750, color: "#1e293b" }}>7 October 2027</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: "0.8rem", color: "#64748b", fontWeight: 600 }}>Conference dates</p>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 750, color: "#1e293b" }}>8 – 12 November 2027</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Guidelines Block */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "30px", marginBottom: "35px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "20px" }}>
              Submission Guidelines
            </h3>

            <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
              Authors are invited to submit original, unpublished work addressing topics related to the Anthropocene, climate change, sustainability, natural resources, geosciences, territorial studies, environmental degradation and technological solutions. <strong>All submissions must be original and not under consideration elsewhere.</strong>
            </p>

            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>Manuscript Preparation</h4>
              <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.9rem", color: "#475569", lineHeight: 1.7 }}>
                <li style={{ marginBottom: "6px" }}>Full papers should be prepared in English and follow standard academic formatting (introduction, methods, results, discussion, conclusions, references).</li>
                <li style={{ marginBottom: "6px" }}>Include an abstract (max 300 words), 3–6 keywords and author affiliations with contact email.</li>
                <li style={{ marginBottom: "6px" }}>Word limits: <strong>Abstract:</strong> max 300 words; <strong>Full paper:</strong> 4,000–8,000 words (including references) unless specified otherwise.</li>
                <li style={{ marginBottom: "6px" }}>Figures and tables should be high resolution and embedded in the manuscript. Provide separate figure files if requested by organisers.</li>
              </ul>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>Peer-review &amp; Publication Opportunities</h4>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: "0 0 10px" }}>
                All submitted full papers will undergo a rigorous peer-review process. Accepted papers will be considered for two publication tracks:
              </p>
              <ol style={{ paddingLeft: "20px", margin: 0, fontSize: "0.9rem", color: "#475569", lineHeight: 1.7 }}>
                <li style={{ marginBottom: "6px" }}><strong>Springer Edited Book (with ISBN)</strong> — Selected, high-quality papers will be published as chapters in a Springer book series to ensure global academic visibility.</li>
                <li style={{ marginBottom: "6px" }}><strong>Scopus-indexed Journal</strong> — Another set of selected papers will be forwarded for publication in a Scopus-indexed journal (journal details to be announced).</li>
              </ol>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>Ethics &amp; Originality</h4>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                Authors must ensure submissions are original, not published previously, and not under consideration by any other publication outlet. Plagiarism or duplicate submissions will result in automatic rejection. The final decision on acceptance and publication rests with the peer-review committee.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="https://forms.gle/WZW2CrWhMZet1wep8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#166534",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px 28px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 4px 10px rgba(22,101,52,0.2)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#14532d")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#166534")}
              >
                Submit Abstract
              </motion.a>
            </div>
          </div>

          {/* About & Checklist Splits */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {/* About ICSEECA */}
            <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>About ICSEECA-2027</h4>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.6, marginBottom: "12px", textAlign: "justify" }}>
                ICSEECA-2027 aims to bring together researchers, academicians, environmentalists, policymakers and industry leaders to address complex Earth and environmental challenges arising during the Anthropocene epoch. It emphasises interdisciplinary dialogue on climate change, sustainability, natural resources, geosciences, environmental degradation, and advanced technological solutions.
              </p>
              <h5 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1e293b", margin: "0 0 6px" }}>Conference Goals</h5>
              <ul style={{ paddingLeft: "15px", margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>
                <li>Address global environmental challenges of the Anthropocene.</li>
                <li>Strengthen international collaboration in Earth &amp; environmental sciences.</li>
                <li>Promote sustainable development and geo-environmental solutions.</li>
                <li>Integrate geoscience, environmental policy, and technology.</li>
                <li>Exchange cutting-edge research in climate change, geology, biodiversity, energy and territorial studies.</li>
              </ul>
            </div>

            {/* Quick Checklist & Support */}
            <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>Quick Submission Checklist</h4>
              <ul style={{ paddingLeft: "15px", margin: "0 0 20px", fontSize: "0.85rem", color: "#475569", lineHeight: 1.6 }}>
                <li>Original manuscript, not under review elsewhere.</li>
                <li>Abstract (&le;300 words) + keywords.</li>
                <li>Author names, affiliations &amp; contact email.</li>
                <li>High-resolution figures (if any).</li>
                <li>Compliance with word limits and formatting.</li>
              </ul>

              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: "0 0 8px" }}>Contact &amp; Support</h4>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.6, margin: "0 0 8px" }}>
                Email: <a href="mailto:iceea@cuk.ac.in" style={{ color: "#059669", textDecoration: "none" }}>iceea@cuk.ac.in</a>
              </p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>
                For registration and submission queries, please mention your paper code (if assigned) and corresponding author.
              </p>
            </div>
          </div>

          {/* Home Button */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <MotionLink
              to="/"
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-block",
                background: "rgba(15,23,42,0.08)",
                border: "1px solid rgba(15,23,42,0.15)",
                color: "#0f172a",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 28px",
                borderRadius: "9999px",
                textDecoration: "none",
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
