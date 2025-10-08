import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const PressureWashing = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('pressure_washing_page', ['Pressure Washing']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('pressure_washing_page');
    window.location.href = "tel:+447403725998";
  };

  const handleEmailClick = () => {
    trackEmailClick('pressure_washing_page');
  };

  return (
    <>
      <Helmet>
        <title>Pressure Washing Glasgow & Ayrshire | Driveway & Patio Cleaning Services</title>
        <meta name="description" content="Professional pressure washing services in Glasgow and Ayrshire. Driveway cleaning, patio restoration, and stain removal. Restore your outdoor surfaces." />
        <meta name="keywords" content="pressure washing Glasgow, driveway cleaning Ayrshire, patio cleaning Glasgow, pressure washing services Ayr, stain removal Glasgow, outdoor cleaning Ayrshire" />
        <link rel="canonical" href="https://dirtworkslandscaping.co.uk/pressure-washing" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Pressure Washing Glasgow & Ayrshire | Driveway & Patio Cleaning Services" />
        <meta property="og:description" content="Professional pressure washing services in Glasgow and Ayrshire. Driveway cleaning, patio restoration, and stain removal. Restore your outdoor surfaces." />
        <meta property="og:url" content="https://dirtworkslandscaping.co.uk/pressure-washing" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Pressure Washing Glasgow & Ayrshire | Driveway & Patio Cleaning Services" />
        <meta name="twitter:description" content="Professional pressure washing services in Glasgow and Ayrshire. Driveway cleaning, patio restoration, and stain removal. Restore your outdoor surfaces." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pressure Washing Services",
            "description": "Professional pressure washing services for driveways, patios, paths, and walls in Glasgow and Ayrshire. Stain removal and surface restoration.",
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
            "serviceType": "Pressure Washing",
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
        <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Professional Pressure Washing
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Glasgow & Ayrshire
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Restore the look of your outdoor surfaces with our professional pressure washing services. 
                  From driveways and patios to walls and paths, we bring your outdoor spaces back to life 
                  with expert cleaning techniques and equipment.
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
                  src="/Services/Dirtworks pressure washing..webp" 
                  alt="Professional pressure washing services in Glasgow and Ayrshire"
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
                Our Pressure Washing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional cleaning services for all types of outdoor surfaces, 
                using the right techniques and equipment for optimal results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Driveway Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Restore your driveway to its original condition with professional 
                  pressure washing and stain removal.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Oil and grease stain removal</li>
                  <li>• Moss and algae treatment</li>
                  <li>• Dirt and grime removal</li>
                  <li>• Sealing and protection</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Patio Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Bring your patio back to life with professional cleaning and 
                  restoration services.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Deep cleaning and sanitizing</li>
                  <li>• Stain and mark removal</li>
                  <li>• Joint cleaning and re-sanding</li>
                  <li>• Protective treatment application</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Path & Wall Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Clean and restore garden paths, walls, and other outdoor surfaces 
                  to enhance your property's appearance.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Garden path cleaning</li>
                  <li>• Wall and fence cleaning</li>
                  <li>• Decking and wood cleaning</li>
                  <li>• Soft-wash options available</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stain Removal</h3>
                <p className="text-gray-600 mb-4">
                  Specialized stain removal services for stubborn marks and 
                  discoloration on various surfaces.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Oil and grease stains</li>
                  <li>• Rust and mineral stains</li>
                  <li>• Organic stains (moss, algae)</li>
                  <li>• Paint and chemical stains</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Soft-Wash Services</h3>
                <p className="text-gray-600 mb-4">
                  Gentle cleaning for delicate surfaces that require special care 
                  and attention.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Roof cleaning</li>
                  <li>• Siding and cladding</li>
                  <li>• Delicate stone surfaces</li>
                  <li>• Wood and composite materials</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Programs</h3>
                <p className="text-gray-600 mb-4">
                  Regular cleaning schedules to keep your outdoor surfaces 
                  looking their best year-round.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quarterly cleaning schedules</li>
                  <li>• Seasonal maintenance</li>
                  <li>• Preventative treatments</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Pressure Washing Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure every cleaning job delivers 
                outstanding results while protecting your property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">
                  Thorough evaluation of surfaces, stains, and cleaning requirements 
                  to determine the best approach.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preparation</h3>
                <p className="text-gray-600">
                  Surface preparation, equipment setup, and protection of surrounding 
                  areas and plants.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cleaning</h3>
                <p className="text-gray-600">
                  Professional cleaning using appropriate pressure levels, temperatures, 
                  and cleaning solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Finishing</h3>
                <p className="text-gray-600">
                  Final inspection, protective treatments where appropriate, 
                  and cleanup of work areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Techniques */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Equipment & Techniques
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We use professional-grade equipment and proven techniques to deliver 
                  superior cleaning results while protecting your surfaces.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• High-pressure washers (up to 3000 PSI)</li>
                      <li>• Hot water systems for tough stains</li>
                      <li>• Soft-wash systems for delicate surfaces</li>
                      <li>• Professional cleaning solutions and detergents</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Techniques</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Variable pressure control for different surfaces</li>
                      <li>• Pre-treatment of stubborn stains</li>
                      <li>• Systematic cleaning patterns</li>
                      <li>• Eco-friendly cleaning solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our Pressure Washing?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Results</h4>
                      <p className="text-gray-600 text-sm">Superior cleaning that restores surfaces to like-new condition</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Surface Protection</h4>
                      <p className="text-gray-600 text-sm">Careful pressure control to avoid damage to delicate surfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Eco-Friendly</h4>
                      <p className="text-gray-600 text-sm">Biodegradable cleaning solutions safe for plants and pets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Reliable Service</h4>
                      <p className="text-gray-600 text-sm">Consistent results with professional equipment and techniques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Restore Your Outdoor Surfaces?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for professional pressure washing services in Glasgow and Ayrshire. 
              Transform your outdoor spaces with our expert cleaning team.
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

export default PressureWashing;
