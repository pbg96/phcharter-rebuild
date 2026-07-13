import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Plans for Success' }

export default function Page() {
  return (
    <>
      <PageHero heading="Plans for Success" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {title:"Schoolwide Title 1 Comprehensive Plan — 2024-2027",href:"https://phcharter.org/wp-content/uploads/2023/11/Schoolwide-Title-1-Comprehensive-Plan-_-2024-2027.pdf"},
              {title:"Charter School Annual Report — 2024-2025",href:"https://phcharter.org/wp-content/uploads/2025/11/Charter-School-Annual-Report-_-2024-2025.pdf"},
              {title:"Strategic Plan — 2025-2030",href:"https://phcharter.org/wp-content/uploads/2025/11/PHCSE-Strat-Plan-2025-2030.pdf"},
            ].map((p)=>(
              <div key={p.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-[#0C0297] mb-4">{p.title}</h3>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0C0297] text-white text-sm font-semibold px-5 py-2 rounded hover:bg-blue-800 transition-colors">View Document</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
