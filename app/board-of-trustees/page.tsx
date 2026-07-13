import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Board of Trustees' }

const board = [
  {
    name: 'Deon Nalley-Stoddard',
    role: 'President',
    term: 'exp. October 2027',
    photo: 'https://phcharter.org/wp-content/uploads/2024/11/Deon-300x224.jpeg',
    bio: 'Deon Nalley-Stoddard is a leader shaped by resilience, compassion, and a deep commitment to empowering others. A retired U.S. Army veteran with over 25 years of service, Deon\'s career has been defined by a dedication to guiding young people toward their highest potential.',
  },
  {
    name: 'Dr. DaVonna Shannon',
    role: 'Vice President',
    term: 'exp. October 2026',
    photo: 'https://phcharter.org/wp-content/uploads/2023/11/Dr_-DaVonna-Shannon.png',
    bio: 'Dr. DaVonna Shannon is the Director of Research and Impact for the Early Excellence Project and a professor in the University of Pittsburgh School of Education department of Urban Education.',
  },
  {
    name: 'Lena Abdullah-Perry',
    role: 'Secretary',
    term: 'exp. October 2026',
    photo: 'https://phcharter.org/wp-content/uploads/2023/12/headshot-240x300.jpg',
    bio: 'Ms. Abdullah-Perry has a long history of working with children and is currently a Master\'s candidate at Carlow University, studying Curriculum and Instruction: Early Childhood Leadership.',
  },
  {
    name: 'Michael A. Drop, CPA',
    role: 'Treasurer',
    term: 'exp. October 2027',
    photo: 'https://phcharter.org/wp-content/uploads/2024/10/Mike-Drop-240x300.jpg',
    bio: 'Mike is the Accounting & Auditing partner of Wasserman & Company, a public accounting firm in Pittsburgh.',
  },
  {
    name: 'Tuarone Thomas-Washington',
    role: 'Member',
    term: 'exp. October 2027',
    photo: 'https://phcharter.org/wp-content/uploads/2024/10/Tuarone-Thomas-Washington-296x300.jpg',
    bio: 'Mrs. Thomas-Washington currently works for the Larimer Consensus Group as the Executive Assistant, with over 35 years of experience in working with non-profits.',
  },
  {
    name: 'Samuel G. Morrow, MBA',
    role: 'Member',
    term: 'exp. January 2029',
    photo: 'https://phcharter.org/wp-content/uploads/2026/02/Headshot_Morrow-225x300.png',
    bio: 'Sam is the Assistant Controller for Clayton Kendall, LLC. His oldest son is currently enrolled at PHCSE.',
  },
  {
    name: 'Johnathan Harris',
    role: 'PHCSE Alumni Rep.',
    term: 'exp. May 2029',
    photo: 'https://phcharter.org/wp-content/uploads/2026/04/image-300x252.png',
    bio: 'Johnathan Harris is a PHCSE 2018 graduate and a skilled collision-repair planner/collision center manager at CDJR Collision of Pittsburgh.',
  },
]

const meetings2526 = [
  'August 28, 2025 (Annual Meeting)',
  'October 16, 2025',
  'December 18, 2025',
  'February 19, 2026',
  'April 16, 2026',
  'June 18, 2026',
]

export default function BoardPage() {
  return (
    <>
      <PageHero heading="Board of Trustees" />

      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-4">
            Contact: <a href="mailto:board@phcharter.org" className="text-[#0C0297] hover:underline">board@phcharter.org</a>
          </p>
          <p className="text-center text-gray-700 italic mb-12 max-w-3xl mx-auto">
            &ldquo;Our governing board is comprised of dedicated members of the Penn Hills Charter School of Entrepreneurship community. We are grateful for their continued governance, guidance, and leadership!&rdquo;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {board.map((m) => (
              <div key={m.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
                  <Image src={m.photo} alt={m.name} width={200} height={200} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0C0297]">{m.name}</h3>
                  <p className="text-[#E8B13B] font-semibold text-sm">{m.role}</p>
                  <p className="text-xs text-gray-400 mb-3">{m.term}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Meetings */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#0C0297] mb-2">School Board Meetings</h2>
            <p className="text-gray-600 text-sm mb-6">
              Meetings are held on the third Thursday of every other month at 7:00 p.m., 2501 Main Street, Pittsburgh, PA 15235.
            </p>
            <h3 className="font-semibold text-gray-800 mb-3">2025–2026 Meeting Dates</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {meetings2526.map((d) => (
                <li key={d} className="bg-white border border-gray-200 rounded px-4 py-2 text-sm text-gray-700">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
