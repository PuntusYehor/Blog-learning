import React from 'react'
import cl from "./Loader.module.css"
import { Spinner } from 'react-bootstrap'

function Loader() {
	return (
		<Spinner animation="border" role="status" size='m' className={cl.loader} style={{ marginBottom: "15px" }}>
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	)
}

export default Loader