// ─── FY 2026-27 Salary Calculator Engine (Budget 2026 � slabs unchanged) ───────────────────────
// New Tax Regime (Default): Rebate u/s 87A → Zero tax up to ₹12L
// New slabs: 0-4L=0%, 4-8L=5%, 8-12L=10%, 12-16L=15%, 16-20L=20%, 20-24L=25%, >24L=30%
// Standard Deduction under New Regime: ₹75,000
// EPF Interest Rate: 8.25% p.a. (EPFO declared rate)
// Cess: 4% on total tax

export interface SalaryComponent {
  label: string;
  monthly: number;
  annual: number;
  type: 'earning' | 'deduction';
  color?: string;
}

export interface SalaryBreakdown {
  ctc: number;
  gross: number;
  basic: number;
  hra: number;
  specialAllowance: number;
  pf: number;
  professionalTax: number;
  incomeTax: number;
  inHandMonthly: number;
  inHandAnnual: number;
  components: SalaryComponent[];
}

/**
 * Calculate salary breakdown as per FY 2026-27 norms (Budget 2026: no slab changes)
 * Standard structure: Basic = 50% of Fixed CTC (industry standard, most IT/corporate)
 * Employer PF capped at ₹21,600/yr (12% of ₹15,000 EPFO ceiling)
 * Gratuity provision = (Basic × 15) / 26 = ~4.81% of basic annually
 * Variable pay is taxed at marginal rate but excluded from PF base
 */
export function calculateSalary(
  ctcAnnual: number,
  cityTier: 'metro' | 'non-metro' = 'metro',
  variablePayAnnual = 0
): SalaryBreakdown {
  const fixedCTC = ctcAnnual - variablePayAnnual;

  // Standard Indian salary structure (TCS/Infosys/Wipro style)
  const basic = fixedCTC * 0.50;                                      // 50% of fixed CTC
  const hra   = cityTier === 'metro' ? basic * 0.50 : basic * 0.40;  // 50%/40% of basic

  // EPFO cap: 12% of ₹15,000 = ₹1,800/month = ₹21,600/year
  const pfEmployer       = Math.min(basic * 0.12, 21600);
  const gratuityProvision = (basic * 15) / 26;                        // ~4.81% annually

  const specialAllowanceAnnual = Math.max(
    0,
    fixedCTC - basic - hra - pfEmployer - gratuityProvision
  );

  // Gross = Fixed gross (CTC minus employer-side costs) + variable pay
  const fixedGross  = fixedCTC - pfEmployer - gratuityProvision;
  const grossAnnual = fixedGross + variablePayAnnual;

  // Employee deductions — PF only on fixed basic, NOT on variable pay
  const pfEmployee     = Math.min(basic * 0.12, 21600);
  const professionalTax = 2400; // ₹200/month (national max)

  // Taxable income = Gross − Employee PF − Standard Deduction ₹75,000
  const standardDeduction = 75000;
  const taxableIncome = Math.max(0, grossAnnual - pfEmployee - standardDeduction);
  const incomeTax     = estimateIncomeTax(taxableIncome, 'new');

  const inHandAnnual  = grossAnnual - pfEmployee - professionalTax - incomeTax;
  const inHandMonthly = Math.round(inHandAnnual / 12);

  const components: SalaryComponent[] = [
    { label: 'Basic Salary',          monthly: Math.round(basic / 12),                   annual: Math.round(basic),                   type: 'earning',   color: '#0ea5e9' },
    { label: 'HRA',                   monthly: Math.round(hra / 12),                     annual: Math.round(hra),                     type: 'earning',   color: '#38bdf8' },
    { label: 'Special Allowance',     monthly: Math.round(specialAllowanceAnnual / 12),  annual: Math.round(specialAllowanceAnnual),  type: 'earning',   color: '#7dd3fc' },
    ...(variablePayAnnual > 0 ? [{ label: 'Variable Pay / Bonus', monthly: Math.round(variablePayAnnual / 12), annual: Math.round(variablePayAnnual), type: 'earning' as const, color: '#a78bfa' }] : []),
    { label: 'PF (Employee 12%)',     monthly: Math.round(pfEmployee / 12),              annual: Math.round(pfEmployee),              type: 'deduction', color: '#f97316' },
    { label: 'Professional Tax',      monthly: Math.round(professionalTax / 12),         annual: professionalTax,                     type: 'deduction', color: '#fb923c' },
    { label: 'Income Tax (Est.)',     monthly: Math.round(incomeTax / 12),               annual: Math.round(incomeTax),               type: 'deduction', color: '#ef4444' },
  ];

  return {
    ctc: ctcAnnual,
    gross: Math.round(grossAnnual),
    basic: Math.round(basic),
    hra: Math.round(hra),
    specialAllowance: Math.round(specialAllowanceAnnual),
    pf: Math.round(pfEmployee),
    professionalTax,
    incomeTax: Math.round(incomeTax),
    inHandMonthly,
    inHandAnnual: Math.round(inHandAnnual),
    components,
  };
}

