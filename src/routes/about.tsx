import { createFileRoute, Link } from "@tanstack/react-router";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ICEEA - ICETS 2027 | Centurion University" },
      { name: "description", content: "International Conference on Earth and Environment in the Anthropocene - About ICEEA-ICETS 2027 at Centurion University" },
    ],
  }),
  component: AboutPage,
});

const themes = [
  {
    title: "Geology & Earth Materials",
    icon: "🌍",
    color: "#e74c3c",
    bgClass: "from-red-50 to-orange-50",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=600&auto=format&fit=crop",
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
    bgClass: "from-green-50 to-emerald-50",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
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
    bgClass: "from-emerald-50 to-green-50",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    areas: [
      "Marine ecosystem change and coastal vulnerability",
      "Marine sediments, microfossils and paleoclimate archives",
      "Continental-margin processes and marine geohazards",
      "Blue-economy strategies and sustainable resource use",
      "Coastal zone management and shoreline dynamics",
      "Climate resilience for coastal communities",
      "Coastal Hydrology & Water Dynamics",
    ],
  },
  {
    title: "Technological & Applied Earth Sciences",
    icon: "💻",
    color: "#16a085",
    bgClass: "from-teal-50 to-emerald-50",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
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
      "Energy-transition resource security",
      "Climate resilience for food, water and cities",
      "Applied microfossils for industry and sea-level studies",
    ],
  },
  {
    title: "Political & Social Dimensions of Environment",
    icon: "🏛️",
    color: "#9b59b6",
    bgClass: "from-purple-50 to-pink-50",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
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
    color: "#e67e22",
    bgClass: "from-orange-50 to-amber-50",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=600&auto=format&fit=crop",
    areas: [
      "Water Law, Conflicts & Governance",
      "Flood & Drought Risk Management (Hydrology-based Hazards)",
      "Climate change & Adaptation",
      "Green Finance & Carbon Markets",
      "Renewable Energy & Green Technology",
      "Environment Policy & Governance",
      "Sustainable Resource Management",
    ],
  },
];

