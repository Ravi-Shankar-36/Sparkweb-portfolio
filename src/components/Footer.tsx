import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2235] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Code className="text-[#00aaff] mr-2" size={20} />
              <span className="text-lg font-bold">SparkWeb</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Freelance Web Developers</p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} SparkWeb. Made with{' '}
              <Heart className="text-red-500 mx-1" size={14} fill="currentColor" />
              and lots of coffee
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Available for freelance opportunities worldwide
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#00aaff] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#00aaff] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#00aaff] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-[#00aaff] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;