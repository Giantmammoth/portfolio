import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { Marquee } from '../components/Marquee';
import { personalInfo } from '../data/personal';
import profileImage from '../assets/images/profile.png';

export const About = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Marquee en haut */}
      <div className="mb-16">
        <Marquee speed={35} direction="right" className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.about')}
          </span>
        </Marquee>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative z-20">
          <SectionTitle title={t('about.title')} subtitle={t('about.subtitle')} />
        </div>

        <motion.div
          style={{ y }}
          className="relative z-10"
        >
          {/* Image et Bio en layout grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-12">
            {/* Image de profil */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 md:order-1 z-0"
            >
              <div className="overflow-hidden rounded-lg border border-white/20 aspect-[3/4]">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Texte Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-text/80 leading-relaxed"
              >
                {t('about.bio')}
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-display font-semibold text-text mb-6">
              {t('about.education')}
            </h3>
            <div className="space-y-4">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="border-l-2 border-accent pl-6"
                >
                  <h4 className="text-lg font-semibold text-text">{edu.degree}</h4>
                  <p className="text-muted">{edu.institution}</p>
                  <p className="text-sm text-muted/70">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"
      />

      {/* Marquee en bas */}
      <div className="mt-16">
        <Marquee speed={35} className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.aboutBottom')}
          </span>
        </Marquee>
      </div>
    </section>
  );
};
