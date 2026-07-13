export function getImgstatContextContent(): string {
  return `<article class="blog-prose">
    <p>LLMs can't see your images. They also can't infer dimensions unless you explicitly tell them. That gap is what imgstat solves.</p>

    <p>I needed a simple way for my AI tools to know what kind of images they were working with, without opening files, parsing metadata, or guessing. So I built a small CLI that does one thing well.</p>

    <p>imgstat scans a directory and renames images to include their dimensions:</p>

    <pre><code>photo.jpg → photo-1920x1080.jpg</code></pre>

    <p>Once the size is in the filename, the context becomes obvious, to humans and to AI.</p>

    <h2>Why this exists</h2>

    <p>When you're working with AI-assisted coding, filenames are context. But image files usually hide the most important detail.</p>

    <p>I wanted something that works recursively, doesn't reprocess files unnecessarily, requires zero configuration, and can run almost anywhere. So I kept it intentionally simple.</p>

    <h2>Features</h2>

    <ul>
        <li>AI-ready context, with image dimensions embedded directly in filenames</li>
        <li>Idempotent, so it skips files that are already renamed</li>
        <li>Recursive, handling deep directory structures</li>
        <li>Minimal surface area, with no runtime and no dependency explosion</li>
    </ul>

    <h2>Installation and usage</h2>

    <pre><code>npm install -g imgstat

imgstat ./images

# You can also download and process directly:
imgstat -u https://example.com/images</code></pre>

    <h2>Why it's written in Bash</h2>

    <p>I wanted this to run in as many environments as possible. No framework, no build step, no ceremony. Bash gives you predictable behavior, easy portability, and zero runtime assumptions.</p>

    <p>On Windows, this works via WSL (recommended), Git Bash, or any POSIX-compatible shell environment. If you can run shell scripts, you can run imgstat.</p>

    <h2>Closing</h2>

    <p>This isn't a big tool. It's a small piece of glue that removes friction, especially when working with AI. Sometimes the best developer experience improvement is just making the context obvious.</p>

    <p>Repository: <a href="https://github.com/isaac0yen/imgstat" target="_blank">github.com/isaac0yen/imgstat</a><br>
    npm: <a href="https://www.npmjs.com/package/imgstat" target="_blank">npmjs.com/package/imgstat</a></p>
</article>`;
}
