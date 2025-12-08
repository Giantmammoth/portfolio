import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { Marquee } from '../components/Marquee';
import { achievements } from '../data/achievements';

export const Achievements = () => {
  const { t } = useTranslation();
  return (
    <section id="achievements" className="py-32 px-4 relative overflow-hidden">
      {/* Marquee en haut */}
      <div className="mb-16">
        <Marquee speed={40} direction="right" className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.achievements')}
          </span>
        </Marquee>
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('achievements.title')} subtitle={t('achievements.subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card delay={index * 0.1} className="text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-display font-semibold text-text mb-2">
                  {achievement.title}
                </h3>
                <p className="text-accent font-medium mb-2">
                  {achievement.event}
                </p>
                <p className="text-sm text-muted">
                  {achievement.year}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee en bas */}
      <div className="mt-16">
        <Marquee speed={40} className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.achievementsBottom')}
          </span>
        </Marquee>
      </div>
    </section>
  );
};

