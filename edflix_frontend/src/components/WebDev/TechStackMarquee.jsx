import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	Atom,
	Code,
	FileCode,
	Palette,
	Github,
	Server,
	Terminal,
	Zap,
	Wind,
	Database,
	Container,
	Cloud
} from 'lucide-react';

const TechStackMarquee = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const techStack = [
		{ name: 'React', icon: Atom },
		{ name: 'JavaScript', icon: Code },
		{ name: 'Python', icon: FileCode },
		{ name: 'CSS3', icon: Palette },
		{ name: 'GitHub', icon: Github },
		{ name: 'Node.js', icon: Server },
		{ name: 'TypeScript', icon: Terminal },
		{ name: 'Next.js', icon: Zap },
		{ name: 'Tailwind', icon: Wind },
		{ name: 'MongoDB', icon: Database },
		{ name: 'Docker', icon: Container },
		{ name: 'AWS', icon: Cloud }
	];

	return (
		<section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-6" data-aos="fade-up">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Tech Stack{' '}
						<span className="bg-gradient-to-r from-blue-600 to-[#999CFF] bg-clip-text text-transparent">
							We Use To Build
						</span>{' '}
						Your Website
					</h2>
				</div>

				{/* Marquee Container */}
				<div className="relative">
					{/* Marquee Box with Corner Plus Signs */}
					<div className="relative bg-white overflow-hidden">

						{/* Left Fade Overlay */}
						<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

						{/* Right Fade Overlay */}
						<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

						{/* Marquee Content */}
						<div className="py-12 px-8">
							<div className="marquee-container">
								<div className="marquee-content">
									{/* First set of icons */}
									{techStack.map((tech, index) => {
										const IconComponent = tech.icon;
										return (
											<div key={`first-${index}`} className="marquee-item" data-aos="fade-up"
												data-aos-delay={index * 100}>
												<div className="tech-icon-container group">
													{/* Icon Square with Corner Plus Signs */}
													<div className="relative icon-square">
														{/* Corner Plus Signs */}
														<div className="absolute bg-white p-1 -top-6 -left-3 text-gray-400 text-2xl">+</div>
														<div className="absolute bg-white p-1 -top-6 -right-3 text-gray-400 text-2xl">+</div>
														<div className="absolute bg-white p-1 -bottom-4 -left-3 text-gray-400 text-2xl">+</div>
														<div className="absolute bg-white p-1 -bottom-4 -right-3 text-gray-400 text-2xl">+</div>

														{/* Icon */}
														<IconComponent className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
													</div>
													<span className="tech-name">{tech.name}</span>
												</div>
											</div>
										);
									})}

									{/* Duplicate set for seamless loop */}
									{techStack.map((tech, index) => {
										const IconComponent = tech.icon;
										return (
											<div key={`second-${index}`} className="marquee-item">
												<div className="tech-icon-container group">
													{/* Icon Square with Corner Plus Signs */}
													<div className="relative icon-square">
														{/* Corner Plus Signs */}
														<div className="absolute bg-white p-1 -top-6 -left-3 text-gray-400 text-2xl">+</div>
														<div className="absolute bg-white p-1 -top-6 -right-3 text-gray-400 text-2xl">+</div>
														<div className="absolute bg-white p-1 -bottom-4 -left-3 text-gray-400 text-2xl">+</div>
														<div className="absolute bg-white p-1 -bottom-4 -right-3 text-gray-400 text-2xl">+</div>

														{/* Icon */}
														<IconComponent className="w-8 h-8 text-gray-600 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110" />
													</div>
													<span className="tech-name">{tech.name}</span>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* CSS Styles */}
			<style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        .tech-icon-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem 1rem 1rem;
          border-radius: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .icon-square {
          width: 10rem;
          height: 10rem;
          border: 2px solid #E5E7EB;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          transition: all 0.3s ease;
        }

        .tech-icon-container:hover .icon-square {
          border-color: #93C5FD;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
        }

        .tech-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4B5563;
          text-align: center;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

      `}</style>
		</section>
	);
};

export default TechStackMarquee;