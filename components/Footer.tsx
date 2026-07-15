import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <>
      {/* Newsletter / Stay Connected CTA */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-[#0C0297]">
        {/* Layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#08016A]/80 via-[#0C0297]/70 to-[#0C0297]/60 pointer-events-none" />
        {/* Subtle diagonal pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <span className="text-white/75 uppercase tracking-[0.3em] text-sm font-light">
              What's Going On?
            </span>
            <div className="h-px bg-white/30 w-full mt-3 mb-6" />
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
              Stay updated on the latest PHCSE news &amp; more!
            </h2>
          </div>

          <div>
            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 px-5 bg-white/10 border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4C03E] focus:bg-white/15 transition"
              />
            </form>
            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-8 bg-white hover:bg-white/90 text-[#08016A] font-semibold transition-colors min-w-[157px]">
                Subscribe
              </button>
              <a
                href="https://phcharter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 border border-white hover:bg-white hover:text-[#0C0297] text-white font-semibold transition-colors inline-flex items-center justify-center min-w-[200px]"
              >
                View Newsletter
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <footer className="bg-[#08016A] text-white">
        <div className="max-w-[1200px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="https://phcharter.org/wp-content/uploads/2025/08/Picture-%E2%86%92-phcharter_logo.png.bv_.webp.webp"
              alt="PHCSE Logo"
              width={60}
              height={60}
              className="object-contain mb-3"
            />
            <p className="font-bold text-sm leading-tight mb-2">
              Penn Hills Charter School of Entrepreneurship
            </p>
            <p className="text-xs text-blue-200 leading-relaxed">
              Preparing Young Scholars For The First 21st Century And Beyond
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#F4C03E] mb-3 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <address className="not-italic text-sm text-blue-100 space-y-1">
              <p>2501 Main Street</p>
              <p>Pittsburgh, PA 15235</p>
              <p className="mt-2">
                <a href="tel:4127936471" className="hover:text-[#F4C03E] transition-colors">
                  412-793-6471
                </a>
              </p>
              <p>Fax: 412-793-6473</p>
              <p>
                <a href="mailto:info@phcharter.org" className="hover:text-[#F4C03E] transition-colors">
                  info@phcharter.org
                </a>
              </p>
              <p className="text-blue-200 text-xs mt-2">Mon–Fri 7:30am–6:00pm</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#F4C03E] mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm text-blue-100">
              {[
                ['About Us', '/about'],
                ['MicroSociety', '/microsociety'],
                ['Leadership Team', '/leadership-team'],
                ['Board of Trustees', '/board-of-trustees'],
                ['Careers', '/careers'],
                ['Plans for Success', '/plans-for-success'],
                ['Budgets & Audits', '/annual-budget'],
                ['Right to Know', '/right-to-know'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#F4C03E] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enroll + Social */}
          <div>
            <h3 className="font-semibold text-[#F4C03E] mb-3 text-sm uppercase tracking-wider">
              Enroll
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              Open enrollment available to all Pennsylvania families.
            </p>
            <a
              href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F4C03E] hover:bg-[#E8B13B] text-[#08016A] font-semibold text-sm px-6 py-2.5 transition-colors"
            >
              Enroll Now
            </a>

            <div className="mt-6">
              <h3 className="font-semibold text-[#F4C03E] mb-2 text-sm uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {[
                  ['F', 'https://facebook.com'],
                  ['T', 'https://twitter.com'],
                  ['in', 'https://linkedin.com'],
                  ['YT', 'https://youtube.com'],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-blue-200 hover:text-white hover:border-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300">
            <p>© 2025 Penn Hills Charter School of Entrepreneurship</p>
            <div className="flex gap-4">
              <Link href="/right-to-know" className="hover:text-white transition-colors">
                Right to Know
              </Link>
              <Link href="/title-ix" className="hover:text-white transition-colors">
                Title IX
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
