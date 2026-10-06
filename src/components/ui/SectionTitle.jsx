import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`max-w-2xl flex flex-col ${alignClass} mb-14`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={100}>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-[1.1] text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={200}>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-balance">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}