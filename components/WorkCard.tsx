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
  link: string;
}

const WorkCard = ({ companyName, role, imageSrc, period, link }: WorkCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Company Image */}
      <div className="relative h-40 w-full mb-4 overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={companyName}
          layout="fill"
          objectFit="contain"
          className="group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Company Details */}
      <div>
        <h3 className="text-lg font-semibold mb-1">{companyName}</h3>
        <p className="text-sm text-gray-600 mb-2">{role}</p>
        <p className="text-xs text-gray-500 mb-2">{period}</p>

        {/* View Company Button */}
        <Link href={link} target="_blank" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          View Site
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m-6 0v6" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default WorkCard;