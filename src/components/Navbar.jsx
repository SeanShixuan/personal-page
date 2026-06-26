import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'
import profile from '../data/profile'

export default function Navbar({ dark, onToggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const activeMap = { '#about': 'about', '#education': 'education', '#skills': 'skills', '#contact': 'contact' }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/80 dark:bg-dark/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-medium tracking-wide text-dark dark:text-cream">
          {profile.name} <span className="font-light text-gray-400">{profile.englishName}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {profile.nav.map((link) => {
            const sectionId = activeMap[link.href]
            const isActive = active === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  isActive ? 'text-accent font-medium' : 'text-dark/70 dark:text-cream/60 hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={onToggleDark}
            className="text-dark/50 dark:text-cream/50 hover:text-accent transition-colors text-sm"
            aria-label="切换深色模式"
          >
            {dark ? '☀' : '☾'}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onToggleDark}
            className="text-dark/50 dark:text-cream/50 hover:text-accent transition-colors text-sm"
            aria-label="切换深色模式"
          >
            {dark ? '☀' : '☾'}
          </button>
          <button
            className="text-dark/70 dark:text-cream/70 hover:text-accent transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-64 bg-cream dark:bg-dark shadow-lg animate-slide-in">
            <div className="flex justify-end p-4">
              <button onClick={() => setMenuOpen(false)} className="text-dark/70 dark:text-cream/70 hover:text-accent transition-colors">
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-8 pt-4 text-lg font-light tracking-wide">
              {profile.nav.map((link) => {
                const sectionId = activeMap[link.href]
                const isActive = active === sectionId
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-accent font-medium' : 'text-dark/70 dark:text-cream/70 hover:text-accent'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
