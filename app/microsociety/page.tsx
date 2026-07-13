import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'MicroSociety' }

export default function MicroSocietyPage() {
  return (
    <>
      <PageHero heading="MicroSociety" />

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <Image src="https://phcharter.org/wp-content/uploads/2020/05/microLogoColor-300x142.png" alt="MicroSociety Logo" width={200} height={95} className="object-contain" />
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Penn Hills Charter School of Entrepreneurship holds the proud distinction of being the first MicroSociety school to open with only a Kindergarten to Second Grade cohort of students. We are currently serving Kindergarten to Eighth Grade students and continue pursuing ambitious goals to create a joyful mini-society in our school.
          </p>

          <h2 className="text-2xl font-bold text-[#0C0297] mt-12 mb-4">What is a MicroSociety?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A MicroSociety school is a K-8 learning environment where the innovative concept was created in 1967 as one teacher&apos;s effort to restructure his classroom into an academically challenging and interactive place to motivate students to want to learn and succeed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A MicroSociety school puts learning theory into practice throughout the school daily. Incorporating real-world experiences into basic curriculum helps students apply what they learn in the classroom to real life and helps teachers and principals transcend the &ldquo;stand and deliver&rdquo; daily routine.
          </p>
        </div>
      </section>

      {/* Micro Night */}
      <section className="bg-[#E8B13B] py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro Night</h2>
            <p className="text-gray-800 leading-relaxed mb-6">
              Thank you for supporting PHCSE&apos;s Entrepreneurial Program of MicroSociety. Join us for our Annual Micro Night — a showcase of student-created and run businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/donate" className="bg-[#0C0297] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors text-sm">
                Click Here To Donate
              </Link>
            </div>
          </div>
          <div>
            <Image src="https://phcharter.org/wp-content/uploads/2026/03/Micro_Night_Flyer_V2_1-768x1024.png" alt="Micro Night Flyer" width={300} height={400} className="rounded-lg shadow-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* Sub-pages */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-8">Explore MicroSociety</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Legislature', href: '/legislature' },
              { label: 'Constitution', href: '/constitution' },
              { label: 'Bill of Rights', href: '/bill-of-rights' },
              { label: 'Ventures & Agencies', href: '/ventures-agencies' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-[#0C0297] text-white text-center font-semibold py-6 px-4 rounded-xl hover:bg-blue-800 transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
