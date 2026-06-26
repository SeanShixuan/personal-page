import profile from '../data/profile'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark/5 dark:border-cream/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs text-dark/30 dark:text-cream/30 font-light tracking-wide">
          {profile.footer}
        </p>
      </div>
    </footer>
  )
}
