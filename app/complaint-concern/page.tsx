import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Parent Complaint / Concern' }

export default function Page() {
  return (
    <>
      <PageHero heading="Parent Complaint / Concern" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">The Board of Trustees of PHCSE welcomes inquiries, suggestions and constructive criticism regarding the Charter School programs, personnel, operations and facilities.</p>
          <div className="space-y-4 mb-10">
            {[{n:"Step 1",t:"First Level",d:"Speak directly with the concerned PHCSE staff member. The staff member will discuss it with you and attempt to provide a reasonable explanation or take appropriate action."},
              {n:"Step 2",t:"Second Level",d:"If unresolved, discuss the matter with the employee immediate supervisor within three days after the First Level was resolved unsatisfactorily."},
              {n:"Step 3",t:"Third Level",d:"If still unresolved, a conference shall be scheduled with the CEO or designee within three days after the second level meeting."}
            ].map((s)=>(
              <div key={s.n} className="flex gap-5 border border-gray-200 rounded-xl p-5">
                <div className="bg-[#0C0297] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">{s.n.replace("Step ","")}</div>
                <div><p className="font-bold text-[#0C0297]">{s.t}</p><p className="text-gray-600 text-sm mt-1">{s.d}</p></div>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold text-[#0C0297] mb-4">Submit a Concern</h2>
          <form className="space-y-4 max-w-lg">
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Parent Name</label><input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0297]"/></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label><input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0297]"/></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Describe your concern</label><textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0297] resize-none"/></div>
            <button type="submit" className="bg-[#0C0297] text-white font-semibold px-7 py-3 rounded hover:bg-blue-800 transition-colors text-sm">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}
