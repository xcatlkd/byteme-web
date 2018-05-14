import Restaurant from '../models/restaurant';

function deserializeUser(req, res, next) {
	if (req.session.restaurantId) {
		return Restaurant.findById(req.session.restaurantId) 
		.then(function(restaurant) {
			if (restaurant) {
				req.restaurant = restaurant;
			} else {
				req.session.restaurantId = null;
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

export default deserializeUser;
