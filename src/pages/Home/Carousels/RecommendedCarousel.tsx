import React from 'react'
import PackCard from '../../../components/PackCard'
import { Pack } from '../../../components/PackCard'
import { recommendedData } from './carouselData'

interface RecommendedCarouselProps {
  onPackClick: (pack: Pack) => void
}

const RecommendedCarousel: React.FC<RecommendedCarouselProps> = ({ onPackClick }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-pastel-blue">Recommended for You</h2>
        <span className="text-sm text-gray-400">Based on your preferences</span>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {recommendedData.map((pack) => (
          <div key={pack.id} className="flex-shrink-0 w-64">
            <PackCard pack={pack} onClick={onPackClick} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedCarousel
