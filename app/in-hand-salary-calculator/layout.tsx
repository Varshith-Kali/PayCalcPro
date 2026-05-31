import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-Hand Salary Calculator India 2026 – Monthly Take-Home from CTC',
  description: 'Calculate your exact monthly in-hand salary from CTC. Instant breakdown of Basic, HRA, PF, TDS, Professional Tax. Free for Indian salaried employees FY 2026-27.',
  keywords: ['in hand salary calculator', 'take home salary calculator india', 'monthly salary calculator', 'salary after deductions india', 'net salary calculator india 2026', '10 lpa in hand salary', '15 lpa in hand salary', 'ctc to monthly salary'],
  alternates: { canonical: 'https://paycalcpro.online/in-hand-salary-calculator/' },
  openGraph: { title: 'In-Hand Salary Calculator India 2026', description: 'Free monthly take-home salary calculator. Enter CTC, get exact in-hand with full PF, HRA, tax breakdown.', url: 'https://paycalcpro.online/in-hand-salary-calculator/' },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How much in-hand salary will I get for 10 LPA CTC?', acceptedAnswer: { '@type': 'Answer', text: 'For ₹10 LPA CTC in FY 2026-27, your monthly in-hand salary is approximately ₹76,000–₹77,000 under the new tax regime. You pay zero income tax under the ₹12L Section 87A rebate.' } },
        { '@type': 'Question', name: 'How much in-hand salary for 15 LPA CTC?', acceptedAnswer: { '@type': 'Answer', text: 'For ₹15 LPA CTC, your monthly in-hand is approximately ₹93,000–₹95,000 under the new tax regime FY 2026-27, after PF (₹1,800/month), professional tax (₹200/month), and income tax (~₹5,400/month).' } },
        { '@type': 'Question', name: 'Is income tax zero for salary below 12 LPA in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Under Budget 2026, Section 87A rebate makes income up to Rs.12 lakh effectively zero-tax under the new regime. You pay Rs.0 income tax if your taxable income is Rs.12L or below.' } },
        { '@type': 'Question', name: 'What percentage of CTC is the actual in-hand salary?', acceptedAnswer: { '@type': 'Answer', text: 'In-hand salary is typically 75–85% of CTC for salaries below ₹12 LPA in 2025 (zero income tax). For higher salaries like ₹20L+, in-hand is usually 65–75% of CTC depending on tax regime.' } },
        { '@type': 'Question', name: 'How is basic salary calculated from CTC?', acceptedAnswer: { '@type': 'Answer', text: 'Basic salary is typically 40–50% of CTC. PF (12%), HRA (40–50% of basic), and gratuity (4.81% of basic) are all calculated from basic salary.' } },
      ],
    }),
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
