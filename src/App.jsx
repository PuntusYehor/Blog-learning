import React from "react";
import { BrowserRouter } from "react-router-dom";
import PostsPage from "./components/pages/PostsPage";
import About from "./components/pages/About";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import RouterComponent from "./components/router/RouterComponent";

function App() {
	const links = [
		{ title: "Posts", path: "/posts", component: <PostsPage /> },
		{ title: "About", path: "/about", component: <About /> }
	]

	return (
		<BrowserRouter>
			<MyNavbar />
			<RouterComponent routers={links} />
		</BrowserRouter>
	)

}

export default App;
