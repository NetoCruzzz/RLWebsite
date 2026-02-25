import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface GraphicsProps {
  onNavigate: (page: string) => void;
}

const graphicsData: SubteamDetailsData = {
  name: 'Graphics',
  description:
    'Responsible for bringing our vision to life through eye-catching shirts, logos, flyers, and artistic elements for the rocket. They combine art and engineering to showcarse our identity',
  meetingTimes: ['Wednesdays 7:00 PM - 8:30 PM', 'Sundays 5:00 PM - 6:30 PM'],
  lead: 'Chloe Ramirez',
  coLead: 'Tyler Escobar',
  projects: [
    {
      id: 'graphics-vehicle-identity',
      title: 'Vehicle Identity Package',
      lead: 'Chloe Ramirez',
      coLead: 'Tyler Escobar',
      members: ['Emma Castillo', 'Parker Hall', 'Zoe Delgado'],
      date: 'Fall 2025',
      technicalReport:
        'Produced a full visual package including mission patch concepts, launch collateral, and airframe graphics integration guidelines. The team standardized print-ready assets and color usage across apparel, outreach materials, and on-vehicle branding.',
      image: '/images/graphics.jpg',
    },
  ],
};

export default function Graphics({ onNavigate }: GraphicsProps) {
  return <SubteamDetails subteam={graphicsData} onNavigate={onNavigate} />;
}
