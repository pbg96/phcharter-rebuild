import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Community Resources' }

export default function Page() {
  return (
    <>
      <PageHero heading="Community Resources" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div><h2 className="text-xl font-bold text-[#0C0297] mb-3">Grief Support</h2>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Highmark Caring Place:</strong> 1-888-734-4073</li>
                <li><strong>resolve Crisis Network:</strong> 1-888-796-8226 (24/7, free, all Allegheny County residents)</li>
              </ul>
            </div>
            <div><h2 className="text-xl font-bold text-[#0C0297] mb-3">Student Assistance Program (SAP)</h2>
              <p className="text-gray-700 text-sm leading-relaxed">The PHCSE SAP team helps students who experience barriers to learning access school and community services. Contact school at 412-793-6471.</p>
            </div>
            <div><h2 className="text-xl font-bold text-[#0C0297] mb-3">McKinney-Vento Homeless Assistance</h2>
              <p className="text-gray-700 text-sm leading-relaxed">If your family lacks a fixed, regular nighttime residence, your student may qualify for assistance. Contact: 412-793-6471.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
