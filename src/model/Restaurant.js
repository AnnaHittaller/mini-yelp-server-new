import mongoose from "mongoose";

const { Schema } = mongoose;

const restaurantSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
    description: String,
    openingTime: String,
	address: {
		type: {
			street: String,
			postcode: String,
			city: String,
		},
        required: true,
	},
    coordinates: [Number],
    comments: [
        {
            user: String,
            comment: String,
        }
    ],
    tags: [String],
    image: String,
});

export default mongoose.model('Restaurant', restaurantSchema)