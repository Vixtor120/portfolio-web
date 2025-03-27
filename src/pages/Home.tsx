import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

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

  // Hooks para efectos de parallax
  const slowParallax = useParallaxScroll(0.08);
  const mediumParallax = useParallaxScroll(0.15);
  const fastParallax = useParallaxScroll(-0.1);

  return (
    <div>
      {/* Sección de Inicio */}
      <section id="inicio" className="min-h-screen pt-20 flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span 
              className="text-[#9f7aea] inline-block"
              animate={{ 
                y: [0, -3, 0],
                color: ['#9f7aea', '#8b5cf6', '#9f7aea'] 
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              Inicio
            </motion.span>
          </motion.h1>
        </motion.div>
      </section>
      
      {/* Sección Acerca de */}
      <section id="acerca" className="min-h-screen py-20 flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white"
            variants={fadeInUp}
            custom={0}
            style={mediumParallax}
          >
            Acerca de mí
          </motion.h2>
        </motion.div>
      </section>
      
      {/* Sección de Proyectos */}
      <section id="proyectos" className="min-h-screen py-20 flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white"
            variants={fadeInUp}
            custom={0}
            style={slowParallax}
          >
            Proyectos
          </motion.h2>
        </motion.div>
      </section>
      
      {/* Sección de Habilidades */}
      <section id="habilidades" className="min-h-screen py-20 flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white"
            variants={fadeInUp}
            custom={0}
            style={fastParallax}
          >
            Habilidades
          </motion.h2>
        </motion.div>
      </section>
      
      {/* Sección de Contacto */}
      <section id="contacto" className="min-h-screen py-20 flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white"
            variants={fadeInUp}
            custom={0}
            style={mediumParallax}
          >
            Contacto
          </motion.h2>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
