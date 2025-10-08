import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight } from "lucide-react";
import { trackQuoteRequest, trackPhoneCall, trackEmailClick } from "@/utils/analytics";

const LandscapingGroundworks = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleQuoteClick = () => {
    trackQuoteRequest('landscaping_groundworks_page', ['Landscaping & Groundworks']);
    // Navigate to homepage contact section
    window.location.href = "/#contact-form";
  };

  const handleCallClick = () => {
    trackPhoneCall('landscaping_groundworks_page');
    window.location.href = "tel:+447403725998";
  };

  const handleEmailClick = () => {
    trackEmailClick('landscaping_groundworks_page');
  };

  return (
    <>
      <Helmet>
        <title>Landscaping & Groundworks Glasgow | Site Preparation & Outdoor Design Ayrshire</title>
        <meta name="description" content="Complete landscaping and groundworks services in Glasgow and Ayrshire. Site preparation, drainage systems, foundations, and excavation. Professional contractors." />
        <meta name="keywords" content="landscaping groundworks Kilmarnock, site preparation Glasgow, groundworks contractor Ayrshire, landscaping services Glasgow, excavation Ayrshire, drainage systems Glasgow" />
        <link rel="canonical" href="https://dirtworkslandscaping.co.uk/landscaping-groundworks" />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Landscaping & Groundworks Glasgow | Site Preparation & Outdoor Design Ayrshire" />
        <meta property="og:description" content="Complete landscaping and groundworks services in Glasgow and Ayrshire. Site preparation, drainage systems, foundations, and excavation. Professional contractors." />
        <meta property="og:url" content="https://dirtworkslandscaping.co.uk/landscaping-groundworks" />
        <meta property="og:type" content="service" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Landscaping & Groundworks Glasgow | Site Preparation & Outdoor Design Ayrshire" />
        <meta name="twitter:description" content="Complete landscaping and groundworks services in Glasgow and Ayrshire. Site preparation, drainage systems, foundations, and excavation. Professional contractors." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Landscaping & Groundworks Services",
            "description": "Complete landscaping and groundworks services including site preparation, drainage systems, foundations, and excavation in Glasgow and Ayrshire.",
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
            "serviceType": "Landscaping & Groundworks",
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
                  Landscaping & Groundworks
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
                  Glasgow & Ayrshire
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Complete site preparation and outdoor landscaping solutions. From initial excavation 
                  and drainage systems to foundations and final landscaping, we handle every aspect 
                  of your groundworks project across Glasgow and Ayrshire.
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
                  src="/Services/Dirt Works at Groundwork..webp" 
                  alt="Professional landscaping and groundworks services in Glasgow and Ayrshire"
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
                Our Groundworks Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional groundworks and landscaping services designed to transform your outdoor 
                space from concept to completion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Complete site clearance, excavation, and preparation for your landscaping project.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Site clearance and excavation</li>
                  <li>• Soil removal and disposal</li>
                  <li>• Ground leveling and grading</li>
                  <li>• Access route preparation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Drainage Systems</h3>
                <p className="text-gray-600 mb-4">
                  Professional drainage solutions to prevent flooding and water damage.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• French drain installation</li>
                  <li>• Surface water drainage</li>
                  <li>• Soakaway systems</li>
                  <li>• Drainage pipe installation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundations</h3>
                <p className="text-gray-600 mb-4">
                  Solid foundations for patios, driveways, and other hardscaping features.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Concrete foundations</li>
                  <li>• Base preparation</li>
                  <li>• Reinforcement installation</li>
                  <li>• Foundation leveling</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excavation</h3>
                <p className="text-gray-600 mb-4">
                  Professional excavation services for landscaping and construction projects.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Trench excavation</li>
                  <li>• Bulk excavation</li>
                  <li>• Precision digging</li>
                  <li>• Waste removal</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Landscaping Design</h3>
                <p className="text-gray-600 mb-4">
                  Complete outdoor landscaping design and implementation services.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Garden design planning</li>
                  <li>• Plant selection and placement</li>
                  <li>• Hardscaping integration</li>
                  <li>• Landscape installation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Management</h3>
                <p className="text-gray-600 mb-4">
                  Complete project management from initial consultation to final completion.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Project planning and scheduling</li>
                  <li>• Material sourcing and delivery</li>
                  <li>• Quality control and inspection</li>
                  <li>• Timeline management</li>
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
                Our Groundworks Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure every groundworks project is completed 
                to the highest standards, on time and within budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Survey</h3>
                <p className="text-gray-600">
                  Comprehensive site assessment including soil analysis, drainage evaluation, 
                  and access planning.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Planning</h3>
                <p className="text-gray-600">
                  Detailed project planning including design drawings, material specifications, 
                  and timeline development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Groundworks</h3>
                <p className="text-gray-600">
                  Professional excavation, drainage installation, foundation work, and 
                  site preparation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Landscaping</h3>
                <p className="text-gray-600">
                  Final landscaping installation including planting, hardscaping, and 
                  finishing touches.
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
                Why Choose Dirtworks for Groundworks?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With years of experience in groundworks and landscaping, we bring expertise, 
                reliability, and quality to every project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Knowledge</h3>
                <p className="text-gray-600">
                  Deep understanding of Scottish soil conditions, drainage requirements, 
                  and local building regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Equipment</h3>
                <p className="text-gray-600">
                  Modern, well-maintained equipment for efficient and precise groundworks 
                  operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  Serving Glasgow and Ayrshire with knowledge of local conditions, 
                  suppliers, and regulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Quotes</h3>
                <p className="text-gray-600">
                  No-obligation quotes for all groundworks projects with transparent 
                  pricing and detailed specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-green-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Groundworks Project?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free quote for professional groundworks and landscaping services in Glasgow and Ayrshire. 
              Our expert team is ready to transform your outdoor space.
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

export default LandscapingGroundworks;
