import { useEffect, useState } from "react";
import Signup from "./components/Auth/Signup";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth";

function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	const { isLoggedIn, login, logout } = useAuth();
	// useEffect(() => {
	// 	if (!isLoggedIn) {
	// 		navigate("/signup");
	// 	}
	// }, [navigate, isLoggedIn]);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("UserId"))) {
			login();
		}
	}, []);
	return (
		<>
			{/* {!isLoggedIn && <Signup/>} */}
			{/* {isLoggedIn && <Outlet />} */}
      <Outlet />
		</>
	);
}

export default App;
