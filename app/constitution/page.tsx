import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Constitution' }

export default function Page() {
  return (
    <>
      <PageHero heading="Constitution" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-8 italic">Penn Hills Charter School of Entrepreneurship MicroSociety</p>
          <div className="prose prose-blue max-w-none text-gray-700">
            <h2 className="text-xl font-bold text-[#0C0297]">Preamble</h2>
            <p className="leading-relaxed mb-6">We the people of Penn Hills Charter School of Entrepreneurship, in order to form a more perfect school, establish fairness, encourage that everyone gets along, expect visitors to act like they belong, emphasize everyone stays safe and healthy, and to ensure all future students, families, and teachers of Penn Hills Charter School of Entrepreneurship enjoy the same freedoms we enjoy today, so approve this Constitution for Penn Hills Charter School of Entrepreneurship.</p>
            <h2 className="text-xl font-bold text-[#0C0297]">Article I — Legislative Branch</h2>
            <p className="leading-relaxed mb-6">All law making powers will be given to our congress that will be made up of a House of Representatives. Representatives will be elected each year by the students, one from each classroom.</p>
            <h2 className="text-xl font-bold text-[#0C0297]">Article II — Executive Branch</h2>
            <p className="leading-relaxed mb-6">The executive power of Penn Hills Charter School of Entrepreneurship will be a President for 1 year. The President must remain on the Honor Roll for the entire year and may not have any office referrals.</p>
            <h2 className="text-xl font-bold text-[#0C0297]">Article III — Judicial Branch</h2>
            <p className="leading-relaxed">The Judicial Power of Penn Hills Charter School MicroSociety will consist of 3 judges voted for by the Penn Hills Charter School community. All judges must attend law school either before or after nomination.</p>
          </div>
        </div>
      </section>
    </>
  )
}
