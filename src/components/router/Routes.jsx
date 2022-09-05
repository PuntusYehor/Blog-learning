import PostsPage from "../pages/PostsPage";
import About from "../pages/About";
import PostById from "../pages/PostById";

export const routes = [
	{ exact: true, path: "/posts", component: <PostsPage /> },
	{ exact: true, path: "/about", component: <About /> },
	{ exact: true, path: "posts/:id", component: <PostById /> }
]