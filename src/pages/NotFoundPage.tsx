import React from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import { Home, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen">
      <NewNavbar />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved to a different location.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search our website..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link
              to="/"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Home Page</h3>
              <p className="text-gray-600 text-sm">Return to our main page</p>
            </Link>
            
            <Link
              to="/listings"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Property Listings</h3>
              <p className="text-gray-600 text-sm">Browse available properties</p>
            </Link>
            
            <Link
              to="/contact"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch with our team</p>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is here to help you find what you're looking for.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +254 711-387-303
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> info.bluevisionrealtors@gmail.com
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Hours:</span> Mon-Fri 9AM-6PM
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;