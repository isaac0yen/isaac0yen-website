// app/speaking/page.tsx
import type { Metadata } from 'next';
import SpeakingGallery from '../../components/SpeakingGallery';
import speakingItems from '../../lib/speaking';

export const metadata: Metadata = {
  title: 'Speaking & Events | Oyeniyi Isaac',
  description: 'Workshops, masterclasses and talks I have led and taken part in.',
  openGraph: {
    title: 'Speaking & Events | Oyeniyi Isaac',
    description: 'Workshops, masterclasses and talks I have led and taken part in.',
    type: 'website',
  },
};

export default function SpeakingPage() {
  return (
    <div className="pt-20 md:pt-24 px-4 pb-10 md:pb-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
        <h1 className="text-3xl font-bold mb-2 text-black">Speaking &amp; Events</h1>
        <p className="text-gray-600">
          Workshops, masterclasses and talks I&apos;ve led and taken part in.
        </p>
      </div>

      <SpeakingGallery items={speakingItems} layout="gallery" />
    </div>
  );
}
