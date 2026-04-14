export interface Product {
  slug: string;
  title: string;
  description: string;
  asin: string;
  imageUrl: string;
  price: string;
  rating: number;
  features: string[];
  category: string;
}

export const AMAZON_TAG = 'pestcontrolins-20';

export function getAffiliateUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;
}

export function getGoUrl(slug: string): string {
  return `/go/${slug}`;
}

export const products: Product[] = [
  {
    slug: 'ortho-home-defense-spray',
    title: 'Ortho Home Defense Insect Killer',
    description: 'Creates a long-lasting bug barrier indoors and outdoors. Kills ants, roaches, spiders, and over 130 other insects on contact.',
    asin: 'B000BWY3S6',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    price: '$$',
    rating: 4.6,
    features: ['Kills 130+ insects', 'Indoor/outdoor use', 'Comfort wand included', 'Odor-free formula'],
    category: 'Insect Killers',
  },
  {
    slug: 'thermacell-mosquito-repellent',
    title: 'Thermacell Radius Zone Mosquito Repellent',
    description: 'Creates a 20-foot mosquito protection zone with no spray, no smoke, and no DEET. Rechargeable with up to 6.5 hours of repellency per refill.',
    asin: 'B07N1GBV53',
    imageUrl: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
    price: '$$$',
    rating: 4.3,
    features: ['20-ft protection zone', 'DEET-free', 'Rechargeable', 'Silent operation'],
    category: 'Mosquito Control',
  },
  {
    slug: 'victor-electronic-rat-trap',
    title: 'Victor Electronic Rat Trap',
    description: 'Kills rats quickly and humanely with a high-voltage shock. Easy to set, bait, and clean — no touching the rodent.',
    asin: 'B00000JCZE',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    price: '$$',
    rating: 4.4,
    features: ['Kills instantly', 'Easy clean-out', 'No-touch disposal', 'Reusable'],
    category: 'Rodent Control',
  },
  {
    slug: 'terro-ant-bait-stations',
    title: 'TERRO T300B Liquid Ant Bait Stations',
    description: 'Pre-filled ant bait stations attract and kill common household ants. Works on fire ants, pavement ants, Argentine ants, and more.',
    asin: 'B00ANCVXIO',
    imageUrl: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=400&fit=crop',
    price: '$',
    rating: 4.7,
    features: ['Ready to use', 'No mess bait', 'Kills entire colony', 'Indoor/outdoor use'],
    category: 'Ant Control',
  },
  {
    slug: 'bed-bug-killer-spray',
    title: 'Bedlam Plus Bed Bug Spray',
    description: 'Professional-strength bed bug spray that kills bed bugs, their eggs, and resistant strains on contact. Long-lasting residual protection up to 2 weeks.',
    asin: 'B00KJ4KVPQ',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    price: '$$',
    rating: 4.2,
    features: ['Kills eggs too', '2-week residual', 'Water-based formula', 'Non-staining'],
    category: 'Bed Bug Control',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