function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Hero Banner Section */}
      <section style={{ background: "linear-gradient(135deg, #eefcf3 0%, #dbf8e7 100%)", padding: "40px 24px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#115e3b", margin: "0 0 10px" }}>
            ABOUT ICEEA - ICETS 2027
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 600, color: "#069865", margin: "0 0 25px" }}>
            International Conference on Earth and Environment in the Anthropocene
          </p>

          {/* Action Tabs / Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
            <Link
              to="/about"
              style={{
                background: "#0d8a57",
                color: "#fff",
                fontWeight: 700,
                fontSize: "14px",
                padding: "10px 24px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(13,138,87,0.25)",
              }}
            >
              About Conference
            </Link>
            <Link
              to="/about-university"
              style={{
                background: "#fff",
                color: "#475569",
                fontWeight: 600,
                fontSize: "14px",
                padding: "10px 24px",
                borderRadius: "9999px",
                textDecoration: "none",
                border: "1px solid #cbd5e1",
              }}
            >
              Centurion University of Technology and Management
            </Link>
            <Link
              to="/about-ipn"
              style={{
                background: "#fff",
                color: "#475569",
                fontWeight: 600,
                fontSize: "14px",
                padding: "10px 24px",
                borderRadius: "9999px",
                textDecoration: "none",
                border: "1px solid #cbd5e1",
              }}
            >
              IPN Mexico
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Card Container */}
      <section style={{ padding: "0 24px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* About ICEEA - 2027 Section */}
            <div style={{ marginBottom: "35px" }}>
              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  borderLeft: "5px solid #0d8a57",
                  paddingLeft: "15px",
                  marginBottom: "16px",
                }}
              >
                About ICEEA - 2027
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#475569", textAlign: "justify", marginBottom: "16px" }}>
                ICEEA-2027 aims to bring together researchers, academicians, environmentalists, policymakers, and industry leaders to address complex Earth and environmental challenges emerging during the Anthropocene epoch. The conference promotes interdisciplinary dialogue focusing on climate change, sustainability, natural resources, geosciences, environmental degradation, and advanced technological solutions.
              </p>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#475569", textAlign: "justify", marginBottom: "16px" }}>
                This international conference actively convenes the world's leading researchers, faculty, students, and industry professionals to disseminate, debate, and catalyze innovative solutions for the most pressing challenges in Earth and Environmental Sciences.
              </p>
            </div>

            {/* About ICETS - 2027 Section */}
            <div style={{ marginBottom: "35px" }}>
              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  borderLeft: "5px solid #0d8a57",
                  paddingLeft: "15px",
                  marginBottom: "16px",
                }}
              >
                About ICETS - 2027
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#475569", textAlign: "justify", marginBottom: "20px" }}>
                ICETS is an internationally recognized congress focusing on environmental and territorial studies. The 19th edition continues its mission to build scientific collaborations between nations for sustainable environmental governance and resilient socio-ecological systems.
              </p>

              {/* Highlight info box */}
              <div
                style={{
                  background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                  borderLeft: "5px solid #d97706",
                  borderRadius: "14px",
                  padding: "20px 24px",
                  marginBottom: "25px",
                }}
              >
                <p style={{ margin: 0, fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.7, color: "#b45309" }}>
                  In collaboration with the 19th International Congress on Environmental & Territorial Studies (ICETS-2027), this conference creates an unprecedented platform for global collaboration on environmental and territorial challenges.
                </p>
              </div>
            </div>

            {/* Primary Objectives Section */}
            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  borderLeft: "5px solid #0d8a57",
                  paddingLeft: "15px",
                  marginBottom: "16px",
                }}
              >
                Primary Objectives
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#475569", marginBottom: "16px" }}>
                Our primary objective is to foster dynamic collaboration among global experts, creating a unique platform to:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Share groundbreaking research and transformative ideas",
                  "Establish prolific partnerships across academic, scientific, and industrial sectors",
                  "Bridge the gap between theoretical knowledge and practical application",
                  "Create long-term global networks that drive impactful research and sustainable innovation",
                  "Gain exposure to cutting-edge technologies, methodologies, and international best practices",
                ].map((text, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "12px",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#475569",
                    }}
                  >
                    <span style={{ color: "#d97706", fontWeight: "bold", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0 }}>
                      ★
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conference Goals Section */}
            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  borderLeft: "5px solid #0d8a57",
                  paddingLeft: "15px",
                  marginBottom: "16px",
                }}
              >
                Conference Goals
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Address global environmental concerns of the Anthropocene.",
                  "Strengthen international scientific collaborations.",
                  "Promote sustainable development and environmental governance.",
                  "Integrate geosciences and environmental policy implementation.",
                  "Encourage cutting-edge research in climate change geology, biodiversity, energy, and water resources.",
                ].map((text, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "12px",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#475569",
                    }}
                  >
                    <span style={{ color: "#0d8a57", fontWeight: "bold", fontSize: "1.2rem", lineHeight: 1, flexShrink: 0 }}>
                      ✓
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conference Vision Section */}
            <div style={{ marginBottom: "45px" }}>
              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  borderLeft: "5px solid #0d8a57",
                  paddingLeft: "15px",
                  marginBottom: "16px",
                }}
              >
                Conference Vision
              </h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#475569", textAlign: "justify", margin: 0 }}>
                The conference program will feature keynote lectures by eminent scientists and presentations of peer-reviewed original research from participants worldwide. ICEEA-2027 aspires to become a landmark forum for shaping future directions in environmental resilience and sustainable development.
              </p>
            </div>

            {/* Key Themes Section */}
            <div style={{ marginBottom: "50px" }}>
              <h2
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  borderLeft: "5px solid #0d8a57",
                  paddingLeft: "15px",
                  marginBottom: "8px",
                }}
              >
                Key Themes
              </h2>

              <div style={{ textAlign: "center", marginBottom: "35px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#581c87", margin: "10px 0 5px" }}>
                  Conference Themes
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: "15px" }}>
                  Exploring Critical Challenges and Innovative Solutions for Our Planet's Future
                </p>
                <div style={{ display: "inline-block", background: "linear-gradient(135deg, #700151, #764ba2)", padding: "2px", borderRadius: "8px" }}>
                  <div style={{ background: "#fff", borderRadius: "6px", padding: "4px 24px" }}>
                    <span style={{ color: "#0d8a57", fontWeight: 700, fontSize: "0.95rem" }}>ICEEA - ICETS - 2027</span>
                  </div>
                </div>
              </div>

              {/* Grid of Themes Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
                  gap: "24px",
                }}
              >
                {themes.map((theme) => (
                  <div
                    key={theme.title}
                    style={{
                      background: "#fff",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      border: "1px solid #f1f5f9",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                  >
                    {/* Theme Image */}
                    <div style={{ height: "140px", overflow: "hidden", position: "relative" }}>
                      <img
                        src={theme.image}
                        alt={theme.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          background: theme.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                        }}
                      >
                        {theme.icon}
                      </div>
                    </div>

                    <div style={{ padding: "20px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: theme.color,
                          background: `${theme.color}15`,
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Theme Focus
                      </span>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1e293b", margin: "10px 0 15px", lineHeight: 1.3, minHeight: "44px" }}>
                        {theme.title}
                      </h3>

                      <h4 style={{ fontSize: "12px", fontWeight: 700, color: "#64748b", margin: "0 0 8px", textTransform: "uppercase" }}>
                        Research Areas:
                      </h4>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {theme.areas.slice(0, 3).map((area, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                              padding: "4px 0",
                              fontSize: "0.85rem",
                              color: "#475569",
                              lineHeight: 1.5,
                            }}
                          >
                            <span style={{ color: theme.color, flexShrink: 0, fontSize: "1rem" }}>•</span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                      {theme.areas.length > 3 && (
                        <Link
                          to="/themes"
                          style={{
                            display: "inline-block",
                            marginTop: "12px",
                            color: theme.color,
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "opacity 0.2s",
                          }}
                        >
                          + View More Areas
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conference Dates Info Box */}
            <div
              style={{
                background: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                marginBottom: "35px",
                border: "1px solid #6ee7b7",
              }}
            >
              <h3 style={{ fontWeight: 800, color: "#047857", margin: "0 0 8px", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Conference Dates
              </h3>
              <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>
                8ᵗʰ – 10ᵗʰ November, 2027
              </p>
              <p style={{ fontSize: "0.95rem", color: "#334155", margin: 0, fontWeight: 550 }}>
                Centurion University of Technology and Management, Paralakhemundi, Odisha, India
              </p>
            </div>

            {/* Organized by Box */}
            <div
              style={{
                background: "linear-gradient(135deg, #0f2d20 0%, #0d1e16 100%)",
                borderRadius: "18px",
                padding: "35px 24px",
                textAlign: "center",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 style={{ fontWeight: 800, margin: "0 0 14px", fontSize: "1.2rem", letterSpacing: "0.05em", color: "#34d399" }}>
                Organised by &amp; In Association With
              </h3>
              <p style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px" }}>
                Department of Civil Engineering, School of Engineering and Technology
              </p>
              <p style={{ fontSize: "0.95rem", opacity: 0.85, margin: "0 0 16px" }}>
                Centurion University of Technology and Management, Paralakhemundi, Odisha - India
              </p>

              <p style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                Co-Organiser
              </p>
              <p style={{ fontSize: "0.95rem", fontWeight: 600, margin: "0 0 20px" }}>
                Center for Interdisciplinary Studies on Environment and Development (CIIEMAD) <br />
                National Polytechnic Institute (IPN), Mexico City, Mexico
              </p>

              {/* Logo grid inside container */}
              <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ background: "#fff", padding: "6px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/RIISPSURA.jpeg"
                    alt="RIISPSURA Logo"
                    style={{ height: "40px", width: "40px", objectFit: "contain" }}
                  />
                </div>
                <div style={{ background: "#fff", padding: "6px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src="/IPN.png"
                    alt="IPN Logo"
                    style={{ height: "40px", width: "40px", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "35px" }}>
              <Link
                to="/"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #0d8a57, #0b6943)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px 28px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(13,138,87,0.3)",
                }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
