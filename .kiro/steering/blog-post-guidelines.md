---
inclusion: manual
---

# Blog Post Content Guidelines

This document provides guidelines for creating and formatting blog posts for this portfolio site. The blog uses a brutalist/terminal aesthetic with monospace fonts and bordered containers.

## File Structure

Blog content lives in `lib/blog-content/` as TypeScript files that export a function returning HTML string:

```typescript
// lib/blog-content/my-new-post.ts
export function getMyNewPostContent(): string {
  return `<article class="w-full space-y-6 md:space-y-8 font-mono text-sm md:text-base">
    <!-- Content here -->
  </article>`;
}
```

Then register in `lib/blog-content/index.ts` and add metadata to `lib/blogData.ts`.

## Required Article Wrapper

ALWAYS start with this wrapper - never add max-width constraints:

```html
<article class="w-full space-y-6 md:space-y-8 font-mono text-sm md:text-base">
  <!-- All content goes here -->
</article>
```

## Content Section Templates

### Standard Text Section

```html
<section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
  <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6">
    <h2 class="text-xl md:text-2xl font-bold text-black">&gt; SECTION_TITLE</h2>
  </div>
  <div class="text-gray-800 leading-relaxed space-y-3 md:space-y-4">
    <p>&gt; Your paragraph text here.</p>
  </div>
</section>
```

### Quote/Highlight Block

```html
<p class="border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-100 p-2 md:p-3 font-bold text-sm md:text-base">
  "Quoted text here"
</p>
```

### Code Comment Style

```html
<p class="text-gray-600 text-xs md:text-sm">// Internal thought or comment</p>
```

### Call-to-Action Box

```html
<div class="bg-black text-white border-2 md:border-4 border-black p-3 md:p-4 text-center">
  <p class="text-base md:text-lg font-bold">[ Your message here ]</p>
</div>
```

### Info Box

```html
<div class="bg-gray-100 border-2 border-black p-4 md:p-6 space-y-3 md:space-y-4">
  <h3 class="text-lg md:text-xl font-bold text-black mb-3 md:mb-4">[ BOX_TITLE ]</h3>
  <p class="text-sm md:text-base">Content here</p>
</div>
```

### List Items with Terminal Style

```html
<div class="space-y-2 text-black text-sm md:text-base">
  <p>&gt; [x] Completed item</p>
  <p>&gt; [ ] Pending item</p>
</div>
```

### Numbered Steps

```html
<div class="flex items-start space-x-2 md:space-x-3 bg-white border-2 border-black p-2 md:p-3">
  <span class="font-bold text-black text-sm md:text-base">[1]</span>
  <span class="text-gray-800 text-sm md:text-base">Step description</span>
</div>
```

## Hero Section (For Feature Posts)

```html
<header class="relative bg-black text-white border-2 md:border-4 border-black overflow-hidden">
  <div class="relative z-10 px-4 py-8 md:px-8 md:py-16 text-center">
    <div class="border-2 md:border-4 border-white inline-block px-4 py-2 md:px-6 md:py-4 mb-4 md:mb-6">
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">&gt; POST_TITLE</h1>
    </div>
    <p class="text-lg md:text-xl lg:text-2xl font-bold mb-6 md:mb-8">[ Subtitle or tagline ]</p>
  </div>
</header>
```

## Images

ALWAYS use responsive image classes:

```html
<img src="URL" 
     alt="Descriptive alt text" 
     class="w-full max-w-full border-2 md:border-4 border-black" />
```

With caption:
```html
<p class="text-xs md:text-sm text-gray-600 text-center mt-3 md:mt-4 font-mono">
  // Image description or source
</p>
```

## Grid Layouts

For cards or multi-column content:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <!-- Grid items -->
</div>
```

## Footer Section

```html
<footer class="bg-black text-white border-t-2 md:border-t-4 border-black px-4 py-6 md:px-8 md:py-12">
  <div class="w-full">
    <!-- Footer content -->
  </div>
</footer>
```

---

## COMMON MISTAKES TO AVOID

### 1. Adding max-width to content elements

❌ WRONG:
```html
<article class="max-w-3xl mx-auto ...">
<div class="max-w-4xl mx-auto ...">
```

✅ CORRECT:
```html
<article class="w-full ...">
<div class="w-full ...">
```

The parent container in `app/blog/[slug]/page.tsx` already controls max-width. Adding nested max-width causes layout conflicts.

### 2. Missing responsive breakpoints

❌ WRONG:
```html
<p class="text-lg p-6 border-4">
```

✅ CORRECT:
```html
<p class="text-sm md:text-lg p-3 md:p-6 border-2 md:border-4">
```

ALWAYS include mobile-first sizing with `md:` breakpoints.

### 3. Hardcoded pixel values

❌ WRONG:
```html
<div style="width: 800px; padding: 24px;">
```

✅ CORRECT:
```html
<div class="w-full p-4 md:p-6">
```

Never use inline styles with fixed pixels.

### 4. Missing overflow handling on text

❌ WRONG:
```html
<p class="font-bold">VeryLongWordThatMightOverflowOnMobile</p>
```

✅ CORRECT:
```html
<p class="font-bold break-words">VeryLongWordThatMightOverflowOnMobile</p>
```

### 5. Images without max-width constraint

❌ WRONG:
```html
<img src="..." class="border-4 border-black" />
```

✅ CORRECT:
```html
<img src="..." class="w-full max-w-full border-2 md:border-4 border-black" />
```

### 6. Inconsistent border sizing

❌ WRONG - mixing border sizes:
```html
<div class="border-4 border-black">
  <div class="border-2 border-black">
```

✅ CORRECT - consistent responsive borders:
```html
<div class="border-2 md:border-4 border-black">
  <div class="border-2 md:border-4 border-black">
```

### 7. Forgetting the terminal aesthetic

❌ WRONG:
```html
<h2>Section Title</h2>
<p>Regular paragraph.</p>
```

✅ CORRECT:
```html
<h2 class="...">&gt; SECTION_TITLE</h2>
<p>&gt; Paragraph with terminal prompt.</p>
<p class="text-gray-600 text-xs">// Comment style text</p>
```

### 8. Using prose class in content

❌ WRONG:
```html
<div class="prose prose-lg">
```

The prose class conflicts with our custom styling. Don't use it.

### 9. Centered containers inside full-width parents

❌ WRONG:
```html
<div class="max-w-2xl mx-auto text-center">
```

✅ CORRECT:
```html
<div class="w-full text-center">
```

---

## Responsive Size Reference

| Element | Mobile | Desktop (md:) |
|---------|--------|---------------|
| Body text | text-sm | text-base |
| Headings h2 | text-xl | text-2xl |
| Headings h3 | text-lg | text-xl |
| Padding | p-3 or p-4 | p-6 or p-8 |
| Borders | border-2 | border-4 |
| Gaps | gap-4 | gap-6 or gap-8 |
| Margins | mb-6 or mb-8 | mb-12 or mb-16 |

---

## Adding a New Blog Post Checklist

1. Create `lib/blog-content/your-post-slug.ts` with export function
2. Export from `lib/blog-content/index.ts`
3. Add entry to `blogPosts` array in `lib/blogData.ts` with:
   - id (unique string)
   - category ('Write Ups' or 'Technology')
   - slug (URL-friendly, matches filename)
   - title
   - excerpt (1-2 sentences)
   - content (call your function)
   - coverImage (Cloudinary or external URL)
   - date
   - readTime
   - tags (array of strings)
4. Test on mobile viewport (375px width)
5. Verify no horizontal scroll appears
