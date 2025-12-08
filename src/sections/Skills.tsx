import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from '../components/Card';
import { SectionTitle } from '../components/SectionTitle';
import { Marquee } from '../components/Marquee';
import { skills } from '../data/skills';

const categoryColors: Record<string, string> = {
  Frontend: 'text-blue-400',
  Backend: 'text-green-400',
  Mobile: 'text-purple-400',
  Database: 'text-yellow-400',
  DevOps: 'text-red-400',
  'ML/Big Data': 'text-pink-400',
};

export const Skills = () => {
  const { t } = useTranslation();
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Marquee en haut */}
      <div className="mb-16">
        <Marquee speed={40} direction="right" className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.skills')}
          </span>
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t('skills.title')} subtitle={t('skills.subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <Card
                key={category}
                delay={categoryIndex * 0.1}
                className="group"
              >
                <motion.h3
                  className={`text-xl font-display font-semibold mb-4 ${categoryColors[category] || 'text-accent'}`}
                >
                  {category}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        color: categoryColors[category] || '#4C6FFF',
                      }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-text/70 hover:border-accent/50 transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Marquee en bas */}
      <div className="mt-16">
        <Marquee speed={40} className="py-4">
          <span className="text-5xl md:text-7xl font-display font-bold text-text/5">
            {t('marquee.skillsBottom')}
          </span>
        </Marquee>
      </div>
    </section>
  );
};
