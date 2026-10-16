import { Link } from "@tanstack/react-router";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Speakers", href: "/speakers" },
  { label: "Call for Papers", href: "/submissions/guidelines" },
  { label: "Registration", href: "/registration" },
  { label: "Venue & Travel", href: "/venue-travel" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = ["Terms & Conditions", "Privacy Policy", "Data Security", "Copyright Policy"];

function FooterLink({ label, href }: { label: string; href: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={linkStyle}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href as never} style={linkStyle}>
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
              ICSEECA - ICETS 2027
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
              International Conference on Earth and Environment in Anthropocene — bringing together
              researchers, academics and global experts.
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

          {/* Legal */}
          <div>
            <div style={colTitleStyle}>Legal</div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 12 }}>
              {LEGAL_LINKS.map((label) => (
                <span key={label} style={{ ...linkStyle, cursor: "default" }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div style={colTitleStyle}>Connect</div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: 12 }}>
              <a href="https://cutm.ac.in" target="_blank" rel="noreferrer" style={linkStyle}>
                Website
              </a>
              <a href="mailto:iceea@cutm.ac.in" style={linkStyle}>
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/yashrajanand"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                Social Media
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
          © 2027 ICSEECA – ICETS. All rights reserved.
        </p>
        <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#64748b" }}>
          Designed and developed by{" "}
          <a
            href="https://www.linkedin.com/in/yashrajanand"
            target="_blank"
            rel="noreferrer"
            aria-label="Yash Raj Anand on LinkedIn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#6ee7b7",
              fontWeight: 600,
              textDecoration: "none",
              verticalAlign: "middle",
            }}
          >
            Yash Raj Anand
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
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
