import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface SradProps {
  onNavigate: (page: string) => void;
}

const sradData: SubteamDetailsData = {
  name: 'SRAD',
  description:
    'Manage all Student Research and Developed components being added to the COTS rocket as well as leading the development of a hybrid rocket motor',
  meetingTimes: ['Mondays 5:30 PM - 7:30 PM', 'Fridays 4:30 PM - 6:30 PM'],
  lead: 'Emiliano Torres',
  coLead: 'Samantha Lee',
  projects: [
    {
      id: 'srad-hybrid-injector',
      title: 'Hybrid Injector Prototype',
      lead: 'Emiliano Torres',
      coLead: 'Samantha Lee',
      members: ['Adrian Vega', 'Maya Singh', 'Julian Campos'],
      date: 'Fall 2025',
      technicalReport:
        'Prototyped and iterated injector geometries for a student-developed hybrid system, emphasizing manufacturability and controlled oxidizer distribution. Early cold-flow results narrowed design options and established the next test matrix for combustion characterization.',
      image: '/images/srad.JPG',
    },
  ],
};

export default function Srad({ onNavigate }: SradProps) {
  return <SubteamDetails subteam={sradData} onNavigate={onNavigate} />;
}
