'use client'
import { useState } from 'react'
import Link from 'next/link'
import { calculatePF, formatINR, formatINRCompact } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const faqs = [
  { question: 'What is EPF and who contributes?', answer: 'EPF (Employees Provident Fund) requires both employee and employer to contribute 12% of basic salary. The employee\'s full 12% goes to EPF, but the employer\'s 12% is split: 3.67% to EPF and 8.33% to EPS (pension).' },
  { question: 'What is the current EPF interest rate?', answer: 'The EPF interest rate for FY 2023-24 is 8.25% per annum, compounded annually. This rate is declared by EPFO each year.' },
  { question: 'Is EPF interest taxable?', answer: 'EPF interest is tax-free up to ₹2.5 lakh contribution per year. Above that, interest on the excess is taxable.' },
  { question: 'Can I withdraw PF before retirement?', answer: 'Yes, with restrictions. You can make partial withdrawals for specific purposes (medical, home purchase, marriage). Full withdrawal is allowed after 2 months of unemployment or at age 58.' },
  { question: 'What happens to my PF when I change jobs?', answer: 'Your PF balance is portable via UAN (Universal Account Number). You can transfer it to your new employer\'s PF account online through the EPFO portal.' },
]

export default function PFCalculatorPage() {
  const [basic, setBasic] = useState('')
  const [result, setResult] = useState<ReturnType<typeof calculatePF> | null>(null)

  const calculate = () => {
    const val = parseFloat(basic)
    if (!val || val <= 0) return
    setResult(calculatePF(val))
  }

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">PF Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">PF (EPF) Calculator FY 2026-27</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Calculate your monthly EPF contribution, employer share, and long-term corpus growth at 8.25% interest.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Enter Basic Salary</h2>
              <div className="space-y-5">
                <div>
                  <label className="form-label">Basic Salary (Monthly)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input type="number" placeholder="e.g. 50000" value={basic} onChange={e => setBasic(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && calculate()} className="form-input pl-8" min="1000" />
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5">EPF is capped at ₹15,000 basic for mandatory contribution</p>
                </div>
                <div className="highlight-box text-sm text-slate-600">
                  <p className="font-semibold text-slate-800 mb-1">Current EPF Rate: 8.25% p.a.</p>
                  <p>Interest is compounded annually and credited to your account each March.</p>
                </div>
                <button onClick={calculate} className="btn-primary w-full btn-lg">Calculate PF Corpus →</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="result-card text-center">
                    <p className="result-label mb-1">Your Contribution/Month</p>
                    <p className="result-value">{formatINR(result.employeeContribution)}</p>
                    <p className="text-xs text-slate-400 mt-1">12% of Basic (capped at ₹15K)</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-5 text-center">
                    <p className="text-sm text-emerald-600 font-medium mb-1">Employer EPF Share/Month</p>
                    <p className="text-2xl sm:text-3xl font-bold text-emerald-600">{formatINR(result.employerEPFContribution)}</p>
                    <p className="text-xs text-emerald-500 mt-1">3.67% to EPF (8.33% to EPS)</p>
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className="px-6 py-4 bg-sky-600 text-white">
                    <h3 className="font-bold">Total Monthly PF: {formatINR(result.totalMonthly)}</h3>
                    <p className="text-sky-200 text-sm">Annual: {formatINR(result.totalMonthly * 12)}</p>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {[
                      { label: '1 Year Corpus', value: result.corpus1Year },
                      { label: '5 Year Corpus', value: result.corpus5Year },
                      { label: '10 Year Corpus', value: result.corpus10Year },
                      { label: '20 Year Corpus', value: result.corpus20Year },
                      { label: '30 Year Corpus', value: result.corpus30Year },
                    ].map((r, i) => (
                      <div key={i} className="flex justify-between items-center px-6 py-4">
                        <span className="text-slate-700 font-medium">{r.label}</span>
                        <span className="font-bold text-slate-900 text-lg">{formatINRCompact(r.value)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="highlight-box">
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">💡 Remember:</strong> Employer's 8.33% goes to EPS (pension scheme) — not included above. Only 3.67% employer share goes to your EPF account.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">EPF Contribution Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: 'Employee → EPF', pct: '12%', color: 'bg-sky-500' },
                  { label: 'Employer → EPF', pct: '3.67%', color: 'bg-emerald-500' },
                  { label: 'Employer → EPS', pct: '8.33%', color: 'bg-slate-400' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${r.color}`}></div>
                      <span className="text-sm text-slate-600">{r.label}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800">{r.pct}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/ctc-to-inhand/', label: '💰 CTC to In-Hand' },
                  { href: '/gratuity-calculator/', label: '🎁 Gratuity Calculator' },
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
        {/* In-content ad */}
        <div className="max-w-3xl mt-8 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>

        {/* EPF Educational Guide */}
        <div className="max-w-3xl mt-6 space-y-5">
          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-4">How EPF Works — Complete Guide for Salaried Employees</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              The Employees' Provident Fund (EPF) is a mandatory retirement savings scheme under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. Both you and your employer contribute 12% of your basic salary every month. The EPFO manages this corpus and declares an annual interest rate — 8.25% for FY 2026-27.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              What most employees don't realize: of the employer's 12%, only 3.67% goes to your EPF account. The remaining 8.33% goes to the Employee Pension Scheme (EPS) which funds your pension after retirement. EPS contributions are capped at 8.33% of Rs.15,000 = Rs.1,250/month regardless of your actual salary.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="data-table w-full text-sm">
                <thead><tr><th>Contribution</th><th>Rate</th><th>Where It Goes</th><th>Monthly Cap</th></tr></thead>
                <tbody>
                  <tr><td>Employee</td><td>12% of basic</td><td>100% to EPF account</td><td>Rs.1,800/month</td></tr>
                  <tr><td>Employer (EPF portion)</td><td>3.67% of basic</td><td>Your EPF account</td><td>Rs.550/month</td></tr>
                  <tr><td>Employer (EPS portion)</td><td>8.33% of basic</td><td>Pension Scheme (EPS)</td><td>Rs.1,250/month</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-3">Caps apply when basic salary exceeds Rs.15,000/month (EPFO statutory wage ceiling). Employees may voluntarily contribute extra via VPF without employer match.</p>
          </div>

          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-3">EPF Withdrawal Rules and Tax Treatment</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              EPF withdrawals are completely tax-free after 5 continuous years of service. If you withdraw before completing 5 years, the employer's contribution and interest become taxable income in the year of withdrawal. The employee's own contribution is always returned tax-free, but interest earned on it becomes taxable on early withdrawal.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              From FY 2021-22, interest on EPF contributions exceeding Rs.2.5 lakh per year (employee's share only) is taxable. This primarily affects high-earners making Voluntary PF (VPF) contributions. For such employees, comparing post-tax EPF returns (8.25% pre-tax) with PPF (7.1%, fully tax-free) or NPS (market-linked, with 60% tax-free at maturity) is essential for optimising retirement savings.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mt-4">
          <FAQSection faqs={faqs} title="PF Calculator FAQs" />
        </div>
        {/* Below FAQ ad */}
        <div className="max-w-3xl mt-6 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>
    </div>
  )
}