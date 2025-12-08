export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Independant',
    position: 'Fullstack JS & Mobile Engineer',
    period: '2025 – Present',
    description: 'Building modern web and mobile applications with advanced features like real-time updates, secure payments, and CI/CD automation.',
    technologies: ['React', 'Node.js', 'Flutter', 'Docker', 'CI/CD']
  },
  {
    id: '2',
    company: 'eTech Consulting',
    position: 'Fullstack JS & Mobile Engineer',
    period: '2023 – Present',
    description: 'Developing scalable web/mobile apps using React, Flutter, Node.js, and gRPC.',
    technologies: ['React', 'Flutter', 'Node.js', 'gRPC']
  },
  {
    id: '3',
    company: 'Express in Code',
    position: 'Frontend Engineer',
    period: '2022 – 2023',
    description: 'Built a streaming platform for manga reading using ReactJS.',
    technologies: ['React', 'JavaScript']
  },
  {
    id: '4',
    company: 'SOAVATO',
    position: 'Fullstack JS Engineer',
    period: '2021 – 2022',
    description: 'Designed and deployed a construction management platform with React + Node.',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: '5',
    company: 'CENI',
    position: 'Desktop Application Engineer',
    period: '2020',
    description: 'Built a desktop app for sales management (Delphi + SQL Server).',
    technologies: ['Delphi', 'SQL Server']
  },
];

