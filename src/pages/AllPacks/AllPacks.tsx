import React, { useState } from 'react'
import PackCard from '../../components/PackCard'
import PackInfoModal from '../../components/PackInfoModal'
import { Pack } from '../../components/PackCard'

const AllPacks: React.FC = () => {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Extended mock data for All Packs page
  const allPacksData: Pack[] = [
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
    },
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
    },
    {
      id: '8',
      name: 'Steampunk Inventors Pack',
      price: 4.49,
      image: '/placeholder-pack.png',
      rarity: 'epic',
      description: 'Gears, steam, and innovation in this Victorian-era inspired collection.'
    },
    {
      id: '9',
      name: 'Elemental Masters Pack',
      price: 3.99,
      image: '/placeholder-pack.png',
      rarity: 'rare',
      description: 'Master the elements with these powerful elemental cards.'
    },
    {
      id: '10',
      name: 'Shadow Realm Pack',
      price: 4.99,
      image: '/placeholder-pack.png',
      rarity: 'legendary',
      description: 'Dark forces and shadow magic await in this mysterious pack.'
    },
    {
      id: '11',
      name: 'Crystal Guardians Pack',
      price: 2.99,
      image: '/placeholder-pack.png',
      rarity: 'rare',
      description: 'Protect the realm with these crystal-powered guardian cards.'
    },
    {
      id: '12',
      name: 'Time Travelers Pack',
      price: 5.49,
      image: '/placeholder-pack.png',
      rarity: 'legendary',
      description: 'Journey through time with these temporal adventure cards.'
    }
  ]

  const handlePackClick = (pack: Pack) => {
    setSelectedPack(pack)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPack(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">All Packs</h1>
        <p className="text-gray-400">Discover all available card packs</p>
      </div>

      {/* Packs Grid */}
      <div className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPacksData.map((pack) => (
            <PackCard
              key={pack.id}
              pack={pack}
              onClick={handlePackClick}
            />
          ))}
        </div>
      </div>

      {/* Pack Info Modal */}
      <PackInfoModal
        pack={selectedPack}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default AllPacks
