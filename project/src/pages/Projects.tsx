import { useState } from 'react';
import { Rocket } from '../types';
import { rocketsData } from '../data/rockets';
import RocketGallery from '../components/Projects/RocketGallery';
import RocketDetails from '../components/Projects/RocketDetails';

export default function Projects() {
  const [selectedRocket, setSelectedRocket] = useState<Rocket | null>(null);

  if (selectedRocket) {
    return (
      <RocketDetails
        rocket={selectedRocket}
        onBack={() => setSelectedRocket(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our rocket designs from previous years. Each project represents countless hours
            of dedication, innovation, and teamwork.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <RocketGallery
            rockets={rocketsData}
            onSelectRocket={setSelectedRocket}
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Building the Future</h2>
          <p className="text-lg text-gray-600 mb-4">
            Each rocket we design pushes the boundaries of what student engineers can achieve. From
            structural integrity to advanced avionics, every component is carefully crafted by our
            dedicated team members.
          </p>
          <p className="text-lg text-gray-600">
            Want to be part of our next project? Join us and help shape the future of aerospace
            engineering.
          </p>
        </div>
      </section>
    </div>
  );
}
