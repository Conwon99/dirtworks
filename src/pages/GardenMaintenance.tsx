import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const GardenMaintenance = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('garden_maintenance_page', ['Garden Maintenance']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('garden_maintenance_page');
    window.location.href = "tel:+447403725998";
  };

  const handleEmailClick = () => {
    trackEmailClick('garden_maintenance_page');
  };

  return (
    <>
      <Helmet>
        <title>Garden Maintenance Glasgow & Ayrshire | Professional Lawn Care & Hedge Trimming</title>
        <meta name="description" content="Expert garden maintenance services in Glasgow and Ayrshire. Professional lawn care, hedge trimming, planting, and seasonal maintenance. Free quotes available." />
        <meta name="keywords" content="garden maintenance Glasgow, garden maintenance Ayrshire, lawn care Glasgow, lawn care Ayrshire, hedge trimming Glasgow, hedge trimming Ayrshire, garden services Glasgow, garden services Ayrshire" />
        <link rel="canonical" href="https://dirtworkslandscaping.co.uk/garden-maintenance" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Garden Maintenance Glasgow & Ayrshire | Professional Lawn Care & Hedge Trimming" />
        <meta property="og:description" content="Expert garden maintenance services in Glasgow and Ayrshire. Professional lawn care, hedge trimming, planting, and seasonal maintenance. Free quotes available." />
        <meta property="og:url" content="https://dirtworkslandscaping.co.uk/garden-maintenance" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Garden Maintenance Glasgow & Ayrshire | Professional Lawn Care & Hedge Trimming" />
        <meta name="twitter:description" content="Expert garden maintenance services in Glasgow and Ayrshire. Professional lawn care, hedge trimming, planting, and seasonal maintenance. Free quotes available." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Garden Maintenance Services",
            "description": "Professional garden maintenance services including lawn care, hedge trimming, planting, and seasonal maintenance in Glasgow and Ayrshire.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dirtworks Landscaping Ltd",
              "url": "https://dirtworkslandscaping.co.uk/",
              "telephone": "+447403725998",
              "email": "dirtworkslandscaping@outlook.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ayr",
                "addressRegion": "Ayrshire",
                "addressCountry": "Scotland"
              },
              "areaServed": ["Glasgow", "Ayrshire", "Ayr", "Kilmarnock", "Irvine", "Troon", "Prestwick"]
            },
            "serviceType": "Garden Maintenance",
            "areaServed": {
              "@type": "Place",
              "name": "Glasgow and Ayrshire"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "Quote on request",
              "availability": "InStock"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Professional Garden Maintenance
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Glasgow & Ayrshire
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Keep your garden looking its best year-round with our expert garden maintenance services. 
                  From lawn care and hedge trimming to seasonal planting and tidy-ups, we provide comprehensive 
                  garden care across Glasgow and Ayrshire.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleQuoteClick}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    Get Free Quote
                  </Button>
                  <Button 
                    onClick={handleCallClick}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 07403 725998
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/Services/Dirt Works Gardening.webp" 
                  alt="Professional garden maintenance services in Glasgow and Ayrshire"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Garden Maintenance Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive garden maintenance services to keep your outdoor space healthy, 
                beautiful, and well-maintained throughout the year.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lawn Care</h3>
                <p className="text-gray-600 mb-4">
                  Regular mowing, edging, fertilizing, and weed control to maintain a healthy, 
                  lush lawn throughout the growing season.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Weekly/bi-weekly mowing</li>
                  <li>• Lawn edging and trimming</li>
                  <li>• Fertilizer application</li>
                  <li>• Weed and moss control</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hedge Trimming</h3>
                <p className="text-gray-600 mb-4">
                  Professional hedge trimming and shaping to maintain neat, healthy hedges 
                  that enhance your garden's appearance.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Regular hedge trimming</li>
                  <li>• Shaping and topiary</li>
                  <li>• Hedge renovation</li>
                  <li>• Debris removal</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planting & Tidy-ups</h3>
                <p className="text-gray-600 mb-4">
                  Seasonal planting, pruning, and general garden tidying to keep your 
                  garden looking fresh and well-maintained.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Seasonal planting</li>
                  <li>• Pruning and deadheading</li>
                  <li>• Garden tidying</li>
                  <li>• Mulching and feeding</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Seasonal Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Year-round garden care including spring preparation, summer maintenance, 
                  autumn cleanup, and winter protection.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Spring garden preparation</li>
                  <li>• Summer maintenance</li>
                  <li>• Autumn leaf clearance</li>
                  <li>• Winter protection</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Garden Design</h3>
                <p className="text-gray-600 mb-4">
                  Professional garden design and planting schemes to create beautiful, 
                  functional outdoor spaces.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Garden design consultation</li>
                  <li>• Planting schemes</li>
                  <li>• Border design</li>
                  <li>• Plant selection</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Services</h3>
                <p className="text-gray-600 mb-4">
                  Urgent garden maintenance and storm damage repair services when you need them most.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Storm damage repair</li>
                  <li>• Emergency tree work</li>
                  <li>• Urgent garden clearance</li>
                  <li>• 24/7 emergency response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dirtworks for Garden Maintenance?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With years of experience serving Glasgow and Ayrshire, we understand the unique 
                challenges of maintaining gardens in Scotland's climate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Our team has extensive knowledge of Scottish plants, soil conditions, and climate challenges.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Service</h3>
                <p className="text-gray-600">
                  Consistent, reliable garden maintenance with flexible scheduling to suit your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Serving Glasgow and Ayrshire with deep understanding of local conditions and requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Quotes</h3>
                <p className="text-gray-600">
                  No-obligation quotes for all garden maintenance services with transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Garden Maintenance Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide professional garden maintenance services across Glasgow and Ayrshire, 
                including all major towns and cities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Glasgow Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['City Centre', 'West End', 'East End', 'Southside', 'North Glasgow', 'Clydebank', 'Bearsden', 'Milngavie'].map((area) => (
                    <div key={area} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ayrshire Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Ayr', 'Kilmarnock', 'Irvine', 'Troon', 'Prestwick', 'Ardrossan', 'Saltcoats', 'Largs', 'Girvan'].map((area) => (
                    <div key={area} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Garden?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for professional garden maintenance services in Glasgow and Ayrshire. 
              Our expert team is ready to help you create and maintain the garden of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleQuoteClick}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 07403 725998
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a 
                  href="tel:+447403725998" 
                  onClick={handleCallClick}
                  className="text-green-600 hover:text-green-700"
                >
                  07403 725998
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:dirtworkslandscaping@outlook.com" 
                  onClick={handleEmailClick}
                  className="text-green-600 hover:text-green-700"
                >
                  dirtworkslandscaping@outlook.com
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default GardenMaintenance;
