import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";

export const Route = createFileRoute("/tour")({
  head: () => ({
    meta: [
      { title: "Discover Odisha | ICSEECA - ICETS 2027" },
      {
        name: "description",
        content:
          "Discover Odisha — explore the culture, nature and heritage of Odisha around Paralakhemundi for delegates of ICSEECA - ICETS 2027 at Centurion University of Technology and Management.",
      },
    ],
  }),
  component: TourPage,
});

/* ── Constants ──────────────────────────────────────────── */
const CUTM_ADDRESS =
  "Centurion University of Technology and Management, Paralakhemundi Campus, Village Alluri Nagar, R. Sitapur, Via Uppalada, Paralakhemundi, Gajapati, Odisha 761211, India";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop";

const CATEGORIES = [
  "All",
  "Around Paralakhemundi",
  "Eastern Ghats & Nature",
  "Beaches & Coastal Odisha",
  "Heritage & Temples",
  "Culture & Tribal Heritage",
  "Wildlife & Wetlands",
  "Major Odisha Cities",
];

/* ── Destination data ───────────────────────────────────── */
type Destination = {
  id: string;
  name: string;
  region: string;
  category: string;
  badge?: string;
  description: string;
  image: string;
  highlights: string[];
  nearby: string[];
  envNote?: string;
  religionNote?: string;
};

const img = (id: string) => `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

const destinations: Destination[] = [
  {
    id: "paralakhemundi",
    name: "Paralakhemundi",
    region: "Gajapati, Odisha",
    category: "Around Paralakhemundi",
    badge: "Conference Host City",
    description:
      "Paralakhemundi is the cultural and administrative heart of Gajapati district and the host location of ICSEECA–ICETS 2027. The town offers visitors an opportunity to experience the distinctive culture, landscapes and heritage of southern Odisha.",
    image: img("photo-1506318137071-a8e063b4bec0"),
    highlights: [
      "Local heritage",
      "Gajapati's cultural landscape",
      "Eastern Ghats surroundings",
      "Local markets and cuisine",
      "Nearby nature and heritage destinations",
    ],
    nearby: ["jirang-chandragiri", "chandragiri-tibetan", "mahendragiri", "taptapani", "gopalpur"],
  },
  {
    id: "jirang-chandragiri",
    name: "Jirang & Chandragiri",
    region: "Gajapati, Odisha",
    category: "Culture & Tribal Heritage",
    description:
      "Jirang and Chandragiri are known for their serene hill surroundings and distinctive Buddhist cultural heritage. The area provides a peaceful cultural experience within the Eastern Ghats landscape.",
    image: img("photo-1524231757912-21f4fe3a7200"),
    highlights: [
      "Buddhist heritage",
      "Monastery experience",
      "Eastern Ghats scenery",
      "Local culture",
      "Peaceful surroundings",
    ],
    nearby: ["paralakhemundi", "chandragiri-tibetan", "mahendragiri", "taptapani"],
  },
  {
    id: "mahendragiri",
    name: "Mahendragiri",
    region: "Gajapati, Odisha",
    category: "Eastern Ghats & Nature",
    description:
      "Mahendragiri is a prominent mountain landscape of the Eastern Ghats and an important natural and cultural destination in the region. Trekking routes, distances and timings are to be verified through official sources before planning a visit.",
    image: img("photo-1454496522488-7a8e488e8606"),
    highlights: [
      "Mountain landscapes",
      "Eastern Ghats",
      "Biodiversity",
      "Nature photography",
      "Cultural heritage",
    ],
    nearby: ["paralakhemundi", "jirang-chandragiri", "taptapani", "gopalpur"],
  },
  {
    id: "taptapani",
    name: "Taptapani",
    region: "Ganjam, Odisha",
    category: "Eastern Ghats & Nature",
    description:
      "Taptapani is known for its natural hot springs and scenic surroundings. It is a popular nature destination in southern Odisha and can be included in a regional sightseeing itinerary.",
    image: img("photo-1448375240586-882707db888b"),
    highlights: [
      "Natural hot spring",
      "Forested landscape",
      "Eastern Ghats",
      "Nature experience",
      "Scenic surroundings",
    ],
    nearby: ["gopalpur", "paralakhemundi", "mahendragiri", "berhampur"],
  },
  {
    id: "gopalpur",
    name: "Gopalpur-on-Sea",
    region: "Ganjam, Odisha",
    category: "Beaches & Coastal Odisha",
    description:
      "Gopalpur is a coastal destination known for its beach, sea views and relaxed atmosphere. It offers conference delegates an opportunity to experience Odisha's coastline.",
    image: img("photo-1507525428034-b723cf961d3e"),
    highlights: [
      "Gopalpur Beach",
      "Bay of Bengal coastline",
      "Sunrise and sunset views",
      "Coastal cuisine",
      "Relaxing beach environment",
    ],
    nearby: ["taptapani", "berhampur", "chilika", "paralakhemundi"],
  },
  {
    id: "chilika",
    name: "Chilika Lake",
    region: "Odisha",
    category: "Wildlife & Wetlands",
    description:
      "Chilika Lake is one of Odisha's most important natural attractions, known for its extensive lagoon ecosystem, wetlands, birdlife and rich biodiversity.",
    image: img("photo-1444858291040-58f756a3bdd6"),
    highlights: [
      "Wetland ecosystem",
      "Migratory birds",
      "Boat experiences",
      "Nature photography",
      "Biodiversity",
    ],
    nearby: ["puri", "konark", "gopalpur", "berhampur"],
    envNote:
      "An ideal destination for delegates interested in wetlands, biodiversity and environmental conservation — particularly relevant to the ICSEECA–ICETS Earth and environmental themes.",
  },
  {
    id: "puri",
    name: "Puri",
    region: "Puri, Odisha",
    category: "Heritage & Temples",
    description:
      "Puri is one of Odisha's most prominent cultural and coastal destinations, combining religious heritage, traditional culture and a famous beachfront.",
    image: img("photo-1510414842594-a61c69b5ae57"),
    highlights: [
      "Puri Beach",
      "Jagannath Temple",
      "Local culture",
      "Traditional cuisine",
      "Coastal experience",
    ],
    nearby: ["konark", "chilika", "bhubaneswar", "gopalpur"],
    religionNote:
      "For religious sites, entry rules may apply. Visitors should check current official guidelines before visiting.",
  },
  {
    id: "konark",
    name: "Konark",
    region: "Puri, Odisha",
    category: "Heritage & Temples",
    badge: "UNESCO World Heritage Site",
    description:
      "Konark is home to the iconic Sun Temple, one of India's most celebrated examples of historic temple architecture and a UNESCO World Heritage Site.",
    image: img("photo-1518709268805-4e9042af9f23"),
    highlights: [
      "Konark Sun Temple",
      "Architectural heritage",
      "Sculptural art",
      "Chandrabhaga Beach",
      "Odisha's cultural history",
    ],
    nearby: ["puri", "chilika", "bhubaneswar", "gopalpur"],
    religionNote:
      "For religious and protected heritage sites, entry rules may apply. Visitors should check current official guidelines before visiting.",
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    region: "Khordha, Odisha",
    category: "Major Odisha Cities",
    description:
      "Bhubaneswar, the capital of Odisha, combines ancient temple architecture with modern urban development. It is an important gateway for visitors travelling to and from Odisha.",
    image: img("photo-1516410529446-2c777cb7366d"),
    highlights: [
      "Lingaraj Temple",
      "Mukteshwar Temple",
      "Rajarani Temple",
      "Udayagiri & Khandagiri Caves",
      "Odisha State Museum",
      "Modern city attractions",
    ],
    nearby: ["udayagiri-khandagiri", "konark", "puri", "chilika"],
    religionNote:
      "For religious sites, entry rules may apply. Visitors should check current official guidelines before visiting.",
  },
  {
    id: "udayagiri-khandagiri",
    name: "Udayagiri & Khandagiri Caves",
    region: "Bhubaneswar, Odisha",
    category: "Heritage & Temples",
    description:
      "Udayagiri and Khandagiri are historic rock-cut caves near Bhubaneswar that provide an insight into Odisha's ancient heritage.",
    image: img("photo-1559620192-032c4bc4674e"),
    highlights: [
      "Rock-cut caves",
      "Ancient inscriptions",
      "Historical architecture",
      "Archaeological heritage",
      "Panoramic views",
    ],
    nearby: ["bhubaneswar", "konark", "puri"],
  },
  {
    id: "berhampur",
    name: "Berhampur",
    region: "Ganjam, Odisha",
    category: "Major Odisha Cities",
    description:
      "Berhampur is a major city in southern Odisha and an important regional commercial and cultural centre. It can serve as a useful base for exploring destinations in the surrounding Ganjam region.",
    image: img("photo-1486406146926-c627a92ad1ab"),
    highlights: [
      "Local markets",
      "Odia culture",
      "Shopping",
      "Regional cuisine",
      "Gateway to nearby attractions",
    ],
    nearby: ["gopalpur", "taptapani", "chilika", "paralakhemundi"],
  },
  {
    id: "chandragiri-tibetan",
    name: "Chandragiri Tibetan Heritage",
    region: "Gajapati, Odisha",
    category: "Culture & Tribal Heritage",
    description:
      "Chandragiri offers visitors a distinctive cultural experience in the hills of Gajapati, combining natural surroundings with Tibetan Buddhist heritage.",
    image: img("photo-1524492412937-b28074a5d7da"),
    highlights: [
      "Buddhist cultural heritage",
      "Monastery",
      "Hill landscape",
      "Photography",
      "Cultural experience",
    ],
    nearby: ["jirang-chandragiri", "paralakhemundi", "mahendragiri"],
    religionNote:
      "For religious sites, entry rules may apply. Visitors should check current official guidelines before visiting.",
  },
];

const destinationById = (id: string) => destinations.find((d) => d.id === id);

const openInMaps = (name: string, region: string) => {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${region}`)}`,
    "_blank",
  );
};

const openDirections = (name: string, region: string) => {
  window.open(
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${name}, ${region}`,
    )}`,
    "_blank",
  );
};

/* ── Page CSS ───────────────────────────────────────────── */
const TOUR_STYLES = `
.tour-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.24fr) minmax(0, 0.76fr);
  gap: 28px;
  align-items: start;
}
@media (max-width: 1024px) {
  .tour-layout { grid-template-columns: 1fr; }
}

.tour-card-hover {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease;
}
.tour-card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px -14px rgba(4, 120, 87, 0.22);
  border-color: rgba(16, 185, 129, 0.4);
}

.tour-chip-scroll {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 6px;
  scrollbar-width: thin;
}
.tour-chip-scroll::-webkit-scrollbar { height: 4px; }
.tour-chip-scroll::-webkit-scrollbar-thumb { background: #a7f3d0; border-radius: 4px; }

.tour-dest-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 640px;
  overflow-y: auto;
  padding-right: 4px;
  scrollbar-width: thin;
}
.tour-dest-list::-webkit-scrollbar { width: 4px; }
.tour-dest-list::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
@media (max-width: 1024px) {
  .tour-dest-list { max-height: none; }
}

.tour-highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 18px;
}
@media (max-width: 560px) {
  .tour-highlights { grid-template-columns: 1fr; }
}

.tour-info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
@media (max-width: 760px) {
  .tour-info-grid { grid-template-columns: 1fr; }
}

.tour-feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
@media (max-width: 1024px) {
  .tour-feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .tour-feature-grid { grid-template-columns: 1fr; }
}

.tour-responsible-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
@media (max-width: 1024px) {
  .tour-responsible-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .tour-responsible-grid { grid-template-columns: 1fr; }
}

