import { FiCheck, FiX, FiArrowRight, FiStar, FiZap } from 'react-icons/fi'
import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Reveal from '../components/ui/Reveal'
import { pricingPlans } from '../data/mockData'

const comparisonFeatures = [
    { label: 'Signature services / month', essential: '1', serenity: '2', elite: '4' },
    { label: 'Discount on extras', essential: '10%', serenity: '20%', elite: '30%' },
    { label: 'Priority booking', essential: false, serenity: true, elite: true },
    { label: 'Dedicated concierge', essential: false, serenity: false, elite: true },
    { label: 'Guest passes', essential: false, serenity: 'Quarterly', elite: 'Monthly' },
    { label: 'Exclusive member events', essential: false, serenity: false, elite: true },
    { label: 'Complimentary aromatherapy', essential: false, serenity: true, elite: true },
    { label: 'Birthday surprise', essential: true, serenity: true, elite: true },
]

const faqs = [
    { q: 'Can I cancel anytime?', a: 'Yes — memberships are month-to-month with no long-term contract. Cancel anytime with 30 days notice.' },
    { q: 'Can I switch plans?', a: 'Absolutely. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.' },
    { q: 'Do unused services roll over?', a: 'Yes! Unused services roll over for one month, giving you flexibility to book around your schedule.' },
    { q: 'Is there a joining fee?', a: 'No joining fee. Just pick your plan and start enjoying member benefits from day one.' },
]

export default function Pricing() {
    return (
        <div className="overflow-hidden">
            <PageHero
                eyebrow="Membership"
                title="Self-Care, Made"
                highlight="Effortless"
                subtitle="Flexible memberships that turn wellness into a ritual, not an indulgence."
                breadcrumbs={[{ label: 'Pricing' }]}
            />

            {/* Plans */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
                        {pricingPlans.map((plan, i) => (
                            <Reveal key={plan.id} delay={i * 100}>
                                <div className={`relative h-full ${plan.popular ? 'lg:-mt-6 lg:mb-6 z-10' : ''}`}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 text-white text-xs font-bold shadow-glow whitespace-nowrap">
                                                <FiZap className="w-3 h-3 fill-current" />
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    <Card
                                        hover
                                        className={`relative h-full overflow-hidden ${plan.popular ? 'ring-2 ring-brand-500/50 shadow-glow' : ''
                                            }`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
                                        )}
                                        <div className="relative p-8 flex flex-col h-full">
                                            <div className="mb-6">
                                                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                                    {plan.name}
                                                </h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                                    {plan.description}
                                                </p>
                                            </div>

                                            <div className="mb-8 pb-8 border-b border-slate-200/60 dark:border-slate-700/60">
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl font-bold text-slate-500 dark:text-slate-400">$</span>
                                                    <span className="font-serif text-5xl font-bold gradient-text">
                                                        {plan.price}
                                                    </span>
                                                    <span className="text-slate-500 dark:text-slate-400 ml-1">/mo</span>
                                                </div>
                                            </div>

                                            <ul className="space-y-3 mb-8 flex-1">
                                                {plan.features.map((f) => (
                                                    <li key={f} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                                                        <span className="w-5 h-5 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                                                            <FiCheck className="w-3 h-3 text-white" />
                                                        </span>
                                                        <span>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Button
                                                to="/contact"
                                                variant={plan.popular ? 'primary' : 'secondary'}
                                                size="lg"
                                                className="w-full"
                                            >
                                                {plan.popular ? 'Start Serenity' : `Choose ${plan.name}`}
                                            </Button>
                                        </div>
                                    </Card>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={300}>
                        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-10">
                            🔒 No hidden fees. Cancel anytime. All prices include tax.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 md:py-24 bg-gradient-to-br from-sand-100 via-brand-50/50 to-sand-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass dark:glass-dark text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                            Compare Plans
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
                            Find Your Perfect Fit
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Every plan includes relaxation lounge access, herbal tea, and member-only invitations.
                        </p>
                    </div>

                    <Reveal>
                        <Card className="overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 dark:border-slate-800">
                                            <th className="text-left p-5 font-semibold text-slate-900 dark:text-white">Features</th>
                                            {pricingPlans.map((p) => (
                                                <th key={p.id} className="p-5 text-center">
                                                    <div className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                                                        {p.name}
                                                    </div>
                                                    <div className="text-xs font-medium gradient-text mt-1">${p.price}/mo</div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonFeatures.map((row, i) => (
                                            <tr
                                                key={row.label}
                                                className={`border-b border-slate-100 dark:border-slate-800/60 last:border-0 ${i % 2 === 0 ? 'bg-sand-50/40 dark:bg-slate-900/40' : ''
                                                    }`}
                                            >
                                                <td className="p-5 font-medium text-slate-700 dark:text-slate-300">{row.label}</td>
                                                {['essential', 'serenity', 'elite'].map((key) => {
                                                    const val = row[key]
                                                    return (
                                                        <td key={key} className="p-5 text-center">
                                                            {val === true ? (
                                                                <span className="inline-flex w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 items-center justify-center">
                                                                    <FiCheck className="w-3.5 h-3.5 text-white" />
                                                                </span>
                                                            ) : val === false ? (
                                                                <span className="inline-flex w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-800 items-center justify-center">
                                                                    <FiX className="w-3.5 h-3.5 text-slate-400" />
                                                                </span>
                                                            ) : (
                                                                <span className="font-semibold text-slate-900 dark:text-white">{val}</span>
                                                            )}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Reveal>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Membership Questions
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <Reveal key={faq.q} delay={i * 60}>
                                <Card className="p-6">
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                                </Card>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={300}>
                        <div className="mt-14 text-center">
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Need a corporate package or have a custom request?
                            </p>
                            <Button to="/contact" size="lg" variant="outline">
                                Talk to Our Team <FiArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}