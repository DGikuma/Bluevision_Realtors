import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Home, 
  TrendingUp, 
  Shield, 
  BarChart, 
  CheckCircle,
  DollarSign,
  FileText,
  Users,
  Clock,
  ArrowRight,
  Search,
  Target,
  Award,
  Phone,
  Calendar,
  ChevronRight,
  Star
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="w-7 h-7" />,
      title: 'Property Buying',
      description: 'Comprehensive support from search to closing with expert guidance',
      features: ['Market Analysis', 'Property Viewing', 'Negotiation', 'Closing Assistance'],
      price: 'From KES 500,000',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: 'Property Selling',
      description: 'Maximize your property value with expert marketing strategies',
      features: ['Valuation Services', 'Marketing Strategy', 'Showings', 'Closing Management'],
      price: 'Competitive Commission',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Property Management',
      description: 'Professional management for rental properties and investments',
      features: ['Tenant Screening', 'Rent Collection', 'Maintenance', 'Financial Reports'],
      price: 'Monthly Management',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: <BarChart className="w-7 h-7" />,
      title: 'Investment Consultation',
      description: 'Strategic advice for real estate investors in Nairobi',
      features: ['Market Research', 'ROI Analysis', 'Portfolio Strategy', 'Risk Assessment'],
      price: 'Consultation Packages',
      color: 'from-blue-800 to-blue-900'
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Mortgage Assistance',
      description: 'Connect with the best lenders and competitive rates',
      features: ['Pre-approval', 'Rate Comparison', 'Documentation', 'Closing Support'],
      price: 'Free Service',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Legal Support',
      description: 'Professional legal guidance for property transactions',
      features: ['Contract Review', 'Title Services', 'Closing Docs', 'Legal Consultation'],
      price: 'From KES 150,000',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free consultation to understand your needs and goals',
      icon: <Search className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Customized plan tailored to your specific situation',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Expert execution of the agreed-upon strategy',
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Closing & Follow-up',
      description: 'Smooth closing process and post-transaction support',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Team',
      description: 'A personal agent and support team for every client'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Efficiency',
      description: 'Streamlined processes that save you time and effort'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost-Effective',
      description: 'Competitive pricing with transparent fee structures'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Full Protection',
      description: 'Comprehensive support and legal safeguards throughout'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Modern Glass Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-b border-blue-100"></div>
        <div className="relative">
          <NewNavbar />
        </div>
      </div>

      {/* IMMERSIVE HERO SECTION */}
      <section className="relative min-h-[85vh] pt-20 flex items-center justify-center overflow-hidden">
        {/* Premium Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Modern Real Estate Services"
            className="w-full h-full object-cover"
          />
          {/* Clean Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-800/90 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8">
              <Award className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
              Premium Real Estate Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Premium Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive real estate solutions designed to meet your unique needs, 
              whether you're buying, selling, or investing in Nairobi's property market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-base"
              >
                Explore Services <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-base"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Target className="w-3 h-3 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Expert services tailored to guide you through every aspect of your property journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Gradient Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
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
                      <div className="p-1 bg-green-100 rounded-lg mr-4">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-lg font-bold text-blue-600">{service.price}</div>
                  <a 
                    href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/link"
                  >
                    Learn More 
                    <ChevronRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              A structured approach that ensures success and satisfaction at every step
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="text-4xl font-bold text-blue-900 mb-4 opacity-20">{step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {/* Connector Arrows */}
                  {index < processSteps.length - 1 && (
                    <>
                      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-blue-300" />
                      </div>
                      <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-blue-300 rotate-90" />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Star className="w-3 h-3 mr-2 text-yellow-500 fill-yellow-500" />
                Why Choose Us
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Experience the
                <span className="block text-blue-600">BlueVision Advantage</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our comprehensive approach and attention to detail set us apart from other 
                real estate agencies in Nairobi.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Consultation Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-10 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-4">Get a Free Consultation</h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Schedule a 30-minute consultation with one of our experts to discuss your needs 
                    and learn how we can help you achieve your real estate goals.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span>No obligation or commitment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span>Personalized recommendations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0" />
                      <span>Customized action plan</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="/contact"
                    className="block w-full py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="tel:+254711387303"
                    className="block w-full py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-center rounded-xl transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +254 711-387-303
                  </a>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Nairobi Property Owners
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              See what our clients say about our premium real estate services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'James Mwangi',
                role: 'Property Investor',
                content: 'BlueVision helped me build a profitable property portfolio. Their investment consultation service is exceptional.',
                rating: 5
              },
              {
                name: 'Fatima Ali',
                role: 'Home Seller',
                content: 'Sold my property 15% above market value in just 3 weeks. Their marketing strategy really works!',
                rating: 5
              },
              {
                name: 'David Omondi',
                role: 'First-time Buyer',
                content: 'The property buying service made my first home purchase smooth and stress-free. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors text-lg"
            >
              Read More Success Stories
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            className="w-full h-full object-cover"
            alt="Nairobi skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 mix-blend-multiply"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Property Goals?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Contact us today to discuss your real estate needs and discover how our premium services can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Contact Us Now
            </a>
            <a
              href="tel:+254711387303"
              className="px-10 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
                Nairobi's premier real estate agency offering premium services for buying, selling, and managing properties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-4">
                {services.slice(0, 4).map((service) => (
                  <li key={service.title}>
                    <a 
                      href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Listings', 'Agents', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400">+254 711-387-303</div>
                    <div className="text-sm text-gray-500">Mon-Sat, 9AM-6PM</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Book Consultation
                    </a>
                    <div className="text-sm text-gray-500">Free 30-min session</div>
                  </div>
                </li>
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

export default ServicesPage;