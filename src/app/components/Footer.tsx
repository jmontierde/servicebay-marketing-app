import { Separator } from "@ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg font-heading">S</span>
              </div>
              <span className="text-xl font-bold font-heading">ServiceBay</span>
            </div>
            <p className="text-white/70 font-body">
              The AI-native platform transforming fleet repair operations worldwide.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold font-heading mb-4">Product</h3>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold font-heading mb-4">Company</h3>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold font-heading mb-4">Support</h3>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 font-body mb-4 md:mb-0">
            © 2024 ServiceBay. All rights reserved.
          </p>
          <div className="flex space-x-6 font-body">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;