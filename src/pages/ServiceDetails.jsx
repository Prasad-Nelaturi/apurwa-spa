import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    FiClock, FiStar, FiCheck, FiChevronDown, FiArrowRight, FiHeart, FiShare2, FiCalendar,
} from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { services } from '../data/mockData'

const faqs = [
    { q: 'How should I prepare for my appointment?', a: 'Arrive 15 minutes early to complete a brief consultation and change into a robe. Avoid heavy meals and alcohol before your treatment.' },
    { q: 'What is your cancellation policy?', a: 'We require 24 hours notice for cancellations. Late cancellations may incur a 50% fee, and no-shows are charged in full.' },
    { q: 'Are gratuities included?', a: 'Gratuities are not included in service prices. We recommend 15-20% for exceptional service, which can be added at checkout.' },
    { q: 'Do you offer gift certificates?', a: 'Yes! Gift certificates are available for any service or dollar amount and can be purchased online or in-store.' },
]

export default function ServiceDetails() {
    const { id } = useParams()
    const service = services.find((s) => s.id === Number(id))
    const [openFaq, setOpenFaq] = useState(0)

    if (!service) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🌸</div>
                    <h1 className="font-serif text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Service Not Found
                    </h1>
                    <Button to="/services" className="mt-4">Back to Services</Button>
                </div>
            </div>
        )
    }

    const related = services.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 3)

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-12 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-sand-50 to-brand-100 dark:from-slate-950 dark:via-slate-900 dark:to-brand-950/40" />
                    <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-brand-300/30 dark:bg-brand-700/10 rounded-full blur-3xl blob" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                        <Link to="/" className="hover:text-brand-600">Home</Link>
                        <span className="opacity-50">/</span>
                        <Link to="/services" className="hover:text-brand-600">Services</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-slate-900 dark:text-white font-medium truncate">{service.name}</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <Reveal>
                            <div className="relative">
                                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 blur-3xl opacity-30 animate-pulse-glow" />
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-neo dark:shadow-neo-dark border-4 border-white/60 dark:border-white/10">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-[520px] object-cover"
                                    />
                                    <div className="absolute top-5 left-5">
                                        <Badge>{service.category}</Badge>
                                    </div>
                                </div>

                                {/* Floating price */}
                                <div className="absolute -bottom-6 left-8 glass dark:glass-dark rounded-3xl px-6 py-4 shadow-glass animate-float">
                                    <div className="text-xs uppercase tracking-wider text-brand-600 dark:text-brand-300 font-semibold mb-1">
                                        Starting at
                                    </div>
                                    <div className="font-serif text-3xl font-bold gradient-text">${service.price}</div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Info */}
                        <Reveal delay={150}>
                            <div>
                                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 leading-tight text-balance">
                                    {service.name}
                                </h1>

                                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass dark:glass-dark">
                                        <FiStar className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        <span className="font-semibold text-slate-900 dark:text-white">{service.rating}</span>
                                        <span className="text-slate-500">({service.reviews})</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass dark:glass-dark text-slate-700 dark:text-slate-300">
                                        <FiClock className="w-4 h-4 text-brand-500" />
                                        {service.duration}
                                    </span>
                                </div>

                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {service.features.map((f) => (
                                        <div key={f} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                            <span className="w-6 h-6 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-glow shrink-0 mt-0.5">
                                                <FiCheck className="w-3.5 h-3.5 text-white" />
                                            </span>
                                            <span className="font-medium pt-0.5">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <Button to="/contact" size="lg">
                                        <FiCalendar className="w-4 h-4" /> Book This Service
                                    </Button>
                                    <button className="w-12 h-12 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-brand-600">
                                        <FiHeart className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-brand-600">
                                        <FiShare2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                            Common Questions
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
                            Everything You Need to Know
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <Reveal key={faq.q} delay={i * 60}>
                                <Card className="overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-sand-200/40 dark:hover:bg-slate-800/40 transition-colors"
                                    >
                                        <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                                        <FiChevronDown
                                            className={`w-5 h-5 text-brand-500 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`grid transition-all duration-500 ease-smooth ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
                <section className="py-20 md:py-24 bg-gradient-to-br from-sand-100 via-brand-50/50 to-sand-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-4">
                                    You May Also Like
                                </span>
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                    Complete Your Ritual
                                </h2>
                            </div>
                            <Button to="/services" variant="outline">
                                All Services <FiArrowRight className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {related.map((r, i) => (
                                <Reveal key={r.id} delay={i * 100}>
                                    <Link to={`/services/${r.id}`} className="block group">
                                        <Card hover className="overflow-hidden h-full">
                                            <div className="relative h-52 overflow-hidden">
                                                <img
                                                    src={r.image}
                                                    alt={r.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:gradient-text transition-all">
                                                    {r.name}
                                                </h3>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="font-serif text-xl font-bold gradient-text">${r.price}</span>
                                                    <span className="text-slate-500 group-hover:text-brand-600 transition-colors">
                                                        View →
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}