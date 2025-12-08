import { Competition } from '../types';

export const competitionsData: Competition[] = [
  {
    id: '1',
    name: 'International Rocket Engineering Competition (IREC)',
    description: 'The world\'s largest intercollegiate rocket engineering competition, bringing together teams from around the globe to launch high-powered rockets in locations such as Utah, New Mexico, and Texas.',
    date: 'May 2025',
    location: 'Spaceport Midland, Texas',
    image: '/images/competitionIREC.jpg',
    achievements: [
      '2023: 1st Place - 10K COTS Category',
      '2022: Technical Excellence Award',
      '2021: Successfully launched to target altitude',
    ],
  },
  {
    id: '2',
    name: 'Texas Lone Star Cup',
    description: 'The Lone Star Cup is a premier rocketry competition for Texas-based teams, providing a crucial opportunity for test flights ahead of IREC. Teams compete across three altitude categories: 5,000 ft, 10,000 ft, and 30,000 ft. Performance is judged using Barrowman scoring to recognize the most stable and accurate flights. The event concludes with a Texas-style barbecue for networking among sponsors, participants, and spectators.',
    date: 'April 2024',
    location: 'Seymour, Texas',
    image: '/images/lonestarcup.jpg',
    achievements: [
      '2023: Top 10 Finish',
      '2022: Payload Innovation Award',
      '2021: Successfully completed all mission objectives',
    ],
  },
];
