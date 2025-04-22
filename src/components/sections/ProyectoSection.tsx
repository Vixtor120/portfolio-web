import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ProyectoSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Proyecto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, explicabo.",
      technologies: ["React", "Framer Motion", "TypeScript"],
      link: "https://github.com/Vixtor120/neuro-game",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&q=80&w=1740&fit=crop",
      color: "from-purple-500/20 to-fuchsia-500/20"
    },
    {
      title: "Proyecto 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, explicabo.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      link: "https://github.com/Vixtor120/task-manager",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&q=80&w=1932&fit=crop",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Proyecto 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, explicabo.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/Vixtor120/portfolio",
      image: "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&q=80&w=1476&fit=crop",
      color: "from-violet-500/20 to-indigo-500/20"
    },
  ];

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
            Mis{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]">
              Proyectos
            </span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#9f7aea] to-[#6b46c1] mx-auto rounded-full" />
          
          <p className="mt-4 text-[#e9d8fd]/70 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </motion.div>
        
        {/* Modern project grid with enhanced cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-xl bg-[#1a1433]/30 backdrop-blur-sm border border-[#9f7aea]/10 shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px -12px rgba(159, 122, 234, 0.3)",
                borderColor: "rgba(159, 122, 234, 0.4)"
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project image with modern overlay */}
              <div className="h-52 overflow-hidden relative">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent z-10`}></div>
                
                {/* Image with zoom effect */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  animate={{ 
                    scale: hoveredProject === index ? 1.08 : 1,
                    filter: hoveredProject === index ? "brightness(1.1)" : "brightness(0.9)"
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#9f7aea]/40 rounded-tr-md z-20"></div>
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#9f7aea]/40 rounded-tl-md z-20"></div>
                
                {/* Project title with gradient underline */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <motion.h3 
                    className="text-2xl font-bold text-white"
                    animate={{
                      y: hoveredProject === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-[#9f7aea] to-transparent mt-1"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: hoveredProject === index ? "70%" : "0%" 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.h3>
                </div>
              </div>

              {/* Content with modern styling */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-[#e9d8fd]/80 mb-5 flex-grow">{project.description}</p>
                
                {/* Technologies with interactive badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#1a1433]/60 border border-[#9f7aea]/20 text-[#e9d8fd]/90"
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
                
                {/* Enhanced link with interactive animation */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#9f7aea] hover:text-[#b794f4] flex items-center gap-1.5 w-fit group"
                  whileHover={{ x: 5 }}
                >
                  Ver proyecto
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 transition-transform group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={hoveredProject === index ? { x: [0, 4, 0] } : {}}
                    transition={{ 
                      repeat: hoveredProject === index ? Infinity : 0, 
                      repeatDelay: 1, 
                      duration: 1 
                    }}
                  >
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </motion.a>
              </div>
              
              {/* Animated corner glow */}
              <motion.div 
                className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredProject === index ? 0.6 : 0
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 -mb-8 -mr-8 rounded-full bg-gradient-to-tr from-[#9f7aea] to-[#6b46c1] blur-xl"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced GitHub link without shine animation */}
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

export default ProyectoSection;
