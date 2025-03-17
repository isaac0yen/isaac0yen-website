/* eslint-disable react/no-unescaped-entities */
// app/work/page.tsx
import WorkCard from '../../components/WorkCard';
import workExperiences from '../../lib/workPlace';



export default function WorkPage() {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Places I've Worked</h1>
        <p className="text-gray-600">
          A collection of places where I've contributed my skills and gained valuable experience.
        </p>
      </div>

      {/* Work Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {workExperiences.map((experience, index) => (
          <WorkCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}