import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { trackExternalLink } from "@/utils/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Dirtworks Landscaping Ltd
              </h3>
              <p className="text-white leading-relaxed">
                Trusted provider of landscaping and building services in Ayrshire and Glasgow. 
                Our skilled team specializes in garden maintenance, landscaping & groundworks, patios, fencing & decking, pressure washing, and building services, ensuring every project is completed to the highest standards.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">07403 725998</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">dirtworkslandscaping@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">Ayrshire & Glasgow</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link to="/garden-maintenance" className="hover:text-gray-300 transition-colors">
                  • Garden Maintenance
                </Link>
              </li>
              <li>
                <Link to="/landscaping-groundworks" className="hover:text-gray-300 transition-colors">
                  • Landscaping & Groundworks
                </Link>
              </li>
              <li>
                <Link to="/patios-fencing-decking" className="hover:text-gray-300 transition-colors">
                  • Patios, Fencing & Decking
                </Link>
              </li>
              <li>
                <Link to="/pressure-washing" className="hover:text-gray-300 transition-colors">
                  • Pressure Washing
                </Link>
              </li>
              <li>
                <Link to="/building-services" className="hover:text-gray-300 transition-colors">
                  • Building Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <Link to="/ayrshire" className="hover:text-gray-300 transition-colors">
                  • Landscaping in Ayrshire
                </Link>
              </li>
              <li>
                <Link to="/glasgow" className="hover:text-gray-300 transition-colors">
                  • Landscaping in Glasgow
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Garden Maintenance Ayrshire
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Garden Maintenance Glasgow
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Building Services Ayrshire
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Building Services Glasgow
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm">
              © {currentYear} Dirtworks Landscaping Ltd. All rights reserved.
            </div>
            <div className="text-white/70 text-sm text-center">
              Professional landscaping and building services in Ayrshire and Glasgow.
              <br />
              Website Design by <span className="text-white font-semibold">cdwebdesign</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;