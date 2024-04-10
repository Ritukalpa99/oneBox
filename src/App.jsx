import { useEffect, useState } from "react";
import Signup from "./components/Auth/Signup";
import {Outlet} from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem('UserId')))
  },[])
	return (
		<>
      {!isLoggedIn && <Signup />}
			{isLoggedIn && <Layout />}
		</>
	);
}

export default App;
