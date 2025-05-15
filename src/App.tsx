import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
// You need to install react-icons: npm install react-icons
import { FaHome, FaUser, FaLaptopCode, FaCogs, FaEnvelope } from 'react-icons/fa';
import Home from './pages/Home';
import { JSX } from 'react/jsx-runtime';

function App() {
  const [activeLink, setActiveLink] = useState('Inicio');

  const navLinks: { name: string; icon: JSX.Element }[] = [
    { name: 'Inicio', icon: <FaHome /> },
    { name: 'Acerca', icon: <FaUser /> },
    { name: 'Proyectos', icon: <FaLaptopCode /> },
    { name: 'Habilidades', icon: <FaCogs /> },
    { name: 'Contacto', icon: <FaEnvelope /> },
  ];

  // Update the active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = activeLink;

      sections.forEach(section => {
        // Cast to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100; // Offset for the navbar
        const sectionHeight = htmlSection.offsetHeight;
        const sectionId = htmlSection.getAttribute('id');
        
        if (sectionId) {
          const capitalizedId = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            if (currentSection !== capitalizedId) {
              currentSection = capitalizedId;
            }
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-[#121212] text-white min-h-screen">
        <Navbar 
          activeLink={activeLink} 
          setActiveLink={setActiveLink} 
          navLinks={navLinks} 
        />
        
        <Home />
      </div>
    </AnimatePresence>
  );
}

export default App;
