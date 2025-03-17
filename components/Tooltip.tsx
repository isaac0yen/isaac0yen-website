// components/Tooltip.tsx
import { useState } from 'react';

interface TooltipProps {
  description: string;
}

const Tooltip = ({ description }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Info Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-400 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      {/* Tooltip Content */}
      {isHovered && (
        <div className="absolute z-10 left-0 -top-20 w-48 p-3 bg-white rounded-lg shadow-lg text-sm text-gray-600">
          {description}
        </div>
      )}
    </div>
  );
};

export default Tooltip;