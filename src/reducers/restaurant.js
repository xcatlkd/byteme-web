const INITIAL_STATE = {

	isLoggedIn: false,
	isLoading: false,
	posts: [],
	currentRestaurant: {},
	currentId: null,

};

function restaurantReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "AUTH_PENDING":
			return {
				...state,
				isLoggedIn: false,
				currentRestaurant: null,
			}
		case "AUTH_SUCCESS":
			console.log("reducer; AUTH_SUCCESS: action.currentRestaurant: ", action.currentRestaurant);
			return {
				...state,
				isLoggedIn: true,
				currentRestaurant: action.currentRestaurant,
				currentId: action.currentRestaurant.id,
			}
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
				currentRestaurant: null,
			};
		case "SET_USER_POSTS":
			return {
				...state,
				userPosts: action.data,
			};
		case "LOADING":
			return {
				...state,
				isLoading: true,
			}
		case "LOAD_SUCCESS":
			return {
				...state,
				isLoading: false,
				posts: action.posts,
			}
		case "LOAD_FAILURE":
			return {
				...state,
				isLoading: false,
				posts: [],
			}
		default:
			return state;
	}

}

export default restaurantReducer;