import mongoose from 'mongoose';

const ContactUsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	mobile: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function (v) {
				return /\d{10}/.test(v);
			},
			message: props => `${props.value} is not a valid mobile number!`
		}
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	description: {
		type: String,
		required: true,
	},
});

const ContactUs = mongoose.model('ContactUs', ContactUsSchema);

export default ContactUs;