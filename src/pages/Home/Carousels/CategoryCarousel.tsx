import React from 'react'
import { categoryData } from './carouselData'

interface CategoryCarouselProps {
  onCategoryClick: (categoryId: string) => void
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ onCategoryClick }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'pastel-purple':
        return 'bg-pastel-purple/20 border-pastel-purple/50 text-pastel-purple'
      case 'pastel-blue':
        return 'bg-pastel-blue/20 border-pastel-blue/50 text-pastel-blue'
      case 'pastel-green':
        return 'bg-pastel-green/20 border-pastel-green/50 text-pastel-green'
      case 'pastel-orange':
        return 'bg-pastel-orange/20 border-pastel-orange/50 text-pastel-orange'
      default:
        return 'bg-gray-800 border-gray-700 text-gray-300'
    }
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-pastel-green">Categories</h2>
        <span className="text-sm text-gray-400">Explore by theme</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {categoryData.map((category) => (
          <div
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`${getColorClass(category.color)} rounded-xl p-6 border-2 cursor-pointer hover:scale-105 transition-transform`}
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h3 className="font-bold text-lg mb-2">{category.name}</h3>
            <p className="text-sm opacity-75">{category.packCount} packs available</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryCarousel
