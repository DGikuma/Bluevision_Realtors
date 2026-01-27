import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Users, 
  Target, 
  Heart, 
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Client-Centric',
      description: 'Your needs and goals are our top priority in every transaction.',
      color: 'bg-rose-50 text-rose-600'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Honest communication and transparent dealings at all times.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Striving for perfection in every service we provide.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'Working together to achieve the best outcomes for our clients.',
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to revolutionize real estate in Nairobi.' },
    { year: '2012', title: '100th Property', description: 'Successfully closed our 100th property transaction.' },
    { year: '2015', title: 'Award Winner', description: 'Received "Best Real Estate Agency" award.' },
    { year: '2020', title: 'Digital Expansion', description: 'Launched comprehensive online services during the global shift.' },
    { year: '2024', title: '1500+ Properties', description: 'Helped over 1500 families find their dream homes.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <NewNavbar />

      {/* Hero Section - Immersive & Tall */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 px-4 pt-20 text-center">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-50 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Who We Are
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            More Than Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Real Estate Agents
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            For over 15 years, we've been transforming real estate dreams into reality with 
            unparalleled expertise, integrity, and personalized service.
          </p>
        </div>
      </section>

      {/* Story Section - Overlapping Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Visuals */}
            <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
                        alt="Our team"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* Floating Glass Stat */}
                <div className="absolute -bottom-10 -right-10 z-20 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-xs hidden md:block">
                    <div className="flex items-center mb-2">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                        <span className="text-sm font-bold text-gray-500 uppercase">Success Rate</span>
                    </div>
                    <div className="text-4xl font-bold text-blue-900">98%</div>
                    <p className="text-sm text-gray-600 mt-1">Client satisfaction across 1,500+ transactions</p>
                </div>
                {/* Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Building Legacies Since 2008
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-6">
                    Founded in 2008 by real estate veterans <span className="text-blue-700 font-semibold">Sarah Johnson</span> and <span className="text-blue-700 font-semibold">Michael Chen</span>, 
                    BlueVision Realtors began with a simple mission: to make real estate transactions 
                    transparent, efficient, and stress-free for everyone involved.
                </p>
                <p>
                    What started as a small team of three has grown into one of the most 
                    respected real estate agencies in the region. We don't just sell properties; 
                    we curate lifestyles and build long-term wealth for our clients.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm font-medium text-gray-600">Years of Excellence</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm font-medium text-gray-600">Expert Agents</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section - Grid with Hover Effects */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container px-4 mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Improved Visuals */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-50"></div>
            
            <div className="space-y-12">
                {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right pl-8' : 'md:pl-16 pl-8'}`}>
                        <div className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
                            {/* Connector Line (Mobile) */}
                            <div className="absolute top-8 left-[-32px] w-8 h-0.5 bg-blue-200 md:hidden"></div>
                            
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3">
                                {milestone.year}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                {milestone.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {milestone.description}
                            </p>
                        </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center w-4 h-4">
                        <div className="w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white shadow-md z-10"></div>
                        <div className="absolute w-8 h-8 bg-blue-100 rounded-full animate-pulse z-0"></div>
                    </div>

                    {/* Empty Space for the other side */}
                    <div className="w-full md:w-1/2"></div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Matches Home Page */}
      <section className="relative py-20 bg-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Join thousands of satisfied clients who have found their dream properties with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              Contact Us Today
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border border-blue-400 text-white hover:bg-blue-800 font-bold rounded-xl transition-all flex items-center justify-center"
            >
              View Services <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;