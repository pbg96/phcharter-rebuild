'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const FRAME_COUNT  = 286
const FRAME_SPEED  = 2.0
const IMAGE_SCALE  = 0.85
const BG_COLOR     = '#07071A'
const SCROLL_HT    = '650vh'

const MARQUEE = 'SOARING TO SUCCESS · ENTREPRENEURSHIP · INNOVATION · PITTSBURGH · K–8 · WHERE STUDENTS LEAD · '

interface Stat { value?: number; display?: string; suffix?: string; label: string }

interface Section {
  id: string
  type: 'content' | 'stats' | 'cta'
  label?: string
  heading?: string
  body?: string
  align?: 'left' | 'right'
  enter: number
  leave: number
  animation: string
  persist?: boolean
  stats?: Stat[]
}

const SECTIONS: Section[] = [
  {
    id: 'about', type: 'content',
    label: '001 / About',
    heading: 'Where Entrepreneurs Are Born',
    body: 'Since 2011, PHCSE has educated hundreds of students from 15+ school districts — giving every child a real-world classroom and a lifetime of skills.',
    align: 'left', enter: 14, leave: 30, animation: 'fade-up',
  },
  {
    id: 'learning', type: 'content',
    label: '002 / Learning',
    heading: 'Real-World Learning, Every Day',
    body: "From running their own businesses in MicroSociety® to pitching at Soaring Shark Tank, our students don't just study entrepreneurship — they live it.",
    align: 'right', enter: 30, leave: 46, animation: 'slide-right',
  },
  {
    id: 'innovation', type: 'content',
    label: '003 / Innovation',
    heading: 'STEM Meets Business',
    body: 'Our interdisciplinary curriculum weaves entrepreneurship into every subject — building complete thinkers, creative problem-solvers, and future leaders.',
    align: 'left', enter: 46, leave: 60, animation: 'slide-left',
  },
  {
    id: 'stats', type: 'stats',
    enter: 58, leave: 74, animation: 'stagger-up',
    stats: [
      { value: 15,  suffix: '+', label: 'School Districts' },
      { display: '2011',         label: 'Year Founded' },
      { value: 300, suffix: '+', label: 'Students' },
      { display: 'K–8',         label: 'Grade Levels' },
    ],
  },
  {
    id: 'cta', type: 'cta',
    label: 'Enroll Today',
    heading: "Your Child's Story Starts Here",
    body: 'Penn Hills Charter School of Entrepreneurship — where every student discovers the pathway to lifelong success.',
    enter: 76, leave: 92, animation: 'clip-reveal', persist: true,
  },
]

function frameSrc(i: number) {
  return `/video-experience/frames/frame_${String(i + 1).padStart(4, '0')}.jpg`
}

