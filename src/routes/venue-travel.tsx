import { createFileRoute } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/venue-travel")({
  head: () => ({
    meta: [
      { title: "Venue & Travel | ICEEA - ICETS 2027" },
      {
        name: "description",
        content:
          "Venue and travel information for ICEEA - ICETS 2027 at Centurion University of Technology and Management, Paralakhemundi Campus, Gajapati, Odisha, India.",
      },
    ],
  }),
  component: VenueTravelPage,
});

/* ── External links ─────────────────────────────────────── */
const CUTM_ADDRESS =
  "Centurion University of Technology and Management, Paralakhemundi Campus, Village Alluri Nagar, R. Sitapur, Via Uppalada, Paralakhemundi, Gajapati, Odisha 761211, India";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  CUTM_ADDRESS,
)}&output=embed`;

const OPEN_IN_MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CUTM_ADDRESS,
)}`;

/* ── Section data ───────────────────────────────────────── */
const reachModes = [
  {
    icon: "✈️",
    title: "By Air",
    tint: "#0ea5e9",
    description:
      "Visitors can travel by air to Biju Patnaik International Airport, Bhubaneswar (BBI), which is the major international airport serving Odisha. From Bhubaneswar, visitors can continue their journey to Paralakhemundi by road or rail.",
    note: "Travel time depends on the selected route and mode of transportation.",
  },
  {
    icon: "🚂",
    title: "By Train",
    tint: "#f59e0b",
    description:
      "Paralakhemundi is connected by rail, and visitors can use railway services to reach Paralakhemundi Railway Station. From the railway station, the university campus can be reached by local transportation.",
    note: "Visitors should check the latest railway schedules and routes before travelling.",
  },
  {
    icon: "🚗",
    title: "By Road",
    tint: "#16a34a",
    description:
      "Paralakhemundi is accessible by road from major cities and towns of Odisha and neighbouring Andhra Pradesh. Visitors can reach the campus through local buses, taxis or private vehicles.",
    note: "GPS navigation is recommended for the final journey to the university campus.",
  },
];

const localTransportPoints = [
  "Auto-rickshaws and local taxis are available in and around Paralakhemundi.",
  "Visitors can also use app-based navigation and local transportation services to reach the university campus.",
  "Conference participants are advised to plan their local transportation in advance.",
];

const accommodations = [
  {
    icon: "🏛️",
    title: "University Guest House",
    description:
      "Convenient accommodation option for invited speakers, delegates and official guests.",
    buttonLabel: "Accommodation Details",
    to: "/contact/accommodation",
  },
  {
    icon: "🏠",
    title: "University Hostel",
    description:
      "On-campus accommodation may be available for eligible participants subject to university availability and prior confirmation.",
    buttonLabel: "Enquire",
    href: "mailto:iceea@cutm.ac.in?subject=Accommodation%20Enquiry%20-%20University%20Hostel%20(ICEEA%20-%20ICETS%202027)",
  },
  {
    icon: "🏨",
    title: "Hotels in Paralakhemundi",
    description:
      "Participants may choose from hotels and guest houses available in Paralakhemundi and nearby areas.",
    buttonLabel: "Find Hotels",
    href: "https://www.google.com/search?q=hotels+in+Paralakhemundi%2C+Odisha",
  },
  {
    icon: "🧭",
    title: "Nearby Accommodation",
    description: "Additional accommodation options may be available in nearby towns and cities.",
    buttonLabel: "Explore Options",
    href: "https://www.google.com/maps/search/?api=1&query=hotels+and+guest+houses+near+Paralakhemundi%2C+Gajapati%2C+Odisha",
  },
];

const campusFeatures = [
  { icon: "🎓", label: "Academic & Conference Facilities" },
  { icon: "🛏️", label: "Residential & Visitor Facilities" },
  { icon: "🌱", label: "Green & Serene Campus Environment" },
];

const highlights = [
  {
    icon: "🎤",
    title: "Conference Auditorium",
    description: "Suitable for keynote lectures, invited talks and conference sessions.",
  },
  {
    icon: "📍",
    title: "Convenient Campus Location",
    description: "Located at the Paralakhemundi Campus of CUTM.",
  },
  {
    icon: "🌿",
    title: "Serene Environment",
    description:
      "A peaceful campus setting surrounded by the landscape of Gajapati and the Eastern Ghats.",
  },
  {
    icon: "🏫",
    title: "Academic Environment",
    description:
      "A university campus bringing together researchers, academics, students and professionals.",
  },
];

