import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Users, Layout, Code, Shield } from 'lucide-react';

const ProcessSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);
	
	const processSteps = [
		{
			number: "01",
			title: "Idea Validation & Planning",
			description: "We refine your concept and prioritize what to build first for impact.",
			icon: Users,
			imagePath: "./images/process1.png"
		},
		{
			number: "02",
			title: "Wireframing & UI/UX Design",
			description: "Mobile-first design with smooth, intuitive interfaces for both iOS and Android.",
			icon: Layout,
			imagePath: "./images/process2.png"
		},
		{
			number: "03",
			title: "MVP Development",
			description: "Build lean, focused versions using agile methods and fast feedback loops.",
			icon: Code,
			imagePath: "./images/process3.png"
		},
		{
			number: "04",
			title: "Testing & Launch Support",
			description: "Test early, iterate fast, and go live with a secure, scalable foundation.",
			icon: Shield,
			imagePath: "./images/process4.png"
		}
	];

	return (
		<section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-32" data-aos="fade-up">
					<h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
						Our Process
					</h2>
					<p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
						A clear process to build fast, secure, and scalable websites.
					</p>
				</div>

				{/* Process Grid */}
				<div className="grid md:grid-cols-2 gap-y-32 gap-x-10">
					{processSteps.map((step, index) => {
						const IconComponent = step.icon;
						return (
							<div
								key={index}
								className="flex flex-col relative"
								data-aos="fade-up"
								data-aos-delay={index * 200}
							>
								{/* Background Number */}
								<div className="absolute -top-24 text-6xl md:text-9xl font-bold text-blue-100 select-none pointer-events-none z-0">
									{step.number}
								</div>

								{/* Card */}
								<div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 z-10 border border-gray-100">
									{/* Card Image/Icon Area */}
									<div className="mb-8 relative">
										<div className="w-full h-fit bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
											{/* Replace this div with actual image when available */}
											<img
												src={step.imagePath}
												alt={step.title}
												className="w-full h-full object-cover rounded-2xl"
												onError={(e) => {
													// Fallback to icon if image doesn't exist
													e.target.style.display = 'none';
													e.target.nextElementSibling.style.display = 'flex';
												}}
											/>
											{/* Fallback Icon */}
											<div className="absolute inset-0 hidden items-center justify-center">
												<div className="relative">
													{/* Decorative elements */}
													<div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
													<div className="absolute -bottom-6 -right-6 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
													<div className="absolute top-2 right-4 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-50"></div>

													{/* Main Icon */}
													<div className="bg-white p-6 rounded-2xl shadow-lg">
														<IconComponent className="w-12 h-12 text-blue-600" />
													</div>

													{/* Connection lines */}
													<div className="absolute top-1/2 -left-8 w-6 h-0.5 bg-blue-300 opacity-60"></div>
													<div className="absolute top-1/2 -right-8 w-6 h-0.5 bg-blue-300 opacity-60"></div>
													<div className="absolute -top-8 left-1/2 w-0.5 h-6 bg-blue-300 opacity-60"></div>
													<div className="absolute -bottom-8 left-1/2 w-0.5 h-6 bg-blue-300 opacity-60"></div>
												</div>
											</div>
										</div>
									</div>

									{/* Card Content */}
									<div>
										<h3 className="text-2xl font-bold text-gray-900 mb-4">
											{step.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;