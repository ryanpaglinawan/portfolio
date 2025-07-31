/**
 * Education section component displaying academic background
 */

import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  Bachelor of Science in Computer Science
                </h3>
                <h4 className="text-xl text-cyan-400 font-semibold mb-4">
                  Navotas Polytechnic College
                </h4>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>JUN 2001 - APR 2005</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Navotas City, Metro Manila</span>
                  </div>
                </div>

                <div className="text-gray-300 leading-relaxed">
                  <p>
                    Completed a comprehensive 4-year program in Computer Science, building a strong foundation 
                    in programming fundamentals, software engineering principles, and computer systems architecture. 
                    This academic background provided the theoretical knowledge that complemented my practical 
                    experience in web development.
                  </p>
                </div>

                {/* Key Areas */}
                <div className="mt-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Areas of Study</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Programming Fundamentals',
                      'Data Structures & Algorithms', 
                      'Database Systems',
                      'Software Engineering',
                      'Computer Networks',
                      'Web Technologies'
                    ].map((area, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Education Note */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <p className="text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Continuous Learning:</span> Throughout my career, 
              I've maintained a commitment to staying current with emerging technologies through online courses, 
              certifications, and hands-on experience with cutting-edge frameworks and tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
