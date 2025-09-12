const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="flex items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg font-heading">S</span>
          </div>
          <span className="text-xl font-bold font-heading text-foreground">
            ServiceBay
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
