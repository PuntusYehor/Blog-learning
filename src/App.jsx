import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import RouterComponent from "./components/router/RouterComponent";
import { routes } from "./components/router/Routes";

function App() {

	return (
		<BrowserRouter>
			<MyNavbar />
			<RouterComponent routers={routes} />
		</BrowserRouter>
	)

}

export default App;
