// components/WorkCard.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WorkCardProps {
  companyName: string;
  role: string;
  imageSrc: string;
  period: string;
  link?: string;
  description?: string;
}

const WorkCard = ({ companyName, role, imageSrc, period, link, description }: WorkCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden border-2 border-black hover:bg-gray-50 transition duration-300 p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Company Image */}
      <div className="relative h-40 w-full mb-4 overflow-hidden border-b-2 border-black">
        <Image
          src={imageSrc}
          alt={companyName}
          layout="fill"
          objectFit="contain"
          className="p-2"
        />
      </div>

      {/* Company Details */}
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">{companyName}</h3>
        <p className="text-sm text-gray-600 mb-2">{role}</p>
        <p className="text-xs text-gray-500 mb-2">{period}</p>
        {description && (
          <p className="text-sm text-gray-700 italic mb-3 border-l-2 border-gray-300 pl-2">
            {description}
          </p>
        )}

        {/* View Company Button */}
        {link && (
          <Link href={link} target="_blank" className="inline-flex items-center text-black hover:text-gray-600 border-b-2 border-black hover:border-gray-600 transition">
            View Site
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m-6 0v6" />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default WorkCard;