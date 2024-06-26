import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./store/auth.jsx";
import Home from "./components/Home.jsx";
// import Signup from "./components/Auth/Signup.jsx";
import SignupComp from "./components/Auth/SignupComp.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
		>
			<Route
				path="home"
				element={<Home />}
			/>
			<Route
				path="signup"
				element={<SignupComp />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
