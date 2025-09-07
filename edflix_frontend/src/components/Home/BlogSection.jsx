import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	ArrowRight,
	Code,
	TrendingUp,
	Shield,
	Clock,
	Calendar,
} from 'lucide-react';

const BlogSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const blogPosts = [
		{
			id: 1,
			category: "PRODUCT STRATEGY",
			title: "From Idea to MVP: A Startup's Fast Lane",
			description: "Learn how early-stage founders can validate ideas, define a lean feature set, and launch market-ready MVPs in weeks - not months.",
			image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
			date: "Feb 12, 2025",
			readTime: "5 Mins Read",
			categoryColor: "bg-blue-100 text-blue-700",
			icon: <TrendingUp className="w-4 h-4" />
		},
		{
			id: 2,
			category: "TECH STACK CHOICES",
			title: "Choosing the Right Tech Stack",
			description: "We break down how to pick the right technologies that let you ship faster today without slowing you down tomorrow.",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
			date: "Feb 12, 2025",
			readTime: "5 Mins Read",
			categoryColor: "bg-green-100 text-green-700",
			icon: <Code className="w-4 h-4" />
		},
		{
			id: 3,
			category: "CYBERSECURITY BASICS",
			title: "Security from Day One",
			description: "Ignoring security early on can cost you big. Discover how to integrate core cybersecurity practices from your first line of code.",
			image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
			date: "Feb 12, 2025",
			readTime: "5 Mins Read",
			categoryColor: "bg-red-100 text-red-700",
			icon: <Shield className="w-4 h-4" />
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-20">

			<div className="max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
					<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="300">
						Ideas <span className="text-blue-600">That Inspire</span> Growth
					</h1>
					<p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
						From Product Tips To Cybersecurity, Know How Everything
						Founders And Teams Need To Grow With Confidence.
					</p>
				</div>

				{/* Blog Cards Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post, index) => (
						<div
							key={post.id}
							className="group bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
							data-aos="fade-up"
							data-aos-delay={500 + index * 100}
						>
							{/* Image Section */}
							<div className="relative overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

								{/* Category Badge */}
								<div className="absolute top-4 left-4">
									<span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm bg-white/90 ${post.categoryColor}`}>
										{post.icon}
										<span>{post.category}</span>
									</span>
								</div>
							</div>

							{/* Content Section */}
							<div className="p-6 space-y-6">
								{/* Meta Information */}
								<div className="flex items-center justify-between text-sm text-gray-500">
									<div className="flex items-center space-x-2">
										<Calendar className="w-4 h-4" />
										<span>{post.date}</span>
									</div>
									<div className="flex items-center space-x-2">
										<Clock className="w-4 h-4" />
										<span>{post.readTime}</span>
									</div>
								</div>

								{/* Title and Description */}
								<div className="space-y-3">
									<h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
										{post.title}
									</h3>
									<p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
										{post.description}
									</p>
								</div>

								{/* Read More Button */}
								<div className="pt-2">
									<button className="group/btn inline-flex items-center space-x-2 text-gray-700 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-white hover:bg-blue-50">
										<span>READ MORE</span>
										<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Load More Section */}
				<div className="text-center mt-16" data-aos="fade-up">
					<button className="group bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
						<span>Load More Articles</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogSection