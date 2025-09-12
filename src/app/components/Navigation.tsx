import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg font-heading">S</span>
          </div>
          <span className="text-xl font-bold font-heading text-foreground">ServiceBay</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Features
          </a>
          <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Solutions
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-primary">
            Sign In
          </Button>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
