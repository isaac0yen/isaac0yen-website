---
inclusion: manual
---

# Blog Post Content Guidelines

This document provides guidelines for creating and formatting blog posts for this portfolio site. 

## File Structure

Blog content lives in `lib/blog-content/` as TypeScript files that export a function returning an HTML string:

```typescript
// lib/blog-content/my-new-post.ts
export function getMyNewPostContent(): string {
  return `<article class="blog-prose">
    <p>Your content here.</p>
  </article>`;
}
```

Then register in `lib/blog-content/index.ts` and add metadata to `lib/blogData.ts`.

## Styling and Layout

ALWAYS use the `<article class="blog-prose">` wrapper for the main content. The typography, spacing, and responsive behaviors are controlled entirely by this class. DO NOT use arbitrary Tailwind utility classes on HTML elements unless explicitly necessary for unique components like a specific figure. 

### Basic Elements

1. **Headings**: Use standard `<h2>` and `<h3>` tags. Do not prefix them with symbols like `> `.
2. **Paragraphs**: Use standard `<p>` tags.
3. **Links**: Use `<a>` tags with `href`, `target="_blank"`, and `rel="noopener noreferrer"`.
4. **Code**: Use `<pre><code>` blocks.

### Images and Figures

When adding images, you can wrap them in `<figure class="blog-figure">` and use `<figcaption class="blog-caption">` or `<p class="blog-caption">` for captions.

```html
<figure class="blog-figure">
  <img src="URL" alt="Descriptive alt text" class="w-full" />
  <figcaption class="blog-caption">Your caption here</figcaption>
</figure>
```

## COMMON MISTAKES TO AVOID

1. **Using old brutalist/terminal styling**: Do NOT use custom borders (`border-2 border-black`), custom padding, `>` prefixes, or manual breakpoints inside the post content. The `blog-prose` class handles the aesthetic.
2. **Adding max-width to content elements**: Never add `max-w-*` on article or div containers. The parent layout manages constraints.
3. **Missing \`target="_blank"\` on external links**: Always add `target="_blank" rel="noopener noreferrer"` to external URLs.

## Adding a New Blog Post Checklist

1. Create `lib/blog-content/your-post-slug.ts` with export function.
2. Wrap content in `<article class="blog-prose">`.
3. Export from `lib/blog-content/index.ts`.
4. Add entry to `blogPosts` array in `lib/blogData.ts`.
