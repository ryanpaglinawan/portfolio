/**
 * Projects section component showcasing portfolio work and achievements
 */

import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Globe } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  features: string[];
  type: 'web' | 'mobile' | 'fullstack' | 'api';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  period: string;
}

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      title: "MyPropertyPro Web Application",
      company: "Lamudi Philippines",
      description: "A comprehensive property management platform enabling real estate professionals to manage listings, leads, and client interactions efficiently.",
      technologies: ["Laravel", "React.js", "Redux", "MySQL", "MongoDB", "AWS", "Material-UI"],
      features: [
        "Property listing management system",
        "Lead generation and tracking",
        "Client relationship management",
        "Real-time notifications and messaging",
        "Advanced search and filtering",
        "Analytics dashboard with reports"
      ],
      type: "fullstack",
      image: "https://pub-cdn.sider.ai/u/U0GVH7E9RJG/web-coder/688b59a42ed3adca0d3f8e47/resource/dffd13bf-a53a-4a37-86f1-8f873ccf15f6.jpg",
      period: "2018-2021"
    },
    {
      title: "MyPropertyPro Mobile App",
      company: "Lamudi Philippines", 
      description: "Mobile companion app for MyPropertyPro platform, providing on-the-go access to property management features with native performance.",
      technologies: ["React Native", "Redux", "Laravel API", "MongoDB", "Push Notifications"],
      features: [
        "Cross-platform mobile application",
        "Offline data synchronization", 
        "Camera integration for property photos",
        "GPS location services",
        "Push notifications for leads",
        "Responsive mobile UI/UX"
      ],
      type: "mobile",
      image: "https://pub-cdn.sider.ai/u/U0GVH7E9RJG/web-coder/688b59a42ed3adca0d3f8e47/resource/e94c607f-d02b-4b58-9e4b-e6163e1be896.jpg",
      period: "2019-2021"
    },
    {
      title: "E-commerce Platform Migration",
      company: "Carparts.com",
      description: "Led the migration of multiple discount automotive parts websites into a unified e-commerce platform with enhanced SEO and performance.",
      technologies: ["PHP", "MySQL", "MongoDB", "Vue.js", "jQuery", "SEO Tools", "Google Analytics"],
      features: [
        "Multi-site consolidation architecture",
        "Advanced SEO optimization system",
        "A/B testing framework implementation",
        "Automated content generation tools",
        "Performance monitoring dashboard",
        "Google Analytics integration"
      ],
      type: "web",
      image: "https://pub-cdn.sider.ai/u/U0GVH7E9RJG/web-coder/688b59a42ed3adca0d3f8e47/resource/89e59aa4-7a5e-4d8b-be1c-753169285fb0.jpg",
      period: "2015-2017"
    },
    {
      title: "HDI Online Quotation System",
      company: "HDI Systech",
      description: "Web-based insurance quotation platform enabling agents to generate accurate quotes with real-time calculation and PDF generation.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery", "FPDF", "Google Maps API"],
      features: [
        "Dynamic quote calculation engine",
        "PDF quotation generation",
        "Agent management system",
        "Real-time pricing updates",
        "Integration with Google Maps",
        "Mobile-responsive interface"
      ],
      type: "web",
      image: "https://pub-cdn.sider.ai/u/U0GVH7E9RJG/web-coder/688b59a42ed3adca0d3f8e47/resource/0d6dfe36-1b11-484e-abb8-315677d81160.jpg",
      period: "2008-2010"
    },
    {
      title: "MyBooking Automated System",
      company: "HDI Systech",
      description: "Comprehensive booking management system with automated workflows and real-time tracking capabilities using Google Maps integration.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Google Maps API", "TCPDF"],
      features: [
        "Automated booking workflows",
        "Real-time GPS tracking",
        "Barcode generation system",
        "Status monitoring dashboard",
        "Email notification system",
        "Reporting and analytics"
      ],
      type: "fullstack",
      image: "https://pub-cdn.sider.ai/u/U0GVH7E9RJG/web-coder/688b59a42ed3adca0d3f8e47/resource/b718e06d-ce81-4590-88fb-9e0069c310d8.jpg",
      period: "2009-2010"
    },
    {
      title: "Human Resource Information System",
      company: "HDI Systech",
      description: "Complete HRIS solution for employee management, timekeeper tracking, leave management, and comprehensive HR reporting.",
      technologies: ["PHP", "CodeIgniter", "MySQL", "jQuery", "FPDF", "Reporting Tools"],
      features: [
        "Employee records management",
        "Automated timekeeper system",
        "Leave request workflows",
        "Payroll integration ready",
        "Comprehensive reporting suite",
        "Role-based access control"
      ],
      type: "web",
      image: "https://pub-cdn.sider.ai/u/U0GVH7E9RJG/web-coder/688b59a42ed3adca0d3f8e47/resource/ad843efe-f195-4f91-bd75-a4abf030f4f4.jpg",
      period: "2009-2010"
    }
  ];

  const projectTypes = [
    { key: 'all', label: 'All Projects', icon: <Code className="w-4 h-4" /> },
    { key: 'web', label: 'Web Apps', icon: <Globe className="w-4 h-4" /> },
    { key: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-4 h-4" /> },
    { key: 'fullstack', label: 'Full-Stack', icon: <Database className="w-4 h-4" /> }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Showcasing key projects that demonstrate my expertise in full-stack development, 
            from complex web applications to mobile solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setFilter(type.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                filter === type.key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {type.icon}
              <span>{type.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:bg-white/10 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-gray-300 text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">
              <span className="text-cyan-400 font-semibold">18+ Years of Development Experience</span>
            </p>
            <p className="text-gray-400 text-sm">
              These featured projects represent key highlights from my extensive portfolio. 
              Throughout my career, I've contributed to 100+ projects ranging from small business websites 
              to enterprise-level applications across various industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
