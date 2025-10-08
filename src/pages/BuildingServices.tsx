import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const BuildingServices = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('building_services_page', ['Building Services']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('building_services_page');
    window.location.href = "tel:+447403725998";
  };

  const handleEmailClick = () => {
    trackEmailClick('building_services_page');
  };

  return (
    <>
      <Helmet>
        <title>Building Services Glasgow & Ayrshire | Extensions & Construction | Dirtworks</title>
        <meta name="description" content="Professional building services in Glasgow and Ayrshire. Small extensions, brickwork, general building, and construction services. Licensed contractors." />
        <meta name="keywords" content="building services Glasgow, small extensions Ayrshire, brickwork contractor Glasgow, general building Ayr, construction services Glasgow, building contractor Ayrshire" />
        <link rel="canonical" href="https://dirtworkslandscaping.co.uk/building-services" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Building Services Glasgow & Ayrshire | Extensions & Construction | Dirtworks" />
        <meta property="og:description" content="Professional building services in Glasgow and Ayrshire. Small extensions, brickwork, general building, and construction services. Licensed contractors." />
        <meta property="og:url" content="https://dirtworkslandscaping.co.uk/building-services" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Building Services Glasgow & Ayrshire | Extensions & Construction | Dirtworks" />
        <meta name="twitter:description" content="Professional building services in Glasgow and Ayrshire. Small extensions, brickwork, general building, and construction services. Licensed contractors." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Building Services",
            "description": "Professional building services including small extensions, brickwork, general building, and construction services in Glasgow and Ayrshire.",
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
            "serviceType": "Building Services",
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
        <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Building Services
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Glasgow & Ayrshire
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Professional building and construction services for residential and commercial projects. 
                  From small extensions and brickwork to general building services, we deliver quality 
                  construction solutions across Glasgow and Ayrshire.
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
                  src="/Services/Dirtworks building..webp" 
                  alt="Professional building services in Glasgow and Ayrshire"
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
                Our Building Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive building and construction services designed to meet your 
                residential and commercial project needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Professional extension services to add space and value to your property.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Single-story extensions</li>
                  <li>• Kitchen extensions</li>
                  <li>• Conservatory installations</li>
                  <li>• Planning permission assistance</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Brickwork</h3>
                <p className="text-gray-600 mb-4">
                  Expert brickwork services for construction, repairs, and restoration projects.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• New brick construction</li>
                  <li>• Brick repairs and repointing</li>
                  <li>• Chimney work</li>
                  <li>• Decorative brick features</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">General Building</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive building services for various construction and renovation needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Structural repairs</li>
                  <li>• Renovation work</li>
                  <li>• Building maintenance</li>
                  <li>• Construction projects</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction Services</h3>
                <p className="text-gray-600 mb-4">
                  Full construction services from planning to completion for various project types.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• New build construction</li>
                  <li>• Commercial projects</li>
                  <li>• Residential developments</li>
                  <li>• Project management</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Renovation Work</h3>
                <p className="text-gray-600 mb-4">
                  Complete renovation services to transform and modernize existing properties.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Property refurbishment</li>
                  <li>• Modernization projects</li>
                  <li>• Structural improvements</li>
                  <li>• Interior renovations</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Maintenance Services</h3>
                <p className="text-gray-600 mb-4">
                  Ongoing maintenance and repair services to keep your property in excellent condition.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Regular maintenance programs</li>
                  <li>• Emergency repairs</li>
                  <li>• Preventative maintenance</li>
                  <li>• Building inspections</li>
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
                Our Building Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure every building project is completed 
                to the highest standards with full compliance and quality assurance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-600">
                  Initial consultation to understand your requirements, assess the site, 
                  and discuss project feasibility.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
                <p className="text-gray-600">
                  Detailed project planning including design development, planning applications, 
                  and timeline creation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction</h3>
                <p className="text-gray-600">
                  Professional construction work with regular progress updates and 
                  quality control inspections.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Completion</h3>
                <p className="text-gray-600">
                  Final inspection, snagging, handover documentation, and ongoing 
                  support and maintenance advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Dirtworks for Building Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With extensive experience in building and construction, we deliver quality 
                projects that meet your requirements and exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">
                  Fully licensed and insured building contractors with comprehensive 
                  public liability and professional indemnity insurance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Materials</h3>
                <p className="text-gray-600">
                  We use only high-quality materials from trusted suppliers, ensuring 
                  durability and long-lasting results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Knowledge</h3>
                <p className="text-gray-600">
                  Deep understanding of local building regulations, planning requirements, 
                  and construction standards in Glasgow and Ayrshire.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Management</h3>
                <p className="text-gray-600">
                  Complete project management from initial consultation through to 
                  final completion with regular progress updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Building Project?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for professional building services in Glasgow and Ayrshire. 
              Our expert team is ready to bring your construction project to life.
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

export default BuildingServices;
