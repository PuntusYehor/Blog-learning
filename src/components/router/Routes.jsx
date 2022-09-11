import PostsPage from "../pages/PostsPage";
import About from "../pages/About";
import PostById from "../pages/PostById";
import Login from "../pages/Login";

export const privateRoutes = [
	{ exact: true, path: "/posts", component: <PostsPage /> },
	{ exact: true, path: "/about", component: <About /> },
	{ exact: true, path: "posts/:id", component: <PostById /> }
]

export const publicRoutes = [
	{ exact: false, path: "/login", component: <Login /> }
]