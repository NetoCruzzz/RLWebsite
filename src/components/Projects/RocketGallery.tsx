import { Rocket } from '../../types';
import Card from '../Shared/Card';

interface RocketGalleryProps {
  rockets: Rocket[];
  onSelectRocket: (rocket: Rocket) => void;
}

export default function RocketGallery({ rockets, onSelectRocket }: RocketGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rockets.map((rocket) => (
        <Card key={rocket.id} hover>
          <div
            className="cursor-pointer"
            onClick={() => onSelectRocket(rocket)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                    src={rocket.thumbnail} 
                    alt={rocket.name + " Thumbnail"}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{rocket.name}</h3>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {rocket.year}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{rocket.description}</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>View Details</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
