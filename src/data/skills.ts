export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'DevOps' | 'ML/Big Data';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'gRPC', category: 'Backend' },
  { name: 'WebSocket', category: 'Backend' },
  
  // Mobile
  { name: 'Flutter', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'Swift', category: 'Mobile' },
  
  // Database
  { name: 'Firebase', category: 'Database' },
  { name: 'Supabase', category: 'Database' },
  { name: 'Firestore', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  
  // DevOps
  { name: 'Docker', category: 'DevOps' },
  { name: 'CI/CD', category: 'DevOps' },
  
  // ML/Big Data
  { name: 'Python', category: 'ML/Big Data' },
  { name: 'Spark', category: 'ML/Big Data' },
  { name: 'Hadoop', category: 'ML/Big Data' },
];

