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
    title: 'How to Calculate In-Hand Salary from CTC in India (2026)',
    description: 'Learn the exact formula to convert your CTC to monthly take-home salary for FY 2025-26. Understand PF, HRA, professional tax deductions step-by-step with worked examples.',
    category: 'Salary Guide',
    readTime: '6 min read',
    publishedAt: '2025-04-15',
    content: `
## What is CTC and In-Hand Salary?

Your **Cost to Company (CTC)** is the total annual expense a company incurs for your employment. Your **in-hand salary** (or take-home salary) is what actually gets credited to your bank account every month — significantly less than CTC.

## The Formula

\`\`\`
In-Hand Salary = Gross Salary − Employee PF − Professional Tax − Income Tax
Gross Salary   = CTC − Employer PF − Gratuity Provision
\`\`\`

## Step-by-Step Calculation Example

**Assume CTC = ₹12,00,000 per annum**

### Step 1: Calculate Basic Salary
Basic Salary = 50% of CTC = **₹6,00,000 p.a. (₹50,000/month)**

### Step 2: Calculate HRA (House Rent Allowance)
- Metro city: 50% of Basic = ₹3,00,000 p.a. = **₹25,000/month**
- Non-metro: 40% of Basic = ₹2,40,000 p.a.

### Step 3: Employer PF Contribution
12% of Basic (capped at ₹15,000 basic) = **₹1,800/month = ₹21,600 p.a.**

### Step 4: Gratuity Provision
(Basic × 15/26 × 1) = ~₹28,846 p.a.

### Step 5: Gross Salary
Gross = CTC − Employer PF − Gratuity = 12,00,000 − 21,600 − 28,846 = **₹9,49,554 p.a.**

### Step 6: Employee Deductions
- Employee PF: ₹21,600 p.a.
- Professional Tax: ₹2,400 p.a.
- Income Tax (estimated, new regime): ~₹26,600 p.a.

### Step 7: In-Hand Salary
9,49,554 − 21,600 − 2,400 − 26,600 = **₹8,98,954 p.a. = ₹74,913/month**

## Common Misconceptions

1. **"My CTC is my salary"** — No! CTC includes employer PF, gratuity, insurance, etc.
2. **"HRA is fully tax-free"** — Only the exempt portion is tax-free.
3. **"PF is a loss"** — PF is your own savings earning 8.1% interest.

## Key Deductions to Remember

| Deduction | Rate | Notes |
|-----------|------|-------|
| Employee PF | 12% of Basic | Max basic ₹15,000 |
| Employer PF | 12% of Basic | Part of CTC |
| Professional Tax | ₹200/month | State-specific |
| Income Tax | As per slab | Varies by income |

## Use Our Calculator

Use the [CTC to In-Hand Salary Calculator](/ctc-to-inhand) to get instant, accurate results for your specific CTC.
    `.trim()
  },
  {
    slug: 'ctc-vs-gross-salary-vs-net-salary',
    title: 'CTC vs Gross Salary vs Net Salary: Key Differences Explained',
    description: 'Confused about CTC, Gross, and Net Salary? This guide explains all three terms clearly with examples and a comparison table.',
    category: 'Salary Guide',
    readTime: '5 min read',
    publishedAt: '2025-04-10',
    content: `
## Three Terms, Three Meanings

Understanding these three terms is fundamental for every professional in India.

## CTC (Cost to Company)

CTC is the **total annual cost** your employer bears for your employment. It includes:
- Basic Salary
- HRA
- Special Allowances
- Employer's PF contribution (12% of basic)
- Gratuity (4.81% of basic)
- Medical insurance premiums
- Other benefits (food coupons, cab, etc.)

**Think of CTC as:** What your company pays FOR you (not TO you)

## Gross Salary

Gross Salary = CTC − Employer PF − Gratuity

This is your total earnings **before tax and employee-side deductions**.

For ₹12 LPA CTC: Gross ≈ ₹9.5 LPA

## Net Salary (In-Hand/Take-Home)

Net Salary = Gross − Employee PF − Professional Tax − TDS

This is what hits your **bank account**.

## Quick Comparison Table

| Component | ₹12 LPA Example |
|-----------|-----------------|
| CTC | ₹12,00,000 |
| Gross Salary | ₹9,49,554 |
| Net (In-Hand) | ₹8,98,954 |
| Monthly Take-Home | ₹74,913 |

## Why Companies Quote CTC

Companies use CTC because it looks like a higher number and includes all benefits. Always ask for the **monthly in-hand figure** during negotiations.

## Pro Tip: Salary Negotiation

When negotiating, ask:
1. What is the monthly in-hand (post all deductions)?
2. What is included in the CTC? (Don't let variable pay inflate CTC)
3. Is there a performance bonus component?
    `.trim()
  },
  {
    slug: 'how-pf-affects-your-salary',
    title: 'How PF Affects Your Monthly Salary and Long-Term Wealth',
    description: 'Understand how EPF deductions work, why it reduces your take-home, and how it builds massive wealth over time with 8.1% tax-free returns.',
    category: 'PF & Savings',
    readTime: '7 min read',
    publishedAt: '2025-04-05',
    content: `
## How PF Works in India

The Employees' Provident Fund (EPF) is a mandatory retirement savings scheme for employees earning below ₹15,000 basic (optional above).

## Contribution Breakdown

Both you and your employer contribute **12% of your basic salary** each month.

| Contributor | Rate | Where it Goes |
|-------------|------|---------------|
| Employee | 12% | EPF account |
| Employer (EPF) | 3.67% | EPF account |
| Employer (EPS) | 8.33% | Pension scheme |

**Note:** Only the employee's 12% + employer's 3.67% earns compound interest. The EPS 8.33% funds your pension.

## Impact on Salary (Example: ₹50,000 Basic)

- Employee PF deduction: ₹6,000/month
- Employer PF (in CTC): ₹6,000/month (included in your CTC)
- Net impact on in-hand: −₹6,000/month

## Why PF is Actually Great

### Tax Benefits
- Employee PF contribution: Deductible under Section 80C
- Interest earned: Tax-free up to ₹2.5 lakhs annually
- Maturity amount: Tax-free (after 5 years)

### Compounding Power (EPF at 8.1%)
If your total PF contribution is ₹5,000/month:

| Years | Corpus |
|-------|--------|
| 5 years | ~₹3.7 lakhs |
| 10 years | ~₹9.2 lakhs |
| 20 years | ~₹30 lakhs |
| 30 years | ~₹75 lakhs |

## Should You Opt Out?

If your basic is above ₹15,000, you can opt out. But consider:
- 8.1% guaranteed, tax-free return is hard to beat safely
- It's forced disciplined saving
- Employer contribution is essentially free money

Use our [PF Calculator](/pf-calculator) to see your exact corpus.
    `.trim()
  },
  {
    slug: 'hra-exemption-rules-explained',
    title: 'HRA Exemption Rules: How to Save Maximum Tax on House Rent',
    description: 'Complete guide to HRA tax exemption in India. Learn the formula, metro vs non-metro rules, and how to maximize your HRA tax benefit.',
    category: 'Tax Savings',
    readTime: '6 min read',
    publishedAt: '2025-03-28',
    content: `
## What is HRA?

House Rent Allowance (HRA) is an allowance paid by employers to cover employees' rental expenses. A portion of HRA is **exempt from income tax** under Section 10(13A).

## The HRA Exemption Formula

The tax-exempt HRA = **Minimum of these 3 values:**

1. Actual HRA received
2. 50% of basic salary (metro) or 40% (non-metro)
3. Actual rent paid − 10% of basic salary

## Metro vs Non-Metro Cities

**Metro cities (50% of basic):**
- Mumbai, Delhi, Kolkata, Chennai

**Non-metro cities (40% of basic):**
- Bengaluru, Hyderabad, Pune, Ahmedabad, and all others

## Worked Example

**Scenario:** ₹50,000 basic, ₹25,000 HRA, ₹20,000 rent, Delhi (metro)

1. Actual HRA = ₹25,000/month = ₹3,00,000 p.a.
2. 50% of Basic = ₹25,000/month = ₹3,00,000 p.a.
3. Rent − 10% Basic = 20,000 − 5,000 = ₹15,000/month = ₹1,80,000 p.a.

**HRA Exemption = ₹1,80,000 p.a. (minimum of the three)**

## Rules & Requirements

- You must be a **salaried employee** (not self-employed)
- You must **actually pay rent** (not own the house)
- You can pay rent to parents (but PAN required if rent > ₹1 lakh/year)
- Must submit rent receipts to employer

## HRA in New Tax Regime

Under the **New Tax Regime**, HRA exemption is **NOT available**. You must choose the old regime to claim HRA benefits.

Use our [HRA Calculator](/hra-calculator) to find your exact tax savings.
    `.trim()
  },
  {
    slug: 'salary-structure-explained-freshers',
    title: 'Salary Structure Explained for Freshers: What Every Component Means',
    description: 'First job? Decode your salary slip components — Basic, HRA, PF, TDS, Special Allowance, Gratuity — with clear explanations and examples.',
    category: 'Freshers Guide',
    readTime: '8 min read',
    publishedAt: '2025-03-20',
    content: `
## Your First Salary Slip Decoded

Getting your first salary slip can be confusing. Here's every component explained simply.

## Earnings Side

### Basic Salary
The core component — usually **40-50% of CTC**. All other allowances are calculated as a percentage of basic. Higher basic = higher PF deduction but also higher HRA and gratuity.

### HRA (House Rent Allowance)
50% of basic (metro) or 40% (non-metro). Partially tax-exempt if you pay rent.

### Special Allowance
The "balancing" component. CTC − Basic − HRA − PF − Gratuity = Special Allowance. Fully taxable.

### LTA (Leave Travel Allowance)
Travel reimbursement for domestic travel. Exempt twice in a 4-year block.

### Medical Allowance
₹15,000/year for medical expenses — fully taxable (post-2018 budget).

## Deductions Side

### PF (Provident Fund)
12% of basic salary, capped at ₹1,800/month. Goes into your retirement corpus.

### Professional Tax
State-specific tax, typically ₹200/month (₹2,400/year). Non-deductible after certain income in some states.

### TDS (Tax Deducted at Source)
Income tax deducted monthly by your employer based on your estimated annual income.

### ESI (Employee State Insurance)
0.75% of gross salary if gross < ₹21,000/month. Health insurance scheme.

## Sample Salary Slip (₹8 LPA CTC)

| Component | Monthly |
|-----------|---------|
| Basic | ₹33,333 |
| HRA | ₹16,667 |
| Special Allowance | ₹8,333 |
| **Gross Earnings** | **₹58,333** |
| PF Deduction | ₹4,000 |
| Professional Tax | ₹200 |
| TDS | ₹0 (if < 7L) |
| **Net Pay** | **₹54,133** |

## Tips for Freshers

1. Always verify your **PF UAN number** on EPFO portal
2. Submit **Form 12BB** to claim HRA, LTA deductions to your employer
3. File **ITR** even if TDS is zero — builds your financial history
4. Don't confuse **monthly CTC** with actual in-hand

Use our [In-Hand Salary Calculator](/in-hand-salary-calculator) to verify your salary.
    `.trim()
  },
  {
    slug: 'take-home-salary-10-lpa',
    title: 'Take Home Salary for 10 LPA in India (2026) — Exact Monthly Breakdown',
    description: 'Exact monthly in-hand salary for ₹10 LPA CTC in India for FY 2025-26. Complete breakdown with PF, HRA, income tax deductions, city-wise comparison, and new vs old regime.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-03-12',
    content: `
## ₹10 LPA CTC — Monthly Take-Home Calculation

One of the most searched salary queries in India. Here's the complete breakdown.

## Salary Components at 10 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (50%) | ₹5,00,000 | ₹41,667 |
| HRA (50% of basic, metro) | ₹2,50,000 | ₹20,833 |
| Special Allowance | ₹85,196 | ₹7,100 |
| Employer PF (in CTC) | ₹18,000 | ₹1,500 |
| Gratuity (in CTC) | ₹28,846 | ₹2,404 |
| **Total CTC** | **₹10,00,000** | **₹83,333** |

## Gross Salary (After Removing Employer Costs)

₹10,00,000 − ₹18,000 (Emp PF) − ₹28,846 (Gratuity) = **₹9,53,154 Gross**

## Deductions

| Deduction | Annual | Monthly |
|-----------|--------|---------|
| Employee PF | ₹18,000 | ₹1,500 |
| Professional Tax | ₹2,400 | ₹200 |
| Income Tax (New Regime) | ₹11,000 | ₹917 |
| **Total Deductions** | **₹31,400** | **₹2,617** |

## Final In-Hand Salary

₹9,53,154 − ₹31,400 = **₹9,21,754 p.a.**

### **Monthly In-Hand: ~₹76,813**

## City-Wise Variation (HRA Impact)

| City Type | Monthly In-Hand |
|-----------|-----------------|
| Metro (Delhi/Mumbai) | ~₹76,813 |
| Non-Metro | ~₹75,646 |

## Key Takeaway

For ₹10 LPA, your **monthly take-home is approximately ₹74,000–₹77,000** depending on your tax regime, city, and exact salary structure.

Want your exact number? Use our [CTC to In-Hand Calculator](/ctc-to-inhand).
    `.trim()
  },
  {
    slug: 'notice-period-buyout-explained',
    title: 'Notice Period Buyout: How It Works and What It Costs You',
    description: 'Everything about notice period buyout in India — calculation formula, tax implications, negotiation tips, and how to estimate the exact cost.',
    category: 'Career Tips',
    readTime: '6 min read',
    publishedAt: '2025-03-05',
    content: `
## What is Notice Period Buyout?

When you resign and cannot serve the full notice period, your employer may ask you to **pay** the remaining notice period salary (buyout). Alternatively, your new employer sometimes pays this on your behalf.

## How is Buyout Calculated?

\`\`\`
Daily Rate = Monthly CTC ÷ 26 (working days)
Buyout Amount = Daily Rate × Remaining Notice Days
\`\`\`

## Example Calculation

- Monthly CTC: ₹1,00,000
- Notice Period: 90 days
- Days Served: 30 days
- Remaining Days: 60 days

**Daily Rate** = 1,00,000 ÷ 26 = **₹3,846/day**
**Buyout Amount** = 3,846 × 60 = **₹2,30,769**

## Tax Implications

The buyout amount is **added to your income** and taxed accordingly. If you're in the 30% slab, you'll effectively pay:

- Buyout: ₹2,30,769
- Tax (30% + cess): ₹71,798
- **Total cost to you: ₹3,02,567**

## Can Your New Employer Pay?

Yes! This is common practice. New employers often:
- Pay the buyout directly
- Give a joining bonus to offset the cost
- Negotiate your joining date with your current employer

## How to Negotiate Notice Period

1. **Request early release** — Most employers agree if you cooperate during handover
2. **Negotiate notice waiver** — Especially for senior roles
3. **Check your appointment letter** — Notice period terms are legally binding
4. **Ask HR for exceptions** — Medical/personal grounds sometimes work

## Key Points

- Notice period is **bilateral** — both parties can negotiate
- Buyout is **your right** if you want to leave early
- Some companies waive notice for immediate joiners
- Always get **email confirmation** before assuming waiver

Use our [Notice Period Buyout Calculator](/notice-period-buyout) for your exact cost.
    `.trim()
  },
  {
    slug: 'gratuity-calculation-india',
    title: 'How Gratuity is Calculated in India — Complete Guide 2026',
    description: 'Complete guide to gratuity calculation in India for FY 2025. Formula, eligibility, tax rules, and worked examples for ₹10L, ₹15L, ₹20L salaries.',
    category: 'Benefits',
    readTime: '6 min read',
    publishedAt: '2025-02-28',
    content: `
## What is Gratuity?

Gratuity is a **one-time payment** by the employer when an employee leaves after completing **5+ years** of continuous service. Governed by the Payment of Gratuity Act, 1972.

## Gratuity Formula

\`\`\`
Gratuity = (Last Basic Salary + DA) × 15/26 × Years of Service
\`\`\`

- **15**: represents 15 days of salary
- **26**: working days in a month

## Worked Example

**Scenario:**
- Last Basic + DA: ₹60,000/month
- Years of Service: 8 years

**Gratuity = 60,000 × 15 × 8 ÷ 26 = ₹2,76,923**

## Eligibility Rules

- Minimum **5 years** continuous service
- Applies to companies with **10+ employees**
- Also payable on death or disability (no 5-year rule)

## Tax Rules

| Gratuity Amount | Tax Status |
|----------------|------------|
| Up to ₹20 lakhs | Tax-free |
| Above ₹20 lakhs | Taxable as income |

Government employees: entire gratuity is tax-free.

## Gratuity by Salary Level

| Monthly Basic | 5 Years | 10 Years | 20 Years |
|---------------|---------|----------|----------|
| ₹30,000 | ₹86,538 | ₹1,73,077 | ₹3,46,154 |
| ₹50,000 | ₹1,44,231 | ₹2,88,462 | ₹5,76,923 |
| ₹80,000 | ₹2,30,769 | ₹4,61,538 | ₹9,23,077 |

## Tips

- Gratuity must be paid within **30 days** of leaving
- If not paid, employer owes **interest**
- Can be forfeited for misconduct
- Many companies pay gratuity provision in CTC (but you get it only after 5 years)

Calculate yours: [Gratuity Calculator](/gratuity-calculator)
    `.trim()
  },
  {
    slug: 'salary-negotiation-tips-india',
    title: '10 Salary Negotiation Tips for Indian Professionals (That Actually Work)',
    description: 'Proven salary negotiation strategies for Indian job seekers. How to counter-offer, handle "current salary" questions, and maximize your hike.',
    category: 'Career Tips',
    readTime: '7 min read',
    publishedAt: '2025-02-20',
    content: `
## Why Negotiation Matters

A study found that only **37% of Indian professionals** negotiate salary. Those who do earn an average of 13–20% more over their career.

## 10 Proven Negotiation Strategies

### 1. Know Your Market Value First
Research salary ranges on:
- LinkedIn Salary Insights
- AmbitionBox
- Glassdoor India
- Levels.fyi (for tech)

Use our [Salary Calculator](/in-hand-salary-calculator) to understand what's realistic.

### 2. Always Negotiate the In-Hand, Not CTC
CTC can be inflated with variable pay, NJP, etc. Always negotiate the **fixed monthly in-hand**.

### 3. Handle "Current Salary" Questions Carefully
You are **not legally required** to disclose your salary in most states. Say:
> "I'm looking for ₹X based on my market research and experience."

### 4. Let Them Make the First Offer
Wait for the employer to name a number. You can always negotiate up; going first risks anchoring too low.

### 5. Counter with a Range (Not a Single Number)
Instead of "I want ₹15 LPA," say:
> "Based on my research, I'm targeting ₹15–17 LPA. Is that within your band?"

### 6. Always Get Competing Offers
Even one competing offer gives massive leverage. Apply widely during your job search.

### 7. Negotiate Beyond Base Salary
If they can't move on base, ask for:
- Signing bonus
- Extra vacation days
- Remote work flexibility
- Earlier performance review

### 8. Stay Silent After Your Number
Once you state your expectation, stop talking. Silence is powerful.

### 9. Don't Accept on the Spot
Say: "Thank you! I'll review and get back by [date]." This shows professionalism and gives time to compare.

### 10. Get Everything in Writing
Verbal offers mean nothing. Wait for the written offer letter before resigning.

## Scripts That Work

**Countering an offer:**
> "I'm very excited about this role. Based on my X years in [skill], I was expecting ₹Y. Can we explore that?"

**When budget is firm:**
> "I understand the band constraints. Can we discuss a performance review at 6 months?"
    `.trim()
  },
  {
    slug: 'reduce-tax-legally-india',
    title: 'How to Reduce Income Tax Legally in India — 15 Smart Ways',
    description: 'Legal ways to reduce income tax for salaried employees in India. Save tax on HRA, 80C, NPS, medical, home loan, and more.',
    category: 'Tax Savings',
    readTime: '8 min read',
    publishedAt: '2025-02-12',
    content: `
## You're Probably Paying More Tax Than Needed

Most salaried employees don't optimize their tax. Here are 15 legal ways to minimize tax.

## Under Section 80C (Max ₹1.5 Lakh Deduction)

1. **ELSS Mutual Funds** — 3-year lock-in, market-linked returns
2. **PPF (Public Provident Fund)** — 7.1% p.a., 15-year lock-in, fully tax-free
3. **Life Insurance Premium** — Term plans qualify
4. **Home Loan Principal Repayment** — Under 80C
5. **ULIP** — Unit-linked insurance plans
6. **Sukanya Samriddhi** — For girl child education
7. **NSC** — National Savings Certificate, 5-year lock-in
8. **5-Year Tax-Saving FD** — Fixed deposit, bank

## Section 80D (Health Insurance)

- Self + family: **Up to ₹25,000**
- Parents (below 60): **Additional ₹25,000**
- Parents (above 60): **Additional ₹50,000**
- **Max deduction: ₹1,00,000**

## Section 80CCD(1B) — NPS

Additional ₹50,000 deduction for NPS contributions **over and above** 80C.

## HRA Exemption

If you pay rent, claim HRA exemption under Section 10(13A). See our [HRA Calculator](/hra-calculator).

## Section 24B — Home Loan Interest

Up to **₹2,00,000** deduction on home loan interest (self-occupied property).

## Leave Travel Allowance (LTA)

Claim for domestic travel twice in a 4-year block. Keep boarding passes and hotel receipts.

## Standard Deduction

**₹50,000** flat deduction for all salaried employees — no proof needed.

## New vs Old Regime Decision

| Annual Income | Better Regime |
|---------------|---------------|
| < ₹7 lakhs | New (zero tax) |
| ₹7–10 lakhs (with deductions) | Old |
| > ₹15 lakhs | New (often lower) |

Use our [Tax Estimator](/tax-estimator) to compare regimes.

## Pro Tip: Salary Restructuring

Ask HR to restructure your salary to include:
- Higher HRA (if you rent)
- Food coupons (₹2,000/month tax-free)
- Mobile/internet reimbursement
- LTA component
- NPS employer contribution (additional 10% of basic, tax-free)
    `.trim()
  },
  {
    slug: 'take-home-salary-5-lpa',
    title: '5 LPA In-Hand Salary in India 2026 — Exact Monthly Breakdown',
    description: 'What is the exact in-hand salary for 5 LPA CTC in India? Complete monthly breakdown with PF, HRA, income tax, and city-wise differences for FY 2025-26.',
    category: 'Salary Examples',
    readTime: '4 min read',
    publishedAt: '2025-05-10',
    content: `
## ₹5 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹5 LPA is a common fresher and entry-level salary in India. Here's the exact breakdown.

## Salary Components at 5 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (50%) | ₹2,50,000 | ₹20,833 |
| HRA (50% of basic, metro) | ₹1,25,000 | ₹10,417 |
| Special Allowance | ₹85,462 | ₹7,122 |
| Employer PF (in CTC) | ₹18,000 | ₹1,500 |
| Gratuity (in CTC) | ₹14,423 | ₹1,202 |
| **Total CTC** | **₹5,00,000** | **₹41,667** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF (12% of basic) | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ₹0 (below ₹12L threshold) |

## Final Monthly In-Hand: ~₹36,800

Under the new tax regime FY 2025-26, income up to ₹12 lakh is effectively zero-tax (87A rebate). So for ₹5 LPA, **you pay zero income tax**.

## City-Wise In-Hand

| City | Monthly In-Hand |
|------|-----------------|
| Metro (Delhi/Mumbai) | ~₹36,800 |
| Non-Metro (Pune/Hyd) | ~₹36,300 |

Use our [CTC to In-Hand Calculator](/ctc-to-inhand) for your exact number.
    `.trim()
  },
  {
    slug: 'take-home-salary-7-lpa',
    title: '7 LPA In-Hand Salary in India 2026 — Monthly Take-Home Breakdown',
    description: 'Exact monthly in-hand salary for ₹7 LPA CTC in India for FY 2025-26. PF, HRA, tax breakdown and city-wise comparison.',
    category: 'Salary Examples',
    readTime: '4 min read',
    publishedAt: '2025-05-08',
    content: `
## ₹7 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹7 LPA is a common salary for 1–3 year experienced professionals. Here's the exact breakdown.

## Salary Components at 7 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (50%) | ₹3,50,000 | ₹29,167 |
| HRA (50% of basic, metro) | ₹1,75,000 | ₹14,583 |
| Special Allowance | ₹1,23,731 | ₹10,311 |
| Employer PF (in CTC) | ₹18,000 | ₹1,500 |
| Gratuity (in CTC) | ₹20,192 | ₹1,683 |
| **Total CTC** | **₹7,00,000** | **₹58,333** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ₹0 (below ₹12L threshold) |

## Final Monthly In-Hand: ~₹52,900

Under FY 2025-26 new regime, ₹7 LPA attracts **zero income tax** (87A rebate covers up to ₹12L).

## City-Wise In-Hand

| City | Monthly In-Hand |
|------|-----------------|
| Metro (Delhi/Mumbai) | ~₹52,900 |
| Non-Metro | ~₹52,200 |

Try our [In-Hand Salary Calculator](/in-hand-salary-calculator) for your exact salary.
    `.trim()
  },
  {
    slug: 'take-home-salary-8-lpa',
    title: '8 LPA In-Hand Salary in India 2026 — Exact Monthly Calculation',
    description: 'What is the monthly in-hand salary for 8 LPA CTC? Complete FY 2025-26 breakdown with all deductions, HRA, PF, and zero tax benefit.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-05-06',
    content: `
## ₹8 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹8 LPA is a popular benchmark salary. Many freshers from top colleges and 2–3 year experienced professionals earn this.

## Full Salary Breakdown

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (50%) | ₹4,00,000 | ₹33,333 |
| HRA (metro, 50% of basic) | ₹2,00,000 | ₹16,667 |
| Special Allowance | ₹1,47,731 | ₹12,311 |
| Employer PF | ₹18,000 | ₹1,500 |
| Gratuity | ₹23,077 | ₹1,923 |
| **Total CTC** | **₹8,00,000** | **₹66,667** |

## Deductions Monthly

| Deduction | Amount |
|-----------|--------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ₹0 |

## Final Monthly In-Hand: ~₹60,900

**Key 2025 update:** Under the new ₹12L zero-tax rule (Section 87A rebate), your ₹8 LPA attracts zero income tax — saving ₹10,000–₹15,000 vs old rules.

## Old vs New Regime Comparison

| Regime | Annual Tax | Monthly Saving |
|--------|-----------|----------------|
| New Regime (2025) | ₹0 | — |
| Old Regime (no deductions) | ~₹35,000 | ₹2,916 saved |

Use our [CTC Calculator](/ctc-to-inhand) to get your personalized result.
    `.trim()
  },
  {
    slug: 'take-home-salary-12-lpa',
    title: '12 LPA In-Hand Salary in India 2026 — Monthly Take-Home with Tax',
    description: 'Exact monthly in-hand salary for ₹12 LPA CTC. New vs old tax regime comparison, PF, HRA breakdown for FY 2025-26.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-05-04',
    content: `
## ₹12 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹12 LPA is a very important salary level — it's exactly at the ₹12L zero-tax boundary under the new regime.

## Salary Components at 12 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (50%) | ₹6,00,000 | ₹50,000 |
| HRA (metro) | ₹3,00,000 | ₹25,000 |
| Special Allowance | ₹1,97,731 | ₹16,478 |
| Employer PF | ₹18,000 | ₹1,500 |
| Gratuity | ₹34,615 | ₹2,885 |
| **Total CTC** | **₹12,00,000** | **₹1,00,000** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ₹0 (87A rebate!) |

## Final Monthly In-Hand: ~₹74,900

**Critical 2025 note:** Exactly at ₹12L, the Section 87A rebate makes your effective tax **₹0**. This is the biggest tax benefit for this salary level in Budget 2025.

## Old Regime vs New Regime

| Regime | Annual Tax | Monthly In-Hand |
|--------|-----------|-----------------|
| New Regime (2025) | ₹0 | ~₹74,900 |
| Old Regime (80C+HRA) | ~₹62,000 | ~₹69,700 |

New regime wins at ₹12 LPA by ~₹5,200/month!

Calculate exactly: [Tax Estimator](/tax-estimator)
    `.trim()
  },
  {
    slug: 'take-home-salary-15-lpa',
    title: '15 LPA In-Hand Salary in India 2026 — Complete Monthly Breakdown',
    description: 'Monthly in-hand salary for ₹15 LPA CTC in India FY 2025-26. New vs old tax regime, PF, HRA, professional tax deductions explained.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-05-02',
    content: `
## ₹15 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹15 LPA is a milestone salary — common for mid-level engineers, MBAs, and 5+ year experienced professionals.

## Salary Components at 15 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (50%) | ₹7,50,000 | ₹62,500 |
| HRA (metro) | ₹3,75,000 | ₹31,250 |
| Special Allowance | ₹2,72,731 | ₹22,728 |
| Employer PF | ₹21,600 | ₹1,800 |
| Gratuity | ₹43,269 | ₹3,606 |
| **Total CTC** | **₹15,00,000** | **₹1,25,000** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ~₹5,417 |

## Final Monthly In-Hand: ~₹93,200

## New vs Old Regime at 15 LPA

| Regime | Annual Tax | Monthly In-Hand |
|--------|-----------|-----------------|
| New Regime | ~₹65,000 | ~₹93,200 |
| Old Regime (80C + HRA) | ~₹72,000 | ~₹92,600 |

New regime is better by ~₹600/month. [Compare both regimes](/tax-estimator).
    `.trim()
  },
  {
    slug: 'take-home-salary-20-lpa',
    title: '20 LPA In-Hand Salary in India 2026 — Exact Monthly Take-Home',
    description: 'Monthly in-hand salary for ₹20 LPA CTC. Complete breakdown with income tax (new vs old regime), PF, HRA for senior professionals FY 2025-26.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-04-30',
    content: `
## ₹20 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹20 LPA is a senior-level salary — common for tech leads, senior managers, and 8–12 year experienced professionals.

## Salary Components at 20 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (40%) | ₹8,00,000 | ₹66,667 |
| HRA (metro) | ₹4,00,000 | ₹33,333 |
| Special Allowance | ₹5,20,362 | ₹43,364 |
| Employer PF | ₹21,600 | ₹1,800 |
| Gratuity | ₹46,154 | ₹3,846 |
| **Total CTC** | **₹20,00,000** | **₹1,66,667** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ~₹20,833 |

## Final Monthly In-Hand: ~₹1,20,700

## New vs Old Regime at 20 LPA

| Regime | Annual Tax | Monthly In-Hand |
|--------|-----------|-----------------|
| New Regime | ~₹2,50,000 | ~₹1,20,700 |
| Old Regime (80C+HRA+NPS) | ~₹1,85,000 | ~₹1,26,200 |

At ₹20 LPA, **old regime saves ~₹5,500/month** if you maximize deductions. [Check your situation](/tax-estimator).
    `.trim()
  },
  {
    slug: 'take-home-salary-25-lpa',
    title: '25 LPA In-Hand Salary in India 2026 — Monthly Breakdown & Tax',
    description: 'What is the monthly in-hand for 25 LPA CTC? Detailed tax calculation, PF, HRA breakdown for senior Indian professionals FY 2025-26.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-04-28',
    content: `
## ₹25 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹25 LPA is a top-tier salary — common for senior engineers at MNCs, product managers, and directors.

## Salary Components at 25 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (40%) | ₹10,00,000 | ₹83,333 |
| HRA (metro) | ₹5,00,000 | ₹41,667 |
| Special Allowance | ₹7,20,362 | ₹60,030 |
| Employer PF | ₹21,600 | ₹1,800 |
| Gratuity | ₹57,692 | ₹4,808 |
| **Total CTC** | **₹25,00,000** | **₹2,08,333** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ~₹35,000 |

## Final Monthly In-Hand: ~₹1,47,800

## Tax Saving Tip at 25 LPA

Max your deductions under old regime:
- 80C: ₹1.5L (ELSS/PPF)
- NPS 80CCD(1B): ₹50K
- HRA exemption: ~₹2L+
- Home loan interest 24B: ₹2L

This can save ₹8,000–₹12,000/month vs new regime. [Calculate your tax](/tax-estimator).
    `.trim()
  },
  {
    slug: 'take-home-salary-30-lpa',
    title: '30 LPA In-Hand Salary in India 2026 — Monthly Take-Home & Tax Breakdown',
    description: 'Exact monthly in-hand salary for ₹30 LPA CTC. Senior executive tax breakdown, new vs old regime comparison for FY 2025-26.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2025-04-26',
    content: `
## ₹30 LPA CTC — Monthly In-Hand Salary (FY 2025-26)

₹30 LPA puts you in the top 1% of Indian earners — common for principal engineers, AVPs, senior managers at top MNCs.

## Salary Components at 30 LPA

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic (40%) | ₹12,00,000 | ₹1,00,000 |
| HRA (metro) | ₹6,00,000 | ₹50,000 |
| Special Allowance | ₹9,20,362 | ₹76,697 |
| Employer PF | ₹21,600 | ₹1,800 |
| Gratuity | ₹69,231 | ₹5,769 |
| **Total CTC** | **₹30,00,000** | **₹2,50,000** |

## Deductions

| Deduction | Monthly |
|-----------|---------|
| Employee PF | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (New Regime) | ~₹54,167 |

## Final Monthly In-Hand: ~₹1,70,800

## Old Regime Can Save Big

With full deductions (80C + NPS + HRA + 24B):
- Old regime tax: ~₹4,50,000/year
- New regime tax: ~₹6,50,000/year
- **Saving with old regime: ~₹16,700/month**

At ₹30 LPA, **always evaluate old regime** with your CA. [Use our Tax Estimator](/tax-estimator).
    `.trim()
  },
  {
    slug: 'tcs-salary-structure-2025',
    title: 'TCS Salary Structure 2026 — Fresher & Experienced In-Hand Breakdown',
    description: 'Complete TCS salary structure for freshers and experienced professionals in 2025. Band-wise breakdown, variable pay, in-hand salary, and PF deductions explained.',
    category: 'Company Salaries',
    readTime: '7 min read',
    publishedAt: '2026-05-21',
    content: `
## TCS Salary Structure 2025 — Everything You Need to Know

Tata Consultancy Services (TCS) is India's largest IT employer with over 600,000 employees. Understanding your TCS salary structure is crucial before joining or negotiating.

## TCS Fresher Salary (2025)

For candidates joining through campus recruitment:

| Qualification | CTC Offered | Monthly In-Hand |
|---------------|-------------|-----------------|
| B.E./B.Tech (NQT) | ₹3.36 LPA | ~₹23,500 |
| B.E./B.Tech (Digital) | ₹7 LPA | ~₹49,500 |
| M.E./M.Tech | ₹7–9 LPA | ₹49,500–₹63,000 |
| MBA (Management Trainee) | ₹7–10 LPA | ₹49,500–₹70,000 |

## TCS Salary Components Breakdown (₹7 LPA Example)

| Component | Annual | Monthly |
|-----------|--------|---------|
| Basic Salary (50%) | ₹3,50,000 | ₹29,167 |
| HRA (50% of Basic) | ₹1,75,000 | ₹14,583 |
| Special Allowance | ₹1,23,731 | ₹10,311 |
| Employer PF (in CTC) | ₹18,000 | ₹1,500 |
| Gratuity Provision | ₹20,192 | ₹1,683 |
| **Total CTC** | **₹7,00,000** | **₹58,333** |

## TCS Variable Pay (VDA)

TCS includes a Variable Salary Component (VDA) based on quarterly performance:
- **Q1–Q4 rating A:** 100% variable paid
- **Rating B:** 70–80% variable paid
- **Rating C/D:** 0–50% variable paid

For freshers, variable pay is typically **₹8,000–₹15,000/quarter** at ₹7 LPA.

## TCS Experienced Salary Bands (2025)

| Band | Experience | CTC Range | Monthly In-Hand |
|------|-----------|-----------|-----------------|
| C1 (Trainee) | 0–1 years | ₹3.36–7 LPA | ₹23,500–₹49,500 |
| C2 (Developer) | 1–3 years | ₹6–10 LPA | ₹44,000–₹71,000 |
| C3 (Senior) | 3–6 years | ₹10–18 LPA | ₹71,000–₹1,25,000 |
| C4 (Lead) | 6–10 years | ₹18–28 LPA | ₹1,25,000–₹1,80,000 |
| C5 (Manager) | 10+ years | ₹28–45 LPA | ₹1,80,000–₹2,80,000 |

## TCS Benefits & Perks (Part of CTC)

- **Group Health Insurance:** Family floater ₹3–5 lakh
- **NPS:** Optional employer contribution
- **Referral Bonus:** ₹15,000–₹75,000 per referral
- **Cab/Transport:** Provided for night shifts

## TCS In-Hand at ₹7 LPA — Actual Monthly Take-Home

**Deductions:**
- Employee PF: ₹1,800/month
- Professional Tax: ₹200/month
- Income Tax: ₹0 (below ₹12L, new regime)

**Monthly In-Hand: ~₹49,500**

## TCS vs Infosys vs Wipro Fresher Salary Comparison

| Company | Fresher CTC | Monthly In-Hand |
|---------|------------|-----------------|
| TCS (Digital) | ₹7 LPA | ~₹49,500 |
| Infosys (Digital Specialist) | ₹6.25 LPA | ~₹44,000 |
| Wipro (Turbo) | ₹6.5 LPA | ~₹46,000 |
| HCL (Tech) | ₹3.5–6.5 LPA | ₹24,000–₹46,000 |
| Cognizant | ₹4–7 LPA | ₹28,000–₹49,500 |

## Frequently Asked Questions

**Q: Is TCS ₹3.36 LPA enough to survive in a metro city?**
₹3.36 LPA gives ~₹23,500/month in-hand. In tier-2 cities it's manageable. In metros like Mumbai/Bangalore, shared accommodation costs ₹8,000–₹12,000, leaving limited savings.

**Q: How to calculate my exact TCS in-hand salary?**
Use our [CTC to In-Hand Calculator](/ctc-to-inhand) — enter your TCS CTC offer and get the exact monthly take-home.

**Q: Does TCS deduct PF for ₹3.36 LPA?**
Yes. Employee PF = 12% of Basic. At ₹3.36 LPA, basic ≈ ₹14,000/month, so PF = ₹1,500/month.

**Q: Is TCS Digital vs NQT worth it for salary?**
Digital offer (₹7 LPA) is more than double NQT (₹3.36 LPA). Always target Digital/Prime roles.
    `.trim(),
  },
  {
    slug: 'infosys-salary-structure-2025',
    title: 'Infosys Salary Structure 2026 — Fresher to Senior In-Hand Breakdown',
    description: 'Infosys salary bands, fresher in-hand salary 2025, variable pay, onsite pay, and detailed monthly breakdown for all experience levels.',
    category: 'Company Salaries',
    readTime: '7 min read',
    publishedAt: '2026-05-21',
    content: `
## Infosys Salary Structure 2025 — Complete Guide

Infosys is India's second-largest IT company. Here's the complete salary breakdown for 2025.

## Infosys Fresher Salary (2025)

| Role | CTC | Monthly In-Hand |
|------|-----|-----------------|
| System Engineer (SE) | ₹3.6 LPA | ~₹25,500 |
| Digital Specialist Engineer | ₹6.25 LPA | ~₹44,000 |
| Senior Specialist (DSE) | ₹8 LPA | ~₹57,000 |
| Power Programmer (PP) | ₹9.5 LPA | ~₹67,000 |

## Infosys ₹3.6 LPA Monthly Breakdown

| Component | Monthly |
|-----------|---------|
| Basic (50%) | ₹15,000 |
| HRA (50% of Basic) | ₹7,500 |
| Special Allowance | ₹5,500 |
| Employer PF | ₹1,800 |
| **Gross** | **₹28,000** |

**Deductions:**
- Employee PF: ₹1,800
- Professional Tax: ₹200
- Income Tax: ₹0 (new regime)

**Monthly In-Hand: ~₹25,500**

## Infosys Band-Wise Salary 2025

| Band | Title | CTC Range | In-Hand/Month |
|------|-------|-----------|---------------|
| Band 2 | System Engineer | ₹3.6–5 LPA | ₹25,500–₹36,000 |
| Band 3 | Senior SE | ₹5–9 LPA | ₹36,000–₹64,000 |
| Band 4 | Tech Lead | ₹9–15 LPA | ₹64,000–₹1,06,000 |
| Band 5 | Sr Tech Lead | ₹15–22 LPA | ₹1,06,000–₹1,50,000 |
| Band 6 | Manager | ₹22–35 LPA | ₹1,50,000–₹2,20,000 |

## Infosys Variable Pay

- Variable component: 10–20% of CTC
- Paid quarterly based on company + individual performance
- At ₹3.6 LPA: ~₹6,000–₹9,000 quarterly

## Infosys Onsite Salary (USA/Europe)

- USA: $70,000–$110,000/year depending on location + Per Diem
- UK: £45,000–£70,000/year
- Australia: AUD 75,000–100,000/year

## Infosys vs New Joiners — What to Negotiate

1. Always negotiate in-hand, not CTC
2. Ask for the DSE/PP track if you have a competitive GPA or skills
3. Joining bonus is negotiable for lateral hires

## Frequently Asked Questions

**Q: What is the in-hand for Infosys ₹3.6 LPA?**
Approximately ₹25,500/month after PF and professional tax deductions. Zero income tax under new regime.

**Q: Does Infosys have a bond?**
Infosys has a 1-year service agreement. Bond amount is typically ₹1.5–2 lakh for freshers.

**Q: How long to reach ₹10 LPA at Infosys?**
Typically 3–5 years for System Engineers, faster for DSE/PP tracks. Job-hopping can accelerate this to 2–3 years.

Use our [CTC to In-Hand Calculator](/ctc-to-inhand) to calculate your exact Infosys take-home salary.
    `.trim(),
  },
  {
    slug: 'freshers-salary-it-companies-2025',
    title: 'Fresher Salary in IT Companies 2026 — TCS, Infosys, Wipro, HCL Comparison',
    description: 'Complete fresher salary comparison for top IT companies in India 2025. TCS vs Infosys vs Wipro vs HCL vs Accenture — monthly in-hand, variable pay, and growth prospects.',
    category: 'Freshers Guide',
    readTime: '8 min read',
    publishedAt: '2026-05-21',
    content: `
## Fresher Salary in IT Companies 2025 — The Complete Comparison

If you're a fresh graduate in India, choosing the right company involves understanding not just the CTC but the actual monthly in-hand salary.

## Top IT Companies Fresher Salary Comparison (2025)

| Company | CTC Range | Monthly In-Hand | Growth (3 yrs) |
|---------|-----------|-----------------|----------------|
| TCS (Digital) | ₹7 LPA | ~₹49,500 | ₹10–14 LPA |
| TCS (NQT) | ₹3.36 LPA | ~₹23,500 | ₹5–7 LPA |
| Infosys (DSE) | ₹6.25 LPA | ~₹44,000 | ₹9–12 LPA |
| Infosys (SE) | ₹3.6 LPA | ~₹25,500 | ₹5–7 LPA |
| Wipro (Turbo) | ₹6.5 LPA | ~₹46,000 | ₹9–12 LPA |
| Wipro (Elite) | ₹3.5 LPA | ~₹24,500 | ₹5–7 LPA |
| HCL (Tech) | ₹3.5–6.5 LPA | ₹24,500–₹46,000 | ₹8–12 LPA |
| Cognizant (GenC Next) | ₹7 LPA | ~₹49,500 | ₹10–14 LPA |
| Accenture (ASE) | ₹4.5 LPA | ~₹32,000 | ₹7–10 LPA |
| Capgemini | ₹4–6 LPA | ₹28,000–₹43,000 | ₹7–10 LPA |
| Tech Mahindra | ₹3.5–6 LPA | ₹24,000–₹43,000 | ₹6–9 LPA |

## Monthly In-Hand Salary at ₹3.6 LPA (Infosys SE Level)

This is the most common fresher offer. Here's the exact breakdown:

| Component | Monthly |
|-----------|---------|
| Basic Salary | ₹15,000 |
| HRA | ₹7,500 |
| Special Allowance | ₹5,200 |
| **Gross** | **₹27,700** |
| Less: Employee PF | ₹1,800 |
| Less: Professional Tax | ₹200 |
| Less: Income Tax | ₹0 |
| **Net In-Hand** | **~₹25,700** |

## Monthly In-Hand Salary at ₹7 LPA (TCS Digital / Cognizant GenC Next)

| Component | Monthly |
|-----------|---------|
| Basic Salary | ₹29,167 |
| HRA (Metro) | ₹14,583 |
| Special Allowance | ₹10,311 |
| **Gross** | **₹54,061** |
| Less: Employee PF | ₹1,800 |
| Less: Professional Tax | ₹200 |
| Less: Income Tax | ₹0 (zero tax under ₹12L new regime) |
| **Net In-Hand** | **~₹52,061** |

## City-Wise Take-Home for ₹7 LPA Freshers

| City | Monthly In-Hand | Rent (PG/Shared) | Savings |
|------|-----------------|------------------|---------|
| Bangalore | ~₹49,500 | ₹8,000–₹15,000 | ₹25,000–₹35,000 |
| Hyderabad | ~₹49,500 | ₹6,000–₹12,000 | ₹28,000–₹38,000 |
| Pune | ~₹49,500 | ₹7,000–₹13,000 | ₹26,000–₹35,000 |
| Chennai | ~₹49,500 | ₹6,000–₹10,000 | ₹30,000–₹38,000 |
| Mumbai | ~₹49,500 | ₹10,000–₹18,000 | ₹20,000–₹30,000 |

## Which Company Should You Choose?

**For maximum in-hand salary:** TCS Digital, Cognizant GenC Next (₹7 LPA)
**For work-life balance:** Infosys, TCS (better than product companies)
**For fastest growth:** Product startups, but riskier
**For onsite opportunities:** Infosys, Wipro have frequent US/UK postings

## How to Increase Your Fresher In-Hand Salary

1. **Clear TCS Digital/NQT Prime or Infosys DSE/PP tracks** — 2x the salary
2. **Target niche skills**: Cloud (AWS/Azure), Data Science, DevOps pay premium
3. **Job-hop after 1.5–2 years** — typically 40–60% hike vs internal raise of 8–12%
4. **Negotiate joining bonus** for lateral moves

## Frequently Asked Questions

**Q: Is ₹3.6 LPA enough as a fresher?**
It depends on city. In tier-2 cities like Coimbatore/Jaipur, ₹25,000/month is comfortable. In Bangalore or Mumbai, it's tight.

**Q: Can I switch from TCS NQT to TCS Digital?**
Yes — through internal exams (TCS Xplore, Digital Capability Assessment) after joining.

**Q: What's the in-hand for TCS ₹3.36 LPA in Bangalore?**
~₹23,500/month. After rent (₹8,000–₹12,000) and food (₹5,000–₹6,000), savings are ₹5,000–₹10,000.

Calculate your exact take-home: [In-Hand Salary Calculator](/in-hand-salary-calculator)
    `.trim(),
  },
  {
    slug: 'how-to-read-salary-slip-india-2025',
    title: 'How to Read Your Salary Slip in India 2026 — Every Component Explained',
    description: 'Complete guide to reading an Indian salary slip in 2025. Understand every component — Basic, HRA, PF, TDS, ESI, Special Allowance — with worked examples.',
    category: 'Salary Guide',
    readTime: '8 min read',
    publishedAt: '2026-05-21',
    content: `
## How to Read Your Salary Slip in India — Complete Guide 2025

Your salary slip (payslip) is the most important financial document you receive every month. Yet most employees don't understand half the components. Here's a complete breakdown.

## Sample Indian Salary Slip (₹10 LPA CTC)

**Employee:** Software Engineer | **Month:** May 2025

### EARNINGS

| Component | Monthly Amount |
|-----------|----------------|
| Basic Salary | ₹41,667 |
| House Rent Allowance (HRA) | ₹20,833 |
| Special Allowance | ₹14,600 |
| **Gross Earnings** | **₹77,100** |

### DEDUCTIONS

| Component | Monthly Amount |
|-----------|----------------|
| Employee PF (12% of Basic) | ₹1,800 |
| Professional Tax | ₹200 |
| Income Tax (TDS) | ₹0 |
| **Total Deductions** | **₹2,000** |

### **NET PAY (In-Hand): ₹75,100**

## Every Earnings Component Explained

### 1. Basic Salary
- Typically **40–50% of CTC**
- Foundation for all other calculations
- Higher basic = higher PF, HRA, Gratuity

### 2. HRA (House Rent Allowance)
- **Metro city:** 50% of basic | **Non-metro:** 40% of basic
- Tax-exempt under old regime if you pay rent (Section 10(13A))
- **Not exempt under new regime**

### 3. Special Allowance
- The "balancing" component: CTC − Basic − HRA − Employer PF − Gratuity = Special Allowance
- **Fully taxable** — no exemption
- Companies use this to fill the CTC gap

### 4. LTA (Leave Travel Allowance)
- For domestic travel expenses
- Tax-exempt twice in a 4-year block (old regime)
- Must submit travel proof (tickets, boarding passes)

### 5. Food Allowance / Meal Coupon
- Up to **₹2,200/month tax-free** (as per current rules)
- Usually given as Sodexo/Zeta meal cards

## Every Deduction Component Explained

### 1. Employee PF (EPF)
- **12% of Basic Salary** (capped at ₹1,800/month)
- Goes to your EPFO account, earns **8.25% interest (FY 2025-26)**
- Tax-free maturity amount (after 5 years)
- Check your UAN on [epfindia.gov.in](https://www.epfindia.gov.in)

### 2. Professional Tax (PT)
- State-specific tax, typically **₹200/month (₹2,400/year)**
- **States with PT:** Maharashtra, Karnataka, Tamil Nadu, West Bengal, Andhra Pradesh, Telangana
- **States without PT:** Delhi, Rajasthan, Haryana, UP

### 3. TDS (Tax Deducted at Source)
- Income tax deducted monthly by employer
- Based on your **projected annual income and declared deductions**
- Under new regime for ₹0–12 LPA: **₹0 TDS**
- Submit **Form 12BB** to declare deductions (old regime)

### 4. ESI (Employee State Insurance)
- Only if your **gross salary ≤ ₹21,000/month**
- Employee contribution: **0.75% of gross**
- Employer contribution: **3.25% of gross**
- Provides health insurance benefits

## What's NOT on Your Payslip (But in CTC)

| Component | Why Not in Payslip | Where It Goes |
|-----------|-------------------|---------------|
| Employer PF | Paid directly to EPFO | Your PF account |
| Gratuity | Accrues over 5 years | Paid on exit after 5 yrs |
| Health Insurance | Paid to insurer | Group insurance |

## How to Verify Your Salary Slip Is Correct

1. **Check Basic:** Should be 40–50% of monthly CTC
2. **Check PF:** Should be exactly 12% of Basic (max ₹1,800)
3. **Check TDS:** Use our [Tax Estimator](/tax-estimator) to verify
4. **Check Gross:** Basic + HRA + Allowances should match your offer letter gross

## Frequently Asked Questions

**Q: Why is my in-hand much less than CTC ÷ 12?**
CTC includes employer PF and gratuity, which are NOT paid monthly. Use our [CTC to In-Hand Calculator](/ctc-to-inhand).

**Q: Can I ask HR to restructure my salary?**
Yes. Ask to increase HRA, add food coupons, LTA — these reduce your tax liability legally.

**Q: What if my employer deducts excess TDS?**
File your ITR and get a refund. Excess TDS is always refunded by the Income Tax Department.

**Q: Is professional tax mandatory?**
Yes if you're in a state that levies it. It's ₹2,400/year max and is deductible from income.
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts.filter(p => p.slug !== currentSlug).slice(0, limit);
}

