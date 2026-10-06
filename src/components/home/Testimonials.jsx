import { FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/mockData'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-sand-100 to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-brand-300/30 dark:bg-brand-700/10 rounded-full blur-3xl blob" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    eyebrow="Kind Words"
                    title="Loved by Thousands"
                    subtitle="Real stories from clients who made Apurwa's part of their wellness ritual."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t, i) => (
                        <Reveal key={t.id} delay={i * 100}>
                            <Card hover glass className="p-7 h-full flex flex-col relative overflow-hidden">
                                {/* Big quote mark */}
                                <div className="absolute -top-4 -right-2 text-8xl font-serif text-brand-500/10 dark:text-brand-400/10 select-none">
                                    "
                                </div>

                                <div className="flex gap-1 mb-4 relative">
                                    {Array.from({ length: t.rating }).map((_, idx) => (
                                        <FiStar key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 relative flex-1">
                                    {t.text}
                                </p>

                                <div className="flex items-center gap-3 pt-5 border-t border-white/40 dark:border-white/10">
                                    <div className="relative">
                                        <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-400" />
                                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-slate-900" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}