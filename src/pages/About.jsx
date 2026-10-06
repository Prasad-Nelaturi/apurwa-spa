import { FiHeart, FiEye, FiAward, FiCheck, FiArrowRight, FiStar, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'
import PageHero from '../components/ui/PageHero'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { team, testimonials } from '../data/mockData'

const values = [
    { icon: FiHeart, title: 'Our Mission', text: 'Making premium wellness personal, accessible, and truly transformative for every guest.', color: 'from-rose-400 to-pink-600' },
    { icon: FiEye, title: 'Our Vision', text: 'A world where self-care is celebrated daily — not saved for special occasions.', color: 'from-brand-400 to-brand-700' },
    { icon: FiAward, title: 'Our Values', text: 'Integrity, expertise, sustainability, and an unwavering commitment to your results.', color: 'from-amber-400 to-orange-600' },
]

const milestones = [
    { year: '2010', title: 'The Beginning', text: 'Opened our first boutique studio with 3 treatment rooms in Beverly Hills.' },
    { year: '2015', title: 'Growth', text: 'Expanded to a full-service wellness center and launched our membership program.' },
    { year: '2020', title: 'Adaptation', text: 'Introduced virtual consultations and at-home wellness kits during global shifts.' },
    { year: '2025', title: 'Today', text: 'Serving over 10,000 clients annually with 50+ certified experts across two locations.' },
]

export default function About() {
    return (
        <div className="overflow-hidden">
            <PageHero
                eyebrow="About Apurwa's"
                title="Our Story of"
                highlight="Serenity & Craft"
                subtitle="A sanctuary born from a simple belief — everyone deserves a moment of true restoration."
                breadcrumbs={[{ label: 'About' }]}
            />

            {/* Mission / Vision / Values */}
            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <Reveal key={item.title} delay={i * 120}>
                                    <Card hover className="relative p-8 h-full group overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                                        <div className="relative">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    </Card>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Story / Timeline */}
            <section className="relative py-20 md:py-24 bg-gradient-to-br from-sand-100 via-brand-50/50 to-sand-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <div className="relative">
                                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 blur-3xl opacity-30 animate-pulse-glow" />
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-neo dark:shadow-neo-dark">
                                    <img
                                        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80"
                                        alt="Our spa"
                                        className="w-full h-[560px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
                                </div>

                                {/* Floating stat */}
                                <div className="absolute -bottom-8 -right-4 md:right-8 glass dark:glass-dark rounded-3xl px-6 py-5 shadow-glass animate-float">
                                    <div className="flex items-center gap-4">
                                        <div className="text-4xl">🏆</div>
                                        <div>
                                            <div className="font-serif text-2xl font-bold gradient-text">15+ Years</div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">of wellness excellence</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={150}>
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                                    Our Journey
                                </span>
                                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight text-balance">
                                    A Story Written in <span className="gradient-text">Moments of Calm</span>
                                </h2>

                                <div className="relative pl-8">
                                    {/* Vertical line */}
                                    <div className="absolute left-2 top-3 bottom-3 w-px bg-gradient-to-b from-brand-400 via-brand-500 to-transparent" />

                                    <div className="space-y-8">
                                        {milestones.map((m, i) => (
                                            <div key={m.year} className="relative">
                                                <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow ring-4 ring-sand-100 dark:ring-slate-900" />
                                                <div className="flex items-baseline gap-4 mb-1">
                                                    <span className="font-serif text-2xl font-bold gradient-text">{m.year}</span>
                                                    <span className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                                                        {m.title}
                                                    </span>
                                                </div>
                                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{m.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <Button to="/contact" size="lg">
                                        Visit Our Studio <FiArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        eyebrow="Meet the Artists"
                        title="The Experts Behind the Glow"
                        subtitle="Passionate professionals who turn every visit into a personalized ritual."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <Reveal key={member.id} delay={i * 100}>
                                <Card hover className="overflow-hidden text-center group h-full">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {[FiInstagram, FiTwitter, FiMail].map((Icon, idx) => (
                                                <button
                                                    key={idx}
                                                    className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-brand-600 transition-colors"
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-semibold tracking-wider uppercase gradient-text mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                                            {member.bio}
                                        </p>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials strip */}
            <section className="relative py-20 md:py-24 bg-gradient-to-br from-brand-50 via-sand-100 to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
                <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-brand-300/30 dark:bg-brand-700/10 rounded-full blur-3xl blob" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        eyebrow="Kind Words"
                        title="Stories That Move Us"
                        subtitle="Just a few of the voices that make what we do worthwhile."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((t, i) => (
                            <Reveal key={t.id} delay={i * 100}>
                                <Card glass className="p-7 h-full flex flex-col">
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: t.rating }).map((_, idx) => (
                                            <FiStar key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                                        "{t.text}"
                                    </p>
                                    <div className="flex items-center gap-3 pt-5 border-t border-white/40 dark:border-white/10">
                                        <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-400" />
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

            {/* CTA */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-12 md:p-20 text-center shadow-glow-lg">
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
                            <div className="relative">
                                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                                    Experience the Apurwa's Difference
                                </h2>
                                <p className="text-white/85 mb-10 max-w-xl mx-auto">
                                    Your first visit includes a complimentary wellness consultation and personalized treatment plan.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button to="/contact" size="lg" variant="glass">
                                        Book Your Visit <FiArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        to="/services"
                                        size="lg"
                                        variant="glass"
                                        className="!bg-white/90 !text-brand-700 hover:!bg-white"
                                    >
                                        Browse Services
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}