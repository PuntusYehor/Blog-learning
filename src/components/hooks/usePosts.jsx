import { useMemo } from "react";

function useSortPosts(sort, posts) {
	const sortedPosts = useMemo(() => {
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		} else {
			return posts;
		}
	}, [sort, posts]);

	return sortedPosts;
}

export function usePosts(sort, query, posts) {
	const sortedPosts = useSortPosts(sort, posts)

	return useMemo(() => {
		if (query) {
			return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
		} else {
			return sortedPosts
		}
	}, [query, sortedPosts])
}

