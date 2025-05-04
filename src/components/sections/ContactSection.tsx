import { motion } from 'framer-motion';
import React from 'react';

const ContactSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a19] via-[#121212] to-[#1a1028] opacity-80" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute right-[10%] top-[20%] w-[40vw] h-[40vw] opacity-15"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9f7aea] to-[#6b46c1] blur-3xl" />
        </motion.div>
        
        {/* Decorative grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2YjQ2YzEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="container mx-auto max-w-5xl z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-[#9f7aea] rounded-md bg-[#1a1433]/30 border border-[#9f7aea]/10">
            CONTACTO
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Ponerse en{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]">
              Contacto
            </span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#9f7aea] to-[#6b46c1] mx-auto rounded-full" />
          
          <p className="mt-4 text-[#e9d8fd]/70 max-w-lg mx-auto">
            ¿Interesado en trabajar juntos? Te invito a ponerte en contacto conmigo a través de cualquiera de estos medios.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Contact info */}
          <motion.div
            className="rounded-2xl bg-[#1a1433]/30 backdrop-blur-sm border border-[#9f7aea]/10 shadow-lg p-8"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 20px 40px -12px rgba(159, 122, 234, 0.25)",
              borderColor: "rgba(159, 122, 234, 0.3)"
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#9f7aea]/20">
                <svg className="w-5 h-5 text-[#9f7aea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:victorhidalgosanjurjo.1@gmail.com"
                className="flex items-center gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-[#1a1433]/60 text-[#9f7aea] group-hover:bg-[#1a1433]/80 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#e9d8fd]/60 text-sm">Email</p>
                  <p className="text-white group-hover:text-[#9f7aea] transition-colors">victorhidalgosanjurjo.1@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+34655353425"
                className="flex items-center gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-lg bg-[#1a1433]/60 text-[#9f7aea] group-hover:bg-[#1a1433]/80 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#e9d8fd]/60 text-sm">Teléfono</p>
                  <p className="text-white group-hover:text-[#9f7aea] transition-colors">+34 655 353 425</p>
                </div>
              </motion.a>
              
              <motion.div
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="p-3 rounded-lg bg-[#1a1433]/60 text-[#9f7aea]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#e9d8fd]/60 text-sm">Ubicación</p>
                  <p className="text-white">Barcelona, España</p>
                </div>
              </motion.div>
              
              <motion.div
                className="mt-8 pt-6 border-t border-[#9f7aea]/10"
                variants={itemVariants}
              >
                <p className="text-[#e9d8fd]/70 mb-4">Sígueme en las redes sociales</p>
                
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/vichidsan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#1a1433]/60 text-[#9f7aea] hover:bg-[#1a1433]/80 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                    </svg>
                  </motion.a>
                
                  <motion.a
                    href="https://github.com/Vixtor120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#1a1433]/60 text-[#9f7aea] hover:bg-[#1a1433]/80 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="/CuriculumVitae-VictorHidalgo.pdf"
                    download="CuriculumVitae-VictorHidalgo.pdf"
                    className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#9f7aea]/30 to-[#6b46c1]/30 text-white hover:from-[#9f7aea]/40 hover:to-[#6b46c1]/40 border border-[#9f7aea]/20 hover:border-[#9f7aea]/30 transition-all flex items-center gap-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 3h14" />
                    </svg>
                    <span>Descargar CV</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Visual element */}
          <motion.div
            className="hidden md:block"
            variants={itemVariants}
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.03 }}
            >
              {/* Decorative visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-64 h-64 rounded-full bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 filter blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-40 h-40 text-[#9f7aea]/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                </svg>
              </div>
              
              <div className="absolute inset-0 rounded-full border-2 border-[#9f7aea]/30 border-dashed animate-[spin_40s_linear_infinite]" />
              
              {/* Decorative particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#9f7aea]/70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0.9, 0.7],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
            
            <div className="text-center mt-6">
              <p className="text-[#e9d8fd]/70">
                Estoy abierto a colaboraciones y nuevas oportunidades
              </p>
              <motion.div
                className="mt-2 text-lg text-white font-medium"
                animate={{
                  color: ['#e9d8fd', '#9f7aea', '#e9d8fd'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                ¡Hablemos de tu proyecto!
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
