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
      description: 'Compete in national competitions and showcase our innovations against top university teams.',
    },
    {
      icon: Wrench,
      title: 'Hands-On Experience',
      description: 'Gain practical engineering experience through real-world projects and challenges.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering the Future of Spaceflight
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join our team of student engineers as we design, build, and launch high-powered rockets
            to compete at the national level.
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Join Our Club?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                We are dedicated to providing students with hands-on experience in aerospace
                engineering through the design, construction, and launch of high-powered rockets.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team competes in prestigious national competitions, pushing the boundaries of
                what student engineers can achieve while fostering innovation, teamwork, and
                technical excellence.
              </p>
              <Button onClick={() => onNavigate('subteams')}>
                Explore Our Subteams
              </Button>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Rocket Launch Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Engineering Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join a community of passionate students and gain invaluable experience in aerospace
            engineering.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('join')}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
