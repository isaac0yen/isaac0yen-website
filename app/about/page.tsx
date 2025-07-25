/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-32 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Isaac</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              A passionate full-stack developer dedicated to creating exceptional digital experiences
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-8"></div>
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
                {/* Floating Elements - Responsive and contained */}
                <div className="absolute inset-0 hidden sm:block">
                  <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-2xl opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500 rounded-xl opacity-20 group-hover:-rotate-12 transition-transform duration-500 delay-100"></div>
                  <div className="absolute top-1/2 right-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-indigo-500 rounded-lg opacity-20 group-hover:translate-x-1 transition-transform duration-500 delay-200"></div>
                </div>

                {/* Main Image Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
                  {/* Gradient Ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full p-1 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-white rounded-full p-2">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src="/assets/me4.png"
                          alt="Isaac Oyeniyi - Full-Stack Developer"
                          fill
                          className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
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
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
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
                    className="text-blue inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-2xl text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
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

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg mr-3"></div>
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
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg mr-3"></div>
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

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg mr-3"></div>
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