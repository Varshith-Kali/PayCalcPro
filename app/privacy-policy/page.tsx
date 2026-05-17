import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – PayCalc Pro',
  description: 'Privacy Policy for PayCalc Pro. Learn how we handle your data, cookies, and analytics.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: May 2026</p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed">
        {[
          { title: '1. Information We Collect', body: 'PayCalc Pro does not collect any personally identifiable information. All salary calculations are performed entirely in your browser (client-side) and no calculation data is sent to our servers. We do not require account creation or login.' },
          { title: '2. Cookies & Analytics', body: 'We use Google Analytics to understand aggregate traffic patterns (page views, device types, geographic distribution). This may involve cookies set by Google. You can opt out via browser settings or Google\'s opt-out tool. We may use Google AdSense, which uses cookies to serve relevant advertisements based on your browsing activity.' },
          { title: '3. Google AdSense', body: 'PayCalc Pro uses Google AdSense to display advertisements. Google uses the DoubleClick cookie to serve ads based on your interests. You can opt out of personalized advertising by visiting Google\'s Ad Settings. Third-party vendors, including Google, use cookies to serve ads based on prior visits to this and other websites.' },
          { title: '4. Data Sharing', body: 'We do not sell, trade, or otherwise transfer your personal information to outside parties. We do not collect personal information, so there is nothing to share. Analytics data shared with Google is governed by Google\'s Privacy Policy.' },
          { title: '5. Children\'s Privacy', body: 'PayCalc Pro is not intended for children under 13. We do not knowingly collect information from children. If you believe a child has provided us information, please contact us.' },
          { title: '6. Third-Party Links', body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.' },
          { title: '7. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance.' },
          { title: '8. Contact', body: 'For any questions about this Privacy Policy, contact us at hello@paycalcpro.online.' },
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
