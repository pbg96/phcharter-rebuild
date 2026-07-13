import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Health & Wellness' }

export default function Page() {
  return (
    <>
      <PageHero heading="Health & Wellness" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">The Penn Hills Charter School of Entrepreneurship School Health Program fosters the growth, development and academic achievement of students by promoting good nutrition, health and wellness in a safe and supportive environment.</p>
          <div className="bg-[#E8B13B] rounded-xl p-8 my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Food Services</h2>
            <p className="text-gray-800 leading-relaxed font-medium">PHCSE is a member of the National School Lunch Program. ALL MEALS (breakfast, lunch, supper, and snacks) ARE FREE.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><h3 className="font-bold text-[#0C0297] mb-2">School Nurse</h3><p className="text-sm text-gray-600">Donna Wallace<br/>412-793-6471 ext. 203<br/>donna.wallace@phcharter.org</p></div>
            <div><h3 className="font-bold text-[#0C0297] mb-2">Food Services</h3><p className="text-sm text-gray-600">Darlene Shook<br/>412-793-6471 ext. 224<br/>darlene.shook@phcharter.org</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
