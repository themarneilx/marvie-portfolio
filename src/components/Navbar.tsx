"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Map as MapIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900/90 backdrop-blur-md sticky top-0 z-50 border-b-4 border-blue-950 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-white font-bold text-xl tracking-wider" style={{ fontFamily: "'Caveat', cursive" }}>Marvie's Portfolio</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-blue-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <Home size={16} />
                Home
              </Link>
              <Link href="/journey-map" className="text-blue-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                <MapIcon size={16} />
                Journey Map
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-b-4 border-blue-950" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-blue-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} />
              Home
            </Link>
            <Link 
              href="/journey-map" 
              className="text-blue-100 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <MapIcon size={18} />
              Journey Map
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;