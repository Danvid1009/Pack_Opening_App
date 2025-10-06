import React from 'react'

const Games: React.FC = () => {
  const games = [
    {
      id: '1',
      name: 'Card Battle Arena',
      description: 'Strategic card battles with your collected cards',
      icon: '⚔️',
      color: 'pastel-pink',
      status: 'Available'
    },
    {
      id: '2',
      name: 'Pack Opening Simulator',
      description: 'Practice opening packs and discover new cards',
      icon: '🎁',
      color: 'pastel-blue',
      status: 'Available'
    },
    {
      id: '3',
      name: 'Collection Manager',
      description: 'Organize and trade your card collection',
      icon: '📚',
      color: 'pastel-green',
      status: 'Coming Soon'
    },
    {
      id: '4',
      name: 'Daily Challenges',
      description: 'Complete daily tasks to earn rewards',
      icon: '🎯',
      color: 'pastel-purple',
      status: 'Coming Soon'
    }
  ]

  const getColorClass = (color: string) => {
    switch (color) {
      case 'pastel-pink':
        return 'bg-pastel-pink/20 border-pastel-pink/50 text-pastel-pink'
      case 'pastel-blue':
        return 'bg-pastel-blue/20 border-pastel-blue/50 text-pastel-blue'
      case 'pastel-green':
        return 'bg-pastel-green/20 border-pastel-green/50 text-pastel-green'
      case 'pastel-purple':
        return 'bg-pastel-purple/20 border-pastel-purple/50 text-pastel-purple'
      default:
        return 'bg-gray-800 border-gray-700 text-gray-300'
    }
  }

  const handleGameClick = (gameId: string) => {
    if (gameId === '1' || gameId === '2') {
      alert(`Starting ${games.find(g => g.id === gameId)?.name}! This would launch the game.`)
    } else {
      alert('This game is coming soon!')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">Games</h1>
        <p className="text-gray-400">Play with your collected cards</p>
      </div>

      {/* Games Grid */}
      <div className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => handleGameClick(game.id)}
              className={`${getColorClass(game.color)} rounded-xl p-6 border-2 cursor-pointer hover:scale-105 transition-transform ${
                game.status === 'Coming Soon' ? 'opacity-60' : ''
              }`}
            >
              <div className="text-5xl mb-4">{game.icon}</div>
              <h3 className="text-xl font-bold mb-2">{game.name}</h3>
              <p className="text-sm opacity-75 mb-4">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  game.status === 'Available' 
                    ? 'bg-pastel-green text-black' 
                    : 'bg-gray-600 text-white'
                }`}>
                  {game.status}
                </span>
                {game.status === 'Available' && (
                  <span className="text-sm">Tap to play →</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Games
