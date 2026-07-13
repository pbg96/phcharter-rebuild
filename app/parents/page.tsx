import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Parents & Guardians' }

export default function Page() {
  return (
    <>
      <PageHero heading="Parents & Guardians" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">At the Penn Hills Charter School of Entrepreneurship everyone is a decision-maker. That means all students are put squarely in charge of their own learning and are given the opportunity to develop and use their talents to make decisions and be held responsible for their learning outcomes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[["PTA","/pta"],["Academic Resources","/academic-resources"],["Health & Wellness","/health-wellness"],["Plans for Success","/plans-for-success"],["Special Education","/special-education"],["Skyward Family Access","/skyward-familystudent-access"],["Complaint / Concern Form","/complaint-concern"],["Safe 2 Say Something","/safe-2-say-something"],["Community Resources","/community-resources"]].map(([l,h])=>(
              <a key={h} href={h} className="block bg-[#0C0297] text-white font-semibold p-5 rounded-xl hover:bg-blue-800 transition-colors text-sm">{l}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
