import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Title IX' }

export default function Page() {
  return (
    <>
      <PageHero heading="Title IX" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">Title IX of the Education Amendments of 1972 is a federal civil rights law that prohibits discrimination on the basis of sex in any school or educational program that receives federal funding. PHCSE is committed to maintaining an educational and working environment free from sexual harassment and sex discrimination.</p>
          <h2 className="text-xl font-bold text-[#0C0297] mb-4">Documents</h2>
          <div className="space-y-3 mb-8">
            {[{t:"Title IX Policy",h:"https://phcharter.org/wp-content/uploads/2025/01/Title-IX-Policy-1.pdf"},{t:"Understanding Sexual Harassment in Schools",h:"https://phcharter.org/wp-content/uploads/2022/08/PHCSE-K-8-SH-in-Schools.pdf"}].map((d)=>(
              <a key={d.t} href={d.h} target="_blank" rel="noopener noreferrer" className="block text-[#0C0297] hover:underline font-medium">{d.t} →</a>
            ))}
          </div>
          <h2 className="text-xl font-bold text-[#0C0297] mb-3">Title IX Coordinator</h2>
          <p className="text-gray-700">Valerie Y. Nance, SHRM-SCP<br/><a href="mailto:valerie.nance@phcharter.org" className="text-[#0C0297] hover:underline">valerie.nance@phcharter.org</a><br/>412-793-6471 ext. 227 | Fax: 412-274-1384</p>
        </div>
      </section>
    </>
  )
}
