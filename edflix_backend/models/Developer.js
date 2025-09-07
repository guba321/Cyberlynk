import mongoose from "mongoose";

const DeveloperSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	profilePicture: {
		type: String,
		required: true,
		trim: true
	},
	role: {
		type: String,
		required: true,
		trim: true
	},
	linkedInUrl: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: function(v) {
				return /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(v);
			},
			message: props => `${props.value} is not a valid LinkedIn URL!`
		}
	},
	description : {
		type: String,
		required: true,
		trim: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
});

const Developer = mongoose.model("Developer", DeveloperSchema);
export default Developer;