import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'India Salary Guide FY 2026-27 – Complete Calculator Hub | PayCalc Pro',
  description: 'Complete guide to Indian salaries FY 2026-27. In-hand salary for 5–50 LPA, tax comparison, PF, HRA, gratuity. Free calculators + real salary tables.',
  alternates: { canonical: 'https://paycalcpro.online/salary-guide/' },
  openGraph: {
    title: 'India Salary Guide FY 2026-27 – All Calculators',
    description: 'Real in-hand salary for every CTC from 5 to 50 LPA. Tax, PF, HRA, gratuity explained.',
    url: 'https://paycalcpro.online/salary-guide/',
  },
}

const SALARY_TABLE = [
  { ctc: '5 LPA',  monthly: '₹37,550',  annual: '₹4.51L',  tax: '₹0',       regime: '87A rebate' },
  { ctc: '7 LPA',  monthly: '₹53,370',  annual: '₹6.40L',  tax: '₹0',       regime: '87A rebate' },
  { ctc: '8 LPA',  monthly: '₹61,080',  annual: '₹7.33L',  tax: '₹0',       regime: '87A rebate' },
  { ctc: '10 LPA', monthly: '₹77,100',  annual: '₹9.25L',  tax: '₹0',       regime: '87A rebate' },
  { ctc: '12 LPA', monthly: '₹92,720',  annual: '₹11.13L', tax: '₹0',       regime: '87A rebate' },
  { ctc: '15 LPA', monthly: '₹1,06,450',annual: '₹12.77L', tax: '₹62,400',  regime: 'New regime' },
  { ctc: '18 LPA', monthly: '₹1,24,380',annual: '₹14.93L', tax: '₹1,43,520',regime: 'New regime' },
  { ctc: '20 LPA', monthly: '₹1,37,200',annual: '₹16.46L', tax: '₹2,02,800',regime: 'New regime' },
  { ctc: '25 LPA', monthly: '₹1,63,550',annual: '₹19.63L', tax: '₹3,74,400',regime: 'New regime' },
  { ctc: '30 LPA', monthly: '₹1,89,500',annual: '₹22.74L', tax: '₹5,86,800',regime: 'New regime' },
]

const LPA_SLUGS: { lpa: string; slug: string; href: string }[] = [
  { lpa: '5 LPA',  slug: 'take-home-salary-5-lpa',  href: '/blog/take-home-salary-5-lpa' },
  { lpa: '7 LPA',  slug: 'take-home-salary-7-lpa',  href: '/blog/take-home-salary-7-lpa' },
  { lpa: '8 LPA',  slug: 'take-home-salary-8-lpa',  href: '/blog/take-home-salary-8-lpa' },
  { lpa: '10 LPA', slug: 'take-home-salary-10-lpa', href: '/blog/take-home-salary-10-lpa' },
  { lpa: '12 LPA', slug: 'take-home-salary-12-lpa', href: '/blog/take-home-salary-12-lpa' },
  { lpa: '15 LPA', slug: 'take-home-salary-15-lpa', href: '/blog/take-home-salary-15-lpa' },
  { lpa: '20 LPA', slug: 'take-home-salary-20-lpa', href: '/blog/take-home-salary-20-lpa' },
  { lpa: '25 LPA', slug: 'take-home-salary-25-lpa', href: '/blog/take-home-salary-25-lpa' },
  { lpa: '30 LPA', slug: 'take-home-salary-30-lpa', href: '/blog/take-home-salary-30-lpa' },
]

const guideSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'India Salary Guide FY 2026-27: In-Hand Salary for Every CTC',
  description: 'Complete salary guide for Indian professionals. Real in-hand amounts for 5–50 LPA under new tax regime with all deductions.',
  url: 'https://paycalcpro.online/salary-guide/',
  datePublished: '2025-05-01',
  dateModified: '2025-05-19',
  author: { '@type': 'Person', name: 'Varshith Kali' },
  publisher: { '@type': 'Organization', name: 'PayCalc Pro', url: 'https://paycalcpro.online' },
}

