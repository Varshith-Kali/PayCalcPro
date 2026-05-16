import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About PayCalc Pro – Free Salary Calculators for Indian Professionals',
  description: 'Learn about PayCalc Pro — our mission to provide free, accurate, and instant salary calculators for Indian professionals.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About PayCalc Pro</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">Built for Indian professionals who deserve clarity on their salary — without complicated spreadsheets.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-slate max-w-none space-y-8">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              PayCalc Pro was created with one simple goal: <strong>help every Indian professional understand their salary</strong>. When you receive a CTC offer, you should know exactly how much lands in your bank account every month — with no guesswork.
            </p>
            <p className="text-slate-600 leading-relaxed text-base mt-4">
              Salary structures in India are complex. Between CTC, gross, PF, HRA, professional tax, income tax, and gratuity — it is genuinely confusing. Our tools make it simple, instant, and free.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '💰', title: 'CTC to In-Hand Calculator', desc: 'Convert CTC to monthly take-home instantly' },
                { icon: '🏦', title: 'PF Calculator', desc: 'EPF contributions and long-term corpus projections' },
                { icon: '🏠', title: 'HRA Calculator', desc: 'Section 10(13A) exemption calculation' },
                { icon: '🎁', title: 'Gratuity Calculator', desc: 'Gratuity payout based on service and salary' },
                { icon: '📋', title: 'Notice Buyout Calculator', desc: 'Cost of early exit with tax implications' },
                { icon: '📊', title: 'Tax Estimator', desc: 'New vs old regime comparison for FY 2025-26' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <span className="text-2xl">{f.icon}</span>
                  <div><p className="font-semibold text-slate-900 text-sm">{f.title}</p><p className="text-slate-500 text-xs mt-0.5">{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Promise</h2>
            <ul className="space-y-3">
              {[
                '✅ Always free — no subscriptions, no hidden fees',
                '✅ No account required — instant calculations',
                '✅ Updated for FY 2025-26 tax slabs, EPF 8.25%, ₹12L rebate',
                '✅ Your data never leaves your browser',
                '✅ Mobile-first design for on-the-go calculations',
                '✅ Accurate Indian-specific calculations (EPF, HRA metro rules, PT)',
              ].map((p, i) => <li key={i} className="text-slate-700 text-base">{p}</li>)}
            </ul>
          </div>

          <div className="highlight-box">
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong className="text-slate-900">Disclaimer:</strong> All calculations on PayCalc Pro are estimates based on standard assumptions and publicly available tax rules for FY 2025-26. For official tax computation, consult a Chartered Accountant. We are not affiliated with EPFO, Income Tax Department, or any government body.
            </p>
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn-primary btn-lg">Read Our Guides →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
