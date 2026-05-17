import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us – PayCalc Pro',
  description: 'Get in touch with the PayCalc Pro team. We are happy to answer questions about our free salary calculators for Indian professionals.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="calc-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or found an issue? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8">

        {/* Contact Card */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 bg-sky-50 rounded-xl border border-sky-100">
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">✉</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Email Us</p>
                <a
                  href="mailto:contact.paycalcpro@gmail.com"
                  className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors"
                >
                  contact.paycalcpro@gmail.com
                </a>
                <p className="text-slate-500 text-xs mt-1">We typically respond within 24–48 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🌐</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Website</p>
                <a
                  href="https://paycalcpro.utilhub.workers.dev"
                  className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                >
                  paycalcpro.utilhub.workers.dev
                </a>
                <p className="text-slate-500 text-xs mt-1">Free salary calculators for India</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ-style contact reasons */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What Can We Help You With?</h2>
          <div className="space-y-4">
            {[
              {
                icon: '🐛',
                title: 'Report a Bug or Calculation Error',
                desc: 'If you notice an incorrect calculation result or something is not working as expected, please email us with details including the inputs you used and the expected vs actual output.',
              },
              {
                icon: '💡',
                title: 'Suggest a New Calculator',
                desc: 'Have an idea for a new tool? We are always looking to expand PayCalc Pro with useful calculators for Indian professionals. Drop us a message!',
              },
              {
                icon: '📋',
                title: 'Content Correction',
                desc: 'Tax rules change frequently. If you spot outdated information in any of our guides or calculators (FY 2025-26 data), please let us know.',
              },
              {
                icon: '🤝',
                title: 'Partnerships & Collaborations',
                desc: 'Interested in collaborating, writing a guest post, or exploring a partnership? Reach out to us at contact.paycalcpro@gmail.com.',
              },
              {
                icon: '🔒',
                title: 'Privacy Concerns',
                desc: 'For any questions related to our Privacy Policy or data handling, please email us and we will respond promptly.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="highlight-box">
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-900">Note:</strong> PayCalc Pro provides free, informational salary calculators.
            We are not a financial advisory service and do not provide personalised tax or legal advice.
            For official tax computation, please consult a Chartered Accountant.
          </p>
        </div>

        {/* Navigation Back */}
        <div className="text-center">
          <Link href="/" className="btn-secondary btn-lg mr-4">← Back to Home</Link>
          <Link href="/about" className="btn-primary btn-lg">About Us →</Link>
        </div>
      </div>
    </div>
  )
}
