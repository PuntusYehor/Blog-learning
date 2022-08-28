import React from 'react'

function PostItem({ post }) {
	return (
		<div className='post'>
			<div className="post__content">

				<strong>{post.id}. {post.header}</strong>
				<div>
					{post.description}
				</div>
			</div>

			<div className="post__btns">
				<button>Удалить</button>
			</div>

		</div>
	)
}

export default PostItem