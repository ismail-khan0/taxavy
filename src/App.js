import React from 'react';
import Header from './Components/Header/Header';
import About from './Components/Sections/About';
import Services from './Components/Sections/Services';
import WhyUs from './Components/Sections/WhyUs';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Sections/Contact';
import WhatsappButton from './Components/WhatsappButton';





function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Header/>
      <About/>
      <Services/>
      <WhyUs/>
      <Contact/>
    <Footer/>
    <WhatsappButton/>
      
    </div>
  );
}

export default App;