import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechnologiesSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	return (
		<div className="bg-gray-900 text-white">
			<div className="container mx-auto px-6 md:px-20 py-16 lg:py-24">
				<div className="text-center">
					{/* Title */}
					<h2
						className="text-4xl font-bold mb-16 leading-tight"
						data-aos="fade-up"
					>
						Technologies <span className="text-blue-600">That Power</span> Our Business
					</h2>

					{/* Tech Stack Image */}
					<div
						className="flex justify-center"
						data-aos="zoom-in"
						data-aos-delay="300"
					>
						<div className="relative max-w-4xl w-full">
							<img
								src="./images/tech.png"
								alt="Technologies that power our business"
								className="w-full h-auto object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechnologiesSection