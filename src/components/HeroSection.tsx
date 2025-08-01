/**
 * Hero section component with animated introduction and social links
 */

import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ryanpaglinawan',
      icon: <Github className="w-6 h-6" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ryan-paglinawan',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:ryan.p.paglinawan@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ryan Paglinawan
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-300 font-light">
            Senior Full-Stack Developer
          </p>
          
          <div className="text-lg sm:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            <p>Crafting exceptional digital experiences with 18+ years of expertise</p>
            <p className="mt-2">Specializing in React, Laravel, and modern web technologies</p>
          </div>
        </div>

        {/* Glass Card with Contact Info */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 mx-auto max-w-2xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base mb-6">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>(+63) 917-301-0857</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>ryan.p.paglinawan@gmail.com</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center space-x-2 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={`Visit ${social.name} profile`}
                >
                  {social.icon}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
