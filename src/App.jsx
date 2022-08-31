import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import axios from "axios";

function App() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);

	const filteredAndSortedPosts = usePosts(filter.sort, filter.query, posts);

	const baseUrl = "https://jsonplaceholder.typicode.com/posts";

	const fetchPosts = async (baseUrl) => {
		const posts = await axios.get(baseUrl);
		setPosts(posts.data);
	}

	useEffect(() => {
		fetchPosts(baseUrl)
	}, [])

	const createPost = (post) => {
		setPosts([...posts, post])
		setModal(false);
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	return (
		<div className="App">

			<MyButton
				onClick={() => fetchPosts(baseUrl)}
			>
				Загрузить посты
			</MyButton>

			<MyButton
				onClick={() => setModal(true)}
				style={{ marginTop: "30px" }}
			>
				Создать пост
			</MyButton>

			<MyModal
				modal={modal}
				setModal={setModal}
			>
				<PostForm create={createPost} />
			</MyModal>

			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>

			<PostList remove={removePost} posts={filteredAndSortedPosts} title={"Список JavaScript"} />

		</div>
	);
}

export default App;
