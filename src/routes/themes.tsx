import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeUp, MotionLink, springItem, staggerParent, viewportOnce } from "../lib/motion";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "Conference Themes | ICSEECA - ICETS 2027" },
    ],
  }),
  component: ThemesPage,
});

const themes = [
  {
    title: "Earth Systems, Geology, Climate & Geohazards",
    icon: "🌍",
    color: "#e74c3c",
    areas: [
      "Earth-system processes and dynamics",
      "Weather variability, trends and extremes",
      "Climate modelling, projections and scaling",
      "Geology, petrology and Earth processes",
      "Isotopic geochemistry and paleoclimate",
      "Critical minerals, Rare Earth Elements (REE)",
      "Fluvial evolution",
      "Geohazards",
      "Geo-heritage, Geotourism",
      "Microplastics in terrestrial ecosystem",
      "AI and ML in Earth Dynamic studies",
    ],
  },
  {
    title: "Biodiversity, Environment & Ecosystem Resilience",
    icon: "🌿",
    color: "#27ae60",
    areas: [
      "Climate-change impacts on terrestrial and aquatic ecosystems",
      "Forest ecology and biodiversity conservation",
      "Forest degradation and land-use change",
      "Agroforestry and climate-resilient landscapes",
      "Wetlands, mangroves and riparian ecosystems",
      "Wetland biodiversity under climate change",
      "Ecological restoration",
      "Climate-resilient forestry",
      "Traditional and indigenous ecological knowledge",
      "AI/ML in ecological and environmental resilient studies",
      "Sustainable Development Goals (SDG)",
    ],
  },
  {
    title: "Climate Change, Water Resources, Hydrology & Aquatic Systems",
    icon: "💧",
    color: "#0284c7",
    areas: [
      "Climate-change impacts on river flows",
      "Climate variability and watershed processes",
      "Groundwater recharge under climate change",
      "Water scarcity under future climate scenarios",
      "Climate impacts on water quality and availability",
      "Adaptive water-resource management",
      "Reservoir operation under climate uncertainty",
      "Climate projections integrated with hydrological models",
      "Urban water-supply challenges",
      "River-basin and watershed management",
      "Flood and drought hydrology",
      "Microplastics in aquatic ecosystem",
      "AI and ML in water resource management",
    ],
  },
  {
    title: "Sustainable Water Management, Blue Economy & Water Infrastructure",
    icon: "🌊",
    color: "#0891b2",
    areas: [
      "Circular water economy",
      "Smart irrigation and precision water management",
      "Irrigation and drainage systems",
      "Water conservation and management",
      "Eco-hydrology",
      "Nature-based solutions for water management",
      "Sustainable urban water planning",
      "Water recycling",
      "Wastewater treatment and resource recovery",
      "Water-efficient technologies",
      "Community-led water management",
      "Coastal and marine water resources",
      "Blue-economy strategies",
      "AI/ML in sustainable water management and urban planning",
    ],
  },
  {
    title: "Carbon Management, Climate Adaptation and Mitigation & Green Energy Transition",
    icon: "♻️",
    color: "#16a34a",
    areas: [
      "Carbon cycle and ecosystem carbon sequestration",
      "Soil carbon and carbon farming",
      "Climate resilient agriculture, Food, Nutrition and Climate Security",
      "Forest, wetland, mangrove and blue carbon",
      "GHG monitoring and inventories",
      "Renewable energy",
      "Green hydrogen",
      "Energy-transition pathways",
      "Circular economy and resource efficiency",
      "Life-cycle assessment",
      "Carbon markets",
      "Climate finance",
      "Carbon credit and budgeting",
      "Carbon efficient agriculture management",
      "Microplastics in soils and agriculture",
      "AI/ML enabled decision support systems (DSS) in agriculture, environment and climate change studies",
    ],
  },
  {
    title: "Geospatial Technology, GeoAI, Digital Earth & Climate Services",
    icon: "🛰️",
    color: "#6366f1",
    areas: [
      "Earth observation and remote sensing",
      "GIS and spatial analytics",
      "GeoAI and machine learning",
      "Big geospatial data",
      "Predictive spatial analytics",
      "Application of Digital Earth and digital twins",
      "UAV/drone-based monitoring",
      "Geospatial monitoring of forests and water resources",
      "Climate-risk and vulnerability mapping",
      "Smart sensors and IoT",
      "Climate information and decision-support systems",
      "Open climate/geospatial data and interoperability",
      "AI-based climate and ecosystem modelling",
    ],
  },
  {
    title: "Disaster Risk Reduction, Climate Resilience & Sustainable Infrastructure",
    icon: "🛡️",
    color: "#ea580c",
    areas: [
      "Flood and drought risk management",
      "Multi-hazard assessment",
      "Disaster risk reduction",
      "Early-warning systems",
      "Climate-resilient cities",
      "Climate-resilient infrastructure",
      "Climate-resilient agriculture and food systems",
      "Water-infrastructure resilience",
      "Coastal and mountain vulnerability",
      "Post-disaster assessment and recovery",
      "Environmental risk assessment",
      "Smart monitoring for disaster management",
      "Climate services for disaster preparedness",
      "AI/ML in disaster management",
    ],
  },
  {
    title: "Environmental Governance, Climate Finance, Society & Sustainable Development",
    icon: "🏛️",
    color: "#9333ea",
    areas: [
      "Climate policy and Nationally Determined Contributions (NDC) implementation",
      "Environmental governance and regulations",
      "Water law, conflicts and governance",
      "Water pricing and economics",
      "Climate and green finance",
      "Loss and damage",
      "Climate justice and equity",
      "Gender and social dimensions of environmental change",
      "Indigenous and local knowledge",
      "Community-based adaptation",
      "Environmental sociology",
      "Climate migration and livelihoods",
      "Science–policy–society interface",
      "SDGs",
      "AI/ML in Environmental Governance",
    ],
  },
];

function ThemesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={{ padding: "60px 24px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, textAlign: "center", background: "linear-gradient(135deg, #700151, #764ba2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>Conference Themes</h1>
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "1.05rem", marginBottom: 8 }}>Exploring Critical Challenges and Innovative Solutions for Our Planet's Future</p>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #960039, #b40072)", padding: "2px", borderRadius: 8 }}>
              <div style={{ background: "#fff", borderRadius: 6, padding: "4px 24px" }}>
                <h4 style={{ color: "#059669", fontWeight: 700, margin: 0 }}>ICSEECA - ICETS - 2027</h4>
              </div>
            </div>
          </div>

          <motion.div variants={staggerParent} initial="hidden" whileInView="show" viewport={viewportOnce} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {themes.map((theme) => (
              <motion.div key={theme.title} variants={springItem} whileHover={{ y: -6, boxShadow: "0 14px 34px rgba(0,0,0,0.14)" }} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", cursor: "default" }}>
                <div style={{ padding: "24px 24px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: theme.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", boxShadow: `0 4px 12px ${theme.color}33` }}>
                    {theme.icon}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: theme.color, margin: 0, lineHeight: 1.3 }}>{theme.title}</h3>
                </div>
                <div style={{ padding: "0 24px 24px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {theme.areas.slice(0, 4).map((area, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "4px 0", fontSize: "0.85rem", color: "#475569", lineHeight: 1.6 }}>
                        <span style={{ color: theme.color, flexShrink: 0, fontSize: "1rem" }}>•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                  {theme.areas.length > 4 && (
                    <details style={{ marginTop: 8 }}>
                      <summary style={{ color: theme.color, fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>+ Show {theme.areas.length - 4} More</summary>
                      <ul style={{ listStyle: "none", padding: "8px 0 0", margin: 0 }}>
                        {theme.areas.slice(4).map((area, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "3px 0", fontSize: "0.85rem", color: "#475569", lineHeight: 1.6 }}>
                            <span style={{ color: theme.color, flexShrink: 0, fontSize: "1rem" }}>•</span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <MotionLink to="/" whileTap={{ scale: 0.97 }} style={{ display: "inline-block", background: "linear-gradient(135deg, #059669, #047857)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "13px 28px", borderRadius: 9999, textDecoration: "none" }}>← Back to Home</MotionLink>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
