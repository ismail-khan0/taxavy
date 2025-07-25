import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <div>
      <a
        href="https://wa.me/923178770174"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
}
