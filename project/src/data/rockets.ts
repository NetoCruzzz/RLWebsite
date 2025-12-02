import { Rocket } from '../types';

export const rocketsData: Rocket[] = [
  {
    id: '1',
    name: 'Phoenix I',
    year: '2022',
    thumbnail: '/images/phoenix1-thumb.jpg',
    description: 'Our first competitive rocket, designed to reach an altitude of 10,000 feet with a custom payload.',
    specifications: {
      height: '8 feet',
      diameter: '6 inches',
      weight: '25 lbs',
      apogee: '10,243 feet',
      motor: 'Cesaroni L1395',
    },
    achievements: [
      'Successfully launched at Spaceport America',
      'Achieved target altitude within 2% accuracy',
      'Completed all payload objectives',
    ],
    images: ['/images/phoenix1-1.jpg', '/images/phoenix1-2.jpg'],
  },
  {
    id: '2',
    name: 'Phoenix II',
    year: '2023',
    thumbnail: '/images/phoenix2-thumb.jpg',
    description: 'An improved design featuring carbon fiber construction and advanced avionics for precise altitude control.',
    specifications: {
      height: '9.5 feet',
      diameter: '6 inches',
      weight: '28 lbs',
      apogee: '15,127 feet',
      motor: 'Cesaroni M1670',
    },
    achievements: [
      'First place in altitude competition',
      'Successful deployment of dual-deployment recovery system',
      'Real-time telemetry transmission throughout flight',
    ],
    images: ['/images/phoenix2-1.jpg', '/images/phoenix2-2.jpg'],
  },
  {
    id: '3',
    name: 'Phoenix III',
    year: '2024',
    thumbnail: '/images/phoenix3-thumb.jpg',
    description: 'Our most advanced rocket to date, featuring a custom hybrid propulsion system and AI-powered flight control.',
    specifications: {
      height: '11 feet',
      diameter: '6.5 inches',
      weight: '32 lbs',
      apogee: '20,500 feet',
      motor: 'Custom Hybrid Motor',
    },
    achievements: [
      'Innovation award at national competition',
      'Successful test of hybrid propulsion system',
      'Integration of machine learning for flight optimization',
    ],
    images: ['/images/phoenix3-1.jpg', '/images/phoenix3-2.jpg'],
  },
];
