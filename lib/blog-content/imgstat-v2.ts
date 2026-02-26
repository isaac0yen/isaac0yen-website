export function getImgstatV2Content(): string {
  return `
<article class="w-full space-y-6 md:space-y-8 font-mono text-sm md:text-base">
    <section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
        <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-black">&gt; THE_CONTEXT_PROBLEM</h2>
        </div>
        <div class="text-gray-800 leading-relaxed space-y-3 md:space-y-4">
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
</article>`;
}
