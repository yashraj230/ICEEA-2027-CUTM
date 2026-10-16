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
    title: "Geology & Earth Materials",
    icon: "🌍",
    color: "#e74c3c",
    areas: [
      "Hydrology (River Basin & Watershed Processes)",
      "Groundwater (Aquifer Systems, Recharge & Sustainability)",
      "Fluvial evolution and climate-driven hydrology",
      "Earth System History & Anthropocene transitions",
      "Critical and strategic minerals, REE and battery metals",
      "Petrology, deep Earth processes and isotopic geochemistry",
      "Geoheritage, Cultural & Historical Value",
      "Geotourism and Community-Based Benefits",
      "Integration with Biodiversity & Cultural Tourism",
      "Medical geology",
    ],
  },
  {
    title: "Geo-Environmental Science & Sustainability",
    icon: "♻️",
    color: "#27ae60",
    areas: [
      "Climate extremes, multi-hazards and Earth system crises",
      "Sustainable resource governance and nature-based solutions",
      "Environmental impact assessment and ESG analytics",
      "Pollution, waste management, and ecological restoration",
      "Environmental policies and regulations",
      "Carbon cycle research and sequestration",
      "Net-zero pathways and climate action",
      "Disaster Management & Litigation",
    ],
  },
  {
    title: "Marine Geo-Science & Coastal Systems",
    icon: "🌊",
    color: "#3498db",
    areas: [
      "Marine ecosystem change and coastal vulnerability",
      "Marine sediments, microfossils and paleoclimate archives",
      "Continental-margin processes and marine geohazards",
      "Blue economy strategies and sustainable resource use",
      "Coastal zone management and shoreline dynamics",
      "Climate resilience for coastal communities",
      "Coastal Hydrology & Water Dynamics",
    ],
  },
  {
    title: "Technological & Applied Earth Sciences",
    icon: "💻",
    color: "#16a085",
    areas: [
      "Irrigation & Drainage Systems",
      "Hydraulics (Flow Mechanics, Canal and River Engineering)",
      "Design and Construction Methodology & Technology (Water Infrastructure)",
      "Digital Earth: AI, Machine Learning, and remote sensing",
      "Quantum Nexus & computing in Earth sciences",
      "Geo-intelligence models and predictive analytics",
      "Quantum-enhanced environmental monitoring",
      "Big Data analytics for climate modeling",
      "Sustainable subsurface resources and green mining",
      "Energy transition resource security",
      "Climate resilience for food, water and cities",
      "Applied microfossils for industry and sea-level studies",
    ],
  },
  {
    title: "Political & Social Dimensions of Environment",
    icon: "🏛️",
    color: "#9b59b6",
    areas: [
      "Water management, Pricing and Economics",
      "Water and Social Dimensions (Equity, Gender Issues)",
      "World cities against the socio-environmental phenomena",
      "Crisis related to production and consumption of matter, energy and information",
      "Role of universities in the creation of Science and Technology",
      "Social movements facing global warming, climate change and alternatives",
      "Nature in modified way, social and political challenges to science and society on green environment",
      "Environmental Sociology and environmental impacts on human beings",
      "AI in political & social sciences for future",
    ],
  },
  {
    title: "Disaster Management, Environmental Sustainability, Governance & Green Development",
    icon: "🌐",
    color: "#efb169",
    areas: [
      "Water Law, Conflicts & Governance",
      "Flood & Drought Risk Management (Hydrology-based hazards)",
      "Climate change & Adaptation",
      "Green Finance & Carbon Markets",
      "Renewable Energy & Green Technology",
      "Environment Policy & Governance",
      "Sustainable Resource Management",
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
