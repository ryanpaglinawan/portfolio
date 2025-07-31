/**
 * Contact section component with contact information and call-to-action
 */

import React from 'react';
import { Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(+63) 917-301-0857",
      href: "tel:+639173010857",
      color: "text-cyan-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email", 
      value: "ryan.p.paglinawan@gmail.com",
      href: "mailto:ryan.p.paglinawan@gmail.com",
      color: "text-purple-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Metro Manila, Philippines",
      href: "#",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my expertise can help achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`${contact.color} group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{contact.label}</p>
                      <p className="text-white font-semibold">{contact.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for New Opportunities</span>
              </div>
              <p className="text-gray-300 text-sm">
                Currently open to full-time positions, freelance projects, and consulting opportunities.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Ready to Work Together?</h3>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about creating exceptional digital experiences and would love to discuss 
                  how I can contribute to your next project.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether you need a full-stack developer for a complex web application or frontend expertise 
                  for a modern user interface, I'm here to help bring your vision to life.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:ryan.p.paglinawan@gmail.com"
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </a>
                <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">18+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © 2024 Ryan P. Paglinawan. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
