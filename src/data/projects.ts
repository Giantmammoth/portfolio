export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Streaming Platform',
    description: 'A modern streaming platform for manga reading with real-time updates and smooth user experience.',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'WebSocket'],
  },
  {
    id: '2',
    title: 'Construction Management Platform',
    description: 'Comprehensive platform for managing construction projects with real-time collaboration features.',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: '3',
    title: 'Mobile E-Commerce App',
    description: 'Cross-platform mobile application with secure payments and real-time inventory management.',
    category: 'Mobile Application',
    technologies: ['Flutter', 'Firebase', 'Firestore'],
  },
  {
    id: '4',
    title: 'Real-time Chat Application',
    description: 'Scalable chat application with WebSocket support and end-to-end encryption.',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
  },
];

