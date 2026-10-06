import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

export default function CTASection() {
    return (
        <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-12 md:p-20 text-center shadow-glow-lg animated-gradient">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-30" />

                        <div className="relative max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-semibold text-white tracking-wider uppercase">
                                    Limited Offer
                                </span>
                            </div>

                            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                                Begin Your Transformation
                                <br />
                                <span className="opacity-90">Today</span>
                            </h2>

                            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto text-balance">
                                Book your first appointment and enjoy <span className="font-bold text-white">15% off</span> any signature treatment. Your glow awaits.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button to="/contact" size="lg" variant="glass">
                                    <FiCalendar className="w-4 h-4" /> Book an Appointment
                                </Button>
                                <Button
                                    to="/pricing"
                                    size="lg"
                                    variant="glass"
                                    className="!bg-white/90 !text-brand-700 hover:!bg-white hover:!text-brand-800 hover:shadow-xl"
                                >
                                    View Memberships <FiArrowRight className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="mt-12 flex items-center justify-center gap-8 text-white/70 text-sm">
                                <span>✓ No credit card required</span>
                                <span className="hidden sm:inline">✓ Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}