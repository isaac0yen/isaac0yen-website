// lib/brands.ts
//
// "Brands worked with" logos shown under the Career section.
// ORDER MATTERS: it is the reading order, and it is tuned so wide wordmarks and tall
// crests alternate. A multiple of 12 fills whole rows at 3, 4 and 6 columns. One more than a
// multiple of 12 (13 now) is also handled: the last logo is centred on its own row.
// Any other count leaves a short last row that sits left-aligned.
//
// width/height are the real pixel dimensions of the files in public/assets/brands
// (measured with `imgstat inspect public/assets/brands --json`). If you swap a logo,
// re-run imgstat and update them. The files are trimmed, transparent WebP at 2x display size.
//
// weight nudges a logo's optical size (default 1). Raise it if a logo looks too small next to
// its neighbours, lower it if it looks heavy. The component sizes logos by AREA, not width.

export interface Brand {
  slug: string;
  name: string;
  src: string;
  width: number;
  height: number;
  weight?: number;
}

const brands: Brand[] = [
  { slug: 'fuse-varsity', name: 'Fuse Varsity', src: '/assets/brands/fuse-varsity.webp', width: 280, height: 34 },
  { slug: 'unilorin', name: 'University of Ilorin', src: '/assets/brands/unilorin.webp', width: 98, height: 120 },
  { slug: 'qucoon', name: 'Qucoon', src: '/assets/brands/qucoon.webp', width: 280, height: 80 },
  { slug: 'hult-prize', name: 'EF Hult Prize', src: '/assets/brands/hult-prize.webp', width: 79, height: 95 },
  { slug: 'my-genius', name: 'My Genius', src: '/assets/brands/my-genius.webp', width: 227, height: 120 },
  { slug: 'ubulu-africa', name: 'UbuluAfrica', src: '/assets/brands/ubulu-africa.webp', width: 280, height: 63 },
  { slug: 'bitscard', name: 'Bitscard', src: '/assets/brands/bitscard.webp', width: 280, height: 105 },
  { slug: 'nithub', name: 'NITHUB, UNILAG', src: '/assets/brands/nithub.webp', width: 280, height: 100 },
  { slug: 'mustard', name: 'Mustard.ng', src: '/assets/brands/mustard.webp', width: 280, height: 47 },
  {
    slug: 'unilorin-innovation-hub',
    name: 'UNILORIN Innovation Hub',
    src: '/assets/brands/unilorin-innovation-hub.webp',
    width: 91,
    height: 120,
  },
  { slug: 'syllabux', name: 'Syllabux', src: '/assets/brands/syllabux.webp', width: 280, height: 65 },
  { slug: 'sapif', name: 'SAPIF', src: '/assets/brands/sapif.webp', width: 120, height: 120 },
  // Last item: when the count leaves ONE logo alone on the final row (13, 25, ...), BrandsCloud centres it.
  { slug: 'accomplitech', name: 'Accomplitech', src: '/assets/brands/accomplitech.webp', width: 123, height: 120 },
];

export default brands;
