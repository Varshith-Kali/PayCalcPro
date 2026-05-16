'use client'
import { useState } from 'react'

interface FAQItem { question: string; answer: string }

export default function FAQSection({ faqs, title = 'Frequently Asked Questions', schema = true }: { faqs: FAQItem[]; title?: string; schema?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-12">
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }) }} />
      )}
      <div className="mb-8">
        <span className="section-badge">❓ FAQs</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
              <span>{faq.question}</span>
              <svg className={`w-5 h-5 text-sky-500 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
