import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NewNavbar from '@/components/layout/NewNavbar';
import {
    MapPin,
    Square,
    Share2,
    Heart,
    Calendar,
    Phone,
    Mail,
    CheckCircle,
    ArrowLeft,
    Image as ImageIcon,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const properties = [
    {
        id: 1,
        title: 'Diaspora Village Malindi',
        price: 'Kes 2.5M',
        location: 'Malindi, Kenya',
        type: 'Gated Community',
        landSize: '5 acres',
        description: 'Diaspora Village Malindi is a premier gated community offering a perfect blend of residential and commercial spaces. Designed specifically for diaspora investors, this development provides secure, modern living in one of Kenya\'s most beautiful coastal regions.',
        longDescription: `Diaspora Village Malindi is an exclusive 5-acre gated community strategically located in Malindi. This premium development offers:

• Fully Gated Community with 24/7 Security
• Residential & Commercial Zones
• Modern Infrastructure & Utilities
• Landscaped Gardens & Recreation Areas
• Proximity to Malindi Town (15 minutes drive)
• Title Deed Available
• Flexible Payment Plans

Perfect for investors seeking secure, income-generating properties in a growing coastal market.`,
        features: [
            '24/7 Security & CCTV',
            'Gated Community Access',
            'Residential Plots',
            'Commercial Spaces',
            'Water & Electricity',
            'Road Access',
            'Landscaping',
            'Title Deed Available'
        ],
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
        ],
        featured: true,
        status: 'For Sale',
        paymentTerms: 'Deposit of 30%, balance over 12 months',
        coordinates: '-3.2175° S, 40.1191° E',
        yearDeveloped: 2023,
        contactPhone: '+254 712 345 678',
        contactEmail: 'info.bluevisionrealtors@gmail.com'
    },
    {
        id: 2,
        title: 'Fahari Gardens Malindi - 50 × 100 ft Plot',
        price: 'Kes 200,000',
        location: 'Malindi, Kenya',
        type: 'Serviced Plots',
        landSize: '50 × 100 ft',
        description: 'Premium serviced plots in Fahari Gardens, only 45 minutes from Malindi town. These plots come with all necessary infrastructure for immediate development.',
        longDescription: `Fahari Gardens Malindi offers prime serviced plots measuring 50 × 100 feet. Located just 45 minutes from Malindi town, this development provides:

• Fully Serviced Plots
• Water & Electricity Connected
• Road Network Access
• Surveyed & Beacons
• Ready for Construction
• Scenic Views
• Affordable Pricing
• Flexible Payment Plans

Ideal for residential development or long-term investment.`,
        features: [
            'Water Connection',
            'Electricity Connected',
            'Road Access',
            'Surveyed Plots',
            'Title Processing',
            'Security',
            'Scenic Views',
            'Development Ready'
        ],
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
            'https://images.unsplash.com/photo-1448630360428-65456885c650',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
        ],
        featured: true,
        status: 'For Sale',
        paymentTerms: 'Deposit of 50%, balance in installments',
        coordinates: '-3.1989° S, 40.0955° E',
        yearDeveloped: 2022,
        contactPhone: '+254 711-387-303',
        contactEmail: 'info.bluevisionrealtors@gmail.come'
    },
    {
        id: 3,
        title: 'Fahari Gardens Malindi - 1 Acre Plot',
        price: 'Kes 600,000',
        location: 'Malindi, Kenya',
        type: 'Serviced Plots',
        landSize: '1 acre',
        description: 'Larger serviced plots in Fahari Gardens, perfect for expansive residential or commercial projects.',
        longDescription: `This 1-acre plot in Fahari Gardens Malindi offers ample space for your dream project:

• 1 Acre Serviced Plot
• Water & Electricity Available
• Strategic Location
• Clear Title Deed
• Development Plans Approved
• Investment Potential
• Flexible Payment Terms
• Close to Infrastructure

Perfect for building a family home, rental properties, or commercial venture.`,
        features: [
            '1 Acre Plot',
            'Utility Connections',
            'Title Deed Ready',
            'Approved Plans',
            'Prime Location',
            'Security',
            'Easy Access',
            'Investment Grade'
        ],
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
            'https://images.unsplash.com/photo-1448630360428-65456885c650',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
        ],
        featured: false,
        status: 'For Sale',
        paymentTerms: '50% deposit, balance over 6 months',
        coordinates: '-3.1989° S, 40.0955° E',
        yearDeveloped: 2022,
        contactPhone: '+254 712 345 679',
        contactEmail: 'info.bluevisionrealtors@gmail.com'
    },
    {
        id: 4,
        title: 'Fahari Gardens Malindi - 7 Acre Parcel',
        price: 'Kes 7M',
        location: 'Malindi, Kenya',
        type: 'Serviced Plots',
        landSize: '7 acres',
        description: 'Large parcel of land in Fahari Gardens, ideal for developers or investors looking for substantial land for major projects.',
        longDescription: `This 7-acre parcel in Fahari Gardens Malindi represents a major investment opportunity:

• 7 Acre Serviced Land
• Ready for Subdivision
• Water & Electricity Mains
• Development Potential
• Commercial & Residential Zoning
• Strategic Investment
• Title Deed Available
• Prime Coastal Location

Excellent for developers, institutions, or large-scale investors.`,
        features: [
            '7 Acre Parcel',
            'Subdivision Potential',
            'Commercial Zoning',
            'Utility Infrastructure',
            'Title Deed',
            'Investment Grade',
            'Development Ready',
            'Coastal Location'
        ],
        image: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
        images: [
            'https://images.unsplash.com/photo-1448630360428-65456885c650',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
        ],
        featured: false,
        status: 'For Sale',
        paymentTerms: 'Negotiable payment plan',
        coordinates: '-3.1989° S, 40.0955° E',
        yearDeveloped: 2022,
        contactPhone: '+254 711-387-303',
        contactEmail: 'info.bluevisionrealtors@gmail.com'
    },
    {
        id: 5,
        title: 'Peakview Gardens Nanyuki',
        price: 'Kes 450,000',
        location: 'Nanyuki, Kenya',
        type: 'Serviced Plots',
        landSize: '50 × 100 ft',
        description: 'Fully serviced plots with electricity, located 9km from Batuk. Flexible payment over 24 months available.',
        longDescription: `Peakview Gardens Nanyuki offers premium serviced plots in one of Kenya's most sought-after highland regions:

• 50 × 100 ft Serviced Plots
• Electricity Connection Available
• Water Supply Available
• Only 9km from Batuk
• Spectacular Mountain Views
• Flexible 24-Month Payment Plan
• Clear Title Deeds
• Development Plans Approved

Perfect for holiday homes, retirement homes, or investment properties.`,
        features: [
            'Electricity Connected',
            'Water Available',
            'Mountain Views',
            '24-Month Payment Plan',
            'Title Deed Ready',
            'Road Access',
            'Security',
            'Cool Climate'
        ],
        image: 'https://images.unsplash.com/photo-1430285561322-7808604715df',
        images: [
            'https://images.unsplash.com/photo-1430285561322-7808604715df',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
        ],
        featured: true,
        status: 'For Sale',
        paymentTerms: 'Payable over 24 months',
        coordinates: '0.0201° N, 37.0739° E',
        yearDeveloped: 2023,
        contactPhone: '+254 711-387-303',
        contactEmail: 'info.bluevisionrealtors@gmail.com'
    }
];

const PropertyDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    const property = properties.find(p => p.id === parseInt(id || ''));

    if (!property) {
        return (
            <div className="min-h-screen">
                <NewNavbar />
                <div className="container py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
                    <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/listings')}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Listings
                    </button>
                </div>
            </div>
        );
    }

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: property.title,
                    text: property.description,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="min-h-screen">
            <NewNavbar />

            {/* Breadcrumb */}
            <div className="container py-6">
                <div className="flex items-center text-sm text-gray-600">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/listings" className="hover:text-blue-600">Properties</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-medium">{property.title}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container pb-20">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Images & Details */}
                    <div className="lg:w-2/3">
                        {/* Main Image */}
                        <div className="mb-8">
                            <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                                <img
                                    src={property.images[selectedImageIndex]}
                                    alt={`${property.title} - View ${selectedImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                    aria-label="Previous image"
                                    title="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                                    aria-label="Next image"
                                    title="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {property.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`w-3 h-3 rounded-full ${index === selectedImageIndex ? 'bg-white' : 'bg-white/50'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                            title={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Thumbnail Images */}
                            <div className="grid grid-cols-4 gap-2">
                                {property.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`h-24 rounded-lg overflow-hidden ${index === selectedImageIndex ? 'ring-2 ring-blue-500' : ''
                                            }`}
                                        aria-label={`View image ${index + 1}`}
                                        title={`View image ${index + 1}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Property Information */}
                        <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h1 className="text-3xl font-bold">{property.title}</h1>
                                        {property.featured && (
                                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        <span>{property.location}</span>
                                        <span className="mx-3">•</span>
                                        <Square className="w-5 h-5 mr-2" />
                                        <span>{property.landSize}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{property.price}</div>
                                    <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold">
                                        {property.status}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Property Description</h2>
                                <div className="prose max-w-none">
                                    {property.longDescription.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4 text-gray-700">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-6">Property Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {property.features.map((feature, index) => (
                                        <div key={index} className="flex items-center">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location Details */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Location Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold mb-2">Coordinates</h3>
                                        <p className="text-gray-700">{property.coordinates}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Development Year</h3>
                                        <p className="text-gray-700">{property.yearDeveloped}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="border-t pt-6">
                                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-blue-600 mr-2" />
                                        <a
                                            href={`tel:${property.contactPhone}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {property.contactPhone}
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-blue-600 mr-2" />
                                        <a
                                            href={`mailto:${property.contactEmail}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {property.contactEmail}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact & Actions */}
                    <div className="lg:w-1/3">
                        {/* Contact Card */}
                        <div className="bg-white rounded-xl p-8 shadow-lg mb-8 sticky top-8">
                            <h2 className="text-2xl font-bold mb-6">Contact Agent</h2>

                            {/* Action Buttons */}
                            <div className="space-y-4 mb-8">
                                <a
                                    href={`tel:${property.contactPhone}`}
                                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
                                    aria-label="Call agent"
                                    title="Call agent"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now
                                </a>
                                <a
                                    href={`mailto:${property.contactEmail}`}
                                    className="block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
                                    aria-label="Send email to agent"
                                    title="Send email to agent"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Send Email
                                </a>
                                <button onClick={() => navigate('/contact', {
                                    state: {
                                        propertyId: property.id,
                                        propertyTitle: property.title,
                                        purpose: 'schedule_visit'
                                    }
                                })} className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Schedule Visit
                                </button>
                            </div>

                            {/* Payment Terms */}
                            <div className="mb-8">
                                <h3 className="font-bold mb-3">Payment Terms</h3>
                                <p className="text-gray-700">{property.paymentTerms}</p>
                            </div>

                            {/* Share & Save */}
                            <div className="border-t pt-6">
                                <h3 className="font-bold mb-4">Share This Property</h3>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={handleShare}
                                        className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-lg flex items-center justify-center"
                                        aria-label="Share property"
                                        title="Share property"
                                    >
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        className={`flex-1 border py-3 rounded-lg flex items-center justify-center ${isFavorite
                                            ? 'border-red-300 bg-red-50 text-red-600'
                                            : 'border-gray-300 hover:bg-gray-50'
                                            }`}
                                        aria-label={isFavorite ? "Remove from favorites" : "Save as favorite"}
                                        title={isFavorite ? "Remove from favorites" : "Save as favorite"}
                                    >
                                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-600' : ''}`} />
                                    </button>
                                    <button
                                        className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-lg flex items-center justify-center"
                                        aria-label="View all images"
                                        title="View all images"
                                    >
                                        <ImageIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Property Summary */}
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Quick Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b">
                                    <span className="text-gray-600">Property Type</span>
                                    <span className="font-semibold">{property.type}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b">
                                    <span className="text-gray-600">Land Size</span>
                                    <span className="font-semibold">{property.landSize}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b">
                                    <span className="text-gray-600">Location</span>
                                    <span className="font-semibold">{property.location}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b">
                                    <span className="text-gray-600">Status</span>
                                    <span className="font-semibold text-green-600">
                                        {property.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-gray-600">Price</span>
                                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Properties */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {properties
                            .filter(p => p.id !== property.id)
                            .slice(0, 3)
                            .map(related => (
                                <div key={related.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-48">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {related.featured && (
                                            <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold mb-2">{related.title}</h3>
                                        <div className="flex items-center text-gray-600 mb-3">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            <span className="text-sm">{related.location}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-blue-600 font-bold">{related.price}</span>
                                            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                                                {related.landSize}
                                            </span>
                                        </div>
                                        <Link
                                            to={`/listings/${related.id}`}
                                            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-700 text-white">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-6">Interested in This Property?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contact our team today for a site visit, detailed information, and investment advice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${property.contactPhone}`}
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
                            aria-label="Call agent"
                            title="Call agent"
                        >
                            <Phone className="inline-block w-5 h-5 mr-2" />
                            Call Now
                        </a>
                        <a
                            href={`mailto:${property.contactEmail}`}
                            className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center"
                            aria-label="Send email inquiry"
                            title="Send email inquiry"
                        >
                            <Mail className="inline-block w-5 h-5 mr-2" />
                            Email Inquiry
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PropertyDetailsPage;