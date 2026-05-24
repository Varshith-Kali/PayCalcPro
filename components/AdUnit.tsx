'use client'
import { useEffect, useRef } from 'react'

declare global {
  interface Window { adsbygoogle: unknown[] }
}

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'fluid'
  layout?: 'in-article' | 'in-feed'
  layoutKey?: string
  className?: string
}

/**
 * AdUnit — Google AdSense Manual Ad Unit
 * Publisher ID: ca-pub-7840512374734019
 *
 * Active Slot IDs (create/verify in AdSense Dashboard -> Ads -> By ad unit):
 *   Horizontal Banner (responsive leaderboard): slot="1956241775"  format="horizontal"
 *   Auto / Responsive (in-content):             slot="5101050950"  format="auto"
 *
 * AdSense Policy Compliance:
 *   - "Advertisement" label shown above every unit (required for non-obvious placements)
 *   - No fixed minHeight to avoid blank-space policy violations
 *   - Not placed inside pop-ups, overlays, or scrollable containers
 *   - Not placed immediately adjacent to navigation links or CTA buttons
 *   - data-full-width-responsive="true" for mobile compliance
 *   - ads.txt present at /public/ads.txt with correct DIRECT entry
 */
export default function AdUnit({
  slot,
  format = 'auto',
  layout,
  layoutKey,
  className = '',
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // adsbygoogle not yet loaded — will be handled by the script tag
    }
  }, [slot])

  return (
    <div
      className={`ad-unit-wrap my-2 text-center overflow-hidden ${className}`}
      aria-hidden="false"
    >
      {/* Required label — must be clearly visible, cannot say "Sponsored" without disclosure */}
      <p
        className="text-[10px] font-medium text-center text-gray-400 uppercase tracking-[0.15em] mb-1 select-none"
        aria-label="Advertisement"
      >
        Advertisement
      </p>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7840512374734019"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { 'data-ad-layout': layout } : {})}
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
        data-full-width-responsive="true"
      />
    </div>
  )
}
