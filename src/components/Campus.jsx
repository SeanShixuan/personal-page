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

export default function Campus() {
  return (
    <section id="campus" className="py-32 px-6 bg-dark/[0.02] dark:bg-cream/[0.03]">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">在校经历</h2>

        {profile.campus.map((item) => (
          <div key={item.id} className="bg-white/50 dark:bg-dark/30 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h3 className="text-base font-medium text-dark dark:text-cream">{item.organization}</h3>
              <span className="text-xs text-dark/40 dark:text-cream/40 font-normal">{item.role}</span>
              <span className="text-xs text-dark/30 dark:text-cream/30 font-light">{item.period}</span>
            </div>
            <p className="text-sm text-dark/50 dark:text-cream/50 font-light leading-relaxed">
              {highlightNumbers(item.content)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
