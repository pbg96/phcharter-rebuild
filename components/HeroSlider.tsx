'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Slide {
  image: string
  headline: string
  subheadline?: string
  body?: string
  ctas?: { label: string; href: string; variant: 'gold' | 'outline' }[]
}

const slides: Slide[] = [
  {
    image: 'https://phcharter.org/wp-content/uploads/slider/cache/3c5f46555361ccaefa6709fd090d0244/50-DSC_6053-scaled.jpg',
    headline: 'Kindergarten Graduation Photo Gallery',
    subheadline: '8th Grade Graduation Photo Gallery',
    ctas: [
      { label: 'Click Here', href: 'https://uwebtvstudios.shootproof.com/gallery/eb2425ce-370d-45e0-acd8-0eb33298d831', variant: 'gold' },
      { label: 'Click Here', href: 'https://uwebtvstudios.shootproof.com/gallery/cfde26f0-283d-4d8c-b849-a4a42dc43739', variant: 'outline' },
    ],
  },
  {
    image: 'https://phcharter.org/wp-content/uploads/slider/cache/7d5d7a7c11c03bad186d8d1579840370/AdobeStock_498257463-scaled.jpg',
    headline: 'McKinney-Vento Homeless Assistance Support',
    body: 'Does your family lack a fixed, regular nighttime residence due to hardship, disaster, or housing instability? Your student may qualify for educational support services.',
    ctas: [{ label: 'Read Article', href: '/mckinney-vento-homeless-assistance', variant: 'gold' }],
  },
  {
    image: 'https://phcharter.org/wp-content/uploads/slider/cache/d2c0cfa289c31402330a50bd0b2cd040/Frame-37.png',
    headline: 'Preparing Young Scholars For The First 21st Century And Beyond',
    body: 'Our vision is for every student to reach his or her full potential and discover the pathways for lifelong success.',
    ctas: [
      { label: 'Enroll Now', href: 'https://www.enrollphcharter.org/school-tours#SchoolTourForm', variant: 'gold' },
      { label: 'View School Calendar', href: 'https://phcharter.org/wp-content/uploads/2025/06/2025-2026-PHCSE-School-Calendar.pdf', variant: 'outline' },
    ],
  },
  {
    image: 'https://phcharter.org/wp-content/uploads/slider/cache/73671af180a25b98318857a98c295d58/Firefly_Gemini-Flash_Could-you-upscale-this-image-175388.png',
    headline: 'Building confidence through real-world entrepreneurship',
    subheadline: 'As featured in TribLive',
    ctas: [
      { label: 'Read Article', href: 'https://triblive.com/local/penn-hills/microsociety-builds-confidence-challenges-students-at-penn-hills-charter-school-of-entrepreneurship/', variant: 'gold' },
    ],
  },
  {
    image: 'https://phcharter.org/wp-content/uploads/slider/cache/1edf1855d3ba5642c24afacd791ff60d/School-Breakfast-Challenge-Desktop.png',
    headline: 'School Breakfast Challenge',
    body: 'Great Schools, Better Communities',
    ctas: [{ label: 'Enroll Now', href: 'https://www.enrollphcharter.org/school-tours#SchoolTourForm', variant: 'gold' }],
  },
  {
    image: 'https://phcharter.org/wp-content/uploads/slider/cache/b28bde4b23480a0254f1ce31bddfcc4b/CBS-News.png',
    headline: 'As featured in CBS News',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const goNext = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const goPrev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext])

  const slide = slides[current]

  return (
    <div className="relative w-full h-[450px] md:h-[611px] overflow-hidden bg-[#08016A]">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            priority={i === 0}
            className={`object-cover transition-transform duration-[6000ms] ${
              i === current ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Directional gradient — deep navy sweeps from left, fades right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(78.0647deg, hsl(240 96% 21%) 21.775%, hsl(240 96% 21% / 0) 100%)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 max-w-[1200px] mx-auto">
        {/* key triggers re-mount → re-runs animate-fade-up on slide change */}
        <div key={current} className="w-full max-w-[628px] text-white animate-fade-up flex flex-col gap-[22px]">
          <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-[45px] leading-tight lg:leading-[58.5px] drop-shadow">
            {slide.headline}
          </h2>
          {slide.subheadline && (
            <p className="text-white/90 text-lg md:text-xl font-medium">{slide.subheadline}</p>
          )}
          {slide.body && (
            <p className="text-white/80 text-sm md:text-base leading-relaxed">{slide.body}</p>
          )}
          {slide.ctas && (
            <div className="flex flex-wrap gap-[19px] pt-1">
              {slide.ctas.map((cta) => (
                <a
                  key={cta.label + cta.href}
                  href={cta.href}
                  target={cta.href.startsWith('http') ? '_blank' : undefined}
                  rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-center font-semibold h-[47px] min-w-[157px] px-6 text-sm transition-all hover:-translate-y-0.5 ${
                    cta.variant === 'gold'
                      ? 'bg-[#F4C03E] hover:bg-[#E8B13B] text-[#08016A]'
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots — pill-shaped when active */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-10 bg-[#F4C03E]' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
