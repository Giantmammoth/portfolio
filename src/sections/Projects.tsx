import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { Marquee } from '../components/Marquee';

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center min-h-[400px]"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl md:text-8xl font-display font-bold text-accent mb-6"
          >
            {t('projects.comingSoon')}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-muted text-lg max-w-2xl"
          >
            {t('projects.description')}
          </motion.p>
        </motion.div>

        {/* Marquee avec technologies */}
        <div className="mt-32">
          <Marquee speed={40} className="py-6">
            <span className="text-4xl md:text-6xl font-display font-bold text-text/10">
              REACT • NODE.JS • FLUTTER • TYPESCRIPT • EXPRESS • DJANGO • FIREBASE • MONGODB • DOCKER • GITHUB • GITLAB • PYTHON • SPARK • HADOOP • KOTLIN • SWIFT • 
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
};
