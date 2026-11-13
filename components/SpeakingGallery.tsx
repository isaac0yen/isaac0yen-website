'use client';
// components/SpeakingGallery.tsx
//
// Lays out the speaking cards and owns the viewer (a native <dialog>: Esc to close,
// focus is trapped and restored, the page behind is inert).
//
//   layout="teaser"  home page. Phone: one swipeable row (next card peeks in).
//                    md+: a centered 3-up grid in a narrow container.
//   layout="gallery" /speaking. Phone: 2-up thumbnails. md: 3-up. lg: 4-up.
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { SpeakingItem } from '../lib/speaking';
import SpeakingCard, { SpeakingDetails } from './SpeakingCard';

interface GalleryProps {
  items: SpeakingItem[];
  layout: 'teaser' | 'gallery';
}

const LAYOUT = {
  teaser: {
    wrapper:
      'flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-4 -mx-4 px-4 pb-1 ' +
      '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden ' +
      'md:mx-auto md:max-w-4xl md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible',
    cell: 'shrink-0 w-[72%] snap-start md:w-auto',
  },
  gallery: {
    wrapper: 'mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4',
    cell: '',
  },
} as const;

const BTN_BASE = 'border-2 border-black px-3 py-1 text-sm font-semibold transition duration-300';
const BTN = `${BTN_BASE} bg-white text-black hover:bg-black hover:text-white`;
const BTN_PRIMARY = `${BTN_BASE} bg-black text-white hover:bg-white hover:text-black`;

export default function SpeakingGallery({ items, layout }: GalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const item = index === null ? null : items[index];
  const { wrapper, cell } = LAYOUT[layout];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden'; // stop the page scrolling behind the viewer
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [index]);

  const step = (dir: 1 | -1) =>
    setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));

  return (
    <>
      <div className={wrapper}>
        {items.map((it, i) => (
          <div key={it.id} className={cell}>
            <SpeakingCard item={it} dense={layout === 'gallery'} onOpen={() => setIndex(i)} />
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Speaking viewer"
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndex(null); // click on the backdrop
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
        className="m-auto max-h-[94vh] w-[min(94vw,34rem)] overflow-auto border-2 border-black bg-white p-0 text-black backdrop:bg-black/75"
      >
        {item && (
          <div>
            {/* Close comes first in the DOM so it gets focus when the viewer opens; `order` places it on the right. */}
            <div className="flex items-center gap-2 border-b-2 border-black p-2">
              <button type="button" onClick={() => setIndex(null)} className={`${BTN_PRIMARY} order-3`}>
                Close
              </button>
              <span className="order-1 mr-auto pl-1 text-sm text-gray-600">
                {(index ?? 0) + 1} / {items.length}
              </span>
              <button type="button" onClick={() => step(-1)} aria-label="Previous" className={`${BTN} order-2`}>
                &lsaquo; Prev
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next" className={`${BTN} order-2`}>
                Next &rsaquo;
              </button>
            </div>

            <div className="bg-gray-100 p-2">
              {item.media === 'video' ? (
                <video
                  key={item.id}
                  controls
                  autoPlay
                  playsInline
                  poster={item.poster}
                  aria-label={item.alt}
                  className="mx-auto block h-auto max-h-[68vh] w-auto max-w-full"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 640px) 34rem, 94vw"
                  className="mx-auto block h-auto max-h-[68vh] w-auto max-w-full"
                />
              )}
            </div>

            <div className="p-4">
              <SpeakingDetails item={item} variant="dialog" />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
