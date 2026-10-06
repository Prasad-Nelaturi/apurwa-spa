import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCheck, FiArrowRight, FiStar, FiGift, FiCalendar, FiTrendingUp, FiHeart } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'

export default function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
    const [showPw, setShowPw] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [agree, setAgree] = useState(false)
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const strength = useMemo(() => {
        const p = form.password
        if (!p) return { score: 0, label: '', color: '' }
        let s = 0
        if (p.length >= 6) s++
        if (p.length >= 10) s++
        if (/[A-Z]/.test(p)) s++
        if (/[0-9]/.test(p)) s++
        if (/[^A-Za-z0-9]/.test(p)) s++
        if (s <= 1) return { score: 1, label: 'Weak', color: 'from-red-400 to-red-600' }
        if (s === 2) return { score: 2, label: 'Fair', color: 'from-amber-400 to-amber-600' }
        if (s === 3) return { score: 3, label: 'Good', color: 'from-yellow-400 to-yellow-600' }
        if (s === 4) return { score: 4, label: 'Strong', color: 'from-emerald-400 to-emerald-600' }
        return { score: 5, label: 'Excellent', color: 'from-brand-400 to-brand-700' }
    }, [form.password])

    const passwordMatch = form.confirm.length > 0 && form.password === form.confirm

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.password !== form.confirm) return
        if (!agree) return
        if (register(form.name, form.email, form.password)) navigate('/')
    }

    return (
        <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-1/3 -left-32 w-[460px] h-[460px] bg-gradient-to-br from-sand-300 to-brand-400 rounded-full blur-3xl opacity-25 dark:opacity-10 blob"
                    style={{ animationDelay: '3s' }}
                />
                <div
                    className="absolute -bottom-32 right-1/3 w-[420px] h-[420px] bg-gradient-to-br from-brand-400 to-brand-700 rounded-full blur-3xl opacity-20 dark:opacity-10 blob"
                    style={{ animationDelay: '5s' }}
                />
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

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-brand-500/15 to-brand-700/15 border border-brand-500/25 mb-5 self-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300">
                                Join Free Today
                            </span>
                        </div>

                        {/* Big headline */}
                        <h1 className="font-serif text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-[1.05] mb-6 text-balance">
                            Begin Your
                            <br />
                            <span className="gradient-text">Wellness Journey.</span>
                        </h1>

                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
                            Join 12,000+ members enjoying exclusive treatments, personalized rituals, and member-only perks.
                        </p>

                        {/* Feature list */}
                        <div className="space-y-4 max-w-lg mb-10">
                            {[
                                { icon: FiCalendar, text: 'Book appointments in seconds' },
                                { icon: FiGift, text: 'Earn loyalty points on every visit' },
                                { icon: FiStar, text: 'Access members-only offers' },
                                { icon: FiTrendingUp, text: 'Personalized wellness recommendations' },
                            ].map((f, i) => {
                                const Icon = f.icon
                                return (
                                    <div
                                        key={f.text}
                                        className="flex items-center gap-3 animate-fade-in-up"
                                        style={{ animationDelay: `${200 + i * 100}ms` }}
                                    >
                                        <span className="w-10 h-10 rounded-2xl glass dark:glass-dark flex items-center justify-center shadow-glass shrink-0">
                                            <Icon className="w-4 h-4 text-brand-500" />
                                        </span>
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            {f.text}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Trust row */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {['#f0abfc', '#d946ef', '#a21caf', '#701a75'].map((c, i) => (
                                    <div
                                        key={i}
                                        className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[11px] font-bold text-white"
                                        style={{ background: `linear-gradient(135deg, ${c}, #701a75)` }}
                                    >
                                        {['S', 'M', 'A', 'K'][i]}
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
                                    Rated by 12,000+ members
                                </div>
                            </div>
                        </div>

                        {/* Corner flourish */}
                        <div className="pointer-events-none absolute -top-8 -left-8 w-64 h-64 opacity-30">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs>
                                    <linearGradient id="regCorner" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#f0abfc" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <circle cx="40" cy="40" r="60" fill="none" stroke="url(#regCorner)" strokeWidth="1.5" />
                                <circle cx="40" cy="40" r="100" fill="none" stroke="url(#regCorner)" strokeWidth="1" strokeDasharray="4 6" />
                                <circle cx="40" cy="40" r="140" fill="none" stroke="url(#regCorner)" strokeWidth="0.5" strokeDasharray="2 8" />
                            </svg>
                        </div>
                    </div>

                    {/* ═══ RIGHT — Register Form ═══ */}
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
                            {/* Glow halo */}
                            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 blur-2xl opacity-25" />

                            <div className="relative glass dark:glass-dark rounded-[2rem] p-8 sm:p-10 shadow-glass">
                                {/* Header */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-br from-brand-500/15 to-brand-700/15 border border-brand-500/25 mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 animate-pulse" />
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-600 dark:text-brand-300">
                                            Join Free
                                        </span>
                                    </div>
                                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                        Create account
                                    </h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        Start your journey in under a minute.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative group">
                                            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                            <input
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Jane Doe"
                                                className="neo-input w-full !pl-11"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative group">
                                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="you@example.com"
                                                className="neo-input w-full !pl-11"
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Password
                                        </label>
                                        <div className="relative group">
                                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                            <input
                                                name="password"
                                                type={showPw ? 'text' : 'password'}
                                                value={form.password}
                                                onChange={handleChange}
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

                                        {form.password && (
                                            <div className="mt-3 animate-fade-in">
                                                <div className="flex gap-1.5 mb-2">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <span
                                                            key={i}
                                                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= strength.score
                                                                    ? `bg-gradient-to-r ${strength.color}`
                                                                    : 'bg-slate-200 dark:bg-slate-800'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-slate-500 dark:text-slate-400">Strength</span>
                                                    <span className={`font-semibold bg-gradient-to-r ${strength.color} bg-clip-text text-transparent`}>
                                                        {strength.label}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                                            Confirm Password
                                        </label>
                                        <div className="relative group">
                                            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
                                            <input
                                                name="confirm"
                                                type={showConfirm ? 'text' : 'password'}
                                                value={form.confirm}
                                                onChange={handleChange}
                                                required
                                                placeholder="••••••••"
                                                className="neo-input w-full !pl-11 !pr-11"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirm(!showConfirm)}
                                                aria-label={showConfirm ? 'Hide password' : 'Show password'}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-brand-600 transition-colors"
                                            >
                                                {showConfirm ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
                                            </button>
                                        </div>

                                        {form.confirm && (
                                            <div className="mt-2 flex items-center gap-1.5 text-xs animate-fade-in">
                                                {passwordMatch ? (
                                                    <>
                                                        <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                                                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                                            Passwords match
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="w-3.5 h-3.5 text-red-500 flex items-center justify-center font-bold">×</span>
                                                        <span className="text-red-500 font-medium">Passwords do not match</span>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Terms */}
                                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                        <span className="relative mt-0.5">
                                            <input
                                                type="checkbox"
                                                checked={agree}
                                                onChange={(e) => setAgree(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <span className="block w-5 h-5 rounded-lg neo-inset peer-checked:bg-gradient-to-br peer-checked:from-brand-500 peer-checked:to-brand-700 transition-all" />
                                            {agree && (
                                                <FiCheck className="absolute inset-0 m-auto w-3 h-3 text-white pointer-events-none" />
                                            )}
                                        </span>
                                        <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                            I agree to the{' '}
                                            <a href="#" className="font-semibold text-brand-600 dark:text-brand-300 hover:underline">
                                                Terms of Service
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="font-semibold text-brand-600 dark:text-brand-300 hover:underline">
                                                Privacy Policy
                                            </a>
                                        </span>
                                    </label>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={!agree}
                                        className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-white font-semibold shadow-neo dark:shadow-neo-dark hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                        <span className="relative z-10">Create Account</span>
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

                                {/* Sign in link */}
                                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                                    Already have an account?{' '}
                                    <Link to="/login" className="font-semibold gradient-text hover:underline">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>

                        {/* Demo hint */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Demo: any name, email & password works
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}