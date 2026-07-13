import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'ESSER LEA Plans' }

export default function Page() {
  return (
    <>
      <PageHero heading="ESSER LEA Plans" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">Penn Hills Charter School of Entrepreneurship received ESSER funding under the American Rescue Plan to address learning loss and support students during the COVID-19 pandemic.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {t:"PHCSE ARP ESSER 7% Set Aside — After School",h:"https://phcharter.org/wp-content/uploads/2022/08/PHCSE-ARP-ESSER-7-Set-Aside-After-School.pdf"},
              {t:"PHCSE ARP ESSER 7% Set Aside — Learning Loss",h:"https://phcharter.org/wp-content/uploads/2022/08/PHCSE-ARP-ESSER-7-Set-Aside-Learning-Loss.pdf"},
              {t:"PHCSE ARP ESSER 7% Set Aside — Summer School",h:"https://phcharter.org/wp-content/uploads/2022/08/PHCSE-ARP-ESSER-7-Set-Aside-Summer-School.pdf"},
              {t:"PHCSE ARP ESSER Grant Content",h:"https://phcharter.org/wp-content/uploads/2022/08/PHCSE-ARP-ESSER-Grant-Content.pdf"},
            ].map((d)=>(
              <div key={d.t} className="border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-[#0C0297] text-sm mb-3">{d.t}</p>
                <a href={d.h} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0C0297] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-blue-800 transition-colors">Download PDF</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
