import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – PayCalc Pro | How We Handle Your Data',
  description: 'PayCalc Pro Privacy Policy. Learn how we collect, use, and protect your data. Covers Google Analytics, Google AdSense, cookies, and your privacy rights.',
  alternates: { canonical: 'https://paycalcpro.online/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: May 24, 2026 | Effective: May 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-700 leading-relaxed">

        <div className="card p-8">
          <p className="text-slate-600 leading-relaxed">
            This Privacy Policy describes how PayCalc Pro ("we", "us", or "our"), operated at paycalcpro.online, collects, uses, and shares information when you use our website and free salary calculators. We are committed to protecting your privacy. Please read this policy carefully.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
          <h3 className="font-semibold text-slate-800 mb-2">1.1 Salary Calculation Data</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            All salary calculations on PayCalc Pro are performed entirely within your browser (client-side JavaScript). We do not transmit, store, or process any salary figures, tax inputs, or personal financial data on our servers. The numbers you enter into our calculators never leave your device.
          </p>
          <h3 className="font-semibold text-slate-800 mb-2">1.2 Analytics Data</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We use Google Analytics (GA4) to understand how visitors use our website. Google Analytics collects anonymised data including: pages visited, time spent on pages, device type (mobile/desktop), browser type, approximate geographic location (country/city level), and traffic source. This data is aggregated and does not personally identify you. Google Analytics uses cookies to track sessions.
          </p>
          <h3 className="font-semibold text-slate-800 mb-2">1.3 Advertising Data</h3>
          <p className="text-slate-600 leading-relaxed">
            We display advertisements through Google AdSense. Google AdSense uses cookies, web beacons, and similar tracking technologies to serve advertisements based on your interests and browsing history across the web. Google's advertising systems may collect data such as: IP address, browser type, pages visited on our site, and browsing behaviour on other websites you have visited. This data is processed by Google in accordance with Google's Privacy Policy.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Cookies We Use</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Cookies are small text files stored on your device. We use the following types of cookies:
          </p>
          <div className="overflow-x-auto">
            <table className="data-table w-full text-sm">
              <thead><tr><th>Cookie Type</th><th>Purpose</th><th>Set By</th><th>How to Opt Out</th></tr></thead>
              <tbody>
                <tr><td>Analytics</td><td>Track page views and user behaviour (anonymised)</td><td>Google Analytics</td><td>Browser settings or Google Analytics Opt-out Add-on</td></tr>
                <tr><td>Advertising</td><td>Serve personalised ads based on interests</td><td>Google AdSense / DoubleClick</td><td>Google Ad Settings at adssettings.google.com</td></tr>
                <tr><td>Functional</td><td>Remember your preferences (e.g., city selection)</td><td>PayCalc Pro (localStorage)</td><td>Clear browser localStorage</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            You can control or disable cookies through your browser settings. Disabling cookies may affect the functionality of some features. For Google's advertising cookies, visit <strong>adssettings.google.com</strong> to manage your ad personalisation preferences.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Google AdSense and Third-Party Advertising</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PayCalc Pro is a participant in Google AdSense. Our publisher ID is <strong>ca-pub-7840512374734019</strong>. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DoubleClick cookie enables it and its partners to serve advertisements based on your visit to our site and/or other sites on the Internet.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Users may opt out of personalised advertising by visiting <strong>www.aboutads.info</strong> or Google's Ad Settings. Users in the European Union may additionally use the European Interactive Digital Advertising Alliance opt-out tool at <strong>www.youronlinechoices.eu</strong>.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We do not control the content of advertisements served by Google AdSense. Advertisements are selected by Google's algorithms based on the content of our pages and your interests. We are not responsible for the accuracy or content of third-party advertisements.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. How We Use Information</h2>
          <p className="text-slate-600 leading-relaxed mb-3">We use the information collected through analytics to:</p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Understand which calculators and pages are most useful to visitors</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Identify technical issues and improve site performance</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Plan new content and features based on user demand</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> Monitor traffic trends to ensure the site remains available</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            We do not use any collected information to personally identify you, contact you, or make automated decisions about you. We do not sell, rent, or trade any personal information to third parties.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">5. Data Sharing and Third Parties</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Since we do not collect personally identifiable information, there is no personal data to sell or share. Anonymised analytics data is shared with Google Analytics as part of their service. Advertising data is processed by Google as described in Section 3.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our website may contain links to third-party websites (such as the Income Tax Department website, EPFO, or other references). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">6. Children's Privacy</h2>
          <p className="text-slate-600 leading-relaxed">
            PayCalc Pro is designed for working adults and salaried professionals. Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided information to us, please contact us immediately at contact.paycalcpro@gmail.com and we will take appropriate action.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">7. Data Security</h2>
          <p className="text-slate-600 leading-relaxed">
            Since all salary calculations are performed locally in your browser and we do not store any financial data, the risk of data breach is minimal. Our website is served over HTTPS (TLS encryption) to protect data in transit. We use Cloudflare for hosting and content delivery, which provides DDoS protection and additional security layers.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">8. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            Under applicable Indian and international privacy laws, you have the right to:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> <strong>Access:</strong> Request information about what data we hold about you</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> <strong>Correction:</strong> Request correction of any inaccurate data</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> <strong>Deletion:</strong> Request deletion of your data</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> <strong>Opt-out:</strong> Opt out of personalised advertising via Google Ad Settings</li>
            <li className="flex gap-2"><span className="text-sky-500 font-bold">•</span> <strong>Withdraw consent:</strong> Disable cookies at any time via browser settings</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            Since we do not maintain user accounts or store personal data, most data access requests will be directed to Google Analytics and Google AdSense as the relevant data processors.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of PayCalc Pro after any changes constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your privacy on PayCalc Pro, please contact us at:
          </p>
          <div className="mt-4 bg-slate-50 rounded-xl p-4">
            <p className="font-semibold text-slate-900">PayCalc Pro</p>
            <p className="text-slate-600">Website: paycalcpro.online</p>
            <p className="text-slate-600">Email: contact.paycalcpro@gmail.com</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>

      </div>
    </div>
  )
}
