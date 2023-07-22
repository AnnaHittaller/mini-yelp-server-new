import express from "express";
import { handleListRestaurants, handleListRestaurantById, handleAddRestaurant } from "../controllers/restaurantController.js";

const router = express.Router();

router.get("/list", handleListRestaurants);
router.get("/listOne/:id", handleListRestaurantById);
router.post("/add", handleAddRestaurant)

export default router;
