import React from 'react'
import { Container } from 'react-bootstrap'

function Comments({ comments }) {
	return (
		<Container className='element__page comments'>
			{comments.map((comment, i) => (
				<div key={comment.id}>
					<h4>{i + 1}. {comment.name}</h4>
					<p>{comment.body}</p>
				</div>
			))}
		</Container>
	)
}

export default Comments