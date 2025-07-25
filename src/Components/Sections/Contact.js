import React from 'react';
import ContactForm from './../Form/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 animate-fadeIn">
          Contact Us Today
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Our Information</h3>
            <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start group">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1 text-blue-800">Office Address</p>
                  <p className="text-gray-700">
                    Office #12 first floor City Business Icon 1 near Tandori Restaurant Newcity Phase 2 GT road Wah Cant
                  </p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1 text-blue-800">Email</p>
                  <a href="mailto:taxavy@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    taxavy@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <FaWhatsapp className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1 text-blue-800">WhatsApp</p>
                  <a href="https://wa.me/03178770174" className="text-blue-600 hover:text-blue-800 transition-colors">
                    0317 8770174
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <FaPhone className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1 text-blue-800">Call Us</p>
                  <a href="tel:03178770174" className="text-blue-600 hover:text-blue-800 transition-colors">
                    0317 8770174
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInRight">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;