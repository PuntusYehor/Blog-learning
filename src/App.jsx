import React, { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "Javascript", body: "Js - язык программирования" },
		{ id: 2, title: "Javascript", body: "Js - язык программирования" },
		{ id: 3, title: "Javascript", body: "Js - язык программирования" }
	]);

	const createPost = (post) => {
		if (post.title && post.body)
			setPosts([...posts, post])
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	return (
		<div className="App">
			<PostForm create={createPost} />

			{
				posts.length
					? <PostList remove={removePost} posts={posts} title={"Список JavaScript"} />
					: <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
			}

		</div>
	);
}

export default App;
