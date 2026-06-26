import { useState } from 'react'
import { Mail, Phone, MessageCircle, Eye, EyeOff } from 'lucide-react'
import profile from '../data/profile'

const iconMap = {
  mail: Mail,
  phone: Phone,
  wechat: MessageCircle,
  qq: MessageCircle,
}

export default function Contact() {
  const [showPrivate, setShowPrivate] = useState(false)

  return (
    <section id="contact" className="py-32 px-6 bg-dark/[0.02] dark:bg-cream/[0.03]">
      <div className="max-w-2xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-6">联系我</h2>
        <p className="text-sm md:text-base text-dark/50 dark:text-cream/50 font-light mb-10 leading-relaxed text-center">
          {profile.contact.intro}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {profile.contact.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            const isHidden = !item.public && !showPrivate

            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/60 dark:bg-dark/30 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-dark/40 dark:text-cream/40 font-light leading-tight">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-dark/70 dark:text-cream/70 font-light hover:text-accent transition-colors truncate block"
                    >
                      {isHidden ? '点击下方按钮查看' : item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-dark/70 dark:text-cream/70 font-light truncate">
                      {isHidden ? '点击下方按钮查看' : item.value}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Toggle private info */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowPrivate(!showPrivate)}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs text-dark/50 dark:text-cream/50 hover:text-accent transition-colors"
          >
            {showPrivate ? <EyeOff size={14} /> : <Eye size={14} />}
            {showPrivate ? '隐藏联系方式' : '查看完整联系方式'}
          </button>
        </div>
      </div>
    </section>
  )
}
