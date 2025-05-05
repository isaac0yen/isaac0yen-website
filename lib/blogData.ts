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
    id: '1',
    category: 'Write Ups',
    slug: 'beyond-times-reach',
    title: 'Beyond the Reach of Time',
    excerpt: 'I don’t care if she forgets me a thousand times. I’ll be here every time, waiting to remind her of us. I’ll love her through the chaos, through the pain, and through the silence.',
    content: `
<article class="prose max-w-3xl mx-auto p-6 space-y-8">
    <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Her POV</h2>
        <div class="text-gray-700 leading-relaxed space-y-4">
            <p>I don't know how much time I have left before I'm unaware I even wrote this. Maybe it's my feelings that change, or maybe it's my memory that betrays me. But in the midst of all this confusion, you remain constant. For reasons I can't explain, you are the one thing I hold onto—whether I remember you or not.</p>
            
            <p>One morning, I woke up feeling unexplainably weak. My surroundings were unfamiliar and sterile. I was in a hospital. I tried to sit up, but surprise and fear settled in when I caught my reflection in the mirror across the room.</p>
            
            <p class="italic">"How long have I been asleep?"</p>
            <p>I looked so... old.</p>
            
            <p>That was when you entered.</p>
            
            <p>"Mel..." you said, your warm voice, something I know I've heard before. You spoke my name as if we'd known each other for a lifetime.</p>
            
            <p>But I couldn't remember you. Not the laughs we'd shared, not the beautiful moments that you clearly still held onto. All those memories—our memories—were stripped away, stolen by the crude hands of this cursed mental state.</p>
            
            <p class="italic">"If only I could remember..."</p>
            
            <p>I wouldn't have to make you fall in love with me all over again. But somehow... you do.</p>
            
            <p>"What if there comes a time when I don't see you the same way?" I once whispered to you.</p>
            
            <p>"Then I'd only try harder. We're a match made in the stars, Mel. Whatever happens, our souls will always find a way back to each other, no matter how long it takes..."</p>
            
            <p>You held me as you spoke, it helped against the chaos inside my mind.</p>
            
            <p>Why do you still love me knowing it means bearing this burden? Loving me, knowing that every moment is in vain? Why love me when your devotion seems destined to end without me?</p>
            
            <p>I want to remember. I really want to. But every few months, my condition worsens, and the distance between us grows wider. If the worst happens, why not leave me? Why carry the weight of someone who might never fully see you again?</p>
            
            <p>Are these the thoughts I had the last time? Did I ask myself these same questions before?</p>
            
            <p>And will this be the last time I ever think of this...?</p>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">His POV</h2>
        <div class="text-gray-700 leading-relaxed space-y-4">
            <p>There's no way to explain what it feels like to love someone who may not remember you tomorrow. But even if I could, I wouldn't change a thing. Loving her, even in bits, is worth more than a lifetime without her.</p>
            
            <p>I walked into the hospital room that morning, and there she was. Mel. My Mel. She looked fragile, like she was trying to hold herself together while the world unraveled around her. The sight of her reflection in the mirror must have shaken her.</p>
            
            <p>I could see the question in her eyes: "How long have I been like this?"</p>
            
            <p>"Mel..." I said softly.</p>
            
            <p>She turned to me, her gaze uncertain, searching. There was no familiarity in her eyes, but I didn't budge.</p>
            
            <p>She doesn't remember me, not the laughter, not the life we built, not the promises we made. But I remember her. I always will.</p>
            
            <p>And if I have to make her fall in love with me all over again, I'll do it. Every. Single. Time.</p>
            
            <p>Once, she asked me, "What if there comes a time when I don't see you the same way?"</p>
            
            <p>I held her close, knowing how much courage it took for her to say those words. "Then I'll try harder," I told her. "We're a match made in the stars, Mel. No matter what, our souls will find each other. Always..."</p>
            
            <p>She doesn't know how deeply I mean that. How, even when her memories fade, I see the person she is. Not just in her eyes or her smile, but in the quiet moments when she's afraid to trust her own mind but still trusts me.</p>
            
            <p>It hurts. God, it hurts. Watching her slip further away every few months, knowing there's nothing I can do to stop it. But I won't leave her. I won't walk away just because it's hard.</p>
            
            <p>I don't care if she forgets me a thousand times. I'll be here every time, waiting to remind her of us. I'll love her through the chaos, through the pain, and through the silence.</p>
            
            <p>Because she's worth it. Every. Single. Moment.</p>
            
            <p>And if this is the last time she remembers me, I'll make it count. Just like I always do...</p>
        </div>
    </section>
    
        <p className="text-sm text-gray-500 mt-4">Image source: Unsplash.com</p>
    
</article>`,
coverImage: 'https://images.unsplash.com/photo-1527574311754-da5f33012338?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'Feb 3, 2025',
    readTime: '5 min read',
    tags: ['Time', 'Amnesia', 'Literature', 'Health', 'Love']
  },
  {
    id: '2',
    category: 'Write Ups',
    slug: 'the-story-of-a-telephone',
    title: 'The story of a Telephone',
    excerpt: '“No, it’ll break her,” he replied. “I’d never want to be the reason why she’s sad.”',
    content: `<article class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>In the midst of dust and old piles of appliances, I lie and wait for my final demise. All the hopes and dreams of my evergreen use—building a family and being with them till the very end—fade away.</p>

        <p>You see, Jack, my owner, was gifted me by his parents—a red shiny telephone. He had just moved into his own apartment, and everyone was happy. I was installed before the housewarming, and I saw how beautiful love could be: relationships and family spirit. Nothing felt happier.</p>

        <p>In the midst of all these emotions existed a bond far greater than everyone else's—a bond meant to last a lifetime. With this bond, challenges could be fought, and a lifetime of happiness could be created—or so it seemed.</p>

        <p>At the beginning of their relationship, Jack and Jane lived separately but frequently communicated with letters and gift deliveries. Their favorite method, however, was through me. Hours of calls seemed like minutes to them, and their conversations were nothing but flowery—a bond meant to last a lifetime, so we thought.</p>

        <p>One day, Jack received a mail. I remember so vividly how his face slowly became numb after reading the letter. Little did I know, that would be the last time I'd see him normal.</p>

        <p>He reached for me, called his mom, and broke the news.</p>

        <div class="my-6">
            <p class="italic">"Tell Jane," she said.</p>
            <p class="italic">"No, it'll break her," he replied. "I'd never want to be the reason why she's sad."</p>
        </div>

        <p>He placed me back, hanging up the phone, dressed up, and left. I couldn't help but wonder what could be going on in his mind.</p>

        <div class="my-6">
            <p class="italic">What's he gonna do? Run away?</p>
            <p class="italic">No, he can't. He's way too smart to do that.</p>
            <p class="italic">He must have gone to Jane's place, right?</p>
            <p class="italic">He, of all people, knows the importance of communication, right?</p>
            <p class="italic">...Right?</p>
        </div>

        <p>He came back that evening. I couldn't tell if he was drunk or just high on his problems.</p>

        <p>"There's no way I'm gonna die early, right?" That was exactly my thought. It's just leukemia, right? Wait, what's leukemia?</p>

        <div class="my-6">
            <p>"I'm gonna have to go away," I heard from his room.</p>
            <p class="italic">What?? There's no way you're going away! What's gonna happen to Jane? What's gonna happen the day she finds out? What's gonna happen when every day I ring and she starts getting worried? What's gonna happen if she comes over, sees you're nowhere to be found, tells your mom, and we all panic...</p>
        </div>

        <p>I've never wished to be audible so much in my life so much. God, if you could, now would be a nice time. Please, this guy's gonna make a mistake.</p>

        <div class="my-6">
            <p>"I can't let the pity come from different directions," he said. "The day Jane finds out, she's gonna break... and make sure she comes here till the day I die."</p>
            <p class="italic">And I'm like, "Die?"</p>
        </div>

        <p>He looks around, wondering who made that sound.</p>
        <p class="italic">Did he hear me?</p>

        <p>"Yes," he continued. "I've been ignorant for too long, and at the brink of time... being diagnosed wrongly for too long. I don't have much time left, and why cause them the stress? Why cause them the pain? I've seen what cancer does to people and families."</p>

        <p class="italic">And I'm like, "Ooh cancer, that's leukemia."</p>

        <p>"This is the best thing I have to do..." Then he leaves…</p>

        <p>Six months later after his eventual demise, everyone's coming to pack his things. The house that once gathered to celebrate a life's beginning has been reduced to memories and sighs.</p>

        <p class="italic">Sighhh.</p>

        <p class="italic">If only he knew...</p>

        <p>That love is called love for a reason, and it's most effective in the dark times. Even when you're lonely, wanting to bear the brunt of your actions, inactions, and the circumstances life throws at you—that's when love prevails.</p>

        <p>Now, I'm useless, probably going to be given out. But if I could say something to him now that he's gone... Open up to people who care. Communicate when things are tough. You don't have to take it all on your own.</p>
        <p className="text-sm text-gray-500 mt-4">Image source: Unsplash.com</p>
    
        </article>`,
    coverImage: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*PU2IrCNSq1HO1Xdh8EebFw.jpeg',
    date: 'Jan 5, 2025',
    readTime: '7 min read',
    tags: ['Love', 'Motherhood', 'Cancer', 'Depression', 'Storytelling']
  },
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