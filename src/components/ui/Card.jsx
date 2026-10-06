export default function Card({ children, className = '', hover = false, glass = false, inset = false }) {
  const base = inset
    ? 'neo-inset'
    : glass
    ? 'glass rounded-3xl'
    : 'neo-card'
  return (
    <div
      className={`${base} ${hover ? 'hover:-translate-y-2 hover:shadow-neo-hover dark:hover:shadow-neo-dark-hover' : ''} transition-all duration-500 ease-smooth ${className}`}
    >
      {children}
    </div>
  )
}