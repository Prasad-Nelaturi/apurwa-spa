import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock, FiStar } from 'react-icons/fi'
import { services } from '../../data/mockData'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function ServicesPreview() {
    const featured = services.slice(0, 3)

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-300/20 dark:bg-brand-700/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    eyebrow="Signature Rituals"
                    title="Curated Treatments for Every Mood"
                    subtitle="From deep-tissue massage to radiant facials — each service is a personalized journey into calm."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((service, i) => (
                        <Reveal key={service.id} delay={i * 120}>
                            <Card hover className="overflow-hidden group h-full flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute top-4 left-4">
                                        <Badge>{service.category}</Badge>
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-xs font-medium">
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass-dark">
                                            <FiStar className="w-3 h-3 fill-amber-400 text-amber-400" />
                                            {service.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:gradient-text transition-all leading-snug">
                                            {service.name}
                                        </h3>
                                        <span className="font-serif text-2xl font-bold gradient-text whitespace-nowrap">
                                            ${service.price}
                                        </span>
                                    </div>

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
                                        Discover more
                                        <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={300}>
                    <div className="text-center mt-16">
                        <Button to="/services" variant="outline" size="lg">
                            Explore All Services <FiArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}