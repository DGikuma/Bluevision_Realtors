import React, { useState } from 'react';
import Logo from '@/components/layout/Logo';
import NewNavbar from '@/components/layout/NewNavbar';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Calendar,
  Headphones,
  Music2Icon,
  Facebook,
  MessageCircle,
  Twitter,
  Star,
  ChevronRight
} from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const serviceID = 'service_ffg1tpr';
    const templateID = 'template_uyudjgi';
    const userID = 'El77e_qsXi51y6bwm';

    try {
      emailjs.init(userID);
      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString(),
        id: Math.floor(1000 + Math.random() * 9000),
        preferred_contact: formData.preferredContact,
      });

      console.log('Email sent successfully!');
      setIsSubmitted(true);
      
      // Auto-reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email'
        });
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+254 711-387-303'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info.bluevisionrealtors@gmail.com'],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Equity Bank Building', '1st Floor, Kilimani'],
      description: 'Office hours: Mon-Fri 9AM-6PM'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      details: ['Available on website', 'Quick response'],
      description: 'Chat with our support team'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We serve the entire metropolitan area including all major neighborhoods and suburbs.'
    },
    {
      question: 'How quickly can I get a property valuation?',
      answer: 'We can provide a preliminary valuation within 24 hours and a detailed report within 3 business days.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes, we have experience working with international buyers, sellers, and investors.'
    },
    {
      question: 'What are your commission rates?',
      answer: 'Our commission rates are competitive and tailored to each transaction. Contact us for specific rates.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NewNavbar />
      
      {/* IMMERSIVE HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-800/60 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-semibold mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
              Get in Touch
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Contact Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Expert Team
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We're here to answer your questions and help with all your property needs.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${index === 0 ? 'from-blue-500 to-blue-600' : index === 1 ? 'from-blue-600 to-blue-700' : index === 2 ? 'from-blue-700 to-blue-800' : 'from-blue-800 to-blue-900'} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-600 text-lg">{detail}</div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section id="contact-form" className="py-24 bg-gray-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {error && (
                  <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                )}

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting BlueVision Realtors. Our team will respond to 
                      <strong className="text-blue-600"> info@bluevisionrealtors.com</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+254 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="buying">Buying a Property</option>
                          <option value="selling">Selling a Property</option>
                          <option value="renting">Renting a Property</option>
                          <option value="investment">Investment Consultation</option>
                          <option value="management">Property Management</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span>Phone</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Please describe your inquiry in detail..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
                  <Clock className="w-5 h-5 mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-blue-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-blue-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-blue-900">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Headphones className="w-5 h-5 mr-2" />
                  Urgent Assistance
                </h3>
                <p className="mb-4">
                  Need immediate help with a property issue or urgent inquiry?
                </p>
                <a
                  href="tel:+254711387303"
                  className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +254 711-387-303
                </a>
              </div>

              {/* Schedule Consultation */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free 30-minute consultation with one of our real estate experts.
                </p>
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Schedule Now
                </a>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 2).map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2 text-blue-800">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                  <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                    View all FAQs
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stop by our main office for an in-person consultation or to meet our team.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-96 relative flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">BlueVision Realtors Head Office</h3>
                <p className="text-gray-600 text-lg">Equity Bank Building</p>
                <p className="text-gray-600 text-lg">1st Floor, Kilimani</p>
                <a 
                  href="https://maps.app.goo.gl/8vZ2ZZhpJWDkVGw96"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
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
            Ready to Start Your Property Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Contact us today and let our experts guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="px-10 py-4 bg-white text-blue-900 hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-all duration-300 text-lg"
            >
              Send Message
            </a>
            <a
              href="tel:+254711387303"
              className="px-10 py-4 bg-blue-700/50 border border-blue-400/30 hover:bg-blue-700 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 text-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +254 711-387-303
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Logo size="md" variant="dark" />
                <div>
                  
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for premium real estate services in Nairobi.
              </p>
            </div>
            {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/bluevisionrealtors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Follow us on Facebook"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://twitter.com/bluevisionrealtors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Follow us on Twitter/X"
                  title="Follow us on Twitter/X"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://wa.me/254711387303" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Chat with us on WhatsApp"
                  title="Chat with us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://tiktok.com/@bluevisionrealtors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Follow us on TikTok"
                  title="Follow us on TikTok"
                >
                  <Music2Icon className="w-5 h-5 text-white" />
                </a>
              </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Listings', 'Agents', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-4">
                {['Property Buying', 'Property Selling', 'Property Management', 'Investment Consultation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

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
                  <span className="text-gray-400">info.bluevisionrealtors@gmail.com</span>
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

export default ContactPage;