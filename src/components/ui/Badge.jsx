export default function Badge({ children, color = 'brand', className = '', dot = false }) {
  const colors = {
    brand: 'bg-brand-500/15 text-brand-700 dark:text-brand-300 ring-1 ring-brand-500/25',
    green: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/25',
    amber: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/25',
    slate: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 ring-1 ring-slate-500/25',
  }
  const dotColors = {
    brand: 'bg-brand-500', green: 'bg-emerald-500', amber: 'bg-amber-500', slate: 'bg-slate-500',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${colors[color]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[color]} animate-pulse`} />}
      {children}
    </span>
  )
}