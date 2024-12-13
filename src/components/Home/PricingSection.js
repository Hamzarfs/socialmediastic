import React from "react";
import "../../PricingSection.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingSection = () => {
  const pricingPlans = [
    {
      type: "BASIC",
      price: 19,
      features: [
        "Access to All Features",
        "1k lookups / per month",
        "No API Credits",
        "10 Monitoring Quota",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "Ip Monitoring",
        "Backlink Monitoring",
      ],
      comingSoon: ["Domain Name Appraisal", "Ip Monitoring", "Backlink Monitoring"],
      buttonText: "Start free 14-day Trial",
      note: "No credit card required",
      isPopular: false,
    },
    {
      type: "PROFESSIONAL",
      price: 49,
      features: [
        "Access to All Features",
        "1k lookups / per month",
        "30k API Credits / month",
        "10 Monitoring Quota",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "Ip Monitoring",
        "Backlink Monitoring",
      ],
      comingSoon: ["Domain Name Appraisal", "Ip Monitoring", "Backlink Monitoring"],
      buttonText: "Start free 14-day Trial",
      note: "No credit card required",
      isPopular: true,
    },
    {
      type: "ADVANCED",
      price: 99,
      features: [
        "Access to All Features",
        "1k lookups / per month",
        "30k API Credits / month",
        "10 Monitoring Quota",
        "60 minutes Monitoring interval",
        "20% discount on backorders",
        "Domain Name Appraisal",
        "Ip Monitoring",
        "Backlink Monitoring",
      ],
      comingSoon: ["Domain Name Appraisal", "Ip Monitoring", "Backlink Monitoring"],
      buttonText: "Start free 14-day Trial",
      note: "No credit card required",
      isPopular: false,
    },
  ];

  return (
    <section className="pricing-section-home">
      <div className="container">
        <div className="row">
          {pricingPlans.map((plan, index) => (
            
            <div
              key={index}
              className={`col-md-4 pricing-card ${
                plan.isPopular ? "popular" : ""
              }`}
            >
              {plan.isPopular}
              <div className={`card ${plan.isPopular ? "highlight" : ""}`}>

                
                
              <div className="basic-text">
  {plan.isPopular}
  <h4>{plan.type}</h4>
</div>

                <p className="card-paragraph">
                    {plan.type === "PROFESSIONAL"
                      ? "For professional domain investors"
                      : "For all individuals and starters who want to start domaining."}
                  </p>
                <div className="divider"></div>
                <div className="card-price">
                  <h2>${plan.price}</h2>
                  <p>Per member, per Month</p>
                </div>
                <div className="divider"></div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      {plan.comingSoon.includes(feature) ? (
                        <>
                          <FaCheck className="icon-check" />
                          {feature}
                          <span className="coming-soon">Coming Soon</span>
                        </>
                      ) : feature === "No API Credits" ? (
                        <>
                          <FaTimes className="icon-cross" />
                          {feature}
                        </>
                      ) : (
                        <>
                          <FaCheck className="icon-check" />
                          {feature}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <button
                  className={`trial-btn ${plan.isPopular ? "popular-btn" : ""}`}
                >
                  {plan.buttonText}
                </button>
                <p className="note">{plan.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
