import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { Marquee } from '../components/Marquee';
import { experiences } from '../data/experience';

export const Experience = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      {/* Marquee en haut */}
      <div className="mb-16">
        <Marquee speed={35} direction="right" className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.experience')}
          </span>
        </Marquee>
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t('experience.title')} subtitle={t('experience.subtitle')} />

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block">
            <motion.div
              style={{
                scaleY: pathLength,
              }}
              className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative md:pl-24"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"
                />

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:border-accent/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-1">
                        {t(`experience.items.${exp.id}.position`, exp.position)}
                      </h3>
                      <p className="text-lg text-accent font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-muted text-sm md:text-base mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-text/70 mb-4 leading-relaxed">
                    {t(`experience.items.${exp.id}.description`, exp.description)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs bg-accent/10 border border-accent/30 rounded text-accent"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee en bas */}
      <div className="mt-16">
        <Marquee speed={35} className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.experienceBottom')}
          </span>
        </Marquee>
      </div>
    </section>
  );
};

