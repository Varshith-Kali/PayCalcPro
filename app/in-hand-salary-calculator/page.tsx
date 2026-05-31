'use client'
import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { calculateSalary, formatINR, formatINRCompact, type SalaryBreakdown } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const SalaryChart = dynamic(() => import('@/components/SalaryChart'), { ssr: false })

const faqs = [
  { question: 'What is the difference between in-hand salary and net salary?', answer: 'They mean the same thing — the actual amount credited to your bank account after all deductions from gross salary including PF, professional tax, and TDS.' },
  { question: 'How much in-hand salary will I get for 10 LPA CTC?', answer: 'For ₹10 LPA CTC in FY 2026-27, your monthly in-hand salary is approximately ₹76,000–₹77,000 under the new tax regime. This assumes standard salary structure with 50% basic, metro HRA, and zero income tax under the ₹12L rebate.' },
  { question: 'How much in-hand salary for 15 LPA CTC?', answer: 'For ₹15 LPA CTC, your monthly in-hand is approximately ₹93,000–₹95,000 under the new tax regime FY 2026-27, after PF (₹1,800), professional tax (₹200), and income tax (~₹5,400/month).' },
  { question: 'Is income tax zero for salary below 12 LPA in 2026?', answer: 'Yes! Under Budget 2026, Section 87A rebate makes income up to Rs.12 lakh effectively zero-tax under the new regime. If your annual CTC-based taxable income is Rs.12L or below, you pay Rs.0 income tax.' },
  { question: 'What percentage of CTC is the actual in-hand salary?', answer: 'Typically, in-hand salary is 75-85% of CTC for salaries below Rs.12 LPA (due to zero income tax in 2026). For higher salaries (Rs.20L+), in-hand is usually 65-75% of CTC depending on tax regime and deductions.' },
  { question: 'Is professional tax the same across all states?', answer: 'No. Professional tax rates vary by state. ₹200/month is the maximum in Maharashtra, Karnataka, and West Bengal. Some states like Delhi have no professional tax at all. The maximum is capped at ₹2,500/year nationally.' },
  { question: 'Does the in-hand salary calculator account for variable pay?', answer: 'Variable pay (bonuses, performance incentives) is not included in standard CTC calculation since it depends on performance. Add guaranteed variable pay to your annual CTC figure before calculating for accurate results.' },
  { question: 'How is basic salary calculated from CTC?', answer: 'Basic salary is typically 40–50% of CTC. Most Indian companies set it at 50%. Basic salary is the foundation — PF (12%), HRA (40–50% of basic), and gratuity (4.81% of basic) are all calculated from it.' },
]


export default function InHandSalaryPage() {
  const [ctc, setCtc] = useState('')
  const [variablePay, setVariablePay] = useState('')
  const [city, setCity] = useState<'metro' | 'non-metro'>('metro')
  const [result, setResult] = useState<SalaryBreakdown | null>(null)
  const [showChart, setShowChart] = useState(false)

  const calculate = () => {
    const val = parseFloat(ctc.replace(/,/g, ''))
    if (!val || val <= 0) return
    const variable = parseFloat(variablePay) * 100000 || 0
    const res = calculateSalary(val * 100000, city, variable)
    setResult(res)
    setShowChart(false)
    setTimeout(() => setShowChart(true), 100)
  }

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">In-Hand Salary Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">In-Hand Salary Calculator with Full Breakdown</h1>
          <p className="text-slate-300 text-lg max-w-2xl">See your complete monthly salary breakdown — every earning and deduction — with interactive charts for easy understanding.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Calculate Salary Breakdown</h2>
              <div className="space-y-5">
                <div>
                  <label className="form-label">Annual CTC (in Lakhs)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input type="number" placeholder="e.g. 15" value={ctc} onChange={e => setCtc(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && calculate()} className="form-input pl-8" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">LPA</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">Enter in lakhs. Example: 15 for ₹15,00,000 per year</p>
                </div>

                {/* Variable Pay */}
                <div>
                  <label className="form-label">Variable Pay / Bonus <span className="text-slate-400 font-normal">(optional, in Lakhs)</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input type="number" placeholder="e.g. 2 for ₹2,00,000 bonus" value={variablePay}
                      onChange={e => setVariablePay(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && calculate()}
                      className="form-input pl-8" min="0" step="0.5" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">LPA</span>
                  </div>
                </div>
                <div>
                  <label className="form-label">City Type (affects HRA)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['metro', 'non-metro'] as const).map(c => (
                      <button key={c} onClick={() => setCity(c)}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${city === c ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 text-slate-600'}`}>
                        {c === 'metro' ? '🏙 Metro' : '🏘 Non-Metro'}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={calculate} className="btn-primary w-full btn-lg">Get Full Salary Breakdown →</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-5">
                <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-5 sm:p-6 shadow-blue">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sky-200 text-xs font-medium mb-1">Monthly In-Hand</p>
                      <p className="text-2xl sm:text-3xl font-bold">{formatINR(result.inHandMonthly)}</p>
                    </div>
                    <div>
                      <p className="text-sky-200 text-xs font-medium mb-1">Annual In-Hand</p>
                      <p className="text-2xl sm:text-3xl font-bold">{formatINRCompact(result.inHandAnnual)}</p>
                    </div>
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 text-center">
                    {[
                      { label: 'CTC', value: formatINRCompact(result.ctc) },
                      { label: 'Gross', value: formatINRCompact(result.gross) },
                      { label: 'In-Hand', value: formatINRCompact(result.inHandAnnual) },
                    ].map((s, i) => (
                      <div key={i} className="px-4 py-4">
                        <p className="text-xs text-slate-500 mb-0.5">{s.label}</p>
                        <p className="font-bold text-slate-900 text-sm">{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="divide-y divide-slate-50">
                    <div className="px-6 py-3 bg-emerald-50/50">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Monthly Earnings</p>
                      {result.components.filter(c => c.type === 'earning').map((c, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5">
                          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }}></div><span className="text-sm text-slate-700">{c.label}</span></div>
                          <span className="text-sm font-semibold text-slate-900">{formatINR(c.monthly)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-3 bg-red-50/30">
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Monthly Deductions</p>
                      {result.components.filter(c => c.type === 'deduction').map((c, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5">
                          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }}></div><span className="text-sm text-slate-700">{c.label}</span></div>
                          <span className="text-sm font-semibold text-red-500">−{formatINR(c.monthly)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-4 bg-sky-50 flex justify-between">
                      <span className="font-bold text-slate-900">Net Monthly Take-Home</span>
                      <span className="text-xl font-bold text-sky-600">{formatINR(result.inHandMonthly)}</span>
                    </div>
                  </div>
                </div>

                {showChart && (
                  <div className="card p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Salary Visualization</h3>
                    <SalaryChart components={result.components} />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/ctc-to-inhand/', label: '💰 CTC to In-Hand' },
                  { href: '/pf-calculator/', label: '🏦 PF Calculator' },
                  { href: '/hra-calculator/', label: '🏠 HRA Calculator' },
                  { href: '/tax-estimator/', label: '📊 Tax Estimator' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 transition-colors text-sm text-slate-700 hover:text-sky-700 border border-transparent hover:border-sky-100">
                    {l.label} <span className="text-slate-300">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-8 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>
        <div className="max-w-3xl mt-2">
          <FAQSection faqs={faqs} title="In-Hand Salary FAQs" />
        </div>
        <div className="max-w-3xl mt-6 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>
    </div>
  )
}