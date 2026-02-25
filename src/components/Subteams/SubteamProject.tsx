import { SubteamProject as SubteamProjectType } from '../../types';

interface SubteamProjectProps {
  project: SubteamProjectType;
}

export default function SubteamProject({ project }: SubteamProjectProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="lg:col-span-2 p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h3 className="text-2xl font-bold text-prussian-blue-900">{project.title}</h3>
            <span className="text-sm font-semibold text-prussian-blue-700 bg-parchment-100 px-3 py-1 rounded-full w-fit">
              {project.date}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 text-prussian-blue-800">
            <p>
              <span className="font-semibold">Lead:</span> {project.lead}
            </p>
            <p>
              <span className="font-semibold">Co-Lead:</span> {project.coLead}
            </p>
          </div>

          <div className="mb-5">
            <p className="font-semibold text-prussian-blue-900 mb-2">Contributing Members</p>
            <p className="text-prussian-blue-700">{project.members.join(', ')}</p>
          </div>

          <div>
            <p className="font-semibold text-prussian-blue-900 mb-2">Technical Report</p>
            <p className="text-prussian-blue-700 leading-relaxed">{project.technicalReport}</p>
          </div>
        </div>

        <div className="h-64 lg:h-full bg-parchment-100">
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
