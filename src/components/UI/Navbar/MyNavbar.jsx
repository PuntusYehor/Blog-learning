import React, { useContext } from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/isAuthContext';
import MyButton from '../MyButton/MyButton';

function MyNavbar() {
	const { isAuth, setIsAuth } = useContext(AuthContext)

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
				{
					isAuth
						? <Nav className="me-end">
							<MyButton
								onClick={() => {
									setIsAuth(false)
									localStorage.removeItem("auth")
								}}
							>
								<Link id='nav-link' to="/login" className='nav-link'>Logout</Link>
							</MyButton>
						</Nav>
						: <div></div>
				}


			</Container>

		</Navbar >
	)
}

export default MyNavbar