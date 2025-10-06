import React from 'react'

type Tab = 'home' | 'packs' | 'games' | 'history' | 'account'

interface NavbarProps {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home' as Tab, label: 'Home', icon: '🏠' },
    { id: 'packs' as Tab, label: 'Packs', icon: '📦' },
    { id: 'games' as Tab, label: 'Games', icon: '🎮' },
    { id: 'history' as Tab, label: 'History', icon: '🕒' },
    { id: 'account' as Tab, label: 'Account', icon: '👤' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 z-50">
      <div className="flex justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'text-pastel-pink bg-gray-800'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
