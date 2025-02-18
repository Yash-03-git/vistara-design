import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Clock, MapPin, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Linkedin, Palette, BookTemplate as Template, Send, MessageSquare, Star } from 'lucide-react';
import { Carousel } from './components/Carousel';
import { ProductSlider } from './components/ProductSlider';
import { ContactForm } from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bannerImages = [
    'https://images.unsplash.com/photo-1511795409834-432f7b1728d2?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&h=900&fit=crop'
  ];

  const products = [
    {
      id: 1,
      title: 'Wedding Classic',
      image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=800&h=600&fit=crop',
      price: '$49'
    },
    {
      id: 2,
      title: 'Birthday Special',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
      price: '$39'
    },
    {
      id: 3,
      title: 'Corporate Event',
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop',
      price: '$59'
    },
    {
      id: 4,
      title: 'Anniversary',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop',
      price: '$45'
    },
    {
      id: 5,
      title: 'Baby Shower',
      image: 'https://images.unsplash.com/photo-1527735095040-147bffb0723a?w=800&h=600&fit=crop',
      price: '$42'
    },
    {
      id: 6,
      title: 'Engagement',
      image: 'https://images.unsplash.com/photo-1511795409834-432f7b1728d2?w=800&h=600&fit=crop',
      price: '$47'
    }
  ];

  const services = [
    {
      icon: <Palette className="h-12 w-12 text-indigo-600" />,
      title: 'Custom Design',
      description: 'Personalized invitations tailored to your unique style and preferences.'
    },
    {
      icon: <Template className="h-12 w-12 text-indigo-600" />,
      title: 'Creative Templates',
      description: 'Wide selection of professionally designed templates for every occasion.'
    },
    {
      icon: <Send className="h-12 w-12 text-indigo-600" />,
      title: 'Digital Distribution',
      description: 'Seamless sharing across all digital platforms and social media.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-indigo-600" />,
      title: 'RSVP Management',
      description: 'Effortless guest list management and response tracking.'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The digital invitation for our wedding was absolutely perfect! The design process was smooth, and the final result exceeded our expectations.'
    },
    {
      name: 'Michael Chen',
      role: 'Event Planner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      rating: 5,
      text: 'As an event planner, I regularly use Vistara for my clients. Their designs are consistently elegant and professional.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Corporate Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5,
      text: 'The corporate event invitations were stunning. Our clients were impressed by the professional and modern design.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-2xl font-playfair font-bold text-gray-800">Vistara</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
              <a href="#products" className="text-gray-600 hover:text-indigo-600">Products</a>
              <a href="#portfolio" className="text-gray-600 hover:text-indigo-600">Portfolio</a>
              <a href="#reviews" className="text-gray-600 hover:text-indigo-600">Reviews</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-20">
          <div className="flex flex-col items-center space-y-8 py-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#products" className="text-gray-600 hover:text-indigo-600">Products</a>
            <a href="#portfolio" className="text-gray-600 hover:text-indigo-600">Portfolio</a>
            <a href="#reviews" className="text-gray-600 hover:text-indigo-600">Reviews</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}

      {/* Banner */}
      <section id="home" className="pt-20">
        <div className="relative">
          <Carousel images={bannerImages} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
                Elegant Digital Invitations
              </h1>
              <p className="text-xl text-white">Create Memorable Moments with Style</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Products</h2>
          <ProductSlider products={products} />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1511795409834-432f7b1728d2?w=400&h=300&fit=crop" alt="Wedding" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Wedding Invitations</h3>
                <p className="text-gray-600">Elegant designs for your special day</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=300&fit=crop" alt="Corporate" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Corporate Events</h3>
                <p className="text-gray-600">Professional and sophisticated</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop" alt="Festival" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Festival Posts</h3>
                <p className="text-gray-600">Vibrant and festive designs</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400&h=300&fit=crop" alt="Marketing" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold mb-2">Digital Marketing</h3>
                <p className="text-gray-600">Engaging social media content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and About */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-8">About Us</h2>
              <p className="text-gray-600 mb-8">
                We are passionate about creating beautiful digital invitations that make your special moments even more memorable. With years of experience and a keen eye for design, we bring your vision to life.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>123 Creative Street, Design City, DC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>hello@vistara.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;