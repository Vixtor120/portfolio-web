import { motion } from 'framer-motion';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdate = "Septiembre 2026";

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#60a5fa]/20 bg-gradient-to-b from-[#0b1220]/50 to-[#0d1526]/80">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-[#e9d8fd]/70 text-sm">
              © {currentYear} Victor Hidalgo. Todos los derechos reservados.
            </p>
          </div>

          {/* Center - Last Update */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0b1220]/40 border border-[#60a5fa]/20"
            whileHover={{ borderColor: 'rgba(96, 165, 250, 0.4)', backgroundColor: 'rgba(11, 18, 32, 0.6)' }}
          >
            <svg className="w-4 h-4 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#e9d8fd]/80 text-sm font-medium">
              Última actualización: <span className="text-[#60a5fa] font-semibold">{lastUpdate}</span>
            </span>
          </motion.div>

          {/* Right side - Tech Stack */}
          <div className="text-center sm:text-right">
            <p className="text-[#e9d8fd]/60 text-xs">
              Construido con <span className="text-[#60a5fa]">React</span>, <span className="text-[#60a5fa]">TypeScript</span> y <span className="text-[#60a5fa]">Vite</span>
            </p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-[#60a5fa]/20 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />

        {/* Bottom text */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#e9d8fd]/50 text-xs">
            Diseñado y desarrollado por Victor Hidalgo | Barcelona, España
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
