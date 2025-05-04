import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const education = [
    {
      title: "Administración de Sistemas Informáticos y Redes",
      institution: "Monlau Formación Profesional",
      period: "2025 - 2027",
      type: "Grado Superior",
      badge: "Próximamente"
    },
    {
      title: "Ciberseguridad en Entornos de las Tecnologías de la Información",
      institution: "Monlau Formación Profesional",
      period: "2025 - 2026",
      type: "Master",
      badge: "Próximamente"
    },
    {
      title: "Formación Agentes del Cambio en Transformación Digital",
      institution: "Escuela de Organización Industrial",
      period: "2025",
      type: "Formación Especializada",
      badge: "Actual"
    },
    {
      title: "Desarrollo de Aplicaciones Web",
      institution: "Monlau Formación Profesional",
      period: "2023 - 2025",
      type: "Grado Superior",
      badge: "Actual"
    },
    {
      title: "Sistemas Microinformáticos y Redes",
      institution: "Monlau Formación Profesional",
      period: "2021 - 2023",
      type: "Grado Medio",
      badge: "Completado"
    }
  ];

  const experience = [
    {
      role: "Colaborador",
      company: "Guttman",
      period: "Proyecto DAW",
      description: "Desarrollo de juegos neuropsicológicos para contribuir a la salud cognitiva.",
      badge: "Actual"
    },
    {
      role: "Desarrollador en prácticas",
      company: "IRIS Technology Solutions",
      period: "Sep 2024 - Feb 2025",
      description: "Desarrollo frontend y backend de aplicaciones internas y trabajo en equipo.",
      badge: "Completado"
    },
    {
      role: "Técnico de Sistemas Informáticos",
      company: "Escola Can Fabra",
      period: "Ene 2023 - Jun 2023",
      description: "Mantenimiento de infraestructura de red y sistemas informáticos.",
      badge: "Completado"
    }
  ];

  const tabs = [
    {
      id: 'about', label: 'Sobre mí', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'education', label: 'Formación', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'experience', label: 'Experiencia', icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="acerca" className="py-20 md:py-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0f0a19] via-[#121212] to-[#1a1028] opacity-80" />
        <motion.div
          className="absolute left-[5%] top-[10%] w-[35vw] h-[35vw] opacity-15"
          animate={{
            scale: [1.05, 1, 1.05],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9f7aea] to-[#6b46c1] blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute right-[5%] bottom-[10%] w-[25vw] h-[25vw] opacity-15"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -1, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#6b46c1] to-[#9f7aea] blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-[#9f7aea] rounded-md bg-[#1a1433]/30 border border-[#9f7aea]/10">
            SOBRE MÍ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Conoce más{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]">
              sobre mí
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9f7aea] to-[#6b46c1] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <motion.div
              className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl border-2 border-[#9f7aea]/30 bg-[#1a1433]/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                borderColor: 'rgba(159, 122, 234, 0.5)',
                boxShadow: '0 20px 40px -12px rgba(159, 122, 234, 0.3)'
              }}
            >
              {/* Photo with styling */}
              <motion.img 
                src="/foto.jpeg" 
                alt="Victor Hidalgo" 
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Optional caption at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-xl font-medium text-white">Victor Hidalgo</h3>
              </div>
              
              {/* Corner decorative elements */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#9f7aea]/50 rounded-tl-md"></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#9f7aea]/50 rounded-tr-md"></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#9f7aea]/50 rounded-bl-md"></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#9f7aea]/50 rounded-br-md"></div>
            </motion.div>

            {/* Simplified contact section */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center mb-5">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#9f7aea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contacto
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#9f7aea]/20 to-transparent ml-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:victorhidalgosanjurjo.1@gmail.com"
                  className="flex items-center gap-3 hover:text-[#9f7aea] transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <div className="p-2 rounded-lg bg-[#1a1433]/30 text-[#9f7aea] group-hover:bg-[#1a1433]/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-[#e9d8fd]/90 text-sm group-hover:text-white transition-colors">victorhidalgosanjurjo.1@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+34655353425"
                  className="flex items-center gap-3 hover:text-[#9f7aea] transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <div className="p-2 rounded-lg bg-[#1a1433]/30 text-[#9f7aea] group-hover:bg-[#1a1433]/50 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-[#e9d8fd]/90 text-sm group-hover:text-white transition-colors">655 353 425</span>
                </motion.a>

                <motion.div
                  className="flex items-center gap-3 sm:col-span-2"
                >
                  <div className="p-2 rounded-lg bg-[#1a1433]/30 text-[#9f7aea]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#e9d8fd]/90 text-sm">Barcelona</span>
                </motion.div>
              </div>

              {/* Simplified social links */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#9f7aea]/10">
                <span className="text-xs text-[#e9d8fd]/60">Redes:</span>

                <motion.a
                  href="https://www.linkedin.com/in/vichidsan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1433]/30 text-[#9f7aea] hover:bg-[#1a1433]/50 transition-all"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://github.com/Vixtor120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1433]/30 text-[#9f7aea] hover:bg-[#1a1433]/50 transition-all"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>

                <motion.a
                  href="/CuriculumVitae-VictorHidalgo.pdf"
                  download="CuriculumVitae-VictorHidalgo.pdf"
                  className="p-2 rounded-lg bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 text-[#e9d8fd] transition-all flex items-center gap-1.5"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Descargar CV"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14" />
                  </svg>
                  <span className="text-xs">CV</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="flex mb-6 overflow-x-auto pb-1 scrollbar-hide">
              <div className="flex bg-[#1a1433]/30 backdrop-blur-sm p-1 rounded-lg border border-[#9f7aea]/10 shadow-inner">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    icon={tab.icon}
                    label={tab.label}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#1a1433]/40 backdrop-blur-sm border border-[#9f7aea]/10 rounded-xl p-6 min-h-[400px] shadow-lg relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4 text-[#e9d8fd]/90"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]">
                        Profesional en Tecnología
                      </span>{' '}
                      con experiencia en desarrollo y sistemas
                    </h3>

                    <p className="leading-relaxed">
                      Mi trayectoria profesional comenzó en el desarrollo de software, donde descubrí mi pasión por crear soluciones tecnológicas que impacten positivamente en la sociedad. Actualmente, curso el ciclo formativo de Desarrollo de Aplicaciones Web (DAW), donde combino lógica y creatividad para construir aplicaciones funcionales e innovadoras.
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#9f7aea]/10"></div>

                    <p className="leading-relaxed">
                      He tenido la oportunidad de colaborar con instituciones como Guttman, desarrollando juegos neuropsicológicos que contribuyen a la salud cognitiva, y trabajar en proyectos de desarrollo frontend y backend en IRIS Technology Solutions. Estas experiencias me han permitido fortalecer mis habilidades técnicas y trabajar en equipo para alcanzar objetivos comunes.
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#9f7aea]/10">
                      <h4 className="text-lg font-medium text-white mb-2">Mi objetivo</h4>
                      <p className="leading-relaxed">
                        Mi objetivo es seguir creciendo profesionalmente en el sector tecnológico, especializándome en administración de sistemas y ciberseguridad, mientras exploro cómo la tecnología puede mejorar la vida de las personas y contribuir al bienestar social.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Formación académica</h3>

                    <div className="space-y-6">
                      {education.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="relative pl-8 border-l-2 border-[#9f7aea]/30 py-1"
                        >
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#1a1433] border-2 border-[#9f7aea]"></div>
                          <div className="flex justify-between items-start">
                            <h4 className="text-white font-medium">{item.title}</h4>
                            {item.badge && (
                              <span className={`text-xs px-2 py-0.5 rounded-full ${item.badge === "Próximamente"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : item.badge === "Completado"
                                    ? "bg-purple-500/20 text-purple-300"
                                    : "bg-green-500/20 text-green-300"
                                }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[#9f7aea]">{item.institution}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-[#e9d8fd]/70">{item.period}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a1433]/60 border border-[#9f7aea]/20 text-[#e9d8fd]/80">
                              {item.type}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Experiencia profesional</h3>

                    <div className="space-y-4">
                      {experience.map((item, index) => (
                        <motion.div
                          key={item.company}
                          className="p-4 rounded-lg bg-[#1a1433]/60 border border-[#9f7aea]/10 relative overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{ backgroundColor: 'rgba(26, 20, 51, 0.8)', borderColor: 'rgba(159, 122, 234, 0.2)' }}
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9f7aea] to-[#6b46c1]/50"></div>

                          <div className="flex justify-between items-start">
                            <h4 className="text-white font-medium pl-3">{item.role}</h4>
                            {item.badge && (
                              <span className={`text-xs px-2 py-0.5 rounded-full ${item.badge === "Próximamente"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : item.badge === "Completado"
                                    ? "bg-purple-500/20 text-purple-300"
                                    : "bg-green-500/20 text-green-300"
                                }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <div className="pl-3">
                            <div className="text-sm text-[#9f7aea]">{item.company}</div>
                            <div className="text-xs text-[#e9d8fd]/70 mb-2">{item.period}</div>
                            <p className="text-sm text-[#e9d8fd]/80">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 text-center text-[#e9d8fd]/60 text-sm italic">
                      <p>Siempre en búsqueda de nuevos desafíos que me permitan crecer profesionalmente.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, icon, label }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive
          ? 'text-white'
          : 'text-[#e9d8fd]/70 hover:text-[#e9d8fd]'
        }`}
      whileHover={{ scale: isActive ? 1 : 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 rounded-lg border border-[#9f7aea]/30"
          layoutId="activeTabBackground"
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        />
      )}

      <span className={`relative z-10 ${isActive ? 'text-[#9f7aea]' : ''}`}>
        {icon}
      </span>
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
};

export default AboutSection;
