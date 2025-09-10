import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-red">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">redlabel.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-muted-foreground hover:text-primary transition-colors ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-muted-foreground hover:text-primary transition-colors ${
                location.pathname === '/services' ? 'text-primary' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-muted-foreground hover:text-primary transition-colors ${
                location.pathname === '/contact' ? 'text-primary' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          
          <Button className="bg-gradient-primary hover:shadow-glow-red transition-all duration-300">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;