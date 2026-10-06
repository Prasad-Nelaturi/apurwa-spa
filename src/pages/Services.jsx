import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiClock, FiStar, FiArrowRight, FiSliders } from 'react-icons/fi'
import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { services } from '../data/mockData'

const categories = ['All', ...new Set(services.map((s) => s.category))]

export default function Services() {
    const [active, setActive] = useState('All')
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        return services.filter((s) => {
            const matchCat = active === 'All' || s.category === active
            const matchQuery =
                s.name.toLowerCase().includes(query.toLowerCase()) ||
                s.description.toLowerCase().includes(query.toLowerCase())
            return matchCat && matchQuery
        })
    }, [active, query])

    return (
        <div className="overflow-hidden">
            <PageHero
                eyebrow="Our Services"
                title="Treatments Crafted for"
                highlight="Every Mood"
                subtitle="Explore a curated menu of spa and beauty rituals — each designed to restore, renew, and reveal."
                breadcrumbs={[{ label: 'Services' }]}
            />

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter bar */}
                    <Reveal>
                        <Card glass className="p-4 md:p-5 mb-12">
                            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 lg:pb-0">
                                    <FiSliders className="w-4 h-4 text-brand-500 shrink-0" />
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActive(cat)}
                                            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${active === cat
                                                    ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow'
                                                    : 'text-slate-700 dark:text-slate-300 hover:bg-sand-200/60 dark:hover:bg-slate-800/60'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                <div className="relative lg:w-72">
                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="neo-input w-full !pl-11"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Reveal>

                    {/* Results count */}
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Showing <span className="font-bold text-slate-900 dark:text-white">{filtered.length}</span>{' '}
                            {filtered.length === 1 ? 'service' : 'services'}
                        </p>
                    </div>

                    {/* Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((service, i) => (
                                <Reveal key={service.id} delay={(i % 6) * 80}>
                                    <Card hover className="overflow-hidden group h-full flex flex-col">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                                            <div className="absolute top-4 left-4">
                                                <Badge>{service.category}</Badge>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-dark text-white text-xs font-medium backdrop-blur-md">
                                                    <FiStar className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                    {service.rating}
                                                </span>
                                                <span className="font-serif text-2xl font-bold text-white drop-shadow-lg">
                                                    ${service.price}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:gradient-text transition-all leading-snug">
                                                {service.name}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed line-clamp-2">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500 mb-6">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <FiClock className="w-3.5 h-3.5" /> {service.duration}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <FiStar className="w-3.5 h-3.5" /> {service.reviews} reviews
                                                </span>
                                            </div>

                                            <Link
                                                to={`/services/${service.id}`}
                                                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-300 group/link"
                                            >
                                                View Details
                                                <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </Card>
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <Card className="p-16 text-center">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                No services found
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">
                                Try a different search or category.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setQuery('')
                                    setActive('All')
                                }}
                            >
                                Clear Filters
                            </Button>
                        </Card>
                    )}

                    {/* CTA strip */}
                    <Reveal delay={200}>
                        <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sand-100 via-brand-50 to-sand-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-white/40 dark:border-white/10 p-10 md:p-14">
                            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl" />
                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                        Not sure what you need?
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Book a complimentary consultation and we'll craft a personalized plan for you.
                                    </p>
                                </div>
                                <Button to="/contact" size="lg">
                                    Free Consultation <FiArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}