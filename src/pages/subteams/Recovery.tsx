import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface RecoveryProps {
  onNavigate: (page: string) => void;
}

const recoveryData: SubteamDetailsData = {
  name: 'Recovery',
  description:
    'Design and test parachute deployment systems, ensuring safe recovery of the rocket after launch.',
  meetingTimes: ['Wednesdays 5:30 PM - 7:30 PM', 'Saturdays 10:00 AM - 12:00 PM'],
  lead: 'Isabella Garza',
  coLead: 'Diego Morales',
  projects: [
    {
      id: 'recovery-dual-deploy',
      title: 'Dual-Deploy Recovery Validation',
      lead: 'Isabella Garza',
      coLead: 'Diego Morales',
      members: ['Natalie Cruz', 'Alex Perez', 'Liam Torres'],
      date: 'Fall 2025',
      technicalReport:
        'Developed and tested a dual-deploy sequence using drogue and main parachute stages with revised shear-pin sizing. Ground ejection tests and drop tests established deployment timing margins and improved descent stability for safer post-flight recovery operations.',
      image: '/images/recovery.jpg',
    },
  ],
};

export default function Recovery({ onNavigate }: RecoveryProps) {
  return <SubteamDetails subteam={recoveryData} onNavigate={onNavigate} />;
}
