import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import RouterComponent from "./components/router/RouterComponent";
import { privateRoutes, publicRoutes } from "./components/router/Routes";
import { AuthContext } from "./components/context/isAuthContext";
import { useState, useEffect } from "react";

function App() {
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			setIsAuth(true)
		}
	}, [])


	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
			<BrowserRouter>
				<MyNavbar />
				{
					isAuth
						? <RouterComponent routers={privateRoutes} />
						: <RouterComponent routers={publicRoutes} />
				}
			</BrowserRouter>
		</AuthContext.Provider>

	)

}

export default App;
