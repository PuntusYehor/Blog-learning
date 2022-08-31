import React from 'react'
import cl from "./MyModal.module.css"

function MyModal({ children, modal, setModal }) {

	const classes = [cl.myModal];

	if (modal) {
		classes.push(cl.active)
	}

	return (
		<div
			className={classes.join(" ")}
			onClick={() => setModal(false)}
		>
			<div
				className={cl.myModalContent}
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>

		</div>
	)
}

export default MyModal