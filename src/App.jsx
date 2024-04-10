import { useEffect, useState } from "react";
import Signup from "./components/Auth/Signup";
import {Outlet} from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem('UserId')))
  },[])
	return (
		<>
			<h1 className="text-center text-3xl text-red-400"> One Box</h1>
      {!isLoggedIn && <Signup />}
			{isLoggedIn && <Outlet />}
		</>
	);
}

export default App;
