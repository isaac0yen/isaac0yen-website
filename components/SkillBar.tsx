import { motion } from 'framer-motion';

interface SkillBarProps {
  percentage: number;
}

const SkillBar = ({ percentage }: SkillBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SkillBar;