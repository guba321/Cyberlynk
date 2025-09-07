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
					className="w-full h-full object-cover object-bottom"
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
				<div className="text-center max-w-4xl" data-aos="fade-down">
					{/* Main Heading */}
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
					Robust and Secure APIs
					</h1>

					{/* Subheading */}
					<h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
						<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
						Robust, Reliable, and Compliant
						</span>
					</h2>

					{/* Description */}
					<p className="text-gray-600 md:text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
					We perform comprehensive API penetration testing to identify vulnerabilities, validate security controls, and ensure your integrations remain secure, scalable, and resilient against evolving threats.
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