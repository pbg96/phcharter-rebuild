import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Safe 2 Say Something' }

export default function Page() {
  return (
    <>
      <PageHero heading="Safe 2 Say Something" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">Educators, parents, students, and community members are now able to submit anonymous tips through Safe2Say Something, a statewide youth violence prevention program.</p>
          <h2 className="text-xl font-bold text-[#0C0297] mb-4">How to Submit an Anonymous Tip</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[["Safe2Say Website","https://www.safe2saypa.org/tip/"],["Safe2Say App","https://www.safe2saypa.org/download/"],["By Phone","tel:18447232729"]].map(([l,h])=>(
              <a key={l} href={h} target={h.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="block bg-[#E8B13B] text-gray-900 font-bold text-center py-6 rounded-xl hover:bg-yellow-400 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">PHCSE Safety Tip Line: <a href="tel:4127936473" className="text-[#0C0297] hover:underline">412-793-6473</a></p>
        </div>
      </section>
    </>
  )
}
