import React from 'react'

interface PackOpening {
  id: string
  date: string
  packName: string
  cards: {
    name: string
    rarity: 'common' | 'rare' | 'epic' | 'legendary'
  }[]
  totalValue: number
}

const History: React.FC = () => {
  const packOpenings: PackOpening[] = [
    {
      id: '1',
      date: '2024-01-15',
      packName: 'Mystic Legends Pack',
      cards: [
        { name: 'Ancient Dragon', rarity: 'legendary' },
        { name: 'Fire Spell', rarity: 'rare' },
        { name: 'Mystic Crystal', rarity: 'epic' },
        { name: 'Forest Guardian', rarity: 'common' },
        { name: 'Lightning Bolt', rarity: 'common' }
      ],
      totalValue: 12.99
    },
    {
      id: '2',
      date: '2024-01-14',
      packName: 'Cyber Warriors Pack',
      cards: [
        { name: 'Cyber Ninja', rarity: 'epic' },
        { name: 'Plasma Rifle', rarity: 'rare' },
        { name: 'Data Shield', rarity: 'common' },
        { name: 'Quantum Blade', rarity: 'rare' },
        { name: 'Neural Network', rarity: 'common' }
      ],
      totalValue: 8.49
    },
    {
      id: '3',
      date: '2024-01-13',
      packName: 'Nature\'s Call Pack',
      cards: [
        { name: 'Tree Spirit', rarity: 'rare' },
        { name: 'Wind Gust', rarity: 'common' },
        { name: 'Earth Elemental', rarity: 'epic' },
        { name: 'Flower Bloom', rarity: 'common' },
        { name: 'Mountain Peak', rarity: 'rare' }
      ],
      totalValue: 6.99
    },
    {
      id: '4',
      date: '2024-01-12',
      packName: 'Dragon\'s Hoard Pack',
      cards: [
        { name: 'Golden Dragon', rarity: 'legendary' },
        { name: 'Treasure Chest', rarity: 'epic' },
        { name: 'Ancient Coin', rarity: 'rare' },
        { name: 'Magic Gem', rarity: 'common' },
        { name: 'Crown of Kings', rarity: 'epic' }
      ],
      totalValue: 15.99
    },
    {
      id: '5',
      date: '2024-01-11',
      packName: 'Space Explorers Pack',
      cards: [
        { name: 'Alien Commander', rarity: 'epic' },
        { name: 'Space Station', rarity: 'rare' },
        { name: 'Rocket Ship', rarity: 'common' },
        { name: 'Stellar Dust', rarity: 'common' },
        { name: 'Cosmic Energy', rarity: 'rare' }
      ],
      totalValue: 7.49
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-400'
      case 'rare':
        return 'text-pastel-blue'
      case 'epic':
        return 'text-pastel-purple'
      case 'legendary':
        return 'text-pastel-yellow'
      default:
        return 'text-gray-400'
    }
  }

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return '⚪'
      case 'rare':
        return '🔵'
      case 'epic':
        return '🟣'
      case 'legendary':
        return '🟡'
      default:
        return '⚪'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">Pack History</h1>
        <p className="text-gray-400">Your recent pack openings and discoveries</p>
      </div>

      {/* History List */}
      <div className="px-6">
        <div className="space-y-4">
          {packOpenings.map((opening) => (
            <div key={opening.id} className="card">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{opening.packName}</h3>
                  <p className="text-gray-400 text-sm">{opening.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-pastel-pink font-bold text-lg">${opening.totalValue}</p>
                  <p className="text-gray-400 text-sm">Total Value</p>
                </div>
              </div>
              
              <div className="mb-3">
                <h4 className="font-semibold mb-2 text-pastel-green">Cards Found:</h4>
                <div className="flex flex-wrap gap-2">
                  {opening.cards.map((card, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                        card.rarity === 'common' ? 'bg-gray-700' :
                        card.rarity === 'rare' ? 'bg-pastel-blue/20' :
                        card.rarity === 'epic' ? 'bg-pastel-purple/20' :
                        'bg-pastel-yellow/20'
                      }`}
                    >
                      <span>{getRarityIcon(card.rarity)}</span>
                      <span className={getRarityColor(card.rarity)}>{card.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{opening.cards.length} cards total</span>
                <span>
                  {opening.cards.filter(c => c.rarity === 'legendary').length} legendary, {' '}
                  {opening.cards.filter(c => c.rarity === 'epic').length} epic, {' '}
                  {opening.cards.filter(c => c.rarity === 'rare').length} rare
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History
