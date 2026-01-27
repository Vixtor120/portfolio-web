import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Define interfaces for project data structure
interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  logo: string;
  status: 'Terminado' | 'En desarrollo';
  date: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

const ProyectoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  
  // Projects portfolio
  const projects: Project[] = [
    {
      title: "MovidaDeportivaTV",
      description: "Plataforma dedicada al deporte y transmisiones en vivo desarrollada con React, Tailwind CSS y Framer Motion. Proyecto del ciclo DAW en colaboración con Monlau Formación Profesional, donde actúo como coordinador de proyecto. Actualmente en desarrollo activo para crear una completa plataforma de streaming deportivo con contenido actualizado y eventos en vivo. Publicada mediante IONOS con dominio personalizado.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "IONOS"],
      demoLink: "https://movida-deportiva-tv.vercel.app/",
      logo: "/logo_movidaDeportiva.png",
      status: "En desarrollo",
      date: "2025 - Actualidad",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "OldStreet - Roleplay GTA V",
      description: "Página web moderna y totalmente responsive desarrollada con React, Tailwind CSS y Framer Motion. Diseño elegante y eficiente con animaciones suaves e interactivas que mejoran la experiencia del usuario. Alojada en Hostinger con dominio personalizado.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Hostinger", "PHP", "SQL"],
      demoLink: "https://old-street.vercel.app/",
      logo: "/logo_oldStreet.png",
      status: "Terminado",
      date: "2025",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "GoodVibes Podcast",
      description: "Podcast personal donde se hablan de temas variados, se reflexiona y se da una opinión abierta de diferentes temas. Plataforma web con reproductor personalizado, controles de volumen y progreso, animaciones fluidas y diseño responsivo.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
      demoLink: "https://good-vibes-tau.vercel.app/",
      logo: "/logo_goodVibes.png",
      status: "Terminado",
      date: "2025",
      color: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="proyectos" className="py-20 md:py-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0d1526] to-[#0f172a] opacity-80" />
        
        {/* Single elegant gradient blob */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[50vw] h-[50vw] opacity-[0.15]"
          animate={{
            scale: [1, 1.05, 1],
            filter: ["blur(70px)", "blur(80px)", "blur(70px)"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb]" />
        </motion.div>
        
        {/* Simple grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2MGE1ZmEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        {/* Clean section header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#2563eb]">
              Proyectos
            </span>
          </h2>
          <p className="text-[#e9d8fd]/80 text-base md:text-lg max-w-3xl mx-auto">
            Estos son algunos de los proyectos que he ido realizando por cuenta ajena, 
            por colaboración con empresas o autoemprendimiento.
          </p>
        </motion.div>
        
        
        {/* Browser-style interface (tabs + search bar) - estilo Google Chrome */}
        <div className="mb-8">
          <div className="bg-[#0b1220]/60 backdrop-blur-md rounded-t-xl border border-[#60a5fa]/20 border-b-0 p-2">
            <div className="flex items-center gap-3">
              {/* Tabs container - lado izquierdo */}
              <div className="flex gap-1 overflow-x-auto flex-shrink-0">
                {projects.map((project, index) => {
                  const isActive = activeTab === index;
                  return (
                    <motion.button
                      key={project.title}
                      onClick={() => setActiveTab(index)}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all min-w-fit group ${
                        isActive
                          ? 'bg-[#0d1526] text-white'
                          : 'bg-transparent text-[#e9d8fd]/60 hover:bg-[#0d1526]/50 hover:text-[#e9d8fd]/90'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-sm overflow-hidden flex items-center justify-center">
                        <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-sm font-medium whitespace-nowrap">
                        {project.title}
                      </span>
                      
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab(null);
                        }}
                        className="w-4 h-4 rounded flex items-center justify-center hover:bg-white/20 transition ml-1 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Cerrar pestaña"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                      
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#60a5fa]"
                          layoutId="activeTab"
                        />
                      )}
                  </motion.button>
                );
              })}
            </div>            
            </div>
          </div>
          
          {/* Content area below tabs */}
          <div className="bg-[#0d1526]/40 backdrop-blur-sm border border-[#60a5fa]/20 rounded-b-xl rounded-tr-xl p-8 min-h-[400px]">
            {activeTab === null ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    isExpanded={false}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={projects[activeTab]}
                  isExpanded
                  onClick={() => setActiveTab(null)}
                />
              </motion.div>
            )}
          </div>
      </div>
      
      {/* Enhanced GitHub link */}
      <motion.div 
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.a 
          href="https://github.com/Vixtor120"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-[#60a5fa]/30 text-white hover:border-[#60a5fa]/60 bg-[#0b1220]/40 backdrop-blur-sm transition-all relative group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Ver más proyectos en GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#60a5fa] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </motion.a>
      </motion.div>
      </div>
    </section>
  );
};

