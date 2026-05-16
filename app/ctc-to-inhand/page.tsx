'use client'
import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { calculateSalary, formatINR, formatINRCompact, type SalaryBreakdown } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const SalaryChart = dynamic(() => import('@/components/SalaryChart'), { ssr: false })

const faqs = [
  { question: 'How is in-hand salary calculated from CTC?', answer: 'In-hand = Gross Salary − Employee PF − Professional Tax − Income Tax. Gross = CTC − Employer PF − Gratuity Provision.' },
  { question: 'Why is my in-hand salary much less than CTC?', answer: 'CTC includes employer-side costs (PF 12%, gratuity ~4.81%) and employee deductions (PF, tax, PT). Together these can reduce CTC by 20–35%.' },
  { question: 'Does basic salary affect my take-home?', answer: 'Yes significantly. Higher basic → higher PF deduction → lower take-home, but also higher HRA and gratuity benefits.' },
  { question: 'What is the formula for calculating basic salary?', answer: 'Typically Basic = 40–50% of CTC. Many companies use exactly 50% for simplicity.' },
  { question: 'Which tax regime gives higher in-hand salary?', answer: 'For incomes below ₹7L, new regime gives zero tax. For ₹7–15L with significant 80C/HRA deductions, old regime may be better. Above ₹15L, new regime is often better.' },
]

