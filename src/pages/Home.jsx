import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import AboutPreview from '../components/home/AboutPreview'
import TeamPreview from '../components/home/TeamPreview'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

export default function Home() {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <AboutPreview />
            <TeamPreview />
            <Testimonials />
            <CTASection />
        </>
    )
}