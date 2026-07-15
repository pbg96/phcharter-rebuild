import Image from 'next/image'
import Link from 'next/link'
import { HeroSlider } from '@/components/HeroSlider'
import { VideoExperience } from '@/components/VideoExperience'

export const metadata = {
  title: 'Home',
}

const tickerItems = [
  '🎓 Kindergarten Graduation Photo Gallery — Click to View',
  '📢 McKinney-Vento Homeless Assistance Support Available',
  '🏫 Preparing Young Scholars For The 21st Century And Beyond',
  '🏆 MicroSociety — As Featured in TribLive',
  '🍳 School Breakfast Challenge — Great Schools, Better Communities',
  '📺 As Featured in CBS News',
]

const events = [
  {
    image: 'https://phcse-reimagine.lovable.app/assets/event-1-BLPdRN-J.jpg',
    tag: 'Featured',
    tagClass: 'bg-[#0C0297] text-white',
    date: 'Ongoing',
    title: 'Kindergarten Graduation Gallery',
    body: "Celebrate our youngest graduates through highlights from this year's ceremony.",
  },
  {
    image: 'https://phcse-reimagine.lovable.app/assets/event-2-piKP9kCd.jpg',
    tag: 'Gallery',
    tagClass: 'bg-[#F4C03E] text-[#08016A]',
    date: 'June 2026',
    title: '8th Grade Graduation Highlights',
    body: 'Honoring our promoting class as they move on to high school with pride.',
  },
  {
    image: 'https://phcse-reimagine.lovable.app/assets/event-3-BUA_UtfN.jpg',
    tag: 'Featured',
    tagClass: 'bg-[#08016A] text-white',
    date: 'This Month',
    title: 'School Breakfast Challenge',
    body: "Join us in fueling every student's day. Participate and help PHCSE win.",
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

      {/* News Ticker */}
      <div className="bg-[#F4C03E] text-[#08016A] overflow-hidden py-3 border-y border-[#E8B13B]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm font-semibold flex items-center gap-3">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[#08016A]/30 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* Section 2 — Upcoming Events & Highlights (from scrape) */}
      <section id="events" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#E8B13B] uppercase tracking-widest text-xs font-bold">
              What&apos;s Going On?
            </span>
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0C0297] mt-3">
              Upcoming Events &amp; Highlights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <article
                key={event.title}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${event.tagClass}`}>
                    {event.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <svg className="w-3.5 h-3.5 text-[#F4C03E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <h3 className="font-bold text-xl text-[#0C0297] mt-2 group-hover:text-[#08016A] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{event.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/events"
              className="inline-flex items-center gap-2 bg-[#0C0297] hover:bg-[#08016A] text-white font-bold px-6 py-3.5 rounded transition-colors text-sm"
            >
              View All Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 — Scroll-driven Video Experience */}
      <VideoExperience />

      {/* Section 5 — Enroll CTA Banner */}
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

      {/* Section 6 — Partners */}
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

      {/* Section 7 — News / Updates */}
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

      {/* Section 8 — Awards / Media Logos */}
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

      {/* Section 9 — Additional Info */}
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