.tour-btn {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.tour-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(4, 120, 87, 0.35); }
.tour-btn-outline {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}
.tour-btn-outline:hover {
  transform: translateY(-2px);
  border-color: #6ee7b7 !important;
  box-shadow: 0 10px 24px rgba(4, 120, 87, 0.18);
}
`;

/* ── Shared sub-components ──────────────────────────────── */
function SafeImage({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
  const [current, setCurrent] = useState(src);
  useEffect(() => setCurrent(src), [src]);
  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      style={style}
      onError={() => setCurrent(FALLBACK_IMG)}
    />
  );
}

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
      style={{ marginBottom: 26, textAlign: centered ? "center" : "left" }}
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
            maxWidth: centered ? 680 : 640,
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

/* ── Search bar ─────────────────────────────────────────── */
function SearchBar({
  query,
  onChange,
  resultCount,
}: {
  query: string;
  onChange: (v: string) => void;
  resultCount: number;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: "16px 18px",
        boxShadow: "0 12px 36px rgba(0,0,0,0.1)",
        border: "1px solid #eef2f7",
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "1 1 280px" }}>
        <span aria-hidden="true" style={{ fontSize: "1.2rem" }}>
          🔍
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search destinations (e.g., Puri, Konark, Gopalpur, Chilika...)"
          aria-label="Search destinations"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: "0.95rem",
            color: "#0f172a",
            fontFamily: "inherit",
          }}
        />
      </div>
      {resultCount > 0 && (
        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#94a3b8" }}>
          {resultCount} destination{resultCount === 1 ? "" : "s"}
        </span>
      )}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <MotionLink
          to="/contact/general"
          className="tour-btn"
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 22px",
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: 13.5,
            textDecoration: "none",
            background: "linear-gradient(135deg, #059669, #047857)",
            color: "#fff",
            border: "none",
            boxShadow: "0 8px 20px rgba(4,120,87,0.28)",
            whiteSpace: "nowrap",
          }}
        >
          Travel Assistance <span aria-hidden="true">→</span>
        </MotionLink>
        <MotionLink
          to="/venue-travel"
          className="tour-btn-outline"
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 22px",
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: 13.5,
            textDecoration: "none",
            background: "#fff",
            color: "#047857",
            border: "1.5px solid #a7f3d0",
            whiteSpace: "nowrap",
          }}
        >
          Plan Your Visit
        </MotionLink>
      </div>
    </div>
  );
}

/* ── Category filter ────────────────────────────────────── */
function CategoryFilter({ active, onChange }: { active: string; onChange: (c: string) => void }) {
  return (
    <div className="tour-chip-scroll">
      {CATEGORIES.map((cat) => {
        const selected = cat === active;
        return (
          <motion.button
            key={cat}
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(cat)}
            style={{
              flexShrink: 0,
              padding: "8px 16px",
              borderRadius: 9999,
              border: selected ? "1.5px solid #059669" : "1.5px solid #e2e8f0",
              background: selected ? "linear-gradient(135deg, #059669, #047857)" : "#fff",
              color: selected ? "#fff" : "#475569",
              fontWeight: selected ? 700 : 600,
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              boxShadow: selected ? "0 6px 16px rgba(4,120,87,0.25)" : "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {cat}
          </motion.button>
        );
      })}
    </div>
  );
}

/* ── Destination sidebar ────────────────────────────────── */
function DestinationSidebar({
  items,
  activeId,
  onSelect,
  onShowAll,
}: {
  items: Destination[];
  activeId: string;
  onSelect: (id: string) => void;
  onShowAll: () => void;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}>
          Explore Destinations
        </h3>
        {items.length > 0 && items.length < destinations.length && (
          <button
            type="button"
            onClick={onShowAll}
            style={{
              border: "none",
              background: "none",
              color: "#059669",
              fontWeight: 700,
              fontSize: 12.5,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Show all
          </button>
        )}
      </div>
      {items.length === 0 ? (
        <div
          style={{
            background: "#f8fafc",
            border: "1px dashed #cbd5e1",
            borderRadius: 14,
            padding: "26px 18px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "0.9rem",
          }}
        >
          No destinations found. Try a different search.
        </div>
      ) : (
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="tour-dest-list"
        >
          {items.map((d) => {
            const selected = d.id === activeId;
            return (
              <motion.button
                key={d.id}
                type="button"
                variants={springItem}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelect(d.id)}
                aria-pressed={selected}
                style={{
                  position: "relative",
                  textAlign: "left",
                  width: "100%",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  borderRadius: 14,
                  padding: "13px 16px",
                  border: selected ? "1.5px solid #34d399" : "1px solid #e2e8f0",
                  background: selected ? "linear-gradient(135deg, #ecfdf5, #d1fae5)" : "#fff",
                  boxShadow: selected
                    ? "0 8px 22px rgba(4,120,87,0.16)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: selected ? "#065f46" : "#0f172a",
                    marginBottom: 2,
                  }}
                >
                  {d.name}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: selected ? "#059669" : "#94a3b8",
                  }}
                >
                  {d.region}
                </div>
                {d.badge && (
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.4px",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 9999,
                      background: selected ? "#059669" : "rgba(245,158,11,0.12)",
                      color: selected ? "#fff" : "#b45309",
                      border: selected ? "none" : "1px solid rgba(245,158,11,0.3)",
                    }}
                  >
                    {d.badge}
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Conference venue quick link */}
      <div
        style={{
          marginTop: 16,
          background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
          border: "1px solid #bbf7d0",
          borderRadius: 14,
          padding: "16px 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span aria-hidden="true" style={{ fontSize: "1.1rem" }}>
            🎓
          </span>
          <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#065f46" }}>
            Conference Venue
          </span>
        </div>
        <p style={{ margin: "0 0 10px", fontSize: "0.78rem", lineHeight: 1.6, color: "#334155" }}>
          CUTM Paralakhemundi Campus, Gajapati, Odisha
        </p>
        <button
          type="button"
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CUTM_ADDRESS)}`,
              "_blank",
            )
          }
          className="tour-btn-outline"
          style={{
            width: "100%",
            padding: "9px 14px",
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: 12.5,
            background: "#fff",
            color: "#047857",
            border: "1.5px solid #a7f3d0",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          📍 View Venue on Map
        </button>
      </div>
    </div>
  );
}

