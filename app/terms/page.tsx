import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use – PayCalc Pro',
  description: 'Terms of Use for PayCalc Pro salary calculator website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Use</h1>
          <p className="text-slate-400">Last updated: May 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed">
        {[
          { title: '1. Acceptance of Terms', body: 'By accessing and using PayCalc Pro (paycalcpro.online), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.' },
          { title: '2. Use of Calculators', body: 'The salary calculators on PayCalc Pro are provided for informational and educational purposes only. Results are estimates based on standard assumptions. They should not be used as a substitute for professional financial or tax advice.' },
          { title: '3. Accuracy of Information', body: 'We strive to keep our calculators accurate and updated with the latest tax rules. However, we make no warranty, express or implied, about the accuracy, completeness, or suitability of the information for any particular purpose. Tax laws change frequently and individual circumstances vary.' },
          { title: '4. Intellectual Property', body: 'All content on PayCalc Pro, including text, graphics, calculator algorithms, and design, is the property of PayCalc Pro and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.' },
          { title: '5. Limitation of Liability', body: 'PayCalc Pro shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our calculators or content. Your use of the site is at your sole risk.' },
          { title: '6. Third-Party Advertisements', body: 'PayCalc Pro displays third-party advertisements via Google AdSense. We are not responsible for the content of advertisements or the products/services they promote. Clicking on ads takes you to third-party sites governed by their own terms.' },
          { title: '7. Changes to Terms', body: 'We reserve the right to modify these terms at any time. Changes are effective immediately upon posting. Continued use constitutes acceptance of the modified terms.' },
          { title: '8. Governing Law', body: 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts.' },
          { title: '9. Contact', body: 'For questions about these terms, contact us at contact.paycalcpro@gmail.com.' },
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
