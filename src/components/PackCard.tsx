import React from 'react'

export interface Pack {
  id: string
  name: string
  price: number
  image: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  description: string
}

interface PackCardProps {
  pack: Pack
  onClick: (pack: Pack) => void
}

const PackCard: React.FC<PackCardProps> = ({ pack, onClick }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'border-gray-500'
      case 'rare':
        return 'border-pastel-blue'
      case 'epic':
        return 'border-pastel-purple'
      case 'legendary':
        return 'border-pastel-yellow'
      default:
        return 'border-gray-500'
    }
  }

  return (
    <div
      className={`pack-card ${getRarityColor(pack.rarity)}`}
      onClick={() => onClick(pack)}
    >
      <div className="relative mb-3">
        <img
          src={pack.image}
          alt={pack.name}
          className="w-full h-32 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            pack.rarity === 'common' ? 'bg-gray-600 text-white' :
            pack.rarity === 'rare' ? 'bg-pastel-blue text-black' :
            pack.rarity === 'epic' ? 'bg-pastel-purple text-black' :
            'bg-pastel-yellow text-black'
          }`}>
            {pack.rarity.toUpperCase()}
          </span>
        </div>
      </div>
      
      <h3 className="font-bold text-lg mb-1">{pack.name}</h3>
      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{pack.description}</p>
      
      <div className="flex justify-between items-center">
        <span className="text-pastel-pink font-bold text-lg">${pack.price}</span>
        <button className="btn-primary text-sm px-4 py-2">
          Open Pack
        </button>
      </div>
    </div>
  )
}

export default PackCard
