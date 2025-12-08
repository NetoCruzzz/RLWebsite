// ADD PICTURES:
// Structures, Avionics, Recovery, Payload, Propulsion, Flight Dynamics, SRAD, Business, Graphics || {subteam name}.JPG
// Don't need to modify code, just add images to public/images folder with the correct names as shown above.

import { Subteam } from '../types';

export const subteamsData: Subteam[] = [
  {
    id: '1',
    name: 'Structures',
    description: 'Design and manufacture the airframe, fins, and structural components using advanced materials like carbon fiber and fiberglass.',
    image: '/images/Subteams Images/structures.jpg',
  },

  {
    id: '2',
    name: 'Avionics',
    description: 'Develop flight computers, telemetry systems, and sensor arrays to monitor and control the rocket during flight.',
    image: '/images/Subteams Images/avionics.jpg',
  },

  {
    id: '3',
    name: 'Recovery',
    description: 'Design and test parachute deployment systems, ensuring safe recovery of the rocket after launch.',
    image: '/images/Subteams Images/recovery.jpg',
  },

   {
    id: '4',
    name: 'Payload',
    description: 'Create innovative payload experiments and integrate scientific instruments for data collection during flight.',
    image: '/images/Subteams Images/payload.jpg',
  },

  {
    id: '5',
    name: 'Propulsion',
    description: 'Select and integrate rocket motors, design thrust vectoring systems, and optimize engine performance for maximum efficiency.',
    image: '/images/Subteams Images/propulsion.jpg',
  },

  {
    id: '6',
    name: 'Flight Dynamics',
    description: "Simulate and optimize the rocket's trajectory, stability, and aerodynamic performance.",
    image: '/images/Subteams Images/flightdynamics.jpg',
  },

  {
    id: '7',
    name: 'SRAD',
    description: 'Manage all Student Research and Developed components being added to the COTS rocket as well as leading the development of a hybrid rocket motor',
    image: '/images/Subteams Images/srad.JPG',
  },

  {
    id: '8',
    name: 'Business',
    description: 'Handles outreach to companies and secures sponsorships for the organization.',
    image: '/images/Subteams Images/business.jpg',
  },

  {
    id: '9',
    name: 'Graphics',
    description: 'Responsible for bringing our vision to life through eye-catching shirts, logos, flyers, and artistic elements for the rocket. They combine art and engineering to showcarse our identity',
    image: '/images/Subteams Images/graphics.jpg',
  },
];
