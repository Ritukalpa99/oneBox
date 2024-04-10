import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Signup() {
	const [searchParams] = useSearchParams();
	const jwt = searchParams.get("token");
	console.log(jwt);

  const navigate = useNavigate();

	const handleSignup = () => {
		const url =
    `${import.meta.env.VITE_GOOGLE_API_URL}?redirect_to=http://localhost:5173/`;
		const pop = window.open(url, "_parent");
	};


  useEffect(() => {
    if(!jwt) return;
    localStorage.setItem("UserId", JSON.stringify(jwt));
    alert('User logged in');
    navigate("/")
  },[jwt])

	return (
		<div>
			Signup
			<button onClick={handleSignup}>Signup</button>
		</div>
	);
}

export default Signup;
