import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Clearances Overview' }

export default function Page() {
  return (
    <>
      <PageHero heading="Clearances Overview" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8 font-medium">ALL APPLICANTS FOR EMPLOYMENT must undergo background checks. Act 151, Act 34, and Act 114 must be renewed every five years. All clearances shall be no more than one (1) year old at the time of employment.</p>
          <div className="space-y-8">
            {[{t:"Act 151 — Child Abuse History Clearance",fee:"$13",link:"https://www.compass.state.pa.us/cwis/public/home",desc:"Pennsylvania Child Abuse History Clearance submitted through the CWIS self-service portal."},
              {t:"Act 34 — Criminal History Clearance",fee:"$22",link:"https://epatch.pa.gov/home",desc:"Pennsylvania State Police criminal background check through the PATCH system."},
              {t:"Act 114 — FBI Fingerprint Clearance",fee:"$23.85",link:"https://uenroll.identogo.com/workflows/111VVQ",desc:"Register with Identogo prior to visiting a fingerprint site. Service Code: 1KG6Q9."},
            ].map((a)=>(
              <div key={a.t} className="border-l-4 border-[#0C0297] pl-6 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-[#0C0297]">{a.t}</h3>
                  <span className="text-xs bg-[#E8B13B] text-gray-900 font-semibold px-2 py-0.5 rounded">{a.fee}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{a.desc}</p>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-[#0C0297] text-sm font-medium hover:underline">Apply Online →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
