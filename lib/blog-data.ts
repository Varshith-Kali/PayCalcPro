export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-calculate-inhand-salary-from-ctc',
    title: 'How to Calculate In-Hand Salary from CTC in India (FY 2026-27)',
    description: 'Learn the exact step-by-step formula to convert your CTC to monthly take-home salary. Includes PF, HRA, professional tax, income tax deductions with worked examples for FY 2026-27.',
    category: 'Salary Guide',
    readTime: '8 min read',
    publishedAt: '2026-05-15',
    content: `
## What is CTC vs In-Hand Salary?

Your **Cost to Company (CTC)** is the total annual expenditure an employer bears for your employment. It is NOT your salary — it includes components you never directly receive in your bank account. Your **in-hand salary** (also called take-home or net salary) is the amount credited to your bank account every month after all deductions.

The gap between CTC and in-hand salary surprises most Indian professionals, especially freshers. For a ₹12 LPA CTC, your actual monthly in-hand could be anywhere from ₹75,000 to ₹85,000 depending on your city, tax regime choice, and employer policies.

## The Complete CTC Structure in India

A typical Indian salary structure has these components:

| Component | Typical % of CTC | Notes |
|-----------|-----------------|-------|
| Basic Salary | 40–50% | Foundation of all calculations |
| HRA (House Rent Allowance) | 40–50% of Basic | Partially tax-exempt |
| Special Allowance | Variable | Fills remaining CTC |
| Employer PF Contribution | 12% of Basic | Part of CTC, not in-hand |
| Gratuity Provision | 4.81% of Basic | Part of CTC, paid after 5 years |
| Medical/Insurance | Variable | Non-cash benefit |

## Step-by-Step Calculation: ₹12 LPA Example

**Given: CTC = ₹12,00,000 per annum (FY 2026-27)**

### Step 1: Calculate Basic Salary
Basic = 50% of CTC = ₹6,00,000 p.a. = **₹50,000/month**

### Step 2: Calculate HRA
- Metro city (Delhi, Mumbai, Chennai, Kolkata): 50% of Basic = ₹25,000/month
- Non-metro: 40% of Basic = ₹20,000/month

### Step 3: Calculate Employer PF
Employer PF = 12% of Basic = 12% × ₹50,000 = **₹6,000/month = ₹72,000 p.a.**
*(Note: Capped at 12% of ₹15,000 = ₹1,800/month if employer applies cap)*

### Step 4: Gratuity Provision
Gratuity = (Basic × 15 ÷ 26) per year of service = approx. 4.81% of Basic = **₹2,404/month = ₹28,850 p.a.**

### Step 5: Calculate Gross Salary
Gross Salary = CTC − Employer PF − Gratuity
= 12,00,000 − 72,000 − 28,850 = **₹10,99,150 p.a. = ₹91,596/month**

The remaining amount after Basic and HRA becomes Special Allowance.

### Step 6: Employee Deductions

**Employee PF (from your salary):**
= 12% of Basic = ₹6,000/month = ₹72,000 p.a.

**Professional Tax:**
= ₹200/month in most states = ₹2,400 p.a.

**Income Tax (New Regime, FY 2026-27):**
Taxable Income = Gross − Standard Deduction (₹75,000)
= ₹10,99,150 − ₹75,000 = ₹10,24,150

Under new regime slabs: 0-4L=0%, 4-8L=5%, 8-12L=10%
Tax = 0 + 20,000 + 22,415 = ₹42,415
After Section 87A rebate (income ≤ ₹12L): **₹0 tax** (₹42,415 < ₹60,000 rebate limit)

### Step 7: Monthly In-Hand
In-Hand = Gross − Employee PF − Professional Tax − Income Tax
= ₹91,596 − ₹6,000 − ₹200 − ₹0 = **₹85,396/month**

## New Regime vs Old Regime — Which Saves More?

For ₹12 LPA, under the **new tax regime**, income tax is ₹0 (Section 87A rebate). This makes the new regime better for most people at this salary level unless you have significant 80C investments, home loan interest, or HRA claims exceeding ₹2-3 lakh annually.

| Comparison | New Regime | Old Regime |
|------------|-----------|-----------|
| Standard Deduction | ₹75,000 | ₹50,000 |
| 80C Benefits | Not available | Up to ₹1,50,000 |
| HRA Exemption | Not available | Up to actual exemption |
| Tax at ₹12L CTC | ₹0 | ~₹10,000–30,000 |
| Best for | Most salaried | High deduction claimants |

## Common Mistakes When Calculating In-Hand Salary

1. **Treating CTC as salary**: CTC includes employer PF and gratuity which don't come to you monthly
2. **Ignoring professional tax**: Varies by state (₹0–₹2,500/year)
3. **Wrong PF cap**: Many employers cap PF contribution at ₹1,800/month even if basic > ₹15,000
4. **Forgetting variable pay**: If your CTC includes a bonus, your monthly in-hand will be lower
5. **Not accounting for flexi benefits**: Food coupons, LTA are part of CTC but may have conditions

## Quick Reference: CTC to In-Hand (Metro, New Regime, FY 2026-27)

| CTC (Annual) | Approx Monthly In-Hand |
|-------------|----------------------|
| ₹5 LPA | ₹37,000–₹39,000 |
| ₹8 LPA | ₹59,000–₹62,000 |
| ₹10 LPA | ₹74,000–₹77,000 |
| ₹12 LPA | ₹85,000–₹88,000 |
| ₹15 LPA | ₹1,01,000–₹1,05,000 |
| ₹20 LPA | ₹1,27,000–₹1,33,000 |

## Use Our Free Calculator

Rather than doing these calculations manually, use our [CTC to In-Hand Salary Calculator](/ctc-to-inhand/) for instant, accurate results. Simply enter your CTC, select your city type and tax regime, and get a complete monthly breakdown including every deduction.
    `.trim()
  },
  {
    slug: 'ctc-vs-gross-salary-vs-net-salary',
    title: 'CTC vs Gross Salary vs Net Salary: Key Differences Explained (2026)',
    description: 'Confused by CTC, gross salary, and net salary? This guide explains the exact differences with real examples, showing why your in-hand salary is much lower than your CTC.',
    category: 'Salary Guide',
    readTime: '7 min read',
    publishedAt: '2026-05-10',
    content: `
## The Three Salary Terms Every Indian Professional Must Know

When you receive a job offer, you'll encounter three confusing terms: **CTC**, **Gross Salary**, and **Net Salary**. Understanding the difference is critical — it determines how much money you actually take home versus what your employer spends on you. Many professionals are shocked when their first paycheck is significantly lower than their "offered salary."

## What is CTC (Cost to Company)?

**CTC = Everything the company spends on you annually**

CTC is NOT your salary. It's the total cost your employer incurs for your employment, including:

- Your basic salary and allowances
- Employer's contribution to Provident Fund (PF)
- Gratuity provision (set aside each year)
- Health/medical insurance premiums paid by employer
- Performance bonuses and variable pay
- Meal coupons, transport allowances
- Company-provided assets (laptop, phone — if included in CTC)

**Example**: If your CTC is ₹10,00,000, your employer is spending ₹10 lakh on you annually across all these components — but you will never see all of it as cash in your account.

## What is Gross Salary?

**Gross Salary = CTC minus employer-borne components that don't come to you**

Gross salary = CTC − Employer PF − Gratuity Provision − Other non-cash benefits

This is the salary you "earn" before income tax, employee PF, and professional tax are deducted. Your payslip will typically show this as the top-line figure before deductions.

**For ₹10 LPA CTC:**
- Employer PF: ₹72,000 p.a. (12% of ₹50,000 basic × 12)
- Gratuity: ₹24,038 p.a.
- Gross Salary = ₹10,00,000 − ₹72,000 − ₹24,038 = **₹9,03,962 p.a. ≈ ₹75,330/month**

## What is Net Salary / In-Hand Salary?

**Net Salary = Gross Salary minus all employee deductions**

This is what gets credited to your bank account every month.

Deductions from Gross:
1. **Employee PF**: 12% of Basic (you contribute to your own PF account)
2. **Professional Tax**: ₹200/month (most states)
3. **Income Tax (TDS)**: Deducted monthly based on estimated annual tax

**Continuing the ₹10 LPA example (new regime, FY 2026-27):**
- Gross per month: ₹75,330
- Less: Employee PF: ₹6,000
- Less: Professional Tax: ₹200
- Less: TDS: ₹0 (income under ₹12L gets full 87A rebate)
- **Net/In-Hand = ₹69,130/month**

## Side-by-Side Comparison

| Term | Definition | ₹10L CTC Example |
|------|-----------|-----------------|
| CTC | Total employer cost | ₹10,00,000/year |
| Gross Salary | CTC minus employer PF + gratuity | ₹9,03,962/year |
| Net Salary | Gross minus all deductions | ₹8,29,560/year |
| Monthly In-Hand | Net salary ÷ 12 | ₹69,130/month |

## Why the Gap Between CTC and In-Hand is So Large

For a ₹10 LPA CTC, the ₹1.7 lakh gap with in-hand comes from:

| Component | Annual Amount | Goes To |
|-----------|-------------|---------|
| Employer PF | ₹72,000 | Your EPF account (accessible later) |
| Gratuity | ₹24,038 | Your gratuity fund (paid after 5 years) |
| Employee PF | ₹72,000 | Your EPF account |
| Professional Tax | ₹2,400 | State government |
| Income Tax | ₹0 (under 87A) | Central government |
| **Total deductions** | **~₹1,70,438** | |

The good news: Employer PF and gratuity are YOUR money — they accumulate and you receive them at retirement or when changing jobs (PF) and after 5 years of service (gratuity).

## Flexi Benefits and Variable Pay Complications

Many companies offer **Flexi Benefit Plans (FBP)** that allow you to restructure your salary components to maximize tax benefits. Common flexi components:
- **LTA (Leave Travel Allowance)**: Tax-free twice in a 4-year block
- **Meal Coupons/Food Allowance**: Up to ₹50/meal tax-free
- **Telephone/Internet Reimbursement**: Partially tax-free with bills

**Variable Pay Warning**: If your CTC includes a 10–20% variable/performance component, your fixed monthly in-hand will be lower than the CTC-based calculation. The variable part is paid quarterly or annually based on performance ratings.

## Practical Tips

1. **Always ask for Fixed CTC**: When negotiating, ask what percentage of CTC is fixed vs variable
2. **Check if PF is capped**: Some employers cap PF at ₹1,800/month (12% of ₹15,000), which increases your in-hand but reduces long-term savings
3. **Understand your flexi basket**: Optimize flexi components to reduce taxable income
4. **Calculate post-tax**: Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to see exactly what you'll take home before accepting an offer
    `.trim()
  },
  {
    slug: 'how-pf-affects-your-salary',
    title: 'How PF (Provident Fund) Affects Your Monthly Salary in India (2026)',
    description: 'Understand exactly how EPF deductions impact your monthly take-home salary, when PF is capped at ₹1,800, and whether opting out of PF is worth it for Indian employees.',
    category: 'PF & Savings',
    readTime: '7 min read',
    publishedAt: '2026-05-08',
    content: `
## Understanding EPF and Its Impact on Your Salary

The Employees' Provident Fund (EPF) is India's most widespread retirement savings scheme, governed by the EPFO (Employees' Provident Fund Organisation). While it's a powerful wealth-building tool, the way PF affects your monthly salary often confuses employees — especially when they see their actual take-home is much lower than expected.

## How PF Works: The Dual Contribution Structure

EPF involves two separate contributions — one from you and one from your employer:

**Employee Contribution:**
- 12% of your Basic Salary every month
- This comes out of your gross salary (reduces your in-hand pay)
- Goes directly into your EPF account

**Employer Contribution:**
- 12% of your Basic Salary (same amount)
- Included in your CTC (this is why CTC > gross salary)
- Split into two parts:
  - 3.67% → EPF account (your corpus)
  - 8.33% → EPS (Employee Pension Scheme)

## The ₹1,800/Month PF Cap: What It Means

Here's where it gets important: **EPFO rules cap the PF contribution on a basic salary of ₹15,000**.

This means:
- If your Basic is ₹30,000/month: Statutory PF = 12% × ₹15,000 = **₹1,800/month**
- If your Basic is ₹50,000/month: Statutory PF = still **₹1,800/month** (if employer applies cap)

**Two employer approaches:**
1. **PF on actual basic** (no cap): Better for your retirement corpus but lower in-hand salary
2. **PF capped at ₹1,800**: Higher monthly in-hand, less long-term EPF savings

Many IT companies and startups now cap PF at ₹1,800 to give employees higher monthly salaries. Traditional companies (PSUs, banks) often contribute full 12% on actual basic.

## Real Impact on Monthly In-Hand: Side-by-Side Comparison

**For ₹15 LPA CTC with Basic = ₹62,500/month:**

| PF Treatment | Employee PF | Employer PF | Monthly In-Hand |
|-------------|------------|------------|----------------|
| Full PF (12% of actual) | ₹7,500 | ₹7,500 (in CTC) | Lower by ₹5,700 |
| Capped PF (12% of ₹15K) | ₹1,800 | ₹1,800 (in CTC) | Higher in-hand |

With **full PF**: In-hand = ~₹96,000/month
With **capped PF**: In-hand = ~₹1,01,700/month (difference of ~₹5,700/month)

Over a year, that's ₹68,400 more in-hand with capped PF — but ₹68,400 less in your EPF corpus.

## EPF Interest Rate and Long-Term Impact

The EPFO sets the EPF interest rate annually. For FY 2026-27, it remains at **8.25%** — significantly higher than most bank fixed deposits and completely tax-free on maturity.

**Long-term EPF corpus comparison (₹7,500/month contribution vs ₹1,800/month):**

| Years | Full PF (₹7,500/mo) | Capped PF (₹1,800/mo) |
|-------|---------------------|----------------------|
| 10 years | ₹14.6 lakh | ₹3.5 lakh |
| 20 years | ₹52.8 lakh | ₹12.7 lakh |
| 30 years | ₹1.55 crore | ₹37.2 lakh |

*(Combined employee + employer contribution at 8.25% p.a.)*

## Voluntary PF (VPF): Boost Your Tax-Free Savings

You can voluntarily contribute more than 12% to your EPF account — called **Voluntary Provident Fund (VPF)**. Key benefits:
- Same 8.25% tax-free interest
- Deductible under Section 80C (up to ₹1.5L per year, only under old regime)
- No market risk, EPFO-guaranteed returns
- Accessible on retirement or in cases of medical emergency, home purchase, etc.

VPF contributions above ₹2.5 lakh per year attract TDS on interest — but for most salaried employees, this limit is not breached.

## Can You Opt Out of EPF?

If your monthly salary (basic + DA) exceeds ₹15,000, you CAN opt out of EPF when joining a new company (if you've never been an EPF member before). However, once you're an EPF member, you cannot stop contributing while employed.

**Should you opt out?**
- **Yes**: If you want higher monthly liquidity and are disciplined about investing in better instruments (mutual funds at 12-15% returns vs EPF's 8.25%)
- **No**: If you value guaranteed, tax-free, safe retirement savings — especially for risk-averse investors

## How to Check Your EPF Balance

1. **EPFO Member Portal**: [epfindia.gov.in](https://epfindia.gov.in) using your UAN
2. **UMANG App**: Government mobile app with EPF balance and statement
3. **SMS**: Send EPFOHO UAN LAN to 7738299899
4. **Missed Call**: Give a missed call to 011-22901406 from your registered mobile

Use our [PF Calculator](/pf-calculator/) to estimate your long-term EPF corpus at different contribution levels and time horizons.
    `.trim()
  },
  {
    slug: 'hra-exemption-rules-explained',
    title: 'HRA Exemption Rules Under Section 10(13A) — Complete Guide for 2026',
    description: 'Complete guide to HRA tax exemption under Section 10(13A) of the Income Tax Act. Learn the three conditions, metro vs non-metro rules, and how to maximize your HRA benefit in FY 2026-27.',
    category: 'Tax Savings',
    readTime: '8 min read',
    publishedAt: '2026-05-05',
    content: `
## What is HRA Exemption and Who Can Claim It?

House Rent Allowance (HRA) is one of the most valuable tax-saving components for salaried Indians who live in rented accommodation. Under **Section 10(13A)** of the Income Tax Act, the HRA you receive from your employer is partially or fully exempt from income tax — but only if you actually pay rent and choose the **old tax regime**.

HRA exemption is NOT available under the new tax regime introduced in FY 2020-21. This is one key reason many individuals with significant HRA benefits still prefer the old regime.

## The Three-Condition Rule for HRA Exemption

HRA exemption is calculated as the **minimum** of three amounts:

**Condition 1: Actual HRA received from employer**
Whatever your employer pays as HRA per year.

**Condition 2: 50% of Basic Salary (Metro) or 40% of Basic (Non-Metro)**
- Metro cities: Delhi, Mumbai, Chennai, Kolkata (as per Income Tax rules — not expanded since 1997!)
- All other cities including Bengaluru, Hyderabad, Pune, Ahmedabad = Non-Metro (40%)

**Condition 3: Actual Rent Paid minus 10% of Annual Basic Salary**
= Total annual rent − (10% × Annual Basic Salary)

The exempt amount = **Minimum of all three conditions**

## Worked Example: IT Professional in Bengaluru

**Given:**
- Basic Salary: ₹60,000/month = ₹7,20,000/year
- HRA Received: ₹30,000/month = ₹3,60,000/year
- Rent Paid: ₹25,000/month = ₹3,00,000/year
- City: Bengaluru (Non-Metro — 40% rule applies)

**Calculation:**
- Condition 1: ₹3,60,000 (actual HRA received)
- Condition 2: 40% × ₹7,20,000 = ₹2,88,000
- Condition 3: ₹3,00,000 − 10% of ₹7,20,000 = ₹3,00,000 − ₹72,000 = ₹2,28,000

**Minimum = ₹2,28,000 → This is the tax-exempt HRA**

The remaining ₹3,60,000 − ₹2,28,000 = ₹1,32,000 is taxable as salary.

**Tax saved** (at 20% slab): ₹2,28,000 × 20% = **₹45,600/year**

## Why Bengaluru is Not a Metro for HRA Purposes

This surprises many professionals. Under the Income Tax Act, only **Mumbai, Delhi (NCR), Chennai, and Kolkata** qualify as metro cities for the 50% HRA calculation. Bengaluru, Hyderabad, Pune, and other major cities are treated as non-metro despite their cost of living often exceeding the official metros.

This classification hasn't been updated since 1997, despite multiple representations to the Finance Ministry. For residents of Bengaluru or Hyderabad paying ₹30,000–₹50,000+ in rent, this costs several thousand rupees annually in additional tax.

## Claiming HRA: Documents Required

1. **Rent Receipts**: Monthly receipts from your landlord (name, address, amount, signature)
2. **Rent Agreement**: Stamped rental agreement showing property address and rent amount
3. **Landlord's PAN**: Mandatory if annual rent exceeds ₹1,00,000 (₹8,333/month)
4. **Form 12BB**: Declaration submitted to your employer at the beginning of the financial year

If your annual rent exceeds ₹6,00,000 (₹50,000/month), you must deduct TDS at 5% from rent payments under Section 194-IB and deposit it with the government using Form 26QC.

## Paying Rent to Parents: Is It Allowed?

Yes — paying rent to parents to claim HRA exemption is legally valid if:
- Your parents own the property where you reside
- Rent payment is genuine (with receipts, bank transfers preferred)
- Your parent declares the rental income in their ITR
- If rent > ₹1 lakh/year, you must take their PAN

This is a common and legal tax planning strategy, especially useful when parents are in a lower tax bracket.

## HRA Exemption Under the New vs Old Tax Regime

| Aspect | New Tax Regime | Old Tax Regime |
|--------|---------------|----------------|
| HRA Exemption | Not available | Available (Section 10(13A)) |
| Standard Deduction | ₹75,000 | ₹50,000 |
| 80C Deductions | Not available | Up to ₹1,50,000 |
| Useful when HRA saving > | — | ₹25,000+ per year benefit |

**Rule of thumb**: Choose old regime if your HRA exemption + other deductions (80C, home loan, etc.) exceed ₹2,00,000 per year. Otherwise, the new regime's lower tax slabs usually win.

Use our [HRA Exemption Calculator](/hra-calculator/) to calculate your exact tax savings under both regimes and determine the optimal choice for your situation.
    `.trim()
  },
  {
    slug: 'salary-structure-explained-freshers',
    title: 'Indian Salary Structure Explained for Freshers: CTC, Payslip, PF & More (2026)',
    description: 'First job? This complete guide explains every component of your Indian salary — Basic, HRA, PF, Professional Tax, TDS — so you know exactly what to expect on your first payslip.',
    category: 'Freshers Guide',
    readTime: '9 min read',
    publishedAt: '2026-04-20',
    content: `
## Welcome to Your First Job — Understanding Your Salary

Getting your first job offer is exciting, but the salary breakdown can be bewildering. You see a number labeled "CTC" that sounds great, but when your first paycheck arrives, you wonder where all the money went. This guide explains every single component of an Indian salary so you're never surprised.

## Decoding Your Offer Letter

A typical fresher offer letter for ₹5 LPA might break down like this:

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary | ₹2,00,000 | ₹16,667 |
| HRA | ₹1,00,000 | ₹8,333 |
| Special Allowance | ₹85,916 | ₹7,160 |
| **Gross Salary** | **₹3,85,916** | **₹32,160** |
| Employer PF | ₹24,000 | ₹2,000 |
| Gratuity | ₹9,615 | ₹801 |
| Medical Insurance | ₹10,000 | ₹833 |
| **CTC Total** | **₹5,00,000** | ₹41,667 |

But your actual monthly in-hand will be around **₹28,000–₹29,500** after deductions. Here's why.

## Component-by-Component Explanation

### 1. Basic Salary
The foundation of your salary. All other components (HRA, PF, gratuity) are calculated from it. Typically 40–50% of CTC. The higher your basic, the more PF is deducted (both yours and your employer's) and the more gratuity you accumulate.

### 2. House Rent Allowance (HRA)
A component to help you pay rent. Typically 40–50% of Basic. If you pay rent, part of this is tax-exempt under Section 10(13A) — but only if you choose the old tax regime. For freshers under ₹7 LPA (zero income tax), HRA exemption is irrelevant — you pay no tax anyway.

### 3. Special Allowance / Flexible Allowance
This is the "remainder" — whatever's left after Basic, HRA, and other defined components are subtracted from Gross. Fully taxable. Many companies now have a "Flexi Basket" where you can choose components like Meal Coupons, LTA, etc. to reduce tax burden.

### 4. Employer PF Contribution
Your employer contributes 12% of your Basic to your EPF account. This is IN your CTC but does NOT come to you monthly — it goes directly to your EPFO account. For Basic = ₹16,667: Employer PF = ₹2,000/month.

### 5. Gratuity Provision
Employers set aside 4.81% of Basic every year as gratuity provision. You receive this lump sum only after completing 5 years of continuous service with the same employer. For Basic = ₹16,667: Monthly gratuity provision = ₹801.

### 6. Medical/Group Health Insurance
Most companies provide group health insurance (covering you + family). The premium paid by your employer is part of your CTC but has no cash value in your paycheck.

## What Gets Deducted from Your Salary Each Month

| Deduction | Amount | Goes Where |
|-----------|--------|-----------|
| Employee PF (12% of Basic) | ₹2,000 | Your EPF account |
| Professional Tax | ₹200 | State government |
| Income Tax (TDS) | ₹0 (for ₹5 LPA) | Central government |
| **Total Deductions** | **₹2,200** | |

**Monthly In-Hand = Gross − Deductions = ₹32,160 − ₹2,200 = ₹29,960**

## Income Tax for Freshers: Good News!

For FY 2026-27, if your taxable income is ₹12 lakh or below, you pay **ZERO income tax** under the new tax regime (Section 87A rebate of ₹60,000). This means freshers earning up to approximately ₹13–13.5 LPA CTC will have zero TDS deducted monthly.

For a ₹5 LPA fresher: Annual tax = ₹0. Full stop. No TDS deducted from your monthly paycheck.

## Your First Payslip: What to Check

1. **Verify PAN linkage**: Your TDS must be deducted against your correct PAN
2. **Check UAN**: Universal Account Number for your EPF — activate it immediately on [epfindia.gov.in](https://epfindia.gov.in)
3. **ESIC status**: If your gross salary is below ₹21,000/month, you're covered under ESIC (health insurance by government) — your employer cannot give separate group health insurance
4. **Professional Tax**: Check if your state has it and the correct amount is deducted
5. **Form 16**: Your employer must give you Form 16 by June 15 each year — needed for filing ITR

## CTC Components That Are NOT Cash

Many components sound attractive but aren't cash in hand:
- **Employee Stock Options (ESOPs)**: Potential future value, vested over 3–4 years
- **Retention Bonus**: Paid only if you stay for a fixed period
- **Relocation Allowance**: One-time, if applicable
- **Notice Period Buyout**: Only relevant if you leave before serving notice

## Negotiation Tips for Your First Offer

1. **Focus on Fixed CTC**: Variable pay is uncertain — negotiate the fixed component
2. **Ask about PF cap**: Capped PF (₹1,800/month) gives you more in-hand
3. **Check the notice period**: 30 vs 90 days matters when you switch jobs later
4. **Ask about appraisal cycle**: When is the first increment? (Many companies have annual cycles)

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to calculate exactly what your offer letter translates to in monthly take-home pay before you sign.
    `.trim()
  },
  {
    slug: 'take-home-salary-5-lpa',
    title: '5 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'What is the actual monthly in-hand salary for ₹5 LPA CTC in India for FY 2026-27? Detailed calculation with PF, HRA, tax breakdown for metro and non-metro cities.',
    category: 'Salary Examples',
    readTime: '6 min read',
    publishedAt: '2026-04-18',
    content: `
## ₹5 LPA In-Hand Salary: The Complete Picture

For a ₹5,00,000 per annum CTC in India (FY 2026-27), your monthly in-hand salary is typically between **₹35,500 and ₹38,500** depending on your city and employer's PF policy. This guide gives you the exact calculation with full transparency on every rupee.

## ₹5 LPA Salary Structure (Standard Breakdown)

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40% of CTC) | ₹2,00,000 | ₹16,667 |
| HRA (50% of Basic, metro) | ₹1,00,000 | ₹8,333 |
| Special Allowance | ₹85,916 | ₹7,160 |
| **Gross Salary** | **₹3,85,916** | **₹32,160** |
| Employer PF (12% of Basic) | ₹24,000 | ₹2,000 |
| Gratuity (4.81% of Basic) | ₹9,615 | ₹801 |
| **CTC Total** | **₹5,00,000** | ₹41,667 |

## Monthly Deductions from Your Gross

| Deduction | Monthly Amount |
|-----------|--------------|
| Employee PF (12% of Basic) | ₹2,000 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ₹0 (zero tax under 87A rebate) |
| **Total Deductions** | **₹2,200** |

**Monthly In-Hand = ₹32,160 − ₹2,200 = ₹29,960**

## Income Tax at ₹5 LPA: Zero Tax

Under FY 2026-27 new tax regime:
- Taxable Income = Gross (₹3,85,916) − Standard Deduction (₹75,000) = ₹3,10,916
- Tax on ₹3,10,916: Zero (income below ₹4 lakh threshold)
- **Income Tax = ₹0**

Even under the old tax regime: After 80C deductions of ₹1.5L + standard deduction ₹50K, taxable income falls below ₹2 lakh. Tax = ₹0.

## Metro vs Non-Metro Comparison

| City Type | Basic | HRA | Gross/Month | In-Hand/Month |
|-----------|-------|-----|-------------|--------------|
| Metro (Delhi, Mumbai) | ₹16,667 | ₹8,333 | ₹32,160 | ₹29,960 |
| Non-Metro (Pune, Hyd) | ₹16,667 | ₹6,667 | ₹30,494 | ₹28,294 |

The difference is about ₹1,666/month in gross (the HRA component). For ₹5 LPA employees, since income tax is zero, this difference doesn't create any tax benefit — HRA exemption is only useful when you pay tax.

## PF Capped vs Full PF Impact

Many companies cap PF contribution at ₹1,800/month (12% of ₹15,000) regardless of actual basic:

| PF Policy | Employee PF | Monthly In-Hand |
|-----------|------------|----------------|
| Full PF (12% of actual basic) | ₹2,000 | ₹29,960 |
| Capped PF (12% of ₹15,000) | ₹1,800 | ₹30,160 |

Difference: ₹200/month = ₹2,400/year. Minimal for ₹5 LPA.

## Monthly Budget Guide for ₹5 LPA (₹30,000 In-Hand)

| Category | Suggested Budget | % of Income |
|----------|-----------------|-------------|
| Rent | ₹8,000–₹10,000 | 27–33% |
| Food & Groceries | ₹4,000–₹5,000 | 13–17% |
| Transport | ₹2,000–₹3,000 | 7–10% |
| Utilities & Phone | ₹1,500 | 5% |
| Savings/Investment | ₹3,000–₹5,000 | 10–17% |
| Entertainment | ₹2,000 | 7% |
| Emergency Fund | ₹2,000 | 7% |

At ₹5 LPA, living in metro cities like Mumbai or Bengaluru is challenging. Consider:
- Shared accommodation (PG/co-living) to cut rent to ₹6,000–₹8,000
- Company-provided transport or work-from-home options
- Starting SIP of ₹2,000/month in index funds for long-term wealth building

## Will Your Salary Increase?

For freshers at ₹5 LPA, annual increments of 8–15% are common. At 10% annual growth:
- After 1 year: ~₹5.5 LPA
- After 2 years: ~₹6 LPA
- After 3 years: ~₹6.6 LPA

Job switches typically offer 20–40% hikes. Most professionals reach ₹8–10 LPA within 3–4 years.

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to calculate your exact in-hand for ₹5 LPA with your specific employer's salary structure.
    `.trim()
  },
  {
    slug: 'take-home-salary-7-lpa',
    title: '7 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'What is the in-hand salary for ₹7 LPA CTC in India? Detailed monthly take-home calculation with PF deductions, income tax (zero!), HRA breakdown for FY 2026-27.',
    category: 'Salary Examples',
    readTime: '6 min read',
    publishedAt: '2026-04-15',
    content: `
## ₹7 LPA Monthly In-Hand Salary Calculation

For a ₹7,00,000 per annum CTC in India (FY 2026-27), your monthly in-hand salary is typically **₹50,500–₹54,000** depending on your employer's salary structure and PF policy. Here's the precise breakdown.

## Standard ₹7 LPA Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40% of CTC) | ₹2,80,000 | ₹23,333 |
| HRA (50% of Basic, metro) | ₹1,40,000 | ₹11,667 |
| Special Allowance | ₹1,28,084 | ₹10,674 |
| **Gross Salary** | **₹5,48,084** | **₹45,674** |
| Employer PF (12% of Basic) | ₹33,600 | ₹2,800 |
| Gratuity (4.81% of Basic) | ₹13,468 | ₹1,122 |
| **CTC Total** | **₹7,00,000** | — |

## Deductions and Monthly In-Hand

| Deduction | Monthly |
|-----------|---------|
| Employee PF (12% of Basic) | ₹2,800 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ₹0 |
| **Total Deductions** | **₹3,000** |

**Monthly In-Hand = ₹45,674 − ₹3,000 = ₹42,674**

With PF capped at ₹1,800: **₹43,674/month**

## Why ₹7 LPA Has Zero Income Tax

Under FY 2026-27 new tax regime:
- Gross = ₹5,48,084
- Standard Deduction = ₹75,000
- Taxable Income = ₹4,73,084

Tax slabs:
- 0–₹4,00,000: ₹0
- ₹4,00,000–₹4,73,084: 5% × ₹73,084 = ₹3,654

Section 87A Rebate: If taxable income ≤ ₹12,00,000, full rebate up to ₹60,000. Tax = **₹0**.

**Your TDS every month = ₹0.** Your entire gross (minus PF and PT) goes to you.

## ₹7 LPA With PF Capped (Higher In-Hand)

If your employer caps PF at ₹1,800/month (very common in IT companies):
- Gross increases because more goes into Special Allowance
- Employee PF = ₹1,800 instead of ₹2,800
- **Monthly In-Hand ≈ ₹43,874**

Check your offer letter — most companies clearly state whether PF is capped.

## Career Growth from ₹7 LPA

This salary level is common for:
- 2–3 years experienced software engineers
- Mid-level roles in IT services companies (Infosys, Wipro, etc.)
- Junior analysts in consulting/finance
- Experienced roles in manufacturing/government PSUs

Typical hike trajectory:
| Timeline | Expected CTC |
|----------|-------------|
| Current | ₹7 LPA |
| +1 year (internal) | ₹7.7–₹8 LPA |
| Switch after 2 years | ₹9–₹11 LPA |
| 5 years from now | ₹12–₹18 LPA |

Use our [In-Hand Salary Calculator](/in-hand-salary-calculator/) for a detailed breakdown of your ₹7 LPA take-home.
    `.trim()
  },
  {
    slug: 'take-home-salary-8-lpa',
    title: '8 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'Complete calculation of monthly in-hand salary for ₹8 LPA CTC in India. Includes PF, HRA, professional tax, income tax (zero tax under 87A) breakdown for FY 2026-27.',
    category: 'Salary Examples',
    readTime: '6 min read',
    publishedAt: '2026-04-12',
    content: `
## ₹8 LPA In-Hand Salary: Full Calculation

For ₹8,00,000 per annum CTC, your monthly take-home salary in India (FY 2026-27) is approximately **₹57,000–₹62,000**. The zero income tax benefit under Section 87A makes this a particularly good salary band — almost all of your gross converts to in-hand.

## ₹8 LPA Salary Breakdown

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40% of CTC) | ₹3,20,000 | ₹26,667 |
| HRA (50% of Basic, metro) | ₹1,60,000 | ₹13,333 |
| Special Allowance | ₹1,55,240 | ₹12,937 |
| **Gross Salary** | **₹6,35,240** | **₹52,937** |
| Employer PF | ₹38,400 | ₹3,200 |
| Gratuity | ₹15,392 | ₹1,283 |
| **CTC** | **₹8,00,000** | — |

## Monthly Take-Home Calculation

| Deduction | Monthly |
|-----------|---------|
| Employee PF (12% × ₹26,667) | ₹3,200 |
| Professional Tax | ₹200 |
| Income Tax | ₹0 (Section 87A rebate) |
| **Total Deductions** | **₹3,400** |

**Monthly In-Hand = ₹52,937 − ₹3,400 = ₹49,537**

*With PF capped at ₹1,800: ₹51,937 in-hand*

## Income Tax at ₹8 LPA — Why It's Zero

Taxable Income = ₹6,35,240 − ₹75,000 (std deduction) = ₹5,60,240

Tax calculation:
- 0–4L: ₹0
- 4–8L: 5% × ₹1,60,240 = ₹8,012

Section 87A rebate applies (income ≤ ₹12L): Tax = **₹0**. Monthly TDS = ₹0.

## ₹8 LPA in Metro vs Non-Metro Cities

| City | Monthly In-Hand | Living Comfort |
|------|----------------|----------------|
| Delhi/Mumbai/Kolkata | ₹49,537 | Tight but manageable |
| Bengaluru/Hyderabad | ₹49,537 | Moderate comfort |
| Pune/Ahmedabad | ₹49,537 | Good comfort |
| Tier-2 cities | ₹49,537 | Comfortable |

*(Note: in-hand is the same — city affects cost of living, not take-home)*

## Smart Money Moves at ₹8 LPA

1. **Emergency Fund**: Build 3 months' expenses (₹1.5 lakh) in a liquid fund
2. **SIP**: Start ₹5,000/month in an index fund or balanced advantage fund
3. **Term Insurance**: ₹1 crore term plan costs just ₹8,000–₹10,000/year at age 25
4. **NPS**: Contributing ₹500/month to NPS (National Pension Scheme) under old regime saves ₹1,500 in tax via 80CCD(1B)
5. **ELSS**: If on old regime, park ₹1.5L in ELSS funds for 80C benefit

At ₹8 LPA, you have enough surplus to start investing meaningfully while maintaining a comfortable lifestyle outside metro cities.
    `.trim()
  },
  {
    slug: 'take-home-salary-10-lpa',
    title: '10 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'What is the in-hand salary for ₹10 LPA CTC in India? Get the exact monthly take-home calculation with full PF, HRA, professional tax, and income tax (zero!) breakdown for FY 2026-27.',
    category: 'Salary Examples',
    readTime: '7 min read',
    publishedAt: '2026-04-10',
    content: `
## ₹10 LPA In-Hand Salary: Exact Calculation

For ₹10,00,000 per annum CTC in India (FY 2026-27), your monthly in-hand salary is typically **₹68,000–₹76,000** depending on your employer's PF policy and salary structure. This is one of the most searched salary levels in India — here's the complete, transparent calculation.

## Standard ₹10 LPA Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40% of CTC) | ₹4,00,000 | ₹33,333 |
| HRA (50% of Basic, metro) | ₹2,00,000 | ₹16,667 |
| Special Allowance | ₹2,04,040 | ₹17,003 |
| **Gross Salary** | **₹8,04,040** | **₹67,003** |
| Employer PF (12% of Basic) | ₹48,000 | ₹4,000 |
| Gratuity (4.81% of Basic) | ₹19,240 | ₹1,603 |
| Medical Insurance (est.) | ₹10,000 | ₹833 |
| **Total CTC** | **₹10,00,000** | — |

## Deductions and Monthly In-Hand

| Deduction | Monthly Amount |
|-----------|--------------|
| Employee PF (12% of ₹33,333) | ₹4,000 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | **₹0** |
| **Total Deductions** | **₹4,200** |

**Monthly In-Hand = ₹67,003 − ₹4,200 = ₹62,803**

*With PF capped at ₹1,800/month: ₹65,003 in-hand*

## Why Income Tax is ₹0 at ₹10 LPA (FY 2026-27)

This is the most important calculation for ₹10 LPA earners:

**Taxable Income = Gross − Standard Deduction**
= ₹8,04,040 − ₹75,000 = **₹7,29,040**

New regime tax calculation:
- 0–₹4,00,000: ₹0
- ₹4–8L: 5% × ₹3,29,040 = ₹16,452

**Section 87A Rebate**: Since taxable income (₹7,29,040) < ₹12,00,000, the full rebate of ₹60,000 applies.
Tax after rebate: ₹16,452 − ₹60,000 = **₹0** (can't go below zero)

**Monthly TDS = ₹0.** Your full gross minus PF and PT is your in-hand.

## In-Hand Comparison: PF Capped vs Full PF

| Scenario | Basic | Employee PF | Monthly In-Hand |
|----------|-------|------------|----------------|
| Full PF (12% of actual basic) | ₹33,333 | ₹4,000 | ₹62,803 |
| PF capped at ₹15K basic | ₹33,333 | ₹1,800 | ₹65,003 |
| Difference | — | ₹2,200 | ₹2,200/month |

With capped PF, you get ₹2,200 more per month but accumulate ₹2,200 less in your EPF account monthly.

## ₹10 LPA: Metro City Budget Planning

With ~₹63,000–₹65,000 monthly in-hand in a metro city:

| Expense | Budget Range |
|---------|-------------|
| Rent (1 BHK, metro suburb) | ₹15,000–₹20,000 |
| Groceries & Food | ₹6,000–₹8,000 |
| Transport | ₹3,000–₹4,000 |
| Utilities + Internet + Phone | ₹2,000 |
| EMI (if any) | ₹5,000–₹10,000 |
| Entertainment + Dining | ₹3,000–₹4,000 |
| Savings + Investment | ₹15,000–₹20,000 |

Target: Save/invest at least 25–30% of in-hand (₹15,000–₹20,000/month) for long-term wealth building.

## Investment Strategy at ₹10 LPA

1. **Equity Mutual Funds (SIP)**: ₹10,000/month in a diversified index fund
2. **EPF**: Already contributing ₹4,000/month — good foundation
3. **NPS (Tier 1)**: ₹2,000/month for additional tax benefit under 80CCD(1B) if on old regime
4. **Term Insurance**: ₹1 crore cover for ~₹8,000–₹12,000/year
5. **Emergency Fund**: Maintain 3–6 months' expenses (₹2–4 lakh) in liquid fund

At ₹10 LPA, you're at the inflection point where disciplined investing can create significant long-term wealth. Even ₹15,000/month in a mutual fund for 20 years at 12% CAGR = **₹1.5 crore**.

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) with your actual salary structure for an even more precise number.
    `.trim()
  },
  {
    slug: 'take-home-salary-12-lpa',
    title: '12 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'Monthly in-hand salary for ₹12 LPA CTC in India for FY 2026-27. Zero income tax with 87A rebate. Complete breakdown with PF, HRA, professional tax calculation.',
    category: 'Salary Examples',
    readTime: '7 min read',
    publishedAt: '2026-04-08',
    content: `
## ₹12 LPA In-Hand Salary: The Complete Breakdown

₹12 LPA is a milestone salary in India — it's at the boundary of the Section 87A zero-tax rebate. For FY 2026-27, your monthly in-hand for ₹12 LPA CTC is approximately **₹80,000–₹88,000**. Here's every detail.

## ₹12 LPA Standard Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (50% of CTC) | ₹6,00,000 | ₹50,000 |
| HRA (50% of Basic, metro) | ₹3,00,000 | ₹25,000 |
| Special Allowance | ₹1,49,150 | ₹12,429 |
| **Gross Salary** | **₹10,49,150** | **₹87,429** |
| Employer PF (12% of Basic) | ₹72,000 | ₹6,000 |
| Gratuity (4.81% of Basic) | ₹28,860 | ₹2,405 |
| **CTC** | **₹12,00,000** | — |

## Monthly Deductions and Take-Home

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹6,000 |
| Professional Tax | ₹200 |
| Income Tax | ₹0 |
| **Total** | **₹6,200** |

**Monthly In-Hand = ₹87,429 − ₹6,200 = ₹81,229**

*With PF capped at ₹1,800: ₹85,629/month*

## Income Tax at ₹12 LPA: Still Zero!

Taxable income = ₹10,49,150 − ₹75,000 = ₹9,74,150

New regime tax:
- 0–4L: ₹0
- 4–8L: 5% × 4L = ₹20,000
- 8–9.74L: 10% × ₹1,74,150 = ₹17,415
- **Total tax: ₹37,415**

Section 87A Rebate (taxable income < ₹12L): ₹60,000 rebate
Tax after rebate: ₹37,415 − ₹60,000 = **₹0** ✓

**Zero income tax.** Full rebate applies.

## Old Regime vs New Regime at ₹12 LPA

Under old regime with HRA exemption claim (metro, rent ₹25,000/month):
- HRA Exempt = min(₹3L, 50%×6L=₹3L, rent-10%basic = ₹3L − ₹60K = ₹2.4L) = ₹2,40,000
- 80C investments: ₹1,50,000
- Taxable = ₹10,49,150 − ₹50,000 (std ded) − ₹2,40,000 (HRA) − ₹1,50,000 (80C) = ₹6,09,150
- Tax: ₹12,915
- Old regime saves slightly more tax in this specific case

**Verdict**: For ₹12 LPA without home loan or significant deductions, new regime + zero tax is optimal.

## Financial Milestones to Hit at ₹12 LPA

Monthly in-hand ~₹81,000–₹86,000:
- **Term insurance**: ₹1.5 crore cover (~₹12,000/year at age 30)
- **Health insurance**: ₹5L family floater (~₹15,000/year)
- **SIP**: ₹25,000/month (ELSS + Index + Mid-cap)
- **Home purchase planning**: Start saving down payment (₹20 lakh in 3 years = ₹55,000/month)

Use our [Tax Estimator](/tax-estimator/) to compare new vs old regime with your specific deductions.
    `.trim()
  },
  {
    slug: 'take-home-salary-15-lpa',
    title: '15 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'Exact monthly in-hand salary for ₹15 LPA CTC in India. Includes income tax calculation (new vs old regime), PF, HRA breakdown for FY 2026-27 with budget tips.',
    category: 'Salary Examples',
    readTime: '7 min read',
    publishedAt: '2026-04-05',
    content: `
## ₹15 LPA In-Hand Salary: Complete Calculation

For ₹15,00,000 per annum CTC in India (FY 2026-27), your monthly in-hand salary is approximately **₹98,000–₹1,07,000** depending on PF structure and tax regime. At this level, income tax becomes a real factor.

## ₹15 LPA Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (50% of CTC) | ₹7,50,000 | ₹62,500 |
| HRA (50% of Basic, metro) | ₹3,75,000 | ₹31,250 |
| Special Allowance | ₹2,43,550 | ₹20,296 |
| **Gross Salary** | **₹13,68,550** | **₹1,14,046** |
| Employer PF (12% of Basic) | ₹90,000 | ₹7,500 |
| Gratuity | ₹36,075 | ₹3,006 |
| **CTC** | **₹15,00,000** | — |

## Monthly Deductions and In-Hand

| Deduction | Monthly |
|-----------|---------|
| Employee PF (12% of ₹62,500) | ₹7,500 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ~₹5,500–₹6,500 |
| **Total Deductions** | **~₹13,200–₹14,200** |

**Monthly In-Hand ≈ ₹1,14,046 − ₹13,200 = ~₹1,00,846**

*With PF capped at ₹1,800: ~₹1,06,346/month*

## Income Tax Calculation at ₹15 LPA

**New Tax Regime:**
Taxable Income = ₹13,68,550 − ₹75,000 = ₹12,93,550

Tax slabs:
- 0–4L: ₹0
- 4–8L: 5% × ₹4L = ₹20,000
- 8–12L: 10% × ₹4L = ₹40,000
- 12–12.93L: 15% × ₹93,550 = ₹14,033
- **Total: ₹74,033**

Surcharge: None (income < ₹50L)
Health & Education Cess: 4% × ₹74,033 = ₹2,961
**Total Annual Tax: ₹76,994 → ~₹6,416/month**

No 87A rebate here — taxable income exceeds ₹12L threshold.

## New Regime vs Old Regime at ₹15 LPA

| Regime | Annual Tax | Monthly TDS |
|--------|-----------|------------|
| New Regime | ₹76,994 | ₹6,416 |
| Old Regime (with 80C + HRA) | ~₹45,000–₹60,000 | ₹3,750–₹5,000 |

**Old regime can save ₹20,000–₹30,000/year** at ₹15 LPA if you:
1. Invest ₹1.5L in 80C instruments (ELSS, PPF, EPF counts)
2. Claim HRA exemption (if renting)
3. Add NPS under 80CCD(1B): ₹50,000 more deduction

## Budget and Investment Strategy at ₹15 LPA

Monthly in-hand ~₹1,00,000 (new regime) or ₹1,05,000 (old regime with deductions):

**Suggested Allocation:**
| Category | Monthly |
|----------|---------|
| Rent (1–2 BHK) | ₹20,000–₹25,000 |
| SIP (Mutual Funds) | ₹25,000–₹30,000 |
| Loan EMIs | Up to ₹25,000 |
| Daily Living | ₹15,000–₹18,000 |
| Emergency/Miscellaneous | ₹5,000–₹10,000 |

At ₹15 LPA with ₹25,000/month SIP for 15 years at 12% CAGR = **₹1.25 crore**.

Use our [Tax Estimator](/tax-estimator/) to find whether new or old regime saves you more.
    `.trim()
  },
  {
    slug: 'take-home-salary-20-lpa',
    title: '20 LPA In-Hand Salary: Exact Monthly Take-Home for FY 2026-27',
    description: 'Monthly in-hand salary for ₹20 LPA CTC in India for FY 2026-27. Complete income tax calculation, new vs old regime comparison, and investment planning guide.',
    category: 'Salary Examples',
    readTime: '7 min read',
    publishedAt: '2026-04-02',
    content: `
## ₹20 LPA In-Hand Salary: Full Breakdown

For ₹20,00,000 per annum CTC (FY 2026-27), your monthly in-hand salary is approximately **₹1,23,000–₹1,38,000** depending on PF policy and tax regime. At this level, tax planning becomes very important.

## ₹20 LPA Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40% of CTC) | ₹8,00,000 | ₹66,667 |
| HRA (50% of Basic, metro) | ₹4,00,000 | ₹33,333 |
| Special Allowance | ₹5,49,760 | ₹45,813 |
| **Gross Salary** | **₹17,49,760** | **₹1,45,813** |
| Employer PF (capped ₹1,800) | ₹21,600 | ₹1,800 |
| Gratuity | ₹38,480 | ₹3,207 |
| **CTC** | **₹20,00,000** | — |

*Most companies at this level cap PF at ₹1,800/month*

## Monthly Deductions and In-Hand

| Deduction | Monthly |
|-----------|---------|
| Employee PF (capped ₹1,800) | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ~₹15,500–₹17,000 |
| **Total Deductions** | **~₹17,500** |

**Monthly In-Hand ≈ ₹1,45,813 − ₹17,500 = ~₹1,28,313**

## Income Tax at ₹20 LPA

**New Tax Regime:**
Taxable Income = ₹17,49,760 − ₹75,000 = ₹16,74,760

Tax:
- 0–4L: ₹0
- 4–8L: ₹20,000
- 8–12L: ₹40,000
- 12–16L: 15% × ₹4L = ₹60,000
- 16–16.74L: 20% × ₹74,760 = ₹14,952
- Total: ₹1,34,952
- Cess (4%): ₹5,398
- **Annual Tax: ₹1,40,350 → ₹11,696/month**

**Old Regime (with deductions):**
Deductions: 80C (₹1.5L) + HRA exempt (~₹2.4L) + NPS 80CCD(₹50K) + Std Ded (₹50K) = ~₹4.9L
Taxable = ₹17,49,760 − ₹4,90,000 = ₹12,59,760
Tax ≈ ₹1,85,000 + cess = ~₹1,92,000/year = ₹16,000/month

**New regime saves ~₹50,000/year** at ₹20 LPA unless you have home loan interest or very high deductions.

## New vs Old Regime Decision at ₹20 LPA

Choose **Old Regime** if you have:
- Home loan interest > ₹2 lakh/year (Section 24b)
- Rental income and HRA exemption
- Large 80C investments + NPS

Choose **New Regime** if you:
- Don't have home loan
- Prefer simplicity
- Have variable salary with uncertain investments

## Wealth Building at ₹20 LPA

Monthly in-hand ~₹1,28,000:
| Investment | Monthly | 20-year Target |
|------------|---------|---------------|
| SIP (Equity) | ₹40,000 | ₹4 crore |
| NPS | ₹5,000 | ₹50 lakh |
| EPF | ₹1,800 | ₹15 lakh |
| PPF (old regime) | ₹12,500 | ₹50 lakh |

At ₹20 LPA, you should be on track to retire with significant wealth. Target: ₹5–8 crore corpus by age 55–60.
    `.trim()
  },
  {
    slug: 'take-home-salary-25-lpa',
    title: '25 LPA In-Hand Salary: Monthly Take-Home Calculation for FY 2026-27',
    description: 'Exact monthly in-hand salary for ₹25 LPA CTC in India. Income tax at 25 LPA, new vs old regime, PF and HRA breakdown for FY 2026-27.',
    category: 'Salary Examples',
    readTime: '7 min read',
    publishedAt: '2026-03-28',
    content: `
## ₹25 LPA In-Hand: What You Actually Take Home

At ₹25 LPA CTC, your monthly in-hand salary in India (FY 2026-27) is approximately **₹1,52,000–₹1,68,000** depending on tax regime and PF structure. Let's break it down completely.

## ₹25 LPA Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40%) | ₹10,00,000 | ₹83,333 |
| HRA (50% of Basic) | ₹5,00,000 | ₹41,667 |
| Special Allowance | ₹7,34,200 | ₹61,183 |
| **Gross Salary** | **₹22,34,200** | **₹1,86,183** |
| Employer PF (capped) | ₹21,600 | ₹1,800 |
| Gratuity | ₹48,100 | ₹4,008 |
| **CTC** | **₹25,00,000** | — |

## Monthly Take-Home Calculation

| Deduction | Monthly |
|-----------|---------|
| Employee PF (capped ₹1,800) | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ~₹22,500–₹24,500 |
| **Total** | **~₹24,500** |

**Monthly In-Hand ≈ ₹1,61,683**

## Income Tax at ₹25 LPA

**New Tax Regime:**
Taxable = ₹22,34,200 − ₹75,000 = ₹21,59,200

Tax:
- 0–4L: ₹0
- 4–8L: ₹20,000
- 8–12L: ₹40,000
- 12–16L: ₹60,000
- 16–20L: 20% × ₹4L = ₹80,000
- 20–21.59L: 25% × ₹1,59,200 = ₹39,800
- Subtotal: ₹2,39,800
- 4% cess: ₹9,592
- **Total: ₹2,49,392 → ₹20,783/month**

## Tax Saving Strategies at ₹25 LPA

Key deductions to consider:
1. **Home Loan Interest (Section 24b)**: Up to ₹2,00,000 deduction (old regime only)
2. **NPS (80CCD 1B)**: ₹50,000 additional deduction above 80C limit
3. **HRA Exemption**: If renting in metro, can exempt significant HRA
4. **Standard Deduction**: ₹75,000 (new) vs ₹50,000 (old)

With home loan + NPS + 80C under old regime:
Total deductions: ₹50K (std) + ₹1.5L (80C) + ₹50K (NPS) + ₹2L (home loan) = ₹4.5L
Tax savings vs new regime: ~₹45,000–₹60,000/year

At ₹25 LPA, the decision between regimes depends heavily on your home loan interest and other deductions. Use our [Tax Estimator](/tax-estimator/) to calculate precisely.
    `.trim()
  },
  {
    slug: 'take-home-salary-30-lpa',
    title: '30 LPA In-Hand Salary: Monthly Take-Home Calculation for FY 2026-27',
    description: 'Exact monthly in-hand for ₹30 LPA CTC in India. High income tax calculation, surcharge rules, new vs old regime comparison, and wealth planning guide for FY 2026-27.',
    category: 'Salary Examples',
    readTime: '7 min read',
    publishedAt: '2026-03-25',
    content: `
## ₹30 LPA In-Hand: Senior Professional Salary Breakdown

At ₹30 LPA CTC, your monthly take-home in India (FY 2026-27) is approximately **₹1,79,000–₹1,97,000**. At this income level, sophisticated tax planning can save you ₹1–2 lakh annually.

## ₹30 LPA Salary Structure

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (40%) | ₹12,00,000 | ₹1,00,000 |
| HRA (50% of Basic, metro) | ₹6,00,000 | ₹50,000 |
| Special Allowance | ₹9,21,440 | ₹76,787 |
| **Gross Salary** | **₹27,21,440** | **₹2,26,787** |
| Employer PF (capped) | ₹21,600 | ₹1,800 |
| Gratuity | ₹57,720 | ₹4,810 |
| **CTC** | **₹30,00,000** | — |

## Monthly Deductions and Take-Home

| Deduction | Monthly |
|-----------|---------|
| Employee PF (capped ₹1,800) | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ~₹30,000–₹34,000 |
| **Total Deductions** | **~₹32,000** |

**Monthly In-Hand ≈ ₹1,94,787**

## Income Tax at ₹30 LPA

**New Tax Regime:**
Taxable = ₹27,21,440 − ₹75,000 = ₹26,46,440

Tax:
- 0–4L: ₹0
- 4–8L: ₹20,000
- 8–12L: ₹40,000
- 12–16L: ₹60,000
- 16–20L: ₹80,000
- 20–24L: 25% × ₹4L = ₹1,00,000
- 24–26.46L: 30% × ₹2,46,440 = ₹73,932
- Subtotal: ₹3,73,932
- Surcharge: None (income < ₹50L)
- 4% Cess: ₹14,957
- **Total Annual Tax: ₹3,88,889 → ₹32,407/month**

## Surcharge Rules at High Incomes

Surcharge kicks in when your taxable income crosses ₹50 lakh:
| Income Range | Surcharge Rate |
|-------------|---------------|
| Below ₹50L | Nil |
| ₹50L–₹1 crore | 10% |
| ₹1–₹2 crore | 15% |
| ₹2–₹5 crore | 25% |
| Above ₹5 crore | 37% |

At ₹30 LPA, no surcharge applies. But if you have capital gains, freelance income, or rental income that pushes total income above ₹50L, surcharge applies.

## Old vs New Regime Decision at ₹30 LPA

Under old regime with aggressive deductions:
- 80C: ₹1,50,000
- Home Loan Interest (24b): ₹2,00,000
- NPS 80CCD(1B): ₹50,000
- Standard Deduction: ₹50,000
- HRA Exemption: ₹3,60,000 (if renting ₹45K/month in metro)
- **Total Deductions: ₹7,60,000**

Taxable under old regime: ₹27,21,440 − ₹7,60,000 = ₹19,61,440
Tax (old slabs): ~₹3,90,000 (similar or slightly higher)

**At ₹30 LPA, new regime is generally better** unless you have a large home loan interest deduction.

## Wealth Targets at ₹30 LPA

Monthly investable surplus: ₹60,000–₹80,000 after living expenses
- ₹60,000/month SIP for 15 years at 12% = **₹3 crore corpus**
- Target retirement corpus: ₹5–8 crore for comfortable lifestyle
- FIRE (Financial Independence) timeline: 12–18 years with disciplined investing
    `.trim()
  },
  {
    slug: 'notice-period-buyout-explained',
    title: 'Notice Period Buyout: How It Works and What It Costs in India (2026)',
    description: 'Complete guide to notice period buyout in India — how daily rate is calculated, tax treatment, when buyout is negotiable, and how to decide whether to pay or serve. Updated for 2026.',
    category: 'Career Tips',
    readTime: '7 min read',
    publishedAt: '2026-03-15',
    content: `
## What is Notice Period Buyout?

When you resign from a job, your employment contract typically requires you to serve a notice period — usually 30, 60, or 90 days — during which you continue working to ensure a smooth transition. If you need to leave before completing this notice period (often because your new employer needs you to join sooner), you can **"buy out" the notice period** by paying your current employer for the remaining days.

Notice period buyout is extremely common in India's IT and corporate sectors, where 90-day notice periods are standard but new employers often want candidates to join within 30–45 days.

## How Notice Period Buyout is Calculated

The standard calculation uses your **daily rate of pay**:

**Daily Rate = Gross Monthly Salary ÷ 30 (or 26, as per company policy)**

**Buyout Amount = Daily Rate × Number of Days Remaining**

### Example Calculation

If you earn ₹12,00,000 LPA and have 45 days remaining in a 90-day notice:

- Monthly Gross Salary = ₹1,00,000/month (approximately)
- Daily Rate (÷30) = ₹3,333/day
- Buyout for 45 days = ₹3,333 × 45 = **₹1,50,000**

Alternatively (÷26 working days): ₹3,846/day × 45 = **₹1,73,077**

*Always check your appointment letter — it specifies whether the divisor is 30 (calendar days) or 26 (working days). The difference can be significant.*

## Is Notice Period Buyout Taxable?

**For You (Employee):** The buyout amount you pay is NOT tax-deductible for you. It simply reduces your savings. There's no tax benefit to paying notice period buyout.

**For Your Current Employer:** Notice period buyout received from employees is a business income and taxed accordingly.

## When Can You Negotiate a Shorter Notice Period?

Many companies allow you to waive or reduce the notice period in these situations:
1. **No active projects**: If you're between projects or your role can be covered immediately
2. **Early in employment**: If you've been with the company less than 6 months
3. **Good relationship with manager**: A supportive manager may allow early release
4. **Company downturn**: During layoffs, companies often waive notice periods
5. **Buyout arrangement**: Pay and leave — the most common solution

## Tips to Negotiate Your Notice Period

1. **Resign professionally**: Submit a formal resignation letter and request an early release
2. **Offer to help transition**: Offer to document your work and brief your replacement
3. **Get new employer's joining date in writing**: Show your new employer's offer letter with joining date
4. **Discuss with HR, not just your manager**: HR departments often have more flexibility
5. **Use company's leave balance**: Earned/casual leaves can sometimes count toward notice

## Notice Period Buyout vs Working the Full Notice

| Factor | Pay Buyout | Serve Full Notice |
|--------|-----------|------------------|
| Cost | ₹50K–₹3L+ | ₹0 |
| Benefits | Join new job sooner, better impression | Save money, get more experience |
| Risk | Financial hit | May lose new offer if they can't wait |
| Common for | IT/High-demand roles | Stable roles, planned transitions |

## Real Cost Analysis: ₹15 LPA, 60 Days Remaining

- Monthly Gross: ₹1,25,000
- Daily Rate (÷30): ₹4,167
- Buyout Cost: ₹4,167 × 60 = **₹2,50,000**

If your new employer offers ₹20 LPA (₹1.67 lakh/month extra), the buyout pays back in:
₹2,50,000 ÷ ₹42,000 (extra monthly) = **~6 months**

So if you plan to stay at the new employer > 6 months, the buyout makes financial sense.

## Can Your New Employer Pay the Buyout?

Yes! Many companies (especially in high-demand IT roles) pay the buyout cost for candidates they urgently need. This is negotiable during your offer discussion. If you're in demand, ask your new employer if they'll cover the buyout — many will say yes.

Use our [Notice Period Buyout Calculator](/notice-period-buyout/) to calculate your exact buyout cost and evaluate whether paying it makes financial sense for your situation.
    `.trim()
  },
  {
    slug: 'gratuity-calculation-india',
    title: 'Gratuity Calculation in India: Formula, Eligibility, and Tax Rules (2026)',
    description: 'Complete guide to gratuity calculation under the Payment of Gratuity Act, 1972. Eligibility rules, exact formula, maximum limit, tax treatment, and how to check your gratuity amount.',
    category: 'PF & Savings',
    readTime: '7 min read',
    publishedAt: '2026-03-10',
    content: `
## What is Gratuity and Who Gets It?

Gratuity is a lump-sum payment made by your employer as a token of appreciation for your long-term service. It's governed by the **Payment of Gratuity Act, 1972** and is applicable to establishments with 10 or more employees.

**Eligibility**: You must complete **5 years of continuous service** with the same employer to be eligible for gratuity. This is the single most important rule — many employees lose significant gratuity by switching jobs before the 5-year mark.

## The Gratuity Formula

**For Employees Covered Under the Payment of Gratuity Act:**

    Gratuity = (Last Drawn Basic Salary + DA) × 15 ÷ 26 × Number of Years of Service
    
Where:
- **15**: 15 days of salary per year of service
- **26**: Average working days per month (26 days, excluding Sundays)
- **Years of Service**: Rounded to the nearest year (6+ months = 1 year)

### Worked Example

Employee details:
- Last Basic Salary: ₹80,000/month
- DA (Dearness Allowance): ₹0 (most private sector employees)
- Years of Service: 7 years and 8 months = **8 years** (8 months > 6, so rounded up)

**Gratuity = ₹80,000 × 15 ÷ 26 × 8 = ₹36,923 × 8 = ₹2,95,384**

## The 5-Year Rule: What Counts as Continuous Service?

The 5-year clock runs from your **date of joining** to your **date of resignation or retirement**. Key points:

- **Maternity Leave**: Does NOT break continuity
- **Approved Medical Leave**: Does NOT break continuity
- **Unauthorized Absence**: Can break continuity (consult HR)
- **Fixed-Term Contract**: Each contract period counts separately (unless renewed)
- **4 years + 240 days**: Some courts have ruled that 4 years and 240 days = 5 years of continuous service. This is under legal interpretation but several High Courts have supported it.

## Gratuity Maximum Limit

The maximum gratuity amount that is **tax-free** is:
- **Government Employees**: ₹20,00,000 (₹20 lakh)
- **Private Sector Employees (Act-covered)**: ₹20,00,000 (₹20 lakh, revised from ₹10L)
- **Private Sector (not covered by Act)**: The lesser of: half month's average salary per year, OR ₹20L

Gratuity amounts **above ₹20 lakh are taxable** as "Profits in lieu of salary."

## Tax Treatment of Gratuity

| Category | Tax Treatment |
|----------|--------------|
| Government employees | Fully exempt (no limit) |
| Act-covered private employees | Exempt up to ₹20 lakh |
| Non-Act covered employees | Exempt up to minimum of 3 conditions |

For most salaried professionals in India (private sector), you're covered under the Act if your employer has 10+ employees. Your gratuity up to ₹20 lakh is completely tax-free.

## Gratuity as Part of CTC — The Hidden Cost

Most companies include a **gratuity provision** in your CTC even though you can only claim it after 5 years. The calculation in CTC is:

Gratuity provision = 4.81% of Basic Salary per year

For Basic = ₹60,000/month:
Monthly gratuity provision = 4.81% × ₹60,000 = ₹2,886/month
Annual = ₹34,632

This ₹34,632 is part of your CTC but you'll only receive it after 5 years. If you leave before 5 years: **you lose this entire amount** — the company keeps it.

## How to Claim Gratuity

1. Apply in **Form I** to your employer within 30 days of eligibility
2. Employer must pay within **30 days** of gratuity becoming payable
3. If delayed, you're entitled to interest on delayed payment
4. For disputes, approach the **Controlling Authority** under the Gratuity Act (usually a Labour Commissioner)

## Gratuity Planning: Should You Stay for 5 Years?

For a professional earning ₹12 LPA with Basic = ₹50,000/month, staying the full 5 years earns:
Gratuity = ₹50,000 × 15/26 × 5 = **₹1,44,231**

If you leave at 4 years: ₹0 (unless 4 years + 240 days rule applies)
If you leave at 6 years: ₹50,000 × 15/26 × 6 = ₹1,73,077

The jump from ₹0 to ₹1.44 lakh at the 5-year mark is significant enough to factor into your career decisions.

Use our [Gratuity Calculator](/gratuity-calculator/) to calculate your exact gratuity entitlement based on your salary and years of service.
    `.trim()
  },
  {
    slug: 'salary-negotiation-tips-india',
    title: 'Salary Negotiation Tips for Indian Professionals: Get the CTC You Deserve (2026)',
    description: 'Proven salary negotiation strategies for Indian IT, banking, and corporate professionals. Learn when to negotiate, what to say, and how to evaluate an offer beyond just CTC.',
    category: 'Career Tips',
    readTime: '8 min read',
    publishedAt: '2026-03-05',
    content: `
## Why Salary Negotiation Matters More in India Than You Think

Most Indian professionals leave significant money on the table by accepting the first offer. Studies consistently show that those who negotiate earn 10–20% more over their careers. Over a 30-year career, even a ₹50,000 annual difference compounds into **₹30–50 lakh** in lifetime earnings — not counting the compounding effect on future hikes (which are usually percentage-based on your current salary).

The cultural discomfort with negotiating is real, but recruiters fully expect candidates to negotiate. Not negotiating actually signals a lack of confidence and market knowledge.

## Know Your Market Value Before You Negotiate

Research is your most powerful tool:

**Sources for Salary Data (India-specific):**
1. **LinkedIn Salary Insights**: Premium subscribers get salary ranges by role and city
2. **Glassdoor India**: Employee-reported salaries for specific companies
3. **AmbitionBox**: Very popular for Indian tech and corporate salaries
4. **Levels.fyi**: Best for tech/engineering roles with equity details
5. **Your network**: Talk to peers in similar roles at comparable companies

**What to benchmark:**
- Role-specific pay (your exact title) at competitors
- Salary range in your target city (Bengaluru IT salaries differ from Mumbai finance salaries)
- Equity + bonus as part of total comp at growth-stage companies

## When to Negotiate: Timing is Everything

1. **After you have a written offer**: Never negotiate before you have the offer in writing
2. **Before you sign**: Obvious, but many people wait until after signing to regret
3. **When you have competing offers**: Leverage is highest when you have alternatives
4. **Annual performance review**: This is your annual opportunity, don't skip it

**Don't negotiate if:**
- The company explicitly says "non-negotiable" and you want the role
- You have no market data or competing offer to back your ask
- You're changing fields where your experience has lower market value

## The Negotiation Conversation: Exact Scripts

**When asked "What are your salary expectations?"**
Don't name a number first. Instead:
*"I'm focusing on the right opportunity and would like to understand the full compensation structure before discussing a number. Could you share the budget for this role?"*

**When you have an offer and want to counter:**
*"Thank you for the offer — I'm genuinely excited about this role. Based on my research and the market rate for [X years of experience in Y domain], I was expecting something closer to ₹[X]. Is there flexibility to get to that range?"*

**When they say the offer is final:**
*"I understand. Could you help offset with a higher variable component, a signing bonus, or an earlier performance review? I'm committed to performing well and want to find a structure that works for both of us."*

## Evaluate the Full Package, Not Just CTC

CTC is just one dimension. Evaluate these before accepting:

| Factor | Why It Matters |
|--------|---------------|
| Fixed vs Variable split | Variable is uncertain — fixed is guaranteed |
| ESOPs/RSUs | Can be significant at funded startups/MNCs |
| Joining Bonus | Is it payable back if you leave early? |
| Notice Period | 90 days costs you (and your next employer) time |
| WFH Policy | Saves ₹5,000–₹15,000/month in commute + rent |
| Increment Cycle | Annual vs semi-annual; when's your first appraisal? |
| Growth trajectory | A ₹10L offer at a high-growth company > ₹12L at a stagnant company |
| Health Insurance | Corporate coverage > sum assured, family floater included? |

## Calculating the TRUE Value of an Offer

If Company A offers ₹15 LPA fixed with no ESOP vs Company B offering ₹13 LPA + ₹3L in RSUs vesting over 3 years and WFH saving ₹8,000/month:

- Company A total value: ₹15 LPA
- Company B: ₹13 LPA + ₹1L RSU/year + ₹96K WFH savings = **₹14.96 LPA equivalent**

They're nearly equal — but Company B might have better growth potential.

## Common Mistakes to Avoid

1. **Sharing your current CTC too early**: You're not obligated to disclose it
2. **Accepting the first number**: Even 5% more is worth asking for
3. **Forgetting to negotiate joining bonus**: Especially important if you're paying notice period buyout
4. **Not reading the offer letter carefully**: Understand the vesting schedule, lock-in periods, and clawback clauses on bonuses

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to evaluate any job offer — enter the offered CTC and see exactly what your monthly take-home will be so you can negotiate from a position of complete financial clarity.
    `.trim()
  },
  {
    slug: 'reduce-tax-legally-india',
    title: 'How to Legally Reduce Income Tax as a Salaried Employee in India (FY 2026-27)',
    description: 'Complete guide to legally reduce your income tax in India for FY 2026-27. Covers Section 80C, 80D, HRA, home loan, NPS, and new regime vs old regime optimization strategies.',
    category: 'Tax Savings',
    readTime: '9 min read',
    publishedAt: '2026-03-01',
    content: `
## Can Salaried Employees Really Reduce Their Tax Bill?

Yes — significantly. The Indian Income Tax Act has dozens of deductions specifically designed for salaried employees. However, most of these deductions are only available under the **old tax regime**. Under the new regime (which is now the default from FY 2024-25), most deductions are unavailable except the standard deduction.

The first decision: **Which regime should you choose?**

## New Tax Regime vs Old Tax Regime: The Decision Framework

**New Tax Regime (Default from FY 2024-25):**
- Lower tax slabs (but can't claim most deductions)
- Standard deduction: ₹75,000
- Zero tax up to ₹12L income (with 87A rebate)
- Simpler, less paperwork
- Better for: Income below ₹12L, those without home loans or large investments

**Old Tax Regime (Opt-in required):**
- Higher slabs but with multiple deductions
- Standard deduction: ₹50,000
- Can claim: 80C, 80D, HRA, Home Loan, NPS, etc.
- Better for: Those with home loans, high rent, or large 80C investments

## Tax Saving Options Under the Old Tax Regime

### Section 80C — Up to ₹1,50,000 Deduction

This is the most popular tax-saving section. Any investment in these instruments reduces your taxable income by up to ₹1.5L:

| Investment | Lock-in | Returns (approx) |
|------------|---------|-----------------|
| EPF (auto-included) | Till retirement | 8.25% tax-free |
| ELSS Mutual Funds | 3 years | 10–14% (market) |
| PPF (Public Provident Fund) | 15 years | 7.1% tax-free |
| NSC (National Savings Certificate) | 5 years | 7.7% |
| 5-year Bank FD (tax saver) | 5 years | 6.5–7% |
| Life Insurance Premium | Policy term | Varies |
| Sukanya Samriddhi Yojana | Till daughter turns 21 | 8.2% |

**Strategy**: If your EPF contribution already covers ₹1.5L (basic > ₹1,04,167/month at full 12%), you've fully exhausted 80C just from EPF.

### Section 80D — Health Insurance Premium

| Coverage | Maximum Deduction |
|----------|-----------------|
| Self + family under 60 | ₹25,000 |
| Parents under 60 | ₹25,000 |
| Parents 60+ (senior citizens) | ₹50,000 |
| Total maximum | ₹1,00,000 |

Health insurance premiums are essential anyway — this deduction is essentially free tax savings. A ₹5L family floater costs ~₹15,000–₹20,000/year and saves ₹3,000–₹6,000 in tax.

### HRA Exemption — Section 10(13A)

If you pay rent and your employer gives HRA, the exempt portion reduces taxable income. For details, see our complete [HRA Exemption Guide](/hra-exemption-rules-explained/).

For a Bengaluru professional with Basic ₹80K/month paying ₹30K rent:
- HRA Exempt ≈ ₹2.4 lakh/year
- Tax saved (at 20% slab): ₹48,000/year

### Home Loan Benefits

| Section | Benefit | Maximum |
|---------|---------|---------|
| 24(b) | Interest on home loan | ₹2,00,000 (self-occupied) |
| 80C | Principal repayment | Part of ₹1.5L limit |

Combined benefit: Up to ₹3,50,000 annual deduction for home loan holders. At 20% tax slab: ₹70,000/year tax saving.

### NPS — Additional ₹50,000 Under 80CCD(1B)

The National Pension System offers an **additional** ₹50,000 deduction over and above the ₹1.5L 80C limit. This is unique — available only for NPS contributions.

Tax saving at 30% slab: ₹50,000 × 30% × 1.04 (cess) = **₹15,600/year**

NPS returns: ~10–12% historically (equity allocation up to 75%), with restrictions on withdrawal (60% lump sum at 60, 40% compulsory annuity).

## Restructuring Your Salary to Save Tax

If your employer offers a **Flexi Benefit Plan**, you can restructure components:
1. **Meal Coupons/Food Allowance**: Up to ₹50/meal (₹1,800/month) is tax-exempt
2. **LTA (Leave Travel Allowance)**: Exempt once in 2 years for travel within India
3. **Telephone/Internet Reimbursement**: Partially tax-free with bills
4. **Driver Salary**: If employer provides car for official use, driver salary is an allowance

## Step-by-Step Tax Optimization for ₹15 LPA Employee (Old Regime)

Starting income: ₹13,68,550 (gross after employer PF/gratuity adjustment)

| Deduction | Amount |
|-----------|--------|
| Standard Deduction | ₹50,000 |
| 80C (ELSS + EPF) | ₹1,50,000 |
| 80D (Health Insurance) | ₹25,000 |
| HRA Exemption (metro renter) | ₹2,40,000 |
| 80CCD(1B) NPS | ₹50,000 |
| **Total Deductions** | **₹5,15,000** |

Taxable Income = ₹13,68,550 − ₹5,15,000 = **₹8,53,550**
Tax (old slabs) ≈ ₹73,215 + cess = **₹76,144** = ₹6,345/month

Under new regime without deductions: ₹76,994/year = ₹6,416/month

**In this case, both regimes give similar results** — use [Tax Estimator](/tax-estimator/) for your exact numbers.

## Key Deadlines for Tax Planning (FY 2026-27)

| Action | Deadline |
|--------|---------|
| Submit investment proof to employer | Jan-Feb 2027 |
| File ITR (salaried) | July 31, 2027 |
| Declare regime choice to employer | April 2026 (start of FY) |
| Make 80C investments | March 31, 2027 |
    `.trim()
  },
  {
    slug: 'tcs-salary-structure-2025',
    title: 'TCS Salary Structure 2026: Complete CTC Breakdown for All Roles',
    description: 'Detailed TCS salary structure for 2026 — freshers (TCS NQT), experienced engineers, and senior roles. Understand TCS Variable Pay, PF, HRA, and actual in-hand salary for different bands.',
    category: 'Salary Examples',
    readTime: '8 min read',
    publishedAt: '2026-02-20',
    content: `
## TCS Salary Structure: What You Actually Earn

Tata Consultancy Services (TCS) is India's largest IT employer with over 6 lakh employees. Understanding TCS's salary structure is crucial because TCS CTC can be misleading — the actual in-hand salary is significantly lower than the offered CTC due to the variable pay structure.

## TCS Fresher Salary (NQT/Campus 2026)

TCS hires freshers through three channels with different pay packages:

| Role | CTC | Fixed Monthly |
|------|-----|--------------|
| TCS Ninja (NQT Qualified) | ₹3.36 LPA | ~₹22,000/month |
| TCS Digital (NQT High Score) | ₹7 LPA | ~₹50,000/month |
| TCS Prime (IIT/NIT Elite) | ₹9–11 LPA | ~₹67,000–₹82,000/month |
| TCS Smart Hired | ₹3.36 LPA | ~₹22,000/month |

**The ₹3.36 LPA Breakdown (TCS Ninja):**
| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary | ₹1,30,000 | ₹10,833 |
| HRA (50% of Basic) | ₹65,000 | ₹5,417 |
| Special Allowance | ₹96,000 | ₹8,000 |
| Variable Pay (12%) | ₹40,320 | ₹3,360 |
| **Fixed Gross** | **₹2,91,000** | **₹24,250** |
| Employer PF | ₹15,600 | ₹1,300 |
| Gratuity | ₹6,253 | ₹521 |
| **TCS CTC** | ₹3,36,000 | — |

Fixed monthly in-hand (no variable): **₹22,000–₹22,500**

TCS pays variable pay quarterly — so 3 months you get base, every 3rd month you get extra ₹10,080 (if 100% variable achieved).

## TCS Salary Structure for Experienced Professionals

| Experience | Band | Typical CTC | Fixed Monthly In-Hand |
|-----------|------|------------|----------------------|
| 2–4 years (IT Analyst) | B1/B2 | ₹6–10 LPA | ₹43,000–₹72,000 |
| 5–8 years (Senior Analyst) | C | ₹12–18 LPA | ₹86,000–₹1,28,000 |
| 8–12 years (Lead) | D | ₹18–30 LPA | ₹1,28,000–₹2,10,000 |
| 12–15 years (Manager) | E | ₹30–50 LPA | ₹2,10,000–₹3,50,000 |

## TCS Variable Pay: The Most Confusing Part

TCS variable pay ranges from 10–25% of CTC depending on your role and band. This is paid quarterly and tied to:
1. **Your Performance Rating**: A (Exceeds), B (Meets), C (Partially Meets), D (Does Not Meet)
2. **Business Unit Performance**: Your BU must also meet its targets
3. **Company Performance**: TCS overall growth affects variable payouts

**Reality**: Most TCS employees receive 70–90% of variable pay, rarely 100%. New joinees often wait 6 months for their first variable payout.

**Always calculate in-hand based on fixed salary only** — treat variable as a bonus, not guaranteed income.

## TCS Annual Increment (Hike) Policy

TCS follows a September hike cycle with:
- Average hike: 8–15% annually
- Top performers (A rating): 15–20%
- Average performers (B rating): 8–12%
- Below average (C/D): 3–6% or no hike

Recent years: FY24 = ~12% average, FY25 = ~10–12%, FY26 = ~10–14%

## TCS PF Policy

TCS applies the PF cap at ₹1,800/month regardless of actual basic salary. So even if your basic is ₹80,000/month:
- Employee PF = ₹1,800/month (not ₹9,600)
- This means your monthly in-hand is higher vs uncapped PF
- But your EPF corpus grows slower

## Real In-Hand Salary Example: TCS ₹7 LPA (TCS Digital)

| Component | Monthly |
|-----------|---------|
| Basic | ₹23,333 |
| HRA | ₹11,667 |
| Special Allowance | ₹10,000 |
| Variable (monthly equiv.) | ₹4,900 |
| **Fixed Gross** | **₹45,000** |
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| TDS | ₹0 (under 87A rebate) |
| **Fixed In-Hand** | **₹43,000** |
| **With Full Variable** | **~₹47,900** |

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to calculate your specific TCS offer's take-home pay.
    `.trim()
  },
  {
    slug: 'infosys-salary-structure-2025',
    title: 'Infosys Salary Structure 2026: Complete CTC & In-Hand Breakdown',
    description: 'Detailed Infosys salary structure for 2026 — System Engineer, Technology Analyst, Senior Engineer. Understand Infosys variable pay, BU incentive, and actual monthly in-hand for all grades.',
    category: 'Salary Examples',
    readTime: '8 min read',
    publishedAt: '2026-02-15',
    content: `
## Infosys Salary Structure: The Complete Picture

Infosys is India's second-largest IT employer, known for its structured salary bands and transparent (if modest) hike cycles. Understanding Infosys's pay structure helps you evaluate offers accurately and plan your career financially.

## Infosys Fresher Salary 2026

Infosys hires freshers through three programs:

| Program | CTC | Role | Joining Criteria |
|---------|-----|------|-----------------|
| InfyTQ | ₹3.6 LPA | System Engineer | Eligible campuses |
| Specialist Programmer | ₹9.5 LPA | Technology Analyst | CGPA 7+, IITs/NITs/BITS |
| Power Programmer | ₹11 LPA | Senior Technology Analyst | Top institutes |

**₹3.6 LPA Infosys Fresher (System Engineer) Breakdown:**

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary | ₹1,44,000 | ₹12,000 |
| HRA (50% of Basic) | ₹72,000 | ₹6,000 |
| Variable Pay (~18%) | ₹64,800 | ₹5,400 |
| Special Allowance | ₹82,200 | ₹6,850 |
| Employer PF | ₹17,280 | ₹1,440 |
| Gratuity | ₹6,926 | ₹577 |
| **CTC** | ₹3,60,000 | — |

**Fixed Monthly In-Hand:**
- Gross (without variable): ~₹24,850
- Employee PF: ₹1,440
- Professional Tax: ₹200
- **In-Hand: ~₹23,210** (without variable)
- With full variable: **~₹28,610**

## Infosys Experience Band Salaries 2026

| Band | Role | Experience | Typical CTC | Fixed In-Hand |
|------|------|-----------|------------|--------------|
| SE | System Engineer | 0–2 years | ₹3.6–5 LPA | ₹23K–₹32K |
| SSE | Senior System Engineer | 2–4 years | ₹5–8 LPA | ₹32K–₹52K |
| TA | Technology Analyst | 4–7 years | ₹8–14 LPA | ₹52K–₹98K |
| ST | Senior Technology Analyst | 7–10 years | ₹14–22 LPA | ₹98K–₹1.55L |
| Consultant | Consultant | 10–14 years | ₹22–35 LPA | ₹1.55L–₹2.5L |
| SM | Senior Manager | 14+ years | ₹35–60 LPA | ₹2.5L–₹4.2L |

*Monthly in-hand = fixed only, excludes variable pay*

## Infosys Variable Pay Structure

Infosys variable pay has two components:
1. **Variable Pay (VP)**: 15–25% of CTC, paid quarterly, based on individual + BU performance
2. **Business Unit Incentive (BUI)**: Additional quarterly incentive based on BU profits

**Important**: Infosys variable payout has historically been 70–100% of target, unlike TCS which more consistently pays 85–90%. During strong business years (FY24, FY25), many units paid 100%.

**Freshers**: First variable payout is usually after 6 months of joining. Don't rely on it for initial budgeting.

## Infosys vs TCS Salary Comparison at Same Level

| Metric | Infosys (System Engineer) | TCS (TCS Ninja) |
|--------|--------------------------|-----------------|
| CTC | ₹3.6 LPA | ₹3.36 LPA |
| Fixed Monthly In-Hand | ₹23,200 | ₹22,000 |
| Variable % | ~18% | ~12% |
| PF Treatment | Full 12% (uncapped) | Capped at ₹1,800 |
| Work Culture | More structured | Similar MNC culture |

**PF Policy Difference**: Infosys pays PF on actual basic (₹12,000 × 12% = ₹1,440) while TCS caps at ₹1,800. At this level, both are similar. But for higher salaries at Infosys (if uncapped), your EPF corpus grows faster.

## Infosys Hike Cycle and Growth

- **Hike cycle**: July–August annually
- **Average hike**: 8–12% (top performers 15–18%)
- **Promotion lag**: 3–4 years between bands for average performers
- **Lateral hire advantage**: External hire to higher bands gets faster progression

## Real ₹8 LPA Infosys (Senior System Engineer) Calculation

| Component | Monthly |
|-----------|---------|
| Basic | ₹26,667 |
| HRA | ₹13,333 |
| Variable (monthly) | ₹11,111 |
| Special Allowance | ₹12,056 |
| **Full Gross (with variable)** | **₹63,167** |
| Employee PF (full, uncapped) | ₹3,200 |
| Professional Tax | ₹200 |
| TDS | ₹0 (under 87A) |
| **In-Hand (with variable)** | **~₹59,767** |
| **Fixed In-Hand (no variable)** | **~₹49,600** |

Use our [In-Hand Salary Calculator](/in-hand-salary-calculator/) to calculate your exact Infosys offer in-hand.
    `.trim()
  },
  {
    slug: 'freshers-salary-it-companies-2025',
    title: 'Fresher Salary in Top IT Companies 2026: TCS, Infosys, Wipro, Cognizant, HCL Compared',
    description: 'Compare fresher salaries across top Indian IT companies in 2026 — TCS, Infosys, Wipro, Cognizant, HCL, Accenture. Know the actual in-hand salary, not just the CTC.',
    category: 'Freshers Guide',
    readTime: '8 min read',
    publishedAt: '2026-02-10',
    content: `
## IT Fresher Salaries in India: The Real Picture (2026)

Every year, thousands of engineering graduates join India's IT sector. The CTC numbers in campus offers sound impressive, but the actual in-hand salary is often half or less of the CTC. This guide gives you the transparent comparison across all major IT companies hiring freshers in 2026.

## Fresher CTC Comparison: Top IT Companies 2026

| Company | Fresher CTC | Fixed Monthly In-Hand* |
|---------|------------|------------------------|
| TCS (Ninja) | ₹3.36 LPA | ₹22,000–₹23,500 |
| TCS (Digital) | ₹7 LPA | ₹50,000–₹53,000 |
| Infosys (System Engg) | ₹3.6 LPA | ₹23,000–₹24,500 |
| Infosys (Specialist Prog) | ₹9.5 LPA | ₹67,000–₹72,000 |
| Wipro (Project Engineer) | ₹3.5 LPA | ₹22,500–₹24,000 |
| Cognizant (Programmer) | ₹4 LPA | ₹26,000–₹28,000 |
| HCL (Graduate Engineer) | ₹4.25 LPA | ₹28,000–₹30,000 |
| Accenture (ASE) | ₹4.5 LPA | ₹30,000–₹32,500 |
| Capgemini | ₹4 LPA | ₹26,500–₹28,500 |
| Tech Mahindra | ₹3.25 LPA | ₹20,500–₹22,000 |

*Fixed in-hand without variable pay. Source: AmbitionBox, Glassdoor, company announcements (2025-26)

## Variable Pay: The Biggest Source of Confusion

All large IT companies include significant variable pay in fresher CTCs. Here's the breakdown:

| Company | Variable % of CTC | When Paid |
|---------|------------------|-----------|
| TCS | 10–12% | Quarterly |
| Infosys | 15–18% | Quarterly |
| Wipro | 20–25% | Quarterly |
| Cognizant | 15% | Quarterly |
| HCL | 10% | Quarterly |
| Accenture | 12–15% | Quarterly |

**Critical**: Variable pay is performance-linked and NOT guaranteed. Budget only on your fixed salary. New joiners typically wait 6 months for their first variable payout.

## Wipro Fresher Salary 2026 (Detailed Breakdown)

Wipro's "Project Engineer" (Elite category) at ₹3.5 LPA:

| Component | Monthly |
|-----------|---------|
| Basic | ₹11,667 |
| HRA | ₹5,833 |
| Special Allowance | ₹6,500 |
| Variable (monthly equiv.) | ₹4,861 |
| **Gross (with variable)** | ₹28,861 |
| Employee PF | ₹1,400 |
| Professional Tax | ₹200 |
| TDS | ₹0 |
| **Fixed In-Hand (no variable)** | **₹22,800** |

## Cognizant vs HCL vs Accenture: Which Pays More?

For freshers, the CTC difference between Cognizant (₹4L), HCL (₹4.25L), and Accenture (₹4.5L) translates to:
- Monthly in-hand difference: ₹4,000–₹6,000
- Annual fixed salary difference: ₹50,000–₹80,000

Over 3 years with 10% annual hike:
- Starting at Accenture ₹4.5L: At year 3 = ₹5.99 LPA
- Starting at TCS ₹3.36L: At year 3 = ₹4.47 LPA

**The gap compounds**. Negotiating a better starting offer, even by ₹50,000–₹1L, matters significantly long-term.

## Product Companies vs Service Companies: Salary Gap

For freshers with strong programming skills, product companies (Google, Amazon, Microsoft, Flipkart, Swiggy) offer vastly different compensation:

| Type | Fresher CTC Range | In-Hand Range |
|------|------------------|--------------|
| IT Services (TCS/Infosys) | ₹3.36–₹7 LPA | ₹22K–₹53K |
| Mid-size Product (Zoho, Freshworks) | ₹8–15 LPA | ₹57K–₹1.06L |
| Large MNC Product (Amazon, Uber) | ₹20–40 LPA | ₹1.4L–₹2.8L |
| Top-tier (Google, Meta) | ₹40–1 crore+ | ₹2.8L–₹6L+ |

## First Job Salary: What Actually Matters More Than CTC

1. **Learning Opportunity**: A lower CTC at a company with strong training (Infosys has iSTART, TCS has BridgeLabz, Wipro has STEP) can be more valuable than slightly higher pay elsewhere
2. **Location**: WFH vs relocation affects your actual savings significantly
3. **Switching potential**: Service company experience + certifications = faster hike on switch
4. **Brand name**: IIT/BITS hires at Infosys Specialist Program carry brand weight

## Planning Your Finances as an IT Fresher

Monthly in-hand ~₹22,000–₹32,000:
| City | Feasible? | Minimum Rent |
|------|---------|-------------|
| Bengaluru (tech hub) | Tight | ₹7,000 (PG) |
| Hyderabad | Comfortable | ₹6,000 (PG) |
| Pune | Comfortable | ₹5,500 (PG) |
| Chennai | Manageable | ₹5,000 (PG) |
| Mumbai | Very Tight | ₹8,000 (sharing) |

Start a SIP of ₹1,000–₹2,000/month from Day 1. At ₹2,000/month for 25 years at 12% CAGR = **₹37 lakh**. Starting early is the biggest advantage you have.

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to check any company offer you receive.
    `.trim()
  },
  {
    slug: 'how-to-read-salary-slip-india-2025',
    title: 'How to Read Your Salary Slip in India: Complete Guide (2026)',
    description: 'Confused by your payslip? This complete guide explains every component of an Indian salary slip — Basic, HRA, PF, ESI, TDS, Professional Tax — with examples for FY 2026-27.',
    category: 'Salary Guide',
    readTime: '8 min read',
    publishedAt: '2026-02-05',
    content: `
## Understanding Your Indian Salary Slip (Payslip)

Your monthly salary slip is a legal document showing exactly how your gross salary is calculated and what deductions are made. Most employees glance at the "Net Pay" figure and ignore the rest — but understanding every line item helps you verify accuracy, plan taxes, and make informed financial decisions.

## Typical Indian Salary Slip Structure

A standard Indian payslip has three sections:

**Section 1: Employee & Employer Details**
- Employee name, ID, department
- PAN number (critical for tax)
- Bank account number (verify!)
- UAN (Universal Account Number) for PF

**Section 2: Earnings (Credit to You)**
- Basic Salary
- HRA
- Special Allowance
- LTA (if applicable)
- Medical Allowance
- Variable/Performance Pay
- Overtime (if applicable)

**Section 3: Deductions (Taken from Gross)**
- Employee PF
- Professional Tax
- TDS (Income Tax)
- ESI (if applicable)
- Loan EMI (if salary loan)

## Earnings Components: What Each Means

### Basic Salary
The foundation of your compensation. Usually 40–50% of CTC. All other allowances are calculated as a percentage of Basic. Higher basic = more PF deduction but more gratuity accumulation.

### HRA (House Rent Allowance)
Typically 40–50% of Basic. If you pay rent and choose the old tax regime, the exempt portion is not taxable. The non-exempt portion (usually labeled "Taxable HRA") forms part of your taxable income. Even if you don't claim HRA exemption, the amount is still paid — it just becomes fully taxable.

### Special Allowance
The residual component — whatever's left after Basic, HRA, and other defined allowances are subtracted from your agreed gross salary. Fully taxable. May also be labeled as "Flex Allowance," "Miscellaneous Allowance," or "City Compensatory Allowance."

### LTA (Leave Travel Allowance)
Paid 1–2 times a year (sometimes monthly, claimed twice in a 4-year block). Exempt from tax if actually used for travel within India with proper documentation. Without claiming, it's taxable.

### Medical Allowance
Up to ₹15,000/year is exempt (old regime only) if actual medical bills are submitted. Under the new regime, this is fully taxable.

### Variable Pay / Performance Pay
Paid quarterly or annually. Shows up on your payslip in the quarter it's paid. Watch this — it inflates that month's gross and therefore the TDS for that month.

## Deductions: What's Taken From Your Salary

### Employee PF (Provident Fund)
**12% of Basic Salary** (or 12% of ₹15,000 = ₹1,800 if capped). This goes to YOUR EPF account — it's your savings, not a tax. Current EPF interest rate: 8.25% p.a. (FY 2026-27).

Your payslip should show your **UAN** (Universal Account Number). Always verify your UAN is active and your PF is being credited monthly by checking the EPFO portal.

### Professional Tax
Levied by state governments. Deducted monthly:
| State | Annual PT | Monthly |
|-------|-----------|---------|
| Karnataka | ₹2,400/year | ₹200 |
| Maharashtra | ₹2,500/year | Variable |
| Tamil Nadu | ₹1,200/year | ₹100 |
| Delhi | ₹0 | ₹0 |
| UP, Rajasthan | ₹0 | ₹0 |

### TDS (Tax Deducted at Source)
Your employer estimates your annual income tax liability at the start of the year and deducts 1/12th each month as TDS. This appears as "Income Tax" or "TDS" on your payslip.

**How to verify your TDS**: Form 26AS (download from Income Tax portal) shows all TDS deducted against your PAN. Verify this matches your payslip before filing your ITR.

If your TDS is ₹0: Either your income is below ₹12L (zero tax) or you've submitted declarations for HRA/home loan that reduce tax to zero.

### ESIC (Employees' State Insurance Corporation)
Applicable if your **gross salary ≤ ₹21,000/month**. Employee contribution: 0.75% of gross. Employer: 3.25%. Provides government health and disability coverage. If your salary is above ₹21,000, no ESIC deduction.

## Red Flags to Watch on Your Salary Slip

1. **PF not deducted despite deduction shown**: Check your EPFO account monthly
2. **TDS amount seems wrong**: Use our [Tax Estimator](/tax-estimator/) to cross-verify
3. **Different bank account number**: Could indicate fraud — contact HR immediately
4. **UAN not shown**: Insist your UAN appears on every payslip
5. **Net Pay doesn't match bank credit**: Check for loan EMI or advance recovery not reflected clearly
6. **LTA paid without your knowledge**: This is taxable if not claimed properly

## How to Download and Use Your Payslip

1. **HRMS Portal**: Most companies have an employee self-service portal (SAP, Workday, Darwinbox, etc.)
2. **Email**: Monthly payslip via email (password-protected PDF)
3. **HR Request**: Physical payslips for very small companies

**Uses of your payslip:**
- Home/personal loan applications (last 3 months)
- Visa applications (proof of employment + income)
- Rental agreements (proof of income)
- ITR filing (income verification)
- Insurance purchase (income-linked sum assured)

## Quick Calculation to Verify Your Payslip

Net Pay = Total Earnings − Total Deductions

If the number doesn't match:
1. Add up all earning components
2. Add up all deduction components
3. Difference should equal Net Pay

If there's a discrepancy, raise it with HR immediately with a screenshot of the calculation.

Use our [CTC to In-Hand Calculator](/ctc-to-inhand/) to check whether your payslip figures align with your original CTC offer.
    `.trim()
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug)
  if (!current) return blogPosts.slice(0, limit)
  return blogPosts
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
    .concat(blogPosts.filter(p => p.slug !== currentSlug && p.category !== current.category))
    .slice(0, limit)
}
