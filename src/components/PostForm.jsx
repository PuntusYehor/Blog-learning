import React from 'react'
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import { useState } from 'react';

function PostForm({ create }) {

	const [post, setPost] = useState({ title: "", body: "" });

	const addPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now()
		}
		create(newPost);
		setPost({ title: "", body: "" });
	}

	return (
		<form>
			<MyInput
				type="text"
				placeholder="Заголовок поста"
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })} />
			<MyInput
				type="text"
				placeholder="Описание поста"
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })} />
			<MyButton onClick={addPost}>Создать пост</MyButton>
		</form>
	)
}

export default PostForm