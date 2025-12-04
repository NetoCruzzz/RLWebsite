import SubteamCard from '../components/Subteams/SubteamCard';
import { subteamsData } from '../data/subteams';

export default function Subteams() {
  return (
    <div className="min-h-screen bg-parchment-50">
      <section className="bg-gradient-to-r from-primary-500 to-prussian-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Subteams</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Each subteam plays a critical role in the success of our rocket program. Hover over
            each team to learn more about what they do.
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

      <section className="py-16 px-4 bg-parchment-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-prussian-blue-900">Interested in Joining a Subteam?</h2>
          <p className="text-lg text-prussian-blue-700 mb-8">
            We welcome students from all engineering backgrounds and experience levels. Whether
            you're a seasoned engineer or just starting out, there's a place for you on our team.
          </p>
          <p className="text-lg text-prussian-blue-700">
            Contact us to learn more about how you can contribute to our mission and gain hands-on
            experience in aerospace engineering.
          </p>
        </div>
      </section>
    </div>
  );
}
