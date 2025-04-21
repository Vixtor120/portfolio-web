import './App.css'
import './styles/globals.css'
import Navbar from './components/Navbar'
import SideNavigation from './components/SideNavigation'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Home from './pages/Home'

function App() {
  const [activeLink, setActiveLink] = useState('Inicio');
  
  // Enlaces de navegación traducidos al español
  const navLinks = [
    { name: 'Inicio', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.03-.028.061-.056.091-.086L12 5.43z" />
      </svg>
    )},
    { name: 'Acerca', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    )},
    { name: 'Proyectos', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    )},
    { name: 'Habilidades', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
      </svg>
    )},
    { name: 'Contacto', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
    )}
  ];

  // Observador de scroll mejorado para detectar la sección actual
  useEffect(() => {
    const handleScroll = () => {
      // Obtener todas las secciones
      const sections = navLinks.map(link => ({
        name: link.name,
        element: document.getElementById(link.name.toLowerCase())
      })).filter(section => section.element);
      
      if (sections.length) {
        const viewportHeight = window.innerHeight;
        
        // Determinar qué sección es más visible en la ventana
        let maxVisibleSection = { name: 'Inicio', ratio: 0 };
        
        sections.forEach(section => {
          if (!section.element) return;
          
          const rect = section.element.getBoundingClientRect();
          
          // Caso especial para la sección de inicio - siempre activa en la parte superior
          if (section.name === 'Inicio' && window.scrollY < 100) {
            maxVisibleSection = { name: 'Inicio', ratio: 1 };
            return;
          }
          
          // Calcular el área visible de la sección
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibleRatio = visibleHeight / viewportHeight;
          
          // Si esta sección es más visible que nuestro máximo actual, actualizarla
          if (
            visibleRatio > maxVisibleSection.ratio || 
            (visibleRatio > 0.1 && rect.top < viewportHeight * 0.5 && section.name !== 'Inicio')
          ) {
            maxVisibleSection = { name: section.name, ratio: visibleRatio };
          }
        });
        
        // Actualizar enlace activo si cambió
        if (maxVisibleSection.name !== activeLink) {
          setActiveLink(maxVisibleSection.name);
        }
      }
    };
    
    // Verificación inicial
    setTimeout(handleScroll, 100);
    
    // Añadir oyente de eventos de desplazamiento con limitación para mejor rendimiento
    let scrollTimeout: number | null = null;
    const throttledScroll = () => {
      if (scrollTimeout === null) {
        scrollTimeout = window.setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 100);
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
    };
  }, [activeLink, navLinks]);

  return (
    <div className="min-h-screen bg-[#121212] relative overflow-hidden">
      {/* Fondo mejorado con animaciones sutiles */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2YjQ2YzEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-40"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.3, 0.4, 0.35],
          scale: [1, 1.02, 1],
          rotate: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Elemento decorativo mejorado con parallax */}
      <motion.div 
        className="absolute top-[30%] right-[20%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.5,
          x: [0, 10, -5, 0],
          y: [0, -15, 8, 0],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#6b46c1]/8 to-[#9f7aea]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 0.97, 1],
            opacity: [0.4, 0.6, 0.5, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      {/* Segundo elemento decorativo */}
      <motion.div 
        className="absolute bottom-[25%] left-[15%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] opacity-70"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.3,
          x: [0, -8, 4, 0],
          y: [0, 10, -5, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#9f7aea]/5 to-[#6b46c1]/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 0.98, 1],
            opacity: [0.3, 0.4, 0.2, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
      
      {/* Componentes de navegación */}
      <Navbar 
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        navLinks={navLinks}
      />
      
      <SideNavigation 
        navLinks={navLinks} 
        activeLink={activeLink} 
        setActiveLink={setActiveLink} 
      />
      
      {/* El componente Home ahora contiene todas las secciones */}
      <Home />
    </div>
  )
}

export default App
