import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { AuthContext } from '../context/isAuthContext'
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'

function Login() {
	const { setIsAuth } = useContext(AuthContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsAuth(true)
		localStorage.setItem("auth", "true")
	}

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<MyInput type="text" placeholder="Введите логин" />
				<MyInput type="password" placeholder="Введите пароль" />
				<MyButton type="submit">Login</MyButton>
			</form>

		</Container>
	)
}

export default Login