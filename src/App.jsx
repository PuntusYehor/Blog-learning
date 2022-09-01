import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import { PostService } from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./components/hooks/useFetching";


function App() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);

	const [fetchPosts, isLoading, error] = useFetching(async () => {
		const posts = await PostService.getAll()
		setPosts(posts);
	})

	const filteredAndSortedPosts = usePosts(filter.sort, filter.query, posts);

	useEffect(() => {
		fetchPosts()
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
				onClick={() => fetchPosts()}
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
			{
				error &&
				<h1 style={{ textAlign: "center" }}>{error}</h1>
			}
			{
				isLoading
					? <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}><Loader /></div>
					: <PostList remove={removePost} posts={filteredAndSortedPosts} title={"Список JavaScript"} />
			}

		</div>
	);
}

export default App;
