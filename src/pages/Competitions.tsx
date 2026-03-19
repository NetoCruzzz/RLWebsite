import { Calendar, MapPin, Trophy } from 'lucide-react';
import Card from '../components/Shared/Card';
import { competitionsData } from '../data/competitions';

export default function Competitions() {
  return (
    <div className="min-h-screen bg-parchment-50 dark:bg-[#0a111a] transition-colors duration-300"> 
      
      {/* 1. Header Section */}
      <section className="bg-gradient-to-br from-[#c50a07] to-[#620504] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Competitions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We compete at the highest level of collegiate rocketry, testing our skills and
            innovations against the best teams in the world.
          </p>
        </div>
      </section>

      {/* 2. Competitions List Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {competitionsData.map((competition) => (
            <Card key={competition.id} className="dark:bg-slate-900/40 dark:border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Competition Image */}
                <a 
                  href={competition.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-90 transition-opacity"
                >
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                      src={competition.image} 
                      alt={competition.name + " Competition Image"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
                
                {/* Competition Details */}
                <div className="p-6 lg:p-8">
                  <h2 className="text-3xl font-bold mb-4 text-prussian-blue-900 dark:text-white">
                    {competition.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {competition.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Calendar className="h-5 w-5 mr-3 text-[#c50a07] dark:text-dark-garnet-400" />
                      <span className="font-semibold">{competition.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-3 text-[#c50a07] dark:text-dark-garnet-400" />
                      <span className="font-semibold">{competition.location}</span>
                    </div>
                  </div>

                  {/* ACHIEVEMENTS BOX: Now matches Home Page styling */}
                  {competition.achievements && (
                    <div className="mt-4">
                      <Card className="p-6 border-none shadow-inner bg-gray-50/50 dark:bg-slate-800/30">
                        <div className="flex flex-col items-center sm:items-start">
                          
                          {/* Circular Icon - Matching Home.tsx */}
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-prussian-blue-100 dark:bg-space-indigo-800 rounded-full mb-4 transition-colors">
                            <Trophy className="h-6 w-6 text-prussian-blue-600 dark:text-primary-400" />
                          </div>

                          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                            Our Achievements
                          </h3>

                          <ul className="space-y-2 w-full">
                            {competition.achievements.map((achievement, index) => (
                              <li key={index} className="text-gray-600 dark:text-parchment-200 flex items-start">
                                <span className="text-prussian-blue-500 dark:text-primary-400 mr-2 font-bold">•</span>
                                <span className="text-sm md:text-base">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Footer CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#c50a07] to-[#620504]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Competing at the Highest Level</h2>
          <p className="text-lg text-white/90 mb-4">
            These competitions provide our team with invaluable experience in project management,
            technical problem-solving, and teamwork. They challenge us to innovate and push the
            boundaries of what's possible in student rocketry.
          </p>
          <p className="text-lg text-white/90">
            Each competition season brings new challenges and opportunities for our team to grow and
            demonstrate our capabilities on an international stage.
          </p>
        </div>
      </section>
    </div>
  );
}