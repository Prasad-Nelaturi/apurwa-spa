import { useState } from 'react'
import {
    FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck, FiInstagram,
    FiFacebook, FiTwitter, FiArrowRight,
} from 'react-icons/fi'
import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'

const contactMethods = [
    { icon: FiMapPin, title: 'Visit Us', lines: ['100 FT road', 'Hitech city Hyderabad, TS 500081'], color: 'from-brand-400 to-brand-700' },
    { icon: FiPhone, title: 'Call Us', lines: ['+19652 593 606', 'Mon-Sat: 9AM - 8PM'], color: 'from-emerald-400 to-emerald-600' },
    { icon: FiMail, title: 'Email Us', lines: ['beauty@apurwas.spa', 'We reply within 24h'], color: 'from-amber-400 to-orange-600' },
]

export default function Contact() {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', service: '', date: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    }

    return (
        <div className="overflow-hidden">
            <PageHero
                eyebrow="Get in Touch"
                title="Book Your"
                highlight="Escape"
                subtitle="Ready to unwind? Fill out the form below and our team will confirm your appointment within 24 hours."
                breadcrumbs={[{ label: 'Contact' }]}
            />

            {/* Contact methods */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactMethods.map((m, i) => {
                            const Icon = m.icon
                            return (
                                <Reveal key={m.title} delay={i * 100}>
                                    <Card hover className="relative p-7 group overflow-hidden">
                                        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${m.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`} />
                                        <div className="relative flex items-start gap-4">
                                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-glow shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                                                    {m.title}
                                                </h3>
                                                {m.lines.map((l) => (
                                                    <p key={l} className="text-sm text-slate-600 dark:text-slate-400">{l}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Form */}
                        <Reveal className="lg:col-span-3">
                            <Card className="p-8 md:p-10 h-full">
                                <div className="mb-8">
                                    <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                        Send a Message
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                                        Tell us about your preferences and we'll craft the perfect appointment.
                                    </p>
                                </div>

                                {submitted && (
                                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/15 border border-emerald-500/30 flex items-center gap-3 animate-fade-in">
                                        <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-glow shrink-0">
                                            <FiCheck className="w-4 h-4 text-white" />
                                        </span>
                                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                            Thank you! Your appointment request has been received.
                                        </span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Jane Doe"
                                                className="neo-input w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="jane@example.com"
                                                className="neo-input w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+1 555 000 0000"
                                                className="neo-input w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                                Preferred Date
                                            </label>
                                            <input
                                                name="date"
                                                type="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                className="neo-input w-full"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Service *
                                        </label>
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            required
                                            className="neo-input w-full appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a service</option>
                                            <option>Massage Therapy</option>
                                            <option>Facial Treatment</option>
                                            <option>Hair Styling</option>
                                            <option>Nail Care</option>
                                            <option>Body Treatment</option>
                                            <option>Couples Retreat</option>
                                            <option>Consultation Only</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us about your preferences, any allergies, or special occasions..."
                                            className="neo-input w-full resize-none"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        <FiSend className="w-4 h-4" /> Send Message
                                    </Button>

                                    <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                                        We'll never share your information. Read our{' '}
                                        <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline">
                                            privacy policy
                                        </a>
                                        .
                                    </p>
                                </form>
                            </Card>
                        </Reveal>

                        {/* Sidebar */}
                        <div className="lg:col-span-2 space-y-6">
                            <Reveal delay={100}>
                                <Card className="overflow-hidden p-0 h-72 md:h-80">
                                    <iframe
                                        title="map"
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=-118.42%2C34.05%2C-118.36%2C34.09&layer=mapnik"
                                        className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                                        loading="lazy"
                                    />
                                </Card>
                            </Reveal>

                            <Reveal delay={180}>
                                <Card className="p-6">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-glow">
                                            <FiClock className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                                            Opening Hours
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {[
                                            ['Monday — Friday', '9:00 AM – 8:00 PM'],
                                            ['Saturday', '9:00 AM – 6:00 PM'],
                                            ['Sunday', '10:00 AM – 5:00 PM'],
                                        ].map(([day, time]) => (
                                            <li
                                                key={day}
                                                className="flex justify-between items-center py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0"
                                            >
                                                <span className="text-sm text-slate-600 dark:text-slate-400">{day}</span>
                                                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                                                    {time}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </Reveal>

                            <Reveal delay={260}>
                                <Card className="p-6 relative overflow-hidden !border-0 !bg-gradient-to-br !from-brand-500 !via-brand-600 !to-brand-800 text-white shadow-glow">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                                    <div className="relative">
                                        <div className="text-3xl mb-3">💬</div>
                                        <h3 className="font-serif text-lg font-bold mb-2">Prefer to Chat?</h3>
                                        <p className="text-sm text-white/85 mb-5">
                                            Connect with us on social — we're quick to reply.
                                        </p>
                                        <div className="flex gap-2">
                                            {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                                                <a
                                                    key={i}
                                                    href="#"
                                                    className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white hover:text-brand-600 transition-colors"
                                                >
                                                    <Icon className="w-4 h-4" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}