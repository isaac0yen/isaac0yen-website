import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BlogCard from '../../../components/BlogCard';
import { getBlogPostBySlug, getRelatedPosts } from '../../../lib/blogData';

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: 'Post Not Found' };
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    keywords: post.tags,
    authors: [{ name: 'Oyeniyi isaac Inioluwa' }],
    publisher: 'https://isaac0yen.com',
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  if (!slug) return notFound();
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);
  return (
    <div className="min-h-screen">
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <div className="flex justify-center items-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>

            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
              {post.coverImage !== "https://asset.cloudinary.com/dorypiien/66e2522bf9f3dc2a32ce6fcab6b69891" && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-3xl mx-auto text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share:</span>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>

              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Blog
              </Link>
            </div>
          </footer>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-gray-900">
              Related Posts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  category={relatedPost.category}
                  key={relatedPost.id}
                  slug={relatedPost.slug}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  coverImage={relatedPost.coverImage}
                  date={relatedPost.date}
                  readTime={relatedPost.readTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}