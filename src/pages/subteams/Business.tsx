import SubteamDetails from '../SubteamDetails';
import { SubteamDetailsData } from '../../types';

interface BusinessProps {
  onNavigate: (page: string) => void;
}

const businessData: SubteamDetailsData = {
  name: 'Business',
  description: 'Handles outreach to companies and secures sponsorships for the organization.',
  meetingTimes: ['Tuesdays 7:00 PM - 8:30 PM', 'Thursdays 7:00 PM - 8:30 PM'],
  lead: 'Valeria Gutierrez',
  coLead: 'Lucas Bennett',
  projects: [
    {
      id: 'business-sponsor-campaign',
      title: 'Sponsor Campaign 2026',
      lead: 'Valeria Gutierrez',
      coLead: 'Lucas Bennett',
      members: ['Madison Webb', 'Cole Alvarez', 'Ruby Santos'],
      date: 'Spring 2026',
      technicalReport:
        'Developed a structured sponsor outreach pipeline with tiered partnership packages and reporting templates. The campaign aligned technical milestones with sponsor deliverables, improving communication consistency and increasing long-term partnership retention.',
      image: '/images/business.jpg',
    },
  ],
};

export default function Business({ onNavigate }: BusinessProps) {
  return <SubteamDetails subteam={businessData} onNavigate={onNavigate} />;
}