/* ── Page CSS ───────────────────────────────────────────── */
const VT_STYLES = `
.vt-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
  gap: 30px;
  align-items: start;
}
@media (max-width: 1024px) {
  .vt-layout { grid-template-columns: 1fr; }
}

.vt-card-hover {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease;
}
.vt-card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px -14px rgba(4, 120, 87, 0.22);
  border-color: rgba(16, 185, 129, 0.4);
}

.vt-btn {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.vt-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(4, 120, 87, 0.35);
}
.vt-btn-outline {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.vt-btn-outline:hover {
  transform: translateY(-2px);
  border-color: #6ee7b7 !important;
  box-shadow: 0 10px 24px rgba(4, 120, 87, 0.18);
}

.vt-map-frame {
  width: 100%;
  height: 440px;
  border: 0;
  display: block;
}
@media (max-width: 640px) {
  .vt-map-frame { height: 300px; }
}

.vt-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
@media (max-width: 1024px) {
  .vt-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .vt-feature-grid { grid-template-columns: 1fr; }
}

.vt-accom-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
@media (max-width: 1100px) {
  .vt-accom-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .vt-accom-grid { grid-template-columns: 1fr; }
}

.vt-chip-feature {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e2e8f0;
  font-size: 0.88rem;
  font-weight: 600;
  color: #0f172a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
`;

