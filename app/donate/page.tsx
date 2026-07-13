import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Donate' }

export default function DonatePage() {
  return (
    <>
      <PageHero heading="Donate" subheading="Support Our Students" />

      <section className="bg-[#E8B13B] py-8 px-4 text-center">
        <p className="text-gray-900 font-medium max-w-3xl mx-auto">
          Your contribution will benefit the mission of PHCSE by providing real-world experiences for our scholars. The Advancing Youth Initiative (AYI) seeks to generate sponsorships and donations to support the future growth and sustainability of PHCSE.
        </p>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-8">Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Online', desc: 'Donate securely by credit card.', action: 'Donate Online', href: '#' },
              { title: 'By Check', desc: 'Make checks payable to: Advancing Youth Initiative — Mail to: AYI, 7336 Saltsburg Road, Pittsburgh, PA 15235', action: null, href: null },
              { title: 'Amazon Smile', desc: 'Shop at smile.amazon.com and select Penn Hills Charter School of Entrepreneurship as your charity.', action: null, href: null },
            ].map((w) => (
              <div key={w.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#0C0297] text-lg mb-3">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{w.desc}</p>
                {w.action && (
                  <a href={w.href!} className="inline-block bg-[#0C0297] text-white font-semibold text-sm px-5 py-2 rounded hover:bg-blue-800 transition-colors">
                    {w.action}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center">
            <Image src="https://phcharter.org/wp-content/uploads/2021/11/Advancing-Youth-Logo-transparent-300x300.png" alt="AYI Logo" width={120} height={120} className="object-contain shrink-0" />
            <div>
              <h3 className="font-bold text-[#0C0297] text-xl mb-3">About Advancing Youth Initiative</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The mission of Advancing Youth Initiative (AYI) is to support the health, welfare, and educational interests of the Penn Hills Charter School of Entrepreneurship. AYI is the philanthropic arm of PHCSE and is a 501(c)(3) nonprofit — your contribution is tax deductible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
