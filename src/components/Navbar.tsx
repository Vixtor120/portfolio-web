import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';

interface NavbarProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
  navLinks: { name: string; icon: JSX.Element }[];
}

const Navbar = ({ activeLink, setActiveLink, navLinks }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar tamaño de pantalla y scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cerrar el menú móvil cuando se cambia de sección
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [activeLink]);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Navegación al hacer clic
  const handleNavClick = (link: string) => {
    setActiveLink(link);

    const element = document.getElementById(link.toLowerCase());
    if (element) {
      const navbarHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.nav 
            className={`flex items-center justify-between rounded-full backdrop-blur-lg border border-[#9f7aea]/20 ${
              scrolled 
                ? 'bg-[#121212]/90 shadow-lg shadow-[#9f7aea]/10' 
                : 'bg-[#121212]/75'
            } px-4 md:px-6 py-3 transition-all duration-300`}
            whileHover={{ 
              boxShadow: '0 8px 30px rgba(159, 122, 234, 0.15)'
            }}
            layout
          >
            {/* Logo */}
            <motion.a 
              href="#inicio" 
              className="flex items-center group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6b46c1] flex items-center justify-center overflow-hidden relative"
                whileHover={{ 
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)', 
                  scale: 1.05
                }}
              >
                {/* Efecto de resplandor giratorio */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10 text-white font-bold text-sm md:text-base">VH</span>
              </motion.div>
              <div className="ml-2 md:ml-3 overflow-hidden">
                <motion.span 
                  className="flex items-baseline text-base md:text-lg font-medium tracking-wide relative"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <span className="text-white">Victor</span>
                  <motion.span 
                    className="text-[#9f7aea] font-semibold ml-1"
                    animate={{ color: ['#9f7aea', '#8b5cf6', '#9f7aea'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  >
                    Hidalgo
                  </motion.span>
                </motion.span>
                <motion.div
                  className="h-[2px] w-full bg-gradient-to-r from-[#9f7aea]/10 via-[#9f7aea]/60 to-[#9f7aea]/10"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0],
                    transition: { 
                      duration: 3, 
                      repeat: Infinity,
                      repeatDelay: 2
                    }
                  }}
                />
              </div>
            </motion.a>

            {/* Enlaces de navegación - solo en escritorio (ahora en pantallas lg y superiores) */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  onHoverStart={() => setIsHovered(link.name)}
                  onHoverEnd={() => setIsHovered(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative overflow-hidden ${
                    activeLink === link.name
                      ? 'text-white bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 border border-[#9f7aea]/30'
                      : 'text-[#e9d8fd]/80 hover:text-white border border-transparent hover:border-[#9f7aea]/20'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Efecto de fondo en hover */}
                  {isHovered === link.name && activeLink !== link.name && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#9f7aea]/5 to-[#6b46c1]/5 rounded-lg"
                      layoutId="navHoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-2">
                    <span className={activeLink === link.name ? 'text-[#9f7aea]' : 'text-[#9f7aea]/60'}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  
                  {/* Indicador de elemento activo */}
                  {activeLink === link.name && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#9f7aea]/50 via-[#8b5cf6] to-[#9f7aea]/50"
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
              
              <div className="h-6 w-px bg-[#9f7aea]/20 mx-1"></div>
              
              {/* Iconos sociales con efectos mejorados */}
              <div className="flex items-center gap-2">
                <motion.a
                  href="https://github.com/Vixtor120"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full text-[#e9d8fd]/80 hover:text-white relative"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#9f7aea]/20 to-[#6b46c1]/10 opacity-0 hover:opacity-100 transition-opacity"
                  />
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vichidsan/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full text-[#e9d8fd]/80 hover:text-white relative"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#9f7aea]/20 to-[#6b46c1]/10 opacity-0 hover:opacity-100 transition-opacity"
                  />
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                  </svg>
                </motion.a>
                
                {/* Botón de CV mejorado */}
                <motion.a
                  href="/CuriculumVitae-VictorHidalgo.pdf"
                  download="CuriculumVitae-VictorHidalgo.pdf"
                  className="px-2.5 py-1.5 rounded-full flex items-center gap-1.5 bg-gradient-to-r from-[#9f7aea]/30 to-[#6b46c1]/30 text-white border border-[#9f7aea]/30 hover:border-[#9f7aea]/60 relative overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Descargar CV"
                  title="Descargar mi CV"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#9f7aea]/10 to-[#6b46c1]/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <svg className="w-3.5 h-3.5 relative z-10 text-[#9f7aea]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
                  </svg>
                  <span className="text-xs font-medium relative z-10">CV</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#9f7aea]/70"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </div>

            {/* Botón del menú hamburguesa - visible en pantallas menores a lg */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Menú"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full block"
                  animate={{ 
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 9 : 0,
                    backgroundColor: mobileMenuOpen ? '#9f7aea' : '#ffffff'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full block"
                  animate={{ 
                    opacity: mobileMenuOpen ? 0 : 1,
                    x: mobileMenuOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="w-full h-0.5 bg-white rounded-full block"
                  animate={{ 
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -9 : 0,
                    backgroundColor: mobileMenuOpen ? '#9f7aea' : '#ffffff'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </motion.nav>
        </div>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay para cerrar el menú */}
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Panel de menú móvil */}
            <motion.div 
              className="fixed right-0 top-0 h-full w-[80%] max-w-xs bg-[#12121f]/95 z-50 border-l border-[#9f7aea]/20 backdrop-blur-md flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Cabecera del menú móvil */}
              <div className="flex items-center justify-between p-5 border-b border-[#9f7aea]/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6b46c1] flex items-center justify-center">
                    <span className="text-white font-bold">VH</span>
                  </div>
                  <div className="text-white font-medium">
                    Victor Hidalgo
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#e9d8fd]/80 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Enlaces de navegación del menú móvil */}
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.name)}
                    className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 text-left ${
                      activeLink === link.name
                        ? 'bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 text-white border border-[#9f7aea]/30'
                        : 'text-[#e9d8fd]/80 hover:text-white border border-transparent hover:bg-[#1a1433]/60'
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className={activeLink === link.name ? 'text-[#9f7aea]' : 'text-[#9f7aea]/60'}>
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                    
                    {/* Indicador para elemento activo */}
                    {activeLink === link.name && (
                      <motion.span 
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-[#9f7aea]"
                        layoutId="mobileActiveIndicator"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Footer del menú móvil con enlaces sociales */}
              <div className="p-5 border-t border-[#9f7aea]/20">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com/Vixtor120"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-[#1a1433]/60 text-[#9f7aea]/80 hover:text-[#9f7aea]"
                      whileHover={{ y: -2, backgroundColor: 'rgba(26, 20, 51, 0.8)' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.linkedin.com/in/vichidsan/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-[#1a1433]/60 text-[#9f7aea]/80 hover:text-[#9f7aea]"
                      whileHover={{ y: -2, backgroundColor: 'rgba(26, 20, 51, 0.8)' }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                      </svg>
                    </motion.a>
                  </div>
                  
                  <motion.a
                    href="/CuriculumVitae-VictorHidalgo.pdf"
                    download="CuriculumVitae-VictorHidalgo.pdf"
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#9f7aea]/30 to-[#6b46c1]/30 text-white flex items-center gap-2 border border-[#9f7aea]/30"
                    whileHover={{ y: -2, backgroundColor: 'rgba(159, 122, 234, 0.2)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="w-4 h-4 text-[#9f7aea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
                    </svg>
                    <span className="text-sm">CV</span>
                  </motion.a>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-[#e9d8fd]/60">© {new Date().getFullYear()} Victor Hidalgo</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

