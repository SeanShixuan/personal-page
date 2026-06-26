import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Campus from './components/Campus'
import Skills from './components/Skills'
import Contact from './components/Contact'
import profile from './data/profile'

const tabComponents = {
  about: About,
  education: Education,
  experience: Experience,
  campus: Campus,
  skills: Skills,
  contact: Contact,
}

export default function App() {
  const [activeTab, setActiveTab] = useState('about')
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [transitioning, setTransitioning] = useState(false)
  const contentRef = useRef(null)
  const prevTabRef = useRef('about')

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const switchTab = (tab) => {
    if (tab === activeTab) return
    prevTabRef.current = activeTab
    setTransitioning(true)
    setTimeout(() => {
      setActiveTab(tab)
      setTransitioning(false)
      if (contentRef.current) {
        contentRef.current.scrollTop = 0
      }
    }, 200)
  }

  const toggleDark = () => setDark((d) => !d)

  const ActiveComponent = tabComponents[activeTab]

  // Mobile tab bar
  const MobileTabs = () => (
    <div className="md:hidden border-b border-border dark:border-dark-border bg-surface dark:bg-dark-surface">
      <div className="mobile-tabs-scroll flex gap-1 px-4 py-2 overflow-x-auto">
        {profile.nav.map((item) => (
          <button
            key={item.tab}
            onClick={() => switchTab(item.tab)}
            className={`shrink-0 px-4 py-2 rounded-lg text-xs font-light tracking-wide transition-all duration-200 ${
              activeTab === item.tab
                ? 'bg-accent text-white shadow-sm'
                : 'text-muted dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-card'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )

  // Mobile header
  const MobileHeader = () => (
    <div className="md:hidden text-center pt-6 pb-3 px-4 bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border">
      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden ring-2 ring-border dark:ring-dark-border shadow-sm">
        <img
          src={import.meta.env.BASE_URL + 'avatar.jpg'}
          alt={profile.name}
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      <h1 className="mt-3 text-base font-medium text-heading dark:text-surface">{profile.name}</h1>
      <p className="text-xs text-muted dark:text-slate-400 mt-0.5 font-light">{profile.title}</p>
      <div className="flex items-center justify-center gap-3 mt-3">
        <a href="mailto:727890476@qq.com" className="text-xs text-muted dark:text-slate-400 hover:text-accent transition-colors">
          727890476@qq.com
        </a>
        <button onClick={toggleDark} className="text-xs text-muted dark:text-slate-400 hover:text-accent transition-colors">
          {dark ? '浅色' : '深色'}
        </button>
      </div>
    </div>
  )

  return (
    <div className="bg-surface dark:bg-dark text-heading dark:text-surface font-light transition-colors duration-300">
      {/* Desktop Layout */}
      <div className="hidden md:flex h-screen">
        {/* Sidebar - 25% */}
        <div className="w-[280px] xl:w-[320px] shrink-0">
          <Sidebar
            activeTab={activeTab}
            onTabChange={switchTab}
            dark={dark}
            onToggleDark={toggleDark}
          />
        </div>

        {/* Content Panel - 75% */}
        <div
          ref={contentRef}
          className="flex-1 content-scroll overflow-y-auto"
        >
          <div className="max-w-3xl mx-auto px-8 py-6 min-h-full">
            <div className={`tab-panel-enter ${!transitioning ? 'tab-panel-active' : ''}`}>
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex flex-col">
        <MobileHeader />
        <MobileTabs />
        <div className="flex-1 px-4 py-4">
          <div className={`tab-panel-enter ${!transitioning ? 'tab-panel-active' : ''}`}>
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
