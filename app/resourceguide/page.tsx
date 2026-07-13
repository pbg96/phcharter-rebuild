import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Resource Guide' }

export default function Page() {
  return (
    <>
      <PageHero heading="Resource Guide" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">The PHCSE Resource Guide is a comprehensive directory of community resources available to our students and families covering food assistance, housing support, mental health services, healthcare, financial resources, and more.</p>
          <a href="https://phcharter.org/wp-content/uploads/2024/12/Resource-Guide-20242025.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0C0297] text-white font-bold px-7 py-3 rounded hover:bg-blue-800 transition-colors mb-10">Download Resource Guide 2024-2025 (PDF)</a>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[{t:"Food Assistance",i:["Greater Pittsburgh Community Food Bank","Just Harvest","SNAP","Fresh Access Food Bucks"]},{t:"Health Resources",i:["CHIP Information","Highmark Whole Care","Alliance for A Healthier Generation"]},{t:"Mental Health",i:["resolve Crisis Network — 1-888-796-8226","Highmark Caring Place — 1-888-734-4073"]},{t:"Safety",i:["Safe2Say Something — safe2saypa.org","PHCSE Tip Line: 412-793-6473"]}].map((c)=>(
              <div key={c.t} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#0C0297] mb-3">{c.t}</h3>
                <ul className="space-y-1">{c.i.map((item)=><li key={item} className="text-sm text-gray-600">• {item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
