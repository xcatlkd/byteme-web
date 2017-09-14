import API from "util/api";
import { push } from "react-router-redux";

export function signup(restaurant) {
	return (dispatch) => {
		dispatch({
			type: "SIGNUP_PENDING",
		})
		API.post("/signup", {
			args: {
				username: restaurant.username,
				password: restaurant.password,
				restaurantName: restaurant.restaurantName,
			},
		}).then((res) => {
			if (res.id) {
				dispatch({
					type: "AUTH_SUCCESS",
					currentRestaurant: res,
				})
				dispatch(push("/useradmin"));
			}
			else if (res) {
				dispatch({
					type: "AUTH_FAILURE",
					error: res,
				})
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
		API.post("/login", {
			args: {
				username: data.username,
				password: data.password,
			},
		}).then((res) => {
			if (res.id) {
				dispatch({
					type: "AUTH_SUCCESS",
					currentRestaurant: res,
				})
				dispatch(push("/useradmin"));
			}
			else if (res.error) {
				console.log(res);
				dispatch({
					type: "AUTH_FAILURE",
					error: res.error,
				})
			}
		}).catch((error) => {
			console.error("Something went wrong: ", error);
		});
	}
}

export function logout() {
	return (dispatch) => {
		dispatch({
			type: "LOGOUT",
		})
		API.post("/logout");
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
				username: post.restaurant.username,
				title: post.title,
				description: post.description,
				price: post.price,
			},
		}).then((res) => {
			if (res) {
				dispatch({
					type: "UPLOAD_SUCCESS",
				})
				dispatch(push("/useradmin"));
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
				error: error,
			})
		});
	}
}
