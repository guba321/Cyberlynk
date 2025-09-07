import NavBar from '../components/NavBar';
import HeroSection from '../components/Home/HeroSection';
import TechProductRisksSection from '../components/Home/TechProductRisksSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import TechServicesLanding from '../components/Home/TechServicesLanding';
import TechJourney from '../components/Home/TechJourney';
import TechnologiesSection from '../components/Home/TechnologiesSection';
import TeamCarousel from '../components/Home/TeamCarousel';
import BlogSection from '../components/Home/BlogSection';
import GetStarted from '../components/Home/GetStarted';
import Footer from '../components/Home/Footer';

const Home = () => {
	return (
		<div className="min-h-screen">
			<NavBar />
			<HeroSection />
			<TechProductRisksSection />
			<FeaturesSection />
			<TechServicesLanding />
			<TechJourney />
			<TechnologiesSection />
			<TeamCarousel />
			<BlogSection />
			<GetStarted />
			<Footer />
		</div>
	);
};

export default Home;