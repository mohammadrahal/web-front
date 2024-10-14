import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/images/logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <header className="border-b py-4 px-4 sm:px-10 bg-white tracking-wide relative z-50">
      <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-24 sm:w-32" />
        </Link>

        {/* Mobile Menu */}
        <div
          id="collapseMenu"
          className={`lg:block ${menuOpen ? 'block' : 'hidden'} lg:static lg:before:hidden lg:bg-transparent
          fixed top-0 left-0 w-full h-full bg-white p-6 lg:p-0 lg:w-auto lg:h-auto z-50 shadow-lg lg:shadow-none transition-all duration-300`}
        >
          <button
            id="toggleClose"
            className="lg:hidden absolute top-4 right-6 text-gray-700"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/course" className="text-gray-800 hover:text-blue-600 font-semibold block">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-800 hover:text-blue-600 font-semibold block">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-semibold block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Toggle Menu Button for Small Screens */}
        <div className="ml-auto flex items-center space-x-4">
          <button
            onClick={handleGetStartedClick}
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition"
          >
            Get Started
          </button>

          <button className="lg:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
