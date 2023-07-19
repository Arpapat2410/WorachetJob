const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller");

//Create a new Restaurant 
//http:/locolhost:500/restaurants
router.post("/restaurants", async(req,res)=>{
    try {
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
        res.status(201).json(createRestaurant);
    } catch (error) {
        console.log(error);
        res.status(500).json({err: "Failed to create reataurant"});
    }
});

module.exports = router;