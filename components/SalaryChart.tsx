'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import type { SalaryComponent } from '@/lib/calculators'
import { formatINR } from '@/lib/calculators'

interface Props { components: SalaryComponent[] }

const RADIAN = Math.PI / 180
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  if (percent < 0.06) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>{`${(percent * 100).toFixed(0)}%`}</text>
}

export default function SalaryChart({ components }: Props) {
  const earnings = components.filter(c => c.type === 'earning')
  const deductions = components.filter(c => c.type === 'deduction')

  const earningData = earnings.map(c => ({ name: c.label, value: Math.round(c.annual), color: c.color }))
  const deductionData = deductions.map(c => ({ name: c.label, value: Math.round(c.annual), color: c.color }))

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-sky-500 inline-block"></span>
          Earnings Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={earningData} cx="50%" cy="50%" outerRadius={100} dataKey="value" labelLine={false} label={renderLabel}>
              {earningData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip formatter={(v: number) => formatINR(v)} />
            <Legend formatter={(v) => <span className="text-xs text-slate-600">{v}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
          Deductions Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={deductionData} cx="50%" cy="50%" outerRadius={90} dataKey="value" labelLine={false} label={renderLabel}>
              {deductionData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Pie>
            <Tooltip formatter={(v: number) => formatINR(v)} />
            <Legend formatter={(v) => <span className="text-xs text-slate-600">{v}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
