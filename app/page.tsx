/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import workExperiences from '../lib/workPlace';
import { getPrioritizedBlogPosts } from '../lib/blogData';
import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white text-black py-32 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                Hi, I'm Isaac
              </h1>
              <h2 className="text-xl md:text-4xl font-light mb-6 text-gray-600">
                I build software systems.
              </h2>
              <p className="text-base md:text-xl text-gray-500 mb-8 max-w-lg">
                Focused on architecture, delivery, and long-term maintainability.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-black text-white border border-black font-semibold hover:bg-white hover:text-black transition duration-300"
                >
                  Contact Me
                </Link>
                <Link
                  href="/work"
                  className="px-5 py-2.5 md:px-6 md:py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition duration-300"
                >
                  View My Work
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-96 md:w-96 md:h-[28rem] overflow-hidden border-2 border-black">
                <Image
                  src="/assets/me-2.jpeg"
                  alt="Oyeniyi Isaac"
                  fill
                  className="object-cover object-bottom scale-130 origin-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                I work across product engineering, backend systems, and infrastructure. Currently serving as CTO at Fuse Varsity.
              </p>
              <Link
                href="/about"
                className="text-black hover:text-gray-600 font-semibold inline-flex items-center group border-b-2 border-black hover:border-gray-600 transition"
              >
                Learn More About Me
                <svg className="w-4 h-4 ml-1 transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            <div className="hidden md:flex w-full md:w-1/2 justify-center px-4 md:px-0">
              <div className="relative w-full h-64 md:h-80 max-w-md overflow-hidden border-2 border-black">
                <Image
                  src="/assets/__.jpeg"
                  alt="Oyeniyi Isaac"
                  fill
                  className="object-cover object-bottom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Places I've Worked */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">My Career so far.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Places I've worked and the systems I've contributed to.
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
                <div key={index} className="bg-white overflow-hidden border-2 border-black hover:bg-gray-50 transition duration-300">
                  <div className="relative h-48 w-full border-b-2 border-black">
                    <Image
                      src={experience.imageSrc}
                      alt={experience.companyName}
                      layout="fill"
                      objectFit="contain"
                      className="p-4"
                    />
                  </div>                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-black">{experience.companyName}</h3>
                    <p className="text-gray-600 mb-4">
                      {experience.role} • {experience.period}
                    </p>
                    {experience.description && (
                      <p className="text-sm text-gray-700 italic mb-3 border-l-2 border-gray-300 pl-2">
                        {experience.description}
                      </p>
                    )}
                    {experience.link && (
                      <Link
                        href={experience.link}
                        className="text-black hover:text-gray-600 font-semibold inline-flex items-center group border-b-2 border-black hover:border-gray-600 transition"
                      >
                        Visit Website
                        <svg className="w-4 h-4 ml-1 transition transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>          <div className="text-center mt-10">
            <Link
              href="/work"
              className="px-6 py-3 bg-black text-white border border-black font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              View All Work Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Latest Blog Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on technology and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPrioritizedBlogPosts().slice(0, 3).map((post) => (
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
              className="px-6 py-3 bg-black text-white border border-black font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}