import { Link } from 'react-router-dom'

const base =
    'relative inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-wide transition-all duration-500 ease-smooth focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'

const variants = {
    primary:
        'text-white bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-neo dark:shadow-neo-dark hover:shadow-glow hover:-translate-y-1 active:translate-y-0 active:shadow-neo-inset',
    secondary:
        'text-slate-900 dark:text-white bg-sand-100 dark:bg-slate-900 shadow-neo dark:shadow-neo-dark hover:shadow-neo-hover dark:hover:shadow-neo-dark-hover hover:-translate-y-1 active:shadow-neo-inset dark:active:shadow-neo-dark-inset',
    outline:
        'text-brand-600 dark:text-brand-300 bg-transparent border-2 border-brand-500/60 hover:border-brand-500 hover:bg-brand-50/60 dark:hover:bg-brand-900/30 hover:-translate-y-0.5',
    ghost:
        'text-slate-700 dark:text-slate-200 hover:bg-sand-200/60 dark:hover:bg-slate-800/60',
    glass:
        'text-white bg-white/15 backdrop-blur-xl border border-white/25 hover:bg-white/25 hover:shadow-glow',
}

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
}

export default function Button({
    children, variant = 'primary', size = 'md', to, href, className = '', ...props
}) {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

    const inner = (
        <>
            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            )}
        </>
    )

    if (to) return <Link to={to} className={cls} {...props}>{inner}</Link>
    if (href) return <a href={href} className={cls} {...props}>{inner}</a>
    return <button className={cls} {...props}>{inner}</button>
}