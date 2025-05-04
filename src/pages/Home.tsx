import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import HomeSection from '../components/sections/HomeSection';
import AboutSection from '../components/sections/AboutSection';
import ProyectoSection from '../components/sections/ProyectoSection';
import HabilidadesSection from '../components/sections/HabilidadesSection';
import ContactSection from '../components/sections/ContactSection';

// Animaciones para los elementos de las secciones
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      delay: custom * 0.2
    }
  })
};

// Contenedor para animaciones escalonadas
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1
    }
  }
};

// Efecto de parallax para el scroll
const useParallaxScroll = (speed = 0.1) => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    y: scrollY * speed
  };
};

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
