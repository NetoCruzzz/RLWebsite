import { Competition } from '../types';

export const competitionsData: Competition[] = [
  {
    id: '1',
    name: 'Spaceport America Cup',
    description: 'The world\'s largest intercollegiate rocket engineering competition, bringing together teams from around the globe to launch high-powered rockets in the New Mexico desert.',
    date: 'June 2024',
    location: 'Las Cruces, New Mexico',
    image: '/images/spaceport.jpg',
    achievements: [
      '2023: 1st Place - 10K COTS Category',
      '2022: Technical Excellence Award',
      '2021: Successfully launched to target altitude',
    ],
  },
  {
    id: '2',
    name: 'NASA Student Launch',
    description: 'A premier NASA competition challenging students to design, build, and launch a reusable rocket with a complex payload to one mile altitude. Teams must complete rigorous design reviews and meet strict safety requirements.',
    date: 'April 2024',
    location: 'Huntsville, Alabama',
    image: '/images/nasa-launch.jpg',
    achievements: [
      '2023: Top 10 Finish',
      '2022: Payload Innovation Award',
      '2021: Successfully completed all mission objectives',
    ],
  },
];
