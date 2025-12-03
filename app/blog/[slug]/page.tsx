import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BlogCard from '../../../components/BlogCard';
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '../../../lib/blogData';

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

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
    <div className="min-h-screen bg-white">
      <article className="py-16 md:py-24 border-b-4 border-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex justify-center items-center text-sm text-black mb-6 font-mono">
              <span>&gt; {post.date}</span>
              <span className="mx-3">|</span>
              <span>{post.readTime}</span>
            </div>

            <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-black font-mono">
                # {post.title}
              </h1>
            </div>

            <div className="flex justify-center flex-wrap gap-3 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white text-black border-2 border-black text-sm font-bold font-mono hover:bg-black hover:text-white transition"
                >
                  [{tag}]
                </span>
              ))}
            </div>

            <div className="relative h-64 md:h-96 w-full overflow-hidden mb-8 border-4 border-black bg-gray-100">
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
            className="prose prose-lg max-w-3xl mx-auto text-gray-800 font-mono bg-white p-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
<footer className="mt-16 pt-8 border-t-4 border-black max-w-4xl mx-auto">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
    <div className="flex items-center flex-wrap gap-3">
      <span className="text-black font-bold font-mono">&gt; SHARE:</span>
      <a 
        href={`https://x.com/intent/tweet?url=https://isaac0yen.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition"
        aria-label="Share on X (Twitter)"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=https://isaac0yen.com/blog/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition"
        aria-label="Share on Facebook"
      >
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
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://isaac0yen.com/blog/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition"
        aria-label="Share on LinkedIn"
      >
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
      className="px-4 py-2 bg-black text-white border-2 border-black font-bold hover:bg-white hover:text-black transition font-mono whitespace-nowrap">
      &lt;&lt; BACK_TO_BLOG
    </Link>
  </div>
</footer>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-white border-t-4 border-black">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="inline-block border-4 border-black bg-white px-6 py-3 mb-8">
              <h2 className="text-3xl font-bold text-black font-mono">
                &gt; RELATED_POSTS
              </h2>
            </div>

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