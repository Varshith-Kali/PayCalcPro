import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CTC to In-Hand Salary Calculator – Instant Monthly Take-Home FY 2026-27',
  description: 'Convert CTC to monthly in-hand salary instantly. See exact PF, HRA, tax deductions. Free Indian salary calculator for FY 2026-27 new tax regime with variable pay support.',
  openGraph: {
    title: 'CTC to In-Hand Salary Calculator India FY 2026-27',
    description: 'Free CTC to take-home salary converter. See PF, HRA, tax breakdown. Updated for Budget 2026.',
    url: 'https://paycalcpro.online/ctc-to-inhand/',
  },
  alternates: { canonical: 'https://paycalcpro.online/ctc-to-inhand/' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Calculate In-Hand Salary from CTC in India (FY 2026-27)',
  description: 'Step-by-step method to convert your annual CTC to monthly in-hand take-home salary using the standard Indian salary structure.',
  totalTime: 'PT2M',
  tool: [{ '@type': 'HowToTool', name: 'PayCalc Pro CTC Calculator', url: 'https://paycalcpro.online/ctc-to-inhand/' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Find Fixed CTC', text: 'Separate Fixed CTC from Variable Pay. Fixed CTC = Annual CTC − Variable/Bonus component.' },
    { '@type': 'HowToStep', position: 2, name: 'Calculate Basic Salary', text: 'Basic = 50% of Fixed CTC (industry standard). E.g., for ₹12L CTC: Basic = ₹6L/year = ₹50,000/month.' },
    { '@type': 'HowToStep', position: 3, name: 'Calculate HRA', text: 'HRA = 50% of Basic (metro) or 40% (non-metro). E.g., metro ₹50K basic → HRA = ₹25,000/month.' },
    { '@type': 'HowToStep', position: 4, name: 'Calculate Employer PF & Gratuity', text: 'Employer PF = 12% of Basic (capped at ₹1,800/month). Gratuity provision = 4.81% of Basic. These reduce your Gross from CTC.' },
    { '@type': 'HowToStep', position: 5, name: 'Get Gross Salary', text: 'Gross = CTC − Employer PF − Gratuity. Special Allowance fills the remainder. This is what you earn before deductions.' },
    { '@type': 'HowToStep', position: 6, name: 'Subtract Employee Deductions', text: 'Employee PF = 12% of Basic (capped ₹1,800/month). Professional Tax = ₹200/month. Income Tax = per slab (new regime, with ₹75K std deduction).' },
    { '@type': 'HowToStep', position: 7, name: 'Calculate In-Hand', text: 'In-Hand = Gross − Employee PF − Professional Tax − Income Tax. For ₹12L CTC (new regime, metro): ~₹88,500–93,000/month.' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://paycalcpro.online' },
    { '@type': 'ListItem', position: 2, name: 'CTC to In-Hand Calculator', item: 'https://paycalcpro.online/ctc-to-inhand/' },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