export function VideoExperience() {
  const wrapperRef  = useRef<HTMLDivElement>(null)
  const framesRef   = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null))
  const frameRef    = useRef(-1)
  const pendingRef  = useRef(false)
  const sectionState = useRef<Map<string, 'idle' | 'active'>>(new Map())
  const countersDone = useRef(new Set<string>())

  useEffect(() => {
    const _w = wrapperRef.current
    if (!_w) return
    const wrapper = _w   // definite HTMLDivElement — TS propagates this into closures
    const canvas = wrapper.querySelector<HTMLCanvasElement>('canvas')!
    const ctx    = canvas.getContext('2d')!
    let dead = false

    // ── canvas resize ──────────────────────────────────────────────
    function resize() {
      if (dead) return
      const dpr = window.devicePixelRatio || 1
      canvas.width  = Math.round(window.innerWidth  * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
      canvas.style.width  = window.innerWidth  + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (frameRef.current >= 0) draw(frameRef.current)
    }

    function draw(idx: number) {
      const img = framesRef.current[idx]
      if (!img) return
      const cw = window.innerWidth, ch = window.innerHeight
      const { naturalWidth: iw, naturalHeight: ih } = img
      if (!iw || !ih) return
      const scale = Math.max(cw / iw, ch / ih) * IMAGE_SCALE
      const dw = iw * scale, dh = ih * scale
      ctx.fillStyle = BG_COLOR
      ctx.fillRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
    }

    function scheduleDraw(idx: number) {
      if (pendingRef.current) return
      pendingRef.current = true
      requestAnimationFrame(() => { pendingRef.current = false; if (!dead) draw(idx) })
    }

    function loadFrame(i: number) {
      if (framesRef.current[i]) return Promise.resolve()
      return new Promise<void>(res => {
        const img = new Image()
        img.onload  = () => { framesRef.current[i] = img; res() }
        img.onerror = () => res()
        img.src = frameSrc(i)
      })
    }

    // ── progress ───────────────────────────────────────────────────
    function progress() {
      const rect  = wrapper.getBoundingClientRect()
      const total = wrapper.offsetHeight - window.innerHeight
      return Math.max(0, Math.min(1, -rect.top / total))
    }

    // ── frame scrub ────────────────────────────────────────────────
    function updateFrame(p: number) {
      const idx = Math.min(Math.floor(Math.min(1, p * FRAME_SPEED) * FRAME_COUNT), FRAME_COUNT - 1)
      if (idx !== frameRef.current) { frameRef.current = idx; scheduleDraw(idx) }
    }

    // ── dark overlay ───────────────────────────────────────────────
    function updateOverlay(p: number) {
      const el = wrapper.querySelector<HTMLElement>('.ve-overlay')
      if (!el) return
      const en = 0.55, lv = 0.74, fd = 0.04
      let o = 0
      if      (p >= en - fd && p < en)      o = ((p - (en - fd)) / fd) * 0.9
      else if (p >= en      && p <= lv)     o = 0.9
      else if (p > lv       && p <= lv + fd) o = 0.9 * (1 - (p - lv) / fd)
      el.style.opacity = String(o)
    }

    // ── marquee ────────────────────────────────────────────────────
    function updateMarquee(p: number) {
      const el   = wrapper.querySelector<HTMLElement>('.ve-marquee')
      const text = wrapper.querySelector<HTMLElement>('.ve-marquee-text')
      if (!el) return
      el.style.opacity = (p >= 0.22 && p <= 0.80) ? '1' : '0'
      if (text) text.style.transform = `translateX(${p * -30}vw)`
    }

    // ── section enter / leave animations ──────────────────────────
    function animIn(section: Element, type: string) {
      const kids = Array.from(section.querySelectorAll<HTMLElement>('[data-anim]'))
      kids.forEach((el, i) => {
        el.style.transition = 'none'
        el.style.opacity    = '0'
        switch (type) {
          case 'fade-up':     el.style.transform = 'translateY(50px)'; break
          case 'slide-left':  el.style.transform = 'translateX(-80px)'; break
          case 'slide-right': el.style.transform = 'translateX(80px)'; break
          case 'stagger-up':  el.style.transform = 'translateY(60px)'; break
          case 'clip-reveal': el.style.clipPath  = 'inset(100% 0 0 0)'; break
        }
        const delay = `${i * 0.13}s`
        requestAnimationFrame(() => {
          el.style.transition = `opacity .9s ease ${delay}, transform .9s ease ${delay}, clip-path 1.2s cubic-bezier(.77,0,.175,1) ${delay}`
          el.style.opacity    = '1'
          el.style.transform  = ''
          el.style.clipPath   = ''
        })
      })
    }

    function animOut(section: Element) {
      section.querySelectorAll<HTMLElement>('[data-anim]').forEach(el => {
        el.style.transition = 'none'
        el.style.opacity    = '0'
        el.style.transform  = ''
        el.style.clipPath   = ''
      })
    }

    // ── counters ───────────────────────────────────────────────────
    function counter(id: string, target: number) {
      if (countersDone.current.has(id)) return
      countersDone.current.add(id)
      const el = wrapper.querySelector<HTMLElement>(`[data-counter="${id}"]`)
      if (!el) return
      const t0 = performance.now()
      const tick = (now: number) => {
        if (dead) return
        const t = Math.min((now - t0) / 1600, 1)
        el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * target).toLocaleString()
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    // ── section visibility ─────────────────────────────────────────
    function updateSections(p: number) {
      SECTIONS.forEach(sec => {
        const en  = sec.enter / 100
        const lv  = sec.leave / 100
        const el  = wrapper.querySelector<HTMLElement>(`[data-section="${sec.id}"]`)
        if (!el) return
        const state = sectionState.current.get(sec.id) ?? 'idle'
        const inRange = p >= en && p <= lv
        const past    = p > lv

        if (inRange) {
          el.style.opacity      = '1'
          el.style.pointerEvents = 'auto'
          if (state !== 'active') {
            sectionState.current.set(sec.id, 'active')
            animIn(el, sec.animation)
            if (sec.id === 'stats') {
              counter('districts', 15)
              counter('students',  300)
            }
          }
        } else if (past && sec.persist) {
          el.style.opacity      = '1'
          el.style.pointerEvents = 'auto'
        } else {
          el.style.opacity      = '0'
          el.style.pointerEvents = 'none'
          if (state === 'active') {
            sectionState.current.set(sec.id, 'idle')
            animOut(el)
            if (sec.id === 'stats') {
              countersDone.current.delete('districts')
              countersDone.current.delete('students')
            }
          }
        }
      })
    }

    // ── scroll handler ─────────────────────────────────────────────
    function onScroll() {
      if (dead) return
      const p = progress()
      updateFrame(p)
      updateOverlay(p)
      updateMarquee(p)
      updateSections(p)
    }

    // ── boot via IntersectionObserver ──────────────────────────────
    let started = false
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        io.disconnect()

        resize()

        // First frame eager, then rest progressive
        await loadFrame(0)
        if (dead) return
        draw(0)
        frameRef.current = 0

        window.addEventListener('scroll',  onScroll, { passive: true })
        window.addEventListener('resize',  resize)
        onScroll()

        // Load frames ahead of likely scroll position (batch of 10)
        for (let i = 1; i < FRAME_COUNT && !dead; i += 10) {
          await Promise.all(
            Array.from({ length: Math.min(10, FRAME_COUNT - i) }, (_, k) => loadFrame(i + k))
          )
        }
      },
      { threshold: 0.01 }
    )
    io.observe(wrapper)

    return () => {
      dead = true
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const marqueeFill = MARQUEE.repeat(8)

  return (
    <div ref={wrapperRef} style={{ height: SCROLL_HT, position: 'relative' }}>
      {/* Sticky viewport panel */}
      <div
        style={{
          position: 'sticky', top: 0, height: '100vh',
          overflow: 'hidden', background: BG_COLOR,
        }}
      >
        {/* Frame canvas */}
        <canvas style={{ position: 'absolute', inset: 0, display: 'block' }} />

        {/* Dark overlay (stats + cta) */}
        <div
          className="ve-overlay"
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(7,7,26,0.92)',
            opacity: 0, pointerEvents: 'none',
          }}
        />

        {/* Marquee */}
        <div
          className="ve-marquee"
          style={{
            position: 'absolute', bottom: '3rem', left: 0, right: 0,
            overflow: 'hidden', pointerEvents: 'none',
            opacity: 0, transition: 'opacity .6s',
            height: 'clamp(7vw,10vw,12vw)',
            display: 'flex', alignItems: 'center',
          }}
        >
          <div
            className="ve-marquee-text"
            style={{
              whiteSpace: 'nowrap', display: 'inline-block',
              fontSize: '8vw', fontWeight: 800, lineHeight: 1,
              color: 'rgba(240,237,232,0.055)',
              letterSpacing: '-0.02em', willChange: 'transform',
            }}
          >
            {marqueeFill}
          </div>
        </div>

        {/* ── Content overlay sections ─────────────────────────────── */}
        {SECTIONS.map(sec => {
          if (sec.type === 'stats') {
            return (
              <div
                key={sec.id}
                data-section={sec.id}
                style={{
                  position: 'absolute', inset: 0, zIndex: 7,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0, pointerEvents: 'none',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4,1fr)',
                    gap: '48px 64px', textAlign: 'center', padding: '0 40px',
                  }}
                >
                  {sec.stats!.map((stat, i) => (
                    <div
                      key={i}
                      data-anim=""
                      style={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', gap: '10px', opacity: 0,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                        {stat.display ? (
                          <span style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 800, color: '#F0EDE8', letterSpacing: '-0.03em' }}>
                            {stat.display}
                          </span>
                        ) : (
                          <>
                            <span
                              data-counter={stat.label === 'School Districts' ? 'districts' : 'students'}
                              style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 800, color: '#F0EDE8', letterSpacing: '-0.03em' }}
                            >
                              0
                            </span>
                            {stat.suffix && (
                              <span style={{ fontSize: 'clamp(1.75rem,4vw,3.5rem)', fontWeight: 800, color: '#F4C03E', lineHeight: 1 }}>
                                {stat.suffix}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(240,237,232,0.65)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          if (sec.type === 'cta') {
            return (
              <div
                key={sec.id}
                data-section={sec.id}
                style={{
                  position: 'absolute', inset: 0, zIndex: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(12,2,151,0.94)',
                  opacity: 0, pointerEvents: 'none',
                }}
              >
                <div style={{ textAlign: 'center', maxWidth: '680px', padding: '0 32px' }}>
                  <span data-anim="" style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: '#F4C03E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0 }}>
                    {sec.label}
                  </span>
                  <h2 data-anim="" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 700, lineHeight: 1.15, color: '#F0EDE8', marginBottom: '24px', letterSpacing: '-0.02em', opacity: 0 }}>
                    {sec.heading}
                  </h2>
                  <p data-anim="" style={{ fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', lineHeight: 1.75, color: 'rgba(240,237,232,0.7)', maxWidth: '520px', margin: '0 auto 40px', opacity: 0 }}>
                    {sec.body}
                  </p>
                  <div data-anim="" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
                    <a
                      href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'inline-block', fontSize: '0.78rem', fontWeight: 700,
                        letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                        padding: '14px 36px', background: '#F4C03E', color: '#0A0A18',
                        border: '2px solid #F4C03E',
                      }}
                    >
                      Enroll Now
                    </a>
                    <Link
                      href="/about"
                      style={{
                        display: 'inline-block', fontSize: '0.78rem', fontWeight: 700,
                        letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                        padding: '14px 36px', background: 'transparent', color: '#F0EDE8',
                        border: '2px solid rgba(240,237,232,0.4)',
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            )
          }

          // Content: about / learning / innovation
          const isRight = sec.align === 'right'
          return (
            <div
              key={sec.id}
              data-section={sec.id}
              style={{
                position: 'absolute', inset: 0, zIndex: 6,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: isRight ? 'flex-end' : 'flex-start',
                paddingBottom: '10vh',
                background: isRight
                  ? 'linear-gradient(-90deg, rgba(7,7,26,.88) 0%, rgba(7,7,26,.72) 30%, rgba(7,7,26,0) 58%)'
                  : 'linear-gradient(90deg, rgba(7,7,26,.88) 0%, rgba(7,7,26,.72) 30%, rgba(7,7,26,0) 58%)',
                opacity: 0, pointerEvents: 'none',
              }}
            >
              <div style={{ padding: '0 6vw', maxWidth: '42vw' }}>
                <span data-anim="" style={{ display: 'block', fontSize: '0.68rem', fontWeight: 600, color: '#F4C03E', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px', opacity: 0 }}>
                  {sec.label}
                </span>
                <h2 data-anim="" style={{ fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.15, color: '#F0EDE8', marginBottom: '20px', letterSpacing: '-0.02em', opacity: 0 }}>
                  {sec.heading}
                </h2>
                <p data-anim="" style={{ fontSize: 'clamp(0.9rem,1.1vw,1.05rem)', lineHeight: 1.75, color: 'rgba(240,237,232,0.65)', maxWidth: '420px', opacity: 0 }}>
                  {sec.body}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
