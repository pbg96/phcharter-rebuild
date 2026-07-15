'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership Team', href: '/leadership-team' },
      { label: 'Board of Trustees', href: '/board-of-trustees' },
      { label: 'Letter from CEO', href: '/letter-from-our-ceo' },
      { label: 'Charter', href: '/charter' },
    ],
  },
  {
    label: 'Programs',
    href: '/microsociety',
    children: [
      { label: 'MicroSociety', href: '/microsociety' },
      { label: 'Constitution', href: '/constitution' },
      { label: 'Bill of Rights', href: '/bill-of-rights' },
      { label: 'Ventures & Agencies', href: '/ventures-agencies' },
      { label: 'Legislature', href: '/legislature' },
    ],
  },
  {
    label: 'Parents',
    href: '/parents',
    children: [
      { label: 'Parents & Guardians', href: '/parents' },
      { label: 'PTA', href: '/pta' },
      { label: 'Academic Resources', href: '/academic-resources' },
      { label: 'Health & Wellness', href: '/health-wellness' },
      { label: 'Special Education', href: '/special-education' },
      { label: 'Plans for Success', href: '/plans-for-success' },
      { label: 'Safe 2 Say Something', href: '/safe-2-say-something' },
      { label: 'Community Resources', href: '/community-resources' },
    ],
  },
  {
    label: 'Transparency',
    href: '/annual-budget',
    children: [
      { label: 'Budgets & Audits', href: '/annual-budget' },
      { label: 'Right to Know', href: '/right-to-know' },
      { label: 'ESSER LEA Plans', href: '/esser-lea-plans' },
      { label: 'Title IX', href: '/title-ix' },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50">
      {/* Utility top bar */}
      <div className="hidden lg:flex bg-[#08016A] text-white items-center h-10 text-[13px]">
        <div className="max-w-[1200px] mx-auto px-4 w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="tel:4127936471" className="hover:text-[#F4C03E] transition-colors">
              412-793-6471
            </a>
            <span className="text-white/30">|</span>
            <a href="mailto:info@phcharter.org" className="hover:text-[#F4C03E] transition-colors">
              info@phcharter.org
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/75">
            <span>2501 Main Street, Pittsburgh, PA 15235</span>
            <span className="text-white/30">|</span>
            <span>Mon–Fri 7:30am–6:00pm</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="https://phcharter.org/wp-content/uploads/2025/08/Picture-%E2%86%92-phcharter_logo.png.bv_.webp.webp"
              alt="PHCSE Logo"
              width={44}
              height={44}
              className="object-contain"
            />
            <span className="font-bold text-sm text-[#1A2E3B] leading-tight hidden md:block max-w-[160px]">
              Penn Hills Charter School of Entrepreneurship
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm text-black hover:text-[#D0902F] transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3 h-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </Link>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl min-w-[200px] py-1 z-50 border-t-2 border-[#F4C03E]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#3A3A3A] hover:bg-gray-50 hover:text-[#D0902F] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-black hover:text-[#D0902F] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side — Donate + Enroll */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/donate"
              className="text-sm text-black hover:text-[#D0902F] transition-colors"
            >
              Donate
            </Link>
            <a
              href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4C03E] hover:bg-[#08016A] hover:text-white text-[#08016A] font-semibold text-sm px-5 py-2 transition-colors"
            >
              Enroll Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden ml-auto p-2 text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-sm font-semibold text-black hover:text-[#D0902F] hover:bg-gray-50 border-b border-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-8 py-2 text-sm text-gray-600 hover:text-[#D0902F] hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/donate"
              className="block text-center text-sm font-semibold text-black hover:text-[#D0902F] py-2 mb-2 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
            <a
              href="https://www.enrollphcharter.org/school-tours#SchoolTourForm"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#F4C03E] hover:bg-[#08016A] hover:text-white text-[#08016A] font-semibold text-sm px-5 py-3 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
