import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ProyectoSection: React.FC = () => {
  // Single project only - Good Vibes Podcast
  const project = {
    title: "Good Vibes Podcast",
    description: "Plataforma web para un podcast sincero con contenido variado creado para compartir opiniones personales en un formato casual y auténtico. Incluye un reproductor personalizado con controles de volumen y progreso, animaciones fluidas con Framer Motion y diseño responsivo.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    codeLink: "https://github.com/Vixtor120/goodVibes",
    demoLink: "https://good-vibes-tau.vercel.app/",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&q=80&w=1740&fit=crop",
    color: "from-purple-500/20 to-indigo-500/20" 
  };

  return (
    <section id="proyectos" className="py-20 md:py-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a19] via-[#121212] to-[#1a1028] opacity-80" />
        
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
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9f7aea] to-[#6b46c1]" />
        </motion.div>
        
        {/* Simple grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2YjQ2YzEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        {/* Clean section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-[#9f7aea] rounded-md bg-[#1a1433]/30 border border-[#9f7aea]/10">
            PROYECTOS
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Mi{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]">
              Proyecto Destacado
            </span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#9f7aea] to-[#6b46c1] mx-auto rounded-full" />
          
          <p className="mt-4 text-[#e9d8fd]/70 max-w-lg mx-auto">
            Un vistazo a mi trabajo más relevante en desarrollo de software
          </p>
        </motion.div>
        
        {/* Featured project with enhanced design */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard project={project} />
        </motion.div>
        
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-[#9f7aea]/30 text-white hover:border-[#9f7aea]/60 bg-[#1a1433]/40 backdrop-blur-sm transition-all relative group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Ver más proyectos en GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9f7aea] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Separated project card component with code and demo buttons
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-[#1a1433]/30 backdrop-blur-sm border border-[#9f7aea]/10 shadow-lg"
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(159, 122, 234, 0.4)",
        borderColor: "rgba(159, 122, 234, 0.4)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Project image with improved layout */}
      <div className="md:flex">
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#121212] via-[#121212]/70 to-transparent z-10"></div>
          
          {/* Image with zoom effect */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              filter: isHovered ? "brightness(1.1)" : "brightness(0.9)"
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#9f7aea]/40 rounded-tl-md z-20"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#9f7aea]/40 rounded-br-md z-20"></div>
        </div>

        {/* Content with enhanced styling */}
        <div className="md:w-1/2 p-8 relative">
          <motion.div
            animate={{
              y: isHovered ? -5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-[#9f7aea] to-transparent mb-4"
              initial={{ width: "0%" }}
              animate={{ 
                width: isHovered ? "70%" : "30%" 
              }}
              transition={{ duration: 0.3 }}
            />
            
            <p className="text-[#e9d8fd]/80 mb-6">{project.description}</p>
            
            {/* Technologies with interactive badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="text-xs px-3 py-1.5 rounded-full bg-[#1a1433]/60 border border-[#9f7aea]/20 text-[#e9d8fd]/90"
                  whileHover={{ 
                    y: -2, 
                    backgroundColor: "rgba(159, 122, 234, 0.15)",
                    borderColor: "rgba(159, 122, 234, 0.3)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            {/* Project links - Code and Demo buttons side by side */}
            <div className="flex flex-wrap gap-3">
              {/* GitHub Code Button */}
              <motion.a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1a1433]/60 border border-[#9f7aea]/30 text-white hover:border-[#9f7aea]/60 transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="h-5 w-5 text-[#9f7aea]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span>Ver código</span>
              </motion.a>

              {/* Live Demo Button */}
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#9f7aea]/20 to-[#6b46c1]/20 border border-[#9f7aea]/30 text-white hover:border-[#9f7aea]/60 transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="h-5 w-5 text-[#9f7aea]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Ver demo</span>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Animated corner glow */}
          <motion.div 
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 0.6 : 0
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 -mb-8 -mr-8 rounded-full bg-gradient-to-tr from-[#9f7aea] to-[#6b46c1] blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProyectoSection;
