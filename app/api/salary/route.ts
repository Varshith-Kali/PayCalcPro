import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'


// Pre-computed salary data for FY 2025-26 (new tax regime, metro city)
// Basic = 50% of Fixed CTC | EPF = 12% of Basic capped ₹15K | Std deduction ₹75K | 87A rebate ≤ ₹12L
const SALARY_TABLE = [
  { ctcLPA: 3,  basic: 12500, hra: 6250,  grossMonthly: 23730, pfMonthly: 1500, taxAnnual: 0,       inHandMonthly: 22030, inHandAnnual: 264360  },
  { ctcLPA: 4,  basic: 16667, hra: 8333,  grossMonthly: 31640, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 29640, inHandAnnual: 355680  },
  { ctcLPA: 5,  basic: 20833, hra: 10417, grossMonthly: 39550, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 37550, inHandAnnual: 450600  },
  { ctcLPA: 6,  basic: 25000, hra: 12500, grossMonthly: 47460, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 45460, inHandAnnual: 545520  },
  { ctcLPA: 7,  basic: 29167, hra: 14583, grossMonthly: 55370, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 53370, inHandAnnual: 640440  },
  { ctcLPA: 8,  basic: 33333, hra: 16667, grossMonthly: 63280, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 61080, inHandAnnual: 732960  },
  { ctcLPA: 9,  basic: 37500, hra: 18750, grossMonthly: 71190, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 69190, inHandAnnual: 830280  },
  { ctcLPA: 10, basic: 41667, hra: 20833, grossMonthly: 79100, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 77100, inHandAnnual: 925200  },
  { ctcLPA: 12, basic: 50000, hra: 25000, grossMonthly: 94920, pfMonthly: 1800, taxAnnual: 0,       inHandMonthly: 92720, inHandAnnual: 1112640 },
  { ctcLPA: 15, basic: 62500, hra: 31250, grossMonthly: 118650, pfMonthly: 1800, taxAnnual: 62400, inHandMonthly: 106450, inHandAnnual: 1277400 },
  { ctcLPA: 18, basic: 75000, hra: 37500, grossMonthly: 142380, pfMonthly: 1800, taxAnnual: 143520, inHandMonthly: 124380, inHandAnnual: 1492560 },
  { ctcLPA: 20, basic: 83333, hra: 41667, grossMonthly: 158200, pfMonthly: 1800, taxAnnual: 202800, inHandMonthly: 137200, inHandAnnual: 1646400 },
  { ctcLPA: 25, basic: 104167, hra: 52083, grossMonthly: 197750, pfMonthly: 1800, taxAnnual: 374400, inHandMonthly: 163550, inHandAnnual: 1962600 },
  { ctcLPA: 30, basic: 125000, hra: 62500, grossMonthly: 237300, pfMonthly: 1800, taxAnnual: 586800, inHandMonthly: 189500, inHandAnnual: 2274000 },
  { ctcLPA: 40, basic: 166667, hra: 83333, grossMonthly: 316400, pfMonthly: 1800, taxAnnual: 1069200, inHandMonthly: 245200, inHandAnnual: 2942400 },
  { ctcLPA: 50, basic: 208333, hra: 104167, grossMonthly: 395500, pfMonthly: 1800, taxAnnual: 1594800, inHandMonthly: 298650, inHandAnnual: 3583800 },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lpa = parseFloat(searchParams.get('lpa') || '0')

  if (lpa > 0) {
    // Find closest match
    const exact = SALARY_TABLE.find(r => r.ctcLPA === lpa)
    if (exact) {
      return NextResponse.json({
        success: true,
        source: 'paycalcpro.online',
        fy: '2025-26',
        regime: 'new',
        city: 'metro',
        data: exact,
        disclaimer: 'Estimates only. Assumes 50% basic, standard deductions, new tax regime, metro city.',
        calculator: 'https://paycalcpro.online/ctc-to-inhand',
      }, {
        headers: {
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*',
        }
      })
    }
    return NextResponse.json({ success: false, error: `No data for ${lpa} LPA. Supported: ${SALARY_TABLE.map(r => r.ctcLPA).join(', ')}` }, { status: 404 })
  }

  // Return full table
  return NextResponse.json({
    success: true,
    source: 'paycalcpro.online',
    fy: '2025-26',
    regime: 'new_regime',
    city: 'metro',
    budget_2025_key_changes: {
      zero_tax_limit: '₹12,00,000 (87A rebate)',
      standard_deduction: '₹75,000',
      epf_interest_rate: '8.25% p.a.',
      new_slabs: ['0-4L: 0%', '4-8L: 5%', '8-12L: 10%', '12-16L: 15%', '16-20L: 20%', '20-24L: 25%', '>24L: 30%'],
    },
    salary_structure: {
      basic: '50% of fixed CTC',
      hra_metro: '50% of basic',
      hra_non_metro: '40% of basic',
      employee_pf: '12% of basic (capped at ₹15,000 basic)',
      employer_pf_to_epf: '3.67% of basic',
      employer_contribution_to_eps: '8.33% of basic',
      gratuity_provision: '4.81% of basic annually',
    },
    data: SALARY_TABLE,
    calculator_url: 'https://paycalcpro.online/ctc-to-inhand',
    disclaimer: 'Approximate figures. Use the calculator for exact breakdown with variable pay.',
  }, {
    headers: {
      'Cache-Control': 'public, max-age=86400',
      'Access-Control-Allow-Origin': '*',
      'X-Data-Source': 'PayCalc Pro — paycalcpro.online',
    }
  })
}
