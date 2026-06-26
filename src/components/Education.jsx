import { Trophy } from 'lucide-react'
import profile from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-dark/[0.02] dark:bg-cream/[0.03]">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">教育经历</h2>

        <div className="relative border-l border-dark/15 dark:border-cream/15 pl-8 space-y-12">
          {profile.education.map((edu) => (
            <div key={edu.id} className="relative group bg-white/50 dark:bg-dark/30 rounded-2xl p-5 -ml-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`absolute -left-[2.15rem] top-5 w-3 h-3 rounded-full ring-4 ring-cream dark:ring-dark transition-transform group-hover:scale-125 ${edu.highlight ? 'bg-accent' : 'bg-dark/20 dark:bg-cream/20'}`} />
              <div className="space-y-1.5">
                <span className={`text-xs font-normal tracking-wide ${edu.highlight ? 'text-accent' : 'text-dark/40 dark:text-cream/40'}`}>{edu.period}</span>
                <h3 className="text-base font-medium text-dark dark:text-cream">
                  {edu.school} <span className="text-dark/40 dark:text-cream/40 font-light">|</span> {edu.department} <span className="text-dark/40 dark:text-cream/40 font-light">|</span> {edu.degree}
                </h3>
                {edu.details.map((d, i) => (
                  <p key={i} className="text-sm text-dark/50 dark:text-cream/50 font-light">{d}</p>
                ))}
                {edu.awards && (
                  <p className="text-sm text-dark/50 dark:text-cream/50 font-light flex items-center gap-1.5">
                    <Trophy size={14} className="text-accent shrink-0" />
                    {edu.awards}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
