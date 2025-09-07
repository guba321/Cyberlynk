import ContactUs from '../models/ContactUs.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD
	},
});

const sentMail = async (name, email, description) => {
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: 'We’ve Received Your Request 🚀',
		html: `
	<div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f0f4f8; padding: 40px 20px;">
		<div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
			
			<!-- Header -->
			<div style="background: linear-gradient(135deg, #6b46c1, #805ad5); padding: 30px; text-align: center;">
			<h1 style="color: #ffffff; margin: 0; font-size: 24px;">Hey ${name}, we’ve got your request!</h1>
			<p style="color: #e9d8fd; margin-top: 8px; font-size: 14px;">Let’s build something awesome together ✨</p>
			</div>

			<!-- Body -->
			<div style="padding: 30px 25px; color: #333; line-height: 1.6;">
			<p>Thank you for contacting us about <strong>${description}</strong>.</p>
			<p>We're thrilled you're interested in creating a website with the help of our smart chatbot-powered platform. Whether you're a small business, a freelancer, or launching something new, we’ve got the tools to bring your ideas to life.</p>
			<p>One of our friendly team members will be in touch shortly to guide you through the next steps.</p>
			<div style="margin: 25px 0; text-align: center;">
				<a href="https://edflix.com" style="display: inline-block; padding: 12px 25px; background-color: #6b46c1; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">Visit Our Website</a>
			</div>
			<p>If you have any urgent queries, feel free to reply directly to this email.</p>
			<p style="margin-top: 30px;">Cheers,<br><strong>The Edflix WebBuilder Team</strong></p>
			</div>

			<!-- Footer -->
			<div style="background-color: #f7fafc; padding: 20px; text-align: center; font-size: 12px; color: #888;">
			You're receiving this email because you submitted a request on our platform.<br>
			&copy; ${new Date().getFullYear()} Edflix. All rights reserved.
			</div>
		</div>
	</div>
	`
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Email error:', error);
			throw new Error('Failed to send email');
		}
	});
};

export const contactUs = async (req, res) => {
	const { name, mobile, email, description } = req.body;

	try {
		if (!name || !mobile || !email || !description) {
			return res.status(400).json({ message: 'All fields are required' });
		}
		sentMail(name, email, description);
		const contact = new ContactUs({
			name,
			mobile,
			email,
			description
		});

		await contact.save();
		res.status(201).json({ message: 'Contact request submitted successfully' });
	} catch (error) {
		console.error('Error saving contact request:', error);
		res.status(500).json({ message: 'Failed to submit contact request' });
	}
};