/* ── Shared sub-components ──────────────────────────────── */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      style={{
        marginBottom: 26,
        textAlign: centered ? "center" : "left",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(5,150,105,0.08)",
          border: "1px solid rgba(5,150,105,0.18)",
          color: "#047857",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "1.6px",
          textTransform: "uppercase",
          padding: "5px 14px",
          borderRadius: 9999,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#059669",
            display: "inline-block",
          }}
        />
        {eyebrow}
      </div>
      <h2
        style={{
          fontSize: "clamp(1.5rem, 3vw, 1.9rem)",
          fontWeight: 800,
          color: "#0f172a",
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "0.95rem",
            lineHeight: 1.7,
            color: "#64748b",
            maxWidth: centered ? 620 : 640,
            marginLeft: centered ? "auto" : 0,
            marginRight: centered ? "auto" : 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function AppLink({
  href,
  to,
  children,
  className,
  style,
}: {
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (href) {
    const external = href.startsWith("http");
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
        style={style}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <MotionLink
      to={to as LinkProps["to"]}
      className={className}
      style={style}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionLink>
  );
}

function ActionButton({
  href,
  to,
  children,
  variant = "primary",
}: {
  href?: string;
  to?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const style: React.CSSProperties =
    variant === "outline"
      ? {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "11px 24px",
          borderRadius: 9999,
          fontWeight: 600,
          fontSize: 14,
          textDecoration: "none",
          background: "#fff",
          color: "#047857",
          border: "1.5px solid #a7f3d0",
          boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
          whiteSpace: "nowrap",
        }
      : {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "12px 26px",
          borderRadius: 9999,
          fontWeight: 600,
          fontSize: 14,
          textDecoration: "none",
          background: "linear-gradient(135deg, #059669, #047857)",
          color: "#fff",
          border: "none",
          boxShadow: "0 8px 20px rgba(4,120,87,0.28)",
          whiteSpace: "nowrap",
        };
  return (
    <AppLink
      href={href}
      to={to}
      className={variant === "outline" ? "vt-btn-outline" : "vt-btn"}
      style={style}
    >
      {children}
      <span aria-hidden="true">→</span>
    </AppLink>
  );
}

/* ── Page ───────────────────────────────────────────────── */
function VenueTravelPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <style>{VT_STYLES}</style>
      <PageHeader />

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #052e1f 0%, #065f46 50%, #031810 100%)",
          padding: "72px 24px 88px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -90,
            right: -70,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(52,211,153,0.14), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -70,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(52,211,153,0.09), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto" }}
        >
          <motion.span
            variants={fadeUp}
            style={{
              display: "inline-block",
              background: "rgba(52,211,153,0.15)",
              border: "1px solid rgba(52,211,153,0.3)",
              color: "#6ee7b7",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 9999,
              marginBottom: 20,
            }}
          >
            ICEEA · ICETS 2027
          </motion.span>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.12,
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Venue &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #34d399, #a3e635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Travel
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{ color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, margin: "0 0 6px" }}
          >
            Centurion University of Technology and Management · Paralakhemundi, Gajapati, Odisha
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}
          >
            Everything you need to know about reaching the conference venue, local transport and
            accommodation for delegates.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Main two-column layout ───────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 72px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="vt-layout"
          style={{ marginTop: -36, position: "relative", zIndex: 2 }}
        >
          {/* ── Left column: Conference Venue + Map ──── */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "28px 26px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.07)",
                border: "1px solid #eef2f7",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(5,150,105,0.08)",
                  border: "1px solid rgba(5,150,105,0.18)",
                  color: "#047857",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  borderRadius: 9999,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#059669",
                    display: "inline-block",
                  }}
                />
                Conference Venue
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 1.9rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 6px",
                  letterSpacing: "-0.01em",
                }}
              >
                Centurion University of Technology and Management
              </h2>
              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#059669",
                }}
              >
                Paralakhemundi Campus, Gajapati, Odisha, India
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
                  border: "1px solid #a7f3d0",
                  color: "#065f46",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  padding: "10px 18px",
                  borderRadius: 12,
                  marginBottom: 18,
                }}
              >
                <span aria-hidden="true" style={{ fontSize: "1.15rem" }}>
                  🎓
                </span>
                CUTM Auditorium
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#475569",
                  margin: "0 0 20px",
                }}
              >
                The ICEEA–ICETS 2027 conference will be hosted at the Auditorium of Centurion
                University of Technology and Management, Paralakhemundi Campus. Located in the
                scenic Gajapati district of Odisha, the campus provides a peaceful academic
                environment surrounded by the natural landscape of the Eastern Ghats.
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px dashed #cbd5e1",
                  borderRadius: 12,
                  padding: "14px 18px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.6px",
                    marginBottom: 4,
                  }}
                >
                  Campus Address
                </div>
                <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.7, color: "#334155" }}>
                  Village Alluri Nagar, R. Sitapur, Via Uppalada
                  <br />
                  Paralakhemundi, Gajapati, Odisha – 761211, India
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="vt-card-hover"
              style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
                border: "1px solid #eef2f7",
                marginTop: 26,
              }}
            >
              <iframe
                className="vt-map-frame"
                src={MAP_EMBED_SRC}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Centurion University of Technology and Management, Paralakhemundi Campus"
              />
              <div
                style={{
                  padding: "14px 22px",
                  borderTop: "1px solid #eef2f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "0.85rem",
                    color: "#64748b",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }} aria-hidden="true">
                    📍
                  </span>
                  CUTM, Paralakhemundi Campus, Gajapati, Odisha
                </div>
                <ActionButton href={OPEN_IN_MAPS}>Open in Google Maps</ActionButton>
              </div>
            </motion.div>
          </div>

          {/* ── Right column: Reach + Transport + Accommodation ── */}
          <div>
            {/* How to Reach */}
            <SectionHeading
              eyebrow="Getting Here"
              title="How to Reach"
              subtitle="Paralakhemundi is connected by air, rail and road. Choose the option that suits your journey."
            />
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {reachModes.map((mode) => (
                <motion.div
                  key={mode.title}
                  variants={springItem}
                  className="vt-card-hover"
                  style={{
                    background: "#fff",
                    borderRadius: 14,
                    padding: "22px 22px",
                    border: "1px solid #eef2f7",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: `${mode.tint}1a`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      {mode.icon}
                    </div>
                    <h3
                      style={{ fontSize: "1.05rem", fontWeight: 700, color: mode.tint, margin: 0 }}
                    >
                      {mode.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "#475569",
                      margin: "0 0 10px",
                    }}
                  >
                    {mode.description}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      color: "#64748b",
                      margin: 0,
                      paddingTop: 10,
                      borderTop: "1px dashed #e2e8f0",
                    }}
                  >
                    <span aria-hidden="true">ℹ️ </span>
                    {mode.note}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Local Transport */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="vt-card-hover"
              style={{
                background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                border: "1px solid #bbf7d0",
                borderRadius: 14,
                padding: "22px 24px",
                marginTop: 26,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "rgba(5,150,105,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  🛺
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#065f46", margin: 0 }}>
                  Local Transport
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {localTransportPoints.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "#334155",
                      padding: "7px 0",
                    }}
                  >
                    <span
                      style={{
                        color: "#059669",
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Accommodation (full width) ─────────────── */}
        <div style={{ marginTop: 52 }}>
          <SectionHeading
            eyebrow="Stay"
            title="Accommodation"
            subtitle="Accommodation options for delegates, speakers and participants."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="vt-accom-grid"
          >
            {accommodations.map((item) => (
              <motion.div
                key={item.title}
                variants={springItem}
                className="vt-card-hover"
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "22px 20px",
                  border: "1px solid #eef2f7",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "rgba(5,150,105,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    marginBottom: 12,
                  }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "#64748b",
                    margin: "0 0 16px",
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>
                <AppLink
                  href={item.href}
                  to={item.to}
                  className="vt-btn-outline"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "9px 18px",
                    borderRadius: 9999,
                    fontWeight: 600,
                    fontSize: 13,
                    textDecoration: "none",
                    background: "#fff",
                    color: "#047857",
                    border: "1.5px solid #a7f3d0",
                  }}
                >
                  {item.buttonLabel}
                  <span aria-hidden="true">→</span>
                </AppLink>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── About the Campus ───────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{
            background: "linear-gradient(135deg, #031810 0%, #065f46 100%)",
            borderRadius: 20,
            padding: "38px 32px",
            position: "relative",
            overflow: "hidden",
            marginTop: 30,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -40,
              right: -40,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(52,211,153,0.12), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(52,211,153,0.15)",
                border: "1px solid rgba(52,211,153,0.3)",
                color: "#6ee7b7",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.6px",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 9999,
                marginBottom: 14,
              }}
            >
              Campus Information
            </span>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 14px",
              }}
            >
              About the Campus
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#cbd5e1",
                margin: "0 0 22px",
                maxWidth: 880,
              }}
            >
              Centurion University of Technology and Management's Paralakhemundi Campus is located
              in Gajapati district of Odisha and provides a serene academic environment at the
              foothills of the Eastern Ghats. The campus offers academic, residential and visitor
              facilities suitable for hosting academic conferences and international delegates.
            </p>
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
            >
              {campusFeatures.map((feature) => (
                <motion.div
                  key={feature.label}
                  variants={springItem}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "10px 16px",
                    borderRadius: 9999,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    color: "#a7f3d0",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                >
                  <span aria-hidden="true">{feature.icon}</span>
                  {feature.label}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Venue Highlights ───────────────────────── */}
        <div style={{ marginTop: 60 }}>
          <SectionHeading
            align="center"
            eyebrow="Why This Venue"
            title="Venue Highlights"
            subtitle="A venue designed to host an international academic conference."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="vt-feature-grid"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={springItem}
                className="vt-card-hover"
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "26px 22px",
                  border: "1px solid #eef2f7",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
                    border: "1px solid #a7f3d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    margin: "0 auto 14px",
                  }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3
                  style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "#64748b", margin: 0 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Travel Information ─────────────────────── */}
        <div style={{ marginTop: 60 }}>
          <SectionHeading
            align="center"
            eyebrow="Plan Ahead"
            title="Travel Information"
            subtitle="Helpful guidance for planning your visit to ICEEA – ICETS 2027."
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            style={{
              background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
              borderLeft: "5px solid #d97706",
              borderRadius: 16,
              padding: "26px 28px",
              maxWidth: 900,
              margin: "0 auto",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.8, color: "#92400e" }}>
              Participants are requested to plan their travel and accommodation well in advance.
              Travel schedules, transportation availability and accommodation options may change, so
              participants should verify the latest information before travelling.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 26,
            }}
          >
            <ActionButton href={OPEN_IN_MAPS}>View on Google Maps</ActionButton>
            <ActionButton to="/contact/accommodation">Accommodation</ActionButton>
            <ActionButton to="/contact" variant="outline">
              Contact Conference Team
            </ActionButton>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
