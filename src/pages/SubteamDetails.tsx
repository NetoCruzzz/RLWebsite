import Button from '../components/Shared/Button';
import SubteamProject from '../components/Subteams/SubteamProject';
import { SubteamDetailsData } from '../types';

interface SubteamDetailsProps {
  subteam: SubteamDetailsData;
  onNavigate: (page: string) => void;
}

export default function SubteamDetails({ subteam, onNavigate }: SubteamDetailsProps) {
  return (
    <div className="min-h-screen bg-parchment-50">
      <section className="bg-gradient-to-br from-dark-garnet-500 to-dark-garnet-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">{subteam.name}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{subteam.description}</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-prussian-blue-900 mb-6">Team Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-semibold text-prussian-blue-900 mb-3">Meeting Times</p>
              <ul className="space-y-2 text-prussian-blue-700">
                {subteam.meetingTimes.map((meetingTime) => (
                  <li key={meetingTime}>{meetingTime}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-prussian-blue-900 mb-2">Lead</p>
              <p className="text-prussian-blue-700">{subteam.lead}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-prussian-blue-900 mb-2">Co-Lead</p>
              <p className="text-prussian-blue-700">{subteam.coLead}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-prussian-blue-900 mb-6">Projects</h2>
          <div className="space-y-8">
            {subteam.projects.map((project) => (
              <SubteamProject key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-10">
            <Button variant="outline" onClick={() => onNavigate('subteams')}>
              Back to Subteams
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
