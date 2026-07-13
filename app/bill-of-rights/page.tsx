import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Bill of Rights' }

export default function Page() {
  return (
    <>
      <PageHero heading="Bill of Rights" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-8 italic">Penn Hills Charter School of Entrepreneurship MicroSociety</p>
          <div className="space-y-6">
            {[
              {n:"1",t:"Safe and Healthy Environment",b:"We have the right to a safe and healthy environment. No student, teacher, or visitor may create a situation that is unsafe or unhealthy."},
              {n:"2",t:"Excellent Education",b:"We have the right to an excellent education. All students, including individuals, teachers, and visitors will work to increase the learning in every classroom."},
              {n:"3",t:"Respectful Relationships",b:"We have the right to respectful relationships. We have the right and the responsibility to treat others as we would like to be treated."},
              {n:"4",t:"Fair Trial",b:"We have the right to a fair trial. Individuals are assumed innocent until proven guilty."},
              {n:"5",t:"Make Decisions",b:"We have the right to make decisions. Every individual in our MicroSociety has the skills and talents to make decisions that impact themselves, their classrooms, and our school."},
            ].map((r)=>(
              <div key={r.n} className="flex gap-6 border border-gray-200 rounded-xl p-6">
                <span className="text-4xl font-black text-[#E8B13B] shrink-0">{r.n}</span>
                <div><h3 className="font-bold text-[#0C0297] mb-2">{r.t}</h3><p className="text-gray-600 text-sm leading-relaxed">{r.b}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
