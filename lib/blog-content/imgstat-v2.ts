export function getImgstatV2Content(): string {
  return `
<article class="w-full space-y-6 md:space-y-8 font-mono text-sm md:text-base">
    <section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
        <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-3">
          <h2 class="text-xl md:text-2xl font-bold text-black leading-none">&gt; THE_CONTEXT_PROBLEM</h2>
          <div class="flex gap-4 text-xs md:text-sm font-mono">
            <a href="https://github.com/isaac0yen/imgstat" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-gray-600 transition underline underline-offset-4 decoration-black/30 hover:decoration-black">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/imgstat" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-gray-600 transition underline underline-offset-4 decoration-black/30 hover:decoration-black">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H3.334v-4h3.332v4zm7.334 0H12V12H9.334v2H6.666v-5.332h7.334v5.33zm6.666 0h-4v-4h1.334v2.668h1.332v-2.668h1.334v4z"/></svg>
              npm
            </a>
          </div>
        </div>
        <div class="text-gray-800 leading-relaxed space-y-3 md:space-y-4">
            <p class="text-xs md:text-sm text-gray-500 italic mb-4">&gt; Note: This is a sequel to <a href="/blog/imgstat-giving-ai-context/" class="underline hover:text-gray-800">the first post</a>. If you haven't read it, check it out!</p>
            
            <p>&gt; imgstat started as a tiny renamer.</p>
            
            <p>&gt; But once I began using it — and really thinking about what AI coding tools *need* — it quickly outgrew that label.</p>
            
            <p>&gt; In Version 1, the tool simply appended dimensions to local filenames:</p>
            
            <p class="border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-100 p-2 md:p-3 font-bold text-sm md:text-base">hero.png → hero_800x600.png</p>
            
            <p>&gt; That helped a bit, but it still forced you to rename files in your project — something you don’t always want to do.</p>
            
            <p>&gt; In Version 2, imgstat does much more. It can scan your codebase or remote images and generate an <code>.agent/rules/image_dimensions.md</code> file.</p>
            
            <p>&gt; This gives AI coding assistants *zero-config* context about your assets without touching your source files.</p>
            
            <p>&gt; Now AI doesn doesn’t have to guess or run vision tools — it gets the dimensions right where it needs them.</p>
        </div>
    </section>

    <section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
        <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-black">&gt; WHAT_IT_REALLY_SOLVES</h2>
        </div>
        <div class="text-gray-800 leading-relaxed space-y-3 md:space-y-4">
            <p>&gt; CLI tools with long flag lists are frustrating. So Version 2 introduces a simple interactive menu when you run <code>imgstat</code> with no arguments. You don’t have to memorize options — the menu guides you.</p>
            
            <p>&gt; You can now inspect remote images by passing their URLs. And imgstat takes care of cleanup: downloaded files are removed immediately once their dimensions are read. No leftover files. No accidental clutter.</p>
            
            <p>&gt; Version 2 won’t keep appending dimensions to a filename that already has them. You also get a dry-run mode — so you can test what would happen before anything changes.</p>
            
            <p>&gt; That makes this safe to run in CI/CD, local workflows, or git hooks without fear of mangling your files.</p>
            
            <p>&gt; The script used to be a single file. As the tool grew, that became impossible to manage. Now the code is modular: each part has a clear role. That makes it easier to maintain and for others to contribute.</p>

            <p class="text-gray-600 text-xs md:text-sm">// Version 1 answered the question: "How big is this file?"</p>
            
            <p>&gt; Version 2 answers a deeper problem most AI coding assistants hit:</p>
            
            <p class="border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-100 p-2 md:p-3 font-bold text-sm md:text-base">"What are all my image assets and what are their actual dimensions?"</p>
            
            <p>&gt; Now that answer lives in an easy-to-consume markdown report instead of buried in filenames — and AI tools have context without guesswork.</p>
        </div>
    </section>

    <section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
        <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-black">&gt; INSTALLATION</h2>
        </div>
        <div class="text-gray-800 leading-relaxed space-y-4">
            <p>&gt; You can install the package globally:</p>
            <div class="bg-gray-100 border-l-2 md:border-l-4 border-black p-3 md:p-4 font-mono text-sm md:text-base overflow-x-auto text-black font-bold">
                <code>npm install -g imgstat</code>
            </div>
            
            <p>&gt; Or run it directly without installing:</p>
            <div class="bg-gray-100 border-l-2 md:border-l-4 border-black p-3 md:p-4 font-mono text-sm md:text-base overflow-x-auto text-black font-bold">
                <code>npx imgstat</code>
            </div>
        </div>
    </section>
</article>`;
}
