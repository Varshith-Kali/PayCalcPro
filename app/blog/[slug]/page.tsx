import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data'
import AdUnit from '@/components/AdUnit'

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: 'article', publishedTime: post.publishedAt },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  }
}

function ContentBlock({ line }: { line: string }) {
  const html = line
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-sky-600 hover:underline font-medium">$1</a>')
  return <p className="text-slate-700 text-base leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: html }} />
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const result: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) { i++; continue }

    if (line.startsWith('## ')) {
      result.push(<h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-4">{line.slice(3)}</h2>)
      i++; continue
    }

    if (line.startsWith('### ')) {
      result.push(<h3 key={i} className="text-xl font-bold text-slate-800 mt-6 mb-3">{line.slice(4)}</h3>)
      i++; continue
    }

    if (line.startsWith('```')) {
      const code: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) { code.push(lines[i]); i++ }
      result.push(<pre key={i} className="bg-slate-900 text-emerald-400 rounded-xl p-4 font-mono text-xs my-5 overflow-x-auto">{code.join('\n')}</pre>)
      i++; continue
    }

    if (line.startsWith('> ')) {
      result.push(<blockquote key={i} className="border-l-4 border-sky-400 pl-4 py-1 text-slate-600 italic my-4 text-sm">{line.slice(2)}</blockquote>)
      i++; continue
    }

    if (line.startsWith('| ')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) { tableLines.push(lines[i]); i++ }
      const rows = tableLines.filter(r => !/^\|[-| ]+\|$/.test(r))
      const headers = rows[0]?.split('|').filter(Boolean).map(h => h.trim()) ?? []
      const bodyRows = rows.slice(1)
      result.push(
        <div key={i} className="overflow-x-auto rounded-xl border border-slate-100 my-5">
          <table className="data-table w-full">
            <thead><tr>{headers.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri}>{row.split('|').filter(Boolean).map((cell, ci) => <td key={ci}>{cell.trim()}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    if (/^\d+\./.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\./.test(lines[i])) { items.push(lines[i].replace(/^\d+\.\s*/, '')); i++ }
      result.push(<ol key={i} className="list-decimal list-inside space-y-2 my-4 text-slate-700 text-sm leading-relaxed">{items.map((it, j) => <li key={j}>{it}</li>)}</ol>)
      continue
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) { items.push(lines[i].slice(2)); i++ }
      result.push(<ul key={i} className="list-disc list-inside space-y-2 my-4 text-slate-700 text-sm leading-relaxed">{items.map((it, j) => <li key={j}>{it}</li>)}</ul>)
      continue
    }

    result.push(<ContentBlock key={i} line={line} />)
    i++
  }

  return result
}

export default function BlogArticlePage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()
  const related = getRelatedPosts(params.slug, 3)

  const articleSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'PayCalc Pro' },
    publisher: { '@type': 'Organization', name: 'PayCalc Pro', url: 'https://paycalcpro.com' },
  })

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="breadcrumb mb-5 text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-slate-300 line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
            <span className="text-slate-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
          <p className="text-slate-300 text-lg">{post.description}</p>
          <div className="mt-5 flex items-center gap-4 text-sm text-slate-400">
            <span>By PayCalc Pro Team</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <article className="lg:col-span-3">
            {/* Ad: Top of article — clearly separated from content */}
            <div className="mb-6">
              <AdUnit slot="1956241775" format="horizontal" />
            </div>

            <div>{renderContent(post.content)}</div>

            {/* Ad: Mid-article — after content body, before CTA */}
            <div className="mt-8 mb-6">
              <AdUnit slot="5101050950" format="auto" />
            </div>

            <div className="mt-4 bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-slate-900 text-lg mb-2">Try Our Free Salary Calculator</h3>
              <p className="text-slate-500 text-sm mb-5">Get instant results — no account needed</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/ctc-to-inhand" className="btn-primary">CTC to In-Hand →</Link>
                <Link href="/tax-estimator" className="btn-secondary">Tax Estimator →</Link>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="sticky top-24">
              {/* Sidebar Ad — top of sticky sidebar */}
              <AdUnit slot="5101050950" format="auto" className="mb-4" />

              <div className="card-flat p-5">
                <h3 className="font-bold text-slate-800 text-sm mb-4">Quick Calculators</h3>
                <div className="space-y-2">
                  {[
                    { href: '/ctc-to-inhand', label: 'CTC to In-Hand' },
                    { href: '/pf-calculator', label: 'PF Calculator' },
                    { href: '/hra-calculator', label: 'HRA Calculator' },
                    { href: '/tax-estimator', label: 'Tax Estimator' },
                    { href: '/gratuity-calculator', label: 'Gratuity Calc' },
                  ].map(l => (
                    <Link key={l.href} href={l.href} className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 transition-colors text-sm text-slate-600 hover:text-sky-700">
                      {l.label} <span className="text-slate-300">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {related.length > 0 && (
                <div className="card-flat p-5 mt-5">
                  <h3 className="font-bold text-slate-800 text-sm mb-4">📖 Related Articles</h3>
                  <div className="space-y-4">
                    {related.map(r => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="block group">
                        <p className="text-sm text-slate-700 group-hover:text-sky-600 transition-colors font-medium line-clamp-2 leading-snug">{r.title}</p>
                        <span className="text-xs text-slate-400 mt-1 block">{r.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
