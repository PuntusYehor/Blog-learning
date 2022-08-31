import React from 'react'
import MyInput from './UI/MyInput/MyInput'
import MySelect from './UI/MySelect/MySelect'

function PostFilter({ filter, setFilter }) {
	return (
		<div>
			<MyInput
				placeholder="Поиск..."
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
			/>

			<MySelect
				options={[
					{ value: "title", description: "По названию" },
					{ value: "body", description: "По описанию" }
				]}
				defaultValue="Сортировка"
				value={filter.sort}
				onChange={e => setFilter({ ...filter, sort: e })}
			/>
		</div>
	)
}

export default PostFilter