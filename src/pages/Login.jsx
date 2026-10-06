import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiEye, FiEyeOff, FiCheck, FiArrowRight, FiStar, FiZap, FiShield, FiHeart } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPw, setShowPw] = useState(false)
    const [remember, setRemember] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (login(email, password)) navigate('/admin')
    }

    return (
        <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
            {/* ═══ Ambient background ═══ */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-1/3 -right-32 w-[460px] h-[460px] bg-gradient-to-br from-sand-300 to-brand-400 rounded-full blur-3xl opacity-25 dark:opacity-10 blob"
                    style={{ animationDelay: '3s' }}
                />
                <div
                    className="absolute -bottom-32 left-1/3 w-[420px] h-[420px] bg-gradient-to-br from-brand-400 to-brand-700 rounded-full blur-3xl opacity-20 dark:opacity-10 blob"
                    style={{ animationDelay: '5s' }}
                />
                {/* Subtle dot grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.12)_1px,_transparent_1px)] bg-[size:28px_28px] opacity-50 dark:opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* ═══ LEFT — Editorial Panel (no image) ═══ */}
                    <div className="hidden lg:flex flex-col justify-center relative animate-fade-in-up">
                        {/* Brand chip */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass dark:glass-dark mb-8 self-start shadow-glass">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-glow">
                                <span className="text-lg">🌸</span>
                            </div>
                            <div className="leading-none">
                                <div className="font-serif text-base font-bold gradient-text">Apurwa's</div>
                                <div className="text-[9px] tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 mt-0.5">
                                    Spa & Beauty
                                </div>
                            </div>
                        </div>

                        {/* Big headline */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-brand-500/15 to-brand-700/15 border border-brand-500/25 mb-5 self-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300">
                                Member Portal
                            </span>
                        </div>

                        <h1 className="font-serif text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.05] mb-6 text-balance">
                            Your Serenity Awaits,
                            <br />
                            <span className="gradient-text">One Login Away.</span>
                        </h1>

                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                            Access your appointments, membership perks, and personalized wellness plan — all in one calm, beautiful place.
                        </p>

                        {/* Feature grid */}
                        <div className="grid grid-cols-2 gap-4 max-w-lg">
                            {[
                                { icon: FiZap, title: 'Instant Booking', desc: 'Reserve in seconds', color: 'from-brand-400 to-brand-700' },
                                { icon: FiHeart, title: 'Loyalty Rewards', desc: 'Points on every visit', color: 'from-rose-400 to-pink-600' },
                                { icon: FiStar, title: 'VIP Perks', desc: 'Members-only offers', color: 'from-amber-400 to-orange-600' },
                                { icon: FiShield, title: 'Secure & Private', desc: 'Your data protected', color: 'from-emerald-400 to-emerald-600' },
                            ].map((f, i) => {
                                const Icon = f.icon
                                return (
                                    <div
                                        key={f.title}
                                        className="group p-4 rounded-2xl glass dark:glass-dark shadow-glass hover:-translate-y-1 hover:shadow-glow transition-all duration-500 animate-fade-in-up"
                                        style={{ animationDelay: `${200 + i * 100}ms` }}
                                    >
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-glow mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="font-semibold text-slate-900 dark:text-white text-sm">{f.title}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{f.desc}</div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Rating row */}
                        <div className="mt-10 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {['#f0abfc', '#d946ef', '#a21caf', '#701a75'].map((c, i) => (
                                    <div
                                        key={i}
                                        className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[11px] font-bold text-white"
                                        style={{ background: `linear-gradient(135deg, ${c}, #701a75)` }}
                                    >
                                        {['E', 'D', 'O', 'J'][i]}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    {'★★★★★'.split('').map((s, i) => (
                                        <span key={i} className="text-amber-400 text-xs">{s}</span>
                                    ))}
                                    <span className="text-xs font-bold text-slate-900 dark:text-white ml-1">4.9</span>
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                    Loved by 1,200+ clients
                                </div>
                            </div>
                        </div>

                        {/* Decorative corner flourish */}
                        <div className="pointer-events-none absolute -top-8 -right-8 w-64 h-64 opacity-30">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs>
                                    <linearGradient id="loginCorner" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#f0abfc" stopOpacity="0" />
                                        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.6" />
                                    </linearGradient>
                                </defs>
                                <circle cx="160" cy="40" r="60" fill="none" stroke="url(#loginCorner)" strokeWidth="1.5" />
                                <circle cx="160" cy="40" r="100" fill="none" stroke="url(#loginCorner)" strokeWidth="1" strokeDasharray="4 6" />
                                <circle cx="160" cy="40" r="140" fill="none" stroke="url(#loginCorner)" strokeWidth="0.5" strokeDasharray="2 8" />
                            </svg>
                        </div>
                    </div>

                    {/* ═══ RIGHT — Login Form ═══ */}
                    <div className="w-full max-w-md mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                        {/* Mobile brand chip */}
                        <div className="lg:hidden flex items-center gap-3 mb-6 justify-center">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center shadow-glow">
                                <span className="text-2xl">🌸</span>
                            </div>
                            <div className="leading-none">
                                <div className="font-serif text-xl font-bold gradient-text">Apurwa's</div>
                                <div className="text-[10px] tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 mt-1">
                                    Spa & Beauty
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Glow halo behind card */}
                            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 blur-2xl opacity-25" />

                            <div className="relative glass dark:glass-dark rounded-[2rem] p-8 sm:p-10 shadow-glass">
                                {/* Header */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-brand-500/15 to-brand-700/15 border border-brand-500/25 mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300">
                                            Welcome Back
                                        </span>
                                    </div>
                                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                        Sign in to Apurwa's
                                    </h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Manage your appointments, perks & rituals.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative group">
                                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="you@example.com"
                                                className="neo-input w-full !pl-11"
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                                Password
                                            </label>
                                            <a href="#" className="text-xs font-semibold text-brand-600 dark:text-brand-300 hover:underline">
                                                Forgot?
                                            </a>
                                        </div>
                                        <div className="relative group">
                                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                            <input
                                                type={showPw ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                placeholder="••••••••"
                                                className="neo-input w-full !pl-11 !pr-11"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPw(!showPw)}
                                                aria-label={showPw ? 'Hide password' : 'Show password'}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors"
                                            >
                                                {showPw ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember */}
                                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                                        <span className="relative">
                                            <input
                                                type="checkbox"
                                                checked={remember}
                                                onChange={(e) => setRemember(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <span className="block w-5 h-5 rounded-lg neo-inset peer-checked:bg-gradient-to-br peer-checked:from-brand-500 peer-checked:to-brand-700 transition-all" />
                                            {remember && (
                                                <FiCheck className="absolute inset-0 m-auto w-3 h-3 text-white pointer-events-none" />
                                            )}
                                        </span>
                                        <span className="text-sm text-slate-600 dark:text-slate-400">
                                            Keep me signed in
                                        </span>
                                    </label>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-white font-semibold shadow-neo dark:shadow-neo-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                        <span className="relative z-10">Sign In</span>
                                        <FiArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </form>

                                {/* Divider */}
                                <div className="flex items-center gap-4 my-6">
                                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">or</span>
                                    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
                                </div>

                                {/* Social */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <button
                                        type="button"
                                        className="neo-btn py-3 rounded-2xl flex items-center justify-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        Google
                                    </button>
                                    <button
                                        type="button"
                                        className="neo-btn py-3 rounded-2xl flex items-center justify-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
                                    >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                        </svg>
                                        Apple
                                    </button>
                                </div>

                                {/* Sign up link */}
                                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                                    New to Apurwa's?{' '}
                                    <Link to="/register" className="font-semibold gradient-text hover:underline">
                                        Create an account
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Demo hint */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Demo: use any email & password to sign in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}