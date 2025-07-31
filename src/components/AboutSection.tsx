/**
 * About section component showcasing professional summary and highlights
 */

import React from 'react';
import { Code, Database, Globe, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "18+ years mastering both frontend and backend technologies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Modern Frameworks",
      description: "Expert in React, Vue, Laravel, and cutting-edge web technologies"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Mastery",
      description: "Proficient with MySQL, PostgreSQL, MongoDB, and NoSQL solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Focused",
      description: "Implementing best practices for web security and performance"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Professional Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                With over 18 years of experience in web development, I've evolved from a junior PHP programmer 
                to a senior full-stack developer, working with cutting-edge technologies and leading development teams.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My expertise spans across modern frontend frameworks like React and Vue, robust backend solutions 
                with PHP and Laravel, and comprehensive database management systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about creating scalable, secure, and user-friendly applications that deliver 
                exceptional digital experiences.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
