import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface PropulsionProps {
  onNavigate: (page: string) => void;
}

const propulsionData: SubteamDetailsData = {
  name: 'Propulsion',
  description:
    'Select and integrate rocket motors, design thrust vectoring systems, and optimize engine performance for maximum efficiency.',
  meetingTimes: ['Tuesdays 5:30 PM - 7:30 PM', 'Fridays 6:00 PM - 8:00 PM'],
  lead: 'Carlos Mendoza',
  coLead: 'Hannah Brooks',
  projects: [
    {
      id: 'propulsion-static-fire-series',
      title: 'Static Fire Series A',
      lead: 'Carlos Mendoza',
      coLead: 'Hannah Brooks',
      members: ['Mateo Silva', 'Aiden Reyes', 'Julia Hernandez'],
      date: 'Fall 2025',
      technicalReport:
        'Executed a static-fire campaign to characterize thrust behavior and thermal response for motor integration. Instrumentation focused on chamber pressure and temperature trend analysis, informing updated mounting constraints and ignition safety procedures.',
      image: '/images/propulsion.jpg',
    },
  ],
};

export default function Propulsion({ onNavigate }: PropulsionProps) {
  return <SubteamDetails subteam={propulsionData} onNavigate={onNavigate} />;
}
