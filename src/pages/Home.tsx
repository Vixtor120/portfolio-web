import React, { useEffect } from 'react';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ProyectoSection from '../components/sections/ProyectoSection';
import HabilidadesSection from '../components/sections/HabilidadesSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  // Asegurarse de que las secciones sean accesibles para la navegación
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      section.setAttribute('tabindex', '-1');
    });
  }, []);

  return (
    <main>
      {/* Usando nuestro nuevo componente HomeSection */}
      <HomeSection />
      
      {/* Usando nuestro nuevo componente AboutSection */}
      <AboutSection />

      {/* Usando nuestro nuevo componente ProyectoSection */}
      <ProyectoSection />
      
      {/* Usando nuestro nuevo componente HabilidadesSection */}
      <HabilidadesSection />
      
      {/* Usando nuestro nuevo componente ContactSection */}
      <ContactSection />
    </main>
  );
};

export default Home;
