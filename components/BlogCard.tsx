import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard = ({ slug, title, excerpt, coverImage, date, readTime, category }: BlogCardProps) => {
  const categoryColors: { [key: string]: string } = {
    'Technology': 'bg-blue-600',
    'Design': 'bg-purple-600',
    'Development': 'bg-green-600',
    'Business': 'bg-yellow-600',
    'Marketing': 'bg-red-600',
    'Productivity': 'bg-indigo-600',
    'Career': 'bg-pink-600',
    'Write Ups': 'bg-teal-600',
    'News': 'bg-orange-600',
    'Other': 'bg-gray-600'
  };

  const categoryColor = categoryColors[category] || categoryColors['Other'];

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className={`absolute top-2 right-2 ${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {category}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition">{title}</h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        <Link 
          href={`/blog/${slug}`}
          className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;