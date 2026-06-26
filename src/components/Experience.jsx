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
    <section id="experience" className="py-32 px-6">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">实习经历</h2>

        <div className="space-y-6">
          {profile.experience.map((exp) => (
            <div key={exp.id} className="bg-white/50 dark:bg-dark/30 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                <h3 className="text-base font-medium text-dark dark:text-cream">{exp.company}</h3>
                <span className="text-xs text-dark/40 dark:text-cream/40 font-normal whitespace-nowrap">{exp.role}</span>
                <span className="text-xs text-dark/30 dark:text-cream/30 font-light">{exp.period}</span>
              </div>
              <p className="text-sm text-dark/50 dark:text-cream/50 font-light leading-relaxed mb-3">{exp.summary}</p>
              <ul className="list-none space-y-2 text-sm text-dark/50 dark:text-cream/50 font-light leading-relaxed">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent mt-1 shrink-0">•</span>
                    <span>{highlightNumbers(b)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
