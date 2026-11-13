// components/BrandsCloud.tsx
//
// A real CSS grid that is made to LOOK scattered:
//   - every logo is sized by equal visual AREA (not equal width/height), then capped, so a long
//     wordmark and a round crest carry the same weight and nothing gets big;
//   - each logo is nudged by a fixed, hand-tuned offset (OFFSETS) so rows do not line up.
// The offsets are constants, not Math.random(), so server and client render the same thing
// (no hydration mismatch, no layout shift) and the layout is identical on every visit.
//
// Responsive: 3 columns on phones, 4 from sm, 6 from lg. Sizes and nudges are multiplied by --k
// (0.72 / 0.85 / 1), so nothing collides on narrow screens. See lib/brands.ts for how the
// logo count interacts with the 3 / 4 / 6 column rows.
import Image from 'next/image';
import brands, { type Brand } from '../lib/brands';

// Visual size budget (px at --k: 1). Every logo gets AREA px² of ink, capped by MAX_W x MAX_H.
const AREA = 3600;
const MAX_W = 132;
const MAX_H = 56;

// [dx, dy] in px at --k: 1. Mixed directions, small enough that neighbours never touch.
const OFFSETS: ReadonlyArray<readonly [number, number]> = [
  [-8, -10], [10, 8], [-12, 6], [6, -14], [12, 10], [-6, -6],
  [8, 12], [-10, -12], [4, 10], [-12, 4], [10, -8], [-4, 14], [6, -10],
];

// 3, 4 and 6 columns all leave exactly one logo on the last row when count % 12 === 1.
// Put it in the middle: col 2 of 3 / cols 2-3 of 4 / cols 3-4 of 6 (all exactly centred).
const CENTER_LAST = 'col-start-2 sm:col-span-2 sm:col-start-2 lg:col-span-2 lg:col-start-3';

function displaySize(b: Brand) {
  const ratio = b.width / b.height;
  const area = AREA * (b.weight ?? 1);
  const w = Math.sqrt(area * ratio);
  const h = Math.sqrt(area / ratio);
  const k = Math.min(1, MAX_W / w, MAX_H / h);
  return { w: Math.round(w * k), h: Math.round(h * k) };
}

export default function BrandsCloud() {
  return (
    <ul
      aria-label="Brands worked with"
      className={
        'mx-auto grid max-w-5xl grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 ' +
        'auto-rows-[68px] sm:auto-rows-[78px] lg:auto-rows-[84px] gap-x-2 ' +
        '[--k:0.72] sm:[--k:0.85] lg:[--k:1]'
      }
    >
      {brands.map((brand, i) => {
        const { w, h } = displaySize(brand);
        const [dx, dy] = OFFSETS[i % OFFSETS.length];
        const isLoneLast = brands.length % 12 === 1 && i === brands.length - 1;
        return (
          <li
            key={brand.slug}
            className={`flex items-center justify-center ${isLoneLast ? CENTER_LAST : ''}`}
            style={{ '--dx': dx, '--dy': dy } as React.CSSProperties}
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              style={{ '--w': w, '--h': h } as React.CSSProperties}
              className={
                'object-contain transition-transform duration-300 hover:scale-110 ' +
                'w-[calc(var(--w)*var(--k)*1px)] h-[calc(var(--h)*var(--k)*1px)] ' +
                'translate-x-[calc(var(--dx)*var(--k)*1px)] translate-y-[calc(var(--dy)*var(--k)*1px)]'
              }
            />
          </li>
        );
      })}
    </ul>
  );
}
