'use client'
import { useState } from 'react'
import Link from 'next/link'

const tools = [
  { href: '/ctc-to-inhand/', label: 'CTC to In-Hand Calculator' },
  { href: '/in-hand-salary-calculator/', label: 'In-Hand Salary Calculator' },
  { href: '/pf-calculator/', label: 'PF Calculator' },
  { href: '/hra-calculator/', label: 'HRA Calculator' },
  { href: '/gratuity-calculator/', label: 'Gratuity Calculator' },
  { href: '/notice-period-buyout/', label: 'Notice Period Buyout' },
  { href: '/tax-estimator/', label: 'Tax Estimator' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — text only, no image box */}
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-[22px] font-black tracking-tight text-gray-900">Pay</span>
            <span className="text-[22px] font-black tracking-tight text-sky-500">Calc</span>
            <span className="ml-0.5 bg-sky-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">PRO</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors py-5">
                Calculators
                <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {tools.map(t => (
                  <Link key={t.href} href={t.href}
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-sky-50 hover:text-sky-700 transition-colors">
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/salary-guide/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Salary Guide</Link>
            <Link href="/blog/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Blog</Link>
            <Link href="/about/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">About</Link>
            <Link href="/contact/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/ctc-to-inhand/"
              className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Calculate Salary
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-500 hover:text-gray-700">
            {open
              ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            <button onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-gray-700">
              Calculators
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="pl-3 border-l border-gray-100 space-y-0.5 mb-1">
                {tools.map(t => (
                  <Link key={t.href} href={t.href} onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-gray-600 hover:text-sky-600 transition-colors">
                    {t.label}
                  </Link>
                ))}
              </div>
            )}
            {[{ href: '/salary-guide/', label: 'Salary Guide' }, { href: '/blog/', label: 'Blog' }, { href: '/about/', label: 'About' }, { href: '/contact/', label: 'Contact' }].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium text-gray-700 border-t border-gray-50">
                {l.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 border-t border-gray-100">
              <Link href="/ctc-to-inhand/" onClick={() => setOpen(false)}
                className="block text-center bg-sky-500 text-white text-sm font-semibold py-2.5 rounded-lg">
                Calculate My Salary
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