export default function SalaryGuidePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />

      <section className="calc-hero">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-4 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-slate-300">Salary Guide</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            India Salary Guide FY 2026-27
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl">
            Real in-hand salaries for every CTC - from freshers at 5 LPA to senior roles at 50 LPA. Updated for Budget 2026 with new tax regime, Rs.12L zero-tax rebate, and variable pay.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

        {/* Quick salary table */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">In-Hand Salary Table FY 2026-27</h2>
          <p className="text-slate-500 text-sm mb-5">New tax regime · Metro city · Basic = 50% of CTC · Employer PF excluded from gross</p>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="data-table w-full">
                <thead>
                  <tr>
                    <th>CTC</th>
                    <th>Monthly In-Hand</th>
                    <th>Annual In-Hand</th>
                    <th>Income Tax</th>
                    <th>Tax Note</th>
                    <th>Calculator</th>
                  </tr>
                </thead>
                <tbody>
                  {SALARY_TABLE.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-slate-900">{row.ctc}</td>
                      <td className="font-bold text-sky-600">{row.monthly}</td>
                      <td>{row.annual}</td>
                      <td className={row.tax === '₹0' ? 'text-emerald-600 font-semibold' : 'text-red-500'}>{row.tax}</td>
                      <td className="text-xs text-slate-400">{row.regime}</td>
                      <td>
                        <Link href="/ctc-to-inhand/" className="text-xs text-sky-600 hover:underline font-medium">Calculate →</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">Approximate. Use the calculator for exact figures with your specific deductions and city.</p>
        </section>

        {/* Ad: After salary table — high-intent placement */}
        <AdUnit slot="1956241775" format="horizontal" />

        {/* Calculators grid */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Free Salary Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/ctc-to-inhand/', icon: '💰', title: 'CTC to In-Hand', desc: 'Full breakdown: PF, HRA, tax, special allowance. Variable pay support.' },
              { href: '/in-hand-salary-calculator/', icon: '🧮', title: 'In-Hand Salary', desc: 'Monthly take-home with salary chart. New & old regime.' },
              { href: '/tax-estimator/', icon: '📊', title: 'Tax Estimator', desc: 'New vs old regime. Add NPS, HRA, home loan deductions.' },
              { href: '/pf-calculator/', icon: '🏦', title: 'EPF Calculator', desc: '30-year corpus at 8.25%. Employee + employer breakdown.' },
              { href: '/hra-calculator/', icon: '🏠', title: 'HRA Exemption', desc: 'Section 10(13A). Metro vs non-metro. Tax saved amount.' },
              { href: '/gratuity-calculator/', icon: '🎁', title: 'Gratuity', desc: 'Payment of Gratuity Act formula. Service rounding included.' },
              { href: '/notice-period-buyout/', icon: '📋', title: 'Notice Period Buyout', desc: 'Daily rate × remaining days + tax impact calculation.' },
            ].map(c => (
              <Link key={c.href} href={c.href}
                className="card p-5 hover:shadow-md transition-all hover:border-sky-200 border border-transparent group">
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-sky-700">{c.title}</h3>
                <p className="text-sm text-slate-500">{c.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Salary breakdown by LPA */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Salary Breakdown by CTC</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {LPA_SLUGS.map(l => (
              <Link key={l.href} href={l.href}
                className="p-4 rounded-xl border border-slate-100 hover:border-sky-300 hover:bg-sky-50 transition-all text-center group">
                <p className="font-bold text-slate-900 group-hover:text-sky-700">{l.lpa}</p>
                <p className="text-xs text-slate-400 mt-0.5">In-Hand Breakdown →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Budget 2026 key changes */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Budget 2026 Key Changes for Salaried</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Zero Tax up to ₹12 Lakh', body: 'Section 87A rebate enhanced to ₹60,000 under new regime. If your net taxable income is ₹12L or below, you pay zero income tax.', color: 'bg-emerald-50 border-emerald-200' },
              { title: 'Standard Deduction ₹75,000', body: 'Increased from ₹50,000 to ₹75,000 for salaried under new regime. Directly reduces taxable income by ₹75,000.', color: 'bg-sky-50 border-sky-200' },
              { title: 'New Tax Slabs', body: '₹4-8L: 5% → ₹8-12L: 10% → ₹12-16L: 15% → ₹16-20L: 20% → ₹20-24L: 25% → Above ₹24L: 30%.', color: 'bg-violet-50 border-violet-200' },
              { title: 'EPF Rate 8.25%', body: 'EPFO declared 8.25% interest for FY 2024-25. Expected to continue FY 2026-27. Employee + employer contributions compound at this rate.', color: 'bg-amber-50 border-amber-200' },
            ].map((c, i) => (
              <div key={i} className={`p-5 rounded-xl border ${c.color}`}>
                <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formula section */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How In-Hand Salary Is Calculated</h2>
          <div className="card p-6 space-y-4">
            {[
              { step: '1', title: 'Basic = 50% of Fixed CTC', detail: 'Most Indian companies (IT, corporate) use 50% of fixed CTC as basic salary. Higher basic = higher PF deduction but also higher HRA allowance.' },
              { step: '2', title: 'HRA = 50% (metro) / 40% (non-metro) of Basic', detail: 'Metro cities: Mumbai, Delhi, Chennai, Kolkata. All other cities are non-metro. HRA exemption only available under old tax regime.' },
              { step: '3', title: 'Gross = CTC − Employer PF − Gratuity', detail: 'Employer PF (3.67% of basic, max ₹1,800/month) and gratuity provision (4.81% of basic) are CTC costs not credited to your salary account.' },
              { step: '4', title: 'Deductions: Employee PF + PT + TDS', detail: 'Employee PF = 12% of basic (max ₹1,800/month). Professional Tax = ₹200/month (varies by state). TDS = estimated income tax / 12.' },
              { step: '5', title: 'In-Hand = Gross − All Deductions', detail: 'What reaches your bank account every month. Variable pay/bonus comes separately, typically quarterly or annually.' },
            ].map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{s.step}</div>
                <div>
                  <p className="font-semibold text-slate-900">{s.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/ctc-to-inhand/" className="btn-primary inline-flex">Calculate My In-Hand Salary →</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
