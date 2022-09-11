import React, { useEffect, useState, useRef } from "react";
import PostList from "../PostList";
import "../../styles/App.css";
import PostForm from "../PostForm";
import PostFilter from "../PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/MyButton/MyButton";
import { usePosts } from "../hooks/usePosts";
import { PostService } from "../../API/PostService";
import Loader from "../UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getCount } from "../../utils/getCount";
import { useObserver } from "../hooks/useObserver";

function PostsPage() {
	const [posts, setPosts] = useState([]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const lastElement = useRef();

	const [fetchPosts, isLoading, error] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts((state) => [...state, ...response.data]);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getCount(totalCount, limit));
	})

	const filteredAndSortedPosts = usePosts(filter.sort, filter.query, posts);

	useObserver(isLoading, lastElement, page < totalPages, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts()
	}, [page])

	const createPost = (post) => {
		setPosts([...posts, post])
		setModal(false);
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	return (
		<>
			<div className="container">

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
				<PostList remove={removePost} posts={filteredAndSortedPosts} title={"Список JavaScript"} />
				{
					isLoading &&
					<div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}><Loader /></div>
				}

				<div style={{ width: "100%", height: "40px" }} ref={lastElement} />

			</div>
		</>

	);
}

export default PostsPage;