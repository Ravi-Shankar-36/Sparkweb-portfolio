import React from 'react';
import { ArrowDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2235] via-[#1a2235] to-[#2a3445] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Avatar Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#00aaff] to-[#0088cc] rounded-full flex items-center justify-center shadow-2xl">
              <img src='../../sparkweb.png' />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, We're{' '}
            <span className="bg-gradient-to-r from-[#00aaff] to-[#0088cc] bg-clip-text text-transparent">
              SparkWeb
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Freelance Web Developers specializing in creating{' '}
            <span className="text-[#00aaff] font-semibold">modern</span>,{' '}
            <span className="text-[#00aaff] font-semibold">responsive</span>, and{' '}
            <span className="text-[#00aaff] font-semibold">user-friendly</span> digital experiences
          </p>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Code className="text-[#00aaff] mb-3 mx-auto" size={32} />
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-300 text-sm">Modern web applications with React, Node.js, and cutting-edge technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Palette className="text-[#00aaff] mb-3 mx-auto" size={32} />
              <h3 className="font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-300 text-sm">Beautiful, intuitive interfaces that users love and businesses value</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Zap className="text-[#00aaff] mb-3 mx-auto" size={32} />
              <h3 className="font-semibold mb-2">Performance Optimization</h3>
              <p className="text-gray-300 text-sm">Fast, scalable solutions optimized for speed and user experience</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00aaff] hover:bg-[#0088cc] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#00aaff] text-[#00aaff] hover:bg-[#00aaff] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-[#00aaff] transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;