export default function CTCCalculatorPage() {
  const [ctc, setCtc] = useState('')
  const [city, setCity] = useState<'metro' | 'non-metro'>('metro')
  const [result, setResult] = useState<SalaryBreakdown | null>(null)
  const [showChart, setShowChart] = useState(false)

  const calculate = () => {
    const val = parseFloat(ctc.replace(/,/g, ''))
    if (!val || val <= 0) return
    const res = calculateSalary(val * 100000, city)
    setResult(res)
    setShowChart(false)
    setTimeout(() => setShowChart(true), 100)
  }

  const examples = [5, 8, 10, 12, 15, 20, 25, 30]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-300">CTC to In-Hand Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">CTC to In-Hand Salary Calculator</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Convert your annual CTC to exact monthly take-home salary. Instant results with full PF, HRA, tax & gratuity breakdown.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center text-sm font-bold">₹</span>
                Enter Your CTC
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="form-label">Annual CTC (in Lakhs)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input
                      type="number"
                      placeholder="e.g. 12"
                      value={ctc}
                      onChange={e => setCtc(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && calculate()}
                      className="form-input pl-8"
                      min="1" max="500" step="0.5"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">LPA</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">Enter in lakhs. Example: 12 for ₹12,00,000</p>
                </div>

                <div>
                  <label className="form-label">City Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['metro', 'non-metro'] as const).map(c => (
                      <button key={c} onClick={() => setCity(c)}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${city === c ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {c === 'metro' ? '🏙 Metro City' : '🏘 Non-Metro'}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">Metro: Delhi, Mumbai, Chennai, Kolkata — affects HRA %</p>
                </div>

                {/* Quick Examples */}
                <div>
                  <label className="form-label">Quick Examples</label>
                  <div className="flex flex-wrap gap-2">
                    {examples.map(e => (
                      <button key={e} onClick={() => { setCtc(String(e)); setTimeout(calculate, 0) }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${ctc === String(e) ? 'bg-sky-500 text-white border-sky-500' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-sky-300'}`}>
                        ₹{e}L
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={calculate} className="btn-primary w-full btn-lg text-base">
                  Calculate In-Hand Salary →
                </button>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="animate-scale-in space-y-5">
                {/* Main Result */}
                <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-6 shadow-blue">
                  <p className="text-sky-200 text-sm font-medium mb-1">Monthly In-Hand Salary</p>
                  <p className="text-5xl font-bold mb-2">{formatINR(result.inHandMonthly)}</p>
                  <p className="text-sky-200 text-sm">Annual: {formatINR(result.inHandAnnual)} · CTC: {formatINRCompact(result.ctc)}</p>
                </div>

                {/* Breakdown Table */}
                <div className="card overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
                    <h3 className="font-bold text-slate-900">Monthly Salary Breakdown</h3>
                  </div>
                  <div className="divide-y divide-slate-50">
                    <div className="px-6 py-3 bg-emerald-50/50">
                      <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Earnings</p>
                      {result.components.filter(c => c.type === 'earning').map((c, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5">
                          <span className="text-sm text-slate-700">{c.label}</span>
                          <span className="text-sm font-semibold text-slate-900">{formatINR(c.monthly)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center py-2 mt-1 border-t border-emerald-100">
                        <span className="text-sm font-bold text-slate-800">Gross Monthly</span>
                        <span className="text-sm font-bold text-emerald-600">{formatINR(result.gross / 12)}</span>
                      </div>
                    </div>
                    <div className="px-6 py-3 bg-red-50/30">
                      <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Deductions</p>
                      {result.components.filter(c => c.type === 'deduction').map((c, i) => (
                        <div key={i} className="flex justify-between items-center py-1.5">
                          <span className="text-sm text-slate-700">{c.label}</span>
                          <span className="text-sm font-semibold text-red-500">−{formatINR(c.monthly)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-4 bg-sky-50">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-900">Monthly In-Hand</span>
                        <span className="text-xl font-bold text-sky-600">{formatINR(result.inHandMonthly)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                {showChart && (
                  <div className="card p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Salary Visualization</h3>
                    <SalaryChart components={result.components} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Formula */}
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">How it's Calculated</h3>
              <div className="formula-box text-xs leading-relaxed">
                <p className="text-slate-400">// Step 1: Gross Salary</p>
                <p>Gross = CTC − Employer PF − Gratuity</p>
                <br />
                <p className="text-slate-400">// Step 2: Deductions</p>
                <p>PF Employee = 12% of Basic</p>
                <p>Prof. Tax = ₹2,400/year</p>
                <p>Income Tax = per slab</p>
                <br />
                <p className="text-slate-400">// Result</p>
                <p className="text-sky-400">In-Hand = Gross − Deductions</p>
              </div>
            </div>

            {/* Key Notes */}
            <div className="highlight-box">
              <h3 className="font-bold text-slate-800 text-sm mb-3">📌 Key Assumptions (FY 2025-26)</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span className="text-sky-500">•</span>Basic = 40% of CTC</li>
                <li className="flex gap-2"><span className="text-sky-500">•</span>HRA = 50% metro / 40% non-metro of Basic</li>
                <li className="flex gap-2"><span className="text-sky-500">•</span>EPF = 12% of Basic (EPFO ceiling ₹15,000)</li>
                <li className="flex gap-2"><span className="text-sky-500">•</span>EPF interest rate 8.25% p.a.</li>
                <li className="flex gap-2"><span className="text-sky-500">•</span>Professional Tax = ₹200/month</li>
                <li className="flex gap-2"><span className="text-sky-500">•</span>New Tax Regime · Std deduction ₹75,000</li>
                <li className="flex gap-2"><span className="text-sky-500">•</span>Zero tax up to ₹12L (87A rebate, Budget 2025)</li>
              </ul>
            </div>

            {/* Related Tools */}
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-3">Related Calculators</h3>
              <div className="space-y-2">
                {[
                  { href: '/pf-calculator', label: '🏦 PF Calculator' },
                  { href: '/hra-calculator', label: '🏠 HRA Exemption' },
                  { href: '/tax-estimator', label: '📊 Tax Estimator' },
                  { href: '/gratuity-calculator', label: '🎁 Gratuity Calculator' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 transition-colors border border-transparent hover:border-sky-100 text-sm text-slate-700 hover:text-sky-700">
                    {l.label} <span className="text-slate-300">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ad below FAQ */}
        <div className="max-w-3xl mt-8">
          <FAQSection faqs={faqs} title="CTC Calculator FAQs" />
        </div>
        {/* Ad below FAQ */}
        <div className="max-w-3xl mt-6 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>
        <div className="max-w-3xl mt-4 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>

      {/* Mobile sticky CTA */}
      {!result && (
        <div className="sticky-cta">
          <button onClick={calculate} className="btn-primary w-full justify-center">Calculate My Salary →</button>
        </div>
      )}
    </div>
  )
}