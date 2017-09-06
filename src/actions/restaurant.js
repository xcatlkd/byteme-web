import API from "util/api";



export function signup(restaurant) {
	return (dispatch) => {
		dispatch({
			type: "SIGNUP_PENDING",
		})
		console.log("action/restaurant; signup, before API call:");
		API.post("/signup", {
			args: {
				username: restaurant.username,
				password: restaurant.password,
				restaurantName: restaurant.restaurantName,
			},
		}).then((res) => {
			if (res.data) {
				console.log(res.data);
				dispatch({
					type: "SIGNUP_SUCCESS",
				})
			}
			else {
				console.log(res.error);
			}
		}).catch((error) => {
			console.error("Something went wrong: ", error);
		});
	}
}

export function login() {
	return (dispatch) => {

	}
}

export function logout() {
	return (dispatch) => {

	}
}

export function postUpload() {
	return (dispatch) => {

	}
}

export function getAll() {
	return (dispatch) => {
		

	}
}