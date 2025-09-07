import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetStarted = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image Container */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url('./images/getStarted.png')`, // Replace with your image path
				}}
			>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
			</div>

			{/* Content Container */}
			<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
				{/* Top tagline */}
				<div
					className="mb-6"
					data-aos="fade-down"
				>
					<span className="inline-block text-white text-lg font-medium bg-white bg-opacity-10 backdrop-blur-sm px-6 py-2 rounded-full border border-white border-opacity-20">
						The Right Solution For You
					</span>
				</div>

				{/* Main Heading */}
				<h1
					className="text-5xl text-white leading-tight mb-8"
					data-aos="fade-up"
				>
					Let's Turn Your Bold Idea Into A{' '}
					Powerful Digital Product
				</h1>

				{/* CTA Button */}
				<div
					className="mt-10"
					data-aos="fade-up"
				>
					<button className="group relative inline-flex items-center justify-center px-8 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
						<span className="relative z-10">Get Started</span>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetStarted