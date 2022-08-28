import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
	const [posts] = useState([
		{ id: 1, header: "Javascript", description: "Js - язык программирования" },
		{ id: 2, header: "Javascript", description: "Js - язык программирования" },
		{ id: 3, header: "Javascript", description: "Js - язык программирования" }
	]);

	return (
		<div className="App">
			<PostList posts={posts} title={"Список JavaScript"} />

		</div>
	);
}

export default App;