/**
 * Income Tax Estimator — FY 2026-27 (AY 2027-28)
 *
 * NEW REGIME (Budget 2026 � identical slabs):
 *   ₹0 – 4L      : 0%
 *   ₹4 – 8L      : 5%   → max ₹20,000
 *   ₹8 – 12L     : 10%  → max ₹40,000
 *   ₹12 – 16L    : 15%  → max ₹60,000
 *   ₹16 – 20L    : 20%  → max ₹80,000
 *   ₹20 – 24L    : 25%  → max ₹1,00,000
 *   Above ₹24L   : 30%
 *   Rebate u/s 87A: Full rebate if net taxable ≤ ₹12L → zero tax
 *   Standard Deduction: ₹75,000 (applied before calling this function)
 *
 * OLD REGIME:
 *   ₹0 – 2.5L    : 0%
 *   ₹2.5 – 5L    : 5%
 *   ₹5 – 10L     : 20%
 *   Above ₹10L   : 30%
 *   Rebate u/s 87A: Full rebate if net taxable ≤ ₹5L
 *
 * Surcharge: 10% (₹50L–₹1Cr), 15% (₹1–2Cr), 25% (₹2–5Cr), 25% new / 37% old (>₹5Cr)
 * Cess: 4% on (tax + surcharge)
 */
export function estimateIncomeTax(
  taxableIncome: number,
  regime: 'new' | 'old' = 'new'
): number {
  if (taxableIncome <= 0) return 0;
  let tax = 0;

  if (regime === 'new') {
    if (taxableIncome <= 400000) {
      tax = 0;
    } else if (taxableIncome <= 800000) {
      tax = (taxableIncome - 400000) * 0.05;
    } else if (taxableIncome <= 1200000) {
      tax = 20000 + (taxableIncome - 800000) * 0.10;
    } else if (taxableIncome <= 1600000) {
      tax = 60000 + (taxableIncome - 1200000) * 0.15;
    } else if (taxableIncome <= 2000000) {
      tax = 120000 + (taxableIncome - 1600000) * 0.20;
    } else if (taxableIncome <= 2400000) {
      tax = 200000 + (taxableIncome - 2000000) * 0.25;
    } else {
      tax = 300000 + (taxableIncome - 2400000) * 0.30;
    }
    // Section 87A rebate: zero tax if taxable income ≤ ₹12,00,000
    if (taxableIncome <= 1200000) tax = 0;
  } else {
    // Old Regime
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 12500 + (taxableIncome - 500000) * 0.20;
    } else {
      tax = 112500 + (taxableIncome - 1000000) * 0.30;
    }
    // Rebate u/s 87A: zero if taxable ≤ ₹5L
    if (taxableIncome <= 500000) tax = 0;
  }

  // Surcharge
  let surcharge = 0;
  if (taxableIncome > 5000000 && taxableIncome <= 10000000)  surcharge = tax * 0.10;
  else if (taxableIncome > 10000000 && taxableIncome <= 20000000) surcharge = tax * 0.15;
  else if (taxableIncome > 20000000 && taxableIncome <= 50000000) surcharge = tax * 0.25;
  else if (taxableIncome > 50000000) surcharge = tax * (regime === 'new' ? 0.25 : 0.37);

  // Cess 4%
  return Math.round((tax + surcharge) * 1.04);
}

