import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers | ICEEA - ICETS 2027" },
      { name: "description", content: "Speakers at ICEEA-ICETS 2027 — keynote, international, and Indian speakers" },
    ],
  }),
  component: SpeakersPage,
});

type Speaker = {
  name: string;
  topic: string;
  org: string;
  date: string;
  time: string;
  duration: string;
  image: string;
  category: "keynote" | "international" | "invited" | "faculty" | "student";
};

const speakersList: Speaker[] = [
  {
    name: "Prof. R.R. Biradar",
    topic: "Climate Change and Global Sustainability",
    org: "Central University of Karnataka, Kalaburagi - India",
    date: "26th October 2027",
    time: "09:00 AM - 10:00 AM",
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    category: "keynote",
  },
  {
    name: "Dr. Arturo Reyes Sandoval",
    topic: "Interdisciplinary Environmental Research Initiatives",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    date: "26th October 2027",
    time: "10:30 AM - 11:30 AM",
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    category: "international",
  },
  {
    name: "Dr. Martha Leticia Vazquez Gonzalez",
    topic: "Biodiversity and Ecological Conservation Planning",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    date: "27th October 2027",
    time: "09:00 AM - 09:45 AM",
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    category: "international",
  },
  {
    name: "Dr. Roque Juan Carrasco Aquino",
    topic: "Socio-Urban Problems in the Anthropocene",
    org: "National Polytechnic Institute (IPN), Mexico City, Mexico",
    date: "27th October 2027",
    time: "11:00 AM - 11:45 AM",
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    category: "invited",
  },
  {
    name: "Dr. Babu Nallusamy",
    topic: "Geology and Hydrological Watershed Management",
    org: "Central University of Karnataka (CUK), India",
    date: "28th October 2027",
    time: "10:00 AM - 10:45 AM",
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    category: "faculty",
  },
];

function SpeakersPage() {
  const [activeTab, setActiveTab] = useState<"keynote" | "international" | "invited" | "faculty" | "student">("keynote");

  const filteredSpeakers = speakersList.filter((s) => s.category === activeTab);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "system-ui,sans-serif" }}>
      <PageHeader />

      {/* Main Title Banner */}
      <section style={{ padding: "40px 24px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#115e3b", margin: "0 0 10px" }}>
            Speakers - ICEEA-ICETS 2027
          </h1>
          <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 600, color: "#475569", margin: "0 0 8px" }}>
            Distinguished experts from around the world
          </p>
          <p style={{ fontSize: "0.9rem", color: "#64748b", margin: "0 0 25px" }}>
            Those who had their abstracts reviewed and accepted for presentation.
          </p>

          {/* Navigation Filter Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "35px" }}>
            {[
              { id: "keynote", label: "Keynote Speakers" },
              { id: "international", label: "International Speakers" },
              { id: "invited", label: "Invited Speakers" },
              { id: "faculty", label: "Faculty Speakers" },
              { id: "student", label: "Student Presenters" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  background: activeTab === tab.id ? "#166534" : "#fff",
                  color: activeTab === tab.id ? "#fff" : "#475569",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: "10px 24px",
                  borderRadius: "9999px",
                  border: activeTab === tab.id ? "none" : "1px solid #cbd5e1",
                  cursor: "pointer",
                  boxShadow: activeTab === tab.id ? "0 4px 10px rgba(22,101,52,0.25)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Display Section */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {filteredSpeakers.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "30px",
                justifyContent: "center",
              }}
            >
              {filteredSpeakers.map((speaker, index) => (
                <div
                  key={speaker.name}
                  style={{
                    background: "#fff",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.03)";
                  }}
                >
                  {/* Portrait Area */}
                  <div style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  {/* Profile info block */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1e293b", margin: "0 0 6px" }}>
                      {speaker.name}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 550, margin: "0 0 12px" }}>
                      {speaker.org}
                    </p>

                    <div style={{ marginTop: "auto", borderTop: "1px solid #f1f5f9", paddingTop: "14px" }}>
                      <p style={{ fontSize: "0.8rem", color: "#475569", margin: "0 0 4px" }}>
                        <strong>Topic:</strong> {speaker.topic}
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 4px" }}>
                        📅 {speaker.date}
                      </p>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 16px" }}>
                        ⏱ {speaker.time} ({speaker.duration})
                      </p>

                      <button
                        style={{
                          width: "100%",
                          background: "#166534",
                          color: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          padding: "10px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#14532d")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#166534")}
                      >
                        View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 24px", background: "#fff", borderRadius: "18px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎤</div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#1e293b", margin: "0 0 8px" }}>
                Lineup coming soon
              </h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", margin: 0 }}>
                We are currently compiling and reviewing the session schedules for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
