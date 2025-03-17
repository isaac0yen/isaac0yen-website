/* eslint-disable react/no-unescaped-entities */
// app/page.tsx (Home Page)
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Isaac
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-gray-800">
              Full-Stack Developer & Software Engineer
            </h2>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              Let's Collaborate →
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/assets/me.png"
                alt="Isaac Oyeniyi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}