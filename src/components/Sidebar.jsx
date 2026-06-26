import { Mail, Sun, Moon } from 'lucide-react'
import profile from '../data/profile'

export default function Sidebar({ activeTab, onTabChange, dark, onToggleDark }) {
  return (
    <aside className="sidebar-atmosphere relative flex flex-col h-full px-6 py-8 border-r border-border dark:border-dark-border bg-surface/70 dark:bg-dark-surface/70 backdrop-blur-sm">
      {/* Top: Avatar + Name + Title */}
      <div className="text-center shrink-0">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-border dark:ring-dark-border shadow-sm">
          <img
            src={import.meta.env.BASE_URL + 'avatar.jpg'}
            alt={profile.name}
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        <h1 className="mt-4 text-lg font-medium text-heading dark:text-surface tracking-wide">
          {profile.name}
        </h1>
        <p className="text-xs text-muted dark:text-slate-400 mt-1 font-light leading-relaxed">
          {profile.title}
        </p>
        <p className="text-xs text-muted/70 dark:text-slate-500 mt-2 font-light leading-relaxed max-w-[240px] mx-auto">
          {profile.bio}
        </p>
      </div>

      {/* Middle: Tab Navigation */}
      <nav className="flex-1 flex flex-col gap-1.5 mt-8 overflow-y-auto">
        {profile.nav.map((item) => (
          <button
            key={item.tab}
            onClick={() => onTabChange(item.tab)}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-light tracking-wide transition-all duration-200 ${
              activeTab === item.tab
                ? 'bg-accent text-white shadow-sm shadow-accent/20'
                : 'bg-transparent text-muted dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-card'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom: Dark mode toggle + Email */}
      <div className="shrink-0 mt-6 pt-4 border-t border-border dark:border-dark-border space-y-3">
        <button
          onClick={onToggleDark}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted dark:text-slate-400 hover:text-accent transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-dark-card"
        >
          {dark ? <Sun size={14} /> : <Moon size={14} />}
          {dark ? '浅色模式' : '深色模式'}
        </button>
        <a
          href="mailto:727890476@qq.com"
          className="flex items-center gap-2 px-3 py-2 text-xs text-muted dark:text-slate-400 hover:text-accent transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-dark-card"
        >
          <Mail size={14} />
          <span className="truncate">727890476@qq.com</span>
        </a>
        <p className="text-[11px] text-muted/50 dark:text-slate-600 text-center font-light">
          {profile.footer}
        </p>
      </div>
    </aside>
  )
}
