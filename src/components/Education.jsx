import { GraduationCap, Trophy } from 'lucide-react'
import profile from '../data/profile'

export default function Education() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap size={20} className="text-accent shrink-0" />
        <h2 className="text-xl font-medium text-heading dark:text-surface tracking-wide">教育经历</h2>
      </div>
      <div className="panel-accent-bar" />

      <div className="space-y-4">
        {profile.education.map((edu) => (
          <div
            key={edu.id}
            className="bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${edu.highlight ? 'bg-accent' : 'bg-muted dark:bg-slate-500'}`} />
              <div className="space-y-1 min-w-0">
                <span className={`text-xs font-medium tracking-wide ${edu.highlight ? 'text-accent' : 'text-muted dark:text-slate-400'}`}>
                  {edu.period}
                </span>
                <h3 className="text-sm font-medium text-heading dark:text-surface">
                  {edu.school}
                  <span className="text-muted/60 dark:text-slate-500 font-light"> | {edu.department} | {edu.degree}</span>
                </h3>
                {edu.details.map((d, i) => (
                  <p key={i} className="text-sm text-muted dark:text-slate-400 font-light">{d}</p>
                ))}
                {edu.awards && (
                  <p className="text-sm text-muted dark:text-slate-400 font-light flex items-center gap-1.5">
                    <Trophy size={13} className="text-accent shrink-0" />
                    {edu.awards}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
