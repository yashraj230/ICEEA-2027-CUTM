import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

export const Route = createFileRoute("/submissions/review")({
  head: () => ({
    meta: [
      { title: "Review Process | ICEEA - ICETS 2027" },
      { name: "description", content: "Learn about the peer review process, timeline, review stages, and abstract guidelines for ICEEA-ICETS 2027." },
    ],
  }),
  component: ReviewPage,
});

function ReviewPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Title Banner */}
      <section style={{ padding: "40px 24px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#115e3b", margin: "0 0 10px" }}>
            Review Process — ICEEA-2027
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 600, color: "#475569", margin: "0 0 8px" }}>
            Transparent, fair, and rigorous peer-review to ensure high scholarly quality.
          </p>
        </div>
      </section>

      {/* Main Review content Grid */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          
          {/* Top side-by-side: Main review overview & Quick stats sidebar */}
          <div style={{ display: "grid", gridTemplateColumns: "3fr 1.5fr", gap: "30px", marginBottom: "35px", alignItems: "start" }}>
            
            {/* Left Side: Overview & Review Stages */}
            <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "30px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "15px" }}>
                Overview
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, marginBottom: "24px" }}>
                All full papers submitted to ICEEA/ICETS 2027 will be evaluated through a multi-stage peer-review system. The process is designed to be objective, constructive, and timely. Final publication decisions are based exclusively on reviewer recommendations.
              </p>

              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", marginBottom: "16px" }}>Review Stages</h4>
              <ol style={{ paddingLeft: "20px", margin: 0, fontSize: "0.88rem", color: "#475569", lineHeight: 1.8 }}>
                <li style={{ marginBottom: "14px" }}>
                  <strong>Initial Screening:</strong> Administrative and scope check for originality, completeness, and adherence to submission guidelines.
                </li>
                <li style={{ marginBottom: "14px" }}>
                  <strong>Assignment to Reviewers:</strong> Each manuscript is assigned to at least two independent experts with relevant subject-matter expertise.
                </li>
                <li style={{ marginBottom: "14px" }}>
                  <strong>Peer-Review:</strong> Reviewers assess the manuscript using standardized criteria (novelty, methodology, clarity, significance, reproducibility, relevance).
                </li>
                <li style={{ marginBottom: "14px" }}>
                  <strong>Editorial Decision:</strong> Based on reviewer reports, the Editorial Committee takes a decision: Accept, Minor Revision, Major Revision, or Reject.
                </li>
                <li style={{ marginBottom: "14px" }}>
                  <strong>Revision &amp; Re-evaluation:</strong> Authors submit revised manuscripts addressing reviewer comments; revisions may be re-evaluated.
                </li>
                <li style={{ marginBottom: "14px" }}>
                  <strong>Final Acceptance &amp; Publication Assignment:</strong> Accepted papers are routed to either the Springer edited book series or the Scopus-indexed journal track based on originality, scope, and strategic fit.
                </li>
              </ol>

              <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", marginTop: "30px", marginBottom: "12px" }}>Timeline (Indicative)</h4>
              <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.88rem", color: "#475569", lineHeight: 1.7 }}>
                <li>Acceptance notification target: <strong>15 September 2027</strong></li>
                <li>Full paper submission deadline: <strong>30 September 2027</strong></li>
              </ul>
            </div>

            {/* Right Side: Quick info widgets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Quick Facts */}
              <div style={{ background: "#fff", borderRadius: "18px", border: "1px solid #e2e8f0", padding: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>Quick Facts</h4>
                <ul style={{ paddingLeft: "15px", margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>
                  <li>Minimum reviewers per paper: <strong>2</strong></li>
                  <li>Recommended review turnaround: <strong>3–4 weeks</strong></li>
                  <li>Default review mode: <strong>Single-blind review</strong></li>
                  <li>Appeal window: <strong>14 days</strong></li>
                </ul>
              </div>

              {/* How Papers are Assigned */}
              <div style={{ background: "#fff", borderRadius: "18px", border: "1px solid #e2e8f0", padding: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e293b", margin: "0 0 12px" }}>How Papers are Assigned</h4>
                <ol style={{ paddingLeft: "15px", margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>
                  <li>Automated matching by keyword &amp; subject area.</li>
                  <li>Manual review by Section Editors to ensure expertise alignment.</li>
                  <li>Conflict-of-interest checks before final reviewer invitation.</li>
                </ol>
              </div>

              {/* Contact Support Widget */}
              <div style={{ background: "#fff", borderRadius: "18px", border: "1px solid #e2e8f0", padding: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e293b", margin: "0 0 8px" }}>Contact</h4>
                <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.6, margin: "0 0 8px" }}>
                  Editorial Office: <a href="mailto:iceea@cuk.ac.in" style={{ color: "#059669", textDecoration: "none" }}>iceea@cuk.ac.in</a>
                </p>
                <p style={{ fontSize: "0.75rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>
                  For reviewer inquiries, please mention your manuscript ID and subject area in your email.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Card: Assignment & Scoring Rubric */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "30px", marginBottom: "35px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "15px" }}>
              Reviewer Assignment &amp; Confidentiality
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
              Reviewers are selected for expertise and lack of conflicts of interest. The reviewing process will be <strong>single-anonymous</strong> by default (reviewers know authors, authors do not know reviewers). Reviewers must keep all confidentiality; no reviewer comments are shared with authors other than official feedback.
            </p>

            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>Decision Categories</h4>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "25px" }}>
              <span style={{ background: "#dcfce7", color: "#15803d", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px" }}>Accept</span>
              <span style={{ background: "#fef3c7", color: "#d97706", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px" }}>Minor Revision</span>
              <span style={{ background: "#d1fae5", color: "#059669", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px" }}>Major Revision</span>
              <span style={{ background: "#fee2e2", color: "#dc2626", fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "4px" }}>Reject</span>
            </div>

            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>Appeals Policy</h4>
            <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: "0 0 30px" }}>
              If authors believe a decision was reached unfairly, they may submit a formal appeal within <strong>14 days</strong> of the decision. Appeals must demonstrate errors and provide new evidence; appeals are reviewed by an independent committee whose decision is final.
            </p>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "20px" }}>
              Review Criteria &amp; Scoring Rubric
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "24px" }}>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>Novelty &amp; Originality</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>Scientific originality and contribution to the field.</p>
              </div>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>Methodology &amp; Rigor</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>Appropriateness, soundness, and reproducibility of methods.</p>
              </div>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>Results &amp; Analysis</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>Clarity and robustness of results and statistical/analytical treatment.</p>
              </div>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>Clarity &amp; Structure</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>Organization, readability, and presentation quality.</p>
              </div>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>Significance</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>Relevance to conference themes and potential academic impact.</p>
              </div>
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "0.9rem", fontWeight: 700, color: "#1e293b" }}>References &amp; Ethics</p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "#475569", lineHeight: 1.5 }}>Adequacy of literature review, citation correctness, and ethical compliance.</p>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
              Reviewers also provide constructive comments to help authors improve the manuscript, regardless of the decision.
            </p>
          </div>

          {/* Bottom Card: Reviewer Responsibilities */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "30px", marginBottom: "35px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "15px" }}>
              Reviewer Responsibilities
            </h3>
            <ul style={{ paddingLeft: "20px", margin: "0 0 25px", fontSize: "0.88rem", color: "#475569", lineHeight: 1.8 }}>
              <li>Provide an objective, timely, and constructive review.</li>
              <li>Declare any conflicts of interest and decline review if conflicted.</li>
              <li>Keep manuscripts content confidential and not use it for personal advantage.</li>
              <li>Follow ethical guidelines and report suspected plagiarism or other misconduct to the editors.</li>
            </ul>

            <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "8px" }}>Editor &amp; Committee Roles</h4>
            <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
              The Editorial Committee coordinates reviewer selection, resolves discrepant reviews, approves revisions, and ensures final publication decisions follow ethical standards and journal/book requirements.
            </p>
          </div>

          {/* Submission Format guidelines card */}
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "30px", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#115e3b", borderBottom: "2px solid #f1f5f9", paddingBottom: "12px", marginBottom: "20px" }}>
              Abstract Submission Guidelines
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, marginBottom: "20px" }}>
              Follow the official ICEEA-2027 &amp; ICETS-2027 abstract structure for primary submission review:
            </p>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>TITLE (Arial 12, Bold)</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 12px" }}>Use a concise title that clearly summarizes the abstract content.</p>

              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>AUTHORS (Arial 11)</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 8px" }}>Enter complete author names and affiliations.</p>
              <p style={{ fontSize: "0.75rem", color: "#64748b", margin: "0 0 12px", paddingLeft: "10px", borderLeft: "2px solid #cbd5e1" }}>
                Example: John Doe¹, Jane Smith², Carlos Perez³ / ¹ University A, ²,³ University B <br />
                (Bold the presenting author name's index)
              </p>

              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>ABSTRACT TEXT (Arial 11)</p>
              <ul style={{ paddingLeft: "15px", margin: "0 0 12px", fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
                <li><strong>Background:</strong> Briefly introduce the research rationale.</li>
                <li><strong>Aim / Objectives:</strong> Clearly state the main objectives.</li>
                <li><strong>Methods:</strong> Summarize methodology, tools, and approaches.</li>
                <li><strong>Results:</strong> Present key findings.</li>
                <li><strong>Conclusions:</strong> Summarize implications or significance.</li>
              </ul>

              <p style={{ fontSize: "0.85rem", color: "#1e293b", margin: 0 }}>
                <strong>Keywords:</strong> keyword1, keyword2, keyword3, keyword4, keyword5
              </p>
              <p style={{ fontSize: "0.85rem", color: "#1e293b", margin: "8px 0 0" }}>
                <strong>Acknowledgements (If any):</strong> Mention funding, grants, or institutional support.
              </p>
            </div>

            {/* Spanish language version */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>TÍTULO (Arial 12, Negrita)</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 12px" }}>Use un título conciso que resuma el contenido del resumen.</p>

              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>AUTORES (Arial 11)</p>
              <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 8px" }}>Ingrese los nombres completos de los autores y sus afiliaciones.</p>
              <p style={{ fontSize: "0.75rem", color: "#64748b", margin: "0 0 12px", paddingLeft: "10px", borderLeft: "2px solid #cbd5e1" }}>
                Ejemplo: John Doe¹, Jane Smith², Carlos Perez³ / ¹ Universidad A, ²,³ Universidad B <br />
                (Resalte en negrita el autor que presentará el trabajo)
              </p>

              <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1e293b", margin: "0 0 4px" }}>TEXTO DEL RESUMEN (Arial 11)</p>
              <ul style={{ paddingLeft: "15px", margin: "0 0 12px", fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
                <li><strong>Antecedentes:</strong> Describa brevemente el contexto.</li>
                <li><strong>Objetivos / Metas:</strong> Indique los objetivos principales.</li>
                <li><strong>Métodos:</strong> Resuma metodología, herramientas y enfoques.</li>
                <li><strong>Resultados:</strong> Presente los logros clave.</li>
                <li><strong>Conclusiones:</strong> Resuma la relevancia o implicaciones.</li>
              </ul>

              <p style={{ fontSize: "0.85rem", color: "#1e293b", margin: 0 }}>
                <strong>Palabras clave:</strong> palabra1, palabra2, palabra3, palabra4, palabra5
              </p>
              <p style={{ fontSize: "0.85rem", color: "#1e293b", margin: "8px 0 0" }}>
                <strong>Agradecimientos (Si corresponde):</strong> Mencione financiamiento, becas o apoyo institucional.
              </p>
            </div>
          </div>

          {/* Home Button */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              to="/"
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
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
