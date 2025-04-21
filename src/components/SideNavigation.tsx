import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';

interface SideNavigationProps {
  navLinks: { name: string; icon: JSX.Element }[];
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const SideNavigation = ({ navLinks, activeLink, setActiveLink }: SideNavigationProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const iconsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIconPosition, setActiveIconPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Actualizar la posición del indicador activo con animación mejorada
  useEffect(() => {
    const activeIconIndex = navLinks.findIndex(link => link.name === activeLink);
    if (activeIconIndex >= 0 && iconsRef.current[activeIconIndex]) {
      const iconElement = iconsRef.current[activeIconIndex];
      if (iconElement) {
        const containerTop = iconElement.parentElement?.getBoundingClientRect().top || 0;
        const iconTop = iconElement.getBoundingClientRect().top;
        setActiveIconPosition(iconTop - containerTop);
        
        // Animar cuando cambia el enlace activo
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 800);
      }
    }
  }, [activeLink, navLinks]);

  // Función para desplazarse a la sección correspondiente
  const handleScrollToSection = (sectionId: string) => {
    // No hacer nada si ya está activo
    if (activeLink === sectionId) return;
    
    setActiveLink(sectionId);

    const elementId = sectionId.toLowerCase();
    const element = document.getElementById(elementId);

    if (element) {
      const navbarOffset = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  // Variantes para animaciones
  const sidebarVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 500, damping: 25 }
    },
  };

  // Si no es móvil, no renderizamos el componente
  if (!isMobile) {
    return null;
  }

  return (
    <motion.div 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="py-3 px-2.5 rounded-full backdrop-blur-md bg-[#121212]/60 border border-[#9f7aea]/20 shadow-lg flex flex-col items-center gap-3 relative"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 8px 32px rgba(159, 122, 234, 0.25)",
          borderColor: "rgba(159, 122, 234, 0.3)"
        }}
      >
        {/* Indicador activo mejorado */}
        <motion.div 
          className="absolute left-0 w-full h-9 flex items-center justify-center pointer-events-none"
          animate={{ 
            top: activeIconPosition - 5,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <motion.div 
            className="w-9 h-9 rounded-full bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 absolute blur-md"
            animate={{
              scale: isAnimating ? [1, 1.5, 1.2] : [1, 1.2, 1],
              opacity: isAnimating ? [0.4, 0.8, 0.6] : [0.5, 0.7, 0.5],
            }}
            transition={{ 
              duration: isAnimating ? 0.8 : 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            className="relative"
            ref={el => { iconsRef.current[index] = el; }}
            onHoverStart={() => setHoveredIcon(link.name)}
            onHoverEnd={() => setHoveredIcon(null)}
            variants={iconVariants}
          >
            {/* Botón de navegación con animaciones mejoradas */}
            <motion.button
              onClick={() => handleScrollToSection(link.name)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activeLink === link.name
                  ? 'bg-[#2d3748]/60 text-[#9f7aea]'
                  : 'bg-[#2d3748]/30 text-white/60 hover:text-white hover:bg-[#2d3748]/40'
              } transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9f7aea]/50`}
              whileHover={{ 
                scale: 1.15, 
                y: -2,
                boxShadow: "0 3px 10px rgba(159, 122, 234, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir a la sección ${link.name}`}
              title={`Ir a ${link.name}`}
            >
              <motion.div
                className={`${activeLink === link.name ? 'scale-110' : 'scale-90'}`}
                animate={
                  activeLink === link.name
                    ? {
                        rotate: [0, -10, 10, 0],
                        transition: {
                          duration: 0.5,
                          delay: 0.2,
                        },
                      }
                    : {}
                }
              >
                {link.icon}
              </motion.div>
            </motion.button>

            {/* Línea conectora animada */}
            {index < navLinks.length - 1 && (
              <motion.div 
                className="h-3 w-[2px] mx-auto my-0"
                style={{ 
                  background: `linear-gradient(to bottom, 
                    ${activeLink === link.name ? 'rgba(159, 122, 234, 0.5)' : 'rgba(45, 55, 72, 0.5)'}, 
                    ${activeLink === navLinks[index+1].name ? 'rgba(159, 122, 234, 0.5)' : 'rgba(45, 55, 72, 0.5)'})`
                }}
                animate={{
                  height: [12, 12],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              />
            )}
            
            {/* Tooltip mejorado */}
            <AnimatePresence>
              {hoveredIcon === link.name && (
                <motion.div
                  className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 whitespace-nowrap px-3 py-1.5 bg-[#1a1433]/90 text-white text-xs rounded-lg shadow-lg border border-[#9f7aea]/30 flex items-center"
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 5, scale: 0.9 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                >
                  <span>{link.name}</span>
                  <motion.div 
                    className="absolute top-1/2 -right-1.5 w-3 h-3 bg-[#1a1433]/90 border-t border-r border-[#9f7aea]/30 transform rotate-45 -translate-y-1/2"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SideNavigation;
