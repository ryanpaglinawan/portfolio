/**
 * Skills section component with interactive skill categories and proficiency indicators
 */

import React, { useState } from 'react';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  description: string;
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      description: "Modern UI/UX development with cutting-edge frameworks",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Vue.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Next.js", level: 85, color: "from-gray-400 to-gray-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "jQuery", level: 98, color: "from-yellow-400 to-yellow-600" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description: "Robust server-side solutions and API development",
      skills: [
        { name: "Laravel", level: 95, color: "from-red-400 to-red-600" },
        { name: "PHP", level: 98, color: "from-purple-400 to-purple-600" },
        { name: "Symfony", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "CodeIgniter", level: 92, color: "from-orange-400 to-orange-600" },
        { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
        { name: "RESTful APIs", level: 93, color: "from-indigo-400 to-indigo-600" },
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      description: "Data management and optimization expertise",
      skills: [
        { name: "MySQL", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
        { name: "NoSQL", level: 82, color: "from-purple-400 to-purple-600" },
        { name: "Database Design", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Query Optimization", level: 87, color: "from-yellow-400 to-yellow-600" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      description: "Development tools and deployment technologies",
      skills: [
        { name: "Git", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "CI/CD Pipelines", level: 88, color: "from-green-400 to-green-600" },
        { name: "Webpack", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "Jest Testing", level: 82, color: "from-red-400 to-red-600" },
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-white/15 border-cyan-400 shadow-lg shadow-cyan-400/25'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${activeCategory === index ? 'text-cyan-400' : 'text-gray-400'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                {skillCategories[activeCategory].title}
              </h3>
              
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
