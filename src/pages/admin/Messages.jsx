import { adminStats } from '../../data/mockData'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'

export default function Messages() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Messages</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Customer inquiries and communications</p>
      </div>

      <div className="space-y-4">
        {adminStats.messages.map((m) => (
          <Card key={m.id} hover className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center font-bold text-brand-600 dark:text-brand-400">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{m.name}</h3>
                  <p className="text-xs text-slate-500">{m.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!m.read && <Badge color="brand">New</Badge>}
                <span className="text-xs text-slate-500">{m.date}</span>
              </div>
            </div>
            <h4 className="font-medium text-slate-900 dark:text-white mb-2">{m.subject}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{m.message}</p>
            <div className="flex gap-2">
              <button className="text-xs px-4 py-2 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors">
                Reply
              </button>
              <button className="text-xs px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Mark as Read
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}