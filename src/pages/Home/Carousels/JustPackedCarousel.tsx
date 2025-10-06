import React from 'react'
import PackCard from '../../../components/PackCard'
import { Pack } from '../../../components/PackCard'
import { justPackedData } from './carouselData'

interface JustPackedCarouselProps {
  onPackClick: (pack: Pack) => void
}

const JustPackedCarousel: React.FC<JustPackedCarouselProps> = ({ onPackClick }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-pastel-pink">Just Packed</h2>
        <span className="text-sm text-gray-400">Recently opened</span>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {justPackedData.map((pack) => (
          <div key={pack.id} className="flex-shrink-0 w-64">
            <PackCard pack={pack} onClick={onPackClick} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default JustPackedCarousel
