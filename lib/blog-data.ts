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
    title: 'How to Calculate In-Hand Salary from CTC in India (2024)',
    description: 'Learn the exact formula to convert your CTC to monthly take-home salary. Understand PF, HRA, professional tax deductions step-by-step.',
    category: 'Salary Guide',
    readTime: '6 min read',
    publishedAt: '2024-11-15',
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
    publishedAt: '2024-11-10',
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
    publishedAt: '2024-11-05',
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
    publishedAt: '2024-10-28',
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
    publishedAt: '2024-10-20',
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
    title: 'Take Home Salary for 10 LPA in India (2024) — Exact Breakdown',
    description: 'Exact monthly in-hand salary for ₹10 LPA CTC in India. Complete breakdown with PF, HRA, tax deductions, and city-wise differences.',
    category: 'Salary Examples',
    readTime: '5 min read',
    publishedAt: '2024-10-12',
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
    publishedAt: '2024-10-05',
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
    title: 'How Gratuity is Calculated in India — Complete Guide 2024',
    description: 'Complete guide to gratuity calculation in India. Formula, eligibility, tax rules, and worked examples for ₹10L, ₹15L, ₹20L salaries.',
    category: 'Benefits',
    readTime: '6 min read',
    publishedAt: '2024-09-28',
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
    publishedAt: '2024-09-20',
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
    publishedAt: '2024-09-12',
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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts.filter(p => p.slug !== currentSlug).slice(0, limit);
}
