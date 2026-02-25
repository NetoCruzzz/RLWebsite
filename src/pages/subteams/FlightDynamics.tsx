import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface FlightDynamicsProps {
  onNavigate: (page: string) => void;
}

const flightDynamicsData: SubteamDetailsData = {
  name: 'Flight Dynamics',
  description: "Simulate and optimize the rocket's trajectory, stability, and aerodynamic performance.",
  meetingTimes: ['Wednesdays 6:00 PM - 8:00 PM', 'Sundays 2:00 PM - 4:00 PM'],
  lead: 'Priya Shah',
  coLead: 'Owen Ramirez',
  projects: [
    {
      id: 'flight-dynamics-monte-carlo',
      title: 'Monte Carlo Trajectory Study',
      lead: 'Priya Shah',
      coLead: 'Owen Ramirez',
      members: ['Kayla Medina', 'Victor Tran', 'Ian Flores'],
      date: 'Spring 2026',
      technicalReport:
        'Built a simulation campaign to evaluate trajectory dispersion across wind, mass, and drag uncertainty bounds. The resulting envelope analysis guided launch-day decision criteria and improved confidence in stability margins under variable atmospheric conditions.',
      image: '/images/flightdynamics.jpg',
    },
  ],
};

export default function FlightDynamics({ onNavigate }: FlightDynamicsProps) {
  return <SubteamDetails subteam={flightDynamicsData} onNavigate={onNavigate} />;
}
