import React from 'react';
import image1 from '../../img/taxavy.jpeg'
const Hero = () => {
  return (
    <header className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center animate-zoom"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fadeIn">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-100">
              TAXAVY
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-10 max-w-2xl mx-auto text-white animate-fadeIn delay-100">
            Professional <span className="font-medium">Tax</span>, <span className="font-medium">Corporate</span>, & <span className="font-medium">Accounting</span> Solutions
          </p>
          
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition duration-300 animate-fadeIn delay-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Add to your global CSS or Tailwind config */}
      <style jsx>{`
        .animate-zoom {
          animation: zoom 15s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Hero;