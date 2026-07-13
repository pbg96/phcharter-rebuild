import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Job Opportunities' }

export default function Page() {
  return (
    <>
      <PageHero heading="Job Opportunities" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">Penn Hills Charter School of Entrepreneurship is always looking for talented, passionate, and dedicated professionals to join our team.</p>
          <h2 className="text-xl font-bold text-[#0C0297] mb-4">How to Apply</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-8">
            <li>Email your application, authorized release of information, and resume to: <a href="mailto:human.resources@phcharter.org" className="text-[#0C0297] hover:underline">human.resources@phcharter.org</a></li>
            <li>Current open positions are listed in our applicant tracking system through Skyward.</li>
          </ol>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-[#0C0297] mb-2">Required Clearances</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Act 151 — Pennsylvania Child Abuse History Clearance</li>
              <li>• Act 34 — Pennsylvania Criminal History Clearance</li>
              <li>• Act 114 — FBI Fingerprint Clearance</li>
            </ul>
            <a href="/clearances-overview" className="inline-block mt-3 text-[#0C0297] text-sm font-medium hover:underline">View Clearances Details →</a>
          </div>
          <div className="mt-6 border-t pt-6">
            <p className="text-gray-700 text-sm">Human Resources | 2501 Main Street, Pittsburgh, PA 15235<br/><a href="mailto:human.resources@phcharter.org" className="text-[#0C0297] hover:underline">human.resources@phcharter.org</a> | 412-793-6471</p>
          </div>
        </div>
      </section>
    </>
  )
}
