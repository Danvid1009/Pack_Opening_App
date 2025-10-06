import React, { useState } from 'react'
import PackInfoModal from '../../components/PackInfoModal'
import { Pack } from '../../components/PackCard'
import JustPackedCarousel from './Carousels/JustPackedCarousel'
import RecommendedCarousel from './Carousels/RecommendedCarousel'
import CategoryCarousel from './Carousels/CategoryCarousel'

const Home: React.FC = () => {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePackClick = (pack: Pack) => {
    setSelectedPack(pack)
    setIsModalOpen(true)
  }

  const handleCategoryClick = (categoryId: string) => {
    // For now, just show an alert. In a real app, this would navigate to a category page
    alert(`Category ${categoryId} clicked! This would show packs in this category.`)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPack(null)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-400">Ready to discover amazing cards?</p>
      </div>

      {/* Content */}
      <div className="px-6">
        <JustPackedCarousel onPackClick={handlePackClick} />
        <RecommendedCarousel onPackClick={handlePackClick} />
        <CategoryCarousel onCategoryClick={handleCategoryClick} />
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

export default Home
