import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface StructuresProps {
  onNavigate: (page: string) => void;
}

const structuresData: SubteamDetailsData = {
  name: 'Structures',
  description:
    'Design and manufacture the airframe, fins, and structural components using advanced materials like carbon fiber and fiberglass.',
  meetingTimes: ['Mondays 6:00 PM - 8:00 PM', 'Fridays 5:00 PM - 7:00 PM'],
  lead: 'Avery Martinez',
  coLead: 'Jordan Nguyen',
  projects: [
    {
      id: 'structures-airframe-v3',
      title: 'Airframe Reinforcement V3',
      lead: 'Avery Martinez',
      coLead: 'Jordan Nguyen',
      members: ['Sofia Ruiz', 'Ethan Rivera', 'Camila Flores'],
      date: 'Fall 2025',
      technicalReport:
        'Designed and validated a reinforced carbon fiber layup schedule for the mid-body airframe section. The team iterated through coupon testing, adjusted the fiber orientation to reduce buckling risk under peak acceleration, and finalized a manufacturable process document used for repeatable builds.',
      image: '/images/structures.jpg',
    },
  ],
};

export default function Structures({ onNavigate }: StructuresProps) {
  return <SubteamDetails subteam={structuresData} onNavigate={onNavigate} />;
}
