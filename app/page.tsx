import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Urgency from '@/components/Urgency'
import Purpose from '@/components/Purpose'
import Guest from '@/components/Guest'
import Registration from '@/components/Registration'
import Shirt from '@/components/Shirt'
import Location from '@/components/Location'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Urgency />
        <Purpose />
        <Guest />
        <Registration />
        <Shirt />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}