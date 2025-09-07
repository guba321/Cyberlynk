import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	Code,
	Monitor,
	Lock,
	TrendingUp,
} from 'lucide-react';

const TechProductRisksSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const risks = [
		{
			icon: <Code size={48} className="text-blue-500" />,
			title: "Not Confident in Your Security Solution?",
			description: "We Help Validate Your Idea With Real-World Use Cases & Expert Feedback.",
			stat: "24/7",
			statLabel: "Project Visibility"
		},
		{
			icon: <Code size={48} className="text-green-500" />,
			title: "Lack Cybersecurity Architecture Guidance?",
			description: "We Help You Prioritize Security Features, Build Scalable & Secure Systems.",
			stat: "90%",
			statLabel: "Security Minded"
		},
		{
			icon: <Monitor size={48} className="text-purple-500" />,
			title: "Built A Tool But Not Sure What’s Next Step?",
			description: "From MVP To Enterprise-Ready — We Help You Scale With Security At The Core.",
			stat: "95%",
			statLabel: "Focus On Scalability"
		},
		{
			icon: <Lock size={48} className="text-red-500" />,
			title: "Worried Your App Isn’t Secure Anymore Now?",
			description: "We Identify Vulnerabilities, Fix Gaps, And Build Zero-Trust Systems.",
			stat: "95%",
			statLabel: "Transparent Process"
		}
	];

	return (
		<section id="about" className="overflow-hidden py-12 lg:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
			<div className="max-w-7xl mx-auto px-6 md:px-20">
				{/* Header Section */}
				<div className="lg:text-left lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-12 lg:mb-16">
					{/* Left side - Title */}
					<div data-aos="fade-right">
						<h2 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
							<span className="text-blue-600">Launching a tech product?</span> Don't
							<br className="hidden lg:block" />
							let these risks slow you down
						</h2>
					</div>

					{/* Right side - Description */}
					<div data-aos="fade-left" data-aos-delay="200">
						<p className="text-gray-600 leading-relaxed">
						From data breaches to compliance gaps, oversights can slow down your product launch. We ensure your technology is reliable and protected from the start—giving you confidence and assurance.
						</p>
					</div>
				</div>

				{/* Risk Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{risks.map((risk, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 text-center relative overflow-hidden"
							data-aos="fade-up"
							data-aos-delay={index * 150}
						>
							{/* Background gradient on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

							<div className="relative z-10">
								<div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
									{risk.icon}
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
									{risk.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
									{risk.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Statistics - Below cards in desktop */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{risks.map((risk, index) => (
						<div
							key={index}
							className="text-center group cursor-pointer"
							data-aos="zoom-in"
							data-aos-delay={index * 100}
						>
							<div className="flex items-center justify-center gap-2 mb-2 group-hover:scale-110 transition-transform duration-300">
								<TrendingUp size={20} className="text-green-500 group-hover:text-green-600 transition-colors duration-300" />
								<span className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
									{risk.stat}
								</span>
							</div>
							<p className="text-sm text-gray-500 font-medium group-hover:text-gray-600 transition-colors duration-300">
								{risk.statLabel}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Floating background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute top-1/4 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
					data-aos="fade"
					data-aos-delay="1000"
				></div>
				<div
					className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
					data-aos="fade"
					data-aos-delay="1200"
				></div>
			</div>
		</section>
	);
};
export default TechProductRisksSection