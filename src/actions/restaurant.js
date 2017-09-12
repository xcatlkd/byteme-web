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
					currentRestaurant: restaurant.username,
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

export function login(data) {
	return (dispatch) => {
		dispatch({
			type: "AUTH_PENDING",
		})
		console.log("action data: ", data);
		API.post("/login", {
			args: {
				username: data.username,
				password: data.password,
			},
		}).then((res) => {
			console.log("actions/restaurant; login, res", res);
			if (res) {
				dispatch({
					type: "AUTH_SUCCESS",
					currentRestaurant: data.username,
				})
			}
			else {
				console.log(res);
			}
		}).catch((error) => {
			console.error("Something went wrong: ", error);
		});
	}
}

export function logout() {
	console.log("logout state: ", state);
	return (dispatch) => {
		dispatch({
			type: "LOGOUT",
		})
	}
}

export function postUpload(post) {
	return (dispatch) => {
		dispatch({
			type: "UPLOAD_PENDING",
		})
		console.log("actions/restaurant: postUpload; post.file: ", post.file);
		API.post("/upload", {
			args: {
				file: post.file,
				username: post.restaurant,
				title: post.title,
				description: post.description,
				price: post.price,
			},
		}).then((res) => {
			console.log("actions/restaurant; postUpload, res: ", res);
			if (res.data) {
				dispatch({
					type: "UPLOAD_SUCCESS",
					data: res.data,
				})
			}
			else {
				dispatch({
					type: "UPLOAD_FAILURE",
					error: res.error,
				})
			}
		}).catch((error) => {
			dispatch({
				type: "UPLOAD_FAILURE",
				error: "Something went wrong",
			})
		})

	}
}

export function getAll(restaurant) {
	return (dispatch) => {
		dispatch({ 
			type: "LOADING",
		})

		API.get("/posts", {
			args: {
				restaurantId: restaurant.id,
			}
		}).then((res) => {
			console.log("actions/restaurant; getAll, res: ", res);
			if (res) {
				dispatch({
					type: "LOAD_SUCCESS",
					posts: res,
				})
			}
			else {
				dispatch({
					type: "LOAD_FAILURE",
					error: res.error,
				})
			}
		}).catch((error) => {
			dispatch({
				type: "LOAD_FAILURE",
				error: res.error,
			})
		});
	}
}