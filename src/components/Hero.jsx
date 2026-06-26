import { useEffect, useState } from 'react'
import { ArrowDown, Download } from 'lucide-react'
import profile from '../data/profile'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center max-w-xl">
        {/* Avatar */}
        <div className={`hero-item transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="w-[180px] h-[180px] mx-auto rounded-full overflow-hidden shadow-lg shadow-accent/10 ring-4 ring-white">
            <img
              src={import.meta.env.BASE_URL + 'avatar.jpg'}
              alt={profile.name}
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>

        {/* Titles */}
        <div className={`hero-item transition-all duration-700 mt-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide">你好，我是{profile.name}</h1>
          <p className="mt-3 text-base md:text-lg text-dark/60 dark:text-cream/60 font-light">
            {profile.title}
          </p>
        </div>

        {/* Bio */}
        <div className={`hero-item transition-all duration-700 mt-6 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm md:text-base text-dark/50 dark:text-cream/50 leading-relaxed font-light">
            {profile.bio}
          </p>
        </div>

        {/* Buttons */}
        <div className={`hero-item transition-all duration-700 mt-8 flex items-center justify-center gap-4 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={() => scrollTo('about')}
            className="px-6 py-2.5 border border-dark/20 dark:border-cream/20 text-dark/70 dark:text-cream/70 text-sm rounded-full hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 active:scale-95"
          >
            了解更多
          </button>
          <a
            href={import.meta.env.BASE_URL + 'resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-accent text-accent text-sm rounded-full hover:bg-accent hover:text-white transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
          >
            <Download size={14} />
            下载简历
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 py-2.5 bg-accent text-white text-sm rounded-full hover:bg-blue-400 transition-all duration-300 active:scale-95 shadow-sm shadow-accent/20"
          >
            联系我
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 animate-bounce text-dark/20 dark:text-cream/20">
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  )
}
