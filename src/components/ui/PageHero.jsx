import { Link } from 'react-router-dom'
import { FiChevronRight, FiStar, FiHeart, FiAward } from 'react-icons/fi'

export default function PageHero({ eyebrow, title, highlight, subtitle, breadcrumbs = [] }) {
    return (
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
            {/* ═══ Full-bleed ambient background ═══ */}
            <div className="absolute inset-0 -z-10">

                <div
                    className="absolute top-32 -right-24 w-[500px] h-[500px] bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700 rounded-full blur-3xl opacity-25 dark:opacity-15 blob"
                    style={{ animationDelay: '2s' }}
                />

                {/* Bottom blob */}
                <div
                    className="absolute -bottom-40 left-1/4 w-[480px] h-[480px] bg-gradient-to-br from-sand-300 to-brand-400 rounded-full blur-3xl opacity-25 dark:opacity-10 blob"
                    style={{ animationDelay: '4s' }}
                />

                {/* Dot grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center flex-wrap gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-8 animate-fade-in">
                        <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">
                            Home
                        </Link>
                        {breadcrumbs.map((bc, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <FiChevronRight className="w-3.5 h-3.5 opacity-50" />
                                {bc.to ? (
                                    <Link to={bc.to} className="hover:text-brand-600 dark:hover:text-brand-300 transition-colors">
                                        {bc.label}
                                    </Link>
                                ) : (
                                    <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">
                                        {bc.label}
                                    </span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}

                {/* ═══ 2-column grid — text left, decorative right ═══ */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    {/* LEFT — Text content */}
                    <div className="lg:col-span-7">
                        {eyebrow && (
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-6 animate-fade-in-down">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                                {eyebrow}
                            </div>
                        )}

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.05] text-balance animate-fade-in-up">
                            {title} {highlight && <span className="gradient-text">{highlight}</span>}
                        </h1>

                        {subtitle && (
                            <p
                                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-balance animate-fade-in-up"
                                style={{ animationDelay: '150ms' }}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* RIGHT — Decorative stat cards (fills the right side) */}
                    <div className="hidden lg:block lg:col-span-5 relative">
                        <div className="relative h-[340px]">
                            {/* Floating card 1 — top right */}
                            <div
                                className="absolute top-0 right-0 w-56 glass dark:glass-dark rounded-3xl p-5 shadow-glass animate-float"
                                style={{ animationDelay: '0s' }}
                            >
                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-glow mb-4">
                                    <FiStar className="w-5 h-5 text-white fill-white" />
                                </div>
                                <div className="font-serif text-2xl font-bold gradient-text leading-none mb-1">
                                    4.9
                                </div>
                                <div className="text-xs font-medium text-slate-900 dark:text-white">
                                    Average Rating
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                    Based on 2,847 reviews
                                </div>
                            </div>

                            {/* Floating card 2 — middle left */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 left-0 w-52 glass dark:glass-dark rounded-3xl p-5 shadow-glass animate-float-slow"
                                style={{ animationDelay: '1s' }}
                            >
                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-glow mb-4">
                                    <FiHeart className="w-5 h-5 text-white fill-white" />
                                </div>
                                <div className="font-serif text-2xl font-bold gradient-text leading-none mb-1">
                                    12k+
                                </div>
                                <div className="text-xs font-medium text-slate-900 dark:text-white">
                                    Happy Clients
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                    Since 2010
                                </div>
                            </div>

                            {/* Floating card 3 — bottom right */}
                            <div
                                className="absolute bottom-0 right-8 w-56 glass dark:glass-dark rounded-3xl p-5 shadow-glass animate-float"
                                style={{ animationDelay: '2s' }}
                            >
                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-glow mb-4">
                                    <FiAward className="w-5 h-5 text-white" />
                                </div>
                                <div className="font-serif text-2xl font-bold gradient-text leading-none mb-1">
                                    15+
                                </div>
                                <div className="text-xs font-medium text-slate-900 dark:text-white">
                                    Years of Excellence
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                                    Award-winning service
                                </div>
                            </div>

                            {/* Decorative gradient orb behind cards */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-brand-400/30 to-brand-700/30 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}