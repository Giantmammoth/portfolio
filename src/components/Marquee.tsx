import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee = ({ 
  children, 
  direction = 'left', 
  speed = 50,
  className = '' 
}: MarqueeProps) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        <div className="flex">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 px-8">
              {children}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