// Project card component with expandable functionality
const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onClick }) => {
  return (
    <motion.div
      layout
      onClick={!isExpanded ? onClick : undefined}
      className={`rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b1220]/40 to-[#0d1526]/40 backdrop-blur-md border shadow-xl transition-all cursor-pointer ${
        isExpanded 
          ? 'border-[#60a5fa]/40 w-full max-w-5xl' 
          : 'border-[#60a5fa]/20 hover:border-[#60a5fa]/50'
      }`}
      whileHover={!isExpanded ? { 
        y: -6,
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(96, 165, 250, 0.5)",
        borderColor: "rgba(96, 165, 250, 0.6)"
      } : {}}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
    >
      {!isExpanded ? (
        // Compact card view - Enhanced with better visibility
        <div className="p-5 relative overflow-hidden group">
          {/* Background gradient effect */}
          <motion.div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.color} transition-opacity duration-300`}
          />
          
          {/* Logo with enhanced styling */}
          <div className="flex justify-center mb-4 relative">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} blur-2xl opacity-60 group-hover:opacity-80 transition-opacity`}></div>
              <div className="relative w-24 h-24 rounded-xl bg-gradient-to-br from-[#0b1220] to-[#0d1526] border-2 border-[#60a5fa]/40 flex items-center justify-center overflow-hidden p-3 shadow-lg">
                <img 
                  src={project.logo} 
                  alt={project.title}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Title with better visibility */}
          <h3 className="text-xl font-bold text-center mb-3 text-white group-hover:text-[#60a5fa] transition-colors">
            {project.title}
          </h3>

          {/* Status and date with improved styling */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <motion.span 
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                project.status === 'Terminado' 
                  ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 border-2 border-green-400/60 shadow-lg shadow-green-500/30' 
                  : 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border-2 border-yellow-400/60 shadow-lg shadow-yellow-500/30'
              }`}
              whileHover={{ scale: 1.08, y: -2 }}
            >
              {project.status}
            </motion.span>

            <div className="flex items-center gap-2 text-[#e9d8fd]/80 text-sm font-medium">
              <svg className="w-4 h-4 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{project.date}</span>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="relative h-px mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#60a5fa]/30 to-transparent"></div>
          </div>

          {/* Enhanced call-to-action - Botón clickable */}
          <motion.button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-br from-[#60a5fa]/10 to-[#2563eb]/10 border border-[#60a5fa]/30 hover:from-[#60a5fa]/20 hover:to-[#2563eb]/20 hover:border-[#60a5fa]/50 transition-all duration-300">
              <span className="text-[#60a5fa] text-xs font-semibold leading-tight">
                Dar click para ver más
              </span>
              <motion.svg 
                className="w-4 h-4 text-[#60a5fa]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </div>
          </motion.button>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-12 h-12 border-l-2 border-t-2 border-[#60a5fa]/30 rounded-tl-xl group-hover:border-[#60a5fa]/50 transition-colors"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-r-2 border-b-2 border-[#60a5fa]/30 rounded-br-xl group-hover:border-[#60a5fa]/50 transition-colors"></div>
        </div>
      ) : (
        // Expanded card view - Enhanced Professional Design
        <motion.div 
          className="md:flex min-h-[500px] rounded-xl overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* Close button - Top right corner */}
          <motion.button
            onClick={() => onClick()}
            className="absolute top-4 right-4 z-20 p-3 rounded-full bg-red-500/10 backdrop-blur-md border border-red-500/40 text-red-400/80 hover:text-red-300 hover:border-red-500/70 transition-all hover:bg-red-500/20 shadow-lg shadow-red-500/20"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Cerrar proyecto"
            title="Cerrar proyecto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Left side - Logo and info with enhanced design */}
          <div className={`md:w-2/5 p-10 bg-gradient-to-br ${project.color} backdrop-blur-sm flex flex-col items-center justify-center border-r border-[#60a5fa]/30 relative overflow-hidden`}>
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '32px 32px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Logo with enhanced styling */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="mb-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} blur-3xl opacity-70`}></div>
                <div className="relative w-44 h-44 rounded-3xl bg-gradient-to-br from-[#0b1220] to-[#0d1526] border-2 border-[#60a5fa]/50 flex items-center justify-center overflow-hidden p-6 shadow-2xl">
                  <img 
                    src={project.logo} 
                    alt={project.title}
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-3xl font-bold text-white text-center mb-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h3>

              {/* Status badge */}
              <motion.span 
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 ${
                  project.status === 'Terminado' 
                    ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 border-2 border-green-400/60 shadow-xl shadow-green-500/40' 
                    : 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border-2 border-yellow-400/60 shadow-xl shadow-yellow-500/40'
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                {project.status}
              </motion.span>

              {/* Date */}
              <div className="flex items-center gap-2 text-white/90 text-base mb-8 font-medium">
                <svg className="w-5 h-5 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{project.date}</span>
              </div>

              {/* Decorative element */}
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#60a5fa] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Right side - Details with enhanced layout */}
          <div className="md:w-3/5 p-10 bg-[#0b1220]/20 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#60a5fa]/5 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
              {/* Description */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-9 bg-gradient-to-b from-[#60a5fa] to-[#2563eb] rounded-full shadow-lg shadow-blue-500/50"></div>
                  <h4 className="text-xl font-bold text-white">Descripción del Proyecto</h4>
                </div>
                <p className="text-[#e9d8fd]/90 leading-relaxed text-base pl-7">
                  {project.description}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-9 bg-gradient-to-b from-[#60a5fa] to-[#2563eb] rounded-full shadow-lg shadow-blue-500/50"></div>
                  <h4 className="text-xl font-bold text-white">Tecnologías Utilizadas</h4>
                </div>
                <div className="flex flex-wrap gap-3 pl-7">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#60a5fa]/20 to-[#2563eb]/20 border-2 border-[#60a5fa]/40 text-[#60a5fa] text-sm font-bold shadow-lg backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(96, 165, 250, 0.3)",
                        borderColor: "rgba(96, 165, 250, 0.6)",
                        boxShadow: "0 0 25px rgba(96, 165, 250, 0.4)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Demo button with enhanced design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pl-7 pt-4"
              >
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#60a5fa] to-[#2563eb] text-white font-bold text-lg shadow-2xl shadow-blue-500/50 relative overflow-hidden group border-2 border-[#60a5fa]/50"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 25px 50px -10px rgba(37, 99, 235, 0.7)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="relative z-10">Ver Demo en Vivo</span>
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProyectoSection;
