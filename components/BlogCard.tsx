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
    <div className="bg-white overflow-hidden border-2 md:border-4 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-40 md:h-48 w-full border-b-2 md:border-b-4 border-black bg-gray-100">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 font-mono text-xs">NO_IMAGE</span>
            </div>
          )}
          <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white text-black px-2 py-1 md:px-3 border-2 border-black text-xs md:text-sm font-bold font-mono">
            [{category}]
          </div>
        </div>
      </Link>

      <div className="p-4 md:p-6 bg-white">
        <div className="flex items-center text-xs md:text-sm text-black mb-2 md:mb-3 font-mono">
          <span>&gt; {date}</span>
          <span className="mx-1 md:mx-2">|</span>
          <span>{readTime}</span>
        </div>

        <Link href={`/blog/${slug}`}>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-black hover:underline transition font-mono">{title}</h3>
        </Link>

        <p className="text-gray-700 mb-3 md:mb-4 line-clamp-3 font-mono text-xs md:text-sm">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="inline-block px-3 py-2 md:px-4 bg-black text-white border-2 border-black font-bold hover:bg-white hover:text-black transition duration-300 font-mono text-xs md:text-sm"
        >
          READ_MORE &gt;&gt;
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;