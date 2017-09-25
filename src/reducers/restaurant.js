const INITIAL_STATE = {

	isLoggedIn: false,
	isLoading: false,
	posts: [],
	currentRestaurant: {},
	currentId: null,
	error: null,

};

function restaurantReducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case "AUTH_PENDING":
			return {
				...state,
				isLoggedIn: false,
				currentRestaurant: null,
				error: null,
			}
		case "AUTH_SUCCESS":
			return {
				...state,
				isLoggedIn: true,
				currentRestaurant: action.currentRestaurant,
				currentId: action.currentRestaurant.id,
				error: null,
			}
		case "AUTH_FAILURE":
			return {
				...state,
				error: action.error,
			}
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
				currentRestaurant: null,
			};
		case "RESET_ERROR":
			return {
				...state,
				error: null,
			}
		case "SET_USER_POSTS":
			return {
				...state,
				userPosts: action.data,
				error: null,
			};
		case "LOADING":
			return {
				...state,
				isLoading: true,
				error: null,
			}
		case "LOAD_SUCCESS":
			return {
				...state,
				isLoading: false,
				posts: action.posts,
				error: null,
			}
		case "LOAD_FAILURE":
			return {
				...state,
				isLoading: false,
				posts: [],
			}
		case "UPLOAD_SUCCESS":
			return {
				...state,
				error: null,
			}
		case "UPLOAD_FAILURE":
			return {
				...state,
				error: action.error,
			}
		default:
			return state;
	}

}

export default restaurantReducer;