/**
 * PF Calculator — EPF rate 8.25% (EPFO declared, FY 2026-27 (confirmed 8.25% � 3rd consecutive year))
 * Employee: 12% of basic (capped at 12% of ₹15,000 = ₹1,800/mo when basic > ₹15,000)
 * Employer EPF: 3.67% of capped basic (8.33% goes to EPS pension — not in corpus)
 * Corpus compounded annually at 8.25%
 */
export interface PFResult {
  employeeContribution: number;   // monthly ₹
  employerEPFContribution: number; // monthly ₹ (3.67% only — EPS excluded)
  totalMonthly: number;
  corpus1Year: number;
  corpus5Year: number;
  corpus10Year: number;
  corpus20Year: number;
  corpus30Year: number;
  interestRate: number;
}

export function calculatePF(basicMonthly: number): PFResult {
  const cappedBasic = Math.min(basicMonthly, 15000);
  const emp = Math.round(cappedBasic * 0.12);       // Employee: 12%
  const er  = Math.round(cappedBasic * 0.0367);     // Employer EPF: 3.67% (only EPF portion)
  const total = emp + er;
  const rate  = 0.0825;

  // Compound annually: corpus after n years
  const corpus = (yrs: number): number => {
    let c = 0;
    for (let y = 0; y < yrs; y++) c = (c + total * 12) * (1 + rate);
    return Math.round(c);
  };

  return {
    employeeContribution:    emp,
    employerEPFContribution: er,
    totalMonthly:            total,
    corpus1Year:  corpus(1),
    corpus5Year:  corpus(5),
    corpus10Year: corpus(10),
    corpus20Year: corpus(20),
    corpus30Year: corpus(30),
    interestRate: rate,
  };
}

/**
 * HRA Exemption — Section 10(13A) of Income Tax Act
 * Exemption = MINIMUM of:
 *   (a) Actual HRA received annually
 *   (b) 50% of annual basic (metro: Mumbai, Delhi, Kolkata, Chennai) / 40% non-metro
 *   (c) Actual annual rent paid − 10% of annual basic salary
 *
 * NOTE: Only applicable under OLD tax regime. New regime: HRA is fully taxable.
 */
export interface HRAResult {
  hraExemption: number;
  hraTaxable: number;
  taxSaved: number;
  exemption1: number;  // Actual HRA
  exemption2: number;  // % of basic
  exemption3: number;  // Rent − 10% basic
  limitingFactor: 1 | 2 | 3;
}

export function calculateHRA(
  basicMonthly: number,
  hraMonthly: number,
  rentMonthly: number,
  city: 'metro' | 'non-metro',
  taxSlab = 0.30
): HRAResult {
  const basicA = basicMonthly * 12;
  const hraA   = hraMonthly * 12;
  const rentA  = rentMonthly * 12;

  const e1 = hraA;                                                 // (a) Actual HRA
  const e2 = city === 'metro' ? basicA * 0.50 : basicA * 0.40;   // (b) % of basic
  const e3 = Math.max(0, rentA - basicA * 0.10);                  // (c) Rent − 10% basic

  const hraExemption = Math.min(e1, e2, e3);
  const hraTaxable   = Math.max(0, hraA - hraExemption);
  const taxSaved     = Math.round(hraExemption * taxSlab * 1.04); // incl. 4% cess

  const minVal = Math.min(e1, e2, e3);
  const limitingFactor = minVal === e1 ? 1 : minVal === e2 ? 2 : 3;

  return {
    hraExemption: Math.round(hraExemption),
    hraTaxable:   Math.round(hraTaxable),
    taxSaved,
    exemption1:   Math.round(e1),
    exemption2:   Math.round(e2),
    exemption3:   Math.round(e3),
    limitingFactor,
  };
}

