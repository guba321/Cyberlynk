import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Developer from '../models/Developer.js';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const defaultDeveloper = {
	name: process.env.DEFAULT_DEVELOPER_NAME,
	profilePicture: process.env.DEFAULT_DEVELOPER_PROFILE_PICTURE,
	role: process.env.DEFAULT_DEVELOPER_ROLE,
	linkedInUrl: process.env.DEFAULT_DEVELOPER_LINKEDIN_URL,
	description: process.env.DEFAULT_DEVELOPER_DESCRIPTION
}
const developersData = [defaultDeveloper];

connectDB();
// Create a default admin user
const createDefaultDevelopers = async () => {
	try {
		const dev = await Developer.findOne({ email: defaultDeveloper.email });
		if (!dev) {
			const developers = await Developer.insertMany(developersData);
			console.log('Default Developers created:', developers);
		}
		else {
			console.log('Default Developers already exist.');
		}

		// Disconnect from DB
		mongoose.disconnect();
		console.log('Database connection closed');

		process.exit(0);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		mongoose.disconnect();
		process.exit(1);
	}
};

// Run the seeding
createDefaultDevelopers();