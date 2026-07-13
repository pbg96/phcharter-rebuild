import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Academic Resources' }

export default function Page() {
  return (
    <>
      <PageHero heading="Academic Resources" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-8">Select your grade level below to access resources for your student.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Kindergarten","1st Grade","2nd Grade","3rd Grade","4th Grade","5th Grade","6th Grade","7th Grade","8th Grade"].map((g)=>(
              <a key={g} href={`/${g.toLowerCase().replace(" ","-")}-resources`} className="block border-2 border-[#0C0297] rounded-xl p-6 text-center hover:bg-[#0C0297] hover:text-white transition-colors group">
                <span className="text-2xl font-bold text-[#0C0297] group-hover:text-white">{g}</span>
                <p className="text-xs text-gray-500 group-hover:text-blue-100 mt-2">Click Here To Access Your Resources</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
