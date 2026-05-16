'use client'
import { useState } from 'react'
import Link from 'next/link'
import { calculateNoticeBuyout, formatINR } from '@/lib/calculators'
import FAQSection from '@/components/FAQSection'
import AdUnit from '@/components/AdUnit'

const faqs = [
  { question: 'Is notice period buyout calculated on CTC or gross?', answer: 'Usually on monthly CTC ÷ 26 working days = daily rate × remaining notice days. Some companies use gross salary — check your appointment letter.' },
  { question: 'Can my new employer pay my notice period buyout?', answer: 'Yes! Many companies offer joining bonuses specifically to cover notice buyout costs. Negotiate this during offer negotiation.' },
  { question: 'Can my employer force me to serve the notice period?', answer: 'Yes, if both parties agreed to the notice period in the employment contract. However, you can pay the buyout to leave early — it\'s your right.' },
  { question: 'Is notice period buyout taxable?', answer: 'Yes. The buyout amount is added to your income for that financial year and taxed according to your income tax slab. Factor in ~30–35% effective cost.' },
  { question: 'How many working days is one month notice?', answer: 'Standard Indian convention is 26 working days per month (excluding Sundays). Saturdays may or may not be counted depending on your company policy.' },
]

export default function NoticeBuyoutPage() {
  const [ctc, setCtc] = useState('')
  const [period, setPeriod] = useState('90')
  const [served, setServed] = useState('')
  const [slab, setSlab] = useState('30')
  const [result, setResult] = useState<ReturnType<typeof calculateNoticeBuyout> | null>(null)

  const calculate = () => {
    const c = parseFloat(ctc), p = parseInt(period), s = parseInt(served) || 0
    if (!c || !p) return
    setResult(calculateNoticeBuyout(c, p, s, parseFloat(slab) / 100))
  }

  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">Notice Period Buyout</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Notice Period Buyout Calculator</h1>
          <p className="text-slate-300 text-lg max-w-2xl">Calculate exactly how much you need to pay for early exit. Includes tax impact and daily rate breakdown.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Notice Period Details</h2>
              <div className="space-y-5">
                <div>
                  <label className="form-label">Monthly CTC (Gross Pay)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">₹</span>
                    <input type="number" placeholder="e.g. 100000" value={ctc} onChange={e => setCtc(e.target.value)} className="form-input pl-8" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Notice Period (Days)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['30', '60', '90'].map(d => (
                      <button key={d} onClick={() => setPeriod(d)}
                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${period === d ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 text-slate-600'}`}>
                        {d} Days
                      </button>
                    ))}
                  </div>
                  <input type="number" placeholder="Or enter custom days" value={period} onChange={e => setPeriod(e.target.value)} className="form-input mt-2" min="1" />
                </div>
                <div>
                  <label className="form-label">Days Already Served</label>
                  <input type="number" placeholder="e.g. 30" value={served} onChange={e => setServed(e.target.value)} className="form-input" min="0" />
                </div>
                <div>
                  <label className="form-label">Your Tax Slab</label>
                  <select value={slab} onChange={e => setSlab(e.target.value)} className="form-select">
                    <option value="5">5% (Income ₹3–6L)</option>
                    <option value="10">10% (Income ₹6–9L)</option>
                    <option value="15">15% (Income ₹9–12L)</option>
                    <option value="20">20% (Income ₹12–15L)</option>
                    <option value="30">30% (Income above ₹15L)</option>
                  </select>
                </div>
                <button onClick={calculate} className="btn-primary w-full btn-lg">Calculate Buyout Cost →</button>
              </div>
            </div>

            {result && (
              <div className="animate-scale-in space-y-4">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6">
                  <p className="text-slate-400 text-sm mb-1">Buyout Amount (Pre-Tax)</p>
                  <p className="text-5xl font-bold">{formatINR(result.buyoutAmount)}</p>
                  <p className="text-slate-400 text-sm mt-2">Total cost with tax: <strong className="text-red-400">{formatINR(result.netCost)}</strong></p>
                </div>

                <div className="card overflow-hidden">
                  {[
                    { label: 'Daily Rate (CTC ÷ 26)', value: formatINR(result.perDay), color: 'text-slate-900' },
                    { label: 'Days to Pay For', value: `${result.daysToPayFor} days`, color: 'text-slate-900' },
                    { label: 'Gross Buyout Amount', value: formatINR(result.buyoutAmount), color: 'text-slate-900' },
                    { label: 'Tax on Buyout', value: formatINR(result.taxOnBuyout), color: 'text-red-500' },
                    { label: 'Total Cost to You', value: formatINR(result.netCost), color: 'text-red-600' },
                  ].map((r, i) => (
                    <div key={i} className="flex justify-between items-center px-6 py-4 border-b border-slate-50 last:border-0">
                      <span className="text-sm text-slate-600">{r.label}</span>
                      <span className={`font-bold ${r.color}`}>{r.value}</span>
                    </div>
                  ))}
                </div>

                <div className="highlight-box text-sm">
                  <p className="font-bold text-slate-900 mb-1">💡 Negotiation Tip</p>
                  <p className="text-slate-600">Ask your new employer to include a <strong>joining bonus of {formatINR(result.netCost)}</strong> to cover this buyout cost. Most companies agree for good candidates.</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card-flat p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Formula</h3>
              <div className="formula-box text-xs leading-relaxed">
                <p className="text-slate-400">// Daily Rate</p>
                <p>Per Day = Monthly CTC ÷ 26</p>
                <br />
                <p className="text-slate-400">// Buyout</p>
                <p>Buyout = Per Day × Remaining Days</p>
                <br />
                <p className="text-slate-400">// Total Cost</p>
                <p className="text-sky-400">= Buyout + Tax on Buyout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-8 mb-2">
          <AdUnit slot="1956241775" format="horizontal" />
        </div>
        <div className="max-w-3xl mt-2">
          <FAQSection faqs={faqs} title="Notice Period FAQs" />
        </div>
        <div className="max-w-3xl mt-6 mb-4">
          <AdUnit slot="5101050950" format="auto" />
        </div>
      </div>
    </div>
  )
}