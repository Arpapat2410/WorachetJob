const Restaurant = require("../modals/restaurant.model")

//Insert Data
Restaurant.createRestaurant = async(newRestaurant)=>{
    try {
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("Created Reataurant: ", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("err",error);
        throw error;
    }
}

module.exports = Restaurant;