/* ── Destination details ────────────────────────────────── */
function DestinationDetails({
  destination,
  onSelectNearby,
}: {
  destination: Destination;
  onSelectNearby: (id: string) => void;
}) {
  const nearby = destination.nearby
    .map((id) => destinationById(id))
    .filter((d): d is Destination => Boolean(d));

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #eef2f7",
        boxShadow: "0 10px 34px rgba(0,0,0,0.08)",
      }}
    >
      {/* Image */}
      <div
        style={{ position: "relative", height: "clamp(220px, 36vw, 380px)", background: "#e2e8f0" }}
      >
        <SafeImage
          src={destination.image}
          alt={`${destination.name}, ${destination.region}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(2,18,12,0.75), transparent 55%)",
          }}
        />
        {destination.badge && (
          <div
            style={{
              position: "absolute",
              top: 18,
              left: 18,
              display: "inline-block",
              background: "rgba(245,158,11,0.95)",
              color: "#fff",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.6px",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: 9999,
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            }}
          >
            {destination.badge}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            left: 22,
            right: 22,
            bottom: 18,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            {destination.name}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              marginTop: 6,
              color: "#d1fae5",
              fontSize: "0.92rem",
              fontWeight: 600,
            }}
          >
            <span aria-hidden="true">📍</span> {destination.region}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "26px 26px 30px" }}>
        <p style={{ margin: "0 0 22px", fontSize: "0.95rem", lineHeight: 1.8, color: "#475569" }}>
          {destination.description}
        </p>

        {destination.envNote && (
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
              border: "1px solid #bbf7d0",
              borderRadius: 14,
              padding: "14px 18px",
              marginBottom: 18,
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "1.2rem" }}>
              🌿
            </span>
            <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.7, color: "#166534" }}>
              {destination.envNote}
            </p>
          </div>
        )}
        {destination.religionNote && (
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
              border: "1px solid #fde68a",
              borderRadius: 14,
              padding: "14px 18px",
              marginBottom: 18,
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "1.2rem" }}>
              ℹ️
            </span>
            <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.7, color: "#92400e" }}>
              {destination.religionNote}
            </p>
          </div>
        )}

        {/* Info boxes */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="tour-info-grid"
        >
          {[
            {
              icon: "🌿",
              title: "Best Time to Visit",
              text: "October – March is generally comfortable for sightseeing in Odisha. Weather varies by destination.",
              tint: "#047857",
            },
            {
              icon: "🕐",
              title: "Timings",
              text: "Check the official destination authority before visiting.",
              tint: "#0ea5e9",
            },
            {
              icon: "💰",
              title: "Entry Information",
              text: "Entry fees may apply at selected attractions. Check official sources for current rates.",
              tint: "#b45309",
            },
          ].map((box) => (
            <motion.div
              key={box.title}
              variants={springItem}
              className="tour-card-hover"
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                padding: "16px 16px",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: `${box.tint}1a`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.15rem",
                  marginBottom: 10,
                }}
                aria-hidden="true"
              >
                {box.icon}
              </div>
              <div
                style={{ fontSize: "0.82rem", fontWeight: 800, color: box.tint, marginBottom: 5 }}
              >
                {box.title}
              </div>
              <p style={{ margin: 0, fontSize: "0.82rem", lineHeight: 1.65, color: "#64748b" }}>
                {box.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <div style={{ marginTop: 28 }}>
          <h3
            style={{ margin: "0 0 14px", fontSize: "1.05rem", fontWeight: 800, color: "#0f172a" }}
          >
            Must-See Highlights
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="tour-highlights">
            {destination.highlights.map((h) => (
              <li
                key={h}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#334155",
                  padding: "6px 0",
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.72rem",
                    color: "#047857",
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nearby attractions */}
        <div
          style={{
            marginTop: 26,
            background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
            border: "1px solid #bae6fd",
            borderRadius: 16,
            padding: "18px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: "0.95rem",
              fontWeight: 800,
              color: "#0369a1",
              marginBottom: 12,
            }}
          >
            <span aria-hidden="true">📍</span> Nearby Attractions
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {nearby.map((n) => (
              <button
                key={n.id}
                type="button"
                onClick={() => onSelectNearby(n.id)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 9999,
                  background: "#fff",
                  border: "1.5px solid #7dd3fc",
                  color: "#0369a1",
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 6px rgba(2,132,199,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0ea5e9";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#0369a1";
                }}
              >
                {n.name}
              </button>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 }}>
          <button
            type="button"
            onClick={() => openInMaps(destination.name, destination.region)}
            className="tour-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14,
              background: "linear-gradient(135deg, #059669, #047857)",
              color: "#fff",
              border: "none",
              boxShadow: "0 8px 20px rgba(4,120,87,0.28)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            View on Map <span aria-hidden="true">🗺️</span>
          </button>
          <button
            type="button"
            onClick={() => openDirections(destination.name, destination.region)}
            className="tour-btn-outline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 24px",
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: 14,
              background: "#fff",
              color: "#047857",
              border: "1.5px solid #a7f3d0",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Plan Visit <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────── */
function TourPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeId, setActiveId] = useState(destinations[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return destinations.filter((d) => {
      const matchesCategory = category === "All" || d.category === category;
      const matchesQuery =
        !q || d.name.toLowerCase().includes(q) || d.region.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  useEffect(() => {
    if (!filtered.some((d) => d.id === activeId)) {
      if (filtered.length > 0) setActiveId(filtered[0].id);
    }
  }, [filtered, activeId]);

  const active = destinationById(activeId) ?? destinations[0];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <style>{TOUR_STYLES}</style>
      <PageHeader />

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "84px 24px 150px",
          textAlign: "center",
          background:
            "linear-gradient(rgba(3,24,16,0.55), rgba(4,30,20,0.82)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop') center/cover",
        }}
      >
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto" }}
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
              letterSpacing: 1.6,
              textTransform: "uppercase",
              padding: "6px 18px",
              borderRadius: 9999,
              marginBottom: 22,
            }}
          >
            ICSEECA–ICETS 2027 | Paralakhemundi, Odisha
          </motion.span>
          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Discover{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #34d399, #a3e635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Odisha
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{ color: "#d1fae5", fontSize: "1.2rem", fontWeight: 600, margin: "0 0 10px" }}
          >
            An unforgettable journey through nature, heritage and culture
          </motion.p>
          <motion.p
            variants={fadeUp}
            style={{
              color: "#e2e8f0",
              fontSize: "1rem",
              lineHeight: 1.75,
              margin: "0 auto",
              maxWidth: 700,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            Make the most of your visit to ICSEECA–ICETS 2027 by exploring Odisha's remarkable
            temples, beaches, forests, wetlands, tribal heritage and scenic Eastern Ghats.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Intro + Search ───────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 64px" }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{
            background: "#fff",
            border: "1px solid #eef2f7",
            borderRadius: 24,
            boxShadow: "0 18px 48px rgba(3, 24, 16, 0.18)",
            maxWidth: 880,
            margin: "-64px auto 34px",
            padding: "clamp(26px, 4vw, 42px)",
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <span
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
              padding: "6px 16px",
              borderRadius: 9999,
              marginBottom: 16,
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
            ICSEECA–ICETS 2027 · Paralakhemundi
          </span>
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(1.6rem, 4vw, 2.1rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              color: "#0f172a",
            }}
          >
            Explore the Culture, Nature &amp;{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #047857, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Heritage of Odisha
            </span>
          </h2>
          <p
            style={{
              margin: "0 auto 12px",
              maxWidth: 700,
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "#475569",
            }}
          >
            Welcome, ICSEECA–ICETS 2027 delegates. Discover the rich cultural heritage, natural
            landscapes, beaches, temples, wildlife and Eastern Ghats surrounding Paralakhemundi and
            Odisha.
          </p>
          <p
            style={{
              margin: "0 auto 22px",
              maxWidth: 700,
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "#64748b",
            }}
          >
            From the Eastern Ghats and tribal heritage to ancient temples, pristine beaches and
            wetlands — experience the many sides of Odisha.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
            }}
          >
            {[
              { icon: "🏔️", label: "Eastern Ghats" },
              { icon: "🌿", label: "Tribal Heritage" },
              { icon: "🏛️", label: "Temples" },
              { icon: "🌊", label: "Beaches" },
              { icon: "🦩", label: "Wetlands & Wildlife" },
            ].map((chip) => (
              <span
                key={chip.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 14px",
                  borderRadius: 9999,
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  color: "#065f46",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                <span aria-hidden="true" style={{ fontSize: "0.95rem" }}>
                  {chip.icon}
                </span>
                {chip.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{ marginBottom: 34 }}
        >
          <SearchBar query={query} onChange={setQuery} resultCount={filtered.length} />
        </motion.div>

        {/* ── Two-column destination layout ──────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="tour-layout"
        >
          {/* Sidebar */}
          <aside style={{ minWidth: 0 }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 18,
                padding: "20px 18px",
                border: "1px solid #eef2f7",
                boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
              }}
            >
              <CategoryFilter active={category} onChange={setCategory} />
              <div style={{ height: 14 }} />
              <DestinationSidebar
                items={filtered}
                activeId={active.id}
                onSelect={setActiveId}
                onShowAll={() => {
                  setCategory("All");
                  setQuery("");
                }}
              />
            </div>
          </aside>

          {/* Details */}
          <main style={{ minWidth: 0 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <DestinationDetails destination={active} onSelectNearby={setActiveId} />
              </motion.div>
            </AnimatePresence>
          </main>
        </motion.div>

        {/* ── Conference + Tourism ───────────────────── */}
        <div style={{ marginTop: 70 }}>
          <SectionHeading
            align="center"
            eyebrow="Beyond the Conference"
            title="Make the Most of Your Conference Visit"
            subtitle="Your journey to ICSEECA–ICETS 2027 can be more than a conference experience. Take time to discover Odisha's natural beauty, cultural heritage, historic architecture and diverse ecosystems."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="tour-feature-grid"
          >
            {[
              {
                icon: "🌿",
                title: "Explore Nature",
                text: "Discover the Eastern Ghats, wetlands, forests and coastal ecosystems.",
              },
              {
                icon: "🏛️",
                title: "Experience Heritage",
                text: "Explore Odisha's temples, historic monuments and cultural traditions.",
              },
              {
                icon: "🌊",
                title: "Discover the Coast",
                text: "Experience beaches, coastal landscapes and the Bay of Bengal.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={springItem}
                className="tour-card-hover"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: "1px solid #eef2f7",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
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
                  style={{
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.86rem", lineHeight: 1.7, color: "#64748b", margin: 0 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Travel Tips ────────────────────────────── */}
        <div style={{ marginTop: 70 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1px solid #bbf7d0",
              borderLeft: "5px solid #059669",
              borderRadius: 18,
              padding: "28px 30px",
              maxWidth: 980,
              margin: "0 auto",
              boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#065f46",
              }}
            >
              💡 Travel Tips for International Visitors
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                [
                  "Visa",
                  "International delegates should verify the latest Indian visa and e-visa requirements through official Government of India sources.",
                ],
                ["Currency", "Indian Rupee (INR / ₹) is the local currency."],
                [
                  "Language",
                  "English and Hindi are widely understood in major tourist and academic areas. Odia is the primary regional language.",
                ],
                [
                  "Weather",
                  "Check seasonal weather conditions before planning outdoor activities.",
                ],
                [
                  "Transportation",
                  "Flights, trains, buses, taxis and private vehicles can be used depending on the destination.",
                ],
                ["Safety", "Follow local guidelines and use trusted transportation services."],
                [
                  "Respect Local Culture",
                  "Respect local customs, religious practices, wildlife and environmentally sensitive areas.",
                ],
              ].map(([label, text], i) => (
                <li
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "7px 0",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "#334155",
                  }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #a7f3d0, #6ee7b7)",
                      color: "#065f46",
                      fontWeight: 800,
                      fontSize: "0.72rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 3,
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span>
                    <strong style={{ color: "#065f46", fontWeight: 700 }}>{label}: </strong>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Travel Responsibly ─────────────────────── */}
        <div style={{ marginTop: 70 }}>
          <SectionHeading
            align="center"
            eyebrow="Sustainable Travel"
            title="Travel Responsibly"
            subtitle="As an international conference focused on Earth, environment and sustainability, we encourage every delegate to explore Odisha responsibly."
          />
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="tour-responsible-grid"
          >
            {[
              {
                icon: "♻️",
                title: "Reduce Waste",
                text: "Carry reusable bottles and avoid single-use plastics.",
              },
              {
                icon: "🌱",
                title: "Protect Nature",
                text: "Do not disturb wildlife, plants or sensitive ecosystems.",
              },
              {
                icon: "🏛️",
                title: "Respect Heritage",
                text: "Help preserve monuments and cultural sites.",
              },
              {
                icon: "🤝",
                title: "Support Local Communities",
                text: "Choose local businesses, guides, artisans and sustainable tourism services where possible.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={springItem}
                className="tour-card-hover"
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "26px 22px",
                  border: "1px solid #eef2f7",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    background: "linear-gradient(135deg, #f0fdf4, #d1fae5)",
                    border: "1px solid #a7f3d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.35rem",
                    marginBottom: 14,
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
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#64748b", margin: 0 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Closing note ───────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          style={{
            marginTop: 64,
            textAlign: "center",
            background: "linear-gradient(135deg, #052e1f 0%, #065f46 100%)",
            borderRadius: 20,
            padding: "34px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(52,211,153,0.14), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h3
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Welcome to Odisha.{" "}
            <span style={{ color: "#6ee7b7" }}>See you at ICSEECA–ICETS 2027.</span>
          </h3>
          <p
            style={{
              margin: "0 auto 22px",
              maxWidth: 700,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#cbd5e1",
            }}
          >
            We look forward to welcoming international and national delegates to the Paralakhemundi
            Campus of Centurion University of Technology and Management. While you are here, take a
            moment to discover the land, culture and heritage around you.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <MotionLink
              to="/venue-travel"
              className="tour-btn"
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 26px",
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                background: "linear-gradient(135deg, #34d399, #10b981)",
                color: "#052e1f",
                border: "none",
              }}
            >
              Plan Your Journey <span aria-hidden="true">→</span>
            </MotionLink>
            <MotionLink
              to="/visa"
              className="tour-btn-outline"
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 26px",
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                background: "transparent",
                color: "#a7f3d0",
                border: "1.5px solid #34d399",
              }}
            >
              Visa Information
            </MotionLink>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
