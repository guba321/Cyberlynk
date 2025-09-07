import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ExternalLink } from 'lucide-react';

const ContactFormSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		projectStage: '',
		startDate: '',
		projectGoals: ''
	});

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission here
	};

	return (
		<section className="py-20 px-6 md:px-20">
			<div id="contactservice" className="max-w-7xl mx-auto">
				<div
					className="bg-gradient-to-br from-[#374e7a] via-[#789bc1] to-[#a2c4df] rounded-3xl p-8 md:p-16 shadow-xl"
					data-aos="fade-up"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
						{/* Left Content */}
						<div className="text-white space-y-6">
							<div className="space-y-2">
								<p className="text-blue-200 font-medium tracking-wider uppercase text-sm">
									LET'S TALK
								</p>
								<h2 className="text-4xl md:text-4xl font-semibold leading-tight">
									Start Your Website Journey with a Trusted Tech Partner
								</h2>
							</div>
							<p className="text-blue-100 text-lg leading-relaxed">
								Fill out a few details and we'll help you plan, build, and launch the website your business needs.
							</p>
						</div>

						{/* Right Form */}
						<div className="space-y-6">
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Name and Email Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label className="text-white text-sm font-medium">Name</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder="Enter your name"
											className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-white text-sm font-medium">Email</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="Enter your email"
											className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
										/>
									</div>
								</div>

								{/* Phone and Company Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label className="text-white text-sm font-medium">Phone Number</label>
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											placeholder="Enter your phone number"
											className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
										/>
									</div>
									<div className="space-y-2">
										<label className="text-white text-sm font-medium">Company</label>
										<input
											type="text"
											name="company"
											value={formData.company}
											onChange={handleInputChange}
											placeholder="Enter your company name"
											className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
										/>
									</div>
								</div>

								{/* Project Stage and Start Date Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label className="text-white text-sm font-medium">Project Stage</label>
										<select
											name="projectStage"
											value={formData.projectStage}
											onChange={handleInputChange}
											className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
										>
											<option value="" className="text-gray-800">Select stage...</option>
											<option value="planning" className="text-gray-800">Planning</option>
											<option value="design" className="text-gray-800">Design</option>
											<option value="development" className="text-gray-800">Development</option>
											<option value="ready-to-launch" className="text-gray-800">Ready to Launch</option>
										</select>
									</div>
									<div className="space-y-2">
										<label className="text-white text-sm font-medium">Preferred Start Date</label>
										<input
											type="date"
											name="startDate"
											value={formData.startDate}
											onChange={handleInputChange}
											className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
										/>
									</div>
								</div>

								{/* Project Goals Textarea */}
								<div className="space-y-2">
									<label className="text-white text-sm font-medium">Project Goals</label>
									<textarea
										name="projectGoals"
										value={formData.projectGoals}
										onChange={handleInputChange}
										placeholder="Type your message..."
										rows={4}
										className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 resize-none"
									/>
								</div>

								{/* Submit Button */}
								<div className="pt-4">
									<button
										type="submit"
										className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
									>
										<span className='inline-flex items-center justify-center '>
											Start Conversation
											<ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormSection;