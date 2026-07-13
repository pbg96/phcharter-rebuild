import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Special Education' }

export default function Page() {
  return (
    <>
      <PageHero heading="Special Education" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">Special Education is the practice of educating students with special needs in a way that addresses their individual differences and needs in the least restrictive environment.</p>
          <p className="text-gray-700 leading-relaxed mb-8">In order to qualify for special education, a student must show a significant need for specially and specifically designed instruction and meet the criteria of a disability, as outlined in Chapter 14 of PA state law and the IDEA federal act.</p>
          <h2 className="text-2xl font-bold text-[#0C0297] mb-4">Contact</h2>
          <p className="text-gray-700">Heather L. Ruppert, MSED, CAGS<br/>Special Education Coordinator & School Psychologist<br/>412-793-6471 ext. 209<br/><a href="mailto:heather.ruppert@phcharter.org" className="text-[#0C0297] hover:underline">heather.ruppert@phcharter.org</a></p>
        </div>
      </section>
    </>
  )
}
