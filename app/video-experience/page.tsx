export const metadata = {
  title: 'Video Experience — PHCSE',
  description:
    'An immersive scroll-driven story of Penn Hills Charter School of Entrepreneurship.',
}

export default function VideoExperiencePage() {
  return (
    <iframe
      src="/video-experience/index.html"
      title="PHCSE Video Experience"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        zIndex: 9999,
      }}
      allowFullScreen
    />
  )
}
