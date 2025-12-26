import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X, Shield } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const [language, setLanguage] = useState('VI')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT ME' },
    { path: '/blog', label: 'BLOG' },
    { path: '/certificates', label: 'CERTIFICATE' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'VI' ? 'EN' : 'VI')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ 
        background: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-heading font-bold gradient-text">
              LVTL
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
                  style={{ 
                    color: isActive ? '#06b6d4' : '#9ca3af'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(to right, #06b6d4, #8b5cf6)' }}
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
            style={{ 
              border: '1px solid rgba(6, 182, 212, 0.3)',
              background: 'rgba(6, 182, 212, 0.1)'
            }}
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">{language}</span>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-cyan-400 transition-colors"
              style={{ background: 'rgba(6, 182, 212, 0.1)' }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
              style={{ borderTop: '1px solid rgba(6, 182, 212, 0.2)' }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
                      style={{ 
                        color: isActive ? '#06b6d4' : '#9ca3af',
                        background: isActive ? 'rgba(6, 182, 212, 0.1)' : 'transparent'
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
