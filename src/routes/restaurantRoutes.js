import express from "express";
import { handleListRestaurants, handleListRestaurantById, handleAddRestaurant, handleListCities } from "../controllers/restaurantController.js";

const router = express.Router();

router.get("/list", handleListRestaurants);
router.get("/listOne/:id", handleListRestaurantById);
router.get("/cities", handleListCities)
router.post("/add", handleAddRestaurant)

export default router;
