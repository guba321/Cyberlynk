import NavBar from '../components/NavBar'
import HeroSection from '../components/WebDev/HeroSection'
import ProcessSection from '../components/WebDev/ProcessSection'
import TechStackMarquee from '../components/AppDev/TechStackMarquee'
import ContactSection from '../components/ContactSection'
import ContactFormSection from '../components/ContactFormSection'
import Footer from '../components/Footer'

const WebDev = () => {
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

export default WebDev