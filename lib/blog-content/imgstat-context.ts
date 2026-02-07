export function getImgstatContextContent(): string {
  return `<article class="w-full text-gray-800 leading-relaxed space-y-4 md:space-y-6 font-mono text-sm md:text-base">
        <div class="border-2 md:border-4 border-black bg-white p-3 md:p-6">
          <p class="mb-3 md:mb-4">LLMs can’t see your images.<br>
          They also can’t infer dimensions unless you explicitly tell them.</p>

          <p class="mb-3 md:mb-4">That gap is what <strong>imgstat</strong> solves.</p>

          <p class="mb-3 md:mb-4">I needed a simple way for my AI tools to <em>know</em> what kind of images they were working with — without opening files, parsing metadata, or guessing.<br>
          So I built a small CLI that does one thing well.</p>

          <p class="mb-3 md:mb-4">\`imgstat\` scans a directory and renames images to include their dimensions:</p>

          <pre class="bg-gray-100 p-2 md:p-4 rounded-md overflow-x-auto text-xs md:text-sm mb-4"><code>photo.jpg → photo-1920x1080.jpg</code></pre>

          <p class="mb-3 md:mb-4">Once the size is in the filename, the context becomes obvious — to humans and to AI.</p>

          <h3 class="text-lg md:text-xl font-bold mt-6 mb-3">Why this exists</h3>

          <p class="mb-3 md:mb-4">When you’re working with AI-assisted coding, filenames <em>are</em> context.<br>
          But image files usually hide the most important detail.</p>

          <p class="mb-3 md:mb-4">I wanted something that:</p>
          <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>Works recursively</li>
            <li>Doesn’t reprocess files unnecessarily</li>
            <li>Requires zero configuration</li>
            <li>Can run almost anywhere</li>
          </ul>

          <p class="mb-3 md:mb-4">So I kept it <strong>intentionally simple</strong>.</p>

          <h3 class="text-lg md:text-xl font-bold mt-6 mb-3">Features</h3>

          <ul class="list-disc pl-5 mb-4 space-y-1">
            <li><strong>AI-ready context</strong> — image dimensions embedded directly in filenames</li>
            <li><strong>Idempotent</strong> — skips files that are already renamed</li>
            <li><strong>Recursive</strong> — handles deep directory structures</li>
            <li><strong>Minimal surface area</strong> — no runtime, no dependencies explosion</li>
          </ul>

          <h3 class="text-lg md:text-xl font-bold mt-6 mb-3">Installation & usage</h3>

          <pre class="bg-gray-100 p-2 md:p-4 rounded-md overflow-x-auto text-xs md:text-sm mb-4"><code>npm install -g imgstat

imgstat ./images

# You can also download and process directly:
imgstat -u https://example.com/images</code></pre>

          <h3 class="text-lg md:text-xl font-bold mt-6 mb-3">Why it’s written in Bash</h3>
          <p class="mb-3 md:mb-4">I wanted this to run in as many environments as possible.<br>
          No framework. No build step. No ceremony.</p>
          
          <p class="mb-3 md:mb-4">Bash gives you:</p>
          <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>Predictable behavior</li>
            <li>Easy portability</li>
            <li>Zero runtime assumptions</li>
          </ul>

          <p class="mb-3 md:mb-4">On Windows, this works via:</p>
          <ul class="list-disc pl-5 mb-4 space-y-1">
            <li>WSL (recommended)</li>
            <li>Git Bash</li>
            <li>Any POSIX-compatible shell environment</li>
          </ul>

          <p class="mb-3 md:mb-4">If you can run shell scripts, you can run imgstat.</p>

          <h3 class="text-lg md:text-xl font-bold mt-6 mb-3">Closing</h3>
          <p class="mb-3 md:mb-4">This isn’t a big tool.<br>
          It’s a small piece of glue that removes friction — especially when working with AI.</p>
          
          <p class="mb-3 md:mb-4">Sometimes the best developer experience improvement is just making the context obvious.</p>

          <p class="mb-3 md:mb-4">
            Repository: <a href="https://github.com/isaac0yen/imgstat" target="_blank" class="underline text-blue-600">https://github.com/isaac0yen/imgstat</a><br>
            npm: <a href="https://www.npmjs.com/package/imgstat" target="_blank" class="underline text-blue-600">https://www.npmjs.com/package/imgstat</a>
          </p>
        </div>
        </article>`;
}
