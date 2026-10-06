import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin,
    FiArrowUpRight, FiSend, FiCheck, FiHeart, FiClock,
} from 'react-icons/fi'
import Reveal from '../ui/Reveal'

const exploreLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Membership' },
    { to: '/blog', label: 'Journal' },
    { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
    'Massage Therapy',
    'Facial Treatments',
    'Hair Styling',
    'Nail Care',
    'Couples Retreats',
]

export default function Footer() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (!email) return
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 4000)
    }

    return (
        <footer className="relative overflow-hidden">
            {/* ── Top gradient divider ── */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />

            {/* ── Soft gradient background ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-sand-100 via-sand-50 to-brand-50 dark:from-slate-950 dark:via-slate-950 dark:to-brand-950/40" />

            {/* ── Ambient blobs ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-brand-300 to-brand-500 rounded-full blur-3xl opacity-25 dark:opacity-10 blob" />
                <div
                    className="absolute -bottom-40 -right-32 w-[520px] h-[520px] bg-gradient-to-br from-sand-300 via-brand-300 to-brand-500 rounded-full blur-3xl opacity-25 dark:opacity-10 blob"
                    style={{ animationDelay: '3s' }}
                />
            </div>

            {/* ══════════════════════════════════════════
          NEWSLETTER CTA (floating glass card)
      ══════════════════════════════════════════ */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-8 md:p-12 shadow-glow-lg">
                        {/* Decorative layers */}
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/25 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-40" />

                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                                        Wellness in your inbox
                                    </span>
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3 text-balance">
                                    Join 12,000+ Wellness Seekers
                                </h3>
                                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                                    Monthly tips, member-only offers, and quiet inspiration — delivered with care.
                                </p>
                            </div>

                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/20 transition-all"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand-700 font-semibold text-sm hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    {subscribed ? (
                                        <>
                                            <FiCheck className="w-4 h-4" /> Subscribed
                                        </>
                                    ) : (
                                        <>
                                            Subscribe <FiSend className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ══════════════════════════════════════════
          MAIN FOOTER GRID
      ══════════════════════════════════════════ */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* ── Brand column ── */}
                    <Reveal className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
                                <span className="text-2xl">🌸</span>
                                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent" />
                            </div>
                            <div>
                                <div className="font-serif text-2xl font-bold gradient-text leading-none">
                                    Apurwa's
                                </div>
                                <div className="text-[10px] tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 mt-1">
                                    Spa & Beauty
                                </div>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                            Where beauty meets serenity. We craft personalized wellness rituals designed to
                            restore your glow — inside and out.
                        </p>

                        {/* Rating strip */}
                        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl glass dark:glass-dark mb-6">
                            <div className="flex -space-x-2">
                                {['#f0abfc', '#d946ef', '#a21caf', '#701a75'].map((c, i) => (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-white"
                                        style={{ background: `linear-gradient(135deg, ${c}, #701a75)` }}
                                    >
                                        {['E', 'D', 'O', 'J'][i]}
                                    </div>
                                ))}
                            </div>
                            <div className="text-xs">
                                <div className="flex items-center gap-1">
                                    {'★★★★★'.split('').map((s, i) => (
                                        <span key={i} className="text-amber-400 text-[10px]">{s}</span>
                                    ))}
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 font-medium">
                                    Loved by 1,200+ clients
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-2">
                            {[
                                { Icon: FiInstagram, label: 'Instagram' },
                                { Icon: FiFacebook, label: 'Facebook' },
                                { Icon: FiTwitter, label: 'Twitter' },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="group relative w-11 h-11 rounded-2xl neo-btn flex items-center justify-center text-slate-600 dark:text-slate-300 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <Icon className="w-4 h-4 relative z-10 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </Reveal>

                    {/* ── Explore ── */}
                    <Reveal delay={80} className="lg:col-span-2">
                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                            <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-400 to-brand-700" />
                            Explore
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {exploreLinks.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        className="group inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300" />
                                        <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* ── Services ── */}
                    <Reveal delay={160} className="lg:col-span-2">
                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                            <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-400 to-brand-700" />
                            Services
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {serviceLinks.map((s) => (
                                <li key={s}>
                                    <Link
                                        to="/services"
                                        className="group inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-brand-500 transition-all duration-300" />
                                        <span className="group-hover:translate-x-0.5 transition-transform">{s}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* ── Contact card ── */}
                    <Reveal delay={240} className="lg:col-span-3">
                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                            <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-400 to-brand-700" />
                            Visit Us
                        </h3>

                        <div className="space-y-3">
                            {/* Address */}
                            <div className="flex items-start gap-3 p-3 rounded-2xl glass dark:glass-dark hover:shadow-glow transition-shadow">
                                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shrink-0 shadow-glow">
                                    <FiMapPin className="w-4 h-4 text-white" />
                                </span>
                                <div className="text-xs pt-0.5 leading-relaxed text-slate-700 dark:text-slate-300">
                                    100 FT road
                                    <br />
                                    Hitech city Hyderabad, TS 500081
                                </div>
                            </div>

                            {/* Phone */}
                            <a
                                href="tel:+15551234567"
                                className="flex items-center gap-3 p-3 rounded-2xl glass dark:glass-dark hover:shadow-glow transition-shadow group"
                            >
                                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0 shadow-glow">
                                    <FiPhone className="w-4 h-4 text-white" />
                                </span>
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                                    9652 593 606
                                </span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:beauty@apurwas.spa"
                                className="flex items-center gap-3 p-3 rounded-2xl glass dark:glass-dark hover:shadow-glow transition-shadow group"
                            >
                                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shrink-0 shadow-glow">
                                    <FiMail className="w-4 h-4 text-white" />
                                </span>
                                <span className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                                    beauty@apurwas.spa
                                </span>
                            </a>

                            {/* Hours pill */}
                            <div className="flex items-center gap-3 p-3 rounded-2xl glass dark:glass-dark">
                                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 flex items-center justify-center shrink-0 shadow-glow">
                                    <FiClock className="w-4 h-4 text-white" />
                                </span>
                                <div className="text-xs">
                                    <div className="font-semibold text-slate-900 dark:text-white">Open Today</div>
                                    <div className="text-slate-600 dark:text-slate-400">9:00 AM – 8:00 PM</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <p className="text-xs text-slate-500 dark:text-slate-500 text-center md:text-left flex items-center gap-1.5">
                            © {new Date().getFullYear()} Apurwa's Spa & Beauty Salon. Crafted with
                        </p>

                        {/* Legal + Back to top */}
                        <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl neo-btn text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
                            >
                                Back to top
                                <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}