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
			if (res) {
				console.log("actions/restaurant; res: ", res);
				dispatch({
					type: "AUTH_SUCCESS",
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
		dispatch({
			type: "AUTH_PENDING",
		})
		console.log("action/restaurant; signup, before API call:");
		API.post("/signup", {
			args: {
				username: restaurant.username,
				password: restaurant.password,
			},
		}).then((res) => {
			if (res) {
				console.log("actions/restaurant; res: ", res);
				dispatch({
					type: "AUTH_SUCCESS",
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

export function logout() {
	return (dispatch) => {

	}
}

export function postUpload(post) {
	return (dispatch) => {
		dispatch({
			type: "UPLOAD_PENDING",
		})
		API.post("/upload", {
			args: {
				file: post.file,
			}
		})

	}
}

export function getAll() {
	return (dispatch) => {
		

	}
}