import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Budgets & Financial Audits' }

export default function Page() {
  return (
    <>
      <PageHero heading="Budgets & Financial Audits" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C0297] mb-6">Annual Budgets</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[["2026-2027 Budget","https://phcharter.org/wp-content/uploads/2026/06/PHCSE-FY27-Budget.pdf"],["2025-2026 Budget",null],["2024-2025 Budget",null],["2023-2024 Budget",null]].map(([y,h])=>(
              <div key={y} className="border border-gray-200 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-[#0C0297] mb-2">{y}</p>
                {h ? <a href={h} target="_blank" rel="noopener noreferrer" className="text-xs text-[#E8B13B] font-medium hover:underline">Download PDF</a> : <span className="text-xs text-gray-400">Coming Soon</span>}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-[#0C0297] mb-6">Financial Audits & 990 Forms</h2>
          <div className="space-y-3">
            {[["FY25","https://phcharter.org/wp-content/uploads/2026/01/PHCSE-FY25-Audit.pdf","https://phcharter.org/wp-content/uploads/2026/06/PHCSE-990-FY25.pdf"],["FY24","https://phcharter.org/wp-content/uploads/2024/12/FY24-Auditt.pdf","https://phcharter.org/wp-content/uploads/2025/06/FY24-PHCSE-990.pdf"]].map(([fy,audit,form990])=>(
              <div key={fy} className="flex items-center gap-6 border-b border-gray-100 pb-3">
                <span className="font-semibold text-gray-700 w-12">{fy}</span>
                <a href={audit} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0C0297] hover:underline">Audit</a>
                <a href={form990} target="_blank" rel="noopener noreferrer" className="text-sm text-[#0C0297] hover:underline">990</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
