import { Users, Calendar, Clock, GraduationCap } from 'lucide-react';
import Button from '../components/Shared/Button';
import Card from '../components/Shared/Card';

export default function JoinUs() {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Learn by Doing',
      description: 'Gain practical engineering experience through real-world projects and challenges.',
    },
    {
      icon: Users,
      title: 'Build Your Network',
      description: 'Connect with like-minded students, alumni, and industry professionals.',
    },
    {
      icon: Calendar,
      title: 'Flexible Commitment',
      description: 'Choose your level of involvement based on your schedule and interests.',
    },
    {
      icon: Clock,
      title: 'Year-Round Activities',
      description: 'Participate in design sessions, build events, and launch competitions throughout the year.',
    },
  ];

  const requirements = [
    'Currently enrolled as a student at the university',
    'Passion for aerospace, engineering, or related fields',
    'Willingness to learn and collaborate with teammates',
    'No prior experience required - we welcome all skill levels!',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Become part of a passionate community of student engineers working together to reach new
            heights in aerospace innovation.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Requirements</h2>
          <Card>
            <div className="p-8">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-lg text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Attend a Meeting</h3>
                <p className="text-gray-600">
                  Join us for one of our weekly team meetings to learn more about ongoing projects
                  and meet the team.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Choose a Subteam</h3>
                <p className="text-gray-600">
                  Explore our subteams and find the one that matches your interests and skills best.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Start Contributing</h3>
                <p className="text-gray-600">
                  Begin working on projects, attend training sessions, and contribute to our mission.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We meet every Thursday at 6 PM in the Engineering Building, Room 201. Come check us out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Contact Us
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-opacity-20"
            >
              View Meeting Schedule
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
