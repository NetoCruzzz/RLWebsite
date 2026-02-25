import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface AvionicsProps {
  onNavigate: (page: string) => void;
}

const avionicsData: SubteamDetailsData = {
  name: 'Avionics',
  description:
    'Develop flight computers, telemetry systems, and sensor arrays to monitor and control the rocket during flight.',
  meetingTimes: ['Tuesdays 6:00 PM - 8:00 PM', 'Thursdays 6:00 PM - 8:00 PM'],
  lead: 'Noah Castillo',
  coLead: 'Mia Patel',
  projects: [
    {
      id: 'avionics-telemetry-stack',
      title: 'Telemetry Stack Revamp',
      lead: 'Noah Castillo',
      coLead: 'Mia Patel',
      members: ['Sebastian Lopez', 'Aria Johnson', 'Leo Ramos'],
      date: 'Spring 2025',
      technicalReport:
        'Implemented a modular telemetry stack with redundant packet framing and ground-station decoding tools. Bench validation included packet loss simulations and field tests with improved signal integrity, resulting in more reliable real-time flight data during full-system rehearsals.',
      image: '/images/avionics.jpg',
    },
  ],
};

export default function Avionics({ onNavigate }: AvionicsProps) {
  return <SubteamDetails subteam={avionicsData} onNavigate={onNavigate} />;
}
