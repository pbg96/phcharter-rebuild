import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Employee Benefits' }

export default function Page() {
  return (
    <>
      <PageHero heading="Employee Benefits" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-10">Penn Hills Charter School of Entrepreneurship offers competitive compensation and a comprehensive benefits package to attract and retain talented educators and staff.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[{t:"Health & Wellness",i:["Medical insurance","Dental insurance","Vision insurance","Employee Assistance Program"]},
              {t:"Retirement",i:["Pennsylvania Public School Employees Retirement System (PSERS)"]},
              {t:"Time Off",i:["Paid personal days","Sick leave","School calendar holidays","Summer break"]},
              {t:"Professional Development",i:["Ongoing PD opportunities","Continuing education support","Teacher Residency Program"]},
            ].map((b)=>(
              <div key={b.t} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0C0297] mb-3">{b.t}</h3>
                <ul className="space-y-1">{b.i.map((item)=><li key={item} className="text-sm text-gray-600 flex gap-2"><span className="text-[#E8B13B]">✓</span>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <a href="mailto:human.resources@phcharter.org" className="inline-block bg-[#0C0297] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors text-sm">Apply Now</a>
        </div>
      </section>
    </>
  )
}
