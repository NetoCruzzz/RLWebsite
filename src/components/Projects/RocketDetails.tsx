import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Rocket } from '../../types';
import Button from '../Shared/Button';

interface RocketDetailsProps {
  rocket: Rocket;
  onBack: () => void;
}

export default function RocketDetails({ rocket, onBack }: RocketDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-blue-100 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl font-bold mb-2">{rocket.name}</h1>
              <p className="text-xl text-blue-100">{rocket.description}</p>
            </div>
            <span className="text-lg font-semibold bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              {rocket.year}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center overflow-hidden">
                {rocket.mainImage ? ( 
                  <img
                    src={rocket.mainImage}
                    alt={rocket.name + ' Main Image'}
                    className="w-full h-full object-cover"
                   />
                 ) : ( 
                   <p className="text-gray-500">Main Rocket Image Not Available</p>
                 )}
             </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Specifications</h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                {Object.entries(rocket.specifications).map(([key, value]) => (
                  value && (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-3 last:border-0">
                      <span className="font-semibold text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Achievements</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                {rocket.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Additional Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rocket.images.map((image, index) => (
                <div
                  key={index}
                   className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center overflow-hidden" 
              >
                  {image ? (
                    <img
                      src={image}
                      alt={`Additional Image ${index + 1} for ${rocket.name}`}
                      className="w-full h-full object-cover"
                   />
                 ) : (
                    <p className="text-gray-500">Image {index + 1} Not Available</p>
                 )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button onClick={onBack}>
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
