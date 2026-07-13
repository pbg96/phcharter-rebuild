'use client'
import { useState, useEffect, useCallback } from 'react'

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
    subheadline: 'As featured in',
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

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <div className="relative w-full h-[600px] md:h-[600px] h-[350px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-4xl">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
          {slide.headline}
        </h2>
        {slide.subheadline && (
          <p className="text-white/90 text-lg md:text-xl mt-3 font-medium">{slide.subheadline}</p>
        )}
        {slide.body && (
          <p className="text-white/80 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">{slide.body}</p>
        )}
        {slide.ctas && (
          <div className="flex flex-wrap gap-3 mt-6">
            {slide.ctas.map((cta) => (
              <a
                key={cta.label + cta.href}
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`px-6 py-3 rounded font-semibold text-sm transition-all ${
                  cta.variant === 'gold'
                    ? 'bg-[#E8B13B] text-gray-900 hover:bg-yellow-400'
                    : 'border-2 border-white text-white hover:bg-white/10'
                }`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#E8B13B]' : 'bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
