import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	CheckCircle,
} from 'lucide-react';

const TechJourney = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			offset: 100
		});
	}, []);

	const features = [
		"Understanding Your Business",
		"Reliable & Fast",
		"Transparent Collaboration",
		"Scalable Growth"
	];

	return (
		<div id="why-choose" className="overflow-hidden container mx-auto px-6 md:px-20 py-16 lg:py-24 bg-gray-900 text-white">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

				{/* Left Content */}
				<div data-aos="fade-right">
					<div className="mb-8">
						<h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
							Why <span className="text-blue-600">We're The Right Fit</span>
							<br />
							For Your Tech Journey
						</h2>
					</div>

					{/* Team Image */}
					<div className="relative" data-aos="zoom-in" data-aos-delay="200">
						<div className="rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="/images/techJourney.png"
								alt="Team collaboration"
								className="w-full h-auto object-cover"
							/>
						</div>
						{/* Optional: Add a subtle border/glow effect */}
						<div className="absolute inset-0 rounded-2xl border border-gray-700 pointer-events-none"></div>
					</div>
				</div>

				{/* Right Content */}
				<div data-aos="fade-left" data-aos-delay="300">
					<p className="text-gray-400 leading-relaxed">
						We Combine Speed, Security, And Startup-Focused
						Thinking To Help You Build Smarter, Launch Faster, And
						Scale With Confidence.
					</p>
					<h3 className="text-2xl lg:text-3xl font-bold my-6">
					Partnering With You To Build Secure Digital Solutions
					</h3>
					<p className="space-y-6 text-gray-300 leading-relaxed">
					We Don't Just Test Or Audit Systems. We Help You Build Resilient, High-Performance Digital Products That Withstand Modern Cyber Threats. <br />
					With A Blend Of Expertise And Advanced Security Practices, We Craft Seamless, Protected Experiences That Empower Businesses To Grow Safely In The Digital World.
					</p>

					{/* Feature Points */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex items-center space-x-3 group"
								data-aos="fade-up"
							>
								<div className="flex-shrink-0">
									<div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<CheckCircle className="w-4 h-4 text-white" />
									</div>
								</div>
								<span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
									{feature}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechJourney