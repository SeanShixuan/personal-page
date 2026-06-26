import profile from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">技能与证书</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Certs */}
          <div>
            <h3 className="text-sm font-medium text-dark/60 dark:text-cream/50 uppercase tracking-widest mb-4">资格证书</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.certs.map((cert, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-light bg-accent/10 text-accent rounded-full">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Skill categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-dark/60 dark:text-cream/50 uppercase tracking-widest mb-4">专业技能</h3>
            {profile.skills.categories.map((cat, i) => (
              <div key={i}>
                <p className="text-xs text-dark/40 dark:text-cream/40 font-light mb-1.5">{cat.name}</p>
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
