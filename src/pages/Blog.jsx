import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiClock, FiArrowRight, FiCalendar, FiSliders } from 'react-icons/fi'
import PageHero from '../components/ui/PageHero'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { blogPosts } from '../data/mockData'

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))]

export default function Blog() {
    const [active, setActive] = useState('All')
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        return blogPosts.filter((p) => {
            const matchCat = active === 'All' || p.category === active
            const matchQuery =
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.excerpt.toLowerCase().includes(query.toLowerCase())
            return matchCat && matchQuery
        })
    }, [active, query])

    const featured = blogPosts[0]
    const showFeatured = active === 'All' && !query
    const rest = showFeatured ? filtered.filter((p) => p.id !== featured.id) : filtered

    return (
        <div className="overflow-hidden">
            <PageHero
                eyebrow="Journal"
                title="Wellness Insights &"
                highlight="Stories"
                subtitle="Expert tips, industry trends, and quiet wisdom from the world of beauty and self-care."
                breadcrumbs={[{ label: 'Blog' }]}
            />

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ══════════════════════════════════════════
    FEATURED POST — Editorial Hero
══════════════════════════════════════════ */}
                    {showFeatured && (
                        <Reveal>
                            <Link to={`/blog/${featured.id}`} className="block group mb-20">
                                <div className="relative">
                                    {/* Glow behind card */}
                                    <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 blur-2xl opacity-25 group-hover:opacity-50 transition-opacity duration-700" />

                                    <article className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 border border-white/10 shadow-neo dark:shadow-neo-dark">
                                        {/* Full-bleed image */}
                                        <div className="relative h-[560px] md:h-[640px] lg:h-[680px] overflow-hidden">
                                            <img
                                                src={featured.image}
                                                alt={featured.title}
                                                className="w-full h-full object-cover scale-105 transition-transform duration-[1200ms] ease-smooth group-hover:scale-110"
                                            />

                                            {/* Layered overlays for depth */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-transparent to-transparent mix-blend-overlay" />
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,_rgba(217,70,239,0.35),_transparent_45%)]" />

                                            {/* ── Floating top-left badge cluster ── */}
                                            <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
                                                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-700 text-white text-xs font-bold shadow-glow backdrop-blur-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                    Featured Story
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-semibold">
                                                    {featured.category}
                                                </div>
                                            </div>

                                            {/* ── Floating top-right read-time ── */}
                                            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-medium">
                                                <FiClock className="w-3.5 h-3.5" />
                                                {featured.readTime}
                                            </div>

                                            {/* ── Bottom content overlay ── */}
                                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 lg:p-14">
                                                <div className="max-w-3xl">
                                                    {/* Date pill */}
                                                    <div className="inline-flex items-center gap-2 mb-5 text-xs font-medium text-white/80">
                                                        <span className="w-8 h-px bg-gradient-to-r from-brand-400 to-transparent" />
                                                        <FiCalendar className="w-3.5 h-3.5" />
                                                        {featured.date}
                                                    </div>

                                                    {/* Title */}
                                                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5 text-balance tracking-tight">
                                                        {featured.title}
                                                    </h2>

                                                    {/* Excerpt */}
                                                    <p className="hidden md:block text-white/75 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl line-clamp-2">
                                                        {featured.excerpt}
                                                    </p>

                                                    {/* Author + CTA row */}
                                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative">
                                                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 blur-md opacity-70" />
                                                                <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white font-bold ring-2 ring-white/30">
                                                                    {featured.author.charAt(0)}
                                                                </div>
                                                            </div>
                                                            <div className="text-white">
                                                                <div className="text-sm font-semibold leading-none mb-1">
                                                                    {featured.author}
                                                                </div>
                                                                <div className="text-xs text-white/60">Wellness Contributor</div>
                                                            </div>
                                                        </div>

                                                        {/* CTA chip */}
                                                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold shadow-xl group-hover:shadow-glow group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-brand-700 group-hover:text-white transition-all duration-500">
                                                            Read Full Story
                                                            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* ── Decorative corner flourish ── */}
                                            <div className="pointer-events-none absolute bottom-0 right-0 w-64 h-64 opacity-20">
                                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                                    <defs>
                                                        <linearGradient id="cornerGrad" x1="0" y1="0" x2="1" y2="1">
                                                            <stop offset="0%" stopColor="#f0abfc" stopOpacity="0" />
                                                            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle cx="180" cy="180" r="60" fill="none" stroke="url(#cornerGrad)" strokeWidth="1.5" />
                                                    <circle cx="180" cy="180" r="100" fill="none" stroke="url(#cornerGrad)" strokeWidth="1" strokeDasharray="4 6" />
                                                    <circle cx="180" cy="180" r="140" fill="none" stroke="url(#cornerGrad)" strokeWidth="0.5" strokeDasharray="2 8" />
                                                </svg>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </Link>
                        </Reveal>
                    )}

                    {/* Filter bar */}
                    <Reveal>
                        <Card glass className="p-4 md:p-5 mb-10">
                            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 lg:pb-0">
                                    <FiSliders className="w-4 h-4 text-brand-500 shrink-0" />
                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => setActive(cat)}
                                            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${active === cat
                                                ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow'
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-sand-200/60 dark:hover:bg-slate-800/60'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                <div className="relative lg:w-72">
                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="neo-input w-full !pl-11"
                                    />
                                </div>
                            </div>
                        </Card>
                    </Reveal>

                    {/* Grid */}
                    {rest.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {rest.map((post, i) => (
                                <Reveal key={post.id} delay={(i % 6) * 80}>
                                    <Link to={`/blog/${post.id}`} className="block group h-full">
                                        <Card hover className="overflow-hidden h-full flex flex-col">
                                            <div className="relative h-56 overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="absolute top-4 left-4">
                                                    <Badge>{post.category}</Badge>
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500 mb-3">
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <FiCalendar className="w-3.5 h-3.5" /> {post.date}
                                                    </span>
                                                    <span className="opacity-50">•</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:gradient-text transition-all line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 line-clamp-2 flex-1">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                                        By {post.author}
                                                    </span>
                                                    <FiArrowRight className="w-4 h-4 text-brand-500 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <Card className="p-16 text-center">
                            <div className="text-6xl mb-4">📭</div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                No articles found
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-6">
                                Try a different search or category.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setQuery('')
                                    setActive('All')
                                }}
                            >
                                Clear Filters
                            </Button>
                        </Card>
                    )}

                    {/* Newsletter */}
                    <Reveal delay={200}>
                        <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-10 md:p-16 shadow-glow-lg">
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
                            <div className="relative grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                                        Wellness in Your Inbox
                                    </h3>
                                    <p className="text-white/85">
                                        Subscribe for monthly tips, member-only offers, and quiet inspiration.
                                    </p>
                                </div>
                                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Your email address"
                                        className="flex-1 px-5 py-3.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                                    />
                                    <Button type="submit" variant="glass" className="!bg-white !text-brand-700 hover:!bg-white/90">
                                        Subscribe
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}