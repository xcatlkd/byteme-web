const INITIAL_STATE = {

	isLoggedIn: false,
	userPosts: [],


};

function restaurantReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				isLoggedIn: true,
			};
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
