import { Briefcase } from 'lucide-react'
import profile from '../data/profile'

function highlightNumbers(text) {
  const parts = text.split(/(\d+\+[余]?\s*(?:家|个|封|场|位|名)?)/g)
  return parts.map((part, i) => {
    if (/^\d/.test(part)) {
      return <span key={i} className="text-accent font-medium">{part}</span>
    }
    return part
  })
}

export default function Experience() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <Briefcase size={20} className="text-accent shrink-0" />
        <h2 className="text-xl font-medium text-heading dark:text-surface tracking-wide">实习经历</h2>
      </div>
      <div className="panel-accent-bar" />

      <div className="space-y-4">
        {profile.experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl p-5 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-sm font-medium text-heading dark:text-surface">{exp.company}</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted dark:text-slate-400 font-normal">{exp.role}</span>
                <span className="text-xs text-muted/60 dark:text-slate-500 font-light">{exp.period}</span>
              </div>
            </div>
            <p className="text-sm text-muted dark:text-slate-400 font-light leading-relaxed mb-2.5">{exp.summary}</p>
            <ul className="space-y-1.5 text-sm text-muted dark:text-slate-400 font-light leading-relaxed">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent shrink-0 mt-0.5">•</span>
                  <span>{highlightNumbers(b)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
