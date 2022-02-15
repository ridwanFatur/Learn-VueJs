import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import MyScreen from '@/views/MyScreen.vue'

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
		path: '/my-screen',
		component: MyScreen
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
