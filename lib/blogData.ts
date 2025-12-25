// lib/blogData.ts
import {
  getBeyondTimesReachContent,
  getTheStoryOfATelephoneContent,
  getProblemsOrChallengesContent,
  getEverythingWasPerfectContent,
  getTheRiseOfStudyhubContent
} from './blog-content';

export interface BlogPost {
  id: string;
  category: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '2',
    category: 'Write Ups',
    slug: 'the-story-of-a-telephone',
    title: 'The story of a Telephone',
    excerpt: '"No, it\'ll break her," he replied. "I\'d never want to be the reason why she\'s sad."',
    content: getTheStoryOfATelephoneContent(),
    coverImage: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*PU2IrCNSq1HO1Xdh8EebFw.jpeg',
    date: 'Jan 5, 2025',
    readTime: '7 min read',
    tags: ['Love', 'Motherhood', 'Cancer', 'Depression', 'Storytelling']
  },
  {
    id: '1',
    category: 'Write Ups',
    slug: 'beyond-times-reach',
    title: 'Beyond the Reach of Time',
    excerpt: 'I don\'t care if she forgets me a thousand times. I\'ll be here every time, waiting to remind her of us. I\'ll love her through the chaos, through the pain, and through the silence.',
    content: getBeyondTimesReachContent(),
    coverImage: 'https://images.unsplash.com/photo-1527574311754-da5f33012338?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Feb 3, 2025',
    readTime: '5 min read',
    tags: ['Time', 'Amnesia', 'Literature', 'Health', 'Love']
  },
  {
    id: '3',
    category: 'Technology',
    slug: 'everything-was-perfect-until-it-wasnt',
    title: 'Everything Was Perfect — Until It Wasn\'t',
    excerpt: '3 Weeks. 5,000 Messages. 1 Major Setback.',
    content: getEverythingWasPerfectContent(),
    date: 'May 5, 2025',
    readTime: '4 min read',
    coverImage: 'https://res.cloudinary.com/dorypiien/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_white,b_rgb:262c35/v1748261264/deepseek_mermaid_20250526_ccff5e_gr7t4v.png',
    tags: ['WhatsApp Bot', 'AI', 'Node.js', 'Render', 'OOP']
  },
  {
    id: '4',
    category: 'Technology',
    slug: 'the-rise-of-studyhub',
    title: 'The Rise of StudyHub',
    excerpt: 'From a political campaign tool to a university-wide study resource platform - here\'s how StudyHub evolved to serve over 1,000+ students.',
    content: getTheRiseOfStudyhubContent(),
    coverImage: 'https://res.cloudinary.com/duuu5uos5/image/upload/v1752440213/study-hub-icon_nwnceb.png',
    date: 'July 13, 2025',
    readTime: '4 min read',
    tags: ['EdTech', 'University', 'Node.js', 'PHP', 'Academic']
  },
  {
    id: '5',
    category: 'Write Ups',
    slug: 'problems-or-challenges',
    title: 'Problems or Challenges?',
    excerpt: 'What do we define as problems and are they really a bad thing? The message here is to embrace what you call "problems" to be "challenges" and move on to the next category so you can solve bigger issues!',
    content: getProblemsOrChallengesContent(),
    coverImage: 'https://res.cloudinary.com/duuu5uos5/image/upload/w_800,h_600,c_fill,f_auto,q_auto/v1756814474/Gemini_Generated_Image_o86cpco86cpco86c_fwg7ai.png',
    date: 'Sep 2, 2025',
    readTime: '3 min read',
    tags: ['Life', 'Motivation', 'Challenges', 'Growth', 'Mindset']
  }
];

// Helper to parse date string to Date object for sorting
function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

// Sort posts by date (latest first)
function sortByLatest(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
}

// Function to get all blog posts (latest first)
export function getAllBlogPosts() {
  return sortByLatest(blogPosts);
}

// Function to get blog post by slug
export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

// Function to get related posts (excluding the current post, latest first)
export function getRelatedPosts(currentSlug: string, limit: number = 3) {
  return sortByLatest(blogPosts)
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}
