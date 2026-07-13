import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Charter' }

export default function Page() {
  return (
    <>
      <PageHero heading="Charter" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <p><strong>Charter Authorizer:</strong> <a href="https://www.phsd.k12.pa.us/" target="_blank" rel="noopener noreferrer" className="text-[#0C0297] hover:underline">Penn Hills School District</a></p>
            <p><strong>Charter Term:</strong> 2021 to 2026</p>
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            {[["501(c)(3) Determination Letter","https://phcharter.org/wp-content/uploads/2019/10/Penn-Hills-Charter-501c3.pdf"],["Charter Application","https://phcharter.org/wp-content/uploads/2019/10/Admin-Charter-Application.pdf"],["Charter Renewal","https://phcharter.org/wp-content/uploads/2021/08/PHCSE-Charter-Renewal-Signed-1.pdf"]].map(([l,h])=>(
              <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0C0297] text-white font-semibold px-5 py-2.5 rounded hover:bg-blue-800 transition-colors text-sm">{l}</a>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">A charter school is a public school operated independently of traditional public school districts. Penn Hills Charter School of Entrepreneurship was authorized by the Penn Hills School District and operates under a renewable charter that outlines the school mission, educational program, and accountability measures.</p>
        </div>
      </section>
    </>
  )
}
