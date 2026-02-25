import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface PayloadProps {
  onNavigate: (page: string) => void;
}

const payloadData: SubteamDetailsData = {
  name: 'Payload',
  description:
    'Create innovative payload experiments and integrate scientific instruments for data collection during flight.',
  meetingTimes: ['Mondays 7:00 PM - 9:00 PM', 'Thursdays 5:30 PM - 7:30 PM'],
  lead: 'Elena Vasquez',
  coLead: 'Ryan Kim',
  projects: [
    {
      id: 'payload-sensor-bay',
      title: 'Environmental Sensor Bay',
      lead: 'Elena Vasquez',
      coLead: 'Ryan Kim',
      members: ['Grace Salinas', 'Daniel Ortiz', 'Nora Diaz'],
      date: 'Spring 2026',
      technicalReport:
        'Integrated a compact payload sensor bay for pressure and temperature profiling across ascent and descent. The project included isolation mounting, calibration against reference instruments, and a synchronized logging workflow to align payload data with avionics timestamps.',
      image: '/images/payload.jpg',
    },
  ],
};

export default function Payload({ onNavigate }: PayloadProps) {
  return <SubteamDetails subteam={payloadData} onNavigate={onNavigate} />;
}
