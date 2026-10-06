import { adminStats } from '../../data/mockData'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

export default function Customers() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Customers</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">View and manage your client base</p>
        </div>
        <Button size="sm">+ Add Customer</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {adminStats.customers.map((c) => (
          <Card key={c.id} hover className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center font-serif text-xl font-bold text-brand-600 dark:text-brand-400">
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{c.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{c.email}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <Badge>{c.member}</Badge>
              <span className="text-xs text-slate-500">{c.phone}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div>
                <div className="font-serif text-xl font-bold text-slate-900 dark:text-white">{c.visits}</div>
                <div className="text-xs text-slate-500">Visits</div>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-slate-900 dark:text-white">${c.totalSpent.toLocaleString()}</div>
                <div className="text-xs text-slate-500">Total Spent</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}