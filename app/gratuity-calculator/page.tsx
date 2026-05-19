'use client'
import { useState } from 'react'
import Link from 'next/link'
import { calculateGratuity, formatINR } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const faqs = [
  { question: 'What is the minimum service period for gratuity?', answer: 'You must complete at least 5 years of continuous service with the same employer to be eligible for gratuity.' },
  { question: 'What is the maximum tax-free gratuity?', answer: 'Gratuity up to ₹20 lakhs is fully tax-free for private sector employees. Government employees get full tax exemption with no limit.' },
  { question: 'What if my employer does not pay gratuity?', answer: 'Gratuity is a legal right under the Payment of Gratuity Act. If your employer refuses, you can file a complaint with the Controlling Authority within 30 days of the due date.' },
  { question: 'Is gratuity calculated on basic or gross salary?', answer: 'Gratuity is calculated on Basic Salary + Dearness Allowance (DA) only — not on HRA, special allowance, or other components.' },
  { question: 'Does gratuity calculation include partial years?', answer: 'If you complete 6+ months in a partial year, it rounds up. So 7 years 7 months counts as 8 years. 7 years 4 months counts as 7 years.' },
]

export default function GratuityCalculatorPage() {
  const [basic, setBasic] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState<ReturnType<typeof calculateGratuity> | null>(null)

  const calculate = () => {
    const b = parseFloat(basic), y = parseFloat(years)
    if (!b || !y || y < 1) return
    setResult(calculateGratuity(b, y))
  }

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">Gratuity Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Gratuity Calculator India FY 2025-26</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Calculate your gratuity payout based on last drawn basic salary and years of service. Tax-free up to ₹20 lakh.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Calculate Your Gratuity</h2>
              <div className="space-y-5">
                <div>
                  <label className="form-label">Last Basic Salary + DA (Monthly)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input type="number" placeholder="e.g. 60000" value={basic} onChange={e => setBasic(e.target.value)} onKeyDown={e => e.key === 'Enter' && calculate()} className="form-input pl-8" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">Use your last drawn Basic + DA, not gross salary</p>
                </div>
                <div>
                  <label className="form-label">Years of Service</label>
                  <input type="number" placeholder="e.g. 7.5" value={years} onChange={e => setYears(e.target.value)} onKeyDown={e => e.key === 'Enter' && calculate()} className="form-input" min="1" max="40" step="0.5" />
                  <p className="text-xs text-slate-400 mt-1.5">Min 5 yrs for eligibility. Enter decimals: e.g. 7.5 = 7 yrs 6 months (rounds up per Act).</p>
                </div>
                <div className="highlight-box text-sm">
                  <p className="font-bold text-slate-900 mb-1">📌 Gratuity Formula</p>
                  <p className="text-slate-600 font-mono text-xs">(Basic + DA) × 15 ÷ 26 × Years</p>
                </div>
                <button onClick={calculate} className="btn-primary w-full btn-lg">Calculate Gratuity →</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-4">
                <div className={`rounded-2xl p-5 sm:p-6 text-white ${result.gratuity <= result.taxFreeLimit ? 'bg-gradient-to-br from-emerald-600 to-teal-700' : 'bg-gradient-to-br from-sky-600 to-blue-700'}`}>
                  <p className="text-emerald-200 text-sm mb-1">Total Gratuity Amount</p>
                  <p className="text-3xl sm:text-4xl font-bold">{formatINR(result.gratuity)}</p>
                  <p className="mt-2 text-sm opacity-80">Calculated on {result.roundedYears} years · ≈ {formatINR(result.perYear)}/year</p>
                </div>

                <div className="card overflow-hidden">
                  {[
                    { label: 'Gratuity Amount', value: formatINR(result.gratuity), color: 'text-slate-900' },
                    { label: 'Tax-Free Limit', value: formatINR(result.taxFreeLimit), color: 'text-emerald-600' },
                    { label: 'Taxable Gratuity', value: formatINR(result.taxableGratuity), color: result.taxableGratuity > 0 ? 'text-red-500' : 'text-emerald-600' },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between items-center px-6 py-4 border-b border-slate-50 last:border-0">
                      <span className="text-sm text-slate-600">{r.label}</span>
                      <span className={`font-bold ${r.color}`}>{r.value}</span>
                    </div>
                  ))}
                </div>

                {result.taxableGratuity === 0 && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-700">
                    ✅ Your gratuity is <strong>fully tax-free</strong> (below ₹20 lakh limit)
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Gratuity at Different Tenures</h3>
              <div className="overflow-hidden rounded-xl border border-slate-100">
                <table className="data-table">
                  <thead><tr><th>Service</th><th>₹30K Basic</th><th>₹60K Basic</th></tr></thead>
                  <tbody>
                    {[5, 10, 15, 20, 25].map(y => (
                      <tr key={y}>
                        <td className="font-medium">{y} yrs</td>
                        <td>{formatINR(calculateGratuity(30000, y).gratuity)}</td>
                        <td>{formatINR(calculateGratuity(60000, y).gratuity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-8 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>
        <div className="max-w-3xl mt-2">
          <FAQSection faqs={faqs} title="Gratuity FAQs" />
        </div>
        <div className="max-w-3xl mt-6 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>
    </div>
  )
}