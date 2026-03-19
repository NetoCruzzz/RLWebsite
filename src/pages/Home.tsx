import { Rocket, Users, Trophy, Wrench } from 'lucide-react';
import Button from '../components/Shared/Button';
import Card from '../components/Shared/Card';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Rocket,
      title: 'Cutting-Edge Design',
      description: 'We design and build high-powered rockets using the latest engineering techniques and technologies.',
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Work alongside passionate students from various engineering disciplines to achieve common goals.',
    },
    {
      icon: Trophy,
      title: 'Competition Success',
      description: 'Compete in national and international competitions, showcasing our innovations against top university teams.',
    },
    {
      icon: Wrench,
      title: 'Hands-On Experience',
      description: 'Gain practical engineering experience through real-world projects and challenges.',
    },
  ];

  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-prussian-blue-800 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering the Future of Spaceflight
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Join our team of student engineers as we design, build, and launch high-powered rockets
            to compete at the international level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('join')}>
              Join Our Team
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('projects')}
              className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-opacity-20"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Our Club? Section */}
      {/* Added dark:bg-black */}
      <section className="py-16 px-4 bg-parchment-50 dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Added dark:text-parchment-50 */}
          <h2 className="text-4xl font-bold text-center mb-12 text-prussian-blue-900 dark:text-parchment-50">
            Why Join Our Club?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover>
                {/* Ensure your Card component doesn't have a forced white bg if you want it to blend, 
                    or add dark:bg-space-indigo-900 to the Card's internal div */}
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-prussian-blue-100 dark:bg-space-indigo-800 rounded-full mb-4 transition-colors">
                    <feature.icon className="h-8 w-8 text-prussian-blue-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-parchment-200">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IREC Section */}
      {/* Added dark:bg-black */}
      <section className="py-16 px-4 bg-parchment-50 dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What is IREC?</h2>
              <p className="text-lg text-gray-600 dark:text-parchment-200 mb-4">
                The Rocket Launchers are putting the Rio Grande Valley and UTRGV on the map by competing in IREC: The International Rocket Engineering 
                Competition. This event brings together students, enthusiasts, and major aerospace industry players to watch university rocket clubs 
                from across the globe launch their high-powered rockets.
              </p>
              <p className="text-lg text-gray-600 dark:text-parchment-200 mb-6">
                As a non-profit club at UTRGV, we foster technical excellence, innovation, and teamwork, giving all members the practical skills 
                needed to succeed in the aerospace industry.
              </p>
              <Button onClick={() => onNavigate('subteams')}>
                Explore Our Subteams
              </Button>
            </div>
            <img
              src="/images/Home Images/IREC2025.jpg"
              alt="The Rocket Launchers What is IREC Image"
              className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-transparent dark:border-space-indigo-800 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-prussian-blue-600 dark:bg-prussian-blue-900 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Engineering Career?</h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-parchment-200">
            Join a community of passionate students and gain invaluable experience in aerospace
            engineering.
          </p>
          <Button
            size="lg"
            variant="whiteToPrimary"
            onClick={() => onNavigate('join')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}