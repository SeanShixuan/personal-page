import { User } from 'lucide-react'
import profile from '../data/profile'

export default function About() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <User size={20} className="text-accent shrink-0" />
        <h2 className="text-xl font-medium text-heading dark:text-surface tracking-wide">关于我</h2>
      </div>
      <div className="panel-accent-bar" />

      <div className="space-y-4 text-sm text-muted dark:text-slate-400 font-light leading-relaxed">
        <p>{profile.about.intro}</p>

        <div className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl p-5 shadow-sm">
          <h3 className="text-sm font-medium text-heading dark:text-surface mb-2">{profile.about.strengths.title}</h3>
          <p>{profile.about.strengths.content}</p>
        </div>

        <div className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl p-5 shadow-sm">
          <h3 className="text-sm font-medium text-heading dark:text-surface mb-2">{profile.about.qualities.title}</h3>
          <p>{profile.about.qualities.content}</p>
        </div>
      </div>
    </section>
  )
}
