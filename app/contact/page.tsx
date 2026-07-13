import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Contact' }

const departments = [
  { role: 'General Information', email: 'info@phcharter.org', phone: '412-793-6471' },
  { role: 'CEO / Dr. Wayne Jones', email: 'wayne.jones@phcharter.org', phone: 'ext. 238' },
  { role: 'Principal / Dr. Abriana Leeper', email: 'abriana.leeper@phcharter.org', phone: 'ext. 230' },
  { role: 'Assistant Principal / Debra Titus', email: 'debra.titus@phcharter.org', phone: 'ext. 201' },
  { role: 'Dean of Students / Trevor Clinkscales', email: 'trevor.clinkscales@phcharter.org', phone: 'ext. 206' },
  { role: 'Dean of Students / Spencer Scott', email: 'spencer.scott@phcharter.org', phone: 'ext. 263' },
  { role: 'Special Education / Heather Ruppert', email: 'heather.ruppert@phcharter.org', phone: 'ext. 209' },
  { role: 'School Social Worker / Wanisha Green', email: 'wanisha.green@phcharter.org', phone: 'ext. 244' },
  { role: 'School Counselor / Tiarra Burton', email: 'tiarra.burton@phcharter.org', phone: 'ext. 234' },
  { role: 'School Nurse / Donna Wallace', email: 'donna.wallace@phcharter.org', phone: 'ext. 203' },
  { role: 'Food Services / Darlene Shook', email: 'darlene.shook@phcharter.org', phone: 'ext. 224' },
  { role: 'Human Resources', email: 'human.resources@phcharter.org', phone: '—' },
  { role: 'Board of Trustees', email: 'board@phcharter.org', phone: '—' },
  { role: 'Title IX / Valerie Y. Nance', email: 'valerie.nance@phcharter.org', phone: 'ext. 227' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero heading="Contact" />

      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-[#0C0297] mb-6">Get in Touch</h2>
            <address className="not-italic text-gray-700 space-y-2 mb-8">
              <p className="font-semibold">Penn Hills Charter School of Entrepreneurship</p>
              <p>2501 Main Street, Pittsburgh PA 15235</p>
              <p><a href="tel:4127936471" className="hover:text-[#0C0297] transition-colors">Phone: 412-793-6471</a></p>
              <p>Fax: 412-793-6473</p>
              <p><a href="mailto:info@phcharter.org" className="text-[#0C0297] hover:underline">info@phcharter.org</a></p>
              <p className="text-gray-500 text-sm">Hours: Monday – Thursday 9:00 a.m. – 2:00 p.m.</p>
            </address>

            <div className="bg-gray-50 rounded-lg p-5">
              <p className="text-sm text-gray-600">
                <strong>501(c)(3) Note:</strong> For questions regarding donations or partnerships, contact Dr. Wayne Jones at{' '}
                <a href="mailto:wayne.jones@phcharter.org" className="text-[#0C0297] hover:underline">wayne.jones@phcharter.org</a> or ext. 238.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0C0297] mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0297]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0297]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0297] resize-none" />
              </div>
              <button type="submit" className="bg-[#0C0297] text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-sm w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-8">Department Directory</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0C0297] text-white">
                  <th className="px-4 py-3 text-left">Department / Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((d, i) => (
                  <tr key={d.role} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-800">{d.role}</td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${d.email}`} className="text-[#0C0297] hover:underline">{d.email}</a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{d.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety tip */}
      <section className="bg-[#0C0297] py-10 px-4 text-center text-white">
        <p className="font-semibold">Safety Tip Line: Call <a href="tel:4127936473" className="text-[#E8B13B] hover:underline">412-793-6473</a> or submit through <a href="/safe-2-say-something" className="text-[#E8B13B] hover:underline">Safe2Say Something</a></p>
      </section>
    </>
  )
}
