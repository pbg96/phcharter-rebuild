import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Advancing Youth Initiative' }

export default function Page() {
  return (
    <>
      <PageHero heading="Advancing Youth Initiative" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-8">The mission of Advancing Youth Initiative (AYI) is to support the health, welfare, and educational interests of the Penn Hills Charter School of Entrepreneurship. AYI is the philanthropic arm of PHCSE and is a 501(c)(3) nonprofit.</p>
          <img src="https://phcharter.org/wp-content/uploads/2021/11/Advancing-Youth-Logo-transparent-300x300.png" alt="AYI Logo" className="w-32 h-32 object-contain mb-8"/>
          <h2 className="text-xl font-bold text-[#0C0297] mb-4">AYI Board of Directors</h2>
          <ul className="text-gray-700 text-sm space-y-1 mb-8">
            {["Dr. Lisa Palmieri — President","Derrick Tillman — Vice President","Charles Thomas — Treasurer","Debbie Hickman — Secretary","Dr. Wayne Jones — CEO, PHCSE","Leon Ford","Allen Zeolla, AAMS"].map((m)=><li key={m}>• {m}</li>)}
          </ul>
          <a href="/donate" className="inline-block bg-[#0C0297] text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition-colors text-sm">Donate to AYI</a>
        </div>
      </section>
    </>
  )
}
