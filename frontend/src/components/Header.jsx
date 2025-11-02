import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()

  const connectWallet = async () => {
    if (window.freighter) {
      try {
        const publicKey = await window.freighter.getPublicKey()
        setAddress(publicKey)
        setConnected(true)
      } catch (error) {
        alert('Failed to connect wallet')
      }
    } else {
      alert('Please install Freighter wallet')
    }
  }

  const disconnectWallet = () => {
    setConnected(false)
    setAddress('')
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Rental Vault</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tenant" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/tenant') 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Tenant
            </Link>
            <Link 
              to="/landlord" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/landlord') 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Landlord
            </Link>
            <Link 
              to="/create-lease" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive('/create-lease') 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              Create Lease
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {!connected ? (
              <button onClick={connectWallet} className="btn btn-primary hidden md:inline-flex">
                Connect Wallet
              </button>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                    {address.slice(0, 6)}...{address.slice(-4)}
                  </span>
                </div>
                <button onClick={disconnectWallet} className="btn btn-outline btn-sm">
                  Disconnect
                </button>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg ${
                  isActive('/') 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/tenant" 
                className={`px-4 py-2 rounded-lg ${
                  isActive('/tenant') 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Tenant
              </Link>
              <Link 
                to="/landlord" 
                className={`px-4 py-2 rounded-lg ${
                  isActive('/landlord') 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Landlord
              </Link>
              <Link 
                to="/create-lease" 
                className={`px-4 py-2 rounded-lg ${
                  isActive('/create-lease') 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Create Lease
              </Link>
              {!connected ? (
                <button onClick={connectWallet} className="btn btn-primary mt-4">
                  Connect Wallet
                </button>
              ) : (
                <div className="mt-4 space-y-2">
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
                    <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
                      {address.slice(0, 6)}...{address.slice(-4)}
                    </span>
                  </div>
                  <button onClick={disconnectWallet} className="btn btn-outline w-full">
                    Disconnect
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
