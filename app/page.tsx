import Image from 'next/image'
import Link from 'next/link'
import { HeroSlider } from '@/components/HeroSlider'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Parallax } from '@/components/Parallax'

export const metadata = {
  title: 'Home',
}

const features = [
  {
    icon: '🔬',
    heading: 'Innovative STEM Education',
    body: 'Our creative and interdisciplinary program is designed to challenge students to formulate and implement a solution to a scientific or technological problem.',
  },
  {
    icon: '💡',
    heading: 'New Venture Development',
    body: 'Our creative and interdisciplinary program is designed to challenge students to formulate and implement a solution to a scientific or technological problem.',
  },
  {
    icon: '🏆',
    heading: 'Competitive Sports',
    body: 'The Competitive Sports Program helps to compete in a wide variety of sports on a weekly basis against other schools improving fitness and teamwork.',
  },
]

const awards = [
  'https://phcharter.org/wp-content/uploads/2025/08/Yass-Prize_Awardee-Badge_2024-Semifinalist-1-300x300.png',
  'https://phcharter.org/wp-content/uploads/2025/08/image-8-300x245.png',
  'https://phcharter.org/wp-content/uploads/2025/08/image-9-300x245.png',
  'https://phcharter.org/wp-content/uploads/2025/08/image-10-300x245.png',
  'https://phcharter.org/wp-content/uploads/2025/08/image-11-300x245.png',
  'https://phcharter.org/wp-content/uploads/2025/08/Alice-300x226.jpeg',
  'https://phcharter.org/wp-content/uploads/2025/08/MSA.png',
]

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero Slider */}
      <HeroSlider />

      {/* Section 2 — Features Row */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.heading} className="text-center px-4">
              <span className="text-5xl block mb-4">{f.icon}</span>
              <h3 className="text-xl font-bold text-[#0C0297] mb-3">{f.heading}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — About / Welcome (SCROLL ANIMATED) */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal stagger staggerDelay={100}>
            <span className="text-xs font-semibold text-[#E8B13B] uppercase tracking-widest mb-3 block">About PHCSE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0297] leading-tight mb-6">
              Welcome to Penn Hills Charter School of Entrepreneurship
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The Penn Hills Charter School of Entrepreneurship provides a hands-on, engaging program designed to bring
              entrepreneurial and economic concepts alive for students. The lessons related to the Pennsylvania Core
              Curriculum of English Language Arts, Mathematics, Science, and Social Studies incorporates economic and
              entrepreneurial concepts.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-block bg-[#0C0297] text-white font-semibold px-7 py-3 rounded hover:bg-blue-800 transition-colors"
              >
                About Us
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Parallax>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://player.vimeo.com/video/1958705307"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="PHCSE Video"
                />
              </div>
            </Parallax>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4 — Enroll CTA Banner */}
      <section className="bg-[#E8B13B] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Enroll your child into PHCSE</h2>
          <p className="text-gray-800 leading-relaxed mb-8 text-base max-w-3xl mx-auto">
            By enrolling your child in our school, you make the decision to become part of a community dedicated to
            cultivating innovative, productive and responsible citizens. At the Penn Hills Charter School of
            Entrepreneurship, everyone is a decision-maker. That means all students are given the opportunity to
            develop and use their talents to make decisions and be held responsible for their learning gains.
          </p>
          <a
            href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0C0297] text-white font-bold px-8 py-4 rounded hover:bg-blue-800 transition-colors text-sm uppercase tracking-wider"
          >
            Enroll Now
          </a>
        </div>
      </section>

      {/* Section 5 — Partners */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0297] leading-tight mb-6">We Love our Partners</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The Penn Hills Charter School of Entrepreneurship provides a hands-on, engaging program designed to bring
              entrepreneurial and economic concepts alive for students. The lessons related to the Pennsylvania Core
              Curriculum incorporates economic and entrepreneurial concepts.
            </p>
            <Link
              href="/partnership-opportunities"
              className="inline-block bg-[#0C0297] text-white font-semibold px-7 py-3 rounded hover:bg-blue-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div>
            <Image
              src="https://phcharter.org/wp-content/uploads/2025/08/Group-6.webp"
              alt="PHCSE Partners"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow"
            />
            <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/1958991477"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="PHCSE School Tour"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">PHCSE School Tour</p>
          </div>
        </div>
      </section>

      {/* Section 6 — News / Updates */}
      <section className="bg-[#0C0297] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="text-[#E8B13B] font-semibold text-xs uppercase tracking-widest mb-3">Latest Updates</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">WHAT&apos;S GOING ON?</h2>
          <p className="text-blue-200 font-medium text-lg mb-4">Stay updated on the latest PHCSE news &amp; more!</p>
          <p className="text-blue-100 leading-relaxed mb-8">
            Our vision is for every student to reach his or her full potential and discover the pathways for lifelong success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://sites.google.com/phcharter.org/may2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8B13B] text-gray-900 font-bold px-7 py-3 rounded hover:bg-yellow-400 transition-colors text-sm"
            >
              View Newsletter
            </a>
            <a
              href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-semibold px-7 py-3 rounded hover:bg-white/10 transition-colors text-sm"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      {/* Section 7 — Awards / Media Logos */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Awards &amp; Recognition
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {awards.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Award or media logo"
                width={120}
                height={80}
                className="max-h-[80px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Additional Info */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-8">Additional Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Donation Request', href: 'https://phcharter.org/wp-content/uploads/2025/03/PHCSE-Donation-Request-Form-1_1.pdf' },
              { label: 'Request for Proposals', href: '/request-for-proposals' },
              { label: 'Request for Use of School Facilities', href: 'https://forms.gle/YLj6C5tpitpDC9Kv9' },
              { label: 'Right to Know Request', href: '/right-to-know' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block bg-white border border-gray-200 rounded-lg p-5 text-[#0C0297] font-semibold text-sm hover:border-[#0C0297] hover:shadow-md transition-all group"
              >
                <span className="group-hover:text-[#E8B13B] transition-colors">{item.label}</span>
                <svg className="w-4 h-4 mt-2 text-gray-400 group-hover:text-[#0C0297] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
