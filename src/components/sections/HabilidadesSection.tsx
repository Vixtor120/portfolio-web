import { motion } from 'framer-motion';
import React, { useState } from 'react';

const HabilidadesSection: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skills = {
    "Desarrollo Web": [
      "HTML / CSS",
      "Javascript",
      "Tailwind CSS",
      "Java",
      "C++",
      "React",
      "Angular",
      "Laravel",
      "PHP"
    ],
    "Sistemas Operativos": [
      "Windows",
      "Linux"
    ],
    "Bases de Datos": [
      "SQL / PL-SQL",
      "MySQL, MariaDB"
    ],
    "Diseño y otros": [
      "Figma",
      "Canva",
      "VMware",
      "Jira"
    ],
    "Competencias Personales": [
      "Trabajo en Equipo",
      "Organización & Puntualidad",
      "Adaptabilidad", 
      "Gestión de Proyectos",
      "Gestión del Tiempo"
    ],
    "Extras": [
      "Inteligencia Artificial",
      "Innovación",
      "Creatividad",
      "Marketing de Productos",
      "Transformación Digital"
    ],
    "Idiomas": [
      "Castellano y catalán: Nativo",
      "Inglés: Nivel Bajo"
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="habilidades" className="py-20 md:py-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a19] via-[#121212] to-[#1a1028] opacity-80" />
        
        {/* Gradient blob */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] opacity-[0.12]"
          animate={{
            scale: [1, 1.05, 1],
            filter: ["blur(70px)", "blur(85px)", "blur(70px)"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9f7aea] to-[#6b46c1]" />
        </motion.div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2YjQ2YzEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-[#9f7aea] rounded-md bg-[#1a1433]/30 border border-[#9f7aea]/10">
            HABILIDADES
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Mis{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9f7aea] to-[#6b46c1]">
              Habilidades
            </span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#9f7aea] to-[#6b46c1] mx-auto rounded-full" />
          
          <p className="mt-4 text-[#e9d8fd]/70 max-w-lg mx-auto">
            Conocimientos adquiridos a lo largo de mi formación y experiencia profesional
          </p>
        </motion.div>
        
        {/* Skills grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className="relative overflow-hidden rounded-xl bg-[#1a1433]/30 backdrop-blur-sm border border-[#9f7aea]/10"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 40px -12px rgba(159, 122, 234, 0.3)",
                borderColor: "rgba(159, 122, 234, 0.3)"
              }}
              onHoverStart={() => setHoveredCategory(category)}
              onHoverEnd={() => setHoveredCategory(null)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <motion.div 
                    className="w-1 h-6 bg-gradient-to-b from-[#9f7aea] to-[#6b46c1] rounded-full mr-3"
                    animate={{ 
                      height: hoveredCategory === category ? 24 : 20,
                      opacity: hoveredCategory === category ? 1 : 0.8 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {category}
                </h3>
                
                <ul className="space-y-3">
                  {skillList.map((skill, index) => (
                    <motion.li 
                      key={skill}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-[#9f7aea]"
                        animate={{ 
                          scale: hoveredCategory === category ? [1, 1.2, 1] : 1 
                        }}
                        transition={{ 
                          repeat: hoveredCategory === category ? Infinity : 0, 
                          repeatDelay: 1,
                          duration: 1
                        }}
                      />
                      <span className="text-[#e9d8fd]/90 text-sm">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#9f7aea]/30 rounded-tr-lg"></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#9f7aea]/30 rounded-bl-lg"></div>
              
              {/* Subtle glow effect on hover */}
              {hoveredCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#9f7aea]/5 to-[#6b46c1]/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional personal info */}
        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">¿Quién Soy?</h3>
          <p className="text-[#e9d8fd]/80 leading-relaxed">
            Soy una persona adaptable, responsable y resolutiva, con capacidad para integrarme
            fácilmente en distintos equipos y entornos de trabajo. Además, me considero creativo
            y empático, lo que me permite aportar soluciones innovadoras y conectar eficazmente con
            las personas para cumplir objetivos de manera puntual y eficiente.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <InfoItem label="Teléfono" value="(+34) 655 35 34 25" />
            <InfoItem label="Email" value="victorhidalgosanjurjo.1@gmail.com" />
            <InfoItem label="Ubicación" value="08923 Barcelona" />
            <InfoItem label="LinkedIn" value="www.linkedin.com/in/vichidsan" isLink />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  label: string;
  value: string;
  isLink?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value, isLink = false }) => {
  return (
    <motion.div 
      className="px-4 py-2 bg-[#1a1433]/40 backdrop-blur-sm border border-[#9f7aea]/10 rounded-lg flex flex-col items-center"
      whileHover={{ y: -2, borderColor: "rgba(159, 122, 234, 0.3)" }}
    >
      <span className="text-xs text-[#9f7aea] mb-1">{label}</span>
      {isLink ? (
        <a 
          href={`https://${value}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-[#e9d8fd] hover:text-white"
        >
          {value}
        </a>
      ) : (
        <span className="text-sm text-[#e9d8fd]">{value}</span>
      )}
    </motion.div>
  );
};

export default HabilidadesSection;
