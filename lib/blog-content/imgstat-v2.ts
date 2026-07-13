export function getImgstatV2Content(): string {
  return `
<article class="blog-prose">
    <p class="blog-caption">This is a sequel to <a href="/blog/imgstat-giving-ai-context/">the first post</a>. If you haven't read it, check it out. You can also find the project on <a href="https://github.com/isaac0yen/imgstat" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.npmjs.com/package/imgstat" target="_blank" rel="noopener noreferrer">npm</a>.</p>

    <h2>The context problem</h2>

    <p>imgstat started as a tiny renamer. But once I began using it, and really thinking about what AI coding tools need, it quickly outgrew that label.</p>

    <p>In Version 1, the tool simply appended dimensions to local filenames:</p>

    <pre><code>hero.png → hero_800x600.png</code></pre>

    <p>That helped a bit, but it still forced you to rename files in your project, something you don't always want to do.</p>

    <p>In Version 2, imgstat does much more. It can scan your codebase or remote images and generate an <code>.agent/rules/image_dimensions.md</code> file. This gives AI coding assistants zero-config context about your assets without touching your source files. Now AI doesn't have to guess or run vision tools; it gets the dimensions right where it needs them.</p>

    <h2>What it really solves</h2>

    <p>CLI tools with long flag lists are frustrating. So Version 2 introduces a simple interactive menu when you run <code>imgstat</code> with no arguments. You don't have to memorize options, the menu guides you.</p>

    <p>You can now inspect remote images by passing their URLs, and imgstat takes care of cleanup: downloaded files are removed immediately once their dimensions are read. No leftover files, no accidental clutter.</p>

    <p>Version 2 won't keep appending dimensions to a filename that already has them. You also get a dry-run mode, so you can test what would happen before anything changes. That makes it safe to run in CI/CD, local workflows, or git hooks without fear of mangling your files.</p>

    <p>The script used to be a single file. As the tool grew, that became impossible to manage, so the code is now modular, with each part having a clear role. That makes it easier to maintain and for others to contribute.</p>

    <p>Version 1 answered the question, "How big is this file?" Version 2 answers a deeper problem most AI coding assistants hit: "What are all my image assets and what are their actual dimensions?" Now that answer lives in an easy-to-consume markdown report instead of buried in filenames, and AI tools have context without guesswork.</p>

    <h2>Installation</h2>

    <p>You can install the package globally:</p>

    <pre><code>npm install -g imgstat</code></pre>

    <p>Or run it directly without installing:</p>

    <pre><code>npx imgstat</code></pre>
</article>`;
}
