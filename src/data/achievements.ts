export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Backend Developer',
    event: 'DevFest Majunga 2022',
    year: '2022',
  },
  {
    id: '2',
    title: 'Fullstack JS Dev',
    event: 'Alliance Voary Gasy Hackathon',
    year: '2022',
  },
  {
    id: '3',
    title: 'Fullstack JS Dev',
    event: 'GDG Mahajanga Hackathon',
    year: '2022',
  },
];

