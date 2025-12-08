import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { personalInfo } from '../data/personal';
import { useLanguageStore } from '../stores/languageStore';

export const Navigation = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguageStore();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
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
    </motion.nav>
  );
};

