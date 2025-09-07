import NavBar from '../components/NavBar'
import HeroSection from '../components/Apii/HeroSection'
import ProcessSection from '../components/Apii/ProcessSection'
import TechStackMarquee from '../components/AppDev/TechStackMarquee'
import ContactSection from '../components/ContactSection'
import ContactFormSection from '../components/ContactFormSection'
import Footer from '../components/Footer'

const Apii = () => {
	return (
		<div className="min-h-screen">
			<NavBar />
			<HeroSection />
			<ProcessSection />
			<TechStackMarquee />
			<ContactSection />
			<ContactFormSection />
			<Footer />
		</div>
	)
}

export default Apii