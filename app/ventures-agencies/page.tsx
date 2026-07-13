import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Ventures & Agencies' }

export default function Page() {
  return (
    <>
      <PageHero heading="Ventures & Agencies" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">The Penn Hills MicroSociety has a number of different ventures which are developed, launched and operated by the students themselves.</p>
          {[
            {t:"How do the Ventures come about?",b:"At the beginning of the school year, students are given the opportunity to propose businesses they are interested in running. Before they can launch, students must submit a business plan to the school review panel."},
            {t:"How do students get their roles?",b:"Each student creates a resume and fills out a job application. Students take their applications to the MicroSociety job fair in September and May. Business owners interview applicants and hire their teams."},
            {t:"How are businesses financed?",b:"The Eagle University MicroSociety Bank governs the supply and flow of capital. Business owners submit their business plans to the central bank to obtain a bank loan."},
          ].map((s)=>(
            <div key={s.t} className="mb-8">
              <h2 className="text-xl font-bold text-[#0C0297] mb-3">{s.t}</h2>
              <p className="text-gray-700 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
