import { useState } from 'react'
import { MessageSquare, Mail, Phone, MessageCircle, Eye, EyeOff } from 'lucide-react'
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
    <section>
      <div className="flex items-center gap-3 mb-4">
        <MessageSquare size={20} className="text-accent shrink-0" />
        <h2 className="text-xl font-medium text-heading dark:text-surface tracking-wide">联系我</h2>
      </div>
      <div className="panel-accent-bar" />

      <p className="text-sm text-muted dark:text-slate-400 font-light mb-5 leading-relaxed">
        {profile.contact.intro}
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {profile.contact.items.map((item, i) => {
          const Icon = iconMap[item.icon]
          const isHidden = !item.public && !showPrivate

          return (
            <div
              key={i}
              className="flex items-center gap-3 bg-card dark:bg-dark-card border border-border dark:border-dark-border rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Icon size={14} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted/50 dark:text-slate-500 font-light leading-tight">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-heading/80 dark:text-surface/80 font-light hover:text-accent transition-colors truncate block"
                  >
                    {isHidden ? '•••••••' : item.value}
                  </a>
                ) : (
                  <p className="text-sm text-heading/80 dark:text-surface/80 font-light truncate">
                    {isHidden ? '•••••••' : item.value}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => setShowPrivate(!showPrivate)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs text-muted dark:text-slate-400 hover:text-accent transition-colors"
        >
          {showPrivate ? <EyeOff size={13} /> : <Eye size={13} />}
          {showPrivate ? '隐藏联系方式' : '查看完整联系方式'}
        </button>
      </div>
    </section>
  )
}
