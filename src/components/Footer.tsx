import { Link } from "@tanstack/react-router";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Call for Papers", href: "/submissions/guidelines" },
  { label: "Registration", href: "/registration" },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={linkStyle}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href as any} style={linkStyle}>
      {label}
    </Link>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#94a3b8",
  fontSize: "13px",
  textDecoration: "none",
  lineHeight: 1.9,
  transition: "color 0.2s ease",
};

export default function Footer() {
  return (
    <footer style={{ background: "#04281a", color: "#94a3b8" }}>
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "36px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "#f1f5f9",
                letterSpacing: "-0.01em",
              }}
            >
              ICEEA - ICETS 2027
            </div>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#64748b",
                maxWidth: 260,
              }}
            >
              International Conference on Earth and Environment in the Anthropocene —
              bringing together global experts to address the planet's most pressing
              environmental challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div style={colTitleStyle}>Quick Links</div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 12 }}>
              {QUICK_LINKS.map((item) => (
                <FooterLink key={item.label} {...item} />
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div style={colTitleStyle}>Connect</div>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "13px",
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              Visit for more
            </p>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 6 }}>
              <a href="https://cutm.ac.in" target="_blank" rel="noreferrer" style={linkStyle}>
                Centurion University (CUTM)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* University info bar */}
      <div
        style={{
          background: "#032216",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "22px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "13px", fontWeight: 600, color: "#cbd5e1" }}>
          Centurion University of Technology and Management — Paralakhemundi, Odisha — India
        </p>
        <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#64748b" }}>
          A State Private University established under the Odisha Act 5 of 2005 · Govt. of Odisha
        </p>
      </div>

      {/* Bottom copyright bar */}
      <div
        style={{
          background: "#02180e",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "16px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
          © {new Date().getFullYear()} - ICEEA - ICETS 2027. All rights reserved. | Designed &
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/yashrajanand"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#94a3b8", fontWeight: 600, textDecoration: "none" }}
          >
            Yash Raj Anand
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/yashrajanand"
            target="_blank"
            rel="noreferrer"
            aria-label="Yash Raj Anand on LinkedIn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "middle",
              width: "22px",
              height: "22px",
              borderRadius: "6px",
              background: "#0a66c2",
              color: "#fff",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  );
}

const colTitleStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 700,
  color: "#f1f5f9",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};
