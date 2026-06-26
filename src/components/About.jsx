import profile from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">关于我</h2>

        <div className="space-y-5 text-dark/60 dark:text-cream/60 leading-relaxed text-sm md:text-base font-light">
          <p>{profile.about.intro}</p>

          <div>
            <h3 className="text-sm font-medium text-dark/60 dark:text-cream/50 uppercase tracking-widest mb-3">{profile.about.strengths.title}</h3>
            <p>{profile.about.strengths.content}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-dark/60 dark:text-cream/50 uppercase tracking-widest mb-3">{profile.about.qualities.title}</h3>
            <p>{profile.about.qualities.content}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
