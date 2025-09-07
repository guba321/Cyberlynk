import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
	ExternalLink,
	MapPin,
	Phone,
	Mail,
	MessageCircle,
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const Footer = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);

	const [formData, setFormData] = useState({
		name: '',
		mobile: '',
		email: '',
		description: ''
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			const res = await axios.post(`${API_URL}/contact`, formData);
			if (res.status === 201) {
				toast.success(res.data.message);
				setFormData({
					name: '',
					mobile: '',
					email: '',
					description: ''
				});
			} else {
				toast.error('Failed to submit form. Please try again.');
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			toast.error('An error occurred while submitting the form.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<footer id='contact' className="bg-black text-white overflow-hidden">
			<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 py-14">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

					{/* Left Section - Company Info */}
					<div className="space-y-8">
						{/* Logo */}
						<div
						className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
						onClick={() => navigate('/')}
						>
						<img
							src="./images/logo.png"
							alt="CyberLynk Logo"
							className="h-12 w-30 sm:h-14"
						/>
						<span className="font-bold text-xl sm:text-3xl">CyberLynk</span>
						</div>

						

						{/* Tagline */}
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-gray-200">
							Concerned about your system’s security but not sure where to begin?
							</h3>
							<p className="text-lg text-gray-300">
							We’ll safeguard your applications, starting today.
							</p>
						</div>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors duration-200 group">
								Book a 15-min call
								<ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
							</button>

							<button className="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-full font-medium transition-colors duration-200 group">
								<MessageCircle className="mr-2 w-4 h-4" fill="currentColor" />
								Chat on whatsapp
							</button>
						</div>

						{/* Contact Info */}
						<div className="space-y-4 pt-8">
							<div className="flex items-center space-x-3 text-gray-300">
								<Mail className="w-5 h-5" />
								<span>contact@cyberlynk.in</span>
							</div>

							<div className="flex items-center space-x-3 text-gray-300">
								<Phone className="w-5 h-5" />
								<span>+91 9573893959, +91 9395123493</span>
							</div>

							<div className="flex items-center space-x-3 text-gray-300">
								<MapPin className="w-5 h-5" />
								<span>Visakhapatnam, India</span>
							</div>
						</div>
					</div>

					{/* Right Section - Contact Form */}
					<div className="lg:pl-8">
						<div className="space-y-6 bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700">
							<div>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div>
								<input
									type="tel"
									name="mobile"
									placeholder="Mobile"
									value={formData.mobile}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div>
								<input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div>
								<input
									type="text"
									name="description"
									placeholder="Description"
									value={formData.description}
									onChange={handleInputChange}
									className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
								/>
							</div>

							<div className="pt-4">
								<button
									onClick={handleSubmit}
									disabled={!formData.name || !formData.mobile || !formData.email || !formData.description}
									className="px-8 py-2 bg-transparent border border-white text-white group hover:bg-white hover:text-gray-900 rounded-full font-medium transition-colors duration-200 group"
								>
									{loading ? (
										<span className="inline-flex items-center justify-center ">
											<svg className="animate-spin h-5 w-5 mr-3 group-hover:text-gray-900 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.343A8.001 8.001 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.595z"></path>
											</svg>
											Submitting...
										</span>
									) :
										<span>Submit</span>
									}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center overflow-hidden pointer-events-none mb-6">
				<div className="text-[2rem] md:text-[4.5rem] lg:text-[7rem] font-black text-gray-100 opacity-10 whitespace-nowrap mb-10 md:mb-0">
					CyberLynk
				</div>
			</div>
		</footer>
	);
};

export default Footer