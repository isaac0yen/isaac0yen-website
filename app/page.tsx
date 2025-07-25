/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import workExperiences from '../lib/workPlace';
import { getAllBlogPosts } from '../lib/blogData';
import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm Isaac
              </h1>
              <h2 className="text-2xl md:text-4xl font-light mb-6">
                A Software Engineer
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I build exceptional digital experiences for web, mobile, and desktop platforms.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Contact Me
                </Link>
                <Link
                  href="/work"
                  className="px-6 py-3 border border-gray-400 text-white rounded-md font-semibold hover:bg-white/10 transition duration-300"
                >
                  View My Work
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                <Image
                  src="/assets/me.jpeg"
                  alt="Oyeniyi Isaac"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm a full-stack developer proficient in ReactJS, Apollo GraphQL, Express, ElectronJS, and various databases. I specialize in developing and maintaining web, mobile, and desktop applications, with a focus on building robust backend services.
              </p>
              <p className="text-gray-700 mb-6">
                My expertise includes creating cross-platform applications, optimizing for performance, and ensuring security and scalability across all projects.
              </p>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group"
              >
                Learn More About Me
                <svg className="w-4 h-4 ml-1 transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            <div className="hidden md:flex w-full md:w-1/2 justify-center px-4 md:px-0">
              <div className="relative w-full h-64 md:h-80 max-w-md rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/latest-me.jpeg"
                  alt="Oyeniyi Isaac"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">My Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I am skilled in TypeScript, Node.js, Electron.js and React.js, with expertise in MySQL and MongoDB databases.
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {['TypeScript', 'Node.js', 'Electron.js', 'React.js', 'MySQL', 'MongoDB'].map((skill) => (
              <div key={skill} className="m-2 px-6 py-3 bg-gray-900 text-gray-100 rounded-md font-medium hover:bg-gray-800 transition duration-300 transform hover:-translate-y-1">
                {skill}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/skills"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Places I've Worked */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Places I've Worked</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of places where I've contributed my skills and gained valuable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workExperiences
              .filter(exp => {
                const selectedCompanies = ["My Genius", "Fuse Varsity", "Bitscard"]
                return selectedCompanies.includes(exp.companyName)
              })
              .slice(0, 3)
              .map((experience, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src={experience.imageSrc}
                      alt={experience.companyName}
                      layout="fill"
                      objectFit="contain"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{experience.companyName}</h3>
                    <p className="text-gray-600 mb-4">
                      {experience.role} • {experience.period}
                    </p>
                    <Link
                      href={experience.link}
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group"
                    >
                      Visit Website
                      <svg className="w-4 h-4 ml-1 transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>          <div className="text-center mt-10">
            <Link
              href="/work"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Work Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Latest Blog Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on technology and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getAllBlogPosts().reverse().slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage || ''}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's talk about your ideas and how we can bring them to life. I'm here to help you create something amazing.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}