import { FiArrowRight, FiPlay, FiStar } from 'react-icons/fi'
import Button from '../ui/Button'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-40 md:pb-32">
            {/* Animated background blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-brand-300 via-brand-400 to-brand-600 rounded-full blur-3xl opacity-30 dark:opacity-20 blob" />
                <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-gradient-to-br from-sand-300 to-brand-300 rounded-full blur-3xl opacity-25 dark:opacity-15 blob" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-gradient-to-br from-brand-400 to-brand-700 rounded-full blur-3xl opacity-20 dark:opacity-10 blob" style={{ animationDelay: '4s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark mb-6 shadow-glass">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-gradient-to-br from-brand-400 to-brand-700" />
                                ))}
                            </div>
                            <div className="flex items-center gap-1 text-xs font-medium text-slate-700 dark:text-slate-200">
                                <FiStar className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                4.9 · Loved by 1,200+ clients
                            </div>
                        </div>

                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] mb-6 text-balance">
                            Where Beauty{' '}
                            <span className="relative inline-block">
                                <span className="gradient-text">Meets Serenity</span>
                                <svg
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 300 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 9C60 3 120 1 180 4C220 6 260 8 298 3"
                                        stroke="url(#grad)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0">
                                            <stop stopColor="#e879f9" />
                                            <stop offset="1" stopColor="#701a75" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                            Indulge in premium spa treatments and personalized beauty rituals designed to restore your glow — inside and out.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-14">
                            <MagneticButton>
                                <Button to="/contact" size="lg">
                                    Book Your Escape <FiArrowRight className="w-4 h-4" />
                                </Button>
                            </MagneticButton>
                            <button className="group inline-flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                                <span className="relative w-12 h-12 rounded-full glass dark:glass-dark flex items-center justify-center shadow-glass group-hover:shadow-glow transition-shadow">
                                    <span className="absolute inset-0 rounded-full bg-brand-500/30 animate-ping" />
                                    <FiPlay className="w-4 h-4 fill-current relative z-10" />
                                </span>
                                <span className="text-sm">Watch our story</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 max-w-md">
                            {[
                                { value: '15+', label: 'Years' },
                                { value: '50+', label: 'Experts' },
                                { value: '10k+', label: 'Clients' },
                            ].map((stat, i) => (
                                <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${300 + i * 100}ms` }}>
                                    <div className="font-serif text-3xl font-bold gradient-text">{stat.value}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="relative animate-scale-in" style={{ animationDelay: '300ms' }}>
                        {/* Main image with neomorphic frame */}
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 blur-2xl opacity-40 animate-pulse-glow" />
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-neo dark:shadow-neo-dark border-4 border-white/60 dark:border-white/10">
                                <img
                                    src="https://m.media-amazon.com/images/I/712voSOZU6L.jpg"
                                    alt="Spa treatment"
                                    className="w-full h-[460px] object-cover object-left md:object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent" />
                            </div>

                            {/* Floating rating card */}
                            <div className="absolute -top-4 -right-4 glass dark:glass-dark rounded-3xl p-4 shadow-glass animate-float-slow">
                                <div className="flex items-center gap-1 mb-1">
                                    {'★★★★★'.split('').map((s, i) => (
                                        <span key={i} className="text-amber-400 text-sm">{s}</span>
                                    ))}
                                </div>
                                <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">Excellent</div>
                                <div className="text-[10px] text-slate-500">2,847 reviews</div>
                            </div>
                        </div>

                        {/* Small floating image */}
                        <div className="absolute -bottom-10 right-10 w-32 h-32 rounded-3xl overflow-hidden shadow-neo dark:shadow-neo-dark border-4 border-white dark:border-slate-900 animate-float" style={{ animationDelay: '1s' }}>
                            <img
                                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80"
                                alt="Facial"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}