import Restaurant from "../model/Restaurant.js";

export const handleListRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find().select("-__v");
		console.log(restaurants);
		res.status(200).send(restaurants);
	} catch (error) {
		console.log("error listing restaurants:", error.message);
		res.status(500).send("Error in listing restaurants: " + error.message);
	}
};

export const handleListRestaurantById = async (req, res) => {
	console.log("param", req.params);
	try {
		const restaurant = await Restaurant.findById(req.params.id).select("-__v");
		console.log("restaurant found by id:", restaurant);
		res.status(200).send(restaurant);
	} catch (error) {
		console.log("error listing a restaurant:", error.message);
		res.send({ success: false, error: error.message });
	}
};

export const handleAddRestaurant = async (req, res) => {
	console.log(req.body);
	try {
		const newRestaurant = await Restaurant.create(req.body);

		res.status(201).send({
			success: true,
			newRestaurant,
		});
	} catch (error) {
		console.log("error adding a restaurant:", error.message);
		res.send({ success: false, error: error.message });
	}
};
