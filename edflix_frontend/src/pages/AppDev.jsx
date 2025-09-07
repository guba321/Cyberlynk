import NavBar from '../components/NavBar'
import HeroSection from '../components/AppDev/HeroSection'
import ProcessSection from '../components/AppDev/ProcessSection'
import TechStackMarquee from '../components/AppDev/TechStackMarquee'
import ContactSection from '../components/ContactSection'
import ContactFormSection from '../components/ContactFormSection'
import Footer from '../components/Footer'

const AppDev = () => {
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

export default AppDev