
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactBar from './components/ContactBar';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import AboutUs from './components/aboutUs';
import Collaborate from './components/Collaborate';
import OurServices from './components/OurServices';
import OurClients from './components/OurClients';
import Credentials from './components/Credentials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [contactBarVisible, setContactBarVisible] = useState(true);
 
  const handleCloseContactBar = () => {
    setContactBarVisible(false); 
  };

  return (
    <div>
      {contactBarVisible && <ContactBar onClose={handleCloseContactBar} />}
      
      
      <Navbar setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === 'home' && (
          <section id="home">
            <HeaderSection />
            <AboutUs />
            <Collaborate />
            <OurServices />
            <OurClients />
            <Credentials />
            <ContactUs />
          </section>
        )}

       
        {currentPage !== 'home' && (
          <>
            {currentPage === 'about-us' && (
              <>
                <AboutUs />
                <OurClients />
                <OurServices />
                <Credentials />
              </>
            )}
            {currentPage === 'collaborate' && <Collaborate />}
            {currentPage === 'our-services' && ( 
              <>
                <OurServices />
                <OurClients />
                <Credentials />
              </>
            )}
            {currentPage === 'our-clients' && (
              <>
                <OurClients />
                <Credentials />
              </>
            )}
            {currentPage === 'credentials' && <Credentials />}
            {currentPage === 'contact-us' && <ContactUs />}
          </>
        )}
      </main>

      <Footer />
      <CopyRight /> 
    </div>
  );
};

export default App;