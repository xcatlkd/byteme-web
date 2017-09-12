const INITIAL_STATE = {

	isLoggedIn: false,
	isLoading: false,
	posts: [],
	currentRestaurant: null,


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
			console.log("reducer; AUTH_SUCCESS", state);
			return {
				...state,
				isLoggedIn: true,
				currentRestaurant: action.currentRestaurant,
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
			console.log("reducer/ LOADSUCCESS; action.posts: ", action.posts);
			return {
				...state,
				isLoading: false,
				posts: action.posts,
			}
		case "LOAD_FAILURE":
			console.log("reducer/ LOADFAIL; action.posts: ", action.posts);
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