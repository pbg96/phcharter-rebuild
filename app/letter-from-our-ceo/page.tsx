import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'

export const metadata: Metadata = { title: 'Letter From Our CEO' }

export default function Page() {
  return (
    <>
      <PageHero heading="Letter From Our CEO" />
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="shrink-0"><img src="https://phcharter.org/wp-content/uploads/2021/01/headshot-683x1024.jpg" alt="Dr. Wayne Jones" className="w-40 rounded-xl object-cover" /></div>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>Dear Penn Hills Charter School of Entrepreneurship Family,</p>
              <p>As a Black man, born and raised in Garfield, a predominantly Black community in the city of Pittsburgh, I am angry and hurt. Like many of you, I have struggled to find words to express my feelings, but simply put, racism and inequality is not OK.</p>
              <p>To our Students: You are beautiful, you are smart, you are resilient. You are the beholders of your future, and most importantly change.</p>
              <p>To our Parents/Guardians: Continue to educate, reinforce, and instill values into your beautiful babies that will prepare them for the real world.</p>
              <p>To our Staff: Continue to be brave. Do not be afraid to open up and build relationships with your colleagues and students.</p>
              <p>Penn Hills Charter School of Entrepreneurship will always be a place where all people are valued, appreciated, and respected.</p>
              <p className="font-semibold">With love,<br/>Dr. Wayne Jones<br/>Chief Executive Officer<br/><a href="mailto:wayne.jones@phcharter.org" className="text-[#0C0297] hover:underline">wayne.jones@phcharter.org</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
