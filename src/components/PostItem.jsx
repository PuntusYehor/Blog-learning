import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/MyButton/MyButton'

function PostItem({ post, remove }) {
	const navigate = useNavigate();

	return (
		<div className='post'>
			<div className="post__content">

				<strong>{post.id}. {post.title}</strong>
				<div>
					{post.body}
				</div>
			</div>

			<div className="post__btns">
				<MyButton onClick={() => navigate(`/posts/${post.id}`)} style={{ marginRight: "5px" }}>Открыть</MyButton>
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
			</div>

		</div>
	)
}

export default PostItem