import React from 'react'

function MySelect({ options, defaultValue, value, onChange }) {
	return (
		<select
			onChange={(event) => onChange(event.target.value)}
			value={value}
		>
			<option disabled value={""}>{defaultValue}</option>
			{options.map(option => (
				<option value={option.value} key={option.value}>
					{option.description}
				</option>
			))}
		</select>
	)
}

export default MySelect