import { ExternalLink, Heart } from 'lucide-react';
import Card from '../components/Shared/Card';
import Button from '../components/Shared/Button';
import { sponsorsData } from '../data/sponsors';

export default function Sponsors() {
  const tierConfig = {
    platinum: {
      title: 'Platinum Sponsors',
      color: 'from-slate-300 to-slate-400',
      textColor: 'text-slate-700',
    },
    gold: {
      title: 'Gold Sponsors',
      color: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-700',
    },
    silver: {
      title: 'Silver Sponsors',
      color: 'from-gray-300 to-gray-400',
      textColor: 'text-gray-700',
    },
    bronze: {
      title: 'Bronze Sponsors',
      color: 'from-orange-400 to-orange-500',
      textColor: 'text-orange-700',
    },
  };

  const sponsorsByTier = {
    platinum: sponsorsData.filter((s) => s.tier === 'platinum'),
    gold: sponsorsData.filter((s) => s.tier === 'gold'),
    silver: sponsorsData.filter((s) => s.tier === 'silver'),
    bronze: sponsorsData.filter((s) => s.tier === 'bronze'),
  };

  return (
    <div className="min-h-screen bg-parchment-50">
      <section className="bg-gradient-to-r from-primary-500 to-prussian-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We are grateful for the support of our sponsors who make our mission possible. Their
            contributions enable us to push the boundaries of student rocketry.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {Object.entries(sponsorsByTier).map(([tier, sponsors]) => {
            if (sponsors.length === 0) return null;
            const config = tierConfig[tier as keyof typeof tierConfig];

            return (
              <div key={tier}>
                <div className="flex items-center justify-center mb-8">
                  <div className={`bg-gradient-to-r ${config.color} px-8 py-3 rounded-full`}>
                    <h2 className={`text-3xl font-bold ${config.textColor}`}>
                      {config.title}
                    </h2>
                  </div>
                </div>
                <div
                  className={`grid gap-8 ${
                    tier === 'platinum'
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                  }`}
                >
                  {sponsors.map((sponsor) => (
                    <Card key={sponsor.id} hover>
                      <div className="p-8 text-center">
                        <div
                          className={`bg-parchment-100 rounded-lg mb-4 flex items-center justify-center ${
                            tier === 'platinum' ? 'h-48' : 'h-32'
                          }`}
                        >
                          <p className="text-dusty-grape-500">{sponsor.name} Logo</p>
                        </div>
                        <h3
                          className={`font-bold mb-4 text-prussian-blue-900 ${
                            tier === 'platinum' ? 'text-2xl' : 'text-xl'
                          }`}
                        >
                          {sponsor.name}
                        </h3>
                        {sponsor.website && (
                          <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-500 hover:text-prussian-blue-700 font-semibold"
                          >
                            Visit Website
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4 bg-parchment-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-prussian-blue-900">Thank You to Our Sponsors</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your generous support enables our team to design, build, and launch cutting-edge rockets
            while providing invaluable hands-on experience to student engineers. Together, we're
            inspiring the next generation of aerospace innovators.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary-500 to-prussian-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Sponsor</h2>
          <p className="text-xl mb-8 text-blue-100">
            Partner with us to support student innovation and gain visibility with the next
            generation of engineers. We offer various sponsorship levels to match your goals.
          </p>
            <Button
              size="lg"
              className="bg-parchment-50 text-primary-500 hover:bg-parchment-100"
            >
            Learn About Sponsorship Opportunities
          </Button>
        </div>
      </section>
    </div>
  );
}
