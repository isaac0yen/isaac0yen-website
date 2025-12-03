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
  return (
    <div className="bg-white overflow-hidden border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full border-b-4 border-black bg-gray-100">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3 bg-white text-black px-3 py-1 border-2 border-black text-sm font-bold font-mono">
            [{category}]
          </div>
        </div>
      </Link>
      
      <div className="p-6 bg-white">
        <div className="flex items-center text-sm text-black mb-3 font-mono">
          <span>&gt; {date}</span>
          <span className="mx-2">|</span>
          <span>{readTime}</span>
        </div>
        
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-3 text-black hover:underline transition font-mono">{title}</h3>
        </Link>
        
        <p className="text-gray-700 mb-4 line-clamp-3 font-mono text-sm">{excerpt}</p>
        
        <Link 
          href={`/blog/${slug}`}
          className="inline-block px-4 py-2 bg-black text-white border-2 border-black font-bold hover:bg-white hover:text-black transition duration-300 font-mono"
        >
          READ_MORE &gt;&gt;
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;