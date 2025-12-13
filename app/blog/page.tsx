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
    <section className="py-12 md:py-24 bg-white border-b border-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-block border-2 md:border-4 border-black bg-white px-4 py-3 md:px-8 md:py-6 mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black">&gt; BLOG_</h2>
          </div>
          <p className="text-base md:text-xl text-black mb-3 md:mb-4 font-mono px-2">[ Dive into my collection of thoughts, perspectives, and unique takes on various topics. ]</p>
          <p className="text-sm md:text-lg text-gray-600 font-mono">&gt; Exploring tech, life, and everything in between</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <div key={post.id}>
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