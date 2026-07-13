import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Leadership Team' }

const team = [
  {
    name: 'Dr. Wayne Jones',
    title: 'Chief Executive Officer',
    photo: 'https://phcharter.org/wp-content/uploads/2022/07/PHCSE-HEADSHOTS-Photo-by-Emmai-Alaquiva-38-200x300.jpg',
    email: 'wayne.jones@phcharter.org',
    phone: '412-793-6471 ext. 238',
    education: [
      'Point Park University: Ed.D. in Leadership and Administration',
      'California University of Pennsylvania: MBA, B.S. Sports Management/Finance',
      'PA Certifications: Superintendent PK-12',
    ],
  },
  {
    name: 'Dr. Abriana Leeper',
    title: 'Principal',
    photo: 'https://phcharter.org/wp-content/uploads/2025/06/Dr.-Leeper-300x248.jpg',
    email: 'abriana.leeper@phcharter.org',
    phone: '412-793-6471 ext. 230',
    education: [
      'University of Pittsburgh: Ed.D. in Urban Education, M.Ed. Secondary-Special Education & ELA, B.A. Humanities/History',
      'PA Certifications: Principal PK-12',
    ],
  },
  {
    name: 'Debra Titus',
    title: 'Assistant Principal',
    photo: 'https://phcharter.org/wp-content/uploads/2026/06/DST_4244-2-283x300.jpg',
    email: 'debra.titus@phcharter.org',
    phone: '412-793-6471 ext. 201',
    education: [
      'Chatham University: M.A. in Teaching, B.A. in Elementary Education',
      'PA Certifications: Principal PK-12',
    ],
  },
  {
    name: 'Trevor Clinkscales',
    title: 'Dean of Students',
    photo: 'https://phcharter.org/wp-content/uploads/2022/07/Screen-Shot-2022-07-07-at-12.16.16-PM-300x236.png',
    email: 'trevor.clinkscales@phcharter.org',
    phone: '412-793-6471 ext. 206',
    education: [
      'Duquesne University: M.A. in Education Administration',
      'University of Pittsburgh: B.S. in Applied Developmental Psychology',
      'PA Certifications: Crisis Prevention Institute Trainer',
    ],
  },
  {
    name: 'Spencer Scott',
    title: 'Dean of Students',
    photo: 'https://phcharter.org/wp-content/uploads/2025/11/Spencer-Scott-300x250.jpg',
    email: 'spencer.scott@phcharter.org',
    phone: '412-793-6471 ext. 263',
    education: [
      'University of Pittsburgh: Master of Social Work',
      'Stillman College: B.A. in Elementary Education',
    ],
  },
  {
    name: 'Heather Ruppert',
    title: 'Special Education Coordinator',
    photo: 'https://phcharter.org/wp-content/uploads/2022/07/PHCSE-HEADSHOTS-Photo-by-Emmai-Alaquiva-20-200x300.jpg',
    email: 'heather.ruppert@phcharter.org',
    phone: '412-793-6471 ext. 209',
    education: [
      'Duquesne University: M.Ed. School Psychology',
      'University of Pittsburgh: B.A. Psychology',
      'PA Certifications: School Psychologist PK-12',
    ],
  },
  {
    name: 'Wanisha Green',
    title: 'School Social Worker',
    photo: 'https://phcharter.org/wp-content/uploads/2025/11/Wanisha-Green-300x170.jpeg',
    email: 'wanisha.green@phcharter.org',
    phone: '412-793-6471 ext. 244',
    education: [
      'California University of Pennsylvania: Master of Social Work, Bachelor of Social Work',
      'PA Certifications: Licensed Social Worker',
    ],
  },
  {
    name: 'Tiarra Burton',
    title: 'School Counselor',
    photo: null,
    email: 'tiarra.burton@phcharter.org',
    phone: '412-793-6471 ext. 234',
    education: [
      'Indiana University of Pennsylvania: M.Ed. School Counseling, B.S. in Criminology/English Literature',
      'PA Certifications: School Counselor PK-12',
    ],
  },
]

export default function LeadershipTeamPage() {
  return (
    <>
      <PageHero heading="Leadership Team" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-20 h-20 bg-[#0C0297] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0C0297] text-base">{member.name}</h3>
                <p className="text-[#E8B13B] font-semibold text-sm mb-3">{member.title}</p>
                <p className="text-xs text-gray-500 mb-1">
                  <a href={`mailto:${member.email}`} className="hover:text-[#0C0297] transition-colors">{member.email}</a>
                </p>
                <p className="text-xs text-gray-500 mb-3">{member.phone}</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {member.education.map((e) => (
                    <li key={e} className="leading-snug">{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
