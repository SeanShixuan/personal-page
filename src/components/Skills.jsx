import { Award } from 'lucide-react'
import profile from '../data/profile'

export default function Skills() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <Award size={20} className="text-accent shrink-0" />
        <h2 className="text-xl font-medium text-heading dark:text-surface tracking-wide">技能与证书</h2>
      </div>
      <div className="panel-accent-bar" />

      <div className="space-y-5">
        {/* Certs */}
        <div className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl p-5 shadow-sm">
          <h3 className="text-xs font-medium text-heading dark:text-surface uppercase tracking-widest mb-3">资格证书</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.certs.map((cert, i) => (
              <span key={i} className="px-3 py-1.5 text-xs font-light bg-accent/10 text-accent rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Skill categories */}
        <div className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl p-5 shadow-sm">
          <h3 className="text-xs font-medium text-heading dark:text-surface uppercase tracking-widest mb-3">专业技能</h3>
          <div className="space-y-3">
            {profile.skills.categories.map((cat, i) => (
              <div key={i}>
                <p className="text-xs text-muted/60 dark:text-slate-500 font-light mb-1.5">{cat.name}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 text-xs font-light bg-accent/10 text-accent rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
