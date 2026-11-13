// components/SpeakingCard.tsx
//
// A compact thumbnail card. The media is a button: clicking it opens the viewer in
// SpeakingGallery, where the poster is shown full size (and the video plays).
// Thumbnails use a fixed 4:5 frame with object-contain, so the whole image is always
// visible (letterboxed, never cropped) and every card in a row has the same height.
import Image from 'next/image';
import type { SpeakingItem } from '../lib/speaking';

const SIZES = '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw';

interface DetailsProps {
  item: SpeakingItem;
  /** 'card' = compact text under a thumbnail; 'dialog' = larger text in the viewer. */
  variant?: 'card' | 'dialog';
  /** In tiny phone thumbnails, hide the long lines visually (screen readers still get them). */
  dense?: boolean;
}

export function SpeakingDetails({ item, variant = 'card', dense = false }: DetailsProps) {
  const { title, role, date, venue, organizer, description } = item;
  const meta = [role, date].filter(Boolean).join(' • ');
  const where = [organizer, venue].filter(Boolean).join(' · ');
  const isDialog = variant === 'dialog';
  const extra = dense ? 'max-md:sr-only' : '';

  return (
    <>
      <h3 className={isDialog ? 'text-lg font-bold text-black' : 'text-sm md:text-base font-bold leading-snug text-black'}>
        {title}
      </h3>
      {meta && <p className={`mt-1 text-gray-600 ${isDialog ? 'text-sm' : 'text-xs md:text-sm'}`}>{meta}</p>}
      {description && (
        <p
          className={`mt-2 border-l-2 border-gray-300 pl-2 italic text-gray-700 ${
            isDialog ? 'text-sm' : 'text-xs md:text-sm line-clamp-3'
          } ${extra}`}
        >
          {description}
        </p>
      )}
      {where && <p className={`mt-2 text-gray-500 ${isDialog ? 'text-sm' : 'text-xs'} ${extra}`}>{where}</p>}
    </>
  );
}

interface CardProps {
  item: SpeakingItem;
  onOpen: () => void;
  dense?: boolean;
}

export default function SpeakingCard({ item, onOpen, dense = false }: CardProps) {
  // Videos show their poster frame; the playable video lives in the viewer.
  const thumb = item.media === 'video' ? item.poster : item.src;

  return (
    <article className="flex h-full flex-col overflow-hidden border-2 border-black bg-white transition duration-300 hover:bg-gray-50">
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`${item.media === 'video' ? 'Play' : 'View'}: ${item.title}`}
        className="relative block aspect-[4/5] w-full shrink-0 cursor-zoom-in border-b-2 border-black bg-gray-100"
      >
        {thumb && <Image src={thumb} alt="" fill sizes={SIZES} className="object-contain" />}
        {item.media === 'video' && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center border-2 border-white bg-black/80 text-white">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        )}
      </button>

      <div className="p-3 md:p-4">
        <SpeakingDetails item={item} dense={dense} />
      </div>
    </article>
  );
}
