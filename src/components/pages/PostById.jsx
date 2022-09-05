import React from 'react'
import { useFetching } from '../hooks/useFetching'
import { useParams } from 'react-router-dom'
import { PostService } from '../../API/PostService'
import { useState } from 'react'
import Loader from '../UI/Loader/Loader'
import { useEffect } from 'react'

function PostById() {
	const params = useParams()
	const [post, setPost] = useState("")
	const [comments, setComments] = useState([])
	const [fetchPost, isPostLoading, postError] = useFetching(async (id) => {
		const response = await PostService.getPostById(id)
		setPost(response.data)
	})

	const [fetchComments, isCommLoading, commError] = useFetching(async (id) => {
		const response = await PostService.getComments(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPost(params.id)
			.then(() => fetchComments(params.id))

	}, [])

	return (
		<>
			{
				isPostLoading
					? <Loader />
					: <div className='element__page element'>
						<h3 className='element__title'>{post.id}. {post.title}</h3>
						<div className='element__body'>{post.body}</div>
					</div>
			}
			<h4>Комментарии</h4>
			{
				isCommLoading
					? <Loader />
					: <div className='element__page comments'>
						{comments.map(comment => (
							<div key={comment.id}>
								<h4>{comment.id}. {comment.name}</h4>
								<p>{comment.body}</p>
							</div>
						))}
					</div>
			}
		</>

	)
}

export default PostById