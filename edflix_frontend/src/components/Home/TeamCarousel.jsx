import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight, Linkedin, MessageSquare } from 'lucide-react';

const TeamCarousel = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		AOS.init({ duration: 1000, once: false });
	}, []);

	const handleScrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offsetTop = element.offsetTop - 55;
			window.scrollTo({ top: offsetTop, behavior: 'smooth' });
		}
		setIsOpen(false);
	};

	const teamMembers = [
		{
			id: 1,
			name: "Ramjee P",
			role: "CEO",
			description: "Steering the company vision and driving strategic growth.",
			image: "/images/ramjee.png",
			linkedin: "https://www.linkedin.com/in/ramjeepentakota/"
		},
		{
			id: 2,
			name: "Prasanna Varma",
			role: "COO",
			description: "Ensuring operational excellence and seamless execution.",
			image: "/images/prasanna.png",
			linkedin: "https://www.linkedin.com/in/kucharlapati-prasanna-varma-11a47221b/"
		},
		{
			id: 3,
			name: "Jayanth Ch",
			role: "CTO",
			description: "Leading technological innovation and security initiatives.",
			image: "/images/jayanth.png",
			linkedin: "https://www.linkedin.com/in/jayanth-changala-959a36210/"
		},
		{
			id: 4,
			name: "Raviteja",
			role: "Director of Trainings",
			description: "Building skills and knowledge to empower our teams.",
			image: "/images/ravi.png",
			linkedin: "https://www.linkedin.com/in/ravi-teja-188373250/"
		},
		{
			id: 5,
			name: "Revanth B",
			role: "Director of Marketing",
			description: "Shaping brand presence and driving market engagement.",
			image: "/images/revanth.png",
			linkedin: "https://www.linkedin.com/in/revanth-banisetti-9401ba21a/"
		}
	];

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
		setTimeout(() => setIsAnimating(false), 500);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
		setTimeout(() => setIsAnimating(false), 500);
	};

	const goToSlide = (index) => {
		if (isAnimating || index === currentIndex) return;
		setIsAnimating(true);
		setCurrentIndex(index);
		setTimeout(() => setIsAnimating(false), 500);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 4000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div id="team" className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 px-6 md:px-20">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

					{/* Left Content Section */}
					<div className="space-y-8">
						<div className="space-y-6">
							<h1 className="text-4xl font-bold text-gray-900 leading-tight" data-aos="fade-up">
								The <span className="text-blue-600">Experts Behind</span> Your Security
							</h1>
							<p className="text-gray-600 leading-relaxed max-w-lg" data-aos="fade-up">
								We are a dedicated team of cybersecurity professionals, analysts, and developers committed to safeguarding your digital assets with the same passion and precision as if they were our own.
							</p>
						</div>
						<button
							className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3"
							onClick={() => handleScrollTo('contact')}
							data-aos="fade-up"
							data-aos-delay="500"
						>
							<MessageSquare className="w-5 h-5" />
							<span>Get a Free Consultation</span>
						</button>
					</div>

					{/* Right Carousel Section */}
					<div className="relative px-6" data-aos="fade-left">
						{/* Navigation Arrows */}
						<button
							onClick={handlePrev}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 border-2 border-gray-400 text-gray-500 hover:border-gray-700 hover:text-gray-800 bg-white p-2 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-20"
							disabled={isAnimating}
						>
							<ChevronLeft className="w-4 h-4" />
						</button>

						<button
							onClick={handleNext}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 border-2 border-gray-400 text-gray-500 hover:border-gray-700 hover:text-gray-800 bg-white p-2 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-20"
							disabled={isAnimating}
						>
							<ChevronRight className="w-4 h-4" />
						</button>

						{/* Carousel Container */}
						<div className="overflow-hidden rounded-2xl">
							<div
								className="flex transition-transform duration-700 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}
							>
								{teamMembers.map((member) => (
									<div key={member.id} className="w-full flex-shrink-0">
										<div className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(8,_112,_184,_0.12)] hover:shadow-[0_20px_45px_rgba(8,_112,_184,_0.2)] transition-all duration-500 overflow-hidden group transform hover:-translate-y-1 mx-auto max-w-sm mb-4">
											
											{/* Profile Picture - top full */}
											<div className="relative w-full h-60">
												<img
													src={member.image}
													alt={member.name}
													className="w-full h-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
												/>
											</div>

											{/* Card Content */}
											<div className="pt-6 pb-6 px-6 text-center space-y-3">
												<h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
													{member.name}
												</h3>
												<div className="inline-block text-gray-900 text-base font-bold">{member.role}</div>
												<p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{member.description}</p>

												{/* LinkedIn Button */}
												<a
													href={member.linkedin}
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center space-x-2 border border-gray-500 px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors duration-300"
												>
													<Linkedin className="w-4 h-4" />
													<span>LinkedIn</span>
												</a>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Dots Indicator */}
						<div className="flex justify-center space-x-3 mt-2">
							{teamMembers.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
										? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8 shadow-lg'
										: 'bg-gray-300 hover:bg-gray-400 w-2'
										}`}
									disabled={isAnimating}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCarousel;
