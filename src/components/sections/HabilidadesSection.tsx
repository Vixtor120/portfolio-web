import { motion } from 'framer-motion';
import React from 'react';

const HabilidadesSection: React.FC = () => {
  const skills = {
    "Sistemas y Redes": [
      "Administración de sistemas Windows y Linux",
      "Gestión de usuarios, permisos y servicios",
      "Configuración básica de redes LAN",
      "Switches y routers (VLANs, IP, DHCP, NAT)",
      "Resolución de incidencias de red",
      "Montaje y mantenimiento de equipos",
      "Ofimática General"
    ],
    "Desarrollo Web": [
      "HTML5, CSS3, JavaScript",
      "React",
      "Angular",
      "Tailwind CSS",
      "Laravel",
      "Java, PHP",
      "Python",
      "JSON, XML",
      "Phaser (desarrollo de juegos)",
      "Framer Motion"
    ],
    "Bases de Datos": [
      "SQL y PL/SQL",
      "MySQL",
      "MariaDB",
      "PostgreSQL"
    ],
    "Ciberseguridad": [
      "Gestión y respuesta ante incidentes",
      "Análisis forense digital (Autopsy, FTK Imager)",
      "ISO 27001, ENS, RGPD, LOPD",
      "Control de accesos y autenticación (2FA, VPN)",
      "Análisis de vulnerabilidades Web (OWASP)",
      "Nmap (descubrimiento de hosts)",
      "Wireshark (análisis de tráfico)",
      "ASVS, OWASP Top Ten"
    ],
    "Herramientas de Desarrollo": [
      "Visual Studio Code",
      "Eclipse",
      "Apache NetBeans",
      "Android Studio",
      "Git / GitHub",
      "Notion",
      "Postman",
      "Docker",
      "Figma"
    ],
    "Infraestructura y Virtualización": [
      "Virtualización básica (VirtualBox, VMware)",
      "Contenedores (Docker, Podman)",
      "Control de versiones (Git, GitHub)",
      "Plataformas en la nube (Azure, AWS básico)",
      "CI/CD básico"
    ],
    "Diseño & Creatividad": [
      "Figma (prototipado de interfaces)",
      "Diseño UX/UI",
      "Edición básica de imágenes",
      "Creatividad en solución de problemas"
    ],
    "Soft Skills": [
      "Comunicación efectiva",
      "Trabajo en equipo y colaboración",
      "Liderazgo y toma de decisiones",
      "Capacidad de resolución de conflictos",
      "Adaptabilidad y flexibilidad",
      "Empatía"
    ],
    "Herramientas Transversales": [
      "Microsoft Office 365",
      "Google Workspace",
      "Project Management (Jira, Trello, Asana)"
    ],
    "Idiomas": [
      "Español (Nativo)",
      "Inglés (Intermedio)",
      "Gallego (Básico)"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="habilidades" className="py-20 md:py-24 min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0d1526] to-[#0f172a] opacity-80" />
        
        {/* Multiple animated blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] opacity-[0.15]"
          animate={{
            scale: [1, 1.1, 1],
            filter: ["blur(70px)", "blur(90px)", "blur(70px)"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb]" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] opacity-[0.1]"
          animate={{
            scale: [1.05, 1, 1.05],
            filter: ["blur(60px)", "blur(80px)", "blur(60px)"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#2563eb] to-[#60a5fa]" />
        </motion.div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiM2MGE1ZmEiIGZpbGwtb3BhY2l0eT0iMC4wMyIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2LTJoLTF2MnptLTUtNGg0di0xaC00djF6bTktMWgtMXYxaDJ2LTFoLTF6bS0yLTJoMXYtMWgtMXYxem0tNCAwaDN2LTFoLTN2MXptMS0yaDF2LTFoLTF2MXptLTUgMGgxdi0xaC0xdjF6bTggMGgxdi0xaC0xdjF6bTEtMmgxdi0xaC0xdjF6bS0yIDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yem0tNiAwaDFWOWgtMXYxem0yLTV2NGgtMVY0aC00djFoM3Y0SDh2NGg0di0xSDlWOWgzVjVoNXpNNCAxM2g1di0xSDR2MXptMCA0aDJ2LTJINHYyeiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mi{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#2563eb]">
              Stack Técnico
            </span>
          </h2>
          
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-[#60a5fa] to-[#2563eb] mx-auto rounded-full" />
          
          <p className="mt-6 text-[#e9d8fd]/70 max-w-2xl mx-auto text-lg">
            Mi stack, herramientas clave y áreas en las que me siento fuerte
          </p>
        </motion.div>
        
        {/* Skills grid - Nuevo layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList]) => {
            const categoryIcons: Record<string, string> = {
              "Sistemas y Redes": "⚙️",
              "Desarrollo Web": "💻",
              "Bases de Datos": "🗄️",
              "Ciberseguridad": "🔒",
              "Herramientas de Desarrollo": "🛠️",
              "Infraestructura y Virtualización": "☁️",
              "Diseño & Creatividad": "🎨",
              "Soft Skills": "💼",
              "Herramientas Transversales": "🚀",
              "Idiomas": "🌍"
            };

            return (
              <motion.div
                key={category}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#0d1526]/60 to-[#0b1220]/40 backdrop-blur-md border-2 border-[#60a5fa]/20 p-6 shadow-xl overflow-hidden transition-all duration-300 group-hover:border-[#60a5fa]/60 group-hover:shadow-2xl group-hover:shadow-[#60a5fa]/20">
                  
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/5 to-[#2563eb]/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Category Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {categoryIcons[category]}
                      </motion.div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#60a5fa] transition-colors">
                        {category}
                      </h3>
                    </div>
                    
                    {/* Category divider */}
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-[#60a5fa]/0 via-[#60a5fa]/60 to-[#60a5fa]/0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  </div>
                  
                  {/* Skills list */}
                  <ul className="relative z-10 space-y-2.5">
                    {skillList.map((skill, index) => (
                      <motion.li 
                        key={skill}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <motion.div 
                          className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-[#60a5fa] to-[#2563eb] mt-1.5"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-[#e9d8fd]/85 text-sm leading-relaxed group-hover/item:text-[#e9d8fd] transition-colors">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#60a5fa]/20 rounded-br-lg group-hover:border-[#60a5fa]/50 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#60a5fa]/20 rounded-tr-lg group-hover:border-[#60a5fa]/50 transition-colors"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Personal info section */}
        <motion.div 
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative rounded-2xl bg-gradient-to-r from-[#60a5fa]/10 to-[#2563eb]/10 border-2 border-[#60a5fa]/30 p-8 md:p-12 shadow-xl">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/5 to-[#2563eb]/5 rounded-2xl opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10 text-center">
              <motion.h3 
                className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3"
                whileInView={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                <span>✨</span>
                ¿Quién Soy?
                <span>✨</span>
              </motion.h3>
              <p className="text-[#e9d8fd]/80 leading-relaxed text-lg mb-8">
                Soy una persona adaptable, responsable y resolutiva, con capacidad para integrarme
                fácilmente en distintos equipos y entornos de trabajo. Además, me considero creativo
                y empático, lo que me permite aportar soluciones innovadoras y conectar eficazmente con
                las personas para cumplir objetivos de manera puntual y eficiente.
              </p>
              
              {/* Contact info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <InfoItem label="📞 Teléfono" value="+34 655 35 34 25" />
                <InfoItem label="📧 Email" value="victorhidalgosanjurjo.1@gmail.com" />
                <InfoItem label="📍 Ubicación" value="Barcelona" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <motion.div 
      className="px-4 py-3 bg-[#0b1220]/40 backdrop-blur-sm border border-[#60a5fa]/30 rounded-xl hover:border-[#60a5fa]/60 transition-all"
      whileHover={{ y: -2 }}
    >
      <span className="text-xs text-[#60a5fa] font-semibold block mb-1">{label}</span>
      <span className="text-sm text-[#e9d8fd] block break-words line-clamp-2">{value}</span>
    </motion.div>
  );
};

export default HabilidadesSection;
