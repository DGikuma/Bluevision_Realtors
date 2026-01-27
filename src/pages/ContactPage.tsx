import React, { useState } from 'react';
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
  Headphones
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
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        preferred_contact: formData.preferredContact,
        to_email: 'info.bluevisionrealtors@gmail.com',
        reply_to: formData.email,
      });

      console.log('Email sent successfully!');
      setIsSubmitted(true);
      
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
      setError('Failed to send message. Please try again or contact us directly at info@bluevisionrealtors.com');
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
      icon: <Phone className="w-7 h-7" />,
      title: 'Call Us',
      details: ['+254 711-387-303'],
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: 'Email Us',
      details: ['info.bluevisionrealtors@gmail.com'],
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: 'Visit Us',
      details: ['Equity Bank Building', '1st Floor, Kilimani'],
      description: 'Office hours: Mon-Fri 9AM-6PM'
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <NewNavbar />

      {/* Hero Section - Clean & Impactful */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-800/40 to-blue-900/50"></div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Connect with Nairobi's premier real estate experts today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </a>
              <a 
                href="tel:+254711387303" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">
              How to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="text-blue-700 text-lg">{detail}</div>
                  ))}
                </div>
                {method.description && (
                  <p className="text-sm text-blue-600">{method.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold mb-4 text-blue-900">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-blue-600">
                    We'll get back to you within 24 hours
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
                    <h3 className="text-2xl font-bold mb-2 text-blue-900">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting BlueVision Realtors. Our team will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
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
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-6">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleChange}
                            className="w-5 h-5"
                          />
                          <span className="text-lg">Email</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleChange}
                            className="w-5 h-5"
                          />
                          <span className="text-lg">Phone</span>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        placeholder="Please describe your inquiry in detail..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center text-blue-900">
                  <Clock className="w-5 h-5 mr-2" />
                  Office Hours
                </h3>
                <div className="space-y-4">
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
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Headphones className="w-5 h-5 mr-2" />
                  Urgent Assistance
                </h3>
                <p className="mb-4 text-blue-100">
                  Need immediate help with a property issue?
                </p>
                <a
                  href="tel:+254711387303"
                  className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +254 711-387-303
                </a>
              </div>

              {/* Schedule Consultation */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center text-blue-900">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free 30-minute consultation with our experts.
                </p>
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold"
                >
                  Schedule Now
                </a>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 2).map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-2 text-blue-800">{faq.question}</h4>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                  <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                    View all FAQs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Visit Our Office</h2>
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
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to find your dream property?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact-form" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Contact Us Today
            </a>
            <a 
              href="tel:+254711387303" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg"
            >
              Call: +254 711-387-303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;