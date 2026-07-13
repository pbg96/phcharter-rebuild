import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Right to Know' }

export default function Page() {
  return (
    <>
      <PageHero heading="Right to Know" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">Public records of Penn Hills Charter School of Entrepreneurship (PHCSE) are available for access by the public and duplication in accordance with the Right-to-Know Law and PHCSE Board Policy.</p>
          <a href="https://phcharter.org/wp-content/uploads/2022/01/Right-to-Know-Policy-2021.3.3.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0C0297] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors text-sm mb-10">Right-To-Know Request Form (PDF)</a>
          <h2 className="text-xl font-bold text-[#0C0297] mb-3">PHCSE Open Records Officer</h2>
          <p className="text-gray-700">Dr. Wayne Jones<br/>Penn Hills Charter School of Entrepreneurship<br/>7336 Saltsburg Road, Pittsburgh PA 15235<br/><a href="mailto:wayne.jones@phcharter.org" className="text-[#0C0297] hover:underline">wayne.jones@phcharter.org</a></p>
        </div>
      </section>
    </>
  )
}
