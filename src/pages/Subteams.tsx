import SubteamCard from '../components/Subteams/SubteamCard';
import { subteamsData } from '../data/subteams';

export default function Subteams() {
  return (
    // Added transition and dark:bg-black to match your Home page
    <div className="min-h-screen bg-parchment-50 dark:bg-[#0a111a] transition-colors duration-300">
      {/* Restored the Red Gradient Header */}
    <section className="bg-gradient-to-br from-[#c50a07] to-[#620504] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Our Subteams</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Each subteam plays a critical role in the success of our rocket program. 
          Hover over each team to learn more about what they do.
        </p>
      </div>
    </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subteamsData.map((subteam) => (
              <SubteamCard key={subteam.id} subteam={subteam} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA section with fixed dark mode text colors */}
      <section className="py-16 px-4 bg-parchment-50 dark:bg-[#0a111a] transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-prussian-blue-900 dark:text-dark-garnet-500">
            Interested in Joining a Subteam?
          </h2>
          <p className="text-lg text-prussian-blue-700 dark:text-gray-400 mb-8">
            We welcome students from all academic backgrounds and experience levels. Whether you're a seasoned student or just starting out, 
            there's a place for you on our team.
          </p>
          <p className="text-lg text-prussian-blue-700 dark:text-gray-400">
            Contact us to learn more about how you can contribute to our mission and gain hands-on
            experience in aerospace engineering.
          </p>
        </div>
      </section>
    </div>
  );
}