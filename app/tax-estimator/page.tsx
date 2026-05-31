'use client'
import { useState } from 'react'
import Link from 'next/link'
import { estimateIncomeTax, formatINR, formatINRCompact } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const TAX_SLABS_NEW = [
  { range: '₹0 – ₹4,00,000', rate: '0%' },
  { range: '₹4,00,001 – ₹8,00,000', rate: '5%' },
  { range: '₹8,00,001 – ₹12,00,000', rate: '10%' },
  { range: '₹12,00,001 – ₹16,00,000', rate: '15%' },
  { range: '₹16,00,001 – ₹20,00,000', rate: '20%' },
  { range: '₹20,00,001 – ₹24,00,000', rate: '25%' },
  { range: 'Above ₹24,00,000', rate: '30%' },
]

const faqs = [
  { question: 'Which tax regime is better for FY 2026-27?', answer: 'Under the new regime (Budget 2026), there is zero tax up to Rs.12 lakh due to the enhanced 87A rebate. If your total deductions (HRA + 80C + home loan + NPS) exceed Rs.3.75L, old regime may save more. Use this calculator to compare.' },
  { question: 'What is the standard deduction for FY 2026-27?', answer: 'Under the New Tax Regime, standard deduction is ₹75,000 for FY 2026-27 (increased from ₹50,000 in FY 2024-25). Under the Old Regime, it remains ₹50,000.' },
  { question: 'What is the 87A rebate limit for FY 2026-27?', answer: 'Under the New Regime for FY 2026-27, rebate u/s 87A is ₹60,000 — meaning if your net taxable income is ₹12 lakh or below, your effective tax is zero. Under old regime it remains ₹12,500 (for income ≤ ₹5L).' },
  { question: 'How is variable pay or bonus taxed?', answer: 'Variable pay and annual bonuses are added to your gross salary and taxed at your marginal slab rate. For example, if you are in the 20% slab, a ₹1 lakh bonus adds approximately ₹20,800 to your tax (including 4% cess).' },
  { question: 'Does TDS deducted by employer equal my final tax?', answer: 'Not always. TDS is an advance estimate based on your declarations. File your ITR to reconcile actual tax. If TDS exceeds actual tax, you get a refund. If TDS is less, pay self-assessment tax before July 31.' },
]

export default function TaxEstimatorPage() {
  const [income, setIncome] = useState('')
  const [variablePay, setVariablePay] = useState('')
  const [investments, setInvestments] = useState('')
  const [nps, setNps] = useState('')
  const [hra, setHra] = useState('')
  const [homeLoan, setHomeLoan] = useState('')
  const [result, setResult] = useState<{
    newTax: number; oldTax: number
    taxableNew: number; taxableOld: number
    totalIncome: number
  } | null>(null)

  const calculate = () => {
    const inc = parseFloat(income) * 100000  // User enters LPA (e.g. 24 = ₹24,00,000)
    if (!inc || inc <= 0) return

    const bonus   = parseFloat(variablePay) || 0        // ₹ annual bonus (raw)
    const totalIncome = inc + bonus

    // New Regime: only std deduction ₹75,000
    const taxableNew = Math.max(0, totalIncome - 75000)

    // Old Regime: std deduction ₹50,000 + 80C (max ₹1.5L) + NPS (max ₹50K) + HRA + home loan (max ₹2L)
    const inv80C  = Math.min(parseFloat(investments) || 0, 150000)   // ₹ direct input
    const npsAmt  = Math.min(parseFloat(nps) || 0, 50000)             // ₹ direct input
    const hraAmt  = parseFloat(hra) || 0                              // ₹ direct input
    const hlAmt   = Math.min(parseFloat(homeLoan) || 0, 200000)       // ₹ direct input, max ₹2L
    const taxableOld = Math.max(0, totalIncome - 50000 - inv80C - npsAmt - hraAmt - hlAmt)

    const newTax = estimateIncomeTax(taxableNew, 'new')
    const oldTax = estimateIncomeTax(taxableOld, 'old')

    setResult({ newTax, oldTax, taxableNew, taxableOld, totalIncome })
  }

  const InputField = ({ label, hint, value, onChange, placeholder, max }: {
    label: string; hint?: string; value: string
    onChange: (v: string) => void; placeholder: string; max?: string
  }) => (
    <div>
      <label className="form-label">
        {label}
        {hint && <span className="text-slate-400 font-normal text-xs ml-1">— {hint}</span>}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
        <input
          type="number" value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder} className="form-input pl-8"
          min="0" max={max} onKeyDown={e => e.key === 'Enter' && calculate()}
        />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">Tax Estimator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Income Tax Estimator India FY 2025–26</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Compare new vs old tax regime. Enter your CTC, variable pay, and deductions to get your exact tax liability.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-1">Income Details</h2>
              <p className="text-sm text-slate-500 mb-6">Enter amounts in Indian Rupees (₹). CTC/income should be the fixed annual component.</p>
              <div className="space-y-5">
                {/* Fixed CTC */}
                <div>
                  <label className="form-label">Annual Fixed CTC / Salary</label>
                  <p className="text-xs text-slate-400 mb-1.5">Enter in Lakhs (LPA). Example: enter <strong>24</strong> for ₹24,00,000 per year</p>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input
                      type="number" placeholder="e.g. 24" value={income}
                      onChange={e => setIncome(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && calculate()}
                      className="form-input pl-8" min="1" max="500" step="0.5"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">LPA</span>
                  </div>
                </div>

                {/* Variable Pay */}
                <InputField
                  label="Variable Pay / Annual Bonus (₹)"
                  hint="optional"
                  value={variablePay}
                  onChange={setVariablePay}
                  placeholder="e.g. 200000 for ₹2,00,000 bonus"
                />

                <div className="border-t border-slate-100 pt-5">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Old Regime Deductions (optional)</p>
                  <div className="space-y-4">
                    <InputField
                      label="80C Investments (₹)"
                      hint="max ₹1,50,000 — ELSS, PPF, LIC, PF etc."
                      value={investments} onChange={setInvestments}
                      placeholder="e.g. 150000" max="150000"
                    />
                    <InputField
                      label="NPS Contribution 80CCD(1B) (₹)"
                      hint="max ₹50,000 additional"
                      value={nps} onChange={setNps}
                      placeholder="e.g. 50000" max="50000"
                    />
                    <InputField
                      label="HRA Exemption (₹)"
                      hint="annual exempt amount — use HRA calculator"
                      value={hra} onChange={setHra}
                      placeholder="e.g. 120000"
                    />
                    <InputField
                      label="Home Loan Interest (₹)"
                      hint="max ₹2,00,000 under Section 24B"
                      value={homeLoan} onChange={setHomeLoan}
                      placeholder="e.g. 200000" max="200000"
                    />
                  </div>
                </div>

                <button onClick={calculate} className="btn-primary w-full btn-lg">Compare Tax Regimes →</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-4">
                {/* Regime Cards — mobile-safe */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`rounded-2xl p-5 text-center border-2 ${result.newTax <= result.oldTax ? 'border-sky-500 bg-sky-50' : 'border-slate-200 bg-white'}`}>
                    <p className="text-xs font-semibold text-slate-500 mb-1">NEW REGIME</p>
                    <p className="text-xl sm:text-2xl font-bold text-sky-600 break-all">{formatINR(result.newTax)}</p>
                    <p className="text-xs text-slate-500 mt-1">Annual Tax</p>
                    <p className="text-xs text-slate-400">Monthly: {formatINR(result.newTax / 12)}</p>
                    {result.newTax <= result.oldTax && <span className="mt-2 inline-block bg-sky-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold">BETTER ✓</span>}
                  </div>
                  <div className={`rounded-2xl p-5 text-center border-2 ${result.oldTax < result.newTax ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                    <p className="text-xs font-semibold text-slate-500 mb-1">OLD REGIME</p>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-600 break-all">{formatINR(result.oldTax)}</p>
                    <p className="text-xs text-slate-500 mt-1">Annual Tax</p>
                    <p className="text-xs text-slate-400">Monthly: {formatINR(result.oldTax / 12)}</p>
                    {result.oldTax < result.newTax && <span className="mt-2 inline-block bg-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-semibold">BETTER ✓</span>}
                  </div>
                </div>

                <div className="card p-6 space-y-3">
                  <h3 className="font-bold text-slate-900 mb-2">Detailed Breakdown</h3>
                  {[
                    { label: 'Total Gross Income', val: result.totalIncome, color: '' },
                    { label: 'Taxable Income (New Regime)', val: result.taxableNew, color: '' },
                    { label: 'Taxable Income (Old Regime)', val: result.taxableOld, color: '' },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-slate-600">{r.label}</span>
                      <span className="font-semibold">{formatINR(r.val)}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-100 pt-3 flex justify-between font-bold">
                    <span className="text-slate-800">You Save</span>
                    <span className="text-emerald-600">
                      {formatINRCompact(Math.abs(result.newTax - result.oldTax))} in {result.newTax <= result.oldTax ? 'New' : 'Old'} Regime
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pt-1">Includes 4% cess and applicable surcharge. Estimates only — consult a CA for tax filing.</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">New Regime Slabs (FY 2026-27)</h3>
              <div className="overflow-hidden rounded-xl border border-slate-100">
                <table className="data-table">
                  <thead><tr><th>Income Range</th><th>Rate</th></tr></thead>
                  <tbody>
                    {TAX_SLABS_NEW.map((s, i) => (
                      <tr key={i}><td className="text-xs">{s.range}</td><td className="font-bold text-sky-600">{s.rate}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400 mt-2">+ 4% Cess. Zero tax up to ₹12L (87A rebate). Std deduction ₹75,000.</p>
            </div>
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Old Regime Deductions</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['80C', '₹1,50,000', 'ELSS, PPF, LIC, PF'],
                  ['80CCD(1B) NPS', '₹50,000', 'Additional NPS'],
                  ['HRA', 'Actual exempt', 'Sec 10(13A)'],
                  ['Home Loan Interest', '₹2,00,000', 'Section 24B'],
                  ['Std Deduction', '₹50,000', 'All salaried'],
                ].map(([sec, limit, desc], i) => (
                  <div key={i} className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-medium text-slate-700">{sec}</span>
                      <p className="text-xs text-slate-400">{desc}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 whitespace-nowrap">{limit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/ctc-to-inhand/', label: '💰 CTC to In-Hand' },
                  { href: '/hra-calculator/', label: '🏠 HRA Calculator' },
                  { href: '/pf-calculator/', label: '🏦 PF Calculator' },
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

        {/* Income Tax Guide Section */}
        <div className="max-w-3xl mt-8 space-y-6">
          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Income Tax Slabs FY 2026-27 — New Regime Explained</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Under the new tax regime for FY 2026-27 (AY 2027-28), the income tax slabs are structured to provide maximum benefit to middle-income salaried employees. The most significant benefit is the enhanced Section 87A rebate of Rs.60,000 — which effectively makes income up to Rs.12 lakh completely tax-free after the Rs.75,000 standard deduction.
            </p>
            <div className="overflow-x-auto">
              <table className="data-table w-full text-sm">
                <thead><tr><th>Income Slab</th><th>Tax Rate</th><th>Maximum Tax in Slab</th></tr></thead>
                <tbody>
                  <tr><td>Rs.0 – Rs.4 Lakh</td><td>0%</td><td>Rs.0</td></tr>
                  <tr><td>Rs.4 – Rs.8 Lakh</td><td>5%</td><td>Rs.20,000</td></tr>
                  <tr><td>Rs.8 – Rs.12 Lakh</td><td>10%</td><td>Rs.40,000</td></tr>
                  <tr><td>Rs.12 – Rs.16 Lakh</td><td>15%</td><td>Rs.60,000</td></tr>
                  <tr><td>Rs.16 – Rs.20 Lakh</td><td>20%</td><td>Rs.80,000</td></tr>
                  <tr><td>Rs.20 – Rs.24 Lakh</td><td>25%</td><td>Rs.1,00,000</td></tr>
                  <tr><td>Above Rs.24 Lakh</td><td>30%</td><td>Unlimited</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-3">All figures above are before adding 4% Health and Education Cess on the total tax amount.</p>
          </div>

          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-4">New Tax Regime vs Old Tax Regime — When to Choose Which</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              The fundamental question for every salaried employee in India is which tax regime results in lower tax. The answer depends on how much you can claim in deductions under the old regime. Here is a practical guide:
            </p>
            <div className="space-y-3">
              {[
                { label: 'Choose New Regime if', points: ['Your income is Rs.12L or below (zero tax)', 'You claim less than Rs.3.75L in total deductions', 'You do not have HRA exemption or home loan interest', 'You prefer simplicity without maintaining investment proofs'] },
                { label: 'Choose Old Regime if', points: ['You claim HRA exemption (especially in high-rent cities)', 'You pay home loan interest above Rs.1.5L/year', 'Your 80C investments + other deductions exceed Rs.3.75L', 'You have significant LTA or medical reimbursement claims'] },
              ].map((r, i) => (
                <div key={i} className={`p-4 rounded-xl border text-sm ${i === 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
                  <p className="font-bold text-slate-900 mb-2">{r.label}:</p>
                  <ul className="space-y-1">{r.points.map((p, j) => <li key={j} className="text-slate-600 flex gap-2"><span>•</span>{p}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-4">
              For most salaried employees earning below Rs.15 LPA with standard deductions, the new tax regime results in zero or lower tax due to the Rs.12L rebate and Rs.75,000 standard deduction. Use the calculator above to compare both regimes with your exact numbers.
            </p>
          </div>

          <div className="card p-7">
            <h2 className="text-xl font-bold text-slate-900 mb-3">How TDS is Deducted from Salary</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your employer deducts Tax Deducted at Source (TDS) from your monthly salary under Section 192 of the Income Tax Act. The calculation is simple: your employer estimates your annual tax liability, divides it by 12, and deducts that amount every month. You must declare your tax regime to your employer at the start of each financial year (April). If you do not declare, your employer defaults to the new tax regime from FY 2024-25 onwards. You can switch regimes when filing your ITR, but TDS already deducted under the employer's regime cannot be recovered mid-year — only as a refund when you file returns. Use our tax estimator to know your exact monthly TDS before the financial year begins.
            </p>
          </div>
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