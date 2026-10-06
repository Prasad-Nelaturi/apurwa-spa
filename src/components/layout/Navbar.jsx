import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import Button from '../ui/Button'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { user, logout } = useAuth()
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => setOpen(false), [location])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${scrolled
                    ? 'py-2'
                    : 'py-4'
                    }`}
            >
                <nav className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-smooth ${scrolled ? 'mt-2' : 'mt-0'
                    }`}>
                    <div className={`relative flex items-center justify-between h-16 rounded-3xl px-4 sm:px-6 transition-all duration-500 ease-smooth ${scrolled ? 'glass dark:glass-dark shadow-glass' : 'bg-transparent'
                        }`}>
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2.5 group">
                            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 flex items-center justify-center shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                <span className="text-xl">🌸</span>
                                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="leading-none">
                                <span className="font-serif text-xl font-bold gradient-text block">Apurwa's</span>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">
                                    Spa & Beauty
                                </span>
                            </div>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-1 p-1 rounded-2xl neo-inset">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                            ? 'text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow'
                                            : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-300'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="relative w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-300 overflow-hidden"
                            >
                                <span className="relative w-5 h-5">
                                    <FiSun
                                        className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                                            }`}
                                    />
                                    <FiMoon
                                        className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${theme === 'dark' ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                                            }`}
                                    />
                                </span>
                            </button>

                            {user ? (
                                <div className="hidden md:flex items-center gap-2">
                                    <Link
                                        to="/admin"
                                        className="w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-brand-600"
                                        title="Dashboard"
                                    >
                                        <FiUser className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-red-500"
                                        title="Logout"
                                    >
                                        <FiLogOut className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <div className="hidden md:flex items-center gap-2">
                                    <Link
                                        to="/login"
                                        className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 px-3 py-2"
                                    >
                                        Login
                                    </Link>
                                    <Button to="/contact" size="sm">Book Now</Button>
                                </div>
                            )}

                            <button
                                onClick={() => setOpen(!open)}
                                aria-label="Menu"
                                className="lg:hidden w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-200"
                            >
                                {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-smooth ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
                    onClick={() => setOpen(false)}
                />
                <div
                    className={`absolute top-20 left-4 right-4 glass dark:glass-dark rounded-3xl p-6 shadow-glass transition-all duration-500 ease-smooth ${open ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
                        }`}
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link, i) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                style={{ transitionDelay: `${i * 40}ms` }}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-2xl text-sm font-medium transition-all ${isActive
                                        ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow'
                                        : 'text-slate-700 dark:text-slate-200 hover:bg-sand-200/60 dark:hover:bg-slate-800/60'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <div className="pt-4 mt-3 border-t border-slate-200/50 dark:border-slate-700/50 flex flex-col gap-2">
                            {user ? (
                                <>
                                    <Button to="/admin" variant="secondary" className="w-full">Dashboard</Button>
                                    <Button variant="outline" onClick={logout} className="w-full">Logout</Button>
                                </>
                            ) : (
                                <>
                                    <Button to="/login" variant="secondary" className="w-full">Login</Button>
                                    <Button to="/contact" className="w-full">Book Now</Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}