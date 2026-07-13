import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Careers' }

const cards = [
  { label: 'Employee Benefits', href: '/employee-benefits', image: 'https://phcharter.org/wp-content/uploads/2021/02/8-1-1024x745.png' },
  { label: 'Clearances Overview', href: '/clearances-overview', image: 'https://phcharter.org/wp-content/uploads/2021/02/7-1-1024x745.png' },
  { label: 'Why PHCSE', href: '/why-phcse', image: 'https://phcharter.org/wp-content/uploads/2021/12/why-phcse.png' },
  { label: 'Recruiting & Selection Process', href: '/recruiting-selection-process', image: 'https://phcharter.org/wp-content/uploads/2021/02/SAT-Newslettter-1024x745.png' },
  { label: 'PA Educator Certification', href: 'https://www.education.pa.gov/Educators/Certification/Pages/default.aspx', image: null },
  { label: 'Job Opportunities', href: '/job-opportunities', image: 'https://phcharter.org/wp-content/uploads/2023/10/Frame-1.png' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero heading="Careers" />

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-6">Employment Opportunities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Are you a contributor? An innovator? A collaborative team member? If so, this might be the right workplace for you. With a curriculum uniquely focused on entrepreneurial education while also meeting all Common Core and state standards, and a staff laser-focused on our mission to serve our students and community, we&apos;re looking for talent.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Your experience, skills, and talent can make a difference in the lives of the children and families we serve at Penn Hills Charter School of Entrepreneurship. Please email your application, authorized release of information, and resume to{' '}
            <a href="mailto:human.resources@phcharter.org" className="text-[#0C0297] hover:underline">human.resources@phcharter.org</a>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                className="block border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group"
              >
                {card.image && (
                  <div className="h-40 overflow-hidden bg-gray-100">
                    <Image src={card.image} alt={card.label} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-4 bg-white">
                  <p className="font-semibold text-[#0C0297] text-sm group-hover:text-[#E8B13B] transition-colors">{card.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8B13B] py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to join our team?</h2>
        <p className="text-gray-800 mb-2">
          <a href="mailto:human.resources@phcharter.org" className="hover:underline font-medium">human.resources@phcharter.org</a>
        </p>
        <p className="text-gray-800">412-793-6471</p>
      </section>
    </>
  )
}
