'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface UseScrollTriggerProps {
  trigger?: string | React.RefObject<HTMLElement>
  startTrigger?: string
  endTrigger?: string
  onEnter?: () => void
  onLeave?: () => void
  scrub?: number | boolean
  markers?: boolean
}

/**
 * Custom hook for GSAP ScrollTrigger animations
 * Makes it easy to create scroll-based timeline sequences
 */
export function useScrollTrigger({
  trigger,
  startTrigger = 'top center',
  endTrigger = 'bottom center',
  onEnter,
  onLeave,
  scrub = false,
  markers = false,
}: UseScrollTriggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggerElement = trigger || containerRef.current
    if (!triggerElement) return

    // Handle RefObject type by getting .current
    const triggerTarget = typeof triggerElement === 'object' && 'current' in triggerElement 
      ? triggerElement.current 
      : triggerElement

    if (!triggerTarget) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerTarget,
      start: startTrigger,
      end: endTrigger,
      markers,
      onEnter: () => {
        onEnter?.()
      },
      onLeave: () => {
        onLeave?.()
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [trigger, startTrigger, endTrigger, onEnter, onLeave, markers])

  return containerRef
}

/**
 * Create a GSAP timeline that syncs with scroll
 */
export function useScrollTimeline(
  callback: (timeline: gsap.core.Timeline) => void,
  trigger?: string | React.RefObject<HTMLElement>
) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggerElement = trigger || containerRef.current
    if (!triggerElement) return

    // Handle RefObject type by getting .current
    const triggerTarget = typeof triggerElement === 'object' && 'current' in triggerElement 
      ? triggerElement.current 
      : triggerElement

    if (!triggerTarget) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerTarget,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    })

    callback(tl)

    return () => {
      tl.kill()
    }
  }, [trigger, callback])

  return containerRef
}
