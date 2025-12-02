import { Calendar, MapPin, Trophy } from 'lucide-react';
import Card from '../components/Shared/Card';
import { competitionsData } from '../data/competitions';

export default function Competitions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Competitions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We compete at the highest level of collegiate rocketry, testing our skills and
            innovations against the best teams in the nation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {competitionsData.map((competition) => (
            <Card key={competition.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-300 aspect-video lg:aspect-auto flex items-center justify-center">
                  <p className="text-gray-500">{competition.name} Image</p>
                </div>
                <div className="p-6 lg:p-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{competition.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{competition.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-semibold">{competition.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-semibold">{competition.location}</span>
                    </div>
                  </div>

                  {competition.achievements && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Trophy className="h-5 w-5 mr-2 text-blue-600" />
                        <h3 className="font-bold text-gray-900">Our Achievements</h3>
                      </div>
                      <ul className="space-y-2">
                        {competition.achievements.map((achievement, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Competing at the Highest Level</h2>
          <p className="text-lg text-gray-600 mb-4">
            These competitions provide our team with invaluable experience in project management,
            technical problem-solving, and teamwork. They challenge us to innovate and push the
            boundaries of what's possible in student rocketry.
          </p>
          <p className="text-lg text-gray-600">
            Each competition season brings new challenges and opportunities for our team to grow and
            demonstrate our capabilities on a national stage.
          </p>
        </div>
      </section>
    </div>
  );
}
