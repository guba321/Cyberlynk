import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturesSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const features = [
		{
			icon: './images/icon.png',
			title: "Rapid Prototyping with Long-Term Security in Mind",
			color: "text-orange-400"
		},
		{
			icon: './images/prodIcon.png',
			title: "Product Thinking To Guide Your Roadmap",
			color: "text-blue-400"
		},
		{
			icon: './images/cyberIcon.png',
			title: "Built-In Cybersecurity From The First Line Of Code",
			color: "text-cyan-400"
		}
	];

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<img src="./images/featureBg.png" alt="" className='absolute w-full min-h-screen object-cover bg-center' />
			<div className="relative z-10 container mx-auto px-6 md:px-20 py-12 lg:py-20">
				{/* Main Heading */}
				<div
					className="flex flex-col items-center text-center space-y-6 mb-16"
					data-aos="fade-up"
				>
					<h1 className="text-2xl md:text-3xl font-bold leading-tight">
						Here's{' '}
						<span className="text-blue-600 inline-block">
							How CyberLynk Helps You
						</span>
						<br />
						Launch With Confidence
					</h1>
					<p className="text-xs md:text-lg text-gray-300 max-w-2xl">
					Whether you're facing data breaches, compliance challenges, or hidden security gaps, we’re here to strengthen your defenses and keep your business safe.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-10 items-center">
					{/* Left Content - Features */}
					<div className="flex flex-col gap-10">
						{features.map((feature, index) => (
							<div
								key={index}
								className={`flex items-start w-full md:w-72 space-x-4 group cursor-pointer transition-transform duration-300 hover:translate-x-2 ${index % 2 === 1 ? 'self-end' : ''}`}
								data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
							>
								<div className={`p-3 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-all duration-300 flex-shrink-0`}>
									<img
										src={feature.icon}
										className={`w-6 h-6 ${feature.color}`}
										alt={`${feature.title} icon`}
									/>
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
										{feature.title}
									</h3>
								</div>
							</div>
						))}
					</div>

					{/* Right Image */}
					<div
						className="relative order-1 lg:order-2"
						data-aos="fade-left"
						data-aos-delay="200"
					>
						<img
							src="./images/hero2.png"
							alt="Team collaboration meeting"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection