interface PageHeroProps {
  heading: string
  subheading?: string
}

export function PageHero({ heading, subheading }: PageHeroProps) {
  return (
    <section className="bg-[#0C0297] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">{heading}</h1>
        {subheading && <p className="mt-3 text-blue-200 text-lg">{subheading}</p>}
      </div>
    </section>
  )
}
