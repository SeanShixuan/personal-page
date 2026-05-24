import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const items = [
    {
      icon: Mail,
      label: '电子邮箱',
      value: '727890476@qq.com',
      href: 'mailto:727890476@qq.com',
    },
    {
      icon: Phone,
      label: '手机号码',
      value: '13622449192',
    },
    {
      icon: MessageCircle,
      label: '微信',
      value: 'styleshixuan',
    },
    {
      icon: MessageCircle,
      label: 'QQ',
      value: '727890476',
    },
  ]

  return (
    <section id="contact" className="py-32 px-6 bg-dark/[0.02]">
      <div className="max-w-2xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-6">联系我</h2>
        <p className="text-sm md:text-base text-dark/50 font-light mb-10 leading-relaxed text-center">
          有任何问题、交流想法或合作意向，欢迎随时联系我
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/60 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] text-dark/40 font-light leading-tight">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-dark/70 font-light hover:text-accent transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-dark/70 font-light truncate">{item.value}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
