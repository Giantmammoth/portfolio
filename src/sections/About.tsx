import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { Marquee } from '../components/Marquee';
import { personalInfo } from '../data/personal';
import profileImage from '../assets/images/profile.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

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
          {/* Image et Bio en layout grid avec Card */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
            {/* Image de profil avec Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <Card className="overflow-hidden border-border/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Texte Bio avec Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <Card className="border-border/30 bg-card/80 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-foreground">
                    {t('about.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-foreground/90 leading-relaxed"
                  >
                    {t('about.bio')}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Section Éducation avec Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-display font-semibold text-text">
                {t('about.education')}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="border-border/30 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                          {edu.degree}
                        </CardTitle>
                        <Badge variant="outline" className="shrink-0 text-foreground border-foreground/20">
                          {edu.period}
                        </Badge>
                      </div>
                      <Separator className="my-3 bg-border/50" />
                      <CardDescription className="text-base text-muted-foreground">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                  </Card>
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
