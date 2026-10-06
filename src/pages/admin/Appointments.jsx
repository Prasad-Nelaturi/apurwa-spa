import { adminStats } from '../../data/mockData'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const statusColor = { Confirmed: 'green', Pending: 'amber' }

export default function Appointments() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Appointments</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage all client appointments and schedules</p>
        </div>
        <Button size="sm">+ New Appointment</Button>
      </div>

      <Card className="p-6 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Service</th>
                <th className="pb-3 font-medium">Date & Time</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...adminStats.recentAppointments, ...adminStats.recentAppointments.map(a => ({ ...a, id: a.id + 10, status: a.status === 'Confirmed' ? 'Pending' : 'Confirmed' }))].map((a) => (
                <tr key={a.id} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <td className="py-3 text-slate-500">#{a.id.toString().padStart(4, '0')}</td>
                  <td className="py-3 font-medium text-slate-900 dark:text-white">{a.customer}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{a.service}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{a.date} · {a.time}</td>
                  <td className="py-3"><Badge color={statusColor[a.status]}>{a.status}</Badge></td>
                  <td className="py-3 text-right font-semibold text-slate-900 dark:text-white">${a.amount}</td>
                  <td className="py-3 text-right">
                    <button className="text-xs text-brand-600 dark:text-brand-400 font-medium hover:underline mr-3">Edit</button>
                    <button className="text-xs text-red-500 font-medium hover:underline">Cancel</button>
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