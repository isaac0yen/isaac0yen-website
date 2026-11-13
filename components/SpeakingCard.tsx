// components/SpeakingCard.tsx
import Image from 'next/image';
import type { SpeakingItem } from '../lib/speaking';

interface SpeakingCardProps {
  item: SpeakingItem;
  /**
   * 'frame'   - fixed 4:5 box, whole image shown (letterboxed, never cropped). Keeps a row of cards even.
   * 'natural' - media shown at its own aspect ratio. Used on the full speaking page.
   */
  variant?: 'frame' | 'natural';
}

const SIZES = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

const SpeakingCard = ({ item, variant = 'natural' }: SpeakingCardProps) => {
  const { title, media, src, poster, width, height, alt, role, date, venue, organizer, description } = item;
  const framed = variant === 'frame';
  const meta = [role, date].filter(Boolean).join(' • ');
  const where = [organizer, venue].filter(Boolean).join(' · ');

  let mediaEl;
  if (media === 'video') {
    mediaEl = (
      <video
        controls
        playsInline
        preload="none"
        poster={poster}
        width={width}
        height={height}
        aria-label={alt}
        className={framed ? 'absolute inset-0 h-full w-full object-contain' : 'block w-full h-auto'}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  } else if (framed) {
    mediaEl = <Image src={src} alt={alt} fill sizes={SIZES} className="object-contain" />;
  } else {
    mediaEl = <Image src={src} alt={alt} width={width} height={height} sizes={SIZES} className="block w-full h-auto" />;
  }

  // Images open full-size in a new tab so poster details can be read. Videos have their own controls.
  const mediaBox =
    media === 'image' ? (
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size image: ${title}`}
        className={framed ? 'block relative aspect-[4/5]' : 'block'}
      >
        {mediaEl}
      </a>
    ) : (
      <div className={framed ? 'relative aspect-[4/5]' : ''}>{mediaEl}</div>
    );

  return (
    <div className="bg-white overflow-hidden border-2 border-black hover:bg-gray-50 transition duration-300">
      <div className="bg-gray-100 border-b-2 border-black">{mediaBox}</div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        {meta && <p className="text-gray-600 mb-4">{meta}</p>}
        {description && (
          <p className="text-sm text-gray-700 italic mb-3 border-l-2 border-gray-300 pl-2">{description}</p>
        )}
        {where && <p className="text-sm text-gray-500">{where}</p>}
      </div>
    </div>
  );
};

export default SpeakingCard;
