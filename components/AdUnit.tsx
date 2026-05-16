'use client'
import { useEffect } from 'react'

declare global {
  interface Window { adsbygoogle: unknown[] }
}

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'fluid'
  layout?: string
  className?: string
  style?: React.CSSProperties
  label?: string
}

/**
 * AdUnit Component — Google AdSense
 * Publisher: ca-pub-7840512374734019
 *
 * SLOT IDs — create these in your AdSense dashboard → Ads → By ad unit:
 *   Top Banner (728×90 / responsive):  slot="1111111111"
 *   Sidebar Rectangle (300×250):       slot="2222222222"
 *   In-Content (responsive):           slot="3333333333"
 *   Below Results (responsive):        slot="4444444444"
 *   Footer Banner (728×90):            slot="5555555555"
 *
 * Replace the 10-digit IDs above with your real slot IDs from AdSense.
 */
export default function AdUnit({
  slot,
  format = 'auto',
  layout,
  className = '',
  style,
  label = 'Advertisement',
}: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // adsbygoogle not yet loaded
    }
  }, [slot])

  return (
    <div className={`ad-unit-wrap ${className}`} aria-label={label} role="complementary">
      <p className="text-[10px] text-center text-gray-300 uppercase tracking-widest mb-1 select-none">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: 50, ...style }}
        data-ad-client="ca-pub-7840512374734019"
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive="true"
      />
    </div>
  )
}
