import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const handleScrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offsetTop = element.offsetTop - 55;
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
		setIsOpen(false); // Close mobile menu after clicking
	};

	return (
		<div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
			{/* Background Wave */}
			<div className="absolute bottom-0 left-0 w-full" data-aos="fade-up">
				<img
					src="./images/webDevHero.png"
					alt="Wave"
					className="w-full h-full hidden md:block object-cover object-bottom bg-center"
				/>
				<img
					src="./images/webDevHeroResp.png"
					alt="Wave"
					className="w-full h-full md:hidden block object-cover object-bottom bg-center"
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 container mx-auto px-6 flex items-center justify-center min-h-screen">
				<div className="text-center max-w-4xl" data-aos="fade-down">
					{/* Main Heading */}
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
					Securing Your Web Applications
					</h1>

					{/* Subheading */}
					<h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
						<span className="bg-gradient-to-r from-blue-600 to-[#999CFF] bg-clip-text text-transparent">
							Fast, Secure, And Reliable
						</span>
					</h2>

					{/* Description */}
					<p className="text-gray-600 md:text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
					Your web application is your business backbone. We perform comprehensive penetration testing to uncover vulnerabilities, ensure compliance, and strengthen your application against real-world cyber threats.
					</p>

					{/* CTA Button */}
					<div className="inline-block">
						<button className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto"
						onClick={() => handleScrollTo('contactservice')}>
							<Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;