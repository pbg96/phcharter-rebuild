import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Legislature' }

export default function Page() {
  return (
    <>
      <PageHero heading="Legislature" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">The PHCSE MicroSociety legislature includes a President, Vice President, and representatives at each grade level.</p>
          <h2 className="text-xl font-bold text-[#0C0297] mb-3">Roles in the Legislature</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li><strong>President:</strong> Serves as the head of the executive branch</li>
            <li><strong>Vice President:</strong> Leads the Congress, casts tie-breaking votes</li>
            <li><strong>Representatives:</strong> One per classroom — introduce and vote on bills</li>
            <li><strong>Secretary:</strong> Keeps meeting minutes and tracks officer eligibility</li>
          </ul>
          <div className="flex gap-4"><a href="/constitution" className="inline-block bg-[#0C0297] text-white font-semibold px-5 py-2.5 rounded hover:bg-blue-800 transition-colors text-sm">View Constitution</a><a href="/bill-of-rights" className="inline-block border-2 border-[#0C0297] text-[#0C0297] font-semibold px-5 py-2.5 rounded hover:bg-gray-50 transition-colors text-sm">Bill of Rights</a></div>
        </div>
      </section>
    </>
  )
}
