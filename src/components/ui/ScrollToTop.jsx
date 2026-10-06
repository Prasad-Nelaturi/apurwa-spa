import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

            setProgress(pct)
            setVisible(scrollTop > 400)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Circumference of the progress ring (r = 22)
    const radius = 22
    const circumference = 2 * Math.PI * radius
    const dashOffset = circumference - (progress / 100) * circumference

    return (
        <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className={`fixed z-50 left-4 sm:left-6 lg:left-8 bottom-4 sm:bottom-6 lg:bottom-8 transition-all duration-500 ease-smooth group ${visible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-6 pointer-events-none'
                }`}
        >
            {/* Outer glow ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />

            {/* Button body */}
            <span className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-glow group-hover:shadow-glow-lg group-hover:-translate-y-1 group-active:translate-y-0 transition-all duration-300">
                {/* Progress ring SVG */}
                <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 48 48"
                >
                    {/* Track */}
                    <circle
                        cx="24"
                        cy="24"
                        r={radius}
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                    />
                    {/* Progress */}
                    <circle
                        cx="24"
                        cy="24"
                        r={radius}
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        style={{ transition: 'stroke-dashoffset 0.15s linear' }}
                    />
                </svg>

                {/* Arrow icon */}
                <FiArrowUp
                    className="relative w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                />
            </span>

            {/* Tooltip */}
            <span className="hidden sm:block absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                Back to top
            </span>
        </button>
    )
}