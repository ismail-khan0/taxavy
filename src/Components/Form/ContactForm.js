import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzXe4_gco8nHMkoMOhFlTb7Q_R8-s2DBuwpHzXoKwOApdXUuDuBYOMVP8tjUg7sQCIiZA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData)
      });
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.log('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-700">Send us a message</h3>
      
      <div className="space-y-5">
        <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <label htmlFor="service" className="block mb-2 font-medium text-gray-700">Service Interested In</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
            required
          >
            <option value="">Select a service</option>
            <option value="FBR Services">FBR Services</option>
            <option value="SECP Services">SECP Services</option>
            <option value="Bookkeeping">Bookkeeping & Accounting</option>
            <option value="Corporate Services">Corporate Services</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          ></textarea>
        </div>
        
        <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-bold ${isSubmitting ? 'opacity-70' : ''}`}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <FaPaperPlane /> Submit Message
              </>
            )}
          </button>
        </div>
        
        {submitSuccess && (
          <div className="animate-fadeIn bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            Message sent successfully! We'll contact you soon.
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;