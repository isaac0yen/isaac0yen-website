// app/speaking/page.tsx
import type { Metadata } from 'next';
import SpeakingCard from '../../components/SpeakingCard';
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
    <div className="pt-24 px-4 pb-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-black">Speaking &amp; Events</h1>
        <p className="text-gray-600">
          Workshops, masterclasses and talks I&apos;ve led and taken part in.
        </p>
      </div>

      {/* items-start: each card keeps its media's own proportions instead of stretching to the tallest in the row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
        {speakingItems.map((item) => (
          <SpeakingCard key={item.id} item={item} variant="natural" />
        ))}
      </div>
    </div>
  );
}
