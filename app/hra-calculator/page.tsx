'use client'
import { useState } from 'react'
import Link from 'next/link'
import { calculateHRA, formatINR } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const faqs = [
  { question: 'What are the three conditions for HRA exemption?', answer: 'HRA exemption = minimum of: (1) Actual HRA received, (2) 50%/40% of Basic (metro/non-metro), (3) Actual rent - 10% of Basic.' },
  { question: 'Can I claim HRA if I live in my own house?', answer: 'No. HRA exemption requires that you actually pay rent for accommodation. If you own and live in your house, HRA received is fully taxable.' },
  { question: 'Can I pay rent to my parents and claim HRA?', answer: 'Yes! You can pay rent to parents and claim HRA. If annual rent exceeds ?1 lakh, your parent must declare rental income and you need their PAN.' },
  { question: 'Is HRA available under the new tax regime?', answer: 'No. HRA exemption under Section 10(13A) is only available under the old tax regime. In the new regime, your entire HRA is taxable.' },
  { question: 'What documents are needed for HRA claim?', answer: 'Rent receipts (monthly), rent agreement, landlord\'s PAN (if rent > ?1 lakh/year). Submit to employer annually for Form 16.' },
]

export default function HRACalculatorPage() {
  const [basic, setBasic] = useState('')
  const [hra, setHra] = useState('')
  const [rent, setRent] = useState('')
  const [city, setCity] = useState<'metro' | 'non-metro'>('metro')
  const [slab, setSlab] = useState('30')
  const [result, setResult] = useState<ReturnType<typeof calculateHRA> | null>(null)

  const calculate = () => {
    const b = parseFloat(basic), h = parseFloat(hra), r = parseFloat(rent)
    if (!b || !h || !r) return
    setResult(calculateHRA(b, h, r, city, parseFloat(slab) / 100))
  }

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">HRA Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">HRA Exemption Calculator FY 2026-27</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Calculate your HRA tax exemption under Section 10(13A). Find exactly how much tax you save on house rent.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">HRA Details</h2>
              <div className="space-y-5">
                {[
                  { label: 'Basic Salary (Monthly)', val: basic, set: setBasic, ph: '50000' },
                  { label: 'HRA Received (Monthly)', val: hra, set: setHra, ph: '25000' },
                  { label: 'Actual Rent Paid (Monthly)', val: rent, set: setRent, ph: '20000' },
                ].map(f => (
                  <div key={f.label}>
                    <label className="form-label">{f.label}</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">?</span>
                      <input type="number" placeholder={f.ph} value={f.val} onChange={e => f.set(e.target.value)} className="form-input pl-8" />
                    </div>
                  </div>
                ))}

                <div>
                  <label className="form-label">City Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['metro', 'non-metro'] as const).map(c => (
                      <button key={c} onClick={() => setCity(c)}
                        className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${city === c ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {c === 'metro' ? '?? Metro (50%)' : '?? Non-Metro (40%)'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Income Tax Slab</label>
                  <select value={slab} onChange={e => setSlab(e.target.value)} className="form-select">
                    <option value="5">5% Slab</option>
                    <option value="20">20% Slab</option>
                    <option value="30">30% Slab</option>
                  </select>
                </div>

                <button onClick={calculate} className="btn-primary w-full btn-lg">Calculate HRA Exemption ?</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-4">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-6">
                  <p className="text-emerald-200 text-sm mb-1">Annual HRA Exemption</p>
                  <p className="text-4xl font-bold">{formatINR(result.hraExemption)}</p>
                  <p className="text-emerald-200 text-sm mt-1">Tax Saved: <strong className="text-white">{formatINR(result.taxSaved)}</strong></p>
                </div>

                <div className="card overflow-hidden">
                  <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900">Exemption Calculation (Minimum of 3)</h3>
                  </div>
                  {[
                    { label: '? Actual HRA received', value: result.exemption1 },
                    { label: `? ${city === 'metro' ? '50%' : '40%'} of Annual Basic`, value: result.exemption2 },
                    { label: '? Rent Paid - 10% of Basic', value: result.exemption3 },
                  ].map((r, i) => (
                    <div key={i} className={`flex justify-between items-center px-6 py-4 border-b border-slate-50 ${Math.min(result.exemption1, result.exemption2, result.exemption3) === r.value ? 'bg-emerald-50' : ''}`}>
                      <span className="text-sm text-slate-700">{r.label}</span>
                      <div className="text-right">
                        <span className="font-bold text-slate-900">{formatINR(r.value)}</span>
                        {Math.min(result.exemption1, result.exemption2, result.exemption3) === r.value && <span className="ml-2 text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">Minimum ?</span>}
                      </div>
                    </div>
                  ))}
                  <div className="px-6 py-4 flex justify-between">
                    <span className="font-semibold text-slate-700">Taxable HRA</span>
                    <span className="font-bold text-red-500">{formatINR(result.hraTaxable)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">HRA Exemption Formula</h3>
              <div className="formula-box text-xs leading-relaxed">
                <p className="text-slate-400">// Section 10(13A) Rule</p>
                <p>Exemption = MIN(</p>
                <p>  Actual HRA received,</p>
                <p>  50% of Basic (metro),</p>
                <p>  Rent - 10% of Basic</p>
                <p>)</p>
              </div>
            </div>
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-3">Related Calculators</h3>
              <div className="space-y-2">
                {[
                  { href: '/ctc-to-inhand', label: '?? CTC to In-Hand' },
                  { href: '/tax-estimator', label: '?? Tax Estimator' },
                  { href: '/in-hand-salary-calculator', label: '?? In-Hand Salary' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center justify-between p-3 rounded-xl hover:bg-sky-50 transition-colors text-sm text-slate-700 hover:text-sky-700 border border-transparent hover:border-sky-100">
                    {l.label} <span className="text-slate-300">?</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* HRA Guide Section */}
        <div className="max-w-3xl mt-8 space-y-5">
          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-4">HRA Exemption Rules — Section 10(13A) Explained</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              House Rent Allowance (HRA) exemption under Section 10(13A) is one of the most valuable tax benefits available to salaried employees who live in rented accommodation and opt for the old tax regime. The exemption is the <strong>minimum of three limits</strong> — whichever is lowest becomes the tax-free portion.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 space-y-2">
              <p className="font-bold text-slate-900 text-sm">The three limiting conditions (minimum is exempt):</p>
              <p className="text-slate-600 text-sm">1. <strong>Actual HRA received</strong> from employer</p>
              <p className="text-slate-600 text-sm">2. <strong>50% of basic salary</strong> (metro) or <strong>40% of basic</strong> (non-metro)</p>
              <p className="text-slate-600 text-sm">3. <strong>Actual rent paid minus 10% of basic salary</strong></p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              HRA exemption is NOT available under the new tax regime. If you claim HRA, you must choose the old tax regime for that financial year. This is why comparing both regimes is crucial before declaring your choice to your employer in April.
            </p>
          </div>

          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-4">HRA Worked Examples — Metro vs Non-Metro</h2>
            <div className="overflow-x-auto">
              <table className="data-table w-full text-sm">
                <thead><tr><th>Scenario</th><th>Basic/mo</th><th>HRA Received</th><th>Rent Paid</th><th>City</th><th>HRA Exempt</th></tr></thead>
                <tbody>
                  <tr><td>IT Employee</td><td>Rs.50,000</td><td>Rs.25,000</td><td>Rs.20,000</td><td>Bengaluru (metro)</td><td>Rs.15,000/mo</td></tr>
                  <tr><td>Bank Employee</td><td>Rs.40,000</td><td>Rs.16,000</td><td>Rs.18,000</td><td>Pune (non-metro)</td><td>Rs.14,000/mo</td></tr>
                  <tr><td>Fresher</td><td>Rs.25,000</td><td>Rs.12,500</td><td>Rs.8,000</td><td>Hyderabad (metro)</td><td>Rs.5,500/mo</td></tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-3 mt-4">
              {[
                { title: 'Metro Cities for HRA', body: 'Only Mumbai, Delhi (NCR), Kolkata, and Chennai qualify for the 50% basic HRA limit. All other cities including Bengaluru, Hyderabad, Pune, Ahmedabad are considered non-metro (40% limit). This is fixed by the Income Tax rules and has not been updated since 1997 despite urbanisation.' },
                { title: 'Proof Required', body: 'Rent receipts are required for HRA exemption claims above Rs.1 lakh per year (Rs.8,333/month). For rent above Rs.50,000/month, you must deduct TDS at 5% from rent and deposit it with the Income Tax Department under Form 26QC.' },
                { title: 'HRA if Paying Rent to Parents', body: 'Rent paid to parents is valid for HRA exemption if the payment is genuine and the parent owns the property. Your parent must show this rental income in their ITR. This is legal and commonly used tax planning.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mt-8 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>
        <div className="max-w-3xl mt-2">
          <FAQSection faqs={faqs} title="HRA Calculator FAQs" />
        </div>
        <div className="max-w-3xl mt-6 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>
    </div>
  )
}