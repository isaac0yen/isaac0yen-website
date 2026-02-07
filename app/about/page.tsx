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
              Building software <span className="text-black">systems</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              With long-term intent, focusing on scalability, maintainability, and real-world impact.
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
                  I am a product engineer and systems thinker who bridges the gap between technical implementation and business value. My work focuses on designing architectures that support growth without accumulating unmanageable technical debt.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  I prioritize clarity, stability, and performance. Whether I’m designing a backend schema or optimizing a frontend interaction, I’m always asking: "How will this behave in production for the next two years?"
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
                I’ve moved from writing isolated code features to engineering complete systems. My expertise lies in making the hard trade-offs: choosing the right infrastructure, ensuring data integrity, and balancing velocity with reliability.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                I have deep experience with backend services, cross-platform deployments, and database architecture, but I define my seniority by the problems I solve, not just the tools I use.
              </p>
            </div>

            <div className="bg-white border-2 border-black p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black mr-3"></div>
                Leadership & Systems
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                At Fuse Varsity and My Genius, I’ve taken ownership of technical roadmaps and architectural standards. I believe leadership means enabling others to ship correctly and efficiently.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                I align engineering efforts with product innovation, ensuring that technical choices serve the business mission rather than just following trends.
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
                Software is a tool for solving human problems. My goal is to build systems that are invisible to the user because they just work—fast, securely, and reliably.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                I am driven by the challenge of complexity. I want to build the engines that power businesses and the interfaces that empower users, ensuring every line of code adds lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}