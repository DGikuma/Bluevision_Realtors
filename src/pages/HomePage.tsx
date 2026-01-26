import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';
import { 
  Home, 
  Shield, 
  TrendingUp, 
  Users, 
  Star, 
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Property Buying',
      description: 'Find your dream home with our expert guidance and extensive property database.',
      features: ['Market Analysis', 'Property Viewing', 'Negotiation Support']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Property Selling',
      description: 'Maximize your property value with our strategic marketing and sales approach.',
      features: ['Valuation Services', 'Marketing Strategy', 'Closing Assistance']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Property Management',
      description: 'Professional management services for rental properties and investment portfolios.',
      features: ['Tenant Screening', 'Maintenance', 'Financial Reporting']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Buyer',
      content: 'Elite Reality made the home buying process seamless. Their team was professional, knowledgeable, and always available.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Property Investor',
      content: 'As an investor, I appreciate their market insights and professional approach. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Seller',
      content: 'Sold my property above asking price in just 2 weeks. Their marketing strategy is exceptional.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <NewNavbar />
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive real estate solutions tailored to your unique needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Elite Reality</h2>
              <p className="text-gray-600 mb-8">
                With over 15 years of experience in the real estate industry, we've built a reputation 
                for excellence, integrity, and results-driven service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Award-Winning Service</h3>
                    <p className="text-gray-600">Multiple industry awards for customer satisfaction and service excellence.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our agents have an average of 10+ years of real estate experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Full Transparency</h3>
                    <p className="text-gray-600">Clear communication and honest guidance throughout the entire process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-700">Client Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,500+</div>
                  <div className="text-gray-700">Properties Sold</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Customer Support</div>
                </div>
              </div>
              
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Free Consultation</h3>
                <p className="mb-4">Book a free 30-minute consultation with our real estate experts.</p>
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl">ER</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Elite Reality</h2>
                  <p className="text-sm text-gray-400">Premium Real Estate Solutions</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for buying, selling, and managing premium real estate properties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/listings" className="text-gray-400 hover:text-white transition-colors">Property Listings</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/buying" className="text-gray-400 hover:text-white transition-colors">Property Buying</a></li>
                <li><a href="/services/selling" className="text-gray-400 hover:text-white transition-colors">Property Selling</a></li>
                <li><a href="/services/management" className="text-gray-400 hover:text-white transition-colors">Property Management</a></li>
                <li><a href="/services/investment" className="text-gray-400 hover:text-white transition-colors">Investment Consultation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span></span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span></span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Elite Reality. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;