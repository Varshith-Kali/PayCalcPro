import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSection from '@/components/FAQSection'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'PayCalc Pro – Free Salary Calculator India | CTC to In-Hand FY 2025-26',
  description: 'Calculate your in-hand salary from CTC instantly. Free Indian salary calculators for PF, HRA, Gratuity & Tax. Updated for FY 2025-26 new tax regime.',
}

const tools = [
  { href: '/ctc-to-inhand', emoji: '💰', title: 'CTC to In-Hand', desc: 'See your exact monthly take-home from annual CTC', tag: 'Most Used' },
  { href: '/tax-estimator', emoji: '📊', title: 'Tax Estimator', desc: 'Compare new vs old tax regime side by side', tag: 'Popular' },
  { href: '/pf-calculator', emoji: '🏦', title: 'PF Calculator', desc: 'EPF contributions and long-term corpus growth', tag: '' },
  { href: '/hra-calculator', emoji: '🏠', title: 'HRA Calculator', desc: 'Your HRA tax exemption under Section 10(13A)', tag: '' },
  { href: '/gratuity-calculator', emoji: '🎁', title: 'Gratuity Calculator', desc: 'Estimate gratuity after 5+ years of service', tag: '' },
  { href: '/notice-period-buyout', emoji: '📋', title: 'Notice Buyout', desc: 'Cost of early exit with full tax breakdown', tag: '' },
]

const examples = [
  { ctc: '6 LPA',  inhand: '₹45,460/mo', pct: 91 },
  { ctc: '10 LPA', inhand: '₹77,100/mo', pct: 82 },
  { ctc: '15 LPA', inhand: '₹1,06,450/mo', pct: 76 },
  { ctc: '20 LPA', inhand: '₹1,37,200/mo', pct: 70 },
  { ctc: '30 LPA', inhand: '₹1,89,500/mo', pct: 63 },
]

const faqs = [
  { question: 'What is in-hand salary?', answer: 'In-hand salary is the actual amount credited to your bank account every month after all deductions — PF, professional tax, and income tax — are subtracted from your gross salary.' },
  { question: 'How is CTC different from take-home salary?', answer: 'CTC (Cost to Company) is the total annual cost your employer bears including employer PF, gratuity, and benefits. Take-home is typically 65–85% of CTC depending on your tax slab and city.' },
  { question: 'Does PF reduce my in-hand salary?', answer: 'Yes — 12% of basic salary (capped at ₹1,800/month) is deducted from your salary as employee PF. But it earns 8.25% tax-free interest annually.' },
  { question: 'Can HRA reduce my income tax?', answer: 'Yes, under the Old Tax Regime via Section 10(13A). The exemption is the lowest of: actual HRA received, 50%/40% of basic (metro/non-metro), or rent paid minus 10% of basic.' },
  { question: 'Is gratuity part of CTC?', answer: 'Yes, most companies include gratuity provision (~4.81% of basic) in CTC. But you only receive it after completing 5 years of continuous service with the same employer.' },
]

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-100 mb-6">
              Updated for FY 2025–26 · Always Free
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Know Your Exact<br />
              <span className="text-sky-500">Take-Home Salary</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              India's simplest salary calculators. Enter your CTC and get an instant, accurate breakdown of every rupee — PF, HRA, tax, and net salary.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link href="/ctc-to-inhand"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base">
                Calculate My Salary →
              </Link>
              <Link href="/tax-estimator"
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-lg border border-gray-200 transition-colors text-base">
                Compare Tax Regimes
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              {['No signup required', 'No data collected', 'FY 2025–26 tax rules', 'Calculations stay in your browser'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator Cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Salary Calculators</h2>
            <p className="text-gray-500 mt-1">Free tools for every salary question you have</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map(t => (
              <Link key={t.href} href={t.href}
                className="group bg-white rounded-xl border border-gray-100 p-5 hover:border-sky-200 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{t.emoji}</span>
                  {t.tag && (
                    <span className="bg-sky-50 text-sky-600 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-sky-100">
                      {t.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.desc}</p>
                <span className="text-sky-500 text-sm font-medium group-hover:translate-x-1 inline-block transition-transform">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTC Examples Table ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What Does Your CTC Mean in Reality?</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                India's simplest salary calculators. Enter your CTC and get an instant, accurate breakdown of every rupee — PF, HRA, tax, and net salary. Updated for FY 2025-26.
              </p>
              <Link href="/ctc-to-inhand"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
                Calculate Your Exact In-Hand →
              </Link>
            </div>
            <div className="space-y-3">
              {examples.map((e, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex-shrink-0 w-20 text-sm font-semibold text-gray-700">₹{e.ctc}</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-sky-500 rounded-full" style={{ width: `${e.pct}%` }} />
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-base font-bold text-gray-900">{e.inhand}</span>
                    <span className="text-gray-400 text-xs ml-1">({e.pct}%)</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-gray-400 pt-1">*Metro city, new tax regime, standard deductions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              { n: '7+', l: 'Free Calculators' },
              { n: '100%', l: 'Privacy — No Data Sent' },
              { n: 'FY26', l: 'Tax Rules Updated' },
            ].map((s, i) => (
              <div key={i} className="py-2">
                <span className="block text-2xl font-bold text-sky-500">{s.n}</span>
                <span className="text-gray-500 text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Salary & Tax Guides</h2>
              <p className="text-gray-500 text-sm mt-1">In-depth articles on Indian salary, PF, HRA and taxes</p>
            </div>
            <Link href="/blog" className="hidden md:block text-sky-500 hover:text-sky-600 text-sm font-semibold transition-colors">
              All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.slice(0, 6).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group block bg-gray-50 hover:bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm p-5 transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-sky-50 text-sky-600 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-sky-100">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-sky-600 transition-colors mb-2">{post.title}</h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">{post.description}</p>
                <span className="text-sky-500 text-xs font-semibold">Read →</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/blog" className="text-sky-500 font-semibold text-sm">View All Articles →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
          <FAQSection faqs={faqs} title="" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-sky-500 py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Start With Your CTC</h2>
          <p className="text-sky-100 mb-7 text-base">Get your full salary breakdown in under 10 seconds — free, instant, private.</p>
          <Link href="/ctc-to-inhand"
            className="inline-block bg-white hover:bg-sky-50 text-sky-600 font-bold px-9 py-3.5 rounded-lg shadow transition-colors text-base">
            Calculate Now — It&apos;s Free
          </Link>
        </div>
      </section>

    </div>
  )
}
