import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../ui/ScrollToTop'

export default function Layout({ children }) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main key={pathname} className="flex-1 pt-20 md:pt-24 page-enter">
                {children || <Outlet />}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}