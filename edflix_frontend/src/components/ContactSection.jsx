import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<section className="py-20 px-6 md:px-20 bg-gray-50">
			<div className="max-w-7xl mx-auto space-y-8 overflow-hidden">
				{/* Top Box - Content Left, Image Right */}
				<div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-gray-100">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						{/* Content Left */}
						<div className="space-y-6" data-aos="fade-right">
							<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
								Speak with an{' '}
								<span className="block">optimization specialist</span>
							</h2>
							<div className="space-y-4 text-gray-600">
								<p className="text-lg">
									Ready to launch a website that truly works for your business?
								</p>
								<p className="text-lg">
									Let's make it happen
								</p>
							</div>
							<button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300">
								Book a call
							</button>
						</div>

						{/* Image Right */}
						<div className="flex justify-center lg:justify-end" data-aos="fade-left">
							<div className="w-64 h-64 md:w-80 md:h-80 relative">
								<img src="./images/specIcon.png" alt="spec" />
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Row - Three Social Media Boxes */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* LinkedIn Box */}
					<div
						className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="space-y-6">
							<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
								<Linkedin className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Connect on LinkedIn
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed mb-6">
									Connect with us on LinkedIn and hear about the latest.
								</p>
								<button className="w-full bg-gray-50 text-gray-900 py-3 px-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
									Connect with us
								</button>
							</div>
						</div>
					</div>

					{/* Instagram Box */}
					<div
						className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="space-y-6">
							<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
								<Instagram className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Follow us on Instagram
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed mb-6">
									Collaborate, contribute, and build the future together.
								</p>
								<button className="w-full bg-gray-50 text-gray-900 py-3 px-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
									Follow @edflix_sol
								</button>
							</div>
						</div>
					</div>

					{/* X (Twitter) Box */}
					<div
						className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						<div className="space-y-6">
							<div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
								<Twitter className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Follow us on X
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed mb-6">
									Stay in the loop with our latest UX/AI innovations and insights.
								</p>
								<button className="w-full bg-gray-50 text-gray-900 py-3 px-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
									Follow @edflix_sol
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;