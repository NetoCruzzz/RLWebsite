import { Rocket } from '../types';

export const rocketsData: Rocket[] = [
  {
    id: '1',
    name: 'Disparado',
    year: '2025',
    thumbnail: '/images/Project Thumbnail Images/disparadoteamphoto.jpg',
    description: 'Our first competitive rocket, designed to reach an altitude of 10,000 feet with a custom payload.',
    mainImage: '/images/Project Rockets Images/Main Pictures/maindisparado.jpg',
    specifications: {
      height: '9 feet',
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
    images: [
        '/images/Project Rockets Images/Additional Pictures/additionaldisparado1.jpg', 
        '/images/Project Rockets Images/Additional Pictures/additionaldisparado2.jpg'
    ],
  },
  {
    id: '2',
    name: 'Invictus',
    year: '2024',
    thumbnail: '/images/Project Thumbnail Images/invictusteamphoto.jpg',
    description: 'An improved design featuring carbon fiber construction and advanced avionics for precise altitude control.',
    mainImage: '/images/Project Rockets Images/Main Pictures/maininvictus.jpg',
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
    images: [
        '/images/Project Rockets Images/Additional Pictures/additionalinvictus1.jpg', 
        '/images/Project Rockets Images/Additional Pictures/additionalinvictus2.jpg'
    ],
  },
  {
    id: '3',
    name: 'Cuhboom',
    year: '2023',
    thumbnail: '/images/Project Thumbnail Images/cuhboomteamphoto.jpg',
    description: 'Our most advanced rocket to date, featuring a custom hybrid propulsion system and AI-powered flight control.',
    mainImage: '/images/Project Rockets Images/Main Pictures/maincuhboom.jpg',
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
    images: [
        '/images/Project Rockets Images/Additional Pictures/additionalcuhboom1.jpg', 
        '/images/Project Rockets Images/Additional Pictures/additionalcuhboom2.jpg'
    ],
  },
];
