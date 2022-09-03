import React from "react";
import "./styles/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostsPage from "./components/pages/PostsPage";
import About from "./components/pages/About";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/posts" element={<PostsPage />} />
			</Routes>

		</BrowserRouter>
	)

}

export default App;
