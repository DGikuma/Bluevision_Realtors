import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  
  Users, 
  Target, 
  Heart, 
  
  Shield
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'Your needs and goals are our top priority in every transaction.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Honest communication and transparent dealings at all times.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Striving for perfection in every service we provide.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working together to achieve the best outcomes for our clients.'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to revolutionize real estate' },
    { year: '2012', title: '100th Property', description: 'Successfully closed our 100th property transaction' },
    { year: '2015', title: 'Award Winner', description: 'Received "Best Real Estate Agency" award' },
    { year: '2020', title: 'Digital Expansion', description: 'Launched comprehensive online services' },
    { year: '2024', title: '1500+ Properties', description: 'Helped over 1500 families find their dream homes' },
  ];

  return (
    <div className="min-h-screen">
      <NewNavbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl :text-6xl font-bold mb-9">About </h1>
            <p className="text-xl text-blue-100 mb-8">
              For over 15 years, we've been transforming real estate dreams into reality with 
              unparalleled expertise, integrity, and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2008 by real estate veterans Sarah Johnson and Michael Chen, 
                Elite Reality began with a simple mission: to make real estate transactions 
                transparent, efficient, and stress-free for everyone involved.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small team of three has grown into one of the most 
                respected real estate agencies in the region, serving thousands of clients 
                with dedication and excellence.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Expert Agents</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their dream homes with Elite Reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us Today
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;