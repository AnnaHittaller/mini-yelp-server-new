import express from "express";
import cors from "cors";
import dotenv from "dotenv";


 import restaurantRoutes from "./src/routes/restaurantRoutes.js";

import dbConnect from "./src/config/db.js"

dotenv.config();
dbConnect();
const app = express(); 

app.use(cors());
app.use(express.json()); //handle body object from requests


app.use("/restaurants", restaurantRoutes);


app.listen(4000, () => console.log("Server is running on port 4000"));
