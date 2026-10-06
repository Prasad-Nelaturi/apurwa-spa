import { FiCheck } from 'react-icons/fi'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const points = [
    'Certified, award-winning therapists',
    'Organic, cruelty-free products',
    'Private treatment suites',
    'Personalized wellness plans',
]

export default function AboutPreview() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-brand-50/40 to-sand-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image collage */}
                    <Reveal>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80', delay: 0, offset: '' },
                                    { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', delay: 100, offset: 'mt-8' },
                                    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', delay: 200, offset: '-mt-8' },
                                    { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80', delay: 300, offset: '' },
                                ].map((img, i) => (
                                    <div
                                        key={i}
                                        className={`relative rounded-3xl overflow-hidden shadow-neo dark:shadow-neo-dark hover:-translate-y-2 transition-all duration-700 ease-smooth group ${img.offset}`}
                                        style={{ transitionDelay: `${img.delay}ms` }}
                                    >
                                        <img
                                            src={img.src}
                                            alt="Spa"
                                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass dark:glass-dark rounded-3xl px-6 py-4 shadow-glass whitespace-nowrap animate-float">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-serif text-lg font-bold text-slate-900 dark:text-white">15 Years</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">of wellness excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Text */}
                    <Reveal delay={150}>
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                                About Apurwa's
                            </span>

                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight text-balance">
                                A Sanctuary Crafted for Your{' '}
                                <span className="gradient-text">Wellbeing</span>
                            </h2>

                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                Founded in 2010, Apurwa's has grown from a small boutique studio into a full-service wellness destination. Every treatment is personal, restorative, and transformative.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {points.map((item, i) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-slate-700 dark:text-slate-300 animate-fade-in-up"
                                        style={{ animationDelay: `${300 + i * 100}ms` }}
                                    >
                                        <span className="w-8 h-8 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-glow shrink-0">
                                            <FiCheck className="w-4 h-4 text-white" />
                                        </span>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button to="/about" size="lg">Our Full Story</Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}