import React, { useState } from 'react'

const Account: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: 'CardMaster123',
    email: 'cardmaster@example.com',
    joinDate: 'January 2024',
    totalPacksOpened: 47,
    favoriteCategory: 'Fantasy',
    notifications: true,
    soundEffects: true,
    autoPlay: false
  })

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, this would save to backend
    alert('Settings saved!')
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">Account</h1>
        <p className="text-gray-400">Manage your profile and preferences</p>
      </div>

      {/* Profile Section */}
      <div className="px-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Profile Information</h2>
            <button
              onClick={handleEdit}
              className="btn-secondary text-sm px-4 py-2"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={userInfo.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-pastel-pink focus:outline-none"
                />
              ) : (
                <p className="text-lg">{userInfo.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-pastel-pink focus:outline-none"
                />
              ) : (
                <p className="text-lg">{userInfo.email}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Member Since
                </label>
                <p className="text-lg">{userInfo.joinDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Packs Opened
                </label>
                <p className="text-lg text-pastel-pink font-bold">{userInfo.totalPacksOpened}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Favorite Category
              </label>
              {isEditing ? (
                <select
                  value={userInfo.favoriteCategory}
                  onChange={(e) => handleInputChange('favoriteCategory', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-pastel-pink focus:outline-none"
                >
                  <option value="Fantasy">Fantasy</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Nature">Nature</option>
                  <option value="Medieval">Medieval</option>
                </select>
              ) : (
                <p className="text-lg">{userInfo.favoriteCategory}</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={handleSave}
                className="btn-primary w-full"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Settings Section */}
      <div className="px-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-6">Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Push Notifications</h3>
                <p className="text-sm text-gray-400">Get notified about new packs and events</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={userInfo.notifications}
                  onChange={(e) => handleInputChange('notifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-pink"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Sound Effects</h3>
                <p className="text-sm text-gray-400">Play sounds when opening packs</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={userInfo.soundEffects}
                  onChange={(e) => handleInputChange('soundEffects', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-pink"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Auto-play Videos</h3>
                <p className="text-sm text-gray-400">Automatically play pack opening animations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={userInfo.autoPlay}
                  onChange={(e) => handleInputChange('autoPlay', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-pink"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-6">Your Stats</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-pink mb-2">47</div>
              <div className="text-sm text-gray-400">Packs Opened</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-blue mb-2">156</div>
              <div className="text-sm text-gray-400">Cards Collected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-purple mb-2">12</div>
              <div className="text-sm text-gray-400">Legendary Cards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pastel-green mb-2">$89.99</div>
              <div className="text-sm text-gray-400">Total Spent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
