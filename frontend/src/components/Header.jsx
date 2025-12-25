import { Link } from 'react-router-dom';
import { Plane, User } from 'lucide-react';

function Header() {
  return (
    <header className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Plane className="w-8 h-8" />
            <span className="text-2xl font-bold">TravelBook</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-accent-500 transition-colors">
              Hotels
            </Link>
            <Link to="/" className="hover:text-accent-500 transition-colors">
              Flights
            </Link>
            <Link to="/" className="hover:text-accent-500 transition-colors">
              Attractions
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Sign In</span>
            </button>
            <button className="bg-white text-primary-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
