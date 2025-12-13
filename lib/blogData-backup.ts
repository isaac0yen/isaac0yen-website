// lib/blogData.ts

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
    excerpt: '“No, it’ll break her,” he replied. “I’d never want to be the reason why she’s sad.”',
    content: `<article class="max-w-none text-gray-800 leading-relaxed space-y-4 md:space-y-6 font-mono text-sm md:text-base">
        <div class="border-2 md:border-4 border-black bg-white p-3 md:p-6">
          <p class="mb-3 md:mb-4">&gt; In the midst of dust and old piles of appliances, I lie and wait for my final demise. All the hopes and dreams of my evergreen use—building a family and being with them till the very end—fade away.</p>

          <p class="mb-3 md:mb-4">&gt; You see, Jack, my owner, was gifted me by his parents—a red shiny telephone. He had just moved into his own apartment, and everyone was happy. I was installed before the housewarming, and I saw how beautiful love could be: relationships and family spirit. Nothing felt happier.</p>

          <p class="mb-3 md:mb-4">&gt; In the midst of all these emotions existed a bond far greater than everyone else's—a bond meant to last a lifetime. With this bond, challenges could be fought, and a lifetime of happiness could be created—or so it seemed.</p>

          <p class="mb-3 md:mb-4">&gt; At the beginning of their relationship, Jack and Jane lived separately but frequently communicated with letters and gift deliveries. Their favorite method, however, was through me. Hours of calls seemed like minutes to them, and their conversations were nothing but flowery—a bond meant to last a lifetime, so we thought.</p>

          <p class="mb-3 md:mb-4">&gt; One day, Jack received a mail. I remember so vividly how his face slowly became numb after reading the letter. Little did I know, that would be the last time I'd see him normal.</p>

          <p class="mb-3 md:mb-4">&gt; He reached for me, called his mom, and broke the news.</p>

          <div class="my-4 md:my-6 border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-50 p-3 md:p-4">
              <p class="mb-2 font-bold text-sm md:text-base">"Tell Jane," she said.</p>
              <p class="font-bold text-sm md:text-base">"No, it'll break her," he replied. "I'd never want to be the reason why she's sad."</p>
          </div>

          <p class="mb-3 md:mb-4">&gt; He placed me back, hanging up the phone, dressed up, and left. I couldn't help but wonder what could be going on in his mind.</p>

          <div class="my-4 md:my-6 border-2 border-black bg-gray-100 p-3 md:p-4">
              <p class="mb-2 text-xs md:text-sm">// What's he gonna do? Run away?</p>
              <p class="mb-2 text-xs md:text-sm">// No, he can't. He's way too smart to do that.</p>
              <p class="mb-2 text-xs md:text-sm">// He must have gone to Jane's place, right?</p>
              <p class="mb-2 text-xs md:text-sm">// He, of all people, knows the importance of communication, right?</p>
              <p class="text-xs md:text-sm">// ...Right?</p>
          </div>

          <p class="mb-3 md:mb-4">&gt; He came back that evening. I couldn't tell if he was drunk or just high on his problems.</p>

          <p class="mb-3 md:mb-4">&gt; "There's no way I'm gonna die early, right?" That was exactly my thought. It's just leukemia, right? Wait, what's leukemia?</p>

          <div class="my-4 md:my-6 border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-50 p-3 md:p-4">
              <p class="mb-2 font-bold text-sm md:text-base">"I'm gonna have to go away," I heard from his room.</p>
              <p class="text-gray-600 text-xs md:text-sm">// What?? There's no way you're going away! What's gonna happen to Jane? What's gonna happen the day she finds out? What's gonna happen when every day I ring and she starts getting worried? What's gonna happen if she comes over, sees you're nowhere to be found, tells your mom, and we all panic...</p>
          </div>

          <p class="mb-3 md:mb-4">&gt; I've never wished to be audible so much in my life so much. God, if you could, now would be a nice time. Please, this guy's gonna make a mistake.</p>

          <div class="my-4 md:my-6 border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-50 p-3 md:p-4">
              <p class="mb-2 font-bold text-sm md:text-base">"I can't let the pity come from different directions," he said. "The day Jane finds out, she's gonna break... and make sure she comes here till the day I die."</p>
              <p class="text-gray-600 text-xs md:text-sm">// And I'm like, "Die?"</p>
          </div>

          <p class="mb-3 md:mb-4">&gt; He looks around, wondering who made that sound.</p>
          <p class="mb-3 md:mb-4 text-gray-600 text-xs md:text-sm">// Did he hear me?</p>

          <p class="mb-3 md:mb-4">&gt; "Yes," he continued. "I've been ignorant for too long, and at the brink of time... being diagnosed wrongly for too long. I don't have much time left, and why cause them the stress? Why cause them the pain? I've seen what cancer does to people and families."</p>

          <p class="mb-3 md:mb-4 text-gray-600 text-xs md:text-sm">// And I'm like, "Ooh cancer, that's leukemia."</p>

          <p class="mb-3 md:mb-4">&gt; "This is the best thing I have to do..." Then he leaves…</p>

          <p class="mb-3 md:mb-4">&gt; Six months later after his eventual demise, everyone's coming to pack his things. The house that once gathered to celebrate a life's beginning has been reduced to memories and sighs.</p>

          <p class="mb-3 md:mb-4 text-gray-600 text-xs md:text-sm">// Sighhh.</p>

          <p class="mb-3 md:mb-4 text-gray-600 text-xs md:text-sm">// If only he knew...</p>

          <p class="mb-3 md:mb-4">&gt; That love is called love for a reason, and it's most effective in the dark times. Even when you're lonely, wanting to bear the brunt of your actions, inactions, and the circumstances life throws at you—that's when love prevails.</p>

          <p class="mb-3 md:mb-4">&gt; Now, I'm useless, probably going to be given out. But if I could say something to him now that he's gone... Open up to people who care. Communicate when things are tough. You don't have to take it all on your own.</p>
        </div>
        <p class="text-xs md:text-sm text-gray-500 mt-3 md:mt-4 font-mono">// Image source: Unsplash.com</p>
        </article>`,
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
    excerpt: 'I don’t care if she forgets me a thousand times. I’ll be here every time, waiting to remind her of us. I’ll love her through the chaos, through the pain, and through the silence.',
    content: `
<article class="max-w-3xl mx-auto space-y-6 md:space-y-8 font-mono text-sm md:text-base">
    <section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
        <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-black">&gt; HER_POV</h2>
        </div>
        <div class="text-gray-800 leading-relaxed space-y-3 md:space-y-4">
            <p>&gt; I don't know how much time I have left before I'm unaware I even wrote this. Maybe it's my feelings that change, or maybe it's my memory that betrays me. But in the midst of all this confusion, you remain constant. For reasons I can't explain, you are the one thing I hold onto—whether I remember you or not.</p>
            
            <p>&gt; One morning, I woke up feeling unexplainably weak. My surroundings were unfamiliar and sterile. I was in a hospital. I tried to sit up, but surprise and fear settled in when I caught my reflection in the mirror across the room.</p>
            
            <p class="border-l-2 md:border-l-4 border-black pl-3 md:pl-4 bg-gray-100 p-2 md:p-3 font-bold text-sm md:text-base">"How long have I been asleep?"</p>
            <p>&gt; I looked so... old.</p>
            
            <p>&gt; That was when you entered.</p>
            
            <p>&gt; "Mel..." you said, your warm voice, something I know I've heard before. You spoke my name as if we'd known each other for a lifetime.</p>
            
            <p>&gt; But I couldn't remember you. Not the laughs we'd shared, not the beautiful moments that you clearly still held onto. All those memories—our memories—were stripped away, stolen by the crude hands of this cursed mental state.</p>
            
            <p class="text-gray-600 text-xs md:text-sm">// "If only I could remember..."</p>
            
            <p>&gt; I wouldn't have to make you fall in love with me all over again. But somehow... you do.</p>
            
            <p>&gt; "What if there comes a time when I don't see you the same way?" I once whispered to you.</p>
            
            <p>&gt; "Then I'd only try harder. We're a match made in the stars, Mel. Whatever happens, our souls will always find a way back to each other, no matter how long it takes..."</p>
            
            <p>&gt; You held me as you spoke, it helped against the chaos inside my mind.</p>
            
            <p>&gt; Why do you still love me knowing it means bearing this burden? Loving me, knowing that every moment is in vain? Why love me when your devotion seems destined to end without me?</p>
            
            <p>&gt; I want to remember. I really want to. But every few months, my condition worsens, and the distance between us grows wider. If the worst happens, why not leave me? Why carry the weight of someone who might never fully see you again?</p>
            
            <p>&gt; Are these the thoughts I had the last time? Did I ask myself these same questions before?</p>
            
            <p>&gt; And will this be the last time I ever think of this...?</p>
        </div>
    </section>

    <section class="mb-8 md:mb-12 border-2 md:border-4 border-black bg-white p-4 md:p-6">
        <div class="border-b-2 md:border-b-4 border-black pb-3 md:pb-4 mb-4 md:mb-6">
          <h2 class="text-xl md:text-2xl font-bold text-black">&gt; HIS_POV</h2>
        </div>
        <div class="text-gray-800 leading-relaxed space-y-3 md:space-y-4">
            <p>&gt; There's no way to explain what it feels like to love someone who may not remember you tomorrow. But even if I could, I wouldn't change a thing. Loving her, even in bits, is worth more than a lifetime without her.</p>
            
            <p>&gt; I walked into the hospital room that morning, and there she was. Mel. My Mel. She looked fragile, like she was trying to hold herself together while the world unraveled around her. The sight of her reflection in the mirror must have shaken her.</p>
            
            <p>&gt; I could see the question in her eyes: "How long have I been like this?"</p>
            
            <p>&gt; "Mel..." I said softly.</p>
            
            <p>&gt; She turned to me, her gaze uncertain, searching. There was no familiarity in her eyes, but I didn't budge.</p>
            
            <p>&gt; She doesn't remember me, not the laughter, not the life we built, not the promises we made. But I remember her. I always will.</p>
            
            <p>&gt; And if I have to make her fall in love with me all over again, I'll do it. Every. Single. Time.</p>
            
            <p>&gt; Once, she asked me, "What if there comes a time when I don't see you the same way?"</p>
            
            <p>&gt; I held her close, knowing how much courage it took for her to say those words. "Then I'll try harder," I told her. "We're a match made in the stars, Mel. No matter what, our souls will find each other. Always..."</p>
            
            <p>&gt; She doesn't know how deeply I mean that. How, even when her memories fade, I see the person she is. Not just in her eyes or her smile, but in the quiet moments when she's afraid to trust her own mind but still trusts me.</p>
            
            <p>&gt; It hurts. God, it hurts. Watching her slip further away every few months, knowing there's nothing I can do to stop it. But I won't leave her. I won't walk away just because it's hard.</p>
            
            <p>&gt; I don't care if she forgets me a thousand times. I'll be here every time, waiting to remind her of us. I'll love her through the chaos, through the pain, and through the silence.</p>
            
            <p>&gt; Because she's worth it. Every. Single. Moment.</p>
            
            <p>&gt; And if this is the last time she remembers me, I'll make it count. Just like I always do...</p>
        </div>
    </section>
    
    <p class="text-xs md:text-sm text-gray-500 mt-3 md:mt-4 font-mono">// Image source: Unsplash.com</p>
    
</article>`,
    coverImage: 'https://images.unsplash.com/photo-1527574311754-da5f33012338?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Feb 3, 2025',
    readTime: '5 min read',
    tags: ['Time', 'Amnesia', 'Literature', 'Health', 'Love']
  },
  {
    "id": "3",
    "category": "Technology",
    "slug": "everything-was-perfect-until-it-wasnt",
    "title": "Everything Was Perfect — Until It Wasn't",
    "excerpt": "3 Weeks. 5,000 Messages. 1 Major Setback.",
    "content": `<article class="max-w-4xl mx-auto bg-white font-mono">
      <!-- Hero Section -->
      <header class="relative bg-black text-white border-4 border-black overflow-hidden">
        <div class="relative z-10 px-8 py-16 text-center">
          <div class="border-4 border-white inline-block px-6 py-4 mb-6">
            <h1 class="text-4xl md:text-5xl font-bold leading-tight">&gt; EVERYTHING_WAS_PERFECT</h1>
          </div>
          <p class="text-xl md:text-2xl font-bold mb-8">[ 3 Weeks | 5,000 Messages | 1 Major Setback ]</p>
          <div class="flex justify-center items-center space-x-6 text-sm">
            <span class="border-2 border-white px-3 py-1">&gt; May 5, 2025</span>
            <span class="border-2 border-white px-3 py-1">&gt; 4 min read</span>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <div class="px-8 py-12">
        <!-- Introduction -->
        <section class="mb-16">
          <div class="flex justify-center mb-8">
            <img src="https://res.cloudinary.com/dorypiien/image/upload/v1746479429/IMG-20250505-WA0031_oxjlmo.jpg" 
                 alt="AI-Powered WhatsApp Bot Architecture" 
                 class="w-full max-w-2xl border-4 border-black" />
          </div>
          <div class="max-w-3xl mx-auto border-4 border-black bg-white p-6">
            <p class="text-lg text-gray-800 leading-relaxed">&gt; What began as an experimental project evolved into a robust messaging platform that seamlessly integrated AI capabilities within WhatsApp's ecosystem — until we faced our ultimate stress test.</p>
          </div>
        </section>

        <!-- Executive Summary -->
        <section class="mb-16 bg-black text-white border-4 border-black p-8">
          <h2 class="text-2xl font-bold mb-6 text-center border-b-4 border-white pb-4">[ EXECUTIVE_SUMMARY ]</h2>
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="text-center border-2 border-white p-6">
              <div class="text-3xl font-bold mb-2">5,200+</div>
              <div class="text-gray-300">&gt; Messages Processed</div>
            </div>
            <div class="text-center border-2 border-white p-6">
              <div class="text-3xl font-bold">₦100,000+</div>
              <div class="text-gray-300">&gt; Revenue Generated</div>
            </div>
          </div>
        </section>

        <!-- Core Capabilities -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ CORE_CAPABILITIES ]</h2>
          <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
            <div class="bg-white border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div class="flex items-center mb-4 border-b-2 border-black pb-3">
                <span class="text-2xl mr-4">⏰</span>
                <h3 class="text-xl font-bold text-black">&gt; Smart_Reminders</h3>
              </div>
                <h3ass="text-gray-800">&gt; Context-aware scheduling system with natural language processing for intelligent task management and automated follow-ups.</p>
            </div>
            
            <div class="bg-white border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div class="flex items-center mb-4 border-b-2 border-black pb-3">
                <span class="text-2xl mr-4">🔍</span>
                <h3 class="text-xl font-bold text-black">&gt; Real-Time_Research</h3>
              </div>
              <p class="text-gray-800">&gt; Multi-source verification system combining DuckDuckGo API with AI synthesis for accurate, up-to-date information delivery.</p>
            </div>
            
            <div class="bg-white border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div class="flex items-center mb-4 border-b-2 border-black pb-3">
                <span class="text-2xl mr-4">📄</span>
                <h3 class="text-xl font-bold text-black">&gt; Document_Intelligence</h3>
              </div>
              <p class="text-gray-800">&gt; Advanced PDF analysis engine achieving 92% accuracy in academic paper summarization and technical document processing.</p>
            </div>
            
            <div class="bg-white border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div class="flex items-center mb-4 border-b-2 border-black pb-3">
                <span class="text-2xl mr-4">🎨</span>
                <h3 class="text-xl font-bold text-black">&gt; Creative_Studio</h3>
              </div>
              <p class="text-gray-800">&gt; On-demand image generation supporting 15+ artistic styles with commercial licensing for business applications.</p>
            </div>
          </div>
        </section>

        <!-- Technical Architecture -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ SYSTEM_ARCHITECTURE ]</h2>
          <div class="bg-white border-4 border-black overflow-hidden mt-8">
            <div class="p-8">
              <img src="https://res.cloudinary.com/dorypiien/image/upload/v1748261264/deepseek_mermaid_20250526_ccff5e_gr7t4v.png" 
                   alt="System Architecture Diagram" 
                   class="w-full max-w-4xl mx-auto border-2 border-black" />
              <p class="text-sm text-gray-600 text-center mt-4 font-mono">// System workflow diagram built with Mermaid.js</p>
            </div>
            
            <div class="bg-gray-100 border-t-4 border-black p-8">
              <h3 class="text-xl font-bold text-black mb-4 border-b-2 border-black pb-2">[ CORE_COMPONENTS ]</h3>
              <div class="space-y-4">
                <div class="flex items-start space-x-3 bg-white border-2 border-black p-4">
                  <div class="text-black font-bold">&gt;</div>
                  <div>
                    <strong class="text-black">Intent_Classifier:</strong>
                    <span class="text-gray-800"> Advanced NLP system analyzing message history and user behavioral patterns for accurate intent prediction</span>
                  </div>
                </div>
                <div class="flex items-start space-x-3 bg-white border-2 border-black p-4">
                  <div class="text-black font-bold">&gt;</div>
                  <div>
                    <ong class="text-black">Tool_Orchestrator:</ong>
                    <span class="text-gray-800"> Dynamic workflow builder with intelligent 5-step execution limit and fallback mechanisms</span>
                  </div>
                </div>
                <div class="flex items-start space-x-3 bg-white border-2 border-black p-4">
                  <div class="text-black font-bold">&gt;</div>
                  <div>
                    <strong class="text-black">Safety_Layer:</strong>
                    <span class="text-gray-800"> Real-time content filtering with PII redaction and compliance monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- The Incident -->
        <section class="mb-16">
          <div class="bg-white border-4 border-black p-8">
            <h2 class="text-3xl font-bold text-black mb-6 border-b-4 border-black pb-4">[ META_DETECTION_INCIDENT ]</h2>
            <div class="space-y-6 text-gray-800">
              <p class="text-lg leading-relaxed">&gt; After three weeks of flawless operation, we encountered our most significant challenge. Meta's sophisticated AI detection algorithms identified patterns in our bot's responses that triggered their automated moderation systems.</p>
              
              <div class="bg-gray-100 border-2 border-black p-6">
                <h3 class="font-bold text-lg mb-4 text-black border-b-2 border-black pb-2">&gt; TIMELINE_OF_EVENTS</h3>
                <div class="space-y-3">
                  <div class="flex items-start space-x-3 bg-white border-2 border-black p-3">
                    <span class="font-bold text-black">[1]</span>
                    <span class="text-gray-800">Initial detection by Meta's AI monitoring systems</span>
                  </div>
                  <div class="flex items-start space-x-3 bg-white border-2 border-black p-3">
                    <span class="font-bold text-black">[2]</span>
                    <span class="text-gray-800">Service suspension within 90 minutes of detection</span>
                  </div>
                  <div class="flex items-start space-x-3 bg-white border-2 border-black p-3">
                    <span class="font-bold text-black">[3]</span>
                    <span class="text-gray-800">23-hour review period and successful reinstatement</span>
                  </div>
                </div>
              </div>
              
              <p class="text-lg">&gt; The experience provided valuable insights into platform compliance and led to enhanced detection evasion strategies. Post-incident, we've successfully processed 5,000+ additional messages with zero downtime.</p>
            </div>
          </div>
        </section>

        <!-- Technical Stack -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ TECH_STACK ]</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div class="bg-white border-4 border-black p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h3 class="font-bold text-lg mb-4 text-black border-b-2 border-black pb-2">[COMMUNICATION]</h3>
              <ul class="space-y-2 text-gray-800 text-sm">
                <li>&gt; WhatsApp Web.js</li>
                <li>&gt; Session Management</li>
                <li>&gt; Failover Systems</li>
              </ul>
            </div>
            
            <div class="bg-white border-4 border-black p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h3 class="font-bold text-lg mb-4 text-black border-b-2 border-black pb-2">[AI_INTEGRATION]</h3>
              <ul class="space-y-2 text-gray-800 text-sm">
                <li>&gt; Gemini Pro</li>
                <li>&gt; Groq Infrastructure</li>
                <li>&gt; Custom ML Models</li>
              </ul>
            </div>
            
            <div class="bg-white border-4 border-black p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h3 class="font-bold text-lg mb-4 text-black border-b-2 border-black pb-2">[BACKEND_STACK]</h3>
              <ul class="space-y-2 text-gray-800 text-sm">
                <li>&gt; Node.js Runtime</li>
                <li>&gt; MongoDB Database</li>
                <li>&gt; Render Hosting</li>
              </ul>
            </div>
            
            <div class="bg-white border-4 border-black p-6 text-center hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h3 class="font-bold text-lg mb-4 text-black border-b-2 border-black pb-2">[SECURITY]</h3>
              <ul class="space-y-2 text-gray-800 text-sm">
                <li>&gt; End-to-End Encryption</li>
                <li>&gt; GDPR Compliance</li>
                <li>&gt; Data Protection</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Financial Performance -->
        <section class="mb-16">
          <div class="bg-black text-white border-4 border-black p-8">
            <h2 class="text-3xl font-bold mb-6 text-center border-b-4 border-white pb-4">[ BUSINESS_PERFORMANCE ]</h2>
            <div class="max-w-2xl mx-auto">
              <div class="bg-white text-black border-4 border-white p-6 mb-6">
                <div class="text-center">
                  <div class="text-4xl font-bold mb-2">₦100,000+</div>
                  <div class="text-gray-800 mb-4 font-bold">&gt; Total Revenue Generated</div>
                  <div class="text-sm text-gray-700 bg-gray-100 border-2 border-black p-3">
                    // Revenue Distribution: 40% affiliate commissions, 60% AI infrastructure & maintenance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer class="bg-black text-white border-t-4 border-black px-8 py-12">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border-2 border-white p-6">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-white pb-2">[ CONTACT ]</h3>
              <p class="text-gray-300 mb-4">&gt; For technical discussions or collaboration opportunities:</p>
              <a href="mailto:isaacoyeniyi06@gmail.com" class="text-white hover:underline font-bold">isaacoyeniyi06@gmail.com</a>
            </div>
            
            <div class="border-2 border-white p-6">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-white pb-2">[ ACKNOWLEDGMENTS ]</h3>
              <p class="text-gray-300 text-sm">&gt; Special recognition to <a href="https://ng.linkedin.com/in/gabriel-ojumah-96905a283" class="text-white hover:underline font-bold">Gabriel Ojumah</a> for growth hacking strategies that drove 60% of user acquisition, and our early adopters who provided 1,200+ feedback points.</p>
            </div>
          </div>
          
          <div class="border-t-2 border-white mt-8 pt-6 text-center text-sm text-gray-400">
            // System metrics updated: May 26, 2025 | All architectural diagrams created by development team
          </div>
        </div>
      </footer>
    </article>`,
    "date": "May 5, 2025",
    "readTime": "4 min read",
    "coverImage": "https://res.cloudinary.com/dorypiien/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_white,b_rgb:262c35/v1748261264/deepseek_mermaid_20250526_ccff5e_gr7t4v.png",
    "tags": ["WhatsApp Bot", "AI", "Node.js", "Render", "OOP"]
  },
  {
    "id": "4",
    "category": "Technology",
    "slug": "the-rise-of-studyhub",
    "title": "The Rise of StudyHub",
    "excerpt": "From a political campaign tool to a university-wide study resource platform - here's how StudyHub evolved to serve over 1,000+ students.",
    "content": `<article class="max-w-4xl mx-auto bg-white font-mono">
      <!-- Hero Section -->
      <header class="relative bg-black text-white border-4 border-black overflow-hidden">
        <div class="relative z-10 px-8 py-16 text-center">
          <div class="mb-6">
            <img src="https://res.cloudinary.com/duuu5uos5/image/upload/v1752440213/study-hub-icon_nwnceb.png" 
                 alt="StudyHub Logo" 
                 class="w-24 h-24 mx-auto border-4 border-white" />
          </div>
          <div class="border-4 border-white inline-block px-6 py-4 mb-6">
            <h1 class="text-4xl md:text-5xl font-bold leading-tight">&gt; THE_RISE_OF_STUDYHUB</h1>
          </div>
          <p class="text-xl md:text-2xl font-bold mb-8">[ From Political Campaign Tool to University-Wide Academic Platform ]</p>
          <div class="flex justify-center items-center space-x-6 text-sm">
            <span class="border-2 border-white px-3 py-1">&gt; July 13, 2025</span>
            <span class="border-2 border-white px-3 py-1">&gt; 4 min read</span>
          </div>
       /header
      </header>

      <!-- Main Content -->
      <div class="px-8 py-12">
        <!-- Problem Statement -->
        <section class="mb-16">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-black mb-6 border-4 border-black inline-block px-6 py-3 bg-white">[ THE_PROBLEM ]</h2>
            <div class="bg-white border-4 border-black p-8 mt-8">
              <p class="text-lg text-black font-bold leading-relaxed mb-4">&gt; "Heyyy, Please do you have [COURSE_CODE] PDF?"</p>
              <p class="text-gray-800 mt-4">&gt; A familiar plea echoing through university WhatsApp groups during every exam season. Despite being a self-proclaimed not-so-serious student 😅, I recognized a crucial gap in the academic ecosystem.</p>
            </div>
          </div>
        </section>

        <!-- The Genesis Story -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ ORIGIN_STORY ]</h2>
          <div class="grid lg:grid-cols-2 gap-8 items-center mt-8">
            <div>
              <div class="bg-white border-4 border-black p-8">
                <h3 class="text-xl font-bold text-black mb-4 border-b-2 border-black pb-2">&gt; From_Politics_to_PDFs</h3>
                <p class="text-gray-800 mb-4">&gt; StudyHub began as a platform to aid a political campaign, built with an unconventional tech stack: Node.js backend paired with PHP frontend, now causing an effect on people's academics</p>
              </div>
            </div>
            <div>
              <img src="https://res.cloudinary.com/duuu5uos5/image/upload/v1752440484/WhatsApp_Image_2025-07-13_at_10.00.46_PM_gbzfhp.jpg" 
                   alt="Original Campaign Platform Interface" 
                   class="w-full border-4 border-black" />
            </div>
          </div>
        </section>

        <!-- Platform Evolution -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ PLATFORM_TRANSFORMATION ]</h2>
          <div class="space-y-8 mt-8">
            <div class="bg-white border-4 border-black overflow-hidden">
              <img src="https://res.cloudinary.com/duuu5uos5/image/upload/v1752440492/WhatsApp_Image_2025-07-13_at_10.00.47_PM_m4dcvx.jpg" 
                   alt="Modern StudyHub Interface" 
                   class="w-full object-cover border-b-4 border-black" />
              <div class="p-8">
                <h3 class="text-xl font-bold text-black mb-4 border-b-2 border-black pb-2">&gt; The_Modern_Academic_Hub</h3>
                <p class="text-gray-800">&gt; The transformed platform now serves as a comprehensive academic resource center, featuring intuitive navigation, efficient search capabilities, and seamless resource sharing.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Key Features & Innovation -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ INNOVATION_HIGHLIGHTS ]</h2>
          <div class="bg-white border-4 border-black p-8 mt-8">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold text-black mb-6 border-b-2 border-black pb-2">🎯 PLATFORM_ACHIEVEMENTS</h3>
                <div class="space-y-4">
                  <div class="bg-gray-100 border-2 border-black p-4">
                    <div class="text-2xl font-bold text-black mb-1">1.5k+</div>
                    <div class="text-gray-700 text-sm">&gt; Resources Downloaded</div>
                  </div>
                  <div class="bg-gray-100 border-2 border-black p-4">
                    <div class="text-2xl font-bold text-black mb-1">#1</div>
                    <div class="text-gray-700 text-sm">&gt; Audio Summaries (Top Content)</div>
                  </div>
                  <div class="bg-gray-100 border-2 border-black p-4">
                    <div class="text-2xl font-bold text-black mb-1">100%</div>
                    <div class="text-gray-700 text-sm">&gt; Monetization Success</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-black mb-6 border-b-2 border-black pb-2">🚀 KEY_INNOVATIONS</h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3 bg-gray-100 border-2 border-black p-3">
                    <span class="text-sm">🎧</span>
                    <div>
                      <div class="font-bold text-black">NotebookLM_Integration</div>
                      <div class="text-gray-700 text-sm">&gt; AI-powered audio summaries became the platform's most popular feature</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3 bg-gray-100 border-2 border-black p-3">
                    <span class="text-sm">📱</span>
                    <div>
                      <div class="font-bold text-black">Mobile-First_Design</div>
                      <div class="text-gray-700 text-sm">&gt; Optimized for university students' primary device usage patterns</div>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3 bg-gray-100 border-2 border-black p-3">
                    <span class="text-sm">💰</span>
                    <div>
                      <div class="font-bold text-black">Strategic_Monetization</div>
                      <div class="text-gray-700 text-sm">&gt; Sustainable revenue model through targeted advertising placement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Technical Architecture -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ TECHNICAL_FOUNDATION ]</h2>
          <div class="bg-white border-4 border-black p-8 mt-8">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div class="bg-gray-100 border-2 border-black p-6">
                <h3 class="font-bold text-lg text-black mb-3 border-b-2 border-black pb-2">[BACKEND]</h3>
                <div class="text-gray-800 space-y-2 text-sm">
                  <div>&gt; Node.js Runtime</div>
                  <div>&gt; Express.js Framework</div>
                  <div>&gt; RESTful API Design</div>
                </div>
              </div>
              
              <div class="bg-gray-100 border-2 border-black p-6">
                <h3 class="font-bold text-lg text-black mb-3 border-b-2 border-black pb-2">[FRONTEND]</h3>
                <div class="text-gray-800 space-y-2 text-sm">
                  <div>&gt; PHP Integration</div>
                  <div>&gt; Responsive Design</div>
                  <div>&gt; Progressive Enhancement</div>
                </div>
              </div>
              
              <div class="bg-gray-100 border-2 border-black p-6">
                <h3 class="font-bold text-lg text-black mb-3 border-b-2 border-black pb-2">[AI]</h3>
                <div class="text-gray-800 space-y-2 text-sm">
                  <div>&gt; NotebookLM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Impact Metrics -->
        <section class="mb-16">
          <div class="bg-black text-white border-4 border-black p-8">
            <h2 class="text-3xl font-bold mb-8 text-center border-b-4 border-white pb-4">[ PLATFORM_IMPACT ]</h2>
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div class="border-2 border-white p-6">
                <div class="text-3xl font-bold mb-2">1,000+</div>
                <div class="text-gray-300">&gt; Active Students</div>
              </div>
              <div class="border-2 border-white p-6">
                <div class="text-3xl font-bold mb-2">15+</div>
                <div class="text-gray-300">&gt; Course Categories</div>
              </div>
              <div class="border-2 border-white p-6">
                <div class="text-3xl font-bold mb-2">95%</div>
                <div class="text-gray-300">&gt; User Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Future Roadmap -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center border-4 border-black inline-block px-6 py-3 bg-white">[ ROADMAP ]</h2>
          <div class="bg-white border-4 border-black p-8 mt-8">
            <div class="max-w-3xl mx-auto space-y-6">
              <div class="flex items-start space-x-4 bg-gray-100 border-2 border-black p-4">
                <div class="font-bold text-black">[1]</div>
                <div>
                  <h3 class="font-bold text-black mb-2">&gt; Multi-University_Expansion</h3>
                  <p class="text-gray-800">&gt; Scaling the platform to serve additional universities across Nigeria and West Africa</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-gray-100 border-2 border-black p-4">
                <div class="font-bold text-black">[2]</div>
                <div>
                  <h3 class="font-bold text-black mb-2">&gt; Enhanced_AI_Features</h3>
                  <p class="text-gray-800">&gt; Advanced content analysis, personalized study recommendations, and intelligent resource matching</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 bg-gray-100 border-2 border-black p-4">
                <div class="font-bold text-black">[3]</div>
                <div>
                  <h3 class="font-bold text-black mb-2">&gt; Platform_Optimization</h3>
                  <p class="text-gray-800">&gt; Ongoing bug fixes, performance improvements, and user experience enhancements</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Footer -->
      <footer class="bg-black text-white border-t-4 border-black px-8 py-12">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="border-2 border-white p-6">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-white pb-2">[ CONTRIBUTORS ]</h3>
              <p class="text-gray-300 text-sm mb-4">&gt; This project's success is attributed to exceptional teamwork and strategic insights.</p>
              <div class="space-y-2 text-sm">
                <p class="text-gray-300">
                  <strong class="text-white">&gt; Growth_&_Strategy:</strong> 
                  <span class="ml-1">Gbadamosi Fredrick (Newton)</span>
                </p>
                <p class="text-gray-300">
                  <strong class="text-white">&gt; Publicity_&_Outreach:</strong> 
                  <span class="ml-1">Adesina David</span>
                </p>
              </div>
            </div>
            
            <div class="border-2 border-white p-6">
              <h3 class="text-xl font-bold mb-4 border-b-2 border-white pb-2">[ STATUS ]</h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="font-bold text-white">[✓]</div>
                  <span class="text-gray-300 text-sm">Active Development</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="font-bold text-white">[→]</div>
                  <span class="text-gray-300 text-sm">Multi-University Expansion</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="font-bold text-white">[!]</div>
                  <span class="text-gray-300 text-sm">Bug Fixes in Progress</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-t-2 border-white mt-8 pt-6 text-center text-sm text-gray-400">
            // StudyHub Platform | Transforming Academic Resource Sharing | Currently serving 1,000+ students
          </div>
        </div>
      </footer>
    </article>`,
    "coverImage": "https://res.cloudinary.com/duuu5uos5/image/upload/v1752440213/study-hub-icon_nwnceb.png",
    "date": "July 13, 2025",
    "readTime": "4 min read",
    "tags": ["EdTech", "University", "Node.js", "PHP", "Academic"]
  },
  {
    id: '5',
    category: 'Write Ups',
    slug: 'problems-or-challenges',
    title: 'Problems or Challenges?',
    excerpt: 'What do we define as problems and are they really a bad thing? The message here is to embrace what you call "problems" to be "challenges" and move on to the next category so you can solve bigger issues!',
    content: `
<article class="max-w-3xl mx-auto space-y-8 font-mono">
    <section class="mb-12 border-4 border-black bg-white p-6">
        <div class="text-gray-800 leading-relaxed space-y-6">
            <p class="text-lg font-bold text-black border-b-2 border-black pb-2">&gt; What do we define as problems and are they really a bad thing?</p>
            
            <div class="bg-gray-100 border-2 border-black p-6 space-y-4 mt-6">
                <h3 class="text-xl font-bold text-black mb-4">[ CASE_STUDIES ]</h3>
                
                <div class="space-y-4">
                    <div class="border-l-4 border-black pl-4 bg-white p-3">
                        <p><strong>&gt; Case_1:</strong> We have a young adult who is looking for a skill to learn and get a source of income.</p>
                    </div>
                    
                    <div class="border-l-4 border-black pl-4 bg-white p-3">
                        <p><strong>&gt; Case_2:</strong> We have a young adult who just finished learning a skill or just graduated looking for ways to get a job.</p>
                    </div>
                    
                    <div class="border-l-4 border-black pl-4 bg-white p-3">
                        <p><sstrong>&gt; Case_3:</strong> We ave a company founder who's looking for investment.</p>
                    </div>
                    
                    <div class="border-l-4 border-black pl-4 bg-white p-3">
                        <p><strong>&gt; Case_4:</strong> We have a billionaire who's trying to create a brand new industrial sector.</p>
                    </div>
                </div>
            </div>
            
            <p>&gt; And the funny thing is, everyone who's at a particular point doesn't think of the fact that even after passing this phase, we have... probably a significantly more life choking category of problems ahead. 😂️</p>
            
            <div class="bg-black text-white border-4 border-black p-4 text-center">
                <p class="text-lg font-bold">[ Is there any motivation here? NO! 😂️ ]</p>
            </div>
            
            <div class="bg-white border-4 border-black p-6 mt-6">
                <p class="text-lg font-bold text-black mb-4 border-b-2 border-black pb-2">&gt; THE_REAL_MESSAGE</p>
                <p class="text-black">&gt; The message here is to embrace what you call "problems" to be "challenges" and move on to the next category so you can solve bigger issues!</p>
            </div>
            
            <div class="bg-gray-100 border-2 border-black p-6 mt-6">
                <h3 class="text-xl font-bold text-black mb-4">[ THE_JOURNEY_CONTINUES ]</h3>
                <div class="space-y-2 text-black">
                    <p>&gt; [x] Finish school...</p>
                    <p>&gt; [x] Learn that skill...</p>
                    <p>&gt; [x] Find that job...</p>
                    <p>&gt; [x] Start that company...</p>
                    <p>&gt; [x] Find a way to scale...</p>
                    <p>&gt; [x] And cause an impact however you want to.</p>
                </div>
            </div>
            
            <div class="text-center bg-gray-100 border-2 border-black p-4 mt-6">
                <p class="text-lg font-bold text-gray-700">// Or just give up! 😂️</p>
            </div>
        </div>
    </section>
    
</article>`,
    coverImage: 'https://res.cloudinary.com/duuu5uos5/image/upload/w_800,h_600,c_fill,f_auto,q_auto/v1756814474/Gemini_Generated_Image_o86cpco86cpco86c_fwg7ai.png',
    date: 'Sep 2, 2025',
    readTime: '3 min read',
    tags: ['Life', 'Motivation', 'Challenges', 'Growth', 'Mindset']
  }
];

// Function to get all blog posts
export function getAllBlogPosts() {
  return blogPosts;
}

// Function to get blog post by slug
export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

// Function to get related posts (excluding the current post)
export function getRelatedPosts(currentSlug: string, limit: number = 3) {
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}