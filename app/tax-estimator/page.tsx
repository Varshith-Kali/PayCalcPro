'use client'
import { useState } from 'react'
import Link from 'next/link'
import { estimateIncomeTax, formatINR } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

// FY 2025-26 (Budget 2025) New Regime Slabs
const TAX_SLABS_NEW = [
  { range: '0 – ₹4,00,000', rate: '0%' },
  { range: '₹4,00,001 – ₹8,00,000', rate: '5%' },
  { range: '₹8,00,001 – ₹12,00,000', rate: '10%' },
  { range: '₹12,00,001 – ₹16,00,000', rate: '15%' },
  { range: '₹16,00,001 – ₹20,00,000', rate: '20%' },
  { range: '₹20,00,001 – ₹24,00,000', rate: '25%' },
  { range: 'Above ₹24,00,000', rate: '30%' },
]

const faqs = [
  { question: 'Which tax regime is better for FY 2025-26?', answer: 'Under the new regime (Budget 2025), there is zero tax up to ₹12 lakh due to the enhanced 87A rebate. If your deductions (HRA + 80C + home loan) exceed ₹3–4L, compare both regimes. For most salaried employees under ₹15L, new regime wins.' },
  { question: 'What is the standard deduction for FY 2025-26?', answer: 'Under the New Tax Regime, standard deduction is ₹75,000 for FY 2025-26 (increased from ₹50,000 in FY 2024-25). Under the Old Regime, it remains ₹50,000.' },
  { question: 'What is the 87A rebate limit for FY 2025-26?', answer: 'Under the New Regime for FY 2025-26, rebate u/s 87A is ₹60,000 — meaning if your net taxable income is ₹12 lakh or below, your effective tax is zero. Under old regime it remains ₹12,500 (for income ≤ ₹5L).' },
  { question: 'What is the surcharge on income tax?', answer: 'Surcharge applies on high incomes: 10% for ₹50L–₹1Cr, 15% for ₹1–2Cr, 25% for ₹2–5Cr. In the new regime, surcharge is capped at 25% (no 37% bracket). All + 4% cess.' },
  { question: 'Does TDS deducted by employer equal my final tax?', answer: 'Not always. TDS is an advance estimate. File your ITR to reconcile. If TDS > actual tax, you get a refund. If TDS < actual tax, pay self-assessment tax before July 31.' },
]

export default function TaxEstimatorPage() {
  const [income, setIncome] = useState('')
  const [investments, setInvestments] = useState('')
  const [hra, setHra] = useState('')
  const [regime, setRegime] = useState<'new' | 'old'>('new')
  const [result, setResult] = useState<{ newTax: number; oldTax: number; taxableNew: number; taxableOld: number } | null>(null)

  const calculate = () => {
    const inc = parseFloat(income) * 100000
    if (!inc || inc <= 0) return
    // FY 2025-26: New regime std deduction = ₹75,000; Old regime = ₹50,000
    const stdDeductionNew = 75000
    const stdDeductionOld = 50000
    const inv = Math.min(parseFloat(investments) * 1000 || 0, 150000)
    const hraAmt = parseFloat(hra) * 1000 || 0

    const taxableNew = Math.max(0, inc - stdDeductionNew)
    const taxableOld = Math.max(0, inc - stdDeductionOld - inv - hraAmt)

    const newTax = estimateIncomeTax(taxableNew, 'new')
    const oldTax = estimateIncomeTax(taxableOld, 'old')

    setResult({ newTax, oldTax, taxableNew, taxableOld })
  }

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">Tax Estimator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Income Tax Estimator India FY 2025–26</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Compare new vs old tax regime instantly. Zero tax up to ₹12L under new regime (Budget 2025). Updated for FY 2025-26.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Income Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="form-label">Annual Income / CTC (in Lakhs)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input type="number" placeholder="e.g. 12" value={income} onChange={e => setIncome(e.target.value)} className="form-input pl-8" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">LPA</span>
                  </div>
                </div>
                <div>
                  <label className="form-label">Investments under 80C (₹ Thousands) <span className="text-slate-400 font-normal">— Old Regime only</span></label>
                  <input type="number" placeholder="e.g. 150 (max 1,50,000)" value={investments} onChange={e => setInvestments(e.target.value)} className="form-input" max="150" />
                </div>
                <div>
                  <label className="form-label">HRA Exemption (₹ Thousands) <span className="text-slate-400 font-normal">— Old Regime only</span></label>
                  <input type="number" placeholder="e.g. 120" value={hra} onChange={e => setHra(e.target.value)} className="form-input" />
                </div>
                <button onClick={calculate} className="btn-primary w-full btn-lg">Compare Tax Regimes →</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-4">
                <div className={`grid grid-cols-2 gap-4`}>
                  <div className={`rounded-2xl p-5 text-center border-2 ${result.newTax <= result.oldTax ? 'border-sky-500 bg-sky-50' : 'border-slate-200 bg-white'}`}>
                    <p className="text-xs font-semibold text-slate-500 mb-1">NEW REGIME</p>
                    <p className="text-3xl font-bold text-sky-600">{formatINR(result.newTax)}</p>
                    <p className="text-xs text-slate-500 mt-1">Annual Tax</p>
                    {result.newTax <= result.oldTax && <span className="mt-2 inline-block bg-sky-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold">BETTER ✓</span>}
                  </div>
                  <div className={`rounded-2xl p-5 text-center border-2 ${result.oldTax < result.newTax ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                    <p className="text-xs font-semibold text-slate-500 mb-1">OLD REGIME</p>
                    <p className="text-3xl font-bold text-emerald-600">{formatINR(result.oldTax)}</p>
                    <p className="text-xs text-slate-500 mt-1">Annual Tax</p>
                    {result.oldTax < result.newTax && <span className="mt-2 inline-block bg-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold">BETTER ✓</span>}
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Detailed Comparison</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Taxable Income (New)</span>
                      <span className="font-semibold">{formatINR(result.taxableNew)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Taxable Income (Old)</span>
                      <span className="font-semibold">{formatINR(result.taxableOld)}</span>
                    </div>
                    <div className="border-t border-slate-100 pt-3 flex justify-between font-bold">
                      <span className="text-slate-800">You Save</span>
                      <span className="text-emerald-600">{formatINR(Math.abs(result.newTax - result.oldTax))} {result.newTax <= result.oldTax ? 'in New Regime' : 'in Old Regime'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">New Regime Slabs (FY 2025-26)</h3>
              <div className="overflow-hidden rounded-xl border border-slate-100">
                <table className="data-table">
                  <thead><tr><th>Income Range</th><th>Tax Rate</th></tr></thead>
                  <tbody>
                    {TAX_SLABS_NEW.map((s, i) => (
                      <tr key={i}><td className="text-xs">{s.range}</td><td className="font-bold text-sky-600">{s.rate}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2">+ 4% Cess. Rebate u/s 87A: Zero tax up to ₹12L net taxable income. Std deduction ₹75,000.</p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-8 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>
        <div className="max-w-3xl mt-2">
          <FAQSection faqs={faqs} title="Tax Estimator FAQs" />
        </div>
        <div className="max-w-3xl mt-6 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>
    </div>
  )
}