import { useParams, Link } from 'react-router-dom'
import {
    FiCalendar, FiClock, FiArrowRight, FiTwitter, FiFacebook, FiLinkedin,
    FiHeart, FiBookmark, FiChevronLeft,
} from 'react-icons/fi'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Reveal from '../components/ui/Reveal'
import { blogPosts } from '../data/mockData'

export default function BlogDetails() {
    const { id } = useParams()
    const post = blogPosts.find((p) => p.id === Number(id))

    if (!post) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">📄</div>
                    <h1 className="font-serif text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Article Not Found
                    </h1>
                    <Button to="/blog" className="mt-4">Back to Blog</Button>
                </div>
            </div>
        )
    }

    const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-12 pb-20">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-sand-50 to-brand-100 dark:from-slate-950 dark:via-slate-900 dark:to-brand-950/40" />
                    <div className="absolute top-32 left-1/4 w-[400px] h-[400px] bg-brand-300/30 dark:bg-brand-700/10 rounded-full blur-3xl blob" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                        <Link to="/" className="hover:text-brand-600">Home</Link>
                        <span className="opacity-50">/</span>
                        <Link to="/blog" className="hover:text-brand-600">Blog</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-slate-900 dark:text-white font-medium truncate">{post.title}</span>
                    </nav>

                    <Reveal>
                        <div className="flex gap-2 mb-6">
                            <Badge>{post.category}</Badge>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] text-balance">
                            {post.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-balance">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-lg font-bold shadow-glow">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                                        {post.author}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">Contributor</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                <span className="inline-flex items-center gap-1.5">
                                    <FiCalendar className="w-4 h-4" /> {post.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <FiClock className="w-4 h-4" /> {post.readTime}
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Featured image */}
            <section className="pb-12 -mt-4">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-neo dark:shadow-neo-dark border-4 border-white/60 dark:border-white/10">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[400px] md:h-[520px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Content + Sidebar */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Article */}
                        <article className="lg:col-span-2">
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <Reveal>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:gradient-text first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85]">
                                        {post.excerpt}
                                    </p>
                                </Reveal>

                                <Reveal>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        {post.content} At Apurwa's, we believe that true wellness is a holistic practice
                                        that encompasses mind, body, and spirit. Our team of experts has compiled years
                                        of experience to bring you insights that truly make a difference in your daily
                                        self-care routine.
                                    </p>
                                </Reveal>

                                <Reveal>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
                                        Why This Matters
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                        Understanding the science and art behind these practices empowers you to make
                                        informed decisions about your wellness journey. Whether you are a seasoned spa
                                        enthusiast or just beginning to explore self-care, there is always something new
                                        to learn and incorporate into your routine.
                                    </p>
                                </Reveal>

                                <Reveal>
                                    <blockquote className="relative my-10 rounded-3xl overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-800" />
                                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                                        <div className="relative p-8 md:p-10">
                                            <div className="text-5xl font-serif text-white/40 leading-none mb-3">"</div>
                                            <p className="font-serif text-xl md:text-2xl italic text-white leading-relaxed">
                                                Self-care is not selfish. It is the foundation upon which we build our best
                                                selves.
                                            </p>
                                        </div>
                                    </blockquote>
                                </Reveal>

                                <Reveal>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        We encourage you to take what resonates and leave the rest. Wellness is deeply
                                        personal, and your journey is yours alone. Our doors are always open when you
                                        are ready to take the next step.
                                    </p>
                                </Reveal>
                            </div>

                            {/* Share bar */}
                            <Reveal>
                                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <button className="w-11 h-11 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-rose-500">
                                            <FiHeart className="w-5 h-5" />
                                        </button>
                                        <button className="w-11 h-11 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-brand-600">
                                            <FiBookmark className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-2">
                                            Share:
                                        </span>
                                        {[FiTwitter, FiFacebook, FiLinkedin].map((Icon, i) => (
                                            <button
                                                key={i}
                                                className="w-10 h-10 rounded-2xl neo-btn flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-brand-600"
                                            >
                                                <Icon className="w-4 h-4" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            {/* Back button */}
                            <Reveal>
                                <div className="mt-10">
                                    <Button to="/blog" variant="outline">
                                        <FiChevronLeft className="w-4 h-4" /> Back to All Articles
                                    </Button>
                                </div>
                            </Reveal>
                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-8 lg:sticky lg:top-28 self-start">
                            {/* Author card */}
                            <Reveal>
                                <Card className="p-6">
                                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-4">
                                        About the Author
                                    </h3>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-xl font-bold shadow-glow">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900 dark:text-white">
                                                {post.author}
                                            </div>
                                            <div className="text-xs text-slate-500">Wellness Contributor</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Passionate about sharing wellness wisdom and helping others find their inner
                                        glow through mindful self-care.
                                    </p>
                                </Card>
                            </Reveal>

                            {/* Related */}
                            {related.length > 0 && (
                                <Reveal delay={80}>
                                    <Card className="p-6">
                                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-5">
                                            Related Reads
                                        </h3>
                                        <div className="space-y-4">
                                            {related.map((r) => (
                                                <Link
                                                    key={r.id}
                                                    to={`/blog/${r.id}`}
                                                    className="flex gap-3 group items-start"
                                                >
                                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                                                        <img
                                                            src={r.image}
                                                            alt={r.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 line-clamp-2 leading-snug mb-1">
                                                            {r.title}
                                                        </h4>
                                                        <span className="text-xs text-slate-500">{r.date}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </Card>
                                </Reveal>
                            )}

                            {/* CTA */}
                            <Reveal delay={160}>
                                <Card className="p-6 relative overflow-hidden !border-0 !bg-gradient-to-br !from-brand-500 !via-brand-600 !to-brand-800 text-white shadow-glow">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                                    <div className="relative">
                                        <h3 className="font-serif text-lg font-bold mb-2">
                                            Need a Consultation?
                                        </h3>
                                        <p className="text-sm text-white/85 mb-5">
                                            Book a free 15-minute wellness consultation with our experts.
                                        </p>
                                        <Button
                                            to="/contact"
                                            variant="glass"
                                            className="w-full !bg-white !text-brand-700 hover:!bg-white/90"
                                        >
                                            Book Now <FiArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            </Reveal>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}