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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b-2 border-black ${scrolled ? 'py-3' : 'py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-semibold text-black flex items-center"
        >
          <span className="mr-2 text-xl border-2 border-black px-2 py-1">
            OI
          </span>
          Oyeniyi Isaac
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="/"
            className="font-medium text-black hover:text-gray-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium text-black hover:text-gray-600 transition-colors duration-300"
          >
            About
          </Link>

          <Link
            href="/work"
            className="font-medium text-black hover:text-gray-600 transition-colors duration-300"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="font-medium text-black hover:text-gray-600 transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors duration-300 text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-black">
          <nav className="px-6 py-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-black hover:text-gray-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-gray-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/work"
                className="text-black hover:text-gray-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/blog"
                className="text-black hover:text-gray-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-black text-white border-2 border-black font-medium hover:bg-white hover:text-black transition-colors duration-300 mt-3"
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