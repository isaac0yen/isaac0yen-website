'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Using heroicons for icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl md:text-2xl font-semibold transition-colors duration-300 ${
            scrolled ? 'text-gray-800' : 'text-gray-800'
          } flex items-center`}
        >
          <span className="text-blue-600 mr-2 text-xl"> {/* You can replace this with an actual logo */}
            {/* Example: <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">...</svg> */}
            OI
          </span>
          Oyeniyi Isaac
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="/"
            className={`font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About
          </Link>
          <Link
            href="/skills"
            className={`font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Skills
          </Link>
          <Link
            href="/work"
            className={`font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Work
          </Link>
          <Link
            href="/blog"
            className={`font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors duration-300 text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-6 py-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/skills"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/work"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;