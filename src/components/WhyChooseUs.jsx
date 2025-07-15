import React from "react";
import {
  Lightbulb,
  Users,
  Clock,
  ClipboardCheck,
  Handshake,
  MessageSquare,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Lightbulb className="icon" />,
      title: "End-to-End Turnkey Solutions",
      description:
        "From concept to completion — we manage everything, including design, sourcing, execution, and handover.",
    },
    {
      icon: <Users className="icon" />,
      title: "Creative & Experienced Team",
      description:
        "Our expert designers and project managers bring deep industry knowledge and creative excellence to every project.",
    },
    {
      icon: <Clock className="icon" />,
      title: "Timely Project Delivery",
      description:
        "We follow streamlined workflows to ensure your project is completed on time without compromising on quality.",
    },
    {
      icon: <ClipboardCheck className="icon" />,
      title: "Transparent Process",
      description:
        "No surprises — clear costs, timelines, and constant updates throughout the journey.",
    },
    {
      icon: <Handshake className="icon" />,
      title: "Strong Industry Partnerships",
      description:
        "We collaborate with top vendors, contractors, and specialists to bring the best to your space.",
    },
    {
      icon: <MessageSquare className="icon" />,
      title: "Tailored Client Support",
      description:
        "Your vision, our mission — personalized guidance and support at every stage of the project.",
    },
  ];

  return (
    <>
      <style>{`
        .why-section {
          padding: 4rem 1rem;
          background: linear-gradient(to bottom right, #f8fafc, #e0f2fe);
        }
        .why-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .why-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .why-title {
          font-size: 2.5rem;
          color: #CB4D29;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .why-subtitle {
          font-size: 1.2rem;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
		  text-align:center;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .why-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          cursor: default;
        }
        .why-card:hover {
          background-color: #CB4D29;
          transform: translateY(-8px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        }
        .why-icon {
          background-color: #e0f2fe;
          padding: 1rem;
          border-radius: 1rem;
          display: inline-block;
          margin-bottom: 1.5rem;
          transition: background-color 0.3s;
        }
        .why-card:hover .why-icon {
          background-color: white;
        }
        .icon {
          width: 32px;
          height: 32px;
          color: #CB4D29;
          transition: color 0.3s;
        }
        .why-card:hover .icon {
          color: #CB4D29;
        }
        .why-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
          transition: color 0.3s;
        }
        .why-card:hover .why-card-title {
          color: white;
        }
        .why-card-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #475569;
          transition: color 0.3s;
        }
        .why-card:hover .why-card-text {
          color: white;
        }
      `}</style>
      <section className="why-section">
        <div className="why-container">
          <div className="why-header">
            <h2 className="why-title">Why Choose Us?</h2>
            <p className="why-subtitle">
              We deliver exceptional results through expertise, innovation, and
              unwavering commitment to your success.
            </p>
          </div>
          <div className="why-grid">
            {features.map((feature, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{feature.icon}</div>
                <h3 className="why-card-title">{feature.title}</h3>
                <p className="why-card-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
