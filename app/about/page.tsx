/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-12 sm:pb-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-black mb-6">
              About <span className="text-black">Isaac</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              A passionate full-stack developer dedicated to creating exceptional digital experiences
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="relative py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center mb-20">

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative group overflow-hidden">
                {/* Main Image Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 border-2 border-black">
                    <div className="w-full h-full bg-white p-2">
                      <div className="relative w-full h-full overflow-hidden bg-gray-100">
                        <Image
                          src="/assets/___.jpeg"
                          alt="Isaac Oyeniyi - Full-Stack Developer"
                          fill
                          className="object-cover object-bottom"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Introduction */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-white border-2 border-black p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black mr-3"></div>
                  Who I Am
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  Hi, I'm Oyeniyi Isaac Inioluwa, a dedicated and proficient Software Engineer
                  specializing in Node.js, React, Apollo GraphQL, Express, ElectronJS, and
                  various database technologies including MySQL and MongoDB.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  I'm passionate about creating exceptional digital experiences and focus on
                  developing scalable, secure, and high-performance web, mobile, and desktop applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white border-2 border-black text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
            <div className="bg-white border-2 border-black p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black mr-3"></div>
                Professional Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                My technical expertise spans front-end and back-end development, with a strong
                emphasis on building robust backend services and cross-platform applications.
                I focus on creating solutions that are not only functional but also maintainable
                and scalable.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Through continuous learning and hands-on experience, I've developed a deep
                understanding of modern development practices and architectural patterns.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black mr-3"></div>
                Leadership & Innovation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                I'm the founder and lead software engineer of My Genius, a project I've been
                steering since January 2024. This venture represents my commitment to innovation
                and my vision for creating impactful technology solutions.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                I've gained valuable industry experience through roles at leading tech companies
                like Mustard.ng, Syllabux, and FUSE Varsity, contributing to innovative projects
                across Nigeria.
              </p>
            </div>
          </div>

          {/* Education & Philosophy */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
            <div className="bg-white border-2 border-black p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black mr-3"></div>
                Education & Growth
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                I'm currently pursuing my studies in Information Technology, Communication,
                and Information Science at the University of Ilorin, Nigeria. This academic
                foundation complements my practical experience and keeps me grounded in
                theoretical principles.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Additionally, I hold a Basic Leadership Course certification from Daystar
                Christian Centre, highlighting my commitment to both technical and personal development.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black mr-3"></div>
                Vision & Impact
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                Beyond technical proficiency, I'm known for my problem-solving mindset and
                passion for leveraging technology to address real-world challenges. I believe
                in the power of code to transform ideas into reality.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Through My Genius and my professional endeavors, I continue to drive innovation
                while expanding my expertise and impact in the software development field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}