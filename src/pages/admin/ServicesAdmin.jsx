import { services } from '../../data/mockData'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

export default function ServicesAdmin() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Services</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your service catalog and pricing</p>
        </div>
        <Button size="sm">+ Add Service</Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 font-medium">Service</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Duration</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Rating</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={s.image} alt={s.name} className="w-12 h-12 rounded-lg object-cover" />
                      <span className="font-medium text-slate-900 dark:text-white">{s.name}</span>
                    </div>
                  </td>
                  <td className="p-4"><Badge>{s.category}</Badge></td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{s.duration}</td>
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">${s.price}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">⭐ {s.rating}</td>
                  <td className="p-4 text-right">
                    <button className="text-xs text-brand-600 dark:text-brand-400 font-medium hover:underline mr-3">Edit</button>
                    <button className="text-xs text-red-500 font-medium hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}