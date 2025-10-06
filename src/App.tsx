import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import AllPacks from './pages/AllPacks/AllPacks'
import Games from './pages/Games/Games'
import History from './pages/History/History'
import Account from './pages/Account/Account'

type Tab = 'home' | 'packs' | 'games' | 'history' | 'account'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home')

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'packs':
        return <AllPacks />
      case 'games':
        return <Games />
      case 'history':
        return <History />
      case 'account':
        return <Account />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <main className="pb-20">
        {renderPage()}
      </main>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
