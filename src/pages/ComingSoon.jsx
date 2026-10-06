import { useState } from 'react'
import Button from '../components/ui/Button'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setDone(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-br from-brand-50 via-sand-50 to-brand-100 dark:from-slate-950 dark:via-slate-900 dark:to-brand-950/30">
      <div className="text-center max-w-2xl">
        <span className="text-6xl mb-6 inline-block animate-bounce">🌸</span>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          Something Beautiful <br />
          <span className="text-brand-600 dark:text-brand-400">is Coming</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
          We are crafting a new experience for you. Sign up to be the first to know when we launch.
        </p>

        {done ? (
          <div className="inline-block px-8 py-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-medium">
            ✓ You're on the list! We'll be in touch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <Button type="submit" size="lg">Notify Me</Button>
          </form>
        )}

        <div className="mt-10 flex justify-center gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-brand-600">Instagram</a>
          <a href="#" className="hover:text-brand-600">Facebook</a>
          <a href="#" className="hover:text-brand-600">Twitter</a>
        </div>
      </div>
    </div>
  )
}