import React from 'react';
import { FaFileAlt, FaBuilding, FaBook, FaMoneyBillWave, FaChartLine, FaHandshake } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "FBR Services",
      items: [
        "NTN & STRN Registration",
        "Income Tax Return Filing",
        "Salary Return & Default Surcharge Payment",
        "Filer Registration / ATL Inclusion",
        "DNFBP Registration",
        "Tax Audit & Representation",
        "Withholding Tax Compliance",
        "Sales Tax Registration & Filing"
      ]
    },
    {
      icon: <FaBuilding className="text-2xl" />,
      title: "SECP Services",
      items: [
        "Pvt Ltd, SMC & LLP Registration",
        "MOA Clause Amendments",
        "Certified True Copy (CTC) of SECP Documents",
        "Registration of Mortgage/Charge",
        "Change in Shareholding/Authorized Capital",
        "Company Dissolution/Winding Up",
        "Annual Return Filing",
        "Registered Office Change"
      ]
    },
    {
      icon: <FaBook className="text-2xl" />,
      title: "Bookkeeping & Accounting",
      items: [
        "Accounting System Setup",
        "Monthly Bookkeeping",
        "Bank Reconciliation",
        "Payroll Management",
        "Financial Statement Preparation",
        "Budgeting & Forecasting",
        "Cash Flow Management",
        "Financial Analysis & Reporting"
      ]
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      title: "Tax Advisory",
      items: [
        "Tax Planning & Strategy",
        "Tax Compliance Review",
        "Transfer Pricing Advisory",
        "Tax Dispute Resolution",
        "International Taxation",
        "Tax Incentives & Exemptions",
        "Capital Gains Tax Advisory",
        "Tax Health Checkup"
      ]
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Business Consulting",
      items: [
        "Business Registration Advisory",
        "Corporate Structuring",
        "Regulatory Compliance",
        "License & Permit Assistance",
        "Feasibility Studies",
        "Business Process Optimization",
        "Startup Advisory Services",
        "Risk Management Consulting"
      ]
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Corporate Services",
      items: [
        "Company Secretary Services",
        "Board Meeting Management",
        "Shareholder Agreement Drafting",
        "Due Diligence Services",
        "Mergers & Acquisitions Support",
        "Corporate Governance Advisory",
        "ESG Compliance Services",
        "Annual Compliance Management"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Professional Services</h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-800">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li 
                    key={i} 
                    className="flex items-start group"
                  >
                    <span className="text-blue-500 mr-3 mt-1 group-hover:text-blue-600 transition-colors">•</span>
                    <span className="text-gray-700 group-hover:text-blue-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;