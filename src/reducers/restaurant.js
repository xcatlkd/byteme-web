const INITIAL_STATE = {

	isLoggedIn: false,
	posts: [],


};

function restaurantReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "AUTH_PENDING":
			return {
				...state,
				isLoggedIn: false,
			}
		case "AUTH_SUCCESS":
			console.log("reducer; AUTH_SUCCESS", state);
			return {
				...state,
				isLoggedIn: true,
			}
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
			};
		case "SET_USER_POSTS":
			return {
				...state,
				userPosts: action.data,
			};
		default:
			return state;
	}

}

export default restaurantReducer;