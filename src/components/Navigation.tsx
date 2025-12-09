import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/personal';
import { useLanguageStore } from '../stores/languageStore';
// @ts-expect-error - GlassSurface is a JSX component without TypeScript definitions
import GlassSurface from './GlassSurface';

export const Navigation = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageStore();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navContent = (
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4"
      >
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-display font-bold text-text hover:text-accent transition-colors"
        >
          {personalInfo.name}
        </button>
      </motion.div>

      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollToSection('about')}
          className="text-sm text-muted hover:text-accent transition-colors uppercase tracking-wider"
        >
          {t('nav.about')}
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="text-sm text-muted hover:text-accent transition-colors uppercase tracking-wider"
        >
          {t('nav.skills')}
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-sm text-muted hover:text-accent transition-colors uppercase tracking-wider"
        >
          {t('nav.projects')}
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="text-sm text-muted hover:text-accent transition-colors uppercase tracking-wider"
        >
          {t('nav.experience')}
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-sm text-muted hover:text-accent transition-colors uppercase tracking-wider"
        >
          {t('nav.contact')}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 text-sm text-muted"
      >
        <span className="hidden md:inline">{personalInfo.location}</span>
        <span className="hidden md:inline">/</span>
        <span>{time}</span>
        <button
          onClick={toggleLanguage}
          className="ml-4 px-3 py-1 border border-white/20 rounded hover:border-accent hover:text-accent transition-colors uppercase text-xs"
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
      </motion.div>
    </div>
  );

  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          whileHover={{ 
            scale: 1.02,
            y: -2
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          className="cursor-pointer group"
        >
          <div className="transition-shadow duration-300 group-hover:shadow-2xl">
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={24}
              borderWidth={0.05}
              brightness={50}
              opacity={0.75}
              blur={11}
              backgroundOpacity={0.55}
              className="shadow-lg transition-all duration-300 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/30"
            >
              {navContent}
            </GlassSurface>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

