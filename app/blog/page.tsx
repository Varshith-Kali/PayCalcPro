import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Salary Blog – Guides on CTC, PF, HRA, Tax & Salary Negotiation',
  description: 'Expert guides on Indian salary structure, tax saving tips, PF, HRA exemption, gratuity, and salary negotiation. Written for Indian professionals.',
}

const categories = ['All', 'Salary Guide', 'Tax Savings', 'PF & Savings', 'Career Tips', 'Freshers Guide', 'Salary Examples', 'Benefits']

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-badge bg-sky-500/20 border-sky-500/30 text-sky-300 mb-4 inline-flex">📝 Blog</span>
          <h1 className="text-4xl font-bold text-white mb-3">Salary & Finance Guides</h1>
          <p className="text-slate-300 text-lg max-w-2xl">In-depth articles on Indian salary structure, tax optimization, PF, HRA, and career finance. Written for salaried professionals.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <span key={cat} className="px-4 py-2 rounded-full text-sm font-medium border border-slate-200 text-slate-600 cursor-pointer hover:border-sky-400 hover:text-sky-600 transition-colors">
              {cat}
            </span>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card block group">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="blog-tag">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-slate-400" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </time>
                  <span className="text-sky-500 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Internal Links CTA */}
        <div className="mt-16 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 text-center border border-sky-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Try Our Free Calculators</h2>
          <p className="text-slate-500 mb-6">Put your learnings to use with our instant salary calculators</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/ctc-to-inhand', label: 'CTC to In-Hand' },
              { href: '/pf-calculator', label: 'PF Calculator' },
              { href: '/hra-calculator', label: 'HRA Calculator' },
              { href: '/tax-estimator', label: 'Tax Estimator' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="btn-secondary text-sm">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
