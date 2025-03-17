'use client';
import SkillBar from '../../components/SkillBar';
import Tooltip from '../../components/Tooltip';
import { SiTypescript, SiNodedotjs, SiApollographql, SiReact, SiMysql } from 'react-icons/si';

const skills = [
  {
    category: 'Professional Skills',
    skills: [
      {
        name: 'TypeScript',
        percentage: 90,
        icon: SiTypescript,
        description: 'Strongly typed JavaScript for scalable applications.',
      },
      {
        name: 'Node.js',
        percentage: 95,
        icon: SiNodedotjs,
        description: 'Server-side JavaScript runtime for building scalable network applications.',
      },
      {
        name: 'Apollo GraphQL',
        percentage: 85,
        icon: SiApollographql,
        description: 'Platform for building and managing GraphQL APIs.',
      },
      {
        name: 'React',
        percentage: 92,
        icon: SiReact,
        description: 'A JavaScript library for building user interfaces.',
      },
      {
        name: 'SQL',
        percentage: 85,
        icon: SiMysql,
        description: 'Expertise in MySQL and database management systems.',
      },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Technical Proficiencies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional Skills in TypeScript, Node.js, Electron.js and React.js, with expertise in MySQL and MongoDB databases. I implement unit testing for code quality and apply system design principles to create scalable, efficient software solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gradient-to-r from-blue-50 to-purple-50 transition-all duration-300 transform hover:scale-105 relative">
                    {/* Skill Logo */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm p-2 group-hover:shadow-md transition-shadow">
                      <skill.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>

                    {/* Skill Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-lg font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors">
                          {skill.percentage}%
                        </span>
                      </div>
                      <SkillBar percentage={skill.percentage} />
                    </div>

                    {/* Tooltip */}
                    <Tooltip description={skill.description} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}