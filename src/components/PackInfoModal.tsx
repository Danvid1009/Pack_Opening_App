import React, { useState } from 'react'
import { Pack } from './PackCard'
import VideoPlayer from './VideoPlayer'

interface PackInfoModalProps {
  pack: Pack | null
  isOpen: boolean
  onClose: () => void
}

const PackInfoModal: React.FC<PackInfoModalProps> = ({ pack, isOpen, onClose }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  if (!isOpen || !pack) return null

  const handleOpenPack = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoEnded = () => {
    setIsVideoPlaying(false)
  }

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

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{pack.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Pack Image */}
          <div className="relative mb-4">
            {isVideoPlaying ? (
              <VideoPlayer
                src="/pack-opening.mp4"
                isPlaying={isVideoPlaying}
                onEnded={handleVideoEnded}
                className="w-full h-48"
              />
            ) : (
              <img
                src={pack.image}
                alt={pack.name}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <div className="absolute top-3 right-3">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                pack.rarity === 'common' ? 'bg-gray-600 text-white' :
                pack.rarity === 'rare' ? 'bg-pastel-blue text-black' :
                pack.rarity === 'epic' ? 'bg-pastel-purple text-black' :
                'bg-pastel-yellow text-black'
              }`}>
                {pack.rarity.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Pack Info */}
          <div className="mb-6">
            <p className="text-gray-300 mb-4">{pack.description}</p>
            <div className="flex justify-between items-center">
              <span className={`text-2xl font-bold ${getRarityColor(pack.rarity)}`}>
                ${pack.price}
              </span>
              <div className="text-sm text-gray-400">
                <p>Rarity: <span className={getRarityColor(pack.rarity)}>{pack.rarity}</span></p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleOpenPack}
              disabled={isVideoPlaying}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVideoPlaying ? 'Opening Pack...' : 'Open Pack'}
            </button>
            <button
              onClick={onClose}
              className="w-full btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackInfoModal
