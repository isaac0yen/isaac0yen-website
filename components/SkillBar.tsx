import { motion } from 'framer-motion';

interface SkillBarProps {
  percentage: number;
}

const SkillBar = ({ percentage }: SkillBarProps) => {
  return (
    <div className="w-full bg-gray-200 h-2.5 overflow-hidden border border-gray-300">
      <motion.div
        className="bg-black h-2.5"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SkillBar;