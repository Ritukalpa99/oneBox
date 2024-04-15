import { useEffect, useState } from "react";
import Signup from "./components/Auth/Signup";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";

function App() {
	const navigate = useNavigate();
	const { isLoggedIn, login, logout } = useAuth();
	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/signup");
		} else {
			navigate("/home");
		}
	}, [navigate, isLoggedIn]);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("UserId"))) {
			login();
		}
	}, [login]);
	return (
		<>
			<Outlet />
		</>
	);
}

export default App;
