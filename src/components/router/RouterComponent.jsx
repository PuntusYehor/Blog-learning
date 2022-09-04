import React from 'react'
import { Routes, Route } from 'react-router-dom'

function RouterComponent({ routers }) {
	return (
		<Routes>
			{routers.map(({ title, path, component }) => (
				<Route element={component} path={path} key={path}>
					{title}
				</Route>
			))}
			<Route path='*' element={routers[0].component} />
		</Routes>
	)
}

export default RouterComponent