import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-white tracking-[0.15em]">REDLABEL.AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link 
              to="/" 
              className={`text-gray-300 hover:text-white transition-colors tracking-wide ${
                location.pathname === '/' ? 'text-white' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-300 hover:text-white transition-colors tracking-wide ${
                location.pathname === '/services' ? 'text-white' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-300 hover:text-white transition-colors tracking-wide ${
                location.pathname === '/contact' ? 'text-white' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;