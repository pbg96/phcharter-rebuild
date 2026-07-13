import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { ScrollReveal } from '@/components/ScrollReveal'

export const metadata: Metadata = { title: 'About Us' }

export default function AboutPage() {
  return (
    <>
      <PageHero heading="About Us" />

      {/* Main Content */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              The Penn Hills Charter School of Entrepreneurship (PHCSE) is a K-8 public school in Pittsburgh,
              Pennsylvania. We opened our doors in 2011, and have since grown to educate hundreds of students from more
              than fifteen (15) school districts throughout the Greater Pittsburgh region.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At PHCSE students are educated in an innovative, hands-on, engaging entrepreneurship program, which is
              aligned with Pennsylvania Common Core standards. Our curriculum incorporates entrepreneurship theory and
              practice in English language arts, math, science, and social studies to bring entrepreneurial and
              economic concepts alive for students.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our youth entrepreneurs produce goods and services and compete in our annual pitch competition called
              Soaring Shark Tank. Our elected officials establish laws, Crime Stoppers keep the peace, judges arbitrate
              disputes, and reporters track down stories. All students develop innovative ideas, write business plans,
              write resumes, earn wages in the school&apos;s &quot;inventive&quot; form of currency, invest in product ideas,
              deposit and borrow money from &quot;inventive&quot; banks, and pay taxes and rent.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision — SCROLL ANIMATED */}
      <section id="mission" className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal stagger staggerDelay={100}>
            <span className="text-xs font-semibold text-[#E8B13B] uppercase tracking-widest mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C0297] mb-10">Mission &amp; Vision</h2>
          </ScrollReveal>

          <ScrollReveal stagger staggerDelay={120} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0C0297] text-white rounded-xl p-8 h-full">
              <div className="w-12 h-1 bg-[#E8B13B] mb-6" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                Our mission is to ensure all students have a real-life 21st-century learning experience, in an
                innovative, community based public school setting that enables them to reach their highest potential.
              </p>
            </div>

            <div className="bg-[#E8B13B] text-gray-900 rounded-xl p-8 h-full">
              <div className="w-12 h-1 bg-[#0C0297] mb-6" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-800 leading-relaxed">
                Our vision is for every student to discover their pathway for lifelong success.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* We Care Emblem */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#0C0297] mb-4">Soaring to Success</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe in Soaring to Success by building strong{' '}
              <strong>C</strong>haracter, <strong>A</strong>cademics, <strong>R</strong>elationships, and{' '}
              <strong>E</strong>ntrepreneurs for a <strong>L</strong>ife of <strong>L</strong>eadership.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://phcharter.org/wp-content/uploads/2023/09/We-Care-Emblem-1_Blue-1024x1024.png"
              alt="We Care Emblem"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Equity Statement */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0C0297] mb-8">Equity Statement</h2>
          <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
            <p>
              Penn Hills Charter School of Entrepreneurship (PHCSE) recognizes that we are part of an academic and
              cultural community committed to fostering integrity, respect, and justice. Aiming to learn from each other,
              we reject all forms of hate and discrimination. To ensure this, our school will continue to adopt and use
              inclusive practices and programs that create an opportunity for all. In the classroom, we promote active
              learning about diversity that allows both students and faculty to effectively acquire cultural competence.
              Both in and beyond the classroom, we envision an inclusive community.
            </p>
            <p>
              PHCSE does not discriminate within its educational programs, activities, or against stakeholders. Students
              are educated in programs that foster knowledge, respect, and appreciation for the historical and
              contemporary contributions of diverse cultural groups to society which includes those of all sexual
              orientations, race, color, national origin, gender, gender identity, disability, religion, creed, and
              socioeconomic status.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
