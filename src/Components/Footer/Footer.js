import react from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">TAXAVY</h3>
            <p>Stay Ahead Stay Tax Savvy</p>
          </div>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
        <div className="mt-2 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TAXAVY. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;