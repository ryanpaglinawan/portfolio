/**
 * Experience section component with timeline-based work history display
 */

import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  period: string;
  technologies: string[];
  highlights: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "ZigZag Connect INC",
      position: "Frontend Developer",
      location: "Pasig City",
      duration: "11 months",
      period: "APR 2022 - MAR 2023",
      technologies: ["React.js", "Redux", "Laravel", "Tailwind", "Docker", "AWS", "CI/CD"],
      highlights: [
        "Optimized site usability and user experience of web applications",
        "Built reusable and performance-driven UI components",
        "Worked with cutting-edge Javascript frameworks for scalable applications",
        "Implemented and maintained tests to ensure application stability"
      ]
    },
    {
      company: "Code and Theory",
      position: "Frontend Developer", 
      location: "Pasig City",
      duration: "6 months",
      period: "OCT 2021 - APR 2022",
      technologies: ["Next.js", "React.js", "Node.js", "StoryBook", "Jest", "Docker", "Contentful"],
      highlights: [
        "Integrated code with REST Web Services and 3rd party APIs",
        "Worked across different technical stacks with various frontend techniques",
        "Participated in agile ceremonies for collaborative sprint planning",
        "Implemented features with cross-functional team collaboration"
      ]
    },
    {
      company: "Lamudi Philippines",
      position: "Web Developer",
      location: "Makati City", 
      duration: "3 years & 11 months",
      period: "NOV 2017 - OCT 2021",
      technologies: ["Symfony", "Laravel", "React.js", "React Native", "MongoDB", "AWS"],
      highlights: [
        "Created new features, performance optimization, and bug fixing",
        "Collaborated to create the MyPropertyPro web application",
        "Implemented new features and optimization of MyPropertyPro web app",
        "Participated in adding new features on MyPropertyPro mobile app"
      ]
    },
    {
      company: "Carparts.com",
      position: "Server Side Developer",
      location: "Mandaluyong City",
      duration: "7 years",
      period: "OCT 2010 - NOV 2017", 
      technologies: ["PHP", "MySQL", "MongoDB", "Vue", "jQuery", "SEO", "Google Analytics"],
      highlights: [
        "Added new SEO features and enhancements",
        "Applied SEO optimization and Google/Omniture tagging with A/B testing",
        "Created scripts to process Omniture data for Marketing team reports",
        "Participated in discount sites migration to Carparts.com"
      ]
    },
    {
      company: "HDI Systech",
      position: "PHP Web Developer",
      location: "Quezon City",
      duration: "2 years 6 months", 
      period: "APR 2008 - OCT 2010",
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Google Maps", "FPDF"],
      highlights: [
        "Developed web-based application for online quotations for HDI Agents",
        "Led creation of MyBooking system with automated booking transactions",
        "Built Human Resource Information System (HRIS) for HR department",
        "Enabled real-time status monitoring through Google Maps integration"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-8 z-10 shadow-lg shadow-cyan-500/25"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:bg-white/10 transition-all duration-300 group">
                  {/* Company & Position */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-gray-300">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
