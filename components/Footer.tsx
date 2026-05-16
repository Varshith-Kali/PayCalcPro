import Link from 'next/link'

const tools = [
  { href: '/ctc-to-inhand', label: 'CTC to In-Hand Calculator' },
  { href: '/in-hand-salary-calculator', label: 'In-Hand Salary Calculator' },
  { href: '/pf-calculator', label: 'PF Calculator' },
  { href: '/hra-calculator', label: 'HRA Calculator' },
  { href: '/gratuity-calculator', label: 'Gratuity Calculator' },
  { href: '/notice-period-buyout', label: 'Notice Period Buyout' },
  { href: '/tax-estimator', label: 'Tax Estimator' },
]

const quickLinks = [
  { href: '/blog', label: 'Salary Blog' },
  { href: '/about', label: 'About Us' },
]

const legal = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/disclaimer', label: 'Disclaimer' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">₹</span>
              </div>
              <span className="font-bold text-white text-lg">PayCalc Pro</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Free, accurate salary calculators for Indian professionals. Understand your CTC, take-home pay, PF, HRA, and tax deductions instantly.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs text-slate-300">Free Forever</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-full">
                <span className="text-xs text-slate-300">🇮🇳 Made for India</span>
              </div>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Calculators</h3>
            <ul className="space-y-2.5">
              {tools.map(t => (
                <li key={t.href}>
                  <Link href={t.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 mt-7">Legal</h3>
            <ul className="space-y-2.5">
              {legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">About PayCalc Pro</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Our calculators use the latest Indian tax slabs (FY 2025–26) including the New Tax Regime (Budget 2025), EPF rates at 8.25%, and standard HRA rules.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-sky-400 mt-0.5">✓</span>
                <span className="text-slate-400">Updated for FY 2025–26 (Budget 2025)</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-sky-400 mt-0.5">✓</span>
                <span className="text-slate-400">New & Old Tax Regime</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-sky-400 mt-0.5">✓</span>
                <span className="text-slate-400">No account needed</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm">
                <span className="text-sky-400 mt-0.5">✓</span>
                <span className="text-slate-400">100% free forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} PayCalc Pro. All rights reserved. For informational purposes only.
          </p>
          <p className="text-xs text-slate-600 text-center">
            Calculations are estimates. Consult a CA for official tax advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
