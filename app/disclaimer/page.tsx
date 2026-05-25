import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer – PayCalc Pro | Salary Calculator Estimates',
  description: 'Disclaimer for PayCalc Pro salary calculators. Results are estimates for informational purposes only. Not professional tax or financial advice.',
  alternates: { canonical: 'https://paycalcpro.online/disclaimer/' },
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Disclaimer</h1>
          <p className="text-slate-400">Last updated: May 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed">
        <div className="highlight-box">
          <p className="font-bold text-slate-900 mb-2">Important Notice</p>
          <p>All calculations provided by PayCalc Pro are <strong>estimates only</strong> and are intended for general informational purposes. They do not constitute professional financial, tax, or legal advice.</p>
        </div>
        {[
          { title: 'Calculation Accuracy', body: 'Our salary calculators use standard assumptions (e.g., Basic = 50% of CTC, HRA = 50%/40% of Basic) that may not reflect your actual salary structure. Every company has different policies for structuring compensation.' },
          { title: 'Tax Calculations', body: 'Income tax estimates are based on publicly available CBDT tax slabs for FY 2026-27. Individual tax liability varies based on actual investments, deductions, surcharges, and specific circumstances. Always consult a Chartered Accountant for official tax computation.' },
          { title: 'EPF & Gratuity', body: 'PF and gratuity calculations follow standard EPFO rules and the Payment of Gratuity Act. Actual employer policies may differ. EPF interest rates change annually and are set by the EPFO board.' },
          { title: 'No Professional Relationship', body: 'Using PayCalc Pro does not create a professional (CA, financial advisor, or legal) relationship between you and PayCalc Pro.' },
          { title: 'Not Affiliated with Government Bodies', body: 'PayCalc Pro is an independent website and is not affiliated with, endorsed by, or connected to EPFO, the Income Tax Department, CBDT, or any Indian government body.' },
          { title: 'External Links', body: 'Links to external websites are provided for reference only. We are not responsible for the accuracy or content of external sites.' },
        ].map((s, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
