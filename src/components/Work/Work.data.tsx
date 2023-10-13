import {
  SiTailwindcss,
  SiGithub,
  SiReact,
  SiNextdotjs,
  SiTestinglibrary,
} from 'react-icons/si';

export const cardContent = [
  {
    id: 0,
    title: 'HABITAT',
    description: 'HABITAT is a fully functional real state Website operating in Pereira,Colombia. ',
    imageUrl: '/work-1.jpeg',
    skills: [
      {
        icon: <SiReact size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
      {
        icon: <SiTestinglibrary size="40" />, // Reemplazado por MERN
      },
    ],
  },
  {
    id: 1,
    title: 'SmartBlog',
    description:
      'SmartBlog is an IA-powered traveling Blog generator',
    imageUrl: '/work-2.jpeg',
    skills: [
      {
        icon: <SiNextdotjs size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
      {
        icon: <SiGithub size="40" />,
      },
    ],
  },
  {
    id: 2,
    title: 'MofenTours',
    description:
      'A website that can provides beautiful content about a tours agency and its implemented with Stripe for payments',
    imageUrl: '/work-3.jpeg',
    skills: [
      {
        icon: <SiNextdotjs size="40" />,
      },
      {
        icon: <SiTailwindcss size="40" />,
      },
      {
        icon: <SiReact size="40" />, // Reemplazado por Node.js
      },
    ],
  },
];