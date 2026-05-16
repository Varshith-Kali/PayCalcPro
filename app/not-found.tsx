import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Page Not Found</h1>
        <p className="text-slate-500 text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary btn-lg">← Back to Home</Link>
          <Link href="/ctc-to-inhand" className="btn-secondary btn-lg">Try a Calculator</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/ctc-to-inhand', label: '💰 CTC Calc' },
            { href: '/pf-calculator', label: '🏦 PF Calc' },
            { href: '/hra-calculator', label: '🏠 HRA Calc' },
            { href: '/tax-estimator', label: '📊 Tax Est.' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="p-3 rounded-xl bg-slate-50 text-slate-600 text-sm hover:bg-sky-50 hover:text-sky-700 transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
