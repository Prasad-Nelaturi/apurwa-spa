import { FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'
import { team } from '../../data/mockData'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Reveal from '../ui/Reveal'

export default function TeamPreview() {
    return (
        <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    eyebrow="Meet the Artists"
                    title="The Experts Behind the Glow"
                    subtitle="Passionate professionals dedicated to helping you look and feel your absolute best."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <Reveal key={member.id} delay={i * 100}>
                            <Card hover className="overflow-hidden text-center group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-72 object-cover transition-transform duration-700 ease-smooth group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Social on hover */}
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
    )
}