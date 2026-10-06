import { adminStats } from '../../data/mockData'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'

const statusColor = { Confirmed: 'green', Pending: 'amber' }

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: `$${adminStats.totalRevenue.toLocaleString()}`, change: '+12.5%', icon: '💰' },
          { label: 'Appointments', value: adminStats.totalAppointments, change: '+8.2%', icon: '📅' },
          { label: 'Customers', value: adminStats.totalCustomers.toLocaleString(), change: '+15.3%', icon: '👥' },
          { label: 'Avg. Rating', value: adminStats.avgRating, change: '+0.2', icon: '⭐' },
        ].map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
              <Badge color="green">{stat.change}</Badge>
            </div>
            <div className="font-serif text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-6">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={adminStats.revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: '#1e293b', border: 'none', borderRadius: '12px', color: '#f1f5f9',
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#d946ef" strokeWidth={3} dot={{ fill: '#d946ef', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-6">Appointments by Day</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={adminStats.appointmentsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
              <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip
                contentStyle={{
                  background: '#1e293b', border: 'none', borderRadius: '12px', color: '#f1f5f9',
                }}
              />
              <Bar dataKey="count" fill="#d946ef" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Appointments */}
      <Card className="p-6 overflow-hidden">
        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Appointments</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Service</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {adminStats.recentAppointments.map((a) => (
                <tr key={a.id} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <td className="py-3 font-medium text-slate-900 dark:text-white">{a.customer}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{a.service}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{a.date} · {a.time}</td>
                  <td className="py-3">
                    <Badge color={statusColor[a.status]}>{a.status}</Badge>
                  </td>
                  <td className="py-3 text-right font-semibold text-slate-900 dark:text-white">${a.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}