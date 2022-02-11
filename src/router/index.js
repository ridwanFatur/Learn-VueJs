import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Search from '@/views/Search.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		alias: ["/about-me", "/about-us"],
		component: About
	},
	{ path: '/home', redirect: '/' },
	{
		// /search/screens -> /search?q=screens
		path: '/search/:searchText',
		redirect: to => {
			// the function receives the target route as the argument
			// we return a redirect path/location here.
			return { path: '/search', query: { q: to.params.searchText } }
		},
	},
	{
		path: '/search',
		component: Search
	},
	{
		// will always redirect /users/123/posts to /users/123/profile
		path: '/users/:id/posts',
		redirect: to => {
			// the function receives the target route as the argument
			// a relative location doesn't start with `/`
			// or { path: 'profile'}
			return 'about'
		},
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
