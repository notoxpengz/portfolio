import Hero from '@/components/Hero'
import RhombusGrid from '@/components/RhombusGrid'
import ProofSection from '@/components/ProofSection'
import BookingSection from '@/components/BookingSection'
import XFeedSection from '@/components/XFeedSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <RhombusGrid />
      <ProofSection />
      <BookingSection />
      <XFeedSection />
    </div>
  )
}
