import { motion } from 'framer-motion';
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a19] via-[#121212] to-[#1a1028] opacity-80" />
        
        {/* Enhanced background elements */}
        <motion.div
          className="absolute -right-[5%] -top-[20%] w-[50vw] h-[50vw] opacity-20"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9f7aea] to-[#6b46c1] blur-3xl" />
        </motion.div>
        
        <motion.div
          className="absolute -left-[10%] bottom-[0%] w-[30vw] h-[30vw] opacity-10"
          animate={{ 
            scale: [1.05, 1, 1.05],
            rotate: [0, -1, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 5
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#6b46c1] to-[#9f7aea] blur-3xl" />
        </motion.div>
        
        {/* Modern floating particles */}
        <motion.div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: `rgba(159, 122, 234, ${Math.random() * 0.15 + 0.1})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -(Math.random() * 20 + 10), 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, (Math.random() * 0.5 + 1.2), 1]
              }}
              transition={{
                duration: Math.random() * 8 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>

        {/* Modern grid lines */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2YjQ2YzEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Main content */}
        <motion.div
          className="lg:max-w-xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hola, soy{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity 
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              Victor Hidalgo
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-[#e9d8fd]/90 mb-8 leading-relaxed max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Desarrollando tecnología con propósito. Creo soluciones web innovadoras combinando lógica y creatividad para construir experiencias digitales con impacto real.
          </motion.p>

          {/* Modern CTAs with enhanced animation */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#contacto"
              className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#9f7aea] to-[#6b46c1] text-white font-medium shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(107, 70, 193, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced shine effect */}
              <motion.div 
                className="absolute top-0 -left-[100%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"
                animate={{ left: "200%" }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 2.5,
                  repeatDelay: 1
                }}
              />
              
              <span className="relative z-10">Contáctame</span>
              <motion.svg 
                className="w-5 h-5 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  repeatDelay: 3
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.a>

            <motion.a
              href="#proyectos"
              className="px-6 py-3.5 rounded-lg border border-[#9f7aea]/30 text-white hover:border-[#9f7aea]/60 flex items-center justify-center gap-2 relative bg-[#1a1433]/30 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(26, 20, 51, 0.5)",
                boxShadow: "0 8px 20px -4px rgba(159, 122, 234, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Ver proyectos</span>
              <motion.svg 
                className="w-5 h-5 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  repeatDelay: 2
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Modern terminal animation - kept intact as requested */}
        <motion.div
          className="w-full lg:w-auto perspective-1000"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            className="w-full lg:w-[400px] rounded-xl border border-[#9f7aea]/30 overflow-hidden shadow-2xl shadow-[#6b46c1]/20 bg-[#0d0d0d]/90 relative preserve-3d"
            whileHover={{ 
              rotateY: 5,
              rotateX: -5,
              boxShadow: "0 25px 50px rgba(107, 70, 193, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            {/* Terminal header with interactive elements */}
            <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-[#9f7aea]/20">
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#ff5f56]" 
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#ffbd2e]" 
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-[#27c93f]" 
                whileHover={{ scale: 1.2 }}
              />
              <div className="ml-3 flex items-center gap-2">
                <div className="text-[#9f7aea]/80 text-xs font-mono flex items-center">
                  <span>profile.js</span>
                  <motion.span 
                    className="inline-block w-1 h-3 ml-1 bg-[#9f7aea]"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </div>
              </div>
              
              <div className="ml-auto flex gap-2">
                <motion.div
                  className="flex items-center gap-1 bg-[#1a1433]/50 px-2 py-0.5 rounded text-[#e9d8fd]/50 text-xs"
                  whileHover={{ backgroundColor: 'rgba(26, 20, 51, 0.7)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>online</span>
                </motion.div>
              </div>
            </div>
            
            {/* Terminal content with enhanced animations */}
            <div className="p-5 font-mono text-sm text-[#e9d8fd]/80 space-y-2">
              <div className="flex gap-2">
                <span className="text-[#9f7aea]">$</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  node profile.js
                </motion.span>
              </div>
              
              <motion.div
                className="mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <span className="text-[#27c93f]">{">"}</span> <motion.span 
                  animate={{ color: ['#e9d8fd', '#9f7aea', '#e9d8fd'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Cargando perfil...
                </motion.span>
              </motion.div>
              
              <motion.div
                className="mt-4 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <span className="text-[#ffbd2e] font-semibold">{"{"}</span>
                <motion.div
                  initial={{ backgroundColor: "rgba(159, 122, 234, 0)" }}
                  animate={{ backgroundColor: ["rgba(159, 122, 234, 0)", "rgba(159, 122, 234, 0.1)", "rgba(159, 122, 234, 0)"] }}
                  transition={{ delay: 2.2, duration: 1, repeat: 1 }}
                  className="ml-4 rounded"
                >
                  <span className="text-[#e06c75]">nombre</span>
                  <span className="text-white">: </span>
                  <span className="text-[#98c379]">"Victor Hidalgo"</span>
                  <span className="text-white">,</span>
                </motion.div>
                <motion.div
                  initial={{ backgroundColor: "rgba(159, 122, 234, 0)" }}
                  animate={{ backgroundColor: ["rgba(159, 122, 234, 0)", "rgba(159, 122, 234, 0.1)", "rgba(159, 122, 234, 0)"] }}
                  transition={{ delay: 2.4, duration: 1, repeat: 1 }}
                  className="ml-4 rounded"
                >
                  <span className="text-[#e06c75]">ubicación</span>
                  <span className="text-white">: </span>
                  <span className="text-[#98c379]">"Barcelona"</span>
                  <span className="text-white">,</span>
                </motion.div>
                <motion.div
                  initial={{ backgroundColor: "rgba(159, 122, 234, 0)" }}
                  animate={{ backgroundColor: ["rgba(159, 122, 234, 0)", "rgba(159, 122, 234, 0.1)", "rgba(159, 122, 234, 0)"] }}
                  transition={{ delay: 2.6, duration: 1, repeat: 1 }}
                  className="ml-4 rounded"
                >
                  <span className="text-[#e06c75]">formación</span>
                  <span className="text-white">: </span>
                  <span className="text-[#98c379]">"Desarrollo de Aplicaciones Web"</span>
                  <span className="text-white">,</span>
                </motion.div>
                <motion.div
                  initial={{ backgroundColor: "rgba(159, 122, 234, 0)" }}
                  animate={{ backgroundColor: ["rgba(159, 122, 234, 0)", "rgba(159, 122, 234, 0.1)", "rgba(159, 122, 234, 0)"] }}
                  transition={{ delay: 2.8, duration: 1, repeat: 1 }}
                  className="ml-4 rounded"
                >
                  <span className="text-[#e06c75]">especialización</span>
                  <span className="text-white">: </span>
                  <span className="text-[#98c379]">"Frontend"</span>
                </motion.div>
                <span className="text-[#ffbd2e] font-semibold">{"}"}</span>
              </motion.div>
              
              <motion.div
                className="mt-6 flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
              >
                <span className="text-[#9f7aea]">$</span>
                <span className="inline-flex items-center">
                  <motion.span
                    className="inline-block w-1.5 h-3.5 bg-[#9f7aea]"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                  />
                </span>
              </motion.div>
              
              {/* Enhanced reflection effect */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
              
              {/* Code lines in background for effect */}
              <div className="absolute inset-0 z-[-1] opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="h-3 my-2 bg-[#9f7aea]/10" 
                    style={{ 
                      width: `${Math.random() * 40 + 60}%`,
                      opacity: Math.random() * 0.8 + 0.2 
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Enhanced 3D shadow */}
            <motion.div 
              className="absolute -z-10 inset-x-4 bottom-0 bg-[#6b46c1]/20 rounded-full blur-xl h-5 transform translate-y-1.5 opacity-50"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <span className="text-xs text-white/50 font-mono tracking-widest">SCROLL</span>
          <svg className="w-5 h-5 text-[#9f7aea]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
