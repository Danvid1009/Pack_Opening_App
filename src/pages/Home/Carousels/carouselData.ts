import { Pack } from '../../../components/PackCard'

export const justPackedData: Pack[] = [
  {
    id: '1',
    name: 'Mystic Legends Pack',
    price: 4.99,
    image: '/placeholder-pack.png',
    rarity: 'legendary',
    description: 'Contains rare mystical creatures and powerful spells from ancient times.'
  },
  {
    id: '2',
    name: 'Cyber Warriors Pack',
    price: 3.99,
    image: '/placeholder-pack.png',
    rarity: 'epic',
    description: 'Futuristic warriors and advanced technology cards for the modern battlefield.'
  },
  {
    id: '3',
    name: 'Nature\'s Call Pack',
    price: 2.99,
    image: '/placeholder-pack.png',
    rarity: 'rare',
    description: 'Connect with nature through these elemental cards and forest creatures.'
  }
]

export const recommendedData: Pack[] = [
  {
    id: '4',
    name: 'Dragon\'s Hoard Pack',
    price: 5.99,
    image: '/placeholder-pack.png',
    rarity: 'legendary',
    description: 'Treasures and dragons await in this premium collection pack.'
  },
  {
    id: '5',
    name: 'Space Explorers Pack',
    price: 3.49,
    image: '/placeholder-pack.png',
    rarity: 'epic',
    description: 'Journey through the cosmos with these interstellar adventure cards.'
  },
  {
    id: '6',
    name: 'Medieval Knights Pack',
    price: 2.49,
    image: '/placeholder-pack.png',
    rarity: 'rare',
    description: 'Honor and chivalry in every card from the age of knights.'
  },
  {
    id: '7',
    name: 'Ocean Depths Pack',
    price: 3.99,
    image: '/placeholder-pack.png',
    rarity: 'epic',
    description: 'Dive deep into the mysteries of the ocean with these aquatic cards.'
  }
]

export const categoryData = [
  {
    id: 'fantasy',
    name: 'Fantasy',
    icon: '🧙‍♂️',
    packCount: 12,
    color: 'pastel-purple'
  },
  {
    id: 'sci-fi',
    name: 'Sci-Fi',
    icon: '🚀',
    packCount: 8,
    color: 'pastel-blue'
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: '🌿',
    packCount: 15,
    color: 'pastel-green'
  },
  {
    id: 'medieval',
    name: 'Medieval',
    icon: '⚔️',
    packCount: 10,
    color: 'pastel-orange'
  }
]
