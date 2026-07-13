import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Teacher Residency Program' }

export default function Page() {
  return (
    <>
      <PageHero heading="Teacher Residency Program" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">Penn Hills Charter School of Entrepreneurship Teacher Residency Program places aspiring teachers in our unique MicroSociety entrepreneurial learning environment, providing hands-on experience that prepares them to teach in 21st-century classrooms.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {["Hands-On Experience","Mentorship with experienced educators","Entrepreneurial Education Training","Pathway to Employment"].map((h)=>(
              <div key={h} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-[#0C0297]">{h}</p>
              </div>
            ))}
          </div>
          <a href="mailto:human.resources@phcharter.org" className="inline-block bg-[#0C0297] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors text-sm">Apply Now</a>
        </div>
      </section>
    </>
  )
}