/**
 * Gratuity — Payment of Gratuity Act, 1972
 * Formula: (Last drawn Basic+DA × 15 × Years of service) / 26
 * Tax-free limit: ₹20 lakh (private sector employees)
 *
 * ROUNDING RULE: If service in last year > 6 months → round UP to next full year
 * Example: 7 years 7 months = 8 years. 7 years 4 months = 7 years.
 */
export interface GratuityResult {
  gratuity: number;
  taxFreeLimit: number;
  taxableGratuity: number;
  perYear: number;
  isEligible: boolean;
  roundedYears: number;
}

export function calculateGratuity(
  lastBasicDaMonthly: number,  // Monthly Basic + DA
  yearsOfService: number        // Can be decimal, e.g. 7.5 = 7.5 years
): GratuityResult {
  const isEligible = yearsOfService >= 5;

  // Rounding rule per Payment of Gratuity Act:
  // Fraction > 6 months (0.5 year) rounds UP
  const fullYears     = Math.floor(yearsOfService);
  const fractionYears = yearsOfService - fullYears;
  const roundedYears  = fractionYears > 0.5 ? fullYears + 1 : fullYears;

  const gratuity = isEligible
    ? Math.round((lastBasicDaMonthly * 15 * roundedYears) / 26)
    : 0;

  const taxFreeLimit    = 2000000; // ₹20 lakh
  const taxableGratuity = Math.max(0, gratuity - taxFreeLimit);
  const perYear = roundedYears > 0 ? Math.round(gratuity / roundedYears) : 0;

  return { gratuity, taxFreeLimit, taxableGratuity, perYear, isEligible, roundedYears };
}

/**
 * Notice Period Buyout Calculator
 * Daily rate = Monthly Gross Salary / 26 working days
 * Buyout = Daily rate × Remaining notice days
 * Tax = Buyout × marginal slab rate × 1.04 (cess)
 *
 * Note: Some companies use monthly CTC / 30 — check appointment letter.
 */
export interface NoticeBuyoutResult {
  buyoutAmount: number;
  perDay: number;
  daysToPayFor: number;
  taxOnBuyout: number;
  netCost: number;
}

export function calculateNoticeBuyout(
  grossMonthly: number,    // Monthly gross salary (not CTC)
  noticePeriodDays: number,
  daysServed: number,
  taxSlab = 0.30
): NoticeBuyoutResult {
  const perDay       = Math.round(grossMonthly / 26); // 26 working days standard
  const daysToPayFor = Math.max(0, noticePeriodDays - daysServed);
  const buyoutAmount = perDay * daysToPayFor;
  const taxOnBuyout  = Math.round(buyoutAmount * taxSlab * 1.04);
  const netCost      = buyoutAmount + taxOnBuyout;

  return {
    buyoutAmount: Math.round(buyoutAmount),
    perDay,
    daysToPayFor,
    taxOnBuyout,
    netCost: Math.round(netCost),
  };
}

// ─── Formatting Utilities ────────────────────────────────────────────────────

export function formatINR(amount: number): string {
  if (!isFinite(amount) || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

export function formatINRCompact(amount: number): string {
  if (!isFinite(amount) || isNaN(amount)) return '₹0';
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000)   return `₹${(amount / 100000).toFixed(2)} L`;
  if (amount >= 1000)     return `₹${(amount / 1000).toFixed(1)}K`;
  return `₹${Math.round(amount)}`;
}

export function formatLPA(amount: number): string {
  return `${(amount / 100000).toFixed(2)} LPA`;
}
