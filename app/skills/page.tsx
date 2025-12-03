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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Technical Proficiencies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional Skills in TypeScript, Node.js, Electron.js and React.js, with expertise in MySQL and MongoDB databases. I implement unit testing for code quality and apply system design principles to create scalable, efficient software solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skills.map((category, index) => (
            <div key={index} className="bg-white border-2 border-black p-6 hover:bg-gray-50 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-black border-b-2 border-black pb-2">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group flex items-center space-x-4 p-4 hover:bg-white transition-all duration-300 relative">
                    {/* Skill Logo */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-black p-2">
                      <skill.icon className="w-8 h-8 text-black" />
                    </div>

                    {/* Skill Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-lg font-medium text-black">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600">
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