import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-sand-50 dark:bg-slate-950">
      <div className="text-center max-w-lg">
        <div className="font-serif text-[120px] md:text-[180px] font-bold leading-none text-brand-600 dark:text-brand-400">
          404
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button to="/" size="lg">Back to Home</Button>
          <Button to="/contact" variant="outline" size="lg">Contact Support</Button>
        </div>
      </div>
    </div>
  )
}