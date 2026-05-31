import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About PayCalc Pro – Free Indian Salary Calculator | Mission & Methodology',
  description: 'PayCalc Pro is India\'s most accurate free salary calculator. Learn about our mission, calculation methodology, tax rules used, and our commitment to helping Indian professionals understand their salary.',
  alternates: { canonical: 'https://paycalcpro.online/about/' },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About PayCalc Pro</h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">India's most accurate free salary calculator — built for professionals who deserve clarity on every rupee they earn.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed text-base">
            PayCalc Pro was built to solve one of the most frustrating problems for Indian working professionals: understanding their actual take-home salary. When you receive a job offer with a CTC of Rs.15 lakh, what does that really mean? How much will land in your bank account every month? How much goes to PF? How much income tax will be deducted? These are not simple questions — and the answers depend on dozens of variables specific to Indian salary structures.
          </p>
          <p className="text-slate-600 leading-relaxed text-base mt-4">
            We created PayCalc Pro to be the single most reliable, free, and instant tool for these calculations. No spreadsheets. No consultants. No guesswork. Just accurate, transparent breakdowns that match real Indian salary slips from companies like TCS, Infosys, Wipro, HCL, Cognizant, and other leading employers.
          </p>
          <p className="text-slate-600 leading-relaxed text-base mt-4">
            Every calculation on PayCalc Pro is based on publicly available government rules — the Income Tax Act 1961 (as amended by successive Finance Acts), the Employees' Provident Funds and Miscellaneous Provisions Act 1952, and the Payment of Gratuity Act 1972. We update our calculators every year as soon as the Union Budget is presented to Parliament.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Indian Salary Calculations Are Complex</h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Indian salary structures are uniquely complex compared to most countries. Your Cost to Company (CTC) is not your salary — it is the total cost your employer bears for employing you. It includes components you never directly receive, such as the employer's share of Provident Fund (PF) contributions and the actuarial provision for gratuity. Understanding these distinctions is critical for comparing job offers and financial planning.
          </p>
          <p className="text-slate-600 leading-relaxed text-base mt-4">
            A typical Indian salary has multiple layers. The basic salary forms the foundation — usually 40 to 50 percent of fixed CTC in corporate and IT companies. House Rent Allowance (HRA) is calculated as a percentage of basic (50 percent for metro cities, 40 percent for non-metro). Special allowance fills the remainder. On top of this, the employer contributes 12 percent of basic to EPF (capped at Rs.1,800 per month), plus a gratuity provision of approximately 4.81 percent of basic annually.
          </p>
          <p className="text-slate-600 leading-relaxed text-base mt-4">
            From your gross salary, you then lose employee PF (12 percent of basic, capped at Rs.1,800 per month), professional tax (Rs.200 per month in most states), and income tax (calculated on taxable income after standard deduction of Rs.75,000 under the new regime). The result — your actual in-hand salary — can be anywhere from 65 to 90 percent of CTC depending on your salary level and tax regime.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Calculation Methodology</h2>
          <p className="text-slate-600 leading-relaxed text-base mb-4">
            All PayCalc Pro calculators use the standard salary structure followed by most Indian IT and corporate employers. Here is the exact methodology we follow:
          </p>
          <ul className="space-y-3 text-slate-600 text-base">
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">1.</span><span><strong>Basic Salary:</strong> Set at 50% of Fixed CTC. This is the industry norm for IT and corporate companies (TCS, Infosys, Wipro, Accenture, etc.).</span></li>
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">2.</span><span><strong>HRA:</strong> 50% of basic for metro cities (Mumbai, Delhi, Kolkata, Chennai); 40% for all other cities.</span></li>
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">3.</span><span><strong>Employer PF:</strong> 12% of basic, capped at Rs.1,800/month (i.e., capped when basic exceeds Rs.15,000/month — EPFO ceiling).</span></li>
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">4.</span><span><strong>Gratuity provision:</strong> (Basic x 15) / 26 = 4.81% of annual basic. This is an employer cost, not credited to you monthly.</span></li>
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">5.</span><span><strong>Gross salary:</strong> CTC minus employer PF minus gratuity provision. Special allowance is the balancing figure.</span></li>
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">6.</span><span><strong>Income tax:</strong> Calculated on (Gross - Employee PF - Rs.75,000 standard deduction) using the new tax regime slabs for FY 2026-27 with Section 87A rebate.</span></li>
            <li className="flex gap-3"><span className="font-bold text-sky-600 min-w-[20px]">7.</span><span><strong>In-Hand:</strong> Gross - Employee PF (12% of basic, max Rs.1,800/month) - Professional Tax (Rs.200/month) - Income Tax.</span></li>
          </ul>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">FY 2026-27 Tax Rules We Use</h2>
          <p className="text-slate-600 leading-relaxed text-base mb-4">
            All calculators are updated for Financial Year 2026-27 (Assessment Year 2027-28) as per the Union Budget 2026. The key rules applicable:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'New Tax Regime Slabs', body: 'Rs.0-4L: 0% | Rs.4-8L: 5% | Rs.8-12L: 10% | Rs.12-16L: 15% | Rs.16-20L: 20% | Rs.20-24L: 25% | Above Rs.24L: 30%' },
              { title: 'Section 87A Rebate', body: 'Zero income tax if net taxable income is Rs.12 lakh or below under new regime. Rebate amount: Rs.60,000.' },
              { title: 'Standard Deduction', body: 'Rs.75,000 for salaried employees under new tax regime (increased from Rs.50,000 in FY 2024-25). Available to all salaried taxpayers.' },
              { title: 'EPF Interest Rate', body: '8.25% per annum — confirmed by EPFO for FY 2026-27. Employee and employer contributions earn this rate, compounded annually.' },
              { title: 'Professional Tax', body: 'Maximum Rs.200/month (Rs.2,400/year) — applicable in Maharashtra, Karnataka, West Bengal, and several other states. Delhi and some states have zero PT.' },
              { title: 'Gratuity Tax Exemption', body: 'Up to Rs.20 lakh is tax-free for private sector employees under Payment of Gratuity Act. Amount above Rs.20L is taxable.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/ctc-to-inhand/', icon: 'Rs.', title: 'CTC to In-Hand Calculator', desc: 'Convert annual CTC to exact monthly take-home. Supports variable pay, metro/non-metro, and shows full PF, HRA, tax breakdown.' },
              { href: '/tax-estimator/', icon: '%', title: 'Income Tax Estimator', desc: 'Compare new vs old tax regime side by side. Add HRA, home loan, NPS, 80C deductions to see which regime saves more tax.' },
              { href: '/pf-calculator/', icon: 'PF', title: 'EPF Calculator', desc: 'Calculate EPF corpus over 1 to 30 years at 8.25% interest. Shows employee, employer, and total contributions separately.' },
              { href: '/hra-calculator/', icon: 'H', title: 'HRA Exemption Calculator', desc: 'Calculate your HRA tax exemption under Section 10(13A). Shows limiting factor and tax saved amount.' },
              { href: '/gratuity-calculator/', icon: 'G', title: 'Gratuity Calculator', desc: 'Estimate gratuity using Payment of Gratuity Act formula. Handles service period rounding and Rs.20L tax-free limit.' },
              { href: '/notice-period-buyout/', icon: 'N', title: 'Notice Period Buyout', desc: 'Calculate exact cost of buying out your notice period including income tax impact at your marginal slab rate.' },
            ].map((f, i) => (
              <Link key={i} href={f.href} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-sky-50 hover:border-sky-200 border border-transparent transition-all">
                <span className="w-9 h-9 bg-sky-600 text-white rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{f.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Accuracy</h2>
          <p className="text-slate-600 leading-relaxed text-base">
            We review and update all calculations every year after the Union Budget announcement in February. Our tax slabs, rebate limits, standard deductions, and EPF interest rates are sourced directly from official government notifications — the Finance Act, CBDT circulars, and EPFO announcements.
          </p>
          <p className="text-slate-600 leading-relaxed text-base mt-4">
            PayCalc Pro calculations are estimates based on standard salary structures. Actual in-hand salary can differ based on your company's specific salary structure, state-level professional tax rates, voluntary PF contributions, NPS contributions, reimbursements (LTA, medical, food coupons), and other components in your specific CTC letter. For official tax computation, always consult a Chartered Accountant or use the Income Tax Department's official calculator.
          </p>
          <ul className="mt-5 space-y-2">
            {[
              'Always free — no subscriptions, no hidden fees, no ads inside the calculator',
              'No account required — all calculations happen instantly in your browser',
              'Your data never leaves your device — we do not store any salary information',
              'Updated for FY 2026-27: new tax regime slabs, Rs.12L rebate, Rs.75K standard deduction, EPF 8.25%',
              'Mobile-responsive design — works perfectly on any screen size',
            ].map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-sky-50 border border-sky-100 rounded-2xl p-6">
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-900">Disclaimer:</strong> All calculations on PayCalc Pro are estimates based on standard assumptions and publicly available tax rules for FY 2026-27. Results are for informational purposes only and do not constitute financial or tax advice. For precise tax computation specific to your situation, consult a qualified Chartered Accountant. PayCalc Pro is not affiliated with the Income Tax Department, EPFO, or any government body.
          </p>
        </div>

        <div className="text-center space-y-4">
          <p className="text-slate-500 text-sm">Have questions or found an error in our calculations?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact/" className="btn-primary">Contact Us</Link>
            <Link href="/blog/" className="btn-secondary">Read Our Salary Guides</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
