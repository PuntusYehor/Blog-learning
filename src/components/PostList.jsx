import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

function PostList({ posts, title, remove }) {

	if (!posts.length) {
		return <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
	}

	return (
		<div className='PostList'>
			<h1 style={{ textAlign: "center" }}>
				{title}
			</h1>
			<TransitionGroup className="posts">
				{posts.map((post) => (
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
						<PostItem remove={remove} post={post} />
					</CSSTransition>

				))}
			</TransitionGroup>


		</div>
	);
}

export default PostList