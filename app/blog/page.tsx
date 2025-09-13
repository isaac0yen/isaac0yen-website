// app/blog/page.tsx
import BlogCard from '../../components/BlogCard';
import { getAllBlogPosts } from '../../lib/blogData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oyeniyi Isaac\'s Blog | My Personal Thoughts and Insights',
  description: 'Explore my collection of articles covering tech, life experiences, and various perspectives on different topics.',
  openGraph: {
    title: 'Blog | My Personal Thoughts and Insights',
    description: 'Explore my collection of articles covering tech, life experiences, and various perspectives on different topics.',
    type: 'website',
  }
};

export default function BlogPage() {
  const posts = getAllBlogPosts().reverse();

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6 text-gray-800 hover:text-gray-900 transition-colors">Welcome to My Mind</h2>
          <p className="text-xl text-gray-600 mb-4">Dive into my collection of thoughts, perspectives, and unique takes on various topics.</p>
          <p className="text-lg text-gray-500">Exploring tech, life, and everything in between - these are my unfiltered views and personal insights.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in">
          {posts.map((post) => (
            <div className="transform hover:scale-105 transition-transform duration-300 hover:shadow-xl rounded-xl" key={post.id}>
              <BlogCard
                category={post.category}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                coverImage={post.coverImage}
                date={post.date}
                readTime={post.readTime}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}