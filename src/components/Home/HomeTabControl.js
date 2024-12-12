import React, { useState } from "react";
import "../../TabHomeSection.css";
import tabimg1 from "../../images/tabimg1.png"

const TabHomeSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Organic Social Media Management" },
    { id: "tab2", label: "Content Strategy" },
    { id: "tab3", label: "Content Creation & Design" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className="tab-content-section">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <h2>Organic Social Media Management</h2>
                <p>
                  Build an authentic online presence, foster meaningful
                  interactions, and grow a loyal community of followers through
                  organic social media management.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={tabimg1}
                  alt="Organic Social Media Management"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        );
      case "tab2":
        return (
          <div className="tab-content-section">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <h2>Content Strategy</h2>
                <p>
                  Develop a robust content strategy tailored to your brand's
                  goals, audience, and market trends.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/path-to-image2.png"
                  alt="Content Strategy"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        );
      case "tab3":
        return (
          <div className="tab-content-section">
            <div className="row">
              <div className="col-md-6 align-content-center">
                <h2>Content Creation & Design</h2>
                <p>
                  Create visually stunning and engaging content to captivate
                  your audience and reinforce your brand's message.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/path-to-image3.png"
                  alt="Content Creation & Design"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-home-section container">
      {/* First Row */}
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="tabsectionheading">Design Studio for Timeless</h2>
          <p style={{ color: "#F26B6B", fontSize: "20px", fontWeight:"700" }}>
            Drive Your Brand’s Social Engagement with Content That Resonates
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="col-12 text-center">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="row mt-4">{renderContent()}</div>
    </div>
  );
};

export default TabHomeSection;
