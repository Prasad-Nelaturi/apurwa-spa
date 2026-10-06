import { Routes, Route, NavLink, Navigate, Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Layout from '../components/layout/Layout'

// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import ServiceDetails from '../pages/ServiceDetails'
import Pricing from '../pages/Pricing'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import ComingSoon from '../pages/ComingSoon'

// Admin
import Dashboard from '../pages/admin/Dashboard'
import Appointments from '../pages/admin/Appointments'
import Customers from '../pages/admin/Customers'
import ServicesAdmin from '../pages/admin/ServicesAdmin'
import Messages from '../pages/admin/Messages'

const adminNav = [
    { to: '/admin', label: 'Dashboard', icon: '📊', end: true },
    { to: '/admin/appointments', label: 'Appointments', icon: '📅' },
    { to: '/admin/customers', label: 'Customers', icon: '👥' },
    { to: '/admin/services', label: 'Services', icon: '💆' },
    { to: '/admin/messages', label: 'Messages', icon: '✉️' },
]

function AdminLayout() {
    const { user } = useAuth()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    if (!user) return <Navigate to="/login" replace />

    return (
        <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
            {/* Sidebar */}
            <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="text-2xl">🌸</span>
                        <span className="font-serif text-xl font-bold text-slate-900 dark:text-white">Apurwa's</span>
                    </Link>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Admin Panel</p>
                </div>
                <nav className="p-4 space-y-1">
                    {adminNav.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            onClick={() => setSidebarOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                                    ? 'bg-brand-600 text-white'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`
                            }
                        >
                            <span>{item.icon}</span>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                        ← Back to Site
                    </Link>
                </div>
            </aside>

            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Main */}
            <div className="flex-1 min-w-0">
                <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4 flex items-center justify-between">
                    <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setSidebarOpen(true)}>
                        <svg className="w-6 h-6 text-slate-700 dark:text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h2 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Welcome back, {user.name}</h2>
                    <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center font-bold text-brand-600 dark:text-brand-400">
                        {user.name.charAt(0)}
                    </div>
                </header>
                <div className="p-4 md:p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public site with Navbar/Footer */}
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* Standalone pages */}
            <Route path="/coming-soon" element={<ComingSoon />} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="customers" element={<Customers />} />
                <Route path="services" element={<ServicesAdmin />} />
                <Route path="messages" element={<Messages />} />
            </Route>
        </Routes>
    )
}