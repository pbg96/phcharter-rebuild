import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'PTA' }

export default function Page() {
  return (
    <>
      <PageHero heading="PTA" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-4">Parent Teacher Association</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Join the PTA – a great way to get involved, support the teachers and staff to make Penn Hills Charter School of Entrepreneurship the most exciting and dynamic school it can be!</p>
          <a href="https://pennhillscharter.memberhub.store/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0C0297] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors text-sm mb-10">Visit the PTA Online Store</a>
          <h3 className="font-bold text-[#0C0297] mb-4">PTA Officers</h3>
          <div className="space-y-3 mb-8">
            {[["President","Diamond Worthy","president.pennhillscharterpta@gmail.com"],["Vice President","Aesha Rice","ajrice1920@gmail.com"],["2nd Vice President","Audra Nickelson","2ndvicepres.pennhillscharterpta@gmail.com"],["Recording Secretary","Ryan Glaze","glazeryan@yahoo.com"],["Treasurer","Shaquanna Rockmore","treasurer.pennhillscharterpta@gmail.com"]].map(([role,name,email])=>(
              <div key={role} className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg">
                <div><p className="font-semibold text-[#0C0297] text-sm">{role}: {name}</p><a href={`mailto:${email}`} className="text-xs text-gray-500 hover:text-[#0C0297]">{email}</a></div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600">Contact: <a href="mailto:PennHillsCharterPTA@gmail.com" className="text-[#0C0297] hover:underline">PennHillsCharterPTA@gmail.com</a></p>
        </div>
      </section>
    </>
  )
}
