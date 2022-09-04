import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" >
			<Container style={{ maxWidth: "1000px" }}>

				<Navbar.Brand>
					<Link to="/about" className="nav-link">
						My blog
					</Link>
				</Navbar.Brand>

				<Nav className="me-auto">
					<Link to="/posts" className='nav-link'>Posts</Link>
				</Nav>
			</Container>

		</Navbar >
	)
}

export default MyNavbar