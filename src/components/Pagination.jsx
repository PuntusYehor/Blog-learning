import React from 'react'
import { usePagination } from './hooks/usePagination';

function Pagination({ totalPages, page, handleClick }) {
	const array = usePagination(totalPages);

	return (
		<div className="pages">
			{array.map(p => (
				<span
					key={p}
					className={`pages__button ${page === p ? "pages__current" : ""}`}
					onClick={() => handleClick(p)}
				>
					{p}
				</span>
			))}
		</div>
	)
}

export default Pagination