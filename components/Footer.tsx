import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#0C0297] text-white">
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
          <p className="font-bold text-sm leading-tight mb-2">Penn Hills Charter School of Entrepreneurship</p>
          <p className="text-xs text-blue-200 leading-relaxed">Preparing Young Scholars For The First 21st Century And Beyond</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[#E8B13B] mb-3 text-sm uppercase tracking-wider">Contact</h3>
          <address className="not-italic text-sm text-blue-100 space-y-1">
            <p>2501 Main Street</p>
            <p>Pittsburgh, PA 15235</p>
            <p className="mt-2">
              <a href="tel:4127936471" className="hover:text-[#E8B13B] transition-colors">412-793-6471</a>
            </p>
            <p>Fax: 412-793-6473</p>
            <p>
              <a href="mailto:info@phcharter.org" className="hover:text-[#E8B13B] transition-colors">info@phcharter.org</a>
            </p>
            <p className="text-blue-200 text-xs mt-2">Mon–Fri 7:30am–6:00pm</p>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-[#E8B13B] mb-3 text-sm uppercase tracking-wider">Quick Links</h3>
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
                <Link href={href} className="hover:text-[#E8B13B] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Enroll */}
        <div>
          <h3 className="font-semibold text-[#E8B13B] mb-3 text-sm uppercase tracking-wider">Enroll</h3>
          <p className="text-sm text-blue-100 mb-4">Open enrollment available to all Pennsylvania families.</p>
          <a
            href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E8B13B] text-gray-900 font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#0C0297] hover:text-white transition-colors"
          >
            Enroll Now
          </a>

          <div className="mt-6">
            <h3 className="font-semibold text-[#E8B13B] mb-2 text-sm uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((s) => (
                <span key={s} className="text-xs text-blue-200 hover:text-white cursor-pointer transition-colors">{s[0]}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <p>© 2025 Penn Hills Charter School of Entrepreneurship</p>
          <div className="flex gap-4">
            <Link href="/right-to-know" className="hover:text-white transition-colors">Right to Know</Link>
            <Link href="/title-ix" className="hover:text-white transition-colors">Title IX</Link>
            <Link href="/complaint-concern" className="hover:text-white transition-colors">Complaints</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
