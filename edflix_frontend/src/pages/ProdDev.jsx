import NavBar from '../components/NavBar'
import HeroSection from '../components/ProdDev/HeroSection'
import ProcessSection from '../components/ProdDev/ProcessSection'
import TechStackMarquee from '../components/ProdDev/TechStackMarquee'
import ContactSection from '../components/ContactSection'
import ContactFormSection from '../components/ContactFormSection'
import Footer from '../components/Footer'

const ProdDev = () => {
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

export default ProdDev