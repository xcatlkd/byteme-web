const Restaurant = require('../models/restaurant');

function deserializeUser(req, res, next) {
	if (req.session.restaurantid) {
		Restaurant.findById(req.session.restaurantId) 
		.then(function(restaurant) {

			
			if (restaurant) {
				req.restaurant = restaurant;
			} else {
				req.session.restaurantid = null;
			}
			next();
		})
		.catch(function(err) {
			console.error("Deserialize User failed");
			console.error(err)
			next();
		});
	} else {
		next();
	}
}

module.exports = deserializeUser;
