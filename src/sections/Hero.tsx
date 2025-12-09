import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { personalInfo } from '../data/personal';
// @ts-expect-error - Iridescence is a JSX component without TypeScript definitions
import Iridescence from '../components/Iridescence';
// @ts-expect-error - GlassSurface is a JSX component without TypeScript definitions
import GlassSurface from '../components/GlassSurface';

export const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 opacity-100">
          <Iridescence 
            color={[0.5, 0.8, 1.0]} 
            speed={0.5} 
            amplitude={0.15} 
            mouseReact={true}
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background/40 to-background/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted text-sm uppercase tracking-wider mb-4"
          >
            {personalInfo.location} / {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </motion.p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-text mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('hero.tagline1')}
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-accent"
          >
            {t('hero.tagline2')}
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {t('hero.tagline3')}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-xl md:text-2xl text-muted mb-12"
        >
          {t('about.role')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button onClick={scrollToProjects} variant="primary">
            {t('hero.viewProjects')}
          </Button>
          <Button onClick={scrollToContact} variant="outline">
            {t('hero.contactMe')}
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <GlassSurface
            width={24}
            height={40}
            borderRadius={12}
            borderWidth={0.05}
            brightness={50}
            opacity={0.93}
            blur={11}
            className="flex items-start justify-center p-2"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </GlassSurface>
        </motion.div>
      </motion.div>

      {/* Marquee Text */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <Marquee speed={30} className="py-8 border-t border-white/10">
          <span className="text-6xl md:text-8xl font-display font-bold text-text/5">
            {t('marquee.hero')}
          </span>
        </Marquee>
      </div>
    </section>
  );
};

