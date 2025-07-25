import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Taxavy</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-blue-600">
            Your Trusted Financial Compliance Partner
          </p>
        </div>

        <div className="animate-fadeInUp">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Taxavy is a leading financial consultancy firm established by qualified Chartered Accountants with over a decade of experience. We specialize in providing comprehensive taxation, corporate compliance, and accounting solutions tailored for businesses of all sizes across Pakistan.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our team combines technical expertise with practical business knowledge to deliver more than just regulatory compliance - we provide strategic guidance that helps optimize your financial operations and minimize liabilities while ensuring full adherence to FBR and SECP regulations.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <FaChevronRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Led by certified professionals with 10+ years experience</span>
            </div>
            <div className="flex items-start">
              <FaChevronRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Transparent pricing with no hidden costs</span>
            </div>
            <div className="flex items-start">
              <FaChevronRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Timely filings to avoid penalties</span>
            </div>
            <div className="flex items-start">
              <FaChevronRight className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Personalized solutions for your unique business needs</span>
            </div>
          </div>
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

export default About;