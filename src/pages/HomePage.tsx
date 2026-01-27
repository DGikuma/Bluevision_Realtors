import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Home, Shield, TrendingUp, Users, Star, Award, CheckCircle,
  ArrowRight, MapPin, Mail, Phone, Target, Clock, Building2,
  Heart, ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Property Buying',
      description: 'Find your dream home with expert guidance and curated property selection tailored to your lifestyle.',
      features: ['Market Analysis', 'Property Viewing', 'Negotiation Support'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Property Selling',
      description: 'Maximize your property value with strategic marketing and sales expertise to find the right buyer.',
      features: ['Valuation Services', 'Marketing Strategy', 'Closing Assistance'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Property Management',
      description: 'Professional management for rental properties and investment portfolios ensuring peace of mind.',
      features: ['Tenant Screening', 'Maintenance', 'Financial Reporting'],
      color: 'from-blue-700 to-blue-800'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Buyer',
      content: 'BlueVision Realtors made our home buying journey smooth and stress-free. Highly professional team!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      content: 'Exceptional market insights and professional service. They helped me build my property portfolio.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Seller',
      content: 'Sold my property above asking price in record time. Their marketing strategy is top-notch.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction', icon: <Heart className="w-5 h-5" /> },
    { value: '15+', label: 'Years Experience', icon: <Clock className="w-5 h-5" /> },
    { value: '1,500+', label: 'Properties Sold', icon: <Building2 className="w-5 h-5" /> },
    { value: '50+', label: 'Expert Agents', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NewNavbar />
      
      {/* IMMERSIVE HERO SECTION */}
      {/* Increased height to 85vh to stop the "zoomed out" feel */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Cleaned up filters for crisper look */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-800/60 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-semibold mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
              #1 Real Estate Agency in Nairobi
            </div>
            
            {/* Larger Typography for impact */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Find Your Dream Property in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Nairobi
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Premium real estate solutions with expert guidance for buying, selling, 
              and managing properties across Kenya's capital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/listings"
                className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-base"
              >
                Browse Properties <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-base"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STATS SECTION - Overlaps Hero for Depth */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center group">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Target className="w-3 h-3 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Real Estate Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Comprehensive solutions tailored to your unique real estate goals, delivered with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/link"
                >
                  Learn More 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Split Layout */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-3 h-3 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Trusted Partner in Nairobi Real Estate
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                With over 15 years of experience, we've built our reputation on excellence, 
                integrity, and delivering exceptional results for our clients.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Award-Winning Service',
                    description: 'Recognized for excellence in customer satisfaction and professional service.'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Expert Team',
                    description: 'Our agents average 10+ years of Nairobi real estate experience.'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Full Transparency',
                    description: 'Honest communication and clear guidance throughout every transaction.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl text-blue-600 mr-5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="w-full lg:w-1/2 relative">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-10"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                   alt="Modern building"
                   className="w-full h-full object-cover min-h-[500px]"
                 />
                 
                 {/* Floating Card inside the image */}
                 <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg">
                   <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">Free Consultation</h4>
                        <p className="text-sm text-gray-500">Get expert advice today</p>
                      </div>
                      <div className="p-3 bg-green-100 text-green-600 rounded-full">
                        <Phone className="w-5 h-5" />
                      </div>
                   </div>
                   <a
                    href="/contact"
                    className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center rounded-lg transition-colors"
                   >
                    Book Now
                   </a>
                 </div>
               </div>
               
               {/* Decorative dots behind */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center pt-6 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full width impact */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            className="w-full h-full object-cover"
            alt="City skyline"
          />
          <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Contact us today and let our experts guide you through every step of your property transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all duration-300 text-lg"
            >
              Get in Touch
            </a>
            <a
              href="tel:+254711387303"
              className="px-10 py-4 bg-blue-700/50 border border-blue-400/30 hover:bg-blue-700 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Slightly cleaner layout */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                  <span className="font-bold text-xl">BV</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">BlueVision</h2>
                  <p className="text-xs text-blue-400 uppercase tracking-wider">Realtors</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your trusted partner for premium real estate services in Nairobi. 
                Expert guidance for buying, selling, and property management.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors cursor-pointer"></div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Listings', 'Agents', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-4">
                {['Property Buying', 'Property Selling', 'Property Management', 'Investment Consultation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">Equity Bank Building, 1st Floor,<br/>Kilimani, Nairobi</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400">+254 711-387-303</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-400"> info.bluevisionrealtors@gmail.com</span>
                </li>m
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} BlueVision Realtors